"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1485],{

/***/ 32708
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Trash2)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("trash-2", __iconNode);


//# sourceMappingURL=trash-2.js.map


/***/ },

/***/ 48697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("x", __iconNode);


//# sourceMappingURL=x.js.map


/***/ },

/***/ 82345
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aF: () => (/* binding */ $8b8d26808cb8cb53$export$2b77a92f1a5ad772),
  mH: () => (/* binding */ $8b8d26808cb8cb53$export$8948f78d83984c69)
});

// UNUSED EXPORTS: ModalContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/ariaHideOutside.mjs
var ariaHideOutside = __webpack_require__(61251);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/useOverlay.mjs + 1 modules
var useOverlay = __webpack_require__(71314);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/Overlay.mjs
var Overlay = __webpack_require__(33463);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/usePreventScroll.mjs
var usePreventScroll = __webpack_require__(47347);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/overlays/useModalOverlay.mjs







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





function $5698867baeb53f4e$export$dbc0f175b25fb0fb(props, state, ref) {
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, useOverlay/* useOverlay */.e)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    (0, usePreventScroll/* usePreventScroll */.H)({
        isDisabled: !state.isOpen
    });
    (0, Overlay/* useOverlayFocusContain */.Se)();
    (0, react.useEffect)(()=>{
        if (state.isOpen && ref.current) return (0, ariaHideOutside/* ariaHideOutside */.h)([
            ref.current
        ], {
            shouldUseInert: true
        });
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: (0, mergeProps/* mergeProps */.v)(overlayProps),
        underlayProps: underlayProps
    };
}



//# sourceMappingURL=useModalOverlay.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/DismissButton.mjs + 35 modules
var DismissButton = __webpack_require__(85328);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/isScrollable.mjs
var isScrollable = __webpack_require__(38848);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeRefs.mjs
var mergeRefs = __webpack_require__(24211);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(42946);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/animation.mjs
var animation = __webpack_require__(26855);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
var SSRProvider = __webpack_require__(51601);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useObjectRef.mjs
var useObjectRef = __webpack_require__(80716);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/platform.mjs
var platform = __webpack_require__(87082);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/keyboard.mjs
var keyboard = __webpack_require__(40208);
;// ./node_modules/react-aria/dist/private/utils/useViewportSize.mjs






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




