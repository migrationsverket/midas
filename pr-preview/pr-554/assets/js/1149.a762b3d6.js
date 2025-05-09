"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1149],{

/***/ 83362:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ $f1ab8c75478c6f73$export$cf75428e0b9ed1ea),
/* harmony export */   Y: () => (/* binding */ $f1ab8c75478c6f73$export$3351871ee4b288b8)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48084);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83908);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6660);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




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


const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).forwardRef(({ children: children, ...props }, ref)=>{
    let isRegistered = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    let prevContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F));
    ref = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useObjectRef */ .U)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
    let context = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .v)(prevContext || {}, {
        ...props,
        ref: ref,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useSyncRef */ .w)(prevContext, ref);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isRegistered.current) {
            console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F).Provider, {
        value: context
    }, children);
});
function $f1ab8c75478c6f73$export$cf75428e0b9ed1ea({ children: children }) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F).Provider, {
        value: context
    }, children);
}



//# sourceMappingURL=PressResponder.module.js.map


/***/ }),

/***/ 75963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  hJ: () => (/* binding */ $337b884510726a0d$export$c6fdb837b070b4ff),
  Se: () => (/* binding */ $337b884510726a0d$export$14c98a7594375490)
});

// UNUSED EXPORTS: OverlayContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/overlays/dist/PortalProvider.mjs


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $96b38030c423d352$export$60d741e20e0aa309 = /*#__PURE__*/ (0, react.createContext)({});
function $96b38030c423d352$export$db995ea7163b4b67(props) {
    let { getContainer: getContainer } = props;
    let { getContainer: ctxGetContainer } = $96b38030c423d352$export$574e9b0fb070c3b0();
    return /*#__PURE__*/ (0, $7yuSY$react).createElement($96b38030c423d352$export$60d741e20e0aa309.Provider, {
        value: {
            getContainer: getContainer === null ? undefined : getContainer !== null && getContainer !== void 0 ? getContainer : ctxGetContainer
        }
    }, props.children);
}
function $96b38030c423d352$export$574e9b0fb070c3b0() {
    var _useContext;
    return (_useContext = (0, react.useContext)($96b38030c423d352$export$60d741e20e0aa309)) !== null && _useContext !== void 0 ? _useContext : {};
}



//# sourceMappingURL=PortalProvider.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/PressResponder.mjs
var PressResponder = __webpack_require__(83362);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 2 modules
var FocusScope = __webpack_require__(13560);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var SSRProvider = __webpack_require__(60415);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
;// ./node_modules/@react-aria/overlays/dist/Overlay.mjs








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






const $337b884510726a0d$export$a2200b96afd16271 = /*#__PURE__*/ (0, react).createContext(null);
function $337b884510726a0d$export$c6fdb837b070b4ff(props) {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, isExiting: isExiting } = props;
    let [contain, setContain] = (0, react.useState)(false);
    let contextValue = (0, react.useMemo)(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    let { getContainer: getContainer } = (0, $96b38030c423d352$export$574e9b0fb070c3b0)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, react).createElement((0, FocusScope/* FocusScope */.n1), {
        restoreFocus: true,
        contain: (props.shouldContainFocus || contain) && !isExiting
    }, contents);
    contents = /*#__PURE__*/ (0, react).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ (0, react).createElement((0, PressResponder/* ClearPressResponder */.N), null, contents));
    return /*#__PURE__*/ (0, react_dom).createPortal(contents, portalContainer);
}
function $337b884510726a0d$export$14c98a7594375490() {
    let ctx = (0, react.useContext)($337b884510726a0d$export$a2200b96afd16271);
    let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        setContain === null || setContain === void 0 ? void 0 : setContain(true);
    }, [
        setContain
    ]);
}



//# sourceMappingURL=Overlay.module.js.map


/***/ }),

/***/ 2269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ $5e3802645cc19319$export$1020fa7f77e17884),
/* harmony export */   h: () => (/* binding */ $5e3802645cc19319$export$1c3ebcada18427bf)
/* harmony export */ });
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
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $5e3802645cc19319$var$refCountMap = new WeakMap();
let $5e3802645cc19319$var$observerStack = [];
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute('role') !== 'row') return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if (node.contains(target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        var _refCountMap_get;
        let refCount = (_refCountMap_get = $5e3802645cc19319$var$refCountMap.get(node)) !== null && _refCountMap_get !== void 0 ? _refCountMap_get : 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute('aria-hidden') === 'true' && refCount === 0) return;
        if (refCount === 0) node.setAttribute('aria-hidden', 'true');
        hiddenNodes.add(node);
        $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList' || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target))) {
                for (let node of change.removedNodes)if (node instanceof Element) {
                    visibleNodes.delete(node);
                    hiddenNodes.delete(node);
                }
                for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === 'true' || node.dataset.reactAriaTopLayer === 'true')) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let observerWrapper = {
        visibleNodes: visibleNodes,
        hiddenNodes: hiddenNodes,
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    $5e3802645cc19319$var$observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $5e3802645cc19319$var$refCountMap.get(node);
            if (count == null) continue;
            if (count === 1) {
                node.removeAttribute('aria-hidden');
                $5e3802645cc19319$var$refCountMap.delete(node);
            } else $5e3802645cc19319$var$refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1]) {
            $5e3802645cc19319$var$observerStack.pop();
            if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].observe();
        } else $5e3802645cc19319$var$observerStack.splice($5e3802645cc19319$var$observerStack.indexOf(observerWrapper), 1);
    };
}
function $5e3802645cc19319$export$1020fa7f77e17884(element) {
    let observer = $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1];
    if (observer && !observer.visibleNodes.has(element)) {
        observer.visibleNodes.add(element);
        return ()=>{
            observer.visibleNodes.delete(element);
        };
    }
}



//# sourceMappingURL=ariaHideOutside.module.js.map


/***/ }),

