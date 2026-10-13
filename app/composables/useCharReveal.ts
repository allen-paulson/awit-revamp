import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";

type Targets = gsap.TweenTarget;

interface IntroOptions {
  /** Timeline position to insert at (default: end of timeline). */
  position?: gsap.Position;
  duration?: number;
  ease?: string;
  /** Delay before the first line starts animating. */
  startDelay?: number;
  /** Delay between consecutive chars within a line. */
  charStagger?: number;
  /** Delay between the start of one line and the next. */
  lineStagger?: number;
  /** Initial scale of each char (1 = no scale effect). */
  fromScale?: number;
}

interface ScrollOptions extends Omit<IntroOptions, "position"> {
  /** Element whose scroll position triggers the reveal. */
  trigger: Element | string;
  start?: string;
  id?: string;
}

/**
 * Shared char-reveal animation for headings split with `v-split-text`.
 * Chars slide up from below their (overflow-hidden) line while fading in.
 */
export const useCharReveal = () => {
  gsap.registerPlugin(ScrollTrigger, CustomEase);
  CustomEase.create("intro", "M0,0 C0.109,0.641 0.1,1 1,1"); // cubic-bezier(.109,.641,.1,1)

  /**
   * Intro reveal: every char slides up from below its line mask while fading
   * in. Char n of a line starts `startDelay + n * charStagger` after the
   * timeline position, and each later line is offset by `lineStagger` so
   * lines run almost in parallel. Pass e.g. `.main-heading .char`.
   */
  const introReveal = (
    tl: gsap.core.Timeline,
    targets: Targets,
    {
      position,
      duration = 0.55,
      ease = "intro",
      startDelay = 0.12,
      charStagger = 0.02,
      lineStagger = 0.07,
      fromScale = 1,
    }: IntroOptions = {},
  ) => {
    // Chars are grouped per `.line`, so headings need `lines` in v-split-text.
    const chars = (Array.isArray(targets) ? targets : [targets]).flatMap((t) =>
      gsap.utils.toArray<HTMLElement>(t),
    );

    // Index of each char within its split line, and of the line itself.
    const lines = new Map<Element, HTMLElement[]>();
    for (const el of chars) {
      const line = el.closest(".line") ?? el.parentElement ?? el;
      lines.set(line, [...(lines.get(line) ?? []), el]);
    }
    const info = new Map<HTMLElement, { lineIdx: number; idx: number }>();
    [...lines.values()].forEach((group, lineIdx) =>
      group.forEach((el, idx) => info.set(el, { lineIdx, idx })),
    );

    return tl.fromTo(
      chars,
      { yPercent: 110, opacity: 0, scale: fromScale, visibility: "visible" },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration,
        ease,
        delay: (_i: number, el: HTMLElement) => {
          const { lineIdx, idx } = info.get(el)!;
          return startDelay + idx * charStagger + lineIdx * lineStagger;
        },
      },
      position,
    );
  };

  /**
   * Scroll reveal: the same animation as `introReveal`, played once when
   * `trigger` enters the viewport. Use for section headings.
   */
  const scrollReveal = (
    targets: Targets,
    { trigger, start = "top 90%", id, ...options }: ScrollOptions,
  ) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger, start, once: true, id },
    });
    return introReveal(tl, targets, options);
  };

  return { introReveal, scrollReveal };
};