let $6066a2c586ade9e1$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
function $6066a2c586ade9e1$export$d699905dd57c73ca() {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let [size, setSize] = (0, react.useState)(()=>isSSR ? {
            width: 0,
            height: 0
        } : $6066a2c586ade9e1$var$getViewportSize());
    (0, react.useEffect)(()=>{
        let updateSize = (newSize)=>{
            setSize((size)=>{
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            // Ignore updates when zoomed.
            if ($6066a2c586ade9e1$var$visualViewport && $6066a2c586ade9e1$var$visualViewport.scale > 1) return;
            updateSize($6066a2c586ade9e1$var$getViewportSize());
        };
        // When closing the keyboard, WebKit on iOS does not fire the visual viewport resize event until the animation is complete.
        // We can anticipate this and resize early by handling the blur event and using the layout size.
        let frame;
        let onBlur = (e)=>{
            if ($6066a2c586ade9e1$var$visualViewport && $6066a2c586ade9e1$var$visualViewport.scale > 1) return;
            if ((0, keyboard/* willOpenKeyboard */.o)((0, DOMFunctions/* getEventTarget */.wt)(e))) // Wait one frame to see if a new element gets focused.
            frame = requestAnimationFrame(()=>{
                let activeElement = (0, DOMFunctions/* getActiveElement */.bq)();
                if (!activeElement || !(0, keyboard/* willOpenKeyboard */.o)(activeElement)) updateSize({
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                });
            });
        };
        updateSize($6066a2c586ade9e1$var$getViewportSize());
        if ((0, platform/* isIOS */.un)() && (0, platform/* isWebKit */.Tc)()) window.addEventListener('blur', onBlur, true);
        if (!$6066a2c586ade9e1$var$visualViewport) window.addEventListener('resize', onResize);
        else $6066a2c586ade9e1$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            cancelAnimationFrame(frame);
            if ((0, platform/* isIOS */.un)() && (0, platform/* isWebKit */.Tc)()) window.removeEventListener('blur', onBlur, true);
            if (!$6066a2c586ade9e1$var$visualViewport) window.removeEventListener('resize', onResize);
            else $6066a2c586ade9e1$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size;
}
/**
 * Get the viewport size without the scrollbar.
 */ function $6066a2c586ade9e1$var$getViewportSize() {
    return {
        // Multiply by the visualViewport scale to get the "natural" size, unaffected by pinch zooming.
        width: $6066a2c586ade9e1$var$visualViewport ? // the visual viewport and the document element to ensure that the scrollbar width is always excluded.
        // See: https://github.com/w3c/csswg-drafts/issues/8099
        Math.min($6066a2c586ade9e1$var$visualViewport.width * $6066a2c586ade9e1$var$visualViewport.scale, document.documentElement.clientWidth) : document.documentElement.clientWidth,
        height: $6066a2c586ade9e1$var$visualViewport ? $6066a2c586ade9e1$var$visualViewport.height * $6066a2c586ade9e1$var$visualViewport.scale : document.documentElement.clientHeight
    };
}



//# sourceMappingURL=useViewportSize.mjs.map

;// ./node_modules/react-aria-components/dist/private/Modal.mjs















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













const $8b8d26808cb8cb53$export$ab57792b9b6974a6 = /*#__PURE__*/ (0, react.createContext)(null);
const $8b8d26808cb8cb53$var$InternalModalContext = /*#__PURE__*/ (0, react.createContext)(null);
const $8b8d26808cb8cb53$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, react.forwardRef)(function Modal(props, ref) {
    let ctx = (0, react.useContext)($8b8d26808cb8cb53$var$InternalModalContext);
    if (ctx) {
        if (false) // removed by dead control flow
{}
        return /*#__PURE__*/ (0, react).createElement($8b8d26808cb8cb53$var$ModalContent, {
            ...props,
            modalRef: ref
        }, props.children);
    }
    let { isDismissable: isDismissable, isKeyboardDismissDisabled: isKeyboardDismissDisabled, isOpen: isOpen, defaultOpen: defaultOpen, onOpenChange: onOpenChange, children: children, isEntering: isEntering, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    return /*#__PURE__*/ (0, react).createElement($8b8d26808cb8cb53$export$8948f78d83984c69, {
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        isEntering: isEntering,
        isExiting: isExiting,
        UNSTABLE_portalContainer: UNSTABLE_portalContainer,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, /*#__PURE__*/ (0, react).createElement($8b8d26808cb8cb53$var$ModalContent, {
        ...otherProps,
        modalRef: ref
    }, children));
});
function $8b8d26808cb8cb53$var$ModalOverlayWithForwardRef(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $8b8d26808cb8cb53$export$ab57792b9b6974a6);
    let contextState = (0, react.useContext)((0, Dialog/* OverlayTriggerStateContext */.RG));
    let localState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    if (state === contextState) {
        if (false) // removed by dead control flow
{}
    }
    let objectRef = (0, useObjectRef/* useObjectRef */.U)(ref);
    let modalRef = (0, react.useRef)(null);
    let isOverlayExiting = (0, animation/* useExitAnimation */.O)(objectRef, state.isOpen);
    let isModalExiting = (0, animation/* useExitAnimation */.O)(modalRef, state.isOpen);
    let isExiting = isOverlayExiting || isModalExiting || props.isExiting || false;
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    if (!state.isOpen && !isExiting || isSSR) return null;
    return /*#__PURE__*/ (0, react).createElement($8b8d26808cb8cb53$var$ModalOverlayInner, {
        ...props,
        state: state,
        isExiting: isExiting,
        overlayRef: objectRef,
        modalRef: modalRef
    });
}
const $8b8d26808cb8cb53$export$8948f78d83984c69 = /*#__PURE__*/ (0, react.forwardRef)($8b8d26808cb8cb53$var$ModalOverlayWithForwardRef);
function $8b8d26808cb8cb53$var$ModalOverlayInner({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }) {
    let modalRef = props.modalRef;
    let { state: state } = props;
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $5698867baeb53f4e$export$dbc0f175b25fb0fb)(props, state, modalRef);
    let entering = (0, animation/* useEnterAnimation */._)(props.overlayRef) || props.isEntering || false;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-ModalOverlay',
        values: {
            isEntering: entering,
            isExiting: props.isExiting,
            state: state
        }
    });
    let viewport = (0, $6066a2c586ade9e1$export$d699905dd57c73ca)();
    let pageWidth = undefined;
    let pageHeight = undefined;
    if (typeof document !== 'undefined') {
        let scrollingElement = (0, isScrollable/* isScrollable */.o)(document.body) ? document.body : document.scrollingElement || document.documentElement;
        // Prevent Firefox from adding scrollbars when the page has a fractional width/height.
        let fractionalWidthDifference = scrollingElement.getBoundingClientRect().width % 1;
        let fractionalHeightDifference = scrollingElement.getBoundingClientRect().height % 1;
        pageWidth = scrollingElement.scrollWidth - fractionalWidthDifference;
        pageHeight = scrollingElement.scrollHeight - fractionalHeightDifference;
    }
    let style = {
        ...renderProps.style,
        '--visual-viewport-width': viewport.width + 'px',
        '--visual-viewport-height': viewport.height + 'px',
        '--page-width': pageWidth !== undefined ? pageWidth + 'px' : undefined,
        '--page-height': pageHeight !== undefined ? pageHeight + 'px' : undefined
    };
    // oxlint-disable react/react-compiler
    return /*#__PURE__*/ (0, react).createElement((0, Overlay/* Overlay */.hJ), {
        isExiting: props.isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props, {
            global: true
        }), underlayProps),
        ...renderProps,
        style: style,
        ref: props.overlayRef,
        "data-entering": entering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $8b8d26808cb8cb53$var$InternalModalContext,
                {
                    modalProps: modalProps,
                    modalRef: modalRef,
                    isExiting: props.isExiting,
                    isDismissable: props.isDismissable
                }
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ]
        ]
    }, renderProps.children)));