/***/ 20445:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49953);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69202);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72166);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24514);


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
const $49c51c25361d4cd2$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $49c51c25361d4cd2$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled } = options;
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useLayoutEffect */ .N)(()=>{
        if (isDisabled) return;
        $49c51c25361d4cd2$var$preventScrollCount++;
        if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
            if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isIOS */ .un)()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
            else $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollStandard();
        }
        return ()=>{
            $49c51c25361d4cd2$var$preventScrollCount--;
            if ($49c51c25361d4cd2$var$preventScrollCount === 0) $49c51c25361d4cd2$var$restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $49c51c25361d4cd2$var$preventScrollStandard() {
    return (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .chain */ .c)($49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Set `overscroll-behavior: contain` on nested scrollable regions so they do not scroll the page when at
//    the top or bottom. Work around a bug where this does not work when the element does not actually overflow
//    by preventing default in a `touchmove` event.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let restoreScrollableStyles;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getScrollParent */ .m)(e.target, true);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead.
        if (scrollable instanceof HTMLElement && window.getComputedStyle(scrollable).overscrollBehavior === 'auto') restoreScrollableStyles = $49c51c25361d4cd2$var$setStyle(scrollable, 'overscrollBehavior', 'contain');
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // overscroll-behavior should prevent scroll chaining, but currently does not
        // if the element doesn't actually overflow. https://bugs.webkit.org/show_bug.cgi?id=243452
        // This checks that both the width and height do not overflow, otherwise we might
        // block horizontal scrolling too. In that case, adding `touch-action: pan-x` to
        // the element will prevent vertical page scrolling. We can't add that automatically
        // because it must be set before the touchstart event.
        if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
    };
    let onTouchEnd = ()=>{
        if (restoreScrollableStyles) restoreScrollableStyles();
    };
    let onFocus = (e)=>{
        let target = e.target;
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target)) {
            setupStyles();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view.
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($49c51c25361d4cd2$var$visualViewport) {
                    if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $49c51c25361d4cd2$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $49c51c25361d4cd2$var$visualViewport.addEventListener('resize', ()=>$49c51c25361d4cd2$var$scrollIntoView(target), {
                        once: true
                    });
                }
            });
        }
    };
    let restoreStyles = null;
    let setupStyles = ()=>{
        if (restoreStyles) return;
        let onWindowScroll = ()=>{
            // Last resort. If the window scrolled, scroll it back to the top.
            // It should always be at the top because the body will have a negative margin (see below).
            window.scrollTo(0, 0);
        };
        // Record the original scroll position so we can restore it.
        // Then apply a negative margin to the body to offset it by the scroll position. This will
        // enable us to scroll the window to the top, which is required for the rest of this to work.
        let scrollX = window.pageXOffset;
        let scrollY = window.pageYOffset;
        restoreStyles = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .chain */ .c)($49c51c25361d4cd2$var$addEvent(window, 'scroll', onWindowScroll), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'), $49c51c25361d4cd2$var$setStyle(document.body, 'marginTop', `-${scrollY}px`), ()=>{
            window.scrollTo(scrollX, scrollY);
        });
        // Scroll to the top. The negative margin on the body will make this appear the same.
        window.scrollTo(0, 0);
    };
    let removeEvents = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .chain */ .c)($49c51c25361d4cd2$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'focus', onFocus, true));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreScrollableStyles === null || restoreScrollableStyles === void 0 ? void 0 : restoreScrollableStyles();
        restoreStyles === null || restoreStyles === void 0 ? void 0 : restoreStyles();
        removeEvents();
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
    // internal function, so it's ok to ignore the difficult to fix type error
    // @ts-ignore
    target.addEventListener(event, handler, options);
    return ()=>{
        // @ts-ignore
        target.removeEventListener(event, handler, options);
    };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    let nextTarget = target;
    while(nextTarget && nextTarget !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getScrollParent */ .m)(nextTarget);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = nextTarget.getBoundingClientRect().top;
            if (targetTop > scrollableTop + nextTarget.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
        }
        nextTarget = scrollable.parentElement;
    }
}
function $49c51c25361d4cd2$var$willOpenKeyboard(target) {
    return target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}



//# sourceMappingURL=usePreventScroll.module.js.map


/***/ }),

/***/ 86484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lG: () => (/* binding */ $de32f1b87079253c$export$3ddf2d174ce01153),
  MV: () => (/* binding */ $de32f1b87079253c$export$8b93a07348a7730c),
  zM: () => (/* binding */ $de32f1b87079253c$export$2e1e1122cf0cba88),
  RG: () => (/* binding */ $de32f1b87079253c$export$d2f961adcb0afbe)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RSPContexts.mjs
var RSPContexts = __webpack_require__(32373);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Menu.mjs + 7 modules
var Menu = __webpack_require__(6484);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlayTrigger.mjs
var useOverlayTrigger = __webpack_require__(26940);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/focusSafely.mjs
var focusSafely = __webpack_require__(4175);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/Overlay.mjs + 1 modules
var Overlay = __webpack_require__(75963);
;// ./node_modules/@react-aria/dialog/dist/useDialog.mjs





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



