import SplitType from "split-type";

type SplitBinding =
    | string
    | {
          splitBy?: string;
          [key: string]: unknown;
      };

type SplitOptions = ConstructorParameters<typeof SplitType>[1];

const splitInstances = new WeakMap<HTMLElement, SplitType>();

const normalizeOptions = (value: SplitBinding = {}) => {
    if (typeof value === "string") {
        return { types: value } as SplitOptions;
    }

    return {
        ...value,
        types: String(value.splitBy || value.types || "words, chars"),
    } as SplitOptions;
};

const createSplit = (element: HTMLElement, value?: SplitBinding) => {
    splitInstances.get(element)?.revert();
    const instance = new SplitType(element, normalizeOptions(value));
    splitInstances.set(element, instance);
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("split-text", {
        getSSRProps() {
            return {};
        },
        mounted(el, binding) {
            if (import.meta.client) {
                createSplit(el as HTMLElement, binding.value);
            }
        },
        updated(el, binding) {
            if (import.meta.client) {
                createSplit(el as HTMLElement, binding.value);
            }
        },
        beforeUnmount(el) {
            if (import.meta.client) {
                splitInstances.get(el as HTMLElement)?.revert();
                splitInstances.delete(el as HTMLElement);
            }
        },
    });
});