// oxlint-enable react/react-compiler
}
function $8b8d26808cb8cb53$var$ModalContent(props) {
    let { modalProps: modalProps, modalRef: modalRef, isExiting: isExiting, isDismissable: isDismissable } = (0, react.useContext)($8b8d26808cb8cb53$var$InternalModalContext);
    let state = (0, react.useContext)((0, Dialog/* OverlayTriggerStateContext */.RG));
    let mergedRefs = (0, react.useMemo)(()=>(0, mergeRefs/* mergeRefs */.P)(props.modalRef, modalRef), [
        props.modalRef,
        modalRef
    ]);
    let ref = (0, useObjectRef/* useObjectRef */.U)(mergedRefs);
    let entering = (0, animation/* useEnterAnimation */._)(ref);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Modal',
        values: {
            isEntering: entering,
            isExiting: isExiting,
            state: state
        }
    });
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props, {
            global: true
        }), modalProps),
        ...renderProps,
        ref: ref,
        "data-entering": entering || undefined,
        "data-exiting": isExiting || undefined
    }, isDismissable && /*#__PURE__*/ (0, react).createElement((0, DismissButton/* DismissButton */.R), {
        onDismiss: state.close
    }), renderProps.children);
}



//# sourceMappingURL=Modal.mjs.map


/***/ },

/***/ 77140
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ $4c14b02d5228be26$export$ed2feabec4a533f4)
/* harmony export */ });
/* unused harmony export useSlot */
/* harmony import */ var _useId_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19633);
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




/*
 * Copyright 2026 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $4c14b02d5228be26$export$9d4c57ee4c6ffdd8(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState);
    let hasRun = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $4c14b02d5228be26$export$ed2feabec4a533f4(initialState = true) {
    let id = (0, _useId_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)();
    let [ref, hasSlot] = $4c14b02d5228be26$export$9d4c57ee4c6ffdd8(initialState);
    return {
        id: hasSlot ? id : undefined,
        ref: ref
    };
}



//# sourceMappingURL=useSlot.mjs.map


/***/ }

}]);