function $40df3f8667284809$export$d55e7ee900f34e93(props, ref) {
    let { role: role = 'dialog' } = props;
    let titleId = (0, useId/* useSlotId */.X1)();
    titleId = props['aria-label'] ? undefined : titleId;
    let isRefocusing = (0, react.useRef)(false);
    // Focus the dialog itself on mount, unless a child element is already focused.
    (0, react.useEffect)(()=>{
        if (ref.current && !ref.current.contains(document.activeElement)) {
            (0, focusSafely/* focusSafely */.l)(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                if (document.activeElement === ref.current) {
                    isRefocusing.current = true;
                    if (ref.current) {
                        ref.current.blur();
                        (0, focusSafely/* focusSafely */.l)(ref.current);
                    }
                    isRefocusing.current = false;
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    (0, Overlay/* useOverlayFocusContain */.Se)();
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...(0, filterDOMProps/* filterDOMProps */.$)(props, {
                labelable: true
            }),
            role: role,
            tabIndex: -1,
            'aria-labelledby': props['aria-labelledby'] || titleId,
            // Prevent blur events from reaching useOverlay, which may cause
            // popovers to close. Since focus is contained within the dialog,
            // we don't want this to occur due to the above useEffect.
            onBlur: (e)=>{
                if (isRefocusing.current) e.stopPropagation();
            }
        },
        titleProps: {
            id: titleId
        }
    };
}



//# sourceMappingURL=useDialog.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/menu/dist/useMenuTriggerState.mjs
var useMenuTriggerState = __webpack_require__(55745);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/PressResponder.mjs
var PressResponder = __webpack_require__(83362);
;// ./node_modules/react-aria-components/dist/Dialog.mjs











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









const $de32f1b87079253c$export$8b93a07348a7730c = /*#__PURE__*/ (0, react.createContext)(null);
const $de32f1b87079253c$export$d2f961adcb0afbe = /*#__PURE__*/ (0, react.createContext)(null);
function $de32f1b87079253c$export$2e1e1122cf0cba88(props) {
    // Use useMenuTriggerState instead of useOverlayTriggerState in case a menu is embedded in the dialog.
    // This is needed to handle submenus.
    let state = (0, useMenuTriggerState/* useMenuTriggerState */.I)(props);
    let buttonRef = (0, react.useRef)(null);
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, useOverlayTrigger/* useOverlayTrigger */.o)({
        type: 'dialog'
    }, state, buttonRef);
    // Label dialog by the trigger as a fallback if there is no title slot.
    // This is done in RAC instead of hooks because otherwise we cannot distinguish
    // between context and props. Normally aria-labelledby overrides the title
    // but when sent by context we want the title to win.
    triggerProps.id = (0, useId/* useId */.Bi)();
    overlayProps['aria-labelledby'] = triggerProps.id;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $de32f1b87079253c$export$d2f961adcb0afbe,
                state
            ],
            [
                (0, Menu/* RootMenuTriggerStateContext */.gI),
                state
            ],
            [
                $de32f1b87079253c$export$8b93a07348a7730c,
                overlayProps
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    trigger: 'DialogTrigger',
                    triggerRef: buttonRef,
                    'aria-labelledby': overlayProps['aria-labelledby']
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, PressResponder/* PressResponder */.Y), {
        ...triggerProps,
        ref: buttonRef,
        isPressed: state.isOpen
    }, props.children));
}
const $de32f1b87079253c$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, react.forwardRef)(function Dialog(props, ref) {
    let originalAriaLabelledby = props['aria-labelledby'];
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $de32f1b87079253c$export$8b93a07348a7730c);
    let { dialogProps: dialogProps, titleProps: titleProps } = (0, $40df3f8667284809$export$d55e7ee900f34e93)({
        ...props,
        // Only pass aria-labelledby from props, not context.
        // Context is used as a fallback below.
        'aria-labelledby': originalAriaLabelledby
    }, ref);
    let state = (0, react.useContext)($de32f1b87079253c$export$d2f961adcb0afbe);
    if (!dialogProps['aria-label'] && !dialogProps['aria-labelledby']) {
        // If aria-labelledby exists on props, we know it came from context.
        // Use that as a fallback in case there is no title slot.
        if (props['aria-labelledby']) dialogProps['aria-labelledby'] = props['aria-labelledby'];
        else console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.');
    }
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        defaultClassName: 'react-aria-Dialog',
        className: props.className,
        style: props.style,
        children: props.children,
        values: {
            close: (state === null || state === void 0 ? void 0 : state.close) || (()=>{})
        }
    });
    return /*#__PURE__*/ (0, react).createElement("section", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...dialogProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, RSPContexts/* HeadingContext */.A3),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: {},
                        title: {
                            ...titleProps,
                            level: 2
                        }
                    }
                }
            ],
            [
                (0, Button/* ButtonContext */.k),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: {},
                        close: {
                            onPress: ()=>state === null || state === void 0 ? void 0 : state.close()
                        }
                    }
                }
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=Dialog.module.js.map


/***/ }),

/***/ 6484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W1: () => (/* binding */ $3674c52c6b3c5bce$export$d9b273488cd8ce6f),
  Dr: () => (/* binding */ $3674c52c6b3c5bce$export$2ce376c2cc3355c8),
  cQ: () => (/* binding */ $3674c52c6b3c5bce$export$27d2ad3c5815583e),
  gI: () => (/* binding */ $3674c52c6b3c5bce$export$795aec4671cbae19)
});

// UNUSED EXPORTS: MenuContext, MenuSection, MenuStateContext, SubmenuTrigger

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Header.mjs
var Header = __webpack_require__(83181);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/Keyboard.mjs



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

const $63df2425e2108aa8$export$744d98a3b8a94e1c = /*#__PURE__*/ (0, react.createContext)({});
const $63df2425e2108aa8$export$16e4d70cc375e707 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $3zqIJ$forwardRef)(function Keyboard(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $63df2425e2108aa8$export$744d98a3b8a94e1c);
    return /*#__PURE__*/ (0, $3zqIJ$react).createElement("kbd", {
        dir: "ltr",
        ...props,
        ref: ref
    });
})));



//# sourceMappingURL=Keyboard.module.js.map

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Separator.mjs
var Separator = __webpack_require__(31815);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Autocomplete.mjs
var Autocomplete = __webpack_require__(99350);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs + 35 modules
var useMenuTrigger = __webpack_require__(25263);
;// ./node_modules/@react-aria/menu/dist/utils.mjs
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $fc79756100351201$export$6f49b4016bfc8d56 = new WeakMap();



//# sourceMappingURL=utils.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableList.mjs
var useSelectableList = __webpack_require__(58579);
;// ./node_modules/@react-aria/menu/dist/useMenu.mjs




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


function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true, onKeyDown: onKeyDown, onKeyUp: onKeyUp, ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let { listProps: listProps } = (0, useSelectableList/* useSelectableList */.y)({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap,
        linkBehavior: 'override'
    });
    (0, $fc79756100351201$export$6f49b4016bfc8d56).set(state, {
        onClose: props.onClose,
        onAction: props.onAction,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus
    });
    return {
        menuProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp
        }, {
            role: 'menu',
            ...listProps,
            onKeyDown: (e)=>{
                var _listProps_onKeyDown;
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== 'Escape' || props.shouldUseVirtualFocus) (_listProps_onKeyDown = listProps.onKeyDown) === null || _listProps_onKeyDown === void 0 ? void 0 : _listProps_onKeyDown.call(listProps, e);
            }
        })
    };
}



