// Cursor-reactive chromatic aberration for the cube faces (WebGL).
// A canvas is created lazily per face, fades in only while that face is hovered
// and removes itself when the effect has settled, so nothing renders when idle
// and nothing ever draws outside a face.
const VS = `
attribute vec2 p;
varying vec2 vUv;
void main(){ vUv = p * .5 + .5; gl_Position = vec4(p, 0., 1.); }`;

const FS = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uMouse;
uniform vec2 uVel;
uniform float uAspect;   // image width / height
uniform float uStrength;
uniform float uTime;

vec2 cover(vec2 uv){
  // emulate object-fit: cover for a square canvas
  if (uAspect > 1.) uv.x = .5 + (uv.x - .5) / uAspect;
  else uv.y = .5 + (uv.y - .5) * uAspect;
  return uv;
}

void main(){
  vec2 uv = vUv;
  vec2 toM = uv - uMouse;
  float d = length(toM);
  float fall = smoothstep(.55, 0., d) * uStrength;
  vec2 dir = d > .0001 ? toM / d : vec2(0.);

  // drag along the pointer velocity
  vec2 warp = uVel * fall * .3;

  vec2 split = (dir * .012 + uVel * .5) * fall;
  float r = texture2D(uTex, cover(uv + warp + split)).r;
  float g = texture2D(uTex, cover(uv + warp)).g;
  float b = texture2D(uTex, cover(uv + warp - split)).b;
  gl_FragColor = vec4(r, g, b, 1.);
}`;

function compile(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
}

export function useFaceShader(root, faceSelector) {
    if (
        window.matchMedia("(hover: none), (pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return () => {};
    }

    const instances = new Map(); // face -> instance
    const active = new Set();
    let raf = 0;
    let last = 0;

    function create(face) {
        const canvas = document.createElement("canvas");
        Object.assign(canvas.style, {
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            opacity: "0",
            pointerEvents: "none",
        });
        const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
        if (!gl) return null;

        const prog = gl.createProgram();
        gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VS));
        gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(prog, "p");
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

        face.append(canvas);
        return {
            face,
            canvas,
            gl,
            u: Object.fromEntries(
                ["uTex", "uMouse", "uVel", "uAspect", "uStrength", "uTime"].map((n) => [n, gl.getUniformLocation(prog, n)]),
            ),
            textures: new Map(),
            hover: false,
            strength: 0,
            target: { x: 0.5, y: 0.5 },
            mouse: { x: 0.5, y: 0.5 },
            shown: false,
            w: 0,
        };
    }

    function textureFor(inst, img) {
        let tex = inst.textures.get(img);
        if (tex) return tex;
        if (!img.complete || !img.naturalWidth) return null;
        const { gl } = inst;
        tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        inst.textures.set(img, tex);
        return tex;
    }

    function render(inst, now) {
        const { gl, canvas, face } = inst;
        const img = face.querySelector(`img[data-layer-index="${face.dataset.layer || 0}"]`);
        const tex = img && textureFor(inst, img);
        if (!tex) return false;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = Math.round(face.offsetWidth * dpr);
        if (w && w !== inst.w) {
            inst.w = w;
            canvas.width = w;
            canvas.height = w;
            gl.viewport(0, 0, w, w);
        }

        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.uniform1i(inst.u.uTex, 0);
        gl.uniform2f(inst.u.uMouse, inst.mouse.x, inst.mouse.y);
        gl.uniform2f(
            inst.u.uVel,
            Math.max(-0.06, Math.min(0.06, inst.target.x - inst.mouse.x)) * 0.5,
            Math.max(-0.06, Math.min(0.06, inst.target.y - inst.mouse.y)) * 0.5,
        );
        gl.uniform1f(inst.u.uAspect, img.naturalWidth / img.naturalHeight);
        gl.uniform1f(inst.u.uStrength, inst.strength);
        gl.uniform1f(inst.u.uTime, now / 1000);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        return true;
    }

    function frame(now) {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        if (pointer.inside) update();
        active.forEach((inst) => {
            inst.strength += ((inst.hover ? 1 : 0) - inst.strength) * Math.min(1, dt * (inst.hover ? 7 : 5));
            inst.mouse.x += (inst.target.x - inst.mouse.x) * Math.min(1, dt * 10);
            inst.mouse.y += (inst.target.y - inst.mouse.y) * Math.min(1, dt * 10);

            if (!inst.hover && inst.strength < 0.004) {
                inst.canvas.style.opacity = "0";
                inst.shown = false;
                active.delete(inst);
                return;
            }
            if (render(inst, now) && !inst.shown) {
                inst.shown = true;
                inst.canvas.style.opacity = "1"; // only after the first frame is drawn
            }
        });
        raf = active.size ? requestAnimationFrame(frame) : 0;
    }

    function activate(inst) {
        active.add(inst);
        if (!raf) {
            last = performance.now();
            raf = requestAnimationFrame(frame);
        }
    }

    /* ---- Geometric hit test --------------------------------------------
     * Browser hit-testing / offsetX is unreliable for faces inside a
     * perspective + preserve-3d cube at some orientations, so the pointer is
     * ray-cast against the faces' real 3D quads using their computed matrices.
     */
    const faces = Array.from(root.querySelectorAll(faceSelector));
    const dot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;
    const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
    const pt = (m, x, y, z) => {
        const r = m.transformPoint(new DOMPoint(x, y, z, 1));
        return { x: r.x, y: r.y, z: r.z };
    };
    const matrixOf = (el) => {
        const t = getComputedStyle(el).transform;
        return !t || t === "none" ? new DOMMatrix() : new DOMMatrix(t);
    };
    let faceMatrices = null;
    const getFaceMatrices = () =>
        (faceMatrices ??= faces.map((f) => matrixOf(f)));

    function hitTest(x, y) {
        if (!faces.length) return null;
        const cube = faces[0].parentElement;
        const stage = cube.parentElement;
        const persp = parseFloat(getComputedStyle(stage).perspective);
        if (!persp) return null;
        const rect = stage.getBoundingClientRect();
        const cam = { x: 0, y: 0, z: persp };
        const d = { x: x - (rect.left + rect.width / 2), y: y - (rect.top + rect.height / 2), z: -persp };
        const cubeM = matrixOf(cube);
        const fm = getFaceMatrices();

        let best = null;
        faces.forEach((face, i) => {
            const C = cubeM.multiply(fm[i]);
            const c = pt(C, 0, 0, 0);
            const A = sub(pt(C, 1, 0, 0), c);
            const B = sub(pt(C, 0, 1, 0), c);
            const N = sub(pt(C, 0, 0, 1), c);
            if (dot(N, sub(cam, c)) <= 0) return; // facing away
            const den = dot(N, d);
            if (Math.abs(den) < 1e-6) return;
            const t = dot(N, sub(c, cam)) / den;
            if (t <= 0) return;
            const P = { x: cam.x + t * d.x, y: cam.y + t * d.y, z: cam.z + t * d.z };
            const r = sub(P, c);
            const lx = dot(r, A) / dot(A, A);
            const ly = dot(r, B) / dot(B, B);
            const h = face.offsetWidth / 2;
            if (Math.abs(lx) > h || Math.abs(ly) > h) return;
            if (!best || P.z > best.z) {
                best = { face, z: P.z, u: lx / (2 * h) + 0.5, v: 1 - (ly / (2 * h) + 0.5) };
            }
        });
        return best;
    }

    const pointer = { x: 0, y: 0, inside: false };

    function update() {
        const hit = pointer.inside ? hitTest(pointer.x, pointer.y) : null;
        instances.forEach((inst) => {
            if (!hit || hit.face !== inst.face) inst.hover = false;
        });
        if (!hit) return;
        let inst = instances.get(hit.face);
        if (!inst) {
            inst = create(hit.face);
            if (!inst) return;
            instances.set(hit.face, inst);
        }
        inst.target.x = hit.u;
        inst.target.y = hit.v;
        if (!inst.hover) {
            inst.hover = true;
            inst.mouse.x = inst.target.x;
            inst.mouse.y = inst.target.y;
        }
        activate(inst);
    }

    function onMove(e) {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        pointer.inside = true;
        update();
    }

    function onLeave() {
        pointer.inside = false;
        instances.forEach((inst) => (inst.hover = false));
    }

    const onResize = () => (faceMatrices = null);

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(raf);
        active.clear();
        instances.forEach((inst) => {
            inst.gl.getExtension("WEBGL_lose_context")?.loseContext();
            inst.canvas.remove();
        });
        instances.clear();
    };
}
