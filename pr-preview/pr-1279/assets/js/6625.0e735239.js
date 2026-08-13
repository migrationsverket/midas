"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6625],{

/***/ 76625
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m_: () => (/* binding */ $05a50f7d78b03ad9$export$28c660c63b792dea),
  k$: () => (/* binding */ $05a50f7d78b03ad9$export$8c610744efcf8a1d)
});

// UNUSED EXPORTS: TooltipContext, TooltipTriggerStateContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs + 1 modules
var useOverlayPosition = __webpack_require__(49902);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
var SSRProvider = __webpack_require__(51601);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/PortalProvider.mjs
var PortalProvider = __webpack_require__(14488);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./node_modules/react-aria/dist/private/overlays/useModal.mjs
/* unused harmony import specifier */ var $eXzCv$useContext;
/* unused harmony import specifier */ var $eXzCv$useEffect;





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



const $c07df45195231803$var$Context = /*#__PURE__*/ (0, react).createContext(null);
function $c07df45195231803$export$178405afcd8c5eb(props) {
    let { children: children } = props;
    let parent = (0, react.useContext)($c07df45195231803$var$Context);
    let [modalCount, setModalCount] = (0, react.useState)(0);
    let context = (0, react.useMemo)(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1);
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1);
                if (parent) parent.removeModal();
            }
        }), [
        parent,
        modalCount
    ]);
    return /*#__PURE__*/ (0, react).createElement($c07df45195231803$var$Context.Provider, {
        value: context
    }, children);
}
function $c07df45195231803$export$d9aaed4c3ece1bc0() {
    let context = (0, react.useContext)($c07df45195231803$var$Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : undefined
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $c07df45195231803$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps } = $c07df45195231803$export$d9aaed4c3ece1bc0();
    return /*#__PURE__*/ (0, react).createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    });
}
function $c07df45195231803$export$bf688221f59024e5(props) {
    return /*#__PURE__*/ (0, react).createElement($c07df45195231803$export$178405afcd8c5eb, null, /*#__PURE__*/ (0, react).createElement($c07df45195231803$var$OverlayContainerDOM, props));
}
function $c07df45195231803$export$b47c3594eab58386(props) {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, ...rest } = props;
    let { getContainer: getContainer } = (0, PortalProvider/* useUNSAFE_PortalContext */.gX)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    (0, react).useEffect(()=>{
        if (portalContainer?.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    if (!portalContainer) return null;
    let contents = /*#__PURE__*/ (0, react).createElement($c07df45195231803$export$bf688221f59024e5, rest);
    return /*#__PURE__*/ (0, react_dom).createPortal(contents, portalContainer);
}
function $c07df45195231803$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = (0, $eXzCv$useContext)($c07df45195231803$var$Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    (0, $eXzCv$useEffect)(()=>{
        if (options?.isDisabled || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options?.isDisabled
    ]);
    return {
        modalProps: {
            'data-ismodal': !options?.isDisabled
        }
    };
}



//# sourceMappingURL=useModal.mjs.map

// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(42946);
;// ./node_modules/react-stately/dist/private/tooltip/useTooltipTriggerState.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $3834487504f4fc00$var$TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design
const $3834487504f4fc00$var$TOOLTIP_COOLDOWN = 500;
let $3834487504f4fc00$var$tooltips = {};
let $3834487504f4fc00$var$tooltipId = 0;
let $3834487504f4fc00$var$globalWarmedUp = false;
let $3834487504f4fc00$var$globalWarmUpTimeout = null;
let $3834487504f4fc00$var$globalCooldownTimeout = null;
function $3834487504f4fc00$export$4d40659c25ecb50b(props = {}) {
    let { delay: delay = $3834487504f4fc00$var$TOOLTIP_DELAY, closeDelay: closeDelay = $3834487504f4fc00$var$TOOLTIP_COOLDOWN } = props;
    let { isOpen: isOpen, open: open, close: close } = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    // Whether the current open/close transition should skip its animation. Set when swapping
    // between tooltips during the global warmup period.
    let [shouldSkipAnimation, setIsInstant] = (0, react.useState)(false);
    let id = (0, react.useMemo)(()=>`${++$3834487504f4fc00$var$tooltipId}`, []);
    let closeTimeout = (0, react.useRef)(null);
    let closeCallback = (0, react.useRef)(close);
    let ensureTooltipEntry = ()=>{
        $3834487504f4fc00$var$tooltips[id] = hideTooltip;
    };
    let closeOpenTooltips = ()=>{
        for(let hideTooltipId in $3834487504f4fc00$var$tooltips)if (hideTooltipId !== id) {
            // Close other open tooltips instantly (no exit animation), since they are being
            // replaced by this one during the warmup period.
            $3834487504f4fc00$var$tooltips[hideTooltipId](true, true);
            delete $3834487504f4fc00$var$tooltips[hideTooltipId];
        }
    };
    let showTooltip = (instant)=>{
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
        closeOpenTooltips();
        ensureTooltipEntry();
        setIsInstant(!!instant);
        $3834487504f4fc00$var$globalWarmedUp = true;
        open();
        if ($3834487504f4fc00$var$globalWarmUpTimeout) {
            clearTimeout($3834487504f4fc00$var$globalWarmUpTimeout);
            $3834487504f4fc00$var$globalWarmUpTimeout = null;
        }
        if ($3834487504f4fc00$var$globalCooldownTimeout) {
            clearTimeout($3834487504f4fc00$var$globalCooldownTimeout);
            $3834487504f4fc00$var$globalCooldownTimeout = null;
        }
    };
    let hideTooltip = (immediate, instant)=>{
        setIsInstant(!!instant);
        if (immediate || closeDelay <= 0) {
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
            closeCallback.current();
        } else if (!closeTimeout.current) closeTimeout.current = setTimeout(()=>{
            closeTimeout.current = null;
            closeCallback.current();
        }, closeDelay);
        if ($3834487504f4fc00$var$globalWarmUpTimeout) {
            clearTimeout($3834487504f4fc00$var$globalWarmUpTimeout);
            $3834487504f4fc00$var$globalWarmUpTimeout = null;
        }
        if ($3834487504f4fc00$var$globalWarmedUp) {
            if ($3834487504f4fc00$var$globalCooldownTimeout) clearTimeout($3834487504f4fc00$var$globalCooldownTimeout);
            $3834487504f4fc00$var$globalCooldownTimeout = setTimeout(()=>{
                delete $3834487504f4fc00$var$tooltips[id];
                $3834487504f4fc00$var$globalCooldownTimeout = null;
                $3834487504f4fc00$var$globalWarmedUp = false;
            }, Math.max($3834487504f4fc00$var$TOOLTIP_COOLDOWN, closeDelay));
        }
    };
    let warmupTooltip = ()=>{
        closeOpenTooltips();
        ensureTooltipEntry();
        if (!isOpen && !$3834487504f4fc00$var$globalWarmedUp) {
            if ($3834487504f4fc00$var$globalWarmUpTimeout) clearTimeout($3834487504f4fc00$var$globalWarmUpTimeout);
            $3834487504f4fc00$var$globalWarmUpTimeout = setTimeout(()=>{
                $3834487504f4fc00$var$globalWarmUpTimeout = null;
                $3834487504f4fc00$var$globalWarmedUp = true;
                // First tooltip in a sequence: animate in.
                showTooltip(false);
            }, delay);
        } else if (!isOpen) // Already warmed up: appear instantly without an animation.
        showTooltip(true);
    };
    (0, react.useEffect)(()=>{
        closeCallback.current = close;
    }, [
        close
    ]);
    (0, react.useEffect)(()=>{
        return ()=>{
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            let tooltip = $3834487504f4fc00$var$tooltips[id];
            if (tooltip) delete $3834487504f4fc00$var$tooltips[id];
        };
    }, [
        id
    ]);
    return {
        isOpen: isOpen,
        shouldSkipAnimation: shouldSkipAnimation,
        open: (immediate)=>{
            if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
            else // Immediate opens (e.g. focus, or delay of 0) appear instantly without an animation
            // only if another tooltip is already warmed up.
            showTooltip($3834487504f4fc00$var$globalWarmedUp);
        },
        close: hideTooltip
    };
}



//# sourceMappingURL=useTooltipTriggerState.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/animation.mjs
var animation = __webpack_require__(26855);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(35692);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
;// ./node_modules/react-aria/dist/private/tooltip/useTooltipTrigger.mjs







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $85908aa8a35f0fac$export$a6da6c504e4bba8b(props, state, ref) {
    let { isDisabled: isDisabled, trigger: trigger, shouldCloseOnPress: shouldCloseOnPress = true } = props;
    let tooltipId = (0, useId/* useId */.Bi)();
    let isHovered = (0, react.useRef)(false);
    let isFocused = (0, react.useRef)(false);
    let handleShow = ()=>{
        if (isHovered.current || isFocused.current) state.open(isFocused.current);
    };
    let handleHide = (immediate)=>{
        if (!isHovered.current && !isFocused.current) state.close(immediate);
    };
    (0, react.useEffect)(()=>{
        let onKeyDown = (e)=>{
            if (ref && ref.current) // Escape after clicking something can give it keyboard focus
            // dismiss tooltip on esc key press
            {
                if (e.key === 'Escape') {
                    e.stopPropagation();
                    state.close(true);
                }
            }
        };
        if (state.isOpen) {
            document.addEventListener('keydown', onKeyDown, true);
            return ()=>{
                document.removeEventListener('keydown', onKeyDown, true);
            };
        }
    }, [
        ref,
        state
    ]);
    let onHoverStart = ()=>{
        if (trigger === 'focus') return;
        // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
        // interactions for example, hover will end. When hover is restored after that element disappears,
        // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
        // is the result of moving the mouse.
        if ((0, useFocusVisible/* getInteractionModality */.ME)() === 'pointer') isHovered.current = true;
        else isHovered.current = false;
        handleShow();
    };
    let onHoverEnd = ()=>{
        if (trigger === 'focus') return;
        // no matter how the trigger is left, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide();
    };
    let onPressStart = ()=>{
        // if shouldCloseOnPress is false, we should not close the tooltip
        if (!shouldCloseOnPress) return;
        // no matter how the trigger is pressed, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let onFocus = ()=>{
        let isVisible = (0, useFocusVisible/* isFocusVisible */.pP)();
        if (isVisible) {
            isFocused.current = true;
            handleShow();
        }
    };
    let onBlur = ()=>{
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let { hoverProps: hoverProps } = (0, useHover/* useHover */.M)({
        isDisabled: isDisabled,
        onHoverStart: onHoverStart,
        onHoverEnd: onHoverEnd
    });
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)({
        isDisabled: isDisabled,
        onFocus: onFocus,
        onBlur: onBlur
    }, ref);
    return {
        triggerProps: {
            'aria-describedby': state.isOpen ? tooltipId : undefined,
            // oxlint-disable-next-line react/react-compiler
            ...(0, mergeProps/* mergeProps */.v)(focusableProps, hoverProps, {
                onPointerDown: onPressStart,
                onKeyDown: onPressStart
            }),
            tabIndex: undefined
        },
        tooltipProps: {
            id: tooltipId
        }
    };
}



//# sourceMappingURL=useTooltipTrigger.mjs.map

;// ./node_modules/react-aria/dist/private/tooltip/useTooltip.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $8c383cffc84c9982$export$1c4b08e0eca38426(props, state) {
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let { hoverProps: hoverProps } = (0, useHover/* useHover */.M)({
        onHoverStart: ()=>state?.open(true),
        onHoverEnd: ()=>state?.close()
    });
    return {
        tooltipProps: (0, mergeProps/* mergeProps */.v)(domProps, hoverProps, {
            role: 'tooltip'
        })
    };
}



//# sourceMappingURL=useTooltip.mjs.map

;// ./node_modules/react-aria-components/dist/private/Tooltip.mjs












/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 










const $05a50f7d78b03ad9$export$7a7623236eec67fa = /*#__PURE__*/ (0, react.createContext)(null);
const $05a50f7d78b03ad9$export$39ae08fa83328b12 = /*#__PURE__*/ (0, react.createContext)(null);
function $05a50f7d78b03ad9$export$8c610744efcf8a1d(props) {
    let state = (0, $3834487504f4fc00$export$4d40659c25ecb50b)(props);
    let ref = (0, react.useRef)(null);
    let { triggerProps: triggerProps, tooltipProps: tooltipProps } = (0, $85908aa8a35f0fac$export$a6da6c504e4bba8b)(props, state, ref);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $05a50f7d78b03ad9$export$7a7623236eec67fa,
                state
            ],
            [
                $05a50f7d78b03ad9$export$39ae08fa83328b12,
                {
                    ...tooltipProps,
                    triggerRef: ref
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, useFocusable/* FocusableProvider */.M2), {
        ...triggerProps,
        ref: ref
    }, props.children));
}
const $05a50f7d78b03ad9$export$28c660c63b792dea = /*#__PURE__*/ (0, react.forwardRef)(function Tooltip({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $05a50f7d78b03ad9$export$39ae08fa83328b12);
    let contextState = (0, react.useContext)($05a50f7d78b03ad9$export$7a7623236eec67fa);
    let localState = (0, $3834487504f4fc00$export$4d40659c25ecb50b)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    // Skip the automatic exit animation when closing instantly (e.g. swapping between tooltips
    // during warmup). An explicitly provided isExiting prop still takes precedence.
    let exitAnimation = (0, animation/* useExitAnimation */.O)(ref, state.isOpen);
    let isExiting = props.isExiting || !state.shouldSkipAnimation && exitAnimation || false;
    if (!state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, react).createElement((0, $c07df45195231803$export$b47c3594eab58386), {
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ (0, react).createElement($05a50f7d78b03ad9$var$TooltipInner, {
        ...props,
        tooltipRef: ref,
        isExiting: isExiting
    }));
});
function $05a50f7d78b03ad9$var$TooltipInner(props) {
    let state = (0, react.useContext)($05a50f7d78b03ad9$export$7a7623236eec67fa);
    let arrowRef = (0, react.useRef)(null);
    let { overlayProps: overlayProps, arrowProps: arrowProps, placement: placement, triggerAnchorPoint: triggerAnchorPoint } = (0, useOverlayPosition/* useOverlayPosition */.v)({
        placement: props.placement || 'top',
        targetRef: props.triggerRef,
        overlayRef: props.tooltipRef,
        arrowRef: arrowRef,
        offset: props.offset,
        crossOffset: props.crossOffset,
        isOpen: state.isOpen,
        arrowBoundaryOffset: props.arrowBoundaryOffset,
        shouldFlip: props.shouldFlip,
        containerPadding: props.containerPadding,
        onClose: ()=>state.close(true)
    });
    // Skip the automatic entry animation when opening instantly (e.g. swapping between tooltips
    // during warmup). An explicitly provided isEntering prop still takes precedence.
    let enterAnimation = (0, animation/* useEnterAnimation */._)(props.tooltipRef, !!placement);
    let isEntering = props.isEntering || !state.shouldSkipAnimation && enterAnimation || false;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Tooltip',
        values: {
            placement: placement,
            isEntering: isEntering,
            isExiting: props.isExiting,
            state: state
        }
    });
    props = (0, mergeProps/* mergeProps */.v)(props, overlayProps);
    let { tooltipProps: tooltipProps } = (0, $8c383cffc84c9982$export$1c4b08e0eca38426)(props, state);
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    // oxlint-disable react/react-compiler
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, tooltipProps),
        ref: props.tooltipRef,
        style: {
            ...overlayProps.style,
            '--trigger-anchor-point': triggerAnchorPoint ? `${triggerAnchorPoint.x}px ${triggerAnchorPoint.y}px` : undefined,
            ...renderProps.style
        },
        "data-placement": placement ?? undefined,
        "data-entering": isEntering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, OverlayArrow/* OverlayArrowContext */.J).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, renderProps.children));
// oxlint-enable react/react-compiler
}



//# sourceMappingURL=Tooltip.mjs.map


/***/ }

}]);