//# sourceMappingURL=useMenu.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 2 modules
var FocusScope = __webpack_require__(13560);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
;// ./node_modules/@react-aria/menu/dist/useMenuSection.mjs


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
function $3e5eb2498db5b506$export$73f7a44322579622(props) {
    let { heading: heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, useId/* useId */.Bi)();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
            id: headingId,
            role: 'presentation'
        } : {},
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}



//# sourceMappingURL=useMenuSection.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getItemCount.mjs
var getItemCount = __webpack_require__(70732);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useKeyboard.mjs + 1 modules
var useKeyboard = __webpack_require__(63029);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocus.mjs
var useFocus = __webpack_require__(33424);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(33462);
;// ./node_modules/@react-aria/menu/dist/useMenuItem.mjs






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




function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    let { id: id, key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, 'aria-haspopup': hasPopup, onPressStart: pressStartProp, onPressUp: pressUpProp, onPress: pressProp, onPressChange: onPressChange, onPressEnd: onPressEnd, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur, selectionManager: selectionManager = state.selectionManager } = props;
    let isTrigger = !!hasPopup;
    let isTriggerExpanded = isTrigger && props['aria-expanded'] === 'true';
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : selectionManager.isDisabled(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : selectionManager.isSelected(key);
    let data = (0, $fc79756100351201$export$6f49b4016bfc8d56).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, openLink/* useRouter */.rd)();
    let performAction = (e)=>{
        var _item_props;
        if (isTrigger) return;
        if (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) item.props.onAction();
        else if (props.onAction) props.onAction(key);
        if (data.onAction) {
            // Must reassign to variable otherwise `this` binding gets messed up. Something to do with WeakMap.
            let onAction = data.onAction;
            onAction(key);
        }
        if (e.target instanceof HTMLAnchorElement && item) router.open(e.target, e, item.props.href, item.props.routerOptions);
    };
    let role = 'menuitem';
    if (!isTrigger) {
        if (selectionManager.selectionMode === 'single') role = 'menuitemradio';
        else if (selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    }
    let labelId = (0, useId/* useSlotId */.X1)();
    let descriptionId = (0, useId/* useSlotId */.X1)();
    let keyboardId = (0, useId/* useSlotId */.X1)();
    let ariaProps = {
        id: id,
        'aria-disabled': isDisabled || undefined,
        role: role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined,
        'aria-controls': props['aria-controls'],
        'aria-haspopup': hasPopup,
        'aria-expanded': props['aria-expanded']
    };
    if (selectionManager.selectionMode !== 'none' && !isTrigger) ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        ariaProps['aria-posinset'] = item === null || item === void 0 ? void 0 : item.index;
        ariaProps['aria-setsize'] = (0, getItemCount/* getItemCount */.v)(state.collection);
    }
    let onPressStart = (e)=>{
        if (e.pointerType === 'keyboard') performAction(e);
        pressStartProp === null || pressStartProp === void 0 ? void 0 : pressStartProp(e);
    };
    let maybeClose = ()=>{
        // Pressing a menu item should close by default in single selection mode but not multiple
        // selection mode, except if overridden by the closeOnSelect prop.
        if (!isTrigger && onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : selectionManager.selectionMode !== 'multiple' || selectionManager.isLink(key))) onClose();
    };
    let onPressUp = (e)=>{
        // If interacting with mouse, allow the user to mouse down on the trigger button,
        // drag, and release over an item (matching native behavior).
        if (e.pointerType === 'mouse') {
            performAction(e);
            maybeClose();
        }
        pressUpProp === null || pressUpProp === void 0 ? void 0 : pressUpProp(e);
    };
    let onPress = (e)=>{
        if (e.pointerType !== 'keyboard' && e.pointerType !== 'mouse') {
            performAction(e);
            maybeClose();
        }
        pressProp === null || pressProp === void 0 ? void 0 : pressProp(e);
    };
    let { itemProps: itemProps, isFocused: isFocused } = (0, useSelectableItem/* useSelectableItem */.p)({
        id: id,
        selectionManager: selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: 'none',
        shouldUseVirtualFocus: data.shouldUseVirtualFocus
    });
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* usePress */.d)({
        onPressStart: onPressStart,
        onPress: onPress,
        onPressUp: onPressUp,
        onPressChange: onPressChange,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps } = (0, useHover/* useHover */.M)({
        isDisabled: isDisabled,
        onHoverStart (e) {
            // Hovering over an already expanded sub dialog trigger should keep focus in the dialog.
            if (!(0, useFocusVisible/* isFocusVisible */.pP)() && !(isTriggerExpanded && hasPopup)) {
                selectionManager.setFocused(true);
                selectionManager.setFocusedKey(key);
            }
            hoverStartProp === null || hoverStartProp === void 0 ? void 0 : hoverStartProp(e);
        },
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        onKeyDown: (e)=>{
            // Ignore repeating events, which may have started on the menu trigger before moving
            // focus to the menu item. We want to wait for a second complete key press sequence.
            if (e.repeat) {
                e.continuePropagation();
                return;
            }
            switch(e.key){
                case ' ':
                    if (!isDisabled && selectionManager.selectionMode === 'none' && !isTrigger && closeOnSelect !== false && onClose) onClose();
                    break;
                case 'Enter':
                    // The Enter key should always close on select, except if overridden.
                    if (!isDisabled && closeOnSelect !== false && !isTrigger && onClose) onClose();
                    break;
                default:
                    if (!isTrigger) e.continuePropagation();
                    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
                    break;
            }
        },
        onKeyUp: onKeyUp
    });
    let { focusProps: focusProps } = (0, useFocus/* useFocus */.i)({
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item === null || item === void 0 ? void 0 : item.props);
    delete domProps.id;
    let linkProps = (0, openLink/* useLinkProps */._h)(item === null || item === void 0 ? void 0 : item.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, mergeProps/* mergeProps */.v)(domProps, linkProps, isTrigger ? {
                onFocus: itemProps.onFocus,
                'data-collection': itemProps['data-collection'],
                'data-key': itemProps['data-key']
            } : itemProps, pressProps, hoverProps, keyboardProps, focusProps, // Prevent DOM focus from moving on mouse down when using virtual focus or this is a submenu/subdialog trigger.
            data.shouldUseVirtualFocus || isTrigger ? {
                onMouseDown: (e)=>e.preventDefault()
            } : undefined),
            // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
            tabIndex: itemProps.tabIndex != null && isTriggerExpanded && !data.shouldUseVirtualFocus ? -1 : itemProps.tabIndex
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused: isFocused,
        isFocusVisible: isFocused && selectionManager.isFocused && (0, useFocusVisible/* isFocusVisible */.pP)() && !isTriggerExpanded,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
}



//# sourceMappingURL=useMenuItem.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-stately/menu/dist/useMenuTriggerState.mjs
var useMenuTriggerState = __webpack_require__(55745);
;// ./node_modules/@react-stately/tree/dist/TreeCollection.mjs
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
 */ class $05ca4cd7c4a5a999$export$863faf230ee2118a {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        var _node_prevKey;
        return node ? (_node_prevKey = node.prevKey) !== null && _node_prevKey !== void 0 ? _node_prevKey : null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        var _node_nextKey;
        return node ? (_node_nextKey = node.nextKey) !== null && _node_nextKey !== void 0 ? _node_nextKey : null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        var _this_keyMap_get;
        return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    constructor(nodes, { expandedKeys: expandedKeys } = {}){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.iterable = nodes;
        expandedKeys = expandedKeys || new Set();
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && (node.type === 'section' || expandedKeys.has(node.key))) for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        var _last_key;
        this.lastKey = (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
    }
}



//# sourceMappingURL=TreeCollection.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/selection/dist/useMultipleSelectionState.mjs
var useMultipleSelectionState = __webpack_require__(73837);
// EXTERNAL MODULE: ./node_modules/@react-stately/selection/dist/SelectionManager.mjs
var SelectionManager = __webpack_require__(60632);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/useCollection.mjs + 1 modules
var useCollection = __webpack_require__(13796);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
;// ./node_modules/@react-stately/tree/dist/useTreeState.mjs






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




function $875d6693e12af071$export$728d6ba534403756(props) {
    let { onExpandedChange: onExpandedChange } = props;
    let [expandedKeys, setExpandedKeys] = (0, useControlledState/* useControlledState */.P)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), onExpandedChange);
    let selectionState = (0, useMultipleSelectionState/* useMultipleSelectionState */.R)(props);
    let disabledKeys = (0, react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let tree = (0, useCollection/* useCollection */.G)(props, (0, react.useCallback)((nodes)=>new (0, $05ca4cd7c4a5a999$export$863faf230ee2118a)(nodes, {
            expandedKeys: expandedKeys
        }), [
        expandedKeys
    ]), null);
    // Reset focused key if that item is deleted from the collection.
    (0, react.useEffect)(()=>{
        if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tree,
        selectionState.focusedKey
    ]);
    let onToggle = (key)=>{
        setExpandedKeys($875d6693e12af071$var$toggleKey(expandedKeys, key));
    };
    return {
        collection: tree,
        expandedKeys: expandedKeys,
        disabledKeys: disabledKeys,
        toggleKey: onToggle,
        setExpandedKeys: setExpandedKeys,
        selectionManager: new (0, SelectionManager/* SelectionManager */.Y)(tree, selectionState)
    };
}
function $875d6693e12af071$var$toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
}



