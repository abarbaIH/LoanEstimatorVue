import Header from './components/Header.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, MIN, MAX, STEP, cantidad } from './App.vue';

function __VLS_template() {
    let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
    /* Components */
    let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
    let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
    let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
    let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
    /* Style Scoped */
    type __VLS_StyleScopedClasses = {};
    let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents!: {} &
        __VLS_WithComponent<'Header', typeof __VLS_localComponents, "Header", "Header", "Header">;
    ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
    __VLS_components.Header;
    // @ts-ignore
    [Header,];
    ({} as __VLS_IntrinsicElements).input;
    ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
    {
        const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        ({} as __VLS_IntrinsicElements).div;
        ({} as __VLS_IntrinsicElements).div;
        const __VLS_2 = __VLS_1({ ...{}, class: ("my-20 max-w-lg mx-auto bg-white shadow p-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("my-20 max-w-lg mx-auto bg-white shadow p-10"), });
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
        let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
        {
            let __VLS_5!: 'Header' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Header : (typeof __VLS_resolvedLocalAndGlobalComponents)['Header'];
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
            ({} as { Header: typeof __VLS_5; }).Header;
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
            let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
        }
        {
            const __VLS_10 = ({} as __VLS_IntrinsicElements)["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            ({} as __VLS_IntrinsicElements).div;
            ({} as __VLS_IntrinsicElements).div;
            const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
            let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
            {
                const __VLS_15 = ({} as __VLS_IntrinsicElements)["input"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                ({} as __VLS_IntrinsicElements).input;
                const __VLS_17 = __VLS_16({ ...{}, type: ("range"), class: ("w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"), min: ((__VLS_ctx.MIN)), max: ((__VLS_ctx.MAX)), step: ((__VLS_ctx.STEP)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, type: ("range"), class: ("w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"), min: ((__VLS_ctx.MIN)), max: ((__VLS_ctx.MAX)), step: ((__VLS_ctx.STEP)), });
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
                let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
                (__VLS_ctx.cantidad);
            }
            {
                const __VLS_20 = ({} as __VLS_IntrinsicElements)["p"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                ({} as __VLS_IntrinsicElements).p;
                ({} as __VLS_IntrinsicElements).p;
                const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
                let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
                (__VLS_ctx.cantidad);
                (__VLS_23.slots!).default;
            }
            (__VLS_13.slots!).default;
        }
        (__VLS_3.slots!).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots!: {};
    // @ts-ignore
    [MIN, MAX, STEP, MIN, MAX, STEP, cantidad, cantidad,];
    return __VLS_slots;
}