//# sourceMappingURL=useTreeState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(77366);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeRefs.mjs
var mergeRefs = __webpack_require__(17099);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/PressResponder.mjs
var PressResponder = __webpack_require__(83362);
;// ./node_modules/react-aria-components/dist/Menu.mjs

















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















const $3674c52c6b3c5bce$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$24aad8519b95b41b = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$795aec4671cbae19 = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$var$SelectionManagerContext = /*#__PURE__*/ (0, react.createContext)(null);
function $3674c52c6b3c5bce$export$27d2ad3c5815583e(props) {
    let state = (0, useMenuTriggerState/* useMenuTriggerState */.I)(props);
    let ref = (0, react.useRef)(null);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, useMenuTrigger/* useMenuTrigger */.V)({
        ...props,
        type: 'menu'
    }, state, ref);
    // Allows menu width to match button
    let [buttonWidth, setButtonWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (ref.current) setButtonWidth(ref.current.offsetWidth + 'px');
    }, [
        ref
    ]);
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: ref,
        onResize: onResize
    });
    let scrollRef = (0, react.useRef)(null);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $3674c52c6b3c5bce$export$c7e742effb1c51e2,
                {
                    ...menuProps,
                    ref: scrollRef
                }
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ],
            [
                $3674c52c6b3c5bce$export$795aec4671cbae19,
                state
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    trigger: 'MenuTrigger',
                    triggerRef: ref,
                    scrollRef: scrollRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': buttonWidth
                    },
                    'aria-labelledby': menuProps['aria-labelledby']
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, PressResponder/* PressResponder */.Y), {
        ...menuTriggerProps,
        ref: ref,
        isPressed: state.isOpen
    }, props.children));
}
const $3674c52c6b3c5bce$var$SubmenuTriggerContext = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$ecabc99eeffab7ca = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $kM2ZM$createBranchComponent)('submenutrigger', (props, ref, item)=>{
    let { CollectionBranch: CollectionBranch } = (0, $kM2ZM$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let state = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let rootMenuTriggerState = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$795aec4671cbae19);
    let submenuTriggerState = (0, $kM2ZM$useSubmenuTriggerState)({
        triggerKey: item.key
    }, rootMenuTriggerState);
    let submenuRef = (0, $kM2ZM$useRef)(null);
    let itemRef = (0, $kM2ZM$useObjectRef)(ref);
    let { parentMenuRef: parentMenuRef, shouldUseVirtualFocus: shouldUseVirtualFocus } = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$var$SubmenuTriggerContext);
    let { submenuTriggerProps: submenuTriggerProps, submenuProps: submenuProps, popoverProps: popoverProps } = (0, $kM2ZM$useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: submenuRef,
        delay: props.delay,
        shouldUseVirtualFocus: shouldUseVirtualFocus
    }, submenuTriggerState, itemRef);
    return /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $3674c52c6b3c5bce$var$MenuItemContext,
                {
                    ...submenuTriggerProps,
                    onAction: undefined,
                    ref: itemRef
                }
            ],
            [
                $3674c52c6b3c5bce$export$c7e742effb1c51e2,
                submenuProps
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                submenuTriggerState
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    ref: submenuRef,
                    trigger: 'SubmenuTrigger',
                    triggerRef: itemRef,
                    placement: 'end top',
                    'aria-labelledby': submenuProps['aria-labelledby'],
                    ...popoverProps
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: item
    }), props.children[1]);
}, (props)=>props.children[0])));
const $3674c52c6b3c5bce$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, react.forwardRef)(function Menu(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $3674c52c6b3c5bce$export$c7e742effb1c51e2);
    // Delay rendering the actual menu until we have the collection so that auto focus works properly.
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($3674c52c6b3c5bce$var$MenuInner, {
            props: props,
            collection: collection,
            menuRef: ref
        }));
});
function $3674c52c6b3c5bce$var$MenuInner({ props: props, collection: collection, menuRef: ref }) {
    let { filter: filter, collectionProps: autocompleteMenuProps, collectionRef: collectionRef } = (0, react.useContext)((0, Autocomplete/* UNSTABLE_InternalAutocompleteContext */._P)) || {};
    // Memoed so that useAutocomplete callback ref is properly only called once on mount and not everytime a rerender happens
    ref = (0, useObjectRef/* useObjectRef */.U)((0, react.useMemo)(()=>(0, mergeRefs/* mergeRefs */.P)(ref, collectionRef !== undefined ? collectionRef : null), [
        collectionRef,
        ref
    ]));
    let filteredCollection = (0, react.useMemo)(()=>filter ? collection.UNSTABLE_filter(filter) : collection, [
        collection,
        filter
    ]);
    let state = (0, $875d6693e12af071$export$728d6ba534403756)({
        ...props,
        collection: filteredCollection,
        children: undefined
    });
    let triggerState = (0, react.useContext)($3674c52c6b3c5bce$export$795aec4671cbae19);
    let { isVirtualized: isVirtualized, CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { menuProps: menuProps } = (0, $d5336fe17ce95402$export$38eaa17faae8f579)({
        ...props,
        ...autocompleteMenuProps,
        isVirtualized: isVirtualized,
        onClose: props.onClose || (triggerState === null || triggerState === void 0 ? void 0 : triggerState.close)
    }, state, ref);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        defaultClassName: 'react-aria-Menu',
        className: props.className,
        style: props.style,
        values: {
            isEmpty: state.collection.size === 0
        }
    });
    let emptyState = null;
    if (state.collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, react).createElement("div", {
        role: "menuitem",
        style: {
            display: 'contents'
        }
    }, props.renderEmptyState());
    return /*#__PURE__*/ (0, react).createElement((0, FocusScope/* FocusScope */.n1), null, /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...menuProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-empty": state.collection.size === 0 || undefined,
        onScroll: props.onScroll
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $3674c52c6b3c5bce$export$24aad8519b95b41b,
                state
            ],
            [
                (0, Separator/* SeparatorContext */.$),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, Collection/* SectionContext */.P2),
                {
                    name: 'MenuSection',
                    render: $3674c52c6b3c5bce$var$MenuSectionInner
                }
            ],
            [
                $3674c52c6b3c5bce$var$SubmenuTriggerContext,
                {
                    parentMenuRef: ref,
                    shouldUseVirtualFocus: autocompleteMenuProps === null || autocompleteMenuProps === void 0 ? void 0 : autocompleteMenuProps.shouldUseVirtualFocus
                }
            ],
            [
                $3674c52c6b3c5bce$var$MenuItemContext,
                null
            ],
            [
                (0, Autocomplete/* UNSTABLE_InternalAutocompleteContext */._P),
                null
            ],
            [
                $3674c52c6b3c5bce$var$SelectionManagerContext,
                state.selectionManager
            ],
            /* Ensure root MenuTriggerState is defined, in case Menu is rendered outside a MenuTrigger. */ /* We assume the context can never change between defined and undefined. */ /* eslint-disable-next-line react-hooks/rules-of-hooks */ [
                $3674c52c6b3c5bce$export$795aec4671cbae19,
                triggerState !== null && triggerState !== void 0 ? triggerState : (0, useMenuTriggerState/* useMenuTriggerState */.I)({})
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey),
        scrollRef: ref
    })), emptyState));
}
// A subclass of SelectionManager that forwards focus-related properties to the parent,
// but has its own local selection state.
class $3674c52c6b3c5bce$var$GroupSelectionManager extends (0, SelectionManager/* SelectionManager */.Y) {
    get focusedKey() {
        return this.parent.focusedKey;
    }
    get isFocused() {
        return this.parent.isFocused;
    }
    setFocusedKey(key, childFocusStrategy) {
        return this.parent.setFocusedKey(key, childFocusStrategy);
    }
    setFocused(isFocused) {
        this.parent.setFocused(isFocused);
    }
    get childFocusStrategy() {
        return this.parent.childFocusStrategy;
    }
    constructor(parent, state){
        super(parent.collection, state);
        this.parent = parent;
    }
}
function $3674c52c6b3c5bce$var$MenuSectionInner(props, ref, section, className = 'react-aria-MenuSection') {
    var _section_props, _section_props1;
    let state = (0, react.useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let { CollectionBranch: CollectionBranch } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let [headingRef, heading] = (0, utils/* useSlot */._E)();
    var _section_props_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $3e5eb2498db5b506$export$73f7a44322579622)({
        heading: heading,
        'aria-label': (_section_props_arialabel = section.props['aria-label']) !== null && _section_props_arialabel !== void 0 ? _section_props_arialabel : undefined
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        defaultClassName: className,
        className: (_section_props = section.props) === null || _section_props === void 0 ? void 0 : _section_props.className,
        style: (_section_props1 = section.props) === null || _section_props1 === void 0 ? void 0 : _section_props1.style,
        values: {}
    });
    let parent = (0, react.useContext)($3674c52c6b3c5bce$var$SelectionManagerContext);
    let selectionState = (0, useMultipleSelectionState/* useMultipleSelectionState */.R)(props);
    let manager = props.selectionMode != null ? new $3674c52c6b3c5bce$var$GroupSelectionManager(parent, selectionState) : parent;
    return /*#__PURE__*/ (0, react).createElement("section", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...groupProps,
        ...renderProps,
        ref: ref
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Header/* HeaderContext */.B),
                {
                    ...headingProps,
                    ref: headingRef
                }
            ],
            [
                $3674c52c6b3c5bce$var$SelectionManagerContext,
                manager
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section
    })));
}
const $3674c52c6b3c5bce$export$4b1545b4f2016d26 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $kM2ZM$createBranchComponent)('section', $3674c52c6b3c5bce$var$MenuSectionInner)));
const $3674c52c6b3c5bce$var$MenuItemContext = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$2ce376c2cc3355c8 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)('item', function MenuItem(props, forwardedRef, item) {
    var _useSlottedContext;
    [props, forwardedRef] = (0, utils/* useContextProps */.JT)(props, forwardedRef, $3674c52c6b3c5bce$var$MenuItemContext);
    let id = (_useSlottedContext = (0, utils/* useSlottedContext */.CC)($3674c52c6b3c5bce$var$MenuItemContext)) === null || _useSlottedContext === void 0 ? void 0 : _useSlottedContext.id;
    let state = (0, react.useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let selectionManager = (0, react.useContext)($3674c52c6b3c5bce$var$SelectionManagerContext);
    let { menuItemProps: menuItemProps, labelProps: labelProps, descriptionProps: descriptionProps, keyboardShortcutProps: keyboardShortcutProps, ...states } = (0, $a2e5df62f93c7633$export$9d32628fc2aea7da)({
        ...props,
        id: id,
        key: item.key,
        selectionManager: selectionManager
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: states.isDisabled
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-MenuItem',
        values: {
            ...states,
            isHovered: isHovered,
            isFocusVisible: states.isFocusVisible,
            selectionMode: selectionManager.selectionMode,
            selectionBehavior: selectionManager.selectionBehavior,
            hasSubmenu: !!props['aria-haspopup'],
            isOpen: props['aria-expanded'] === 'true'
        }
    });
    let ElementType = props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ...(0, mergeProps/* mergeProps */.v)(menuItemProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-selected": states.isSelected || undefined,
        "data-selection-mode": selectionManager.selectionMode === 'none' ? undefined : selectionManager.selectionMode,
        "data-has-submenu": !!props['aria-haspopup'] || undefined,
        "data-open": props['aria-expanded'] === 'true' || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: labelProps,
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ],
            [
                (0, $63df2425e2108aa8$export$744d98a3b8a94e1c),
                keyboardShortcutProps
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=Menu.module.js.map


/***/ }),

/***/ 21416:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ $07b14b47974efb58$export$5b6b19405a83ff9d),
  n: () => (/* binding */ $07b14b47974efb58$export$9b9a0cd73afb7ca4)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/ariaHideOutside.mjs
var ariaHideOutside = __webpack_require__(2269);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlayPosition.mjs + 1 modules
var useOverlayPosition = __webpack_require__(31364);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlay.mjs + 1 modules
var useOverlay = __webpack_require__(90757);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/usePreventScroll.mjs
var usePreventScroll = __webpack_require__(20445);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
;// ./node_modules/@react-aria/overlays/dist/usePopover.mjs






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




function $f2f8a6077418541e$export$542a6fd13ac93354(props, state) {
    let { triggerRef: triggerRef, popoverRef: popoverRef, groupRef: groupRef, isNonModal: isNonModal, isKeyboardDismissDisabled: isKeyboardDismissDisabled, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    let isSubmenu = otherProps['trigger'] === 'SubmenuTrigger';
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, useOverlay/* useOverlay */.e)({
        isOpen: state.isOpen,
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal || isSubmenu,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, groupRef !== null && groupRef !== void 0 ? groupRef : popoverRef);
    let { overlayProps: positionProps, arrowProps: arrowProps, placement: placement } = (0, useOverlayPosition/* useOverlayPosition */.v)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: isNonModal && !isSubmenu ? state.close : null
    });
    (0, usePreventScroll/* usePreventScroll */.H)({
        isDisabled: isNonModal || !state.isOpen
    });
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (state.isOpen && popoverRef.current) {
            var _groupRef_current, _groupRef_current1;
            if (isNonModal) return (0, ariaHideOutside/* keepVisible */.O)((_groupRef_current = groupRef === null || groupRef === void 0 ? void 0 : groupRef.current) !== null && _groupRef_current !== void 0 ? _groupRef_current : popoverRef.current);
            else return (0, ariaHideOutside/* ariaHideOutside */.h)([
                (_groupRef_current1 = groupRef === null || groupRef === void 0 ? void 0 : groupRef.current) !== null && _groupRef_current1 !== void 0 ? _groupRef_current1 : popoverRef.current
            ]);
        }
    }, [
        isNonModal,
        state.isOpen,
        popoverRef,
        groupRef
    ]);
    return {
        popoverProps: (0, mergeProps/* mergeProps */.v)(overlayProps, positionProps),
        arrowProps: arrowProps,
        underlayProps: underlayProps,
        placement: placement
    };
}



//# sourceMappingURL=usePopover.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/DismissButton.mjs + 35 modules
var DismissButton = __webpack_require__(91821);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/Overlay.mjs + 1 modules
var Overlay = __webpack_require__(75963);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/animation.mjs
var animation = __webpack_require__(13807);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/focusSafely.mjs
var focusSafely = __webpack_require__(4175);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/Hidden.mjs
var Hidden = __webpack_require__(75127);
;// ./node_modules/react-aria-components/dist/Popover.mjs










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








const $07b14b47974efb58$export$9b9a0cd73afb7ca4 = /*#__PURE__*/ (0, react.createContext)(null);
// Stores a ref for the portal container for a group of popovers (e.g. submenus).
const $07b14b47974efb58$var$PopoverGroupContext = /*#__PURE__*/ (0, react.createContext)(null);
const $07b14b47974efb58$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, react.forwardRef)(function Popover(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $07b14b47974efb58$export$9b9a0cd73afb7ca4);
    let contextState = (0, react.useContext)((0, Dialog/* OverlayTriggerStateContext */.RG));
    let localState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = (0, animation/* useExitAnimation */.O)(ref, state.isOpen) || props.isExiting || false;
    let isHidden = (0, Hidden/* useIsHidden */.m_)();
    let { direction: direction } = (0, context/* useLocale */.Y)();
    // If we are in a hidden tree, we still need to preserve our children.
    if (isHidden) {
        let children = props.children;
        if (typeof children === 'function') children = children({
            trigger: props.trigger || null,
            placement: 'bottom',
            isEntering: false,
            isExiting: false,
            defaultChildren: null
        });
        return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, children);
    }
    if (state && !state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, react).createElement($07b14b47974efb58$var$PopoverInner, {
        ...props,
        triggerRef: props.triggerRef,
        state: state,
        popoverRef: ref,
        isExiting: isExiting,
        dir: direction
    });
});
function $07b14b47974efb58$var$PopoverInner({ state: state, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }) {
    // Calculate the arrow size internally (and remove props.arrowSize from PopoverProps)
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, react.useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, react.useState)(0);
    let containerRef = (0, react.useRef)(null);
    let groupCtx = (0, react.useContext)($07b14b47974efb58$var$PopoverGroupContext);
    let isSubPopover = groupCtx && props.trigger === 'SubmenuTrigger';
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    var _props_offset;
    let { popoverProps: popoverProps, underlayProps: underlayProps, arrowProps: arrowProps, placement: placement } = (0, $f2f8a6077418541e$export$542a6fd13ac93354)({
        ...props,
        offset: (_props_offset = props.offset) !== null && _props_offset !== void 0 ? _props_offset : 8,
        arrowSize: arrowWidth,
        // If this is a submenu/subdialog, use the root popover's container 
        // to detect outside interaction and add aria-hidden.
        groupRef: isSubPopover ? groupCtx : containerRef
    }, state);
    let ref = props.popoverRef;
    let isEntering = (0, animation/* useEnterAnimation */._)(ref, !!placement) || props.isEntering || false;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Popover',
        values: {
            trigger: props.trigger || null,
            placement: placement,
            isEntering: isEntering,
            isExiting: isExiting
        }
    });
    // Automatically render Popover with role=dialog except when isNonModal is true,
    // or a dialog is already nested inside the popover.
    let shouldBeDialog = !props.isNonModal || props.trigger === 'SubmenuTrigger';
    let [isDialog, setDialog] = (0, react.useState)(false);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (ref.current) setDialog(shouldBeDialog && !ref.current.querySelector('[role=dialog]'));
    }, [
        ref,
        shouldBeDialog
    ]);
    // Focus the popover itself on mount, unless a child element is already focused.
    (0, react.useEffect)(()=>{
        if (isDialog && ref.current && !ref.current.contains(document.activeElement)) (0, focusSafely/* focusSafely */.l)(ref.current);
    }, [
        isDialog,
        ref
    ]);
    let style = {
        ...popoverProps.style,
        ...renderProps.style
    };
    let overlay = /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props), popoverProps),
        ...renderProps,
        role: isDialog ? 'dialog' : undefined,
        tabIndex: isDialog ? -1 : undefined,
        "aria-label": props['aria-label'],
        "aria-labelledby": props['aria-labelledby'],
        ref: ref,
        slot: props.slot || undefined,
        style: style,
        dir: props.dir,
        "data-trigger": props.trigger,
        "data-placement": placement,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined
    }, !props.isNonModal && /*#__PURE__*/ (0, react).createElement((0, DismissButton/* DismissButton */.R), {
        onDismiss: state.close
    }), /*#__PURE__*/ (0, react).createElement((0, OverlayArrow/* OverlayArrowContext */.J).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, renderProps.children), /*#__PURE__*/ (0, react).createElement((0, DismissButton/* DismissButton */.R), {
        onDismiss: state.close
    }));
    // If this is a root popover, render an extra div to act as the portal container for submenus/subdialogs.
    if (!isSubPopover) return /*#__PURE__*/ (0, react).createElement((0, Overlay/* Overlay */.hJ), {
        ...props,
        shouldContainFocus: isDialog,
        isExiting: isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, !props.isNonModal && state.isOpen && /*#__PURE__*/ (0, react).createElement("div", {
        "data-testid": "underlay",
        ...underlayProps,
        style: {
            position: 'fixed',
            inset: 0
        }
    }), /*#__PURE__*/ (0, react).createElement("div", {
        ref: containerRef,
        style: {
            display: 'contents'
        }
    }, /*#__PURE__*/ (0, react).createElement($07b14b47974efb58$var$PopoverGroupContext.Provider, {
        value: containerRef
    }, overlay)));
    var _ref;
    // Submenus/subdialogs are mounted into the root popover's container.
    return /*#__PURE__*/ (0, react).createElement((0, Overlay/* Overlay */.hJ), {
        ...props,
        shouldContainFocus: isDialog,
        isExiting: isExiting,
        portalContainer: (_ref = UNSTABLE_portalContainer !== null && UNSTABLE_portalContainer !== void 0 ? UNSTABLE_portalContainer : groupCtx === null || groupCtx === void 0 ? void 0 : groupCtx.current) !== null && _ref !== void 0 ? _ref : undefined
    }, overlay);
}



//# sourceMappingURL=Popover.module.js.map


/***/ })

}]);