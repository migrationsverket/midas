"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8721],{

/***/ 1243
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ $ae20dd8cbca75726$export$d6daf82dcd84e87c)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/utils.mjs
var utils = __webpack_require__(4345);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useTypeSelect.mjs
var useTypeSelect = __webpack_require__(18399);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/keyboard.mjs
var keyboard = __webpack_require__(3704);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/isFocusable.mjs + 1 modules
var isFocusable = __webpack_require__(72912);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
var focusWithoutScrolling = __webpack_require__(32268);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEvent.mjs
var useEvent = __webpack_require__(17460);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/scrollIntoView.mjs + 1 modules
var scrollIntoView = __webpack_require__(6868);
;// ./node_modules/@react-aria/utils/dist/constants.mjs
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
 */ // Custom event names for updating the autocomplete's aria-activedecendant.
const $5671b20cf9b562b2$export$447a38995de2c711 = 'react-aria-clear-focus';
const $5671b20cf9b562b2$export$831c820ad60f9d12 = 'react-aria-focus';



//# sourceMappingURL=constants.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/utils/dist/useUpdateLayoutEffect.mjs



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

function $ca9b37712f007381$export$72ef708ab07251f1(effect, dependencies) {
    const isInitialMount = (0, react.useRef)(true);
    const lastDeps = (0, react.useRef)(null);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



//# sourceMappingURL=useUpdateLayoutEffect.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(99672);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(49336);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/virtualFocus.mjs
var virtualFocus = __webpack_require__(55799);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/focusSafely.mjs
var focusSafely = __webpack_require__(4175);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./node_modules/@react-aria/selection/dist/useSelectableCollection.mjs









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







function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
    let { selectionManager: manager, keyboardDelegate: delegate, ref: ref, autoFocus: autoFocus = false, shouldFocusWrap: shouldFocusWrap = false, disallowEmptySelection: disallowEmptySelection = false, disallowSelectAll: disallowSelectAll = false, escapeKeyBehavior: escapeKeyBehavior = 'clearSelection', selectOnFocus: selectOnFocus = manager.selectionBehavior === 'replace', disallowTypeAhead: disallowTypeAhead = false, shouldUseVirtualFocus: shouldUseVirtualFocus, allowsTabNavigation: allowsTabNavigation = false, isVirtualized: isVirtualized, scrollRef: // If no scrollRef is provided, assume the collection ref is the scrollable region
    scrollRef = ref, linkBehavior: linkBehavior = 'action' } = options;
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let router = (0, openLink/* useRouter */.rd)();
    let onKeyDown = (e)=>{
        var _ref_current;
        // Prevent option + tab from doing anything since it doesn't move focus to the cells, only buttons/checkboxes
        if (e.altKey && e.key === 'Tab') e.preventDefault();
        // Keyboard events bubble through portals. Don't handle keyboard events
        // for elements outside the collection (e.g. menus).
        if (!((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(e.target))) return;
        const navigateToKey = (key, childFocus)=>{
            if (key != null) {
                if (manager.isLink(key) && linkBehavior === 'selection' && selectOnFocus && !(0, utils/* isNonContiguousSelectionModifier */.N9)(e)) {
                    // Set focused key and re-render synchronously to bring item into view if needed.
                    (0, react_dom.flushSync)(()=>{
                        manager.setFocusedKey(key, childFocus);
                    });
                    let item = (0, utils/* getItemElement */.au)(ref, key);
                    let itemProps = manager.getItemProps(key);
                    if (item) router.open(item, e, itemProps.href, itemProps.routerOptions);
                    return;
                }
                manager.setFocusedKey(key, childFocus);
                if (manager.isLink(key) && linkBehavior === 'override') return;
                if (e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(key);
                else if (selectOnFocus && !(0, utils/* isNonContiguousSelectionModifier */.N9)(e)) manager.replaceSelection(key);
            }
        };
        switch(e.key){
            case 'ArrowDown':
                if (delegate.getKeyBelow) {
                    var _delegate_getKeyBelow, _delegate_getFirstKey, _delegate_getFirstKey1;
                    let nextKey = manager.focusedKey != null ? (_delegate_getKeyBelow = delegate.getKeyBelow) === null || _delegate_getKeyBelow === void 0 ? void 0 : _delegate_getKeyBelow.call(delegate, manager.focusedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate, manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey);
                    }
                }
                break;
            case 'ArrowUp':
                if (delegate.getKeyAbove) {
                    var _delegate_getKeyAbove, _delegate_getLastKey, _delegate_getLastKey1;
                    let nextKey = manager.focusedKey != null ? (_delegate_getKeyAbove = delegate.getKeyAbove) === null || _delegate_getKeyAbove === void 0 ? void 0 : _delegate_getKeyAbove.call(delegate, manager.focusedKey) : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getLastKey1 = delegate.getLastKey) === null || _delegate_getLastKey1 === void 0 ? void 0 : _delegate_getLastKey1.call(delegate, manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey);
                    }
                }
                break;
            case 'ArrowLeft':
                if (delegate.getKeyLeftOf) {
                    var _delegate_getKeyLeftOf, _delegate_getFirstKey2, _delegate_getLastKey2;
                    let nextKey = manager.focusedKey != null ? (_delegate_getKeyLeftOf = delegate.getKeyLeftOf) === null || _delegate_getKeyLeftOf === void 0 ? void 0 : _delegate_getKeyLeftOf.call(delegate, manager.focusedKey) : null;
                    if (nextKey == null && shouldFocusWrap) nextKey = direction === 'rtl' ? (_delegate_getFirstKey2 = delegate.getFirstKey) === null || _delegate_getFirstKey2 === void 0 ? void 0 : _delegate_getFirstKey2.call(delegate, manager.focusedKey) : (_delegate_getLastKey2 = delegate.getLastKey) === null || _delegate_getLastKey2 === void 0 ? void 0 : _delegate_getLastKey2.call(delegate, manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey, direction === 'rtl' ? 'first' : 'last');
                    }
                }
                break;
            case 'ArrowRight':
                if (delegate.getKeyRightOf) {
                    var _delegate_getKeyRightOf, _delegate_getLastKey3, _delegate_getFirstKey3;
                    let nextKey = manager.focusedKey != null ? (_delegate_getKeyRightOf = delegate.getKeyRightOf) === null || _delegate_getKeyRightOf === void 0 ? void 0 : _delegate_getKeyRightOf.call(delegate, manager.focusedKey) : null;
                    if (nextKey == null && shouldFocusWrap) nextKey = direction === 'rtl' ? (_delegate_getLastKey3 = delegate.getLastKey) === null || _delegate_getLastKey3 === void 0 ? void 0 : _delegate_getLastKey3.call(delegate, manager.focusedKey) : (_delegate_getFirstKey3 = delegate.getFirstKey) === null || _delegate_getFirstKey3 === void 0 ? void 0 : _delegate_getFirstKey3.call(delegate, manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey, direction === 'rtl' ? 'last' : 'first');
                    }
                }
                break;
            case 'Home':
                if (delegate.getFirstKey) {
                    if (manager.focusedKey === null && e.shiftKey) return;
                    e.preventDefault();
                    let firstKey = delegate.getFirstKey(manager.focusedKey, (0, keyboard/* isCtrlKeyPressed */.B)(e));
                    manager.setFocusedKey(firstKey);
                    if (firstKey != null) {
                        if ((0, keyboard/* isCtrlKeyPressed */.B)(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(firstKey);
                        else if (selectOnFocus) manager.replaceSelection(firstKey);
                    }
                }
                break;
            case 'End':
                if (delegate.getLastKey) {
                    if (manager.focusedKey === null && e.shiftKey) return;
                    e.preventDefault();
                    let lastKey = delegate.getLastKey(manager.focusedKey, (0, keyboard/* isCtrlKeyPressed */.B)(e));
                    manager.setFocusedKey(lastKey);
                    if (lastKey != null) {
                        if ((0, keyboard/* isCtrlKeyPressed */.B)(e) && e.shiftKey && manager.selectionMode === 'multiple') manager.extendSelection(lastKey);
                        else if (selectOnFocus) manager.replaceSelection(lastKey);
                    }
                }
                break;
            case 'PageDown':
                if (delegate.getKeyPageBelow && manager.focusedKey != null) {
                    let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey);
                    }
                }
                break;
            case 'PageUp':
                if (delegate.getKeyPageAbove && manager.focusedKey != null) {
                    let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
                    if (nextKey != null) {
                        e.preventDefault();
                        navigateToKey(nextKey);
                    }
                }
                break;
            case 'a':
                if ((0, keyboard/* isCtrlKeyPressed */.B)(e) && manager.selectionMode === 'multiple' && disallowSelectAll !== true) {
                    e.preventDefault();
                    manager.selectAll();
                }
                break;
            case 'Escape':
                if (escapeKeyBehavior === 'clearSelection' && !disallowEmptySelection && manager.selectedKeys.size !== 0) {
                    e.stopPropagation();
                    e.preventDefault();
                    manager.clearSelection();
                }
                break;
            case 'Tab':
                if (!allowsTabNavigation) {
                    // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
                    // However, collections should be treated as a single tab stop, with arrow key navigation internally.
                    // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
                    // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
                    // in the collection, so that the browser default behavior will apply starting from that element
                    // rather than the currently focused one.
                    if (e.shiftKey) ref.current.focus();
                    else {
                        let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current, {
                            tabbable: true
                        });
                        let next = undefined;
                        let last;
                        do {
                            last = walker.lastChild();
                            if (last) next = last;
                        }while (last);
                        // If the active element is NOT tabbable but is contained by an element that IS tabbable (aka the cell), the browser will actually move focus to
                        // the containing element. We need to special case this so that tab will move focus out of the grid instead of looping between
                        // focusing the containing cell and back to the non-tabbable child element
                        if (next && (!next.contains(document.activeElement) || document.activeElement && !(0, isFocusable/* isTabbable */.A)(document.activeElement))) (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(next);
                    }
                    break;
                }
        }
    };
    // Store the scroll position so we can restore it later.
    /// TODO: should this happen all the time??
    let scrollPos = (0, react.useRef)({
        top: 0,
        left: 0
    });
    (0, useEvent/* useEvent */._)(scrollRef, 'scroll', isVirtualized ? undefined : ()=>{
        var _scrollRef_current, _scrollRef_current1;
        var _scrollRef_current_scrollTop, _scrollRef_current_scrollLeft;
        scrollPos.current = {
            top: (_scrollRef_current_scrollTop = (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollTop) !== null && _scrollRef_current_scrollTop !== void 0 ? _scrollRef_current_scrollTop : 0,
            left: (_scrollRef_current_scrollLeft = (_scrollRef_current1 = scrollRef.current) === null || _scrollRef_current1 === void 0 ? void 0 : _scrollRef_current1.scrollLeft) !== null && _scrollRef_current_scrollLeft !== void 0 ? _scrollRef_current_scrollLeft : 0
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!e.currentTarget.contains(e.target)) return;
        manager.setFocused(true);
        if (manager.focusedKey == null) {
            var _delegate_getLastKey, _delegate_getFirstKey;
            let navigateToKey = (key)=>{
                if (key != null) {
                    manager.setFocusedKey(key);
                    if (selectOnFocus && !manager.isSelected(key)) manager.replaceSelection(key);
                }
            };
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            var _manager_lastSelectedKey, _manager_firstSelectedKey;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToKey((_manager_lastSelectedKey = manager.lastSelectedKey) !== null && _manager_lastSelectedKey !== void 0 ? _manager_lastSelectedKey : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate));
            else navigateToKey((_manager_firstSelectedKey = manager.firstSelectedKey) !== null && _manager_firstSelectedKey !== void 0 ? _manager_firstSelectedKey : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate));
        } else if (!isVirtualized && scrollRef.current) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
        }
        if (manager.focusedKey != null && scrollRef.current) {
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = (0, utils/* getItemElement */.au)(ref, manager.focusedKey);
            if (element instanceof HTMLElement) {
                // This prevents a flash of focus on the first/last element in the collection, or the collection itself.
                if (!element.contains(document.activeElement) && !shouldUseVirtualFocus) (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(element);
                let modality = (0, useFocusVisible/* getInteractionModality */.ME)();
                if (modality === 'keyboard') (0, scrollIntoView/* scrollIntoViewport */.o)(element, {
                    containingElement: ref.current
                });
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
    };
    // Ref to track whether the first item in the collection should be automatically focused. Specifically used for autocomplete when user types
    // to focus the first key AFTER the collection updates.
    // TODO: potentially expand the usage of this
    let shouldVirtualFocusFirst = (0, react.useRef)(false);
    // Add event listeners for custom virtual events. These handle updating the focused key in response to various keyboard events
    // at the autocomplete level
    // TODO: fix type later
    (0, useEvent/* useEvent */._)(ref, (0, $5671b20cf9b562b2$export$831c820ad60f9d12), !shouldUseVirtualFocus ? undefined : (e)=>{
        let { detail: detail } = e;
        e.stopPropagation();
        manager.setFocused(true);
        // If the user is typing forwards, autofocus the first option in the list.
        if ((detail === null || detail === void 0 ? void 0 : detail.focusStrategy) === 'first') shouldVirtualFocusFirst.current = true;
    });
    // update active descendant
    (0, $ca9b37712f007381$export$72ef708ab07251f1)(()=>{
        if (shouldVirtualFocusFirst.current) {
            var _delegate_getFirstKey;
            var _delegate_getFirstKey1;
            let keyToFocus = (_delegate_getFirstKey1 = (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate)) !== null && _delegate_getFirstKey1 !== void 0 ? _delegate_getFirstKey1 : null;
            // If no focusable items exist in the list, make sure to clear any activedescendant that may still exist and move focus back to
            // the original active element (e.g. the autocomplete input)
            if (keyToFocus == null) {
                let previousActiveElement = (0, DOMFunctions/* getActiveElement */.bq)();
                (0, virtualFocus/* moveVirtualFocus */.vX)(ref.current);
                (0, virtualFocus/* dispatchVirtualFocus */.Ig)(previousActiveElement, null);
                // If there wasn't a focusable key but the collection had items, then that means we aren't in an intermediate load state and all keys are disabled.
                // Reset shouldVirtualFocusFirst so that we don't erronously autofocus an item when the collection is filtered again.
                if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
            } else {
                manager.setFocusedKey(keyToFocus);
                // Only set shouldVirtualFocusFirst to false if we've successfully set the first key as the focused key
                // If there wasn't a key to focus, we might be in a temporary loading state so we'll want to still focus the first key
                // after the collection updates after load
                shouldVirtualFocusFirst.current = false;
            }
        }
    }, [
        manager.collection
    ]);
    // reset focus first flag
    (0, $ca9b37712f007381$export$72ef708ab07251f1)(()=>{
        // If user causes the focused key to change in any other way, clear shouldVirtualFocusFirst so we don't
        // accidentally move focus from under them. Skip this if the collection was empty because we might be in a load
        // state and will still want to focus the first item after load
        if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
    }, [
        manager.focusedKey
    ]);
    (0, useEvent/* useEvent */._)(ref, (0, $5671b20cf9b562b2$export$447a38995de2c711), !shouldUseVirtualFocus ? undefined : (e)=>{
        var _e_detail;
        e.stopPropagation();
        manager.setFocused(false);
        if ((_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : _e_detail.clearFocusKey) manager.setFocusedKey(null);
    });
    const autoFocusRef = (0, react.useRef)(autoFocus);
    const didAutoFocusRef = (0, react.useRef)(false);
    (0, react.useEffect)(()=>{
        if (autoFocusRef.current) {
            var _delegate_getFirstKey, _delegate_getLastKey;
            let focusedKey = null;
            var _delegate_getFirstKey1;
            // Check focus strategy to determine which item to focus
            if (autoFocus === 'first') focusedKey = (_delegate_getFirstKey1 = (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate)) !== null && _delegate_getFirstKey1 !== void 0 ? _delegate_getFirstKey1 : null;
            var _delegate_getLastKey1;
            if (autoFocus === 'last') focusedKey = (_delegate_getLastKey1 = (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate)) !== null && _delegate_getLastKey1 !== void 0 ? _delegate_getLastKey1 : null;
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) {
                for (let key of selectedKeys)if (manager.canSelectItem(key)) {
                    focusedKey = key;
                    break;
                }
            }
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus && ref.current) (0, focusSafely/* focusSafely */.l)(ref.current);
            // Wait until the collection has items to autofocus.
            if (manager.collection.size > 0) {
                autoFocusRef.current = false;
                didAutoFocusRef.current = true;
            }
        }
    });
    // Scroll the focused element into view when the focusedKey changes.
    let lastFocusedKey = (0, react.useRef)(manager.focusedKey);
    let raf = (0, react.useRef)(null);
    (0, react.useEffect)(()=>{
        if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || didAutoFocusRef.current) && scrollRef.current && ref.current) {
            let modality = (0, useFocusVisible/* getInteractionModality */.ME)();
            let element = (0, utils/* getItemElement */.au)(ref, manager.focusedKey);
            if (!(element instanceof HTMLElement)) // If item element wasn't found, return early (don't update autoFocusRef and lastFocusedKey).
            // The collection may initially be empty (e.g. virtualizer), so wait until the element exists.
            return;
            if (modality === 'keyboard' || didAutoFocusRef.current) {
                if (raf.current) cancelAnimationFrame(raf.current);
                raf.current = requestAnimationFrame(()=>{
                    if (scrollRef.current) {
                        (0, scrollIntoView/* scrollIntoView */.R)(scrollRef.current, element);
                        // Avoid scroll in iOS VO, since it may cause overlay to close (i.e. RAC submenu)
                        if (modality !== 'virtual') (0, scrollIntoView/* scrollIntoViewport */.o)(element, {
                            containingElement: ref.current
                        });
                    }
                });
            }
        }
        // If the focused key becomes null (e.g. the last item is deleted), focus the whole collection.
        if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null && ref.current) (0, focusSafely/* focusSafely */.l)(ref.current);
        lastFocusedKey.current = manager.focusedKey;
        didAutoFocusRef.current = false;
    });
    (0, react.useEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);
    // Intercept FocusScope restoration since virtualized collections can reuse DOM nodes.
    (0, useEvent/* useEvent */._)(ref, 'react-aria-focus-scope-restore', (e)=>{
        e.preventDefault();
        manager.setFocused(true);
    });
    let handlers = {
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (scrollRef.current === e.target) // Prevent focus going to the collection when clicking on the scrollbar.
            e.preventDefault();
        }
    };
    let { typeSelectProps: typeSelectProps } = (0, useTypeSelect/* useTypeSelect */.I)({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) handlers = (0, mergeProps/* mergeProps */.v)(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    let tabIndex = undefined;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    let collectionId = (0, utils/* useCollectionId */.j5)(manager.collection);
    return {
        collectionProps: (0, mergeProps/* mergeProps */.v)(handlers, {
            tabIndex: tabIndex,
            'data-collection': collectionId
        })
    };
}



//# sourceMappingURL=useSelectableCollection.module.js.map


/***/ },

/***/ 1249
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ $657e4dc4a6e88df0$export$8f5ed9ff9f511381)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4345);


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
class $657e4dc4a6e88df0$export$8f5ed9ff9f511381 {
    getItemRect(key) {
        let container = this.ref.current;
        if (!container) return null;
        let item = key != null ? (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getItemElement */ .au)(this.ref, key) : null;
        if (!item) return null;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        return {
            x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
            y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
            width: itemRect.width,
            height: itemRect.height
        };
    }
    getContentSize() {
        let container = this.ref.current;
        var _container_scrollWidth, _container_scrollHeight;
        return {
            width: (_container_scrollWidth = container === null || container === void 0 ? void 0 : container.scrollWidth) !== null && _container_scrollWidth !== void 0 ? _container_scrollWidth : 0,
            height: (_container_scrollHeight = container === null || container === void 0 ? void 0 : container.scrollHeight) !== null && _container_scrollHeight !== void 0 ? _container_scrollHeight : 0
        };
    }
    getVisibleRect() {
        let container = this.ref.current;
        var _container_scrollLeft, _container_scrollTop, _container_clientWidth, _container_clientHeight;
        return {
            x: (_container_scrollLeft = container === null || container === void 0 ? void 0 : container.scrollLeft) !== null && _container_scrollLeft !== void 0 ? _container_scrollLeft : 0,
            y: (_container_scrollTop = container === null || container === void 0 ? void 0 : container.scrollTop) !== null && _container_scrollTop !== void 0 ? _container_scrollTop : 0,
            width: (_container_clientWidth = container === null || container === void 0 ? void 0 : container.clientWidth) !== null && _container_clientWidth !== void 0 ? _container_clientWidth : 0,
            height: (_container_clientHeight = container === null || container === void 0 ? void 0 : container.clientHeight) !== null && _container_clientHeight !== void 0 ? _container_clientHeight : 0
        };
    }
    constructor(ref){
        this.ref = ref;
    }
}



//# sourceMappingURL=DOMLayoutDelegate.module.js.map


/***/ },

/***/ 2269
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ $5e3802645cc19319$export$1020fa7f77e17884),
/* harmony export */   h: () => (/* binding */ $5e3802645cc19319$export$1c3ebcada18427bf)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24836);


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
const $5e3802645cc19319$var$supportsInert = typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
// Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $5e3802645cc19319$var$refCountMap = new WeakMap();
let $5e3802645cc19319$var$observerStack = [];
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, options) {
    let windowObj = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .getOwnerWindow */ .mD)(targets === null || targets === void 0 ? void 0 : targets[0]);
    let opts = options instanceof windowObj.Element ? {
        root: options
    } : options;
    var _opts_root;
    let root = (_opts_root = opts === null || opts === void 0 ? void 0 : opts.root) !== null && _opts_root !== void 0 ? _opts_root : document.body;
    let shouldUseInert = (opts === null || opts === void 0 ? void 0 : opts.shouldUseInert) && $5e3802645cc19319$var$supportsInert;
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let getHidden = (element)=>{
        return shouldUseInert && element instanceof windowObj.HTMLElement ? element.inert : element.getAttribute('aria-hidden') === 'true';
    };
    let setHidden = (element, hidden)=>{
        if (shouldUseInert && element instanceof windowObj.HTMLElement) element.inert = hidden;
        else if (hidden) element.setAttribute('aria-hidden', 'true');
        else {
            element.removeAttribute('aria-hidden');
            if (element instanceof windowObj.HTMLElement) // We only ever call setHidden with hidden = false when the nodeCount is 1 aka
            // we are trying to make the element visible to screen readers again, so remove inert as well
            element.inert = false;
        }
    };
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (hiddenNodes.has(node) || visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute('role') !== 'row') return NodeFilter.FILTER_REJECT;
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
        if (getHidden(node) && refCount === 0) return;
        if (refCount === 0) setHidden(node, true);
        hiddenNodes.add(node);
        $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList') continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target))) for (let node of change.addedNodes){
                if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === 'true' || node.dataset.reactAriaTopLayer === 'true')) visibleNodes.add(node);
                else if (node instanceof Element) walk(node);
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
                setHidden(node, false);
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


/***/ },

/***/ 3704
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $21f1aa98acb08317$export$16792effe837dba3),
/* harmony export */   o: () => (/* binding */ $21f1aa98acb08317$export$c57958e35f31ed73)
/* harmony export */ });
/* harmony import */ var _platform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69202);


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
function $21f1aa98acb08317$export$16792effe837dba3(e) {
    if ((0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isMac */ .cX)()) return e.metaKey;
    return e.ctrlKey;
}
// HTML input types that do not cause the software keyboard to appear.
const $21f1aa98acb08317$var$nonTextInputTypes = new Set([
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
function $21f1aa98acb08317$export$c57958e35f31ed73(target) {
    return target instanceof HTMLInputElement && !$21f1aa98acb08317$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}



//# sourceMappingURL=keyboard.module.js.map


/***/ },

/***/ 4345
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EG: () => (/* binding */ $feb5ffebff200149$export$6aeb1680a0ae8741),
/* harmony export */   N9: () => (/* binding */ $feb5ffebff200149$export$d3e3bd3e26688c04),
/* harmony export */   au: () => (/* binding */ $feb5ffebff200149$export$c3d8340acf92597f),
/* harmony export */   j5: () => (/* binding */ $feb5ffebff200149$export$881eb0d9f3605d9d)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69202);


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
function $feb5ffebff200149$export$d3e3bd3e26688c04(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isAppleDevice */ .lg)() ? e.altKey : e.ctrlKey;
}
function $feb5ffebff200149$export$c3d8340acf92597f(collectionRef, key) {
    var _collectionRef_current, _collectionRef_current1;
    let selector = `[data-key="${CSS.escape(String(key))}"]`;
    let collection = (_collectionRef_current = collectionRef.current) === null || _collectionRef_current === void 0 ? void 0 : _collectionRef_current.dataset.collection;
    if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
    return (_collectionRef_current1 = collectionRef.current) === null || _collectionRef_current1 === void 0 ? void 0 : _collectionRef_current1.querySelector(selector);
}
const $feb5ffebff200149$var$collectionMap = new WeakMap();
function $feb5ffebff200149$export$881eb0d9f3605d9d(collection) {
    let id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)();
    $feb5ffebff200149$var$collectionMap.set(collection, id);
    return id;
}
function $feb5ffebff200149$export$6aeb1680a0ae8741(collection) {
    return $feb5ffebff200149$var$collectionMap.get(collection);
}



//# sourceMappingURL=utils.module.js.map


/***/ },

/***/ 6484
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W1: () => (/* binding */ $3674c52c6b3c5bce$export$d9b273488cd8ce6f),
  Dr: () => (/* binding */ $3674c52c6b3c5bce$export$2ce376c2cc3355c8),
  cQ: () => (/* binding */ $3674c52c6b3c5bce$export$27d2ad3c5815583e),
  gI: () => (/* binding */ $3674c52c6b3c5bce$export$795aec4671cbae19)
});

// UNUSED EXPORTS: MenuContext, MenuSection, MenuStateContext, SubmenuTrigger

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RSPContexts.mjs
var RSPContexts = __webpack_require__(32373);
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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(70291);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Separator.mjs
var Separator = __webpack_require__(31815);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(10266);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
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
    if (!props['aria-label'] && !props['aria-labelledby'] && "production" !== 'production') // removed by dead control flow
{}
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

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(49336);
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
    let { id: id, key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, 'aria-haspopup': hasPopup, onPressStart: onPressStart, onPressUp: pressUpProp, onPress: onPress, onPressChange: pressChangeProp, onPressEnd: onPressEnd, onClick: onClickProp, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur, selectionManager: selectionManager = state.selectionManager } = props;
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
    let performAction = ()=>{
        var _item_props;
        if (isTrigger) return;
        if (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) item.props.onAction();
        else if (props.onAction) props.onAction(key);
        if (data.onAction) {
            // Must reassign to variable otherwise `this` binding gets messed up. Something to do with WeakMap.
            let onAction = data.onAction;
            onAction(key);
        }
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
    let isPressedRef = (0, react.useRef)(false);
    let onPressChange = (isPressed)=>{
        pressChangeProp === null || pressChangeProp === void 0 ? void 0 : pressChangeProp(isPressed);
        isPressedRef.current = isPressed;
    };
    let interaction = (0, react.useRef)(null);
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') interaction.current = {
            pointerType: e.pointerType
        };
        // If interacting with mouse, allow the user to mouse down on the trigger button,
        // drag, and release over an item (matching native behavior).
        if (e.pointerType === 'mouse') {
            if (!isPressedRef.current) e.target.click();
        }
        pressUpProp === null || pressUpProp === void 0 ? void 0 : pressUpProp(e);
    };
    let onClick = (e)=>{
        var _interaction_current, _interaction_current1;
        onClickProp === null || onClickProp === void 0 ? void 0 : onClickProp(e);
        performAction();
        (0, openLink/* handleLinkClick */.PJ)(e, router, item.props.href, item === null || item === void 0 ? void 0 : item.props.routerOptions);
        let shouldClose = ((_interaction_current = interaction.current) === null || _interaction_current === void 0 ? void 0 : _interaction_current.pointerType) === 'keyboard' ? ((_interaction_current1 = interaction.current) === null || _interaction_current1 === void 0 ? void 0 : _interaction_current1.key) === 'Enter' || selectionManager.selectionMode === 'none' || selectionManager.isLink(key) : selectionManager.selectionMode !== 'multiple' || selectionManager.isLink(key);
        shouldClose = closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : shouldClose;
        if (onClose && !isTrigger && shouldClose) onClose();
        interaction.current = null;
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
                    interaction.current = {
                        pointerType: 'keyboard',
                        key: ' '
                    };
                    e.target.click();
                    break;
                case 'Enter':
                    interaction.current = {
                        pointerType: 'keyboard',
                        key: 'Enter'
                    };
                    // Trigger click unless this is a link. Links trigger click natively.
                    if (e.target.tagName !== 'A') e.target.click();
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
            } : undefined, isDisabled ? undefined : {
                onClick: onClick
            }),
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

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/BaseCollection.mjs
var BaseCollection = __webpack_require__(46540);
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
class $3674c52c6b3c5bce$var$SubmenuTriggerNode extends (0, BaseCollection/* CollectionNode */.Pt) {
    filter(collection, newCollection, filterFn) {
        let triggerNode = collection.getItem(this.firstChildKey);
        if (triggerNode && filterFn(triggerNode.textValue, this)) {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
$3674c52c6b3c5bce$var$SubmenuTriggerNode.type = 'submenutrigger';
const $3674c52c6b3c5bce$export$ecabc99eeffab7ca = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $kM2ZM$createBranchComponent)($3674c52c6b3c5bce$var$SubmenuTriggerNode, (props, ref, item)=>{
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
                {
                    ref: submenuRef,
                    ...submenuProps
                }
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                submenuTriggerState
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
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
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, (0, RSPContexts/* SelectableCollectionContext */.Co));
    let { filter: filter, ...autocompleteMenuProps } = props;
    let filteredCollection = (0, react.useMemo)(()=>filter ? collection.filter(filter) : collection, [
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, FocusScope/* FocusScope */.n1), null, /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, menuProps),
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
                (0, Separator/* SeparatorContext */.$S),
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
                (0, RSPContexts/* SelectableCollectionContext */.Co),
                null
            ],
            [
                (0, RSPContexts/* FieldInputContext */.wv),
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
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey),
        scrollRef: ref
    }))), emptyState));
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement("section", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, groupProps),
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
const $3674c52c6b3c5bce$export$4b1545b4f2016d26 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $kM2ZM$createBranchComponent)((0, $kM2ZM$SectionNode), $3674c52c6b3c5bce$var$MenuSectionInner)));
const $3674c52c6b3c5bce$var$MenuItemContext = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$2ce376c2cc3355c8 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)((0, BaseCollection/* ItemNode */._B), function MenuItem(props, forwardedRef, item) {
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, menuItemProps, hoverProps),
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
            ],
            [
                (0, SelectionIndicator/* SelectionIndicatorContext */.r),
                {
                    isSelected: states.isSelected
                }
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=Menu.module.js.map


/***/ },

/***/ 6868
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ $2f04cbc44ee30ce0$export$53a0910f038337bd),
  o: () => (/* binding */ $2f04cbc44ee30ce0$export$c826860796309d1b)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/isScrollable.mjs
var isScrollable = __webpack_require__(47912);
;// ./node_modules/@react-aria/utils/dist/getScrollParents.mjs


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
function $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(node, checkForOverflow) {
    const scrollParents = [];
    while(node && node !== document.documentElement){
        if ((0, isScrollable/* isScrollable */.o)(node, checkForOverflow)) scrollParents.push(node);
        node = node.parentElement;
    }
    return scrollParents;
}



//# sourceMappingURL=getScrollParents.module.js.map

;// ./node_modules/@react-aria/utils/dist/scrollIntoView.mjs


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
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left + scroll padding
    let { borderTopWidth: borderTopWidth, borderLeftWidth: borderLeftWidth, scrollPaddingTop: scrollPaddingTop, scrollPaddingRight: scrollPaddingRight, scrollPaddingBottom: scrollPaddingBottom, scrollPaddingLeft: scrollPaddingLeft } = getComputedStyle(scrollView);
    let borderAdjustedX = x + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = y + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    // Get scroll padding values as pixels - defaults to 0 if no scroll padding
    // is used.
    let scrollPaddingTopNumber = parseInt(scrollPaddingTop, 10) || 0;
    let scrollPaddingBottomNumber = parseInt(scrollPaddingBottom, 10) || 0;
    let scrollPaddingRightNumber = parseInt(scrollPaddingRight, 10) || 0;
    let scrollPaddingLeftNumber = parseInt(scrollPaddingLeft, 10) || 0;
    if (offsetX <= x + scrollPaddingLeftNumber) x = offsetX - parseInt(borderLeftWidth, 10) - scrollPaddingLeftNumber;
    else if (offsetX + width > maxX - scrollPaddingRightNumber) x += offsetX + width - maxX + scrollPaddingRightNumber;
    if (offsetY <= borderAdjustedY + scrollPaddingTopNumber) y = offsetY - parseInt(borderTopWidth, 10) - scrollPaddingTopNumber;
    else if (offsetY + height > maxY - scrollPaddingBottomNumber) y += offsetY + height - maxY + scrollPaddingBottomNumber;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (targetElement && document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: 'nearest'
                });
            }
        } else {
            let scrollParents = (0, $a40c673dc9f6d9c7$export$94ed1c92c7beeb22)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            if (!isScrollPrevented) scrollParents.push(root);
            for (let scrollParent of scrollParents)$2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
        }
    }
}



//# sourceMappingURL=scrollIntoView.module.js.map


/***/ },

/***/ 13796
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ $7613b1592d41b092$export$6cd28814d92fa9c9)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-stately/collections/dist/CollectionBuilder.mjs


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
class $eb2240fc39a57fa5$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $eb2240fc39a57fa5$var$iterable(()=>this.iterateCollection(props));
    }
    *iterateCollection(props) {
        let { children: children, items: items } = props;
        if ((0, react).isValidElement(children) && children.type === (0, react).Fragment) yield* this.iterateCollection({
            children: children.props.children,
            items: items
        });
        else if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            let index = 0;
            for (let item of items){
                yield* this.getFullNode({
                    value: item,
                    index: index
                }, {
                    renderer: children
                });
                index++;
            }
        } else {
            let items = [];
            (0, react).Children.forEach(children, (child)=>{
                if (child) items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {});
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            var _v_key;
            let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        if ((0, react).isValidElement(partialNode.element) && partialNode.element.type === (0, react).Fragment) {
            let children = [];
            (0, react).Children.forEach(partialNode.element.props.children, (child)=>{
                children.push(child);
            });
            var _partialNode_index;
            let index = (_partialNode_index = partialNode.index) !== null && _partialNode_index !== void 0 ? _partialNode_index : 0;
            for (const child of children)yield* this.getFullNode({
                element: child,
                index: index++
            }, state, parentKey, parentNode);
            return;
        }
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ((0, react).isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            var _partialNode_index1;
            let index = (_partialNode_index1 = partialNode.index) !== null && _partialNode_index1 !== void 0 ? _partialNode_index1 : 0;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                var _childNode_key;
                let nodeKey = (_childNode_key = childNode.key) !== null && _childNode_key !== void 0 ? _childNode_key : null;
                if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    var _childNode_value, _ref;
                    // Cache the node based on its value
                    node.value = (_ref = (_childNode_value = childNode.value) !== null && _childNode_value !== void 0 ? _childNode_value : partialNode.value) !== null && _ref !== void 0 ? _ref : null;
                    if (node.value) this.cache.set(node.value, node);
                    var _parentNode_type;
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node.type)}> in <${$eb2240fc39a57fa5$var$capitalize((_parentNode_type = parentNode === null || parentNode === void 0 ? void 0 : parentNode.type) !== null && _parentNode_type !== void 0 ? _parentNode_type : 'unknown parent type')}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null || partialNode.type == null) return;
        // Create full node
        let builder = this;
        var _partialNode_value, _partialNode_textValue;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: (_partialNode_value = partialNode.value) !== null && _partialNode_value !== void 0 ? _partialNode_value : null,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: (_partialNode_textValue = partialNode.textValue) !== null && _partialNode_textValue !== void 0 ? _partialNode_textValue : '',
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes || false,
            childNodes: $eb2240fc39a57fa5$var$iterable(function*() {
                if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // TODO: Remove this line entirely and enforce that users always provide unique keys.
                    // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    let nodes = builder.getFullNode({
                        ...child,
                        index: index
                    }, builder.getChildState(state, child), node.key, node);
                    for (let node of nodes){
                        index++;
                        yield node;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $eb2240fc39a57fa5$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item of iterable){
                cache.push(item);
                yield item;
            }
        }
    };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element));
    if (outer) return outer;
    if (inner) return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}



//# sourceMappingURL=CollectionBuilder.module.js.map

;// ./node_modules/@react-stately/collections/dist/useCollection.mjs



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

function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context) {
    let builder = (0, react.useMemo)(()=>new (0, $eb2240fc39a57fa5$export$bf788dd355e3a401)(), []);
    let { children: children, items: items, collection: collection } = props;
    let result = (0, react.useMemo)(()=>{
        if (collection) return collection;
        let nodes = builder.build({
            children: children,
            items: items
        }, context);
        return factory(nodes);
    }, [
        builder,
        children,
        items,
        collection,
        context,
        factory
    ]);
    return result;
}



//# sourceMappingURL=useCollection.module.js.map


/***/ },

/***/ 17460
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ $e9faafb641e167db$export$90fc3a17d93f704c)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useEffectEvent */ .J)(handler);
    let isDisabled = handler == null;
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}



//# sourceMappingURL=useEvent.module.js.map


/***/ },

/***/ 18399
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $fb3050f43d946246$export$e32c88dfddc6e1d8)
/* harmony export */ });
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
/**
 * Controls how long to wait before clearing the typeahead buffer.
 */ const $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1000; // 1 second
function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
    let { keyboardDelegate: keyboardDelegate, selectionManager: selectionManager, onTypeSelect: onTypeSelect } = options;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        search: '',
        timeout: undefined
    }).current;
    let onKeyDown = (e)=>{
        let character = $fb3050f43d946246$var$getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target) || state.search.length === 0 && character === ' ') return;
        // Do not propagate the Spacebar event if it's meant to be part of the search.
        // When we time out, the search term becomes empty, hence the check on length.
        // Trimming is to account for the case of pressing the Spacebar more than once,
        // which should cycle through the selection/deselection of the focused item.
        if (character === ' ' && state.search.trim().length > 0) {
            e.preventDefault();
            if (!('continuePropagation' in e)) e.stopPropagation();
        }
        state.search += character;
        if (keyboardDelegate.getKeyForSearch != null) {
            // Use the delegate to find a key to focus.
            // Prioritize items after the currently focused item, falling back to searching the whole list.
            let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
            // If no key found, search from the top.
            if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
            if (key != null) {
                selectionManager.setFocusedKey(key);
                if (onTypeSelect) onTypeSelect(key);
            }
        }
        clearTimeout(state.timeout);
        state.timeout = setTimeout(()=>{
            state.search = '';
        }, $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
    };
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : undefined
        }
    };
}
function $fb3050f43d946246$var$getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return '';
}



//# sourceMappingURL=useTypeSelect.module.js.map


/***/ },

/***/ 19888
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(58493);
} else // removed by dead control flow
{}


/***/ },

/***/ 20445
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72166);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49953);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24514);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47912);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69202);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3704);


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
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled } = options;
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        if (isDisabled) return;
        $49c51c25361d4cd2$var$preventScrollCount++;
        if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
            if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .isIOS */ .un)()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
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
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .c)(scrollbarWidth > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
    ('scrollbarGutter' in document.documentElement.style ? $49c51c25361d4cd2$var$setStyle(document.documentElement, 'scrollbarGutter', 'stable') : $49c51c25361d4cd2$var$setStyle(document.documentElement, 'paddingRight', `${scrollbarWidth}px`)), $49c51c25361d4cd2$var$setStyle(document.documentElement, 'overflow', 'hidden'));
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
//    by preventing default in a `touchmove` event. This is best effort: we can't prevent default when pinch
//    zooming or when an element contains text selection, which may allow scrolling in some cases.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focus moves to an input, create an off screen input and focus that temporarily. This prevents 
//    Safari from scrolling the page. After a small delay, focus the real input and scroll it into view
//    ourselves, without scrolling the whole page.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let allowTouchMove = false;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        let target = e.target;
        scrollable = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .isScrollable */ .o)(target) ? target : (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .getScrollParent */ .m)(target, true);
        allowTouchMove = false;
        // If the target is selected, don't preventDefault in touchmove to allow user to adjust selection.
        let selection = target.ownerDocument.defaultView.getSelection();
        if (selection && !selection.isCollapsed && selection.containsNode(target, true)) allowTouchMove = true;
        // If this is a focused input element with a selected range, allow user to drag the selection handles.
        if ('selectionStart' in target && 'selectionEnd' in target && target.selectionStart < target.selectionEnd && target.ownerDocument.activeElement === target) allowTouchMove = true;
    };
    // Prevent scrolling up when at the top and scrolling down when at the bottom
    // of a nested scrollable area, otherwise mobile Safari will start scrolling
    // the window instead.
    // This must be applied before the touchstart event as of iOS 26, so inject it as a <style> element.
    let style = document.createElement('style');
    style.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim();
    document.head.prepend(style);
    let onTouchMove = (e)=>{
        // Allow pinch-zooming.
        if (e.touches.length === 2 || allowTouchMove) return;
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
    let onBlur = (e)=>{
        let target = e.target;
        let relatedTarget = e.relatedTarget;
        if (relatedTarget && (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .willOpenKeyboard */ .o)(relatedTarget)) {
            // Focus without scrolling the whole page, and then scroll into view manually.
            relatedTarget.focus({
                preventScroll: true
            });
            $49c51c25361d4cd2$var$scrollIntoViewWhenReady(relatedTarget, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .willOpenKeyboard */ .o)(target));
        } else if (!relatedTarget) {
            var _target_parentElement;
            // When tapping the Done button on the keyboard, focus moves to the body.
            // FocusScope will then restore focus back to the input. Later when tapping
            // the same input again, it is already focused, so no blur event will fire,
            // resulting in the flow above never running and Safari's native scrolling occurring.
            // Instead, move focus to the parent focusable element (e.g. the dialog).
            let focusable = (_target_parentElement = target.parentElement) === null || _target_parentElement === void 0 ? void 0 : _target_parentElement.closest('[tabindex]');
            focusable === null || focusable === void 0 ? void 0 : focusable.focus({
                preventScroll: true
            });
        }
    };
    // Override programmatic focus to scroll into view without scrolling the whole page.
    let focus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function(opts) {
        // Track whether the keyboard was already visible before.
        let wasKeyboardVisible = document.activeElement != null && (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .willOpenKeyboard */ .o)(document.activeElement);
        // Focus the element without scrolling the page.
        focus.call(this, {
            ...opts,
            preventScroll: true
        });
        if (!opts || !opts.preventScroll) $49c51c25361d4cd2$var$scrollIntoViewWhenReady(this, wasKeyboardVisible);
    };
    let removeEvents = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .c)($49c51c25361d4cd2$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, 'blur', onBlur, true));
    return ()=>{
        removeEvents();
        style.remove();
        HTMLElement.prototype.focus = focus;
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
function $49c51c25361d4cd2$var$scrollIntoViewWhenReady(target, wasKeyboardVisible) {
    if (wasKeyboardVisible || !$49c51c25361d4cd2$var$visualViewport) // If the keyboard was already visible, scroll the target into view immediately.
    $49c51c25361d4cd2$var$scrollIntoView(target);
    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
    // measure the correct position to scroll to.
    $49c51c25361d4cd2$var$visualViewport.addEventListener('resize', ()=>$49c51c25361d4cd2$var$scrollIntoView(target), {
        once: true
    });
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    let nextTarget = target;
    while(nextTarget && nextTarget !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .getScrollParent */ .m)(nextTarget);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
            let scrollableRect = scrollable.getBoundingClientRect();
            let targetRect = nextTarget.getBoundingClientRect();
            if (targetRect.top < scrollableRect.top || targetRect.bottom > scrollableRect.top + nextTarget.clientHeight) {
                let bottom = scrollableRect.bottom;
                if ($49c51c25361d4cd2$var$visualViewport) bottom = Math.min(bottom, $49c51c25361d4cd2$var$visualViewport.offsetTop + $49c51c25361d4cd2$var$visualViewport.height);
                // Center within the viewport.
                let adjustment = targetRect.top - scrollableRect.top - ((bottom - scrollableRect.top) / 2 - targetRect.height / 2);
                scrollable.scrollTo({
                    // Clamp to the valid range to prevent over-scrolling.
                    top: Math.max(0, Math.min(scrollable.scrollHeight - scrollable.clientHeight, scrollable.scrollTop + adjustment)),
                    behavior: 'smooth'
                });
            }
        }
        nextTarget = scrollable.parentElement;
    }
}



//# sourceMappingURL=usePreventScroll.module.js.map


/***/ },

/***/ 21416
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
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
    let { overlayProps: positionProps, arrowProps: arrowProps, placement: placement, triggerAnchorPoint: origin } = (0, useOverlayPosition/* useOverlayPosition */.v)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: isNonModal && !isSubmenu ? state.close : null
    });
    (0, usePreventScroll/* usePreventScroll */.H)({
        isDisabled: isNonModal || !state.isOpen
    });
    (0, react.useEffect)(()=>{
        if (state.isOpen && popoverRef.current) {
            var _groupRef_current, _groupRef_current1;
            if (isNonModal) return (0, ariaHideOutside/* keepVisible */.O)((_groupRef_current = groupRef === null || groupRef === void 0 ? void 0 : groupRef.current) !== null && _groupRef_current !== void 0 ? _groupRef_current : popoverRef.current);
            else return (0, ariaHideOutside/* ariaHideOutside */.h)([
                (_groupRef_current1 = groupRef === null || groupRef === void 0 ? void 0 : groupRef.current) !== null && _groupRef_current1 !== void 0 ? _groupRef_current1 : popoverRef.current
            ], {
                shouldUseInert: true
            });
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
        placement: placement,
        triggerAnchorPoint: origin
    };
}



//# sourceMappingURL=usePopover.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/DismissButton.mjs + 35 modules
var DismissButton = __webpack_require__(91821);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/Overlay.mjs
var Overlay = __webpack_require__(85057);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/animation.mjs
var animation = __webpack_require__(13807);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/focusSafely.mjs
var focusSafely = __webpack_require__(4175);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
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
function $07b14b47974efb58$var$PopoverInner({ state: state, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, clearContexts: clearContexts, ...props }) {
    // Calculate the arrow size internally (and remove props.arrowSize from PopoverProps)
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, react.useRef)(null);
    let containerRef = (0, react.useRef)(null);
    let groupCtx = (0, react.useContext)($07b14b47974efb58$var$PopoverGroupContext);
    let isSubPopover = groupCtx && props.trigger === 'SubmenuTrigger';
    var _props_offset;
    let { popoverProps: popoverProps, underlayProps: underlayProps, arrowProps: arrowProps, placement: placement, triggerAnchorPoint: triggerAnchorPoint } = (0, $f2f8a6077418541e$export$542a6fd13ac93354)({
        ...props,
        offset: (_props_offset = props.offset) !== null && _props_offset !== void 0 ? _props_offset : 8,
        arrowRef: arrowRef,
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
    // Skip this for submenus since hovering a submenutrigger should keep focus on the trigger
    (0, react.useEffect)(()=>{
        if (isDialog && props.trigger !== 'SubmenuTrigger' && ref.current && !ref.current.contains(document.activeElement)) (0, focusSafely/* focusSafely */.l)(ref.current);
    }, [
        isDialog,
        ref,
        props.trigger
    ]);
    let children = (0, react.useMemo)(()=>{
        let children = renderProps.children;
        if (clearContexts) for (let Context of clearContexts)children = /*#__PURE__*/ (0, react).createElement(Context.Provider, {
            value: null
        }, children);
        return children;
    }, [
        renderProps.children,
        clearContexts
    ]);
    let style = {
        ...popoverProps.style,
        '--trigger-anchor-point': triggerAnchorPoint ? `${triggerAnchorPoint.x}px ${triggerAnchorPoint.y}px` : undefined,
        ...renderProps.style
    };
    let overlay = /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props, {
            global: true
        }), popoverProps),
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
    }, children), /*#__PURE__*/ (0, react).createElement((0, DismissButton/* DismissButton */.R), {
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


/***/ },

/***/ 24514
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ $62d8ded9296f3872$export$cfa2225e87938781)
/* harmony export */ });
/* harmony import */ var _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47912);


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
function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if ((0, _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isScrollable */ .o)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !(0, _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isScrollable */ .o)(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}



//# sourceMappingURL=getScrollParent.module.js.map


/***/ },

/***/ 25263
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ $168583247155ddda$export$dc9c12ed27dd1b49)
});

;// ./node_modules/@react-aria/menu/dist/ar-AE.mjs
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = {
    "longPressMessage": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/menu/dist/bg-BG.mjs
var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = {
    "longPressMessage": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/menu/dist/cs-CZ.mjs
var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = {
    "longPressMessage": `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/menu/dist/da-DK.mjs
var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = {
    "longPressMessage": `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/menu/dist/de-DE.mjs
var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = {
    "longPressMessage": `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/menu/dist/el-GR.mjs
var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = {
    "longPressMessage": `\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/menu/dist/en-US.mjs
var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = {
    "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/menu/dist/es-ES.mjs
var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = {
    "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/menu/dist/et-EE.mjs
var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = {
    "longPressMessage": `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/menu/dist/fi-FI.mjs
var $51608325613944d7$exports = {};
$51608325613944d7$exports = {
    "longPressMessage": `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/menu/dist/fr-FR.mjs
var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = {
    "longPressMessage": `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/menu/dist/he-IL.mjs
var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = {
    "longPressMessage": `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/menu/dist/hr-HR.mjs
var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/menu/dist/hu-HU.mjs
var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = {
    "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/menu/dist/it-IT.mjs
var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = {
    "longPressMessage": `Premi a lungo o premi Alt + Freccia gi\xf9 per aprire il menu`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/menu/dist/ja-JP.mjs
var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = {
    "longPressMessage": `\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/menu/dist/ko-KR.mjs
var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = {
    "longPressMessage": `\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/menu/dist/lt-LT.mjs
var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = {
    "longPressMessage": `Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/menu/dist/lv-LV.mjs
var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = {
    "longPressMessage": `Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/menu/dist/nb-NO.mjs
var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = {
    "longPressMessage": `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/menu/dist/nl-NL.mjs
var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = {
    "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/menu/dist/pl-PL.mjs
var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = {
    "longPressMessage": `Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/menu/dist/pt-BR.mjs
var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = {
    "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/menu/dist/pt-PT.mjs
var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = {
    "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/menu/dist/ro-RO.mjs
var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = {
    "longPressMessage": `Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/menu/dist/ru-RU.mjs
var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = {
    "longPressMessage": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/menu/dist/sk-SK.mjs
var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = {
    "longPressMessage": `Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/menu/dist/sl-SI.mjs
var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = {
    "longPressMessage": `Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/menu/dist/sr-SP.mjs
var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/menu/dist/sv-SE.mjs
var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = {
    "longPressMessage": `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/menu/dist/tr-TR.mjs
var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = {
    "longPressMessage": `Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/menu/dist/uk-UA.mjs
var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = {
    "longPressMessage": `\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/menu/dist/zh-CN.mjs
var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = {
    "longPressMessage": `\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/menu/dist/zh-TW.mjs
var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = {
    "longPressMessage": `\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/menu/dist/intlStrings.mjs



































var $2cbb7ca666678a14$exports = {};


































$2cbb7ca666678a14$exports = {
    "ar-AE": $c0398ad35c3639b7$exports,
    "bg-BG": $7af657c4165927c3$exports,
    "cs-CZ": $d95d4da6d531ab81$exports,
    "da-DK": $24ebda9c775dca17$exports,
    "de-DE": $743e0dfca6cab1e9$exports,
    "el-GR": $a2f41026e05f1c84$exports,
    "en-US": $43b800e97c901737$exports,
    "es-ES": $442f5f6ac211e29f$exports,
    "et-EE": $dff280acfeb2d8ac$exports,
    "fi-FI": $51608325613944d7$exports,
    "fr-FR": $c4a1b1eabeaa87be$exports,
    "he-IL": $8c74815cdee18d1b$exports,
    "hr-HR": $fd0e9ef6a7fe0ec9$exports,
    "hu-HU": $a89a74a39eba465a$exports,
    "it-IT": $edc7c66594a0ae8a$exports,
    "ja-JP": $f1ab51510712db52$exports,
    "ko-KR": $f9b672d9b82fa3d6$exports,
    "lt-LT": $a385f3910feda499$exports,
    "lv-LV": $4f1bde932c441789$exports,
    "nb-NO": $914a51a8a594d5be$exports,
    "nl-NL": $89aaf803103bb500$exports,
    "pl-PL": $c685891476dbaaca$exports,
    "pt-BR": $885879b9b10c2959$exports,
    "pt-PT": $6b39616688a51692$exports,
    "ro-RO": $f26362aed63f47e2$exports,
    "ru-RU": $06cbade644558bf0$exports,
    "sk-SK": $0a391ff68f9d59b1$exports,
    "sl-SI": $8193cf0e649c7928$exports,
    "sr-SP": $f398debcce5a5c55$exports,
    "sv-SE": $9e9fef000aa4c013$exports,
    "tr-TR": $c016c8183bbe3d68$exports,
    "uk-UA": $ca4f6c8462244e62$exports,
    "zh-CN": $2d9960c02ccac927$exports,
    "zh-TW": $f1b682a4c8c5631c$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
var focusWithoutScrolling = __webpack_require__(32268);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useLongPress.mjs
var useLongPress = __webpack_require__(60155);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlayTrigger.mjs
var useOverlayTrigger = __webpack_require__(26940);
;// ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs







function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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




function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu', isDisabled: isDisabled, trigger: trigger = 'press' } = props;
    let menuTriggerId = (0, useId/* useId */.Bi)();
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, useOverlayTrigger/* useOverlayTrigger */.o)({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === 'longPress' && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case 'Enter':
            case ' ':
                // React puts listeners on the same root, so even if propagation was stopped, immediate propagation is still possible.
                // useTypeSelect will handle the spacebar first if it's running, so we don't want to open if it's handled it already.
                // We use isDefaultPrevented() instead of isPropagationStopped() because createEventHandler stops propagation by default.
                // And default prevented means that the event was handled by something else (typeahead), so we don't want to open the menu.
                if (trigger === 'longPress' || e.isDefaultPrevented()) return;
            // fallthrough
            case 'ArrowDown':
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('first');
                break;
            case 'ArrowUp':
                if (!('continuePropagation' in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle('last');
                break;
            default:
                // Allow other keys.
                if ('continuePropagation' in e) e.continuePropagation();
        }
    };
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($2cbb7ca666678a14$exports))), '@react-aria/menu');
    let { longPressProps: longPressProps } = (0, useLongPress/* useLongPress */.H)({
        isDisabled: isDisabled || trigger !== 'longPress',
        accessibilityDescription: stringFormatter.format('longPressMessage'),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open('first');
        }
    });
    let pressProps = {
        preventFocusOnPress: true,
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(e.target);
                // If opened with a screen reader, auto focus the first item.
                // Otherwise, the menu itself will be focused.
                state.open(e.pointerType === 'virtual' ? 'first' : null);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(e.target);
                state.toggle();
            }
        }
    };
    // omit onPress from triggerProps since we override it above.
    delete triggerProps.onPress;
    return {
        // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
        menuTriggerProps: {
            ...triggerProps,
            ...trigger === 'press' ? pressProps : longPressProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
}



//# sourceMappingURL=useMenuTrigger.module.js.map


/***/ },

/***/ 26940
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $628037886ba31236$export$f9d5c8beee7d008d)
/* harmony export */ });
/* harmony import */ var _useCloseOnScroll_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4960);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84137);




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


function $628037886ba31236$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type } = props;
    let { isOpen: isOpen } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (ref && ref.current) (0, _useCloseOnScroll_mjs__WEBPACK_IMPORTED_MODULE_0__/* .onCloseMap */ .a).set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Bi)();
    return {
        triggerProps: {
            'aria-haspopup': ariaHasPopup,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? overlayId : undefined,
            onPress: state.toggle
        },
        overlayProps: {
            id: overlayId
        }
    };
}



//# sourceMappingURL=useOverlayTrigger.module.js.map


/***/ },

/***/ 27279
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $514c0188e459b4c0$export$5f1af8db9871e1d6),
/* harmony export */   h: () => (/* binding */ $514c0188e459b4c0$export$9afb8bc826b033ea)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const $514c0188e459b4c0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Text(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $514c0188e459b4c0$export$9afb8bc826b033ea);
    let { elementType: ElementType = 'span', ...domProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});



//# sourceMappingURL=Text.module.js.map


/***/ },

/***/ 29571
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ $fca6afa0e843324b$export$87b761675e8eaa10),
/* harmony export */   o: () => (/* binding */ $fca6afa0e843324b$export$f12b703ca79dfbb1)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39892);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92122);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);




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


const $fca6afa0e843324b$var$cache = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
    let dictionary = $fca6afa0e843324b$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B)(strings);
        $fca6afa0e843324b$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName) {
    return packageName && (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B).getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = (0, _context_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLocale */ .Y)();
    let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
    return (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_2__/* .LocalizedStringFormatter */ .J)(locale, dictionary), [
        locale,
        dictionary
    ]);
}



//# sourceMappingURL=useLocalizedStringFormatter.module.js.map


/***/ },

/***/ 31815
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $S: () => (/* binding */ $431f98aba6844401$export$6615d83f6de245ce)
/* harmony export */ });
/* unused harmony exports SeparatorNode, Separator */
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);






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




const $431f98aba6844401$export$6615d83f6de245ce = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
class $431f98aba6844401$export$7750289ca694c0b5 extends (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_0__/* .CollectionNode */ .Pt) {
    filter(collection, newCollection) {
        let prevItem = newCollection.getItem(this.prevKey);
        if (prevItem && prevItem.type !== 'separator') {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
$431f98aba6844401$export$7750289ca694c0b5.type = 'separator';
const $431f98aba6844401$export$1ff3c3f08ae963c0 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $i9JCE$createLeafComponent)($431f98aba6844401$export$7750289ca694c0b5, function Separator(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $431f98aba6844401$export$6615d83f6de245ce);
    let { elementType: elementType, orientation: orientation, style: style, className: className, slot: slot, ...otherProps } = props;
    let Element = elementType || 'hr';
    if (Element === 'hr' && orientation === 'vertical') Element = 'div';
    let { separatorProps: separatorProps } = (0, $i9JCE$useSeparator)({
        ...otherProps,
        elementType: elementType,
        orientation: orientation
    });
    let DOMProps = (0, $i9JCE$filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, $i9JCE$react).createElement(Element, {
        ...(0, $i9JCE$mergeProps)(DOMProps, separatorProps),
        style: style,
        className: className !== null && className !== void 0 ? className : 'react-aria-Separator',
        ref: ref,
        slot: slot || undefined
    });
})));



//# sourceMappingURL=Separator.module.js.map


/***/ },

/***/ 32373
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A3: () => (/* binding */ $4e85f108e88277b8$export$d688439359537581),
/* harmony export */   BP: () => (/* binding */ $4e85f108e88277b8$export$b085522c77523c51),
/* harmony export */   Co: () => (/* binding */ $4e85f108e88277b8$export$b0d3ecf7112093a7),
/* harmony export */   wv: () => (/* binding */ $4e85f108e88277b8$export$698f465ec27e93df)
/* harmony export */ });
/* unused harmony exports ColorAreaContext, ColorFieldContext, ColorSliderContext, ColorWheelContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $4e85f108e88277b8$export$b085522c77523c51 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$ebe63fadcdce34ed = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$44644b8a16031b5b = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$717b2c0a523a0b53 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$265015d6dc85bf21 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$d688439359537581 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $4e85f108e88277b8$export$b0d3ecf7112093a7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$698f465ec27e93df = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);



//# sourceMappingURL=RSPContexts.module.js.map


/***/ },

/***/ 33462
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ $880e95eb8b93ba9a$export$ecf600387e221c37)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4345);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72166);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43831);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3704);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35044);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60155);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4175);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55799);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96540);






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




function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
    let { id: id, selectionManager: manager, key: key, ref: ref, shouldSelectOnPressUp: shouldSelectOnPressUp, shouldUseVirtualFocus: shouldUseVirtualFocus, focus: focus, isDisabled: isDisabled, onAction: onAction, allowsDifferentPressOrigin: allowsDifferentPressOrigin, linkBehavior: linkBehavior = 'action' } = options;
    let router = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useRouter */ .rd)();
    id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Bi)(id);
    let onSelect = (e)=>{
        if (e.pointerType === 'keyboard' && (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isNonContiguousSelectionModifier */ .N9)(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === 'none') return;
            if (manager.isLink(key)) {
                if (linkBehavior === 'selection' && ref.current) {
                    let itemProps = manager.getItemProps(key);
                    router.open(ref.current, e, itemProps.href, itemProps.routerOptions);
                    // Always set selected keys back to what they were so that select and combobox close.
                    manager.setSelectedKeys(manager.selectedKeys);
                    return;
                } else if (linkBehavior === 'override' || linkBehavior === 'none') return;
            }
            if (manager.selectionMode === 'single') {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === 'toggle' || e && ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .isCtrlKeyPressed */ .B)(e) || e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
            manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    // TODO: can't make this useLayoutEffect bacause it breaks menus inside dialogs
    // However, if this is a useEffect, it runs twice and dispatches two blur events and immediately sets
    // aria-activeDescendant in useAutocomplete... I've worked around this for now
    (0, react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        let isFocused = key === manager.focusedKey;
        if (isFocused && manager.isFocused) {
            if (!shouldUseVirtualFocus) {
                if (focus) focus();
                else if (document.activeElement !== ref.current && ref.current) (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_8__/* .focusSafely */ .l)(ref.current);
            } else (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__/* .moveVirtualFocus */ .vX)(ref.current);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref,
        key,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    isDisabled = isDisabled || manager.isDisabled(key);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {};
    if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
        tabIndex: key === manager.focusedKey ? 0 : -1,
        onFocus (e) {
            if (e.target === ref.current) manager.setFocusedKey(key);
        }
    };
    else if (isDisabled) itemProps.onMouseDown = (e)=>{
        // Prevent focus going to the body when clicking on a disabled item.
        e.preventDefault();
    };
    // With checkbox selection, onAction (i.e. navigation) becomes primary, and occurs on a single click of the row.
    // Clicking the checkbox enters selection mode, after which clicking anywhere on any row toggles selection for that row.
    // With highlight selection, onAction is secondary, and occurs on double click. Single click selects the row.
    // With touch, onAction occurs on single tap, and long press enters selection mode.
    let isLinkOverride = manager.isLink(key) && linkBehavior === 'override';
    let isActionOverride = onAction && options['UNSTABLE_itemBehavior'] === 'action';
    let hasLinkAction = manager.isLink(key) && linkBehavior !== 'selection' && linkBehavior !== 'none';
    let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride && !isActionOverride;
    let allowsActions = (onAction || hasLinkAction) && !isDisabled;
    let hasPrimaryAction = allowsActions && (manager.selectionBehavior === 'replace' ? !allowsSelection : !allowsSelection || manager.isEmpty);
    let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === 'replace';
    let hasAction = hasPrimaryAction || hasSecondaryAction;
    let modality = (0, react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null);
    let longPressEnabled = hasAction && allowsSelection;
    let longPressEnabledOnPressStart = (0, react__WEBPACK_IMPORTED_MODULE_10__.useRef)(false);
    let hadPrimaryActionOnPressStart = (0, react__WEBPACK_IMPORTED_MODULE_10__.useRef)(false);
    let collectionItemProps = manager.getItemProps(key);
    let performAction = (e)=>{
        if (onAction) {
            var _ref_current;
            onAction();
            (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.dispatchEvent(new CustomEvent('react-aria-item-action', {
                bubbles: true
            }));
        }
        if (hasLinkAction && ref.current) router.open(ref.current, e, collectionItemProps.href, collectionItemProps.routerOptions);
    };
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {
        ref: ref
    };
    if (shouldSelectOnPressUp) {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            if (e.pointerType === 'keyboard' && (!hasAction || $880e95eb8b93ba9a$var$isSelectionKey())) onSelect(e);
        };
        // If allowsDifferentPressOrigin and interacting with mouse, make selection happen on pressUp (e.g. open menu on press down, selection on menu item happens on press up.)
        // Otherwise, have selection happen onPress (prevents listview row selection when clicking on interactable elements in the row)
        if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e)=>{
            if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== 'mouse') {
                if (e.pointerType === 'keyboard' && !$880e95eb8b93ba9a$var$isActionKey()) return;
                performAction(e);
            } else if (e.pointerType !== 'keyboard' && allowsSelection) onSelect(e);
        };
        else {
            itemPressProps.onPressUp = hasPrimaryAction ? undefined : (e)=>{
                if (e.pointerType === 'mouse' && allowsSelection) onSelect(e);
            };
            itemPressProps.onPress = hasPrimaryAction ? performAction : (e)=>{
                if (e.pointerType !== 'keyboard' && e.pointerType !== 'mouse' && allowsSelection) onSelect(e);
            };
        }
    } else {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            hadPrimaryActionOnPressStart.current = hasPrimaryAction;
            // Select on mouse down unless there is a primary action which will occur on mouse up.
            // For keyboard, select on key down. If there is an action, the Space key selects on key down,
            // and the Enter key performs onAction on key up.
            if (allowsSelection && (e.pointerType === 'mouse' && !hasPrimaryAction || e.pointerType === 'keyboard' && (!allowsActions || $880e95eb8b93ba9a$var$isSelectionKey()))) onSelect(e);
        };
        itemPressProps.onPress = (e)=>{
            // Selection occurs on touch up. Primary actions always occur on pointer up.
            // Both primary and secondary actions occur on Enter key up. The only exception
            // is secondary actions, which occur on double click with a mouse.
            if (e.pointerType === 'touch' || e.pointerType === 'pen' || e.pointerType === 'virtual' || e.pointerType === 'keyboard' && hasAction && $880e95eb8b93ba9a$var$isActionKey() || e.pointerType === 'mouse' && hadPrimaryActionOnPressStart.current) {
                if (hasAction) performAction(e);
                else if (allowsSelection) onSelect(e);
            }
        };
    }
    itemProps['data-collection'] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getCollectionId */ .EG)(manager.collection);
    itemProps['data-key'] = key;
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    // When using virtual focus, make sure the focused key gets updated on press.
    if (shouldUseVirtualFocus) itemPressProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .v)(itemPressProps, {
        onPressStart (e) {
            if (e.pointerType !== 'touch') {
                manager.setFocused(true);
                manager.setFocusedKey(key);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch') {
                manager.setFocused(true);
                manager.setFocusedKey(key);
            }
        }
    });
    if (collectionItemProps) {
        for (let key of [
            'onPressStart',
            'onPressEnd',
            'onPressChange',
            'onPress',
            'onPressUp',
            'onClick'
        ])if (collectionItemProps[key]) itemPressProps[key] = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .chain */ .c)(itemPressProps[key], collectionItemProps[key]);
    }
    let { pressProps: pressProps, isPressed: isPressed } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_6__/* .usePress */ .d)(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === 'mouse') {
            e.stopPropagation();
            e.preventDefault();
            performAction(e);
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    let { longPressProps: longPressProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_7__/* .useLongPress */ .H)({
        isDisabled: !longPressEnabled,
        onLongPress (e) {
            if (e.pointerType === 'touch') {
                onSelect(e);
                manager.setSelectionBehavior('toggle');
            }
        }
    });
    // Prevent native drag and drop on long press if we also select on long press.
    // Once the user is in selection mode, they can long press again to drag.
    // Use a capturing listener to ensure this runs before useDrag, regardless of
    // the order the props get merged.
    let onDragStartCapture = (e)=>{
        if (modality.current === 'touch' && longPressEnabledOnPressStart.current) e.preventDefault();
    };
    // Prevent default on link clicks so that we control exactly
    // when they open (to match selection behavior).
    let onClick = linkBehavior !== 'none' && manager.isLink(key) ? (e)=>{
        if (!(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .openLink */ .Fe).isOpening) e.preventDefault();
    } : undefined;
    return {
        itemProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .v)(itemProps, allowsSelection || hasPrimaryAction || shouldUseVirtualFocus && !isDisabled ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
            onDoubleClick: onDoubleClick,
            onDragStartCapture: onDragStartCapture,
            onClick: onClick,
            id: id
        }, // Prevent DOM focus from moving on mouse down when using virtual focus
        shouldUseVirtualFocus ? {
            onMouseDown: (e)=>e.preventDefault()
        } : undefined),
        isPressed: isPressed,
        isSelected: manager.isSelected(key),
        isFocused: manager.isFocused && manager.focusedKey === key,
        isDisabled: isDisabled,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}
function $880e95eb8b93ba9a$var$isActionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === 'Enter';
}
function $880e95eb8b93ba9a$var$isSelectionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === ' ' || (event === null || event === void 0 ? void 0 : event.code) === 'Space';
}



//# sourceMappingURL=useSelectableItem.module.js.map


/***/ },

/***/ 41177
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pM: () => (/* binding */ $e1995378a142960e$export$fb8073518f34e6ec),
  GQ: () => (/* binding */ $e1995378a142960e$export$bf788dd355e3a401),
  yq: () => (/* binding */ $e1995378a142960e$export$e953bb1cd0f19726),
  KU: () => (/* binding */ $e1995378a142960e$export$18af5c7a9e9b3664)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/BaseCollection.mjs
var BaseCollection = __webpack_require__(46540);
;// ./node_modules/@react-aria/collections/dist/Document.mjs
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
 */ class $681cc3c98f569e39$export$410b0c854570d131 {
    *[Symbol.iterator]() {
        let node = this.firstChild;
        while(node){
            yield node;
            node = node.nextSibling;
        }
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(firstChild) {
        this._firstChild = firstChild;
        this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(lastChild) {
        this._lastChild = lastChild;
        this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(previousSibling) {
        this._previousSibling = previousSibling;
        this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(nextSibling) {
        this._nextSibling = nextSibling;
        this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(parentNode) {
        this._parentNode = parentNode;
        this.ownerDocument.markDirty(this);
    }
    get isConnected() {
        var _this_parentNode;
        return ((_this_parentNode = this.parentNode) === null || _this_parentNode === void 0 ? void 0 : _this_parentNode.isConnected) || false;
    }
    invalidateChildIndices(child) {
        if (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || child.index < this._minInvalidChildIndex.index) {
            this._minInvalidChildIndex = child;
            this.ownerDocument.markDirty(this);
        }
    }
    updateChildIndices() {
        let node = this._minInvalidChildIndex;
        while(node){
            node.index = node.previousSibling ? node.previousSibling.index + 1 : 0;
            node = node.nextSibling;
        }
        this._minInvalidChildIndex = null;
    }
    appendChild(child) {
        if (child.parentNode) child.parentNode.removeChild(child);
        if (this.firstChild == null) this.firstChild = child;
        if (this.lastChild) {
            this.lastChild.nextSibling = child;
            child.index = this.lastChild.index + 1;
            child.previousSibling = this.lastChild;
        } else {
            child.previousSibling = null;
            child.index = 0;
        }
        child.parentNode = this;
        child.nextSibling = null;
        this.lastChild = child;
        this.ownerDocument.markDirty(this);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    insertBefore(newNode, referenceNode) {
        if (referenceNode == null) return this.appendChild(newNode);
        if (newNode.parentNode) newNode.parentNode.removeChild(newNode);
        newNode.nextSibling = referenceNode;
        newNode.previousSibling = referenceNode.previousSibling;
        // Ensure that the newNode's index is less than that of the reference node so that
        // invalidateChildIndices will properly use the newNode as the _minInvalidChildIndex, thus making sure
        // we will properly update the indexes of all sibiling nodes after the newNode. The value here doesn't matter
        // since updateChildIndices should calculate the proper indexes.
        newNode.index = referenceNode.index - 1;
        if (this.firstChild === referenceNode) this.firstChild = newNode;
        else if (referenceNode.previousSibling) referenceNode.previousSibling.nextSibling = newNode;
        referenceNode.previousSibling = newNode;
        newNode.parentNode = referenceNode.parentNode;
        this.invalidateChildIndices(newNode);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    removeChild(child) {
        if (child.parentNode !== this) return;
        if (this._minInvalidChildIndex === child) this._minInvalidChildIndex = null;
        if (child.nextSibling) {
            this.invalidateChildIndices(child.nextSibling);
            child.nextSibling.previousSibling = child.previousSibling;
        }
        if (child.previousSibling) child.previousSibling.nextSibling = child.nextSibling;
        if (this.firstChild === child) this.firstChild = child.nextSibling;
        if (this.lastChild === child) this.lastChild = child.previousSibling;
        child.parentNode = null;
        child.nextSibling = null;
        child.previousSibling = null;
        child.index = 0;
        this.ownerDocument.markDirty(child);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    get previousVisibleSibling() {
        let node = this.previousSibling;
        while(node && node.isHidden)node = node.previousSibling;
        return node;
    }
    get nextVisibleSibling() {
        let node = this.nextSibling;
        while(node && node.isHidden)node = node.nextSibling;
        return node;
    }
    get firstVisibleChild() {
        let node = this.firstChild;
        while(node && node.isHidden)node = node.nextSibling;
        return node;
    }
    get lastVisibleChild() {
        let node = this.lastChild;
        while(node && node.isHidden)node = node.previousSibling;
        return node;
    }
    constructor(ownerDocument){
        this._firstChild = null;
        this._lastChild = null;
        this._previousSibling = null;
        this._nextSibling = null;
        this._parentNode = null;
        this._minInvalidChildIndex = null;
        this.ownerDocument = ownerDocument;
    }
}
class $681cc3c98f569e39$export$dc064fe9e59310fd extends $681cc3c98f569e39$export$410b0c854570d131 {
    get index() {
        return this._index;
    }
    set index(index) {
        this._index = index;
        this.ownerDocument.markDirty(this);
    }
    get level() {
        var _this_node;
        if (this.parentNode instanceof $681cc3c98f569e39$export$dc064fe9e59310fd) return this.parentNode.level + (((_this_node = this.node) === null || _this_node === void 0 ? void 0 : _this_node.type) === 'item' ? 1 : 0);
        return 0;
    }
    /**
   * Lazily gets a mutable instance of a Node. If the node has already
   * been cloned during this update cycle, it just returns the existing one.
   */ getMutableNode() {
        if (this.node == null) return null;
        if (!this.isMutated) {
            this.node = this.node.clone();
            this.isMutated = true;
        }
        this.ownerDocument.markDirty(this);
        return this.node;
    }
    updateNode() {
        var _this_parentNode_node, _this_previousVisibleSibling_node, _this_previousVisibleSibling, _nextSibling_node, _this_firstVisibleChild_node, _this_firstVisibleChild, _this_lastVisibleChild_node, _this_lastVisibleChild;
        let nextSibling = this.nextVisibleSibling;
        let node = this.getMutableNode();
        if (node == null) return;
        node.index = this.index;
        node.level = this.level;
        var _this_parentNode_node_key;
        node.parentKey = this.parentNode instanceof $681cc3c98f569e39$export$dc064fe9e59310fd ? (_this_parentNode_node_key = (_this_parentNode_node = this.parentNode.node) === null || _this_parentNode_node === void 0 ? void 0 : _this_parentNode_node.key) !== null && _this_parentNode_node_key !== void 0 ? _this_parentNode_node_key : null : null;
        var _this_previousVisibleSibling_node_key;
        node.prevKey = (_this_previousVisibleSibling_node_key = (_this_previousVisibleSibling = this.previousVisibleSibling) === null || _this_previousVisibleSibling === void 0 ? void 0 : (_this_previousVisibleSibling_node = _this_previousVisibleSibling.node) === null || _this_previousVisibleSibling_node === void 0 ? void 0 : _this_previousVisibleSibling_node.key) !== null && _this_previousVisibleSibling_node_key !== void 0 ? _this_previousVisibleSibling_node_key : null;
        var _nextSibling_node_key;
        node.nextKey = (_nextSibling_node_key = nextSibling === null || nextSibling === void 0 ? void 0 : (_nextSibling_node = nextSibling.node) === null || _nextSibling_node === void 0 ? void 0 : _nextSibling_node.key) !== null && _nextSibling_node_key !== void 0 ? _nextSibling_node_key : null;
        node.hasChildNodes = !!this.firstChild;
        var _this_firstVisibleChild_node_key;
        node.firstChildKey = (_this_firstVisibleChild_node_key = (_this_firstVisibleChild = this.firstVisibleChild) === null || _this_firstVisibleChild === void 0 ? void 0 : (_this_firstVisibleChild_node = _this_firstVisibleChild.node) === null || _this_firstVisibleChild_node === void 0 ? void 0 : _this_firstVisibleChild_node.key) !== null && _this_firstVisibleChild_node_key !== void 0 ? _this_firstVisibleChild_node_key : null;
        var _this_lastVisibleChild_node_key;
        node.lastChildKey = (_this_lastVisibleChild_node_key = (_this_lastVisibleChild = this.lastVisibleChild) === null || _this_lastVisibleChild === void 0 ? void 0 : (_this_lastVisibleChild_node = _this_lastVisibleChild.node) === null || _this_lastVisibleChild_node === void 0 ? void 0 : _this_lastVisibleChild_node.key) !== null && _this_lastVisibleChild_node_key !== void 0 ? _this_lastVisibleChild_node_key : null;
        // Update the colIndex of sibling nodes if this node has a colSpan.
        if ((node.colSpan != null || node.colIndex != null) && nextSibling) {
            var _node_colIndex, _node_colSpan;
            // This queues the next sibling for update, which means this happens recursively.
            let nextColIndex = ((_node_colIndex = node.colIndex) !== null && _node_colIndex !== void 0 ? _node_colIndex : node.index) + ((_node_colSpan = node.colSpan) !== null && _node_colSpan !== void 0 ? _node_colSpan : 1);
            if (nextSibling.node != null && nextColIndex !== nextSibling.node.colIndex) {
                let siblingNode = nextSibling.getMutableNode();
                siblingNode.colIndex = nextColIndex;
            }
        }
    }
    setProps(obj, ref, CollectionNodeClass, rendered, render) {
        let node;
        let { value: value1, textValue: textValue, id: id, ...props } = obj;
        if (this.node == null) {
            node = new CollectionNodeClass(id !== null && id !== void 0 ? id : `react-aria-${++this.ownerDocument.nodeId}`);
            this.node = node;
        } else node = this.getMutableNode();
        props.ref = ref;
        node.props = props;
        node.rendered = rendered;
        node.render = render;
        node.value = value1;
        if (obj['aria-label']) node['aria-label'] = obj['aria-label'];
        node.textValue = textValue || (typeof props.children === 'string' ? props.children : '') || obj['aria-label'] || '';
        if (id != null && id !== node.key) throw new Error('Cannot change the id of an item');
        if (props.colSpan != null) node.colSpan = props.colSpan;
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    get style() {
        // React sets display: none to hide elements during Suspense.
        // We'll handle this by setting the element to hidden and invalidating
        // its siblings/parent. Hidden elements remain in the Document, but
        // are removed from the Collection.
        let element = this;
        return {
            get display () {
                return element.isHidden ? 'none' : '';
            },
            set display (value){
                let isHidden = value === 'none';
                if (element.isHidden !== isHidden) {
                    var _element_parentNode, _element_parentNode1;
                    // Mark parent node dirty if this element is currently the first or last visible child.
                    if (((_element_parentNode = element.parentNode) === null || _element_parentNode === void 0 ? void 0 : _element_parentNode.firstVisibleChild) === element || ((_element_parentNode1 = element.parentNode) === null || _element_parentNode1 === void 0 ? void 0 : _element_parentNode1.lastVisibleChild) === element) element.ownerDocument.markDirty(element.parentNode);
                    // Mark sibling visible elements dirty.
                    let prev = element.previousVisibleSibling;
                    let next = element.nextVisibleSibling;
                    if (prev) element.ownerDocument.markDirty(prev);
                    if (next) element.ownerDocument.markDirty(next);
                    // Mark self dirty.
                    element.isHidden = isHidden;
                    element.ownerDocument.markDirty(element);
                }
            }
        };
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
    constructor(type, ownerDocument){
        super(ownerDocument), this.nodeType = 8 // COMMENT_NODE (we'd use ELEMENT_NODE but React DevTools will fail to get its dimensions)
        , this.isMutated = true, this._index = 0, this.isHidden = false;
        this.node = null;
    }
}
class $681cc3c98f569e39$export$b34a105447964f9f extends $681cc3c98f569e39$export$410b0c854570d131 {
    get isConnected() {
        return true;
    }
    createElement(type) {
        return new $681cc3c98f569e39$export$dc064fe9e59310fd(type, this);
    }
    getMutableCollection() {
        if (!this.nextCollection) this.nextCollection = this.collection.clone();
        return this.nextCollection;
    }
    markDirty(node) {
        this.dirtyNodes.add(node);
    }
    addNode(element) {
        if (element.isHidden || element.node == null) return;
        let collection = this.getMutableCollection();
        if (!collection.getItem(element.node.key)) for (let child of element)this.addNode(child);
        collection.addNode(element.node);
    }
    removeNode(node) {
        for (let child of node)this.removeNode(child);
        if (node.node) {
            let collection = this.getMutableCollection();
            collection.removeNode(node.node.key);
        }
    }
    /** Finalizes the collection update, updating all nodes and freezing the collection. */ getCollection() {
        // If in a subscription update, return a clone of the existing collection.
        // This ensures React will queue a render. React will call getCollection again
        // during render, at which point all the updates will be complete and we can return
        // the new collection.
        if (this.inSubscription) return this.collection.clone();
        // Reset queuedRender to false when getCollection is called during render.
        this.queuedRender = false;
        this.updateCollection();
        return this.collection;
    }
    updateCollection() {
        // First, remove disconnected nodes and update the indices of dirty element children.
        for (let element of this.dirtyNodes)if (element instanceof $681cc3c98f569e39$export$dc064fe9e59310fd && (!element.isConnected || element.isHidden)) this.removeNode(element);
        else element.updateChildIndices();
        // Next, update dirty collection nodes.
        for (let element of this.dirtyNodes)if (element instanceof $681cc3c98f569e39$export$dc064fe9e59310fd) {
            if (element.isConnected && !element.isHidden) {
                element.updateNode();
                this.addNode(element);
            }
            if (element.node) this.dirtyNodes.delete(element);
            element.isMutated = false;
        } else this.dirtyNodes.delete(element);
        // Finally, update the collection.
        if (this.nextCollection) {
            var _this_firstVisibleChild_node, _this_firstVisibleChild, _this_lastVisibleChild_node, _this_lastVisibleChild;
            var _this_firstVisibleChild_node_key, _this_lastVisibleChild_node_key;
            this.nextCollection.commit((_this_firstVisibleChild_node_key = (_this_firstVisibleChild = this.firstVisibleChild) === null || _this_firstVisibleChild === void 0 ? void 0 : (_this_firstVisibleChild_node = _this_firstVisibleChild.node) === null || _this_firstVisibleChild_node === void 0 ? void 0 : _this_firstVisibleChild_node.key) !== null && _this_firstVisibleChild_node_key !== void 0 ? _this_firstVisibleChild_node_key : null, (_this_lastVisibleChild_node_key = (_this_lastVisibleChild = this.lastVisibleChild) === null || _this_lastVisibleChild === void 0 ? void 0 : (_this_lastVisibleChild_node = _this_lastVisibleChild.node) === null || _this_lastVisibleChild_node === void 0 ? void 0 : _this_lastVisibleChild_node.key) !== null && _this_lastVisibleChild_node_key !== void 0 ? _this_lastVisibleChild_node_key : null, this.isSSR);
            if (!this.isSSR) {
                this.collection = this.nextCollection;
                this.nextCollection = null;
            }
        }
    }
    queueUpdate() {
        if (this.dirtyNodes.size === 0 || this.queuedRender) return;
        // Only trigger subscriptions once during an update, when the first item changes.
        // React's useSyncExternalStore will call getCollection immediately, to check whether the snapshot changed.
        // If so, React will queue a render to happen after the current commit to our fake DOM finishes.
        // We track whether getCollection is called in a subscription, and once it is called during render,
        // we reset queuedRender back to false.
        this.queuedRender = true;
        this.inSubscription = true;
        for (let fn of this.subscriptions)fn();
        this.inSubscription = false;
    }
    subscribe(fn) {
        this.subscriptions.add(fn);
        return ()=>this.subscriptions.delete(fn);
    }
    resetAfterSSR() {
        if (this.isSSR) {
            this.isSSR = false;
            this.firstChild = null;
            this.lastChild = null;
            this.nodeId = 0;
        }
    }
    constructor(collection){
        // @ts-ignore
        super(null), this.nodeType = 11 // DOCUMENT_FRAGMENT_NODE
        , this.ownerDocument = this, this.dirtyNodes = new Set(), this.isSSR = false, this.nodeId = 0, this.nodesByProps = new WeakMap(), this.nextCollection = null, this.subscriptions = new Set(), this.queuedRender = false, this.inSubscription = false;
        this.collection = collection;
        this.nextCollection = collection;
    }
}



//# sourceMappingURL=Document.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/useCachedChildren.mjs
var useCachedChildren = __webpack_require__(64367);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/Hidden.mjs
var Hidden = __webpack_require__(75127);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var SSRProvider = __webpack_require__(60415);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(19888);
;// ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs










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








const $e1995378a142960e$var$ShallowRenderContext = /*#__PURE__*/ (0, react.createContext)(false);
const $e1995378a142960e$var$CollectionDocumentContext = /*#__PURE__*/ (0, react.createContext)(null);
function $e1995378a142960e$export$bf788dd355e3a401(props) {
    // If a document was provided above us, we're already in a hidden tree. Just render the content.
    let doc = (0, react.useContext)($e1995378a142960e$var$CollectionDocumentContext);
    if (doc) // The React types prior to 18 did not allow returning ReactNode from components
    // even though the actual implementation since React 16 did.
    // We must return ReactElement so that TS does not complain that <CollectionBuilder>
    // is not a valid JSX element with React 16 and 17 types.
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
    return props.content;
    // Otherwise, render a hidden copy of the children so that we can build the collection before constructing the state.
    // This should always come before the real DOM content so we have built the collection by the time it renders during SSR.
    // This is fine. CollectionDocumentContext never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let { collection: collection, document: document } = $e1995378a142960e$var$useCollectionDocument(props.createCollection);
    return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, /*#__PURE__*/ (0, react).createElement((0, Hidden/* Hidden */.jZ), null, /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionDocumentContext.Provider, {
        value: document
    }, props.content)), /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionInner, {
        render: props.children,
        collection: collection
    }));
}
function $e1995378a142960e$var$CollectionInner({ collection: collection, render: render }) {
    return render(collection);
}
// React 16 and 17 don't support useSyncExternalStore natively, and the shim provided by React does not support getServerSnapshot.
// This wrapper uses the shim, but additionally calls getServerSnapshot during SSR (according to SSRProvider).
function $e1995378a142960e$var$useSyncExternalStoreFallback(subscribe, getSnapshot, getServerSnapshot) {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let isSSRRef = (0, react.useRef)(isSSR);
    // This is read immediately inside the wrapper, which also runs during render.
    // We just need a ref to avoid invalidating the callback itself, which
    // would cause React to re-run the callback more than necessary.
    // eslint-disable-next-line rulesdir/pure-render
    isSSRRef.current = isSSR;
    let getSnapshotWrapper = (0, react.useCallback)(()=>{
        return isSSRRef.current ? getServerSnapshot() : getSnapshot();
    }, [
        getSnapshot,
        getServerSnapshot
    ]);
    return (0, shim.useSyncExternalStore)(subscribe, getSnapshotWrapper);
}
const $e1995378a142960e$var$useSyncExternalStore = typeof (0, react)['useSyncExternalStore'] === 'function' ? (0, react)['useSyncExternalStore'] : $e1995378a142960e$var$useSyncExternalStoreFallback;
function $e1995378a142960e$var$useCollectionDocument(createCollection) {
    // The document instance is mutable, and should never change between renders.
    // useSyncExternalStore is used to subscribe to updates, which vends immutable Collection objects.
    let [document] = (0, react.useState)(()=>new (0, $681cc3c98f569e39$export$b34a105447964f9f)((createCollection === null || createCollection === void 0 ? void 0 : createCollection()) || new (0, BaseCollection/* BaseCollection */.Wk)()));
    let subscribe = (0, react.useCallback)((fn)=>document.subscribe(fn), [
        document
    ]);
    let getSnapshot = (0, react.useCallback)(()=>{
        let collection = document.getCollection();
        if (document.isSSR) // After SSR is complete, reset the document to empty so it is ready for React to render the portal into.
        // We do this _after_ getting the collection above so that the collection still has content in it from SSR
        // during the current render, before React has finished the client render.
        document.resetAfterSSR();
        return collection;
    }, [
        document
    ]);
    let getServerSnapshot = (0, react.useCallback)(()=>{
        document.isSSR = true;
        return document.getCollection();
    }, [
        document
    ]);
    let collection = $e1995378a142960e$var$useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return {
        collection: collection,
        document: document
    };
}
const $e1995378a142960e$var$SSRContext = /*#__PURE__*/ (0, react.createContext)(null);
function $e1995378a142960e$var$createCollectionNodeClass(type) {
    var _class;
    let NodeClass = (_class = class extends (0, BaseCollection/* CollectionNode */.Pt) {
    }, _class.type = type, _class);
    return NodeClass;
}
function $e1995378a142960e$var$useSSRCollectionNode(CollectionNodeClass, props, ref, rendered, children, render) {
    // To prevent breaking change, if CollectionNodeClass is a string, create a CollectionNodeClass using the string as the type
    if (typeof CollectionNodeClass === 'string') CollectionNodeClass = $e1995378a142960e$var$createCollectionNodeClass(CollectionNodeClass);
    // During SSR, portals are not supported, so the collection children will be wrapped in an SSRContext.
    // Since SSR occurs only once, we assume that the elements are rendered in order and never re-render.
    // Therefore we can create elements in our collection document during render so that they are in the
    // collection by the time we need to use the collection to render to the real DOM.
    // After hydration, we switch to client rendering using the portal.
    let itemRef = (0, react.useCallback)((element)=>{
        element === null || element === void 0 ? void 0 : element.setProps(props, ref, CollectionNodeClass, rendered, render);
    }, [
        props,
        ref,
        rendered,
        render,
        CollectionNodeClass
    ]);
    let parentNode = (0, react.useContext)($e1995378a142960e$var$SSRContext);
    if (parentNode) {
        // Guard against double rendering in strict mode.
        let element = parentNode.ownerDocument.nodesByProps.get(props);
        if (!element) {
            element = parentNode.ownerDocument.createElement(CollectionNodeClass.type);
            element.setProps(props, ref, CollectionNodeClass, rendered, render);
            parentNode.appendChild(element);
            parentNode.ownerDocument.updateCollection();
            parentNode.ownerDocument.nodesByProps.set(props, element);
        }
        return children ? /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$SSRContext.Provider, {
            value: element
        }, children) : null;
    }
    // @ts-ignore
    return /*#__PURE__*/ (0, react).createElement(CollectionNodeClass.type, {
        ref: itemRef
    }, children);
}
function $e1995378a142960e$export$18af5c7a9e9b3664(CollectionNodeClass, render) {
    let Component = ({ node: node })=>render(node.props, node.props.ref, node);
    let Result = (0, react.forwardRef)((props, ref)=>{
        let focusableProps = (0, react.useContext)((0, useFocusable/* FocusableContext */.gY));
        let isShallow = (0, react.useContext)($e1995378a142960e$var$ShallowRenderContext);
        if (!isShallow) {
            if (render.length >= 3) throw new Error(render.name + ' cannot be rendered outside a collection.');
            return render(props, ref);
        }
        return $e1995378a142960e$var$useSSRCollectionNode(CollectionNodeClass, props, ref, 'children' in props ? props.children : null, null, (node)=>// Forward FocusableContext to real DOM tree so tooltips work.
            /*#__PURE__*/ (0, react).createElement((0, useFocusable/* FocusableContext */.gY).Provider, {
                value: focusableProps
            }, /*#__PURE__*/ (0, react).createElement(Component, {
                node: node
            })));
    });
    // @ts-ignore
    Result.displayName = render.name;
    return Result;
}
function $e1995378a142960e$export$e953bb1cd0f19726(CollectionNodeClass, render, useChildren = $e1995378a142960e$var$useCollectionChildren) {
    let Component = ({ node: node })=>render(node.props, node.props.ref, node);
    let Result = (0, react.forwardRef)((props, ref)=>{
        let children = useChildren(props);
        var _useSSRCollectionNode;
        return (_useSSRCollectionNode = $e1995378a142960e$var$useSSRCollectionNode(CollectionNodeClass, props, ref, null, children, (node)=>/*#__PURE__*/ (0, react).createElement(Component, {
                node: node
            }))) !== null && _useSSRCollectionNode !== void 0 ? _useSSRCollectionNode : /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null);
    });
    // @ts-ignore
    Result.displayName = render.name;
    return Result;
}
function $e1995378a142960e$var$useCollectionChildren(options) {
    return (0, useCachedChildren/* useCachedChildren */.p)({
        ...options,
        addIdAndValue: true
    });
}
const $e1995378a142960e$var$CollectionContext = /*#__PURE__*/ (0, react.createContext)(null);
function $e1995378a142960e$export$fb8073518f34e6ec(props) {
    let ctx = (0, react.useContext)($e1995378a142960e$var$CollectionContext);
    let dependencies = ((ctx === null || ctx === void 0 ? void 0 : ctx.dependencies) || []).concat(props.dependencies);
    var _props_idScope;
    let idScope = (_props_idScope = props.idScope) !== null && _props_idScope !== void 0 ? _props_idScope : ctx === null || ctx === void 0 ? void 0 : ctx.idScope;
    let children = $e1995378a142960e$var$useCollectionChildren({
        ...props,
        idScope: idScope,
        dependencies: dependencies
    });
    let doc = (0, react.useContext)($e1995378a142960e$var$CollectionDocumentContext);
    if (doc) children = /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionRoot, null, children);
    // Propagate dependencies and idScope to child collections.
    ctx = (0, react.useMemo)(()=>({
            dependencies: dependencies,
            idScope: idScope
        }), [
        idScope,
        ...dependencies
    ]);
    return /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionContext.Provider, {
        value: ctx
    }, children);
}
function $e1995378a142960e$var$CollectionRoot({ children: children }) {
    let doc = (0, react.useContext)($e1995378a142960e$var$CollectionDocumentContext);
    let wrappedChildren = (0, react.useMemo)(()=>/*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$CollectionDocumentContext.Provider, {
            value: null
        }, /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$ShallowRenderContext.Provider, {
            value: true
        }, children)), [
        children
    ]);
    // During SSR, we render the content directly, and append nodes to the document during render.
    // The collection children return null so that nothing is actually rendered into the HTML.
    return (0, SSRProvider/* useIsSSR */.wR)() ? /*#__PURE__*/ (0, react).createElement($e1995378a142960e$var$SSRContext.Provider, {
        value: doc
    }, wrappedChildren) : /*#__PURE__*/ (0, react_dom.createPortal)(wrappedChildren, doc);
}



//# sourceMappingURL=CollectionBuilder.module.js.map


/***/ },

/***/ 44346
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $ef06256079686ba0$export$f8aeda7b10753fa1)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLayoutEffect */ .N)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}



//# sourceMappingURL=useDescription.module.js.map


/***/ },

/***/ 46540
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EH: () => (/* binding */ $23b9f4fcf0fe224b$export$5ae2504e948afce5),
/* harmony export */   OJ: () => (/* binding */ $23b9f4fcf0fe224b$export$8258a0665a675899),
/* harmony export */   Pt: () => (/* binding */ $23b9f4fcf0fe224b$export$d68d59712b04d9d1),
/* harmony export */   Wk: () => (/* binding */ $23b9f4fcf0fe224b$export$408d25a4e12db025),
/* harmony export */   _B: () => (/* binding */ $23b9f4fcf0fe224b$export$fd11f34e1d07f134),
/* harmony export */   ox: () => (/* binding */ $23b9f4fcf0fe224b$export$437f11dc9b403b78),
/* harmony export */   ru: () => (/* binding */ $23b9f4fcf0fe224b$export$b1918e978f1ee46f)
/* harmony export */ });
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
 */ class $23b9f4fcf0fe224b$export$d68d59712b04d9d1 {
    get childNodes() {
        throw new Error('childNodes is not supported');
    }
    clone() {
        let node = new this.constructor(this.key);
        node.value = this.value;
        node.level = this.level;
        node.hasChildNodes = this.hasChildNodes;
        node.rendered = this.rendered;
        node.textValue = this.textValue;
        node['aria-label'] = this['aria-label'];
        node.index = this.index;
        node.parentKey = this.parentKey;
        node.prevKey = this.prevKey;
        node.nextKey = this.nextKey;
        node.firstChildKey = this.firstChildKey;
        node.lastChildKey = this.lastChildKey;
        node.props = this.props;
        node.render = this.render;
        node.colSpan = this.colSpan;
        node.colIndex = this.colIndex;
        return node;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filter(collection, newCollection, filterFn) {
        let clone = this.clone();
        newCollection.addDescendants(clone, collection);
        return clone;
    }
    constructor(key){
        this.value = null;
        this.level = 0;
        this.hasChildNodes = false;
        this.rendered = null;
        this.textValue = '';
        this['aria-label'] = undefined;
        this.index = 0;
        this.parentKey = null;
        this.prevKey = null;
        this.nextKey = null;
        this.firstChildKey = null;
        this.lastChildKey = null;
        this.props = {};
        this.colSpan = null;
        this.colIndex = null;
        this.type = this.constructor.type;
        this.key = key;
    }
}
class $23b9f4fcf0fe224b$export$b1918e978f1ee46f extends $23b9f4fcf0fe224b$export$d68d59712b04d9d1 {
    filter(collection, newCollection, filterFn) {
        let [firstKey, lastKey] = $23b9f4fcf0fe224b$var$filterChildren(collection, newCollection, this.firstChildKey, filterFn);
        let newNode = this.clone();
        newNode.firstChildKey = firstKey;
        newNode.lastChildKey = lastKey;
        return newNode;
    }
}
class $23b9f4fcf0fe224b$export$5ae2504e948afce5 extends $23b9f4fcf0fe224b$export$d68d59712b04d9d1 {
}
$23b9f4fcf0fe224b$export$5ae2504e948afce5.type = 'header';
class $23b9f4fcf0fe224b$export$8258a0665a675899 extends $23b9f4fcf0fe224b$export$d68d59712b04d9d1 {
}
$23b9f4fcf0fe224b$export$8258a0665a675899.type = 'loader';
class $23b9f4fcf0fe224b$export$fd11f34e1d07f134 extends $23b9f4fcf0fe224b$export$b1918e978f1ee46f {
    filter(collection, newCollection, filterFn) {
        if (filterFn(this.textValue, this)) {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
$23b9f4fcf0fe224b$export$fd11f34e1d07f134.type = 'item';
class $23b9f4fcf0fe224b$export$437f11dc9b403b78 extends $23b9f4fcf0fe224b$export$b1918e978f1ee46f {
    filter(collection, newCollection, filterFn) {
        let filteredSection = super.filter(collection, newCollection, filterFn);
        if (filteredSection) {
            if (filteredSection.lastChildKey !== null) {
                let lastChild = collection.getItem(filteredSection.lastChildKey);
                if (lastChild && lastChild.type !== 'header') return filteredSection;
            }
        }
        return null;
    }
}
$23b9f4fcf0fe224b$export$437f11dc9b403b78.type = 'section';
class $23b9f4fcf0fe224b$export$408d25a4e12db025 {
    get size() {
        return this.itemCount;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[Symbol.iterator]() {
        let node = this.firstKey != null ? this.keyMap.get(this.firstKey) : undefined;
        while(node){
            yield node;
            node = node.nextKey != null ? this.keyMap.get(node.nextKey) : undefined;
        }
    }
    getChildren(key) {
        let keyMap = this.keyMap;
        return {
            *[Symbol.iterator] () {
                let parent = keyMap.get(key);
                let node = (parent === null || parent === void 0 ? void 0 : parent.firstChildKey) != null ? keyMap.get(parent.firstChildKey) : null;
                while(node){
                    yield node;
                    node = node.nextKey != null ? keyMap.get(node.nextKey) : undefined;
                }
            }
        };
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.prevKey != null) {
            node = this.keyMap.get(node.prevKey);
            while(node && node.type !== 'item' && node.lastChildKey != null)node = this.keyMap.get(node.lastChildKey);
            var _node_key;
            return (_node_key = node === null || node === void 0 ? void 0 : node.key) !== null && _node_key !== void 0 ? _node_key : null;
        }
        return node.parentKey;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.type !== 'item' && node.firstChildKey != null) return node.firstChildKey;
        while(node){
            if (node.nextKey != null) return node.nextKey;
            if (node.parentKey != null) node = this.keyMap.get(node.parentKey);
            else return null;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        let node = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
        while((node === null || node === void 0 ? void 0 : node.lastChildKey) != null)node = this.keyMap.get(node.lastChildKey);
        var _node_key;
        return (_node_key = node === null || node === void 0 ? void 0 : node.key) !== null && _node_key !== void 0 ? _node_key : null;
    }
    getItem(key) {
        var _this_keyMap_get;
        return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
    }
    at() {
        throw new Error('Not implemented');
    }
    clone() {
        // We need to clone using this.constructor so that subclasses have the right prototype.
        // TypeScript isn't happy about this yet.
        // https://github.com/microsoft/TypeScript/issues/3841
        let Constructor = this.constructor;
        let collection = new Constructor();
        collection.keyMap = new Map(this.keyMap);
        collection.firstKey = this.firstKey;
        collection.lastKey = this.lastKey;
        collection.itemCount = this.itemCount;
        return collection;
    }
    addNode(node) {
        if (this.frozen) throw new Error('Cannot add a node to a frozen collection');
        if (node.type === 'item' && this.keyMap.get(node.key) == null) this.itemCount++;
        this.keyMap.set(node.key, node);
    }
    // Deeply add a node and its children to the collection from another collection, primarily used when filtering a collection
    addDescendants(node, oldCollection) {
        this.addNode(node);
        let children = oldCollection.getChildren(node.key);
        for (let child of children)this.addDescendants(child, oldCollection);
    }
    removeNode(key) {
        if (this.frozen) throw new Error('Cannot remove a node to a frozen collection');
        let node = this.keyMap.get(key);
        if (node != null && node.type === 'item') this.itemCount--;
        this.keyMap.delete(key);
    }
    commit(firstKey, lastKey, isSSR = false) {
        if (this.frozen) throw new Error('Cannot commit a frozen collection');
        this.firstKey = firstKey;
        this.lastKey = lastKey;
        this.frozen = !isSSR;
    }
    filter(filterFn) {
        let newCollection = new this.constructor();
        let [firstKey, lastKey] = $23b9f4fcf0fe224b$var$filterChildren(this, newCollection, this.firstKey, filterFn);
        newCollection === null || newCollection === void 0 ? void 0 : newCollection.commit(firstKey, lastKey);
        return newCollection;
    }
    constructor(){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.frozen = false;
        this.itemCount = 0;
    }
}
function $23b9f4fcf0fe224b$var$filterChildren(collection, newCollection, firstChildKey, filterFn) {
    // loop over the siblings for firstChildKey
    // create new nodes based on calling node.filter for each child
    // if it returns null then don't include it, otherwise update its prev/next keys
    // add them to the newCollection
    if (firstChildKey == null) return [
        null,
        null
    ];
    let firstNode = null;
    let lastNode = null;
    let currentNode = collection.getItem(firstChildKey);
    while(currentNode != null){
        let newNode = currentNode.filter(collection, newCollection, filterFn);
        if (newNode != null) {
            newNode.nextKey = null;
            if (lastNode) {
                newNode.prevKey = lastNode.key;
                lastNode.nextKey = newNode.key;
            }
            if (firstNode == null) firstNode = newNode;
            newCollection.addNode(newNode);
            lastNode = newNode;
        }
        currentNode = currentNode.nextKey ? collection.getItem(currentNode.nextKey) : null;
    }
    // TODO: this is pretty specific to dividers but doesn't feel like there is a good way to get around it since we only can know
    // to filter the last separator in a collection only after performing a filter for the rest of the contents after it
    // Its gross that it needs to live here, might be nice if somehow we could have this live in the separator code
    if (lastNode && lastNode.type === 'separator') {
        let prevKey = lastNode.prevKey;
        newCollection.removeNode(lastNode.key);
        if (prevKey) {
            lastNode = newCollection.getItem(prevKey);
            lastNode.nextKey = null;
        } else lastNode = null;
    }
    var _firstNode_key, _lastNode_key;
    return [
        (_firstNode_key = firstNode === null || firstNode === void 0 ? void 0 : firstNode.key) !== null && _firstNode_key !== void 0 ? _firstNode_key : null,
        (_lastNode_key = lastNode === null || lastNode === void 0 ? void 0 : lastNode.key) !== null && _lastNode_key !== void 0 ? _lastNode_key : null
    ];
}



//# sourceMappingURL=BaseCollection.module.js.map


/***/ },

/***/ 47912
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $cc38e7bd3fc7b213$export$2bb74740c4e19def)
/* harmony export */ });
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
 */ function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}



//# sourceMappingURL=isScrollable.module.js.map


/***/ },

/***/ 55745
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $a28c903ee9ad8dc5$export$79fefeb1c2091ac3)
/* harmony export */ });
/* harmony import */ var _react_stately_overlays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71732);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

function $a28c903ee9ad8dc5$export$79fefeb1c2091ac3(props) {
    let overlayTriggerState = (0, _react_stately_overlays__WEBPACK_IMPORTED_MODULE_0__/* .useOverlayTriggerState */ .T)(props);
    let [focusStrategy, setFocusStrategy] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let [expandedKeysStack, setExpandedKeysStack] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let closeAll = ()=>{
        setExpandedKeysStack([]);
        overlayTriggerState.close();
    };
    let openSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            if (level > oldStack.length) return oldStack;
            return [
                ...oldStack.slice(0, level),
                triggerKey
            ];
        });
    };
    let closeSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            let key = oldStack[level];
            if (key === triggerKey) return oldStack.slice(0, level);
            else return oldStack;
        });
    };
    return {
        focusStrategy: focusStrategy,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        },
        close () {
            closeAll();
        },
        expandedKeysStack: expandedKeysStack,
        openSubmenu: openSubmenu,
        closeSubmenu: closeSubmenu
    };
}



//# sourceMappingURL=useMenuTriggerState.module.js.map


/***/ },

/***/ 55799
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ig: () => (/* binding */ $55f9b1ae81f22853$export$2b35b76d2e30e129),
/* harmony export */   vX: () => (/* binding */ $55f9b1ae81f22853$export$76e4e37e5339496d)
/* harmony export */ });
/* unused harmony exports getVirtuallyFocusedElement, dispatchVirtualBlur */
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99672);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24836);



function $55f9b1ae81f22853$export$76e4e37e5339496d(to) {
    let from = $55f9b1ae81f22853$export$759df0d867455a91((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(to));
    if (from !== to) {
        if (from) $55f9b1ae81f22853$export$6c5dc7e81d2cc29a(from, to);
        if (to) $55f9b1ae81f22853$export$2b35b76d2e30e129(to, from);
    }
}
function $55f9b1ae81f22853$export$6c5dc7e81d2cc29a(from, to) {
    from.dispatchEvent(new FocusEvent('blur', {
        relatedTarget: to
    }));
    from.dispatchEvent(new FocusEvent('focusout', {
        bubbles: true,
        relatedTarget: to
    }));
}
function $55f9b1ae81f22853$export$2b35b76d2e30e129(to, from) {
    to.dispatchEvent(new FocusEvent('focus', {
        relatedTarget: from
    }));
    to.dispatchEvent(new FocusEvent('focusin', {
        bubbles: true,
        relatedTarget: from
    }));
}
function $55f9b1ae81f22853$export$759df0d867455a91(document) {
    let activeElement = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(document);
    let activeDescendant = activeElement === null || activeElement === void 0 ? void 0 : activeElement.getAttribute('aria-activedescendant');
    if (activeDescendant) return document.getElementById(activeDescendant) || activeElement;
    return activeElement;
}



//# sourceMappingURL=virtualFocus.module.js.map


/***/ },

/***/ 58493
(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(96540);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useState = React.useState,
  useEffect = React.useEffect,
  useLayoutEffect = React.useLayoutEffect,
  useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(),
    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
    inst = _useState[0].inst,
    forceUpdate = _useState[1];
  useLayoutEffect(
    function () {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect(
    function () {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      return subscribe(function () {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      });
    },
    [subscribe]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim =
  "undefined" === typeof window ||
  "undefined" === typeof window.document ||
  "undefined" === typeof window.document.createElement
    ? useSyncExternalStore$1
    : useSyncExternalStore$2;
exports.useSyncExternalStore =
  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;


/***/ },

/***/ 58579
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ $982254629710d113$export$b95089534ab7c1fd)
/* harmony export */ });
/* harmony import */ var _useSelectableCollection_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1243);
/* harmony import */ var _ListKeyboardDelegate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96584);
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82627);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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



function $982254629710d113$export$b95089534ab7c1fd(props) {
    let { selectionManager: selectionManager, collection: collection, disabledKeys: disabledKeys, ref: ref, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__/* .useCollator */ .Q)({
        usage: 'search',
        sensitivity: 'base'
    });
    let disabledBehavior = selectionManager.disabledBehavior;
    let delegate = (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>keyboardDelegate || new (0, _ListKeyboardDelegate_mjs__WEBPACK_IMPORTED_MODULE_1__/* .ListKeyboardDelegate */ .n)({
            collection: collection,
            disabledKeys: disabledKeys,
            disabledBehavior: disabledBehavior,
            ref: ref,
            collator: collator,
            layoutDelegate: layoutDelegate
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        ref,
        collator,
        disabledBehavior
    ]);
    let { collectionProps: collectionProps } = (0, _useSelectableCollection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useSelectableCollection */ .y)({
        ...props,
        ref: ref,
        selectionManager: selectionManager,
        keyboardDelegate: delegate
    });
    return {
        listProps: collectionProps
    };
}



//# sourceMappingURL=useSelectableList.module.js.map


/***/ },

/***/ 60155
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $8a26561d2877236e$export$c24ed0104d07eab9)
/* harmony export */ });
/* harmony import */ var _usePress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35044);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32268);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76948);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44346);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96540);




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


const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled, onLongPressStart: onLongPressStart, onLongPressEnd: onLongPressEnd, onLongPress: onLongPress, threshold: threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD, accessibilityDescription: accessibilityDescription } = props;
    const timeRef = (0, react__WEBPACK_IMPORTED_MODULE_6__.useRef)(undefined);
    let { addGlobalListener: addGlobalListener, removeGlobalListener: removeGlobalListener } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useGlobalListeners */ .A)();
    let { pressProps: pressProps } = (0, _usePress_mjs__WEBPACK_IMPORTED_MODULE_0__/* .usePress */ .d)({
        isDisabled: isDisabled,
        onPressStart (e) {
            e.continuePropagation();
            if (e.pointerType === 'mouse' || e.pointerType === 'touch') {
                if (onLongPressStart) onLongPressStart({
                    ...e,
                    type: 'longpressstart'
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e.target.dispatchEvent(new PointerEvent('pointercancel', {
                        bubbles: true
                    }));
                    // Ensure target is focused. On touch devices, browsers typically focus on pointer up.
                    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(e.target).activeElement !== e.target) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .focusWithoutScrolling */ .e)(e.target);
                    if (onLongPress) onLongPress({
                        ...e,
                        type: 'longpress'
                    });
                    timeRef.current = undefined;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e.pointerType === 'touch') {
                    let onContextMenu = (e)=>{
                        e.preventDefault();
                    };
                    addGlobalListener(e.target, 'contextmenu', onContextMenu, {
                        once: true
                    });
                    addGlobalListener(window, 'pointerup', ()=>{
                        // If no contextmenu event is fired quickly after pointerup, remove the handler
                        // so future context menu events outside a long press are not prevented.
                        setTimeout(()=>{
                            removeGlobalListener(e.target, 'contextmenu', onContextMenu);
                        }, 30);
                    }, {
                        once: true
                    });
                }
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && (e.pointerType === 'mouse' || e.pointerType === 'touch')) onLongPressEnd({
                ...e,
                type: 'longpressend'
            });
        }
    });
    let descriptionProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .useDescription */ .I)(onLongPress && !isDisabled ? accessibilityDescription : undefined);
    return {
        longPressProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(pressProps, descriptionProps)
    };
}



//# sourceMappingURL=useLongPress.module.js.map


/***/ },

/***/ 60632
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $d496c0a20b6e58ec$export$6c8a5aaad13c9852)
/* harmony export */ });
/* harmony import */ var _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78831);
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80423);



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

class $d496c0a20b6e58ec$export$6c8a5aaad13c9852 {
    /**
   * The type of selection that is allowed in the collection.
   */ get selectionMode() {
        return this.state.selectionMode;
    }
    /**
   * Whether the collection allows empty selection.
   */ get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    /**
   * The selection behavior for the collection.
   */ get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    /**
   * Sets the selection behavior for the collection.
   */ setSelectionBehavior(selectionBehavior) {
        this.state.setSelectionBehavior(selectionBehavior);
    }
    /**
   * Whether the collection is currently focused.
   */ get isFocused() {
        return this.state.isFocused;
    }
    /**
   * Sets whether the collection is focused.
   */ setFocused(isFocused) {
        this.state.setFocused(isFocused);
    }
    /**
   * The current focused key in the collection.
   */ get focusedKey() {
        return this.state.focusedKey;
    }
    /** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    /**
   * Sets the focused key.
   */ setFocusedKey(key, childFocusStrategy) {
        if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
    }
    /**
   * The currently selected keys in the collection.
   */ get selectedKeys() {
        return this.state.selectedKeys === 'all' ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    /**
   * The raw selection value for the collection.
   * Either 'all' for select all, or a set of keys.
   */ get rawSelection() {
        return this.state.selectedKeys;
    }
    /**
   * Returns whether a key is selected.
   */ isSelected(key) {
        if (this.state.selectionMode === 'none') return false;
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return false;
        return this.state.selectedKeys === 'all' ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
    }
    /**
   * Whether the selection is empty.
   */ get isEmpty() {
        return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
    }
    /**
   * Whether all items in the collection are selected.
   */ get isSelectAll() {
        if (this.isEmpty) return false;
        if (this.state.selectedKeys === 'all') return true;
        if (this._isSelectAll != null) return this._isSelectAll;
        let allKeys = this.getSelectAllKeys();
        let selectedKeys = this.state.selectedKeys;
        this._isSelectAll = allKeys.every((k)=>selectedKeys.has(k));
        return this._isSelectAll;
    }
    get firstSelectedKey() {
        let first = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!first || item && (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_1__/* .compareNodeOrder */ .o3)(this.collection, item, first) < 0) first = item;
        }
        var _first_key;
        return (_first_key = first === null || first === void 0 ? void 0 : first.key) !== null && _first_key !== void 0 ? _first_key : null;
    }
    get lastSelectedKey() {
        let last = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!last || item && (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_1__/* .compareNodeOrder */ .o3)(this.collection, item, last) > 0) last = item;
        }
        var _last_key;
        return (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
    }
    get disabledKeys() {
        return this.state.disabledKeys;
    }
    get disabledBehavior() {
        return this.state.disabledBehavior;
    }
    /**
   * Extends the selection to the given key.
   */ extendSelection(toKey) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            this.replaceSelection(toKey);
            return;
        }
        let mappedToKey = this.getKey(toKey);
        if (mappedToKey == null) return;
        let selection;
        // Only select the one key if coming from a select all.
        if (this.state.selectedKeys === 'all') selection = new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)([
            mappedToKey
        ], mappedToKey, mappedToKey);
        else {
            let selectedKeys = this.state.selectedKeys;
            var _selectedKeys_anchorKey;
            let anchorKey = (_selectedKeys_anchorKey = selectedKeys.anchorKey) !== null && _selectedKeys_anchorKey !== void 0 ? _selectedKeys_anchorKey : mappedToKey;
            selection = new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)(selectedKeys, anchorKey, mappedToKey);
            var _selectedKeys_currentKey;
            for (let key of this.getKeyRange(anchorKey, (_selectedKeys_currentKey = selectedKeys.currentKey) !== null && _selectedKeys_currentKey !== void 0 ? _selectedKeys_currentKey : mappedToKey))selection.delete(key);
            for (let key of this.getKeyRange(mappedToKey, anchorKey))if (this.canSelectItem(key)) selection.add(key);
        }
        this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
        let fromItem = this.collection.getItem(from);
        let toItem = this.collection.getItem(to);
        if (fromItem && toItem) {
            if ((0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_1__/* .compareNodeOrder */ .o3)(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
            return this.getKeyRangeInternal(to, from);
        }
        return [];
    }
    getKeyRangeInternal(from, to) {
        var _this_layoutDelegate;
        if ((_this_layoutDelegate = this.layoutDelegate) === null || _this_layoutDelegate === void 0 ? void 0 : _this_layoutDelegate.getKeyRange) return this.layoutDelegate.getKeyRange(from, to);
        let keys = [];
        let key = from;
        while(key != null){
            let item = this.collection.getItem(key);
            if (item && (item.type === 'item' || item.type === 'cell' && this.allowsCellSelection)) keys.push(key);
            if (key === to) return keys;
            key = this.collection.getKeyAfter(key);
        }
        return [];
    }
    getKey(key) {
        let item = this.collection.getItem(key);
        if (!item) // ¯\_(ツ)_/¯
        return key;
        // If cell selection is allowed, just return the key.
        if (item.type === 'cell' && this.allowsCellSelection) return key;
        // Find a parent item to select
        while(item && item.type !== 'item' && item.parentKey != null)item = this.collection.getItem(item.parentKey);
        if (!item || item.type !== 'item') return null;
        return item.key;
    }
    /**
   * Toggles whether the given key is selected.
   */ toggleSelection(key) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single' && !this.isSelected(key)) {
            this.replaceSelection(key);
            return;
        }
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return;
        let keys = new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)(this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys);
        if (keys.has(mappedKey)) keys.delete(mappedKey);
        else if (this.canSelectItem(mappedKey)) {
            keys.add(mappedKey);
            keys.anchorKey = mappedKey;
            keys.currentKey = mappedKey;
        }
        if (this.disallowEmptySelection && keys.size === 0) return;
        this.state.setSelectedKeys(keys);
    }
    /**
   * Replaces the selection with only the given key.
   */ replaceSelection(key) {
        if (this.selectionMode === 'none') return;
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return;
        let selection = this.canSelectItem(mappedKey) ? new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)([
            mappedKey
        ], mappedKey, mappedKey) : new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)();
        this.state.setSelectedKeys(selection);
    }
    /**
   * Replaces the selection with the given keys.
   */ setSelectedKeys(keys) {
        if (this.selectionMode === 'none') return;
        let selection = new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)();
        for (let key of keys){
            let mappedKey = this.getKey(key);
            if (mappedKey != null) {
                selection.add(mappedKey);
                if (this.selectionMode === 'single') break;
            }
        }
        this.state.setSelectedKeys(selection);
    }
    getSelectAllKeys() {
        let keys = [];
        let addKeys = (key)=>{
            while(key != null){
                if (this.canSelectItem(key)) {
                    var _getFirstItem;
                    let item = this.collection.getItem(key);
                    if ((item === null || item === void 0 ? void 0 : item.type) === 'item') keys.push(key);
                    var _getFirstItem_key;
                    // Add child keys. If cell selection is allowed, then include item children too.
                    if ((item === null || item === void 0 ? void 0 : item.hasChildNodes) && (this.allowsCellSelection || item.type !== 'item')) addKeys((_getFirstItem_key = (_getFirstItem = (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_1__/* .getFirstItem */ .ue)((0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_1__/* .getChildNodes */ .iQ)(item, this.collection))) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key) !== null && _getFirstItem_key !== void 0 ? _getFirstItem_key : null);
                }
                key = this.collection.getKeyAfter(key);
            }
        };
        addKeys(this.collection.getFirstKey());
        return keys;
    }
    /**
   * Selects all items in the collection.
   */ selectAll() {
        if (!this.isSelectAll && this.selectionMode === 'multiple') this.state.setSelectedKeys('all');
    }
    /**
   * Removes all keys from the selection.
   */ clearSelection() {
        if (!this.disallowEmptySelection && (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)());
    }
    /**
   * Toggles between select all and an empty selection.
   */ toggleSelectAll() {
        if (this.isSelectAll) this.clearSelection();
        else this.selectAll();
    }
    select(key, e) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
            else this.replaceSelection(key);
        } else if (this.selectionBehavior === 'toggle' || e && (e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
        this.toggleSelection(key);
        else this.replaceSelection(key);
    }
    /**
   * Returns whether the current selection is equal to the given selection.
   */ isSelectionEqual(selection) {
        if (selection === this.state.selectedKeys) return true;
        // Check if the set of keys match.
        let selectedKeys = this.selectedKeys;
        if (selection.size !== selectedKeys.size) return false;
        for (let key of selection){
            if (!selectedKeys.has(key)) return false;
        }
        for (let key of selectedKeys){
            if (!selection.has(key)) return false;
        }
        return true;
    }
    canSelectItem(key) {
        var _item_props;
        if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(key)) return false;
        let item = this.collection.getItem(key);
        if (!item || (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || item.type === 'cell' && !this.allowsCellSelection) return false;
        return true;
    }
    isDisabled(key) {
        var _this_collection_getItem_props, _this_collection_getItem;
        return this.state.disabledBehavior === 'all' && (this.state.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled));
    }
    isLink(key) {
        var _this_collection_getItem_props, _this_collection_getItem;
        return !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.href);
    }
    getItemProps(key) {
        var _this_collection_getItem;
        return (_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : _this_collection_getItem.props;
    }
    withCollection(collection) {
        return new $d496c0a20b6e58ec$export$6c8a5aaad13c9852(collection, this.state, {
            allowsCellSelection: this.allowsCellSelection,
            layoutDelegate: this.layoutDelegate || undefined
        });
    }
    constructor(collection, state, options){
        this.collection = collection;
        this.state = state;
        var _options_allowsCellSelection;
        this.allowsCellSelection = (_options_allowsCellSelection = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && _options_allowsCellSelection !== void 0 ? _options_allowsCellSelection : false;
        this._isSelectAll = null;
        this.layoutDelegate = (options === null || options === void 0 ? void 0 : options.layoutDelegate) || null;
    }
}



//# sourceMappingURL=SelectionManager.module.js.map


/***/ },

/***/ 64367
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ $e948873055cbafe4$export$727c8fc270210f13)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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
function $e948873055cbafe4$export$727c8fc270210f13(props) {
    let { children: children, items: items, idScope: idScope, addIdAndValue: addIdAndValue, dependencies: dependencies = [] } = props;
    // Invalidate the cache whenever the parent value changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let cache = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new WeakMap(), dependencies);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (items && typeof children === 'function') {
            let res = [];
            for (let item of items){
                let rendered = cache.get(item);
                if (!rendered) {
                    rendered = children(item);
                    var _rendered_props_id, _ref;
                    // @ts-ignore
                    let key = (_ref = (_rendered_props_id = rendered.props.id) !== null && _rendered_props_id !== void 0 ? _rendered_props_id : item.key) !== null && _ref !== void 0 ? _ref : item.id;
                    if (key == null) throw new Error('Could not determine key for item');
                    if (idScope != null) key = idScope + ':' + key;
                    // Note: only works if wrapped Item passes through id...
                    rendered = (0, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(rendered, addIdAndValue ? {
                        key: key,
                        id: key,
                        value: item
                    } : {
                        key: key
                    });
                    cache.set(item, rendered);
                }
                res.push(rendered);
            }
            return res;
        } else if (typeof children !== 'function') return children;
    }, [
        children,
        items,
        cache,
        idScope,
        addIdAndValue
    ]);
}



//# sourceMappingURL=useCachedChildren.module.js.map


/***/ },

/***/ 64606
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cv: () => (/* binding */ $7135fc7d473fd974$export$2dbbd341daed716d),
/* harmony export */   N: () => (/* binding */ $7135fc7d473fd974$export$a164736487e3f0ae),
/* harmony export */   P2: () => (/* binding */ $7135fc7d473fd974$export$d40e14dec8b060a8),
/* harmony export */   l2: () => (/* binding */ $7135fc7d473fd974$export$90e00781bc59d8f9),
/* harmony export */   zL: () => (/* binding */ $7135fc7d473fd974$export$4feb769f8ddf26c5)
/* harmony export */ });
/* unused harmony export Section */
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64367);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

const $7135fc7d473fd974$export$d40e14dec8b060a8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const $7135fc7d473fd974$export$6e2c8f0811a474ce = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $18I52$createBranchComponent)('section', (props, ref, section)=>{
    let { name: name, render: render } = (0, $18I52$useContext)($7135fc7d473fd974$export$d40e14dec8b060a8);
    if (false) // removed by dead control flow
{}
    return render(props, ref, section, 'react-aria-Section');
})));
const $7135fc7d473fd974$export$a164736487e3f0ae = {
    CollectionRoot ({ collection: collection, renderDropIndicator: renderDropIndicator }) {
        return $7135fc7d473fd974$var$useCollectionRender(collection, null, renderDropIndicator);
    },
    CollectionBranch ({ collection: collection, parent: parent, renderDropIndicator: renderDropIndicator }) {
        return $7135fc7d473fd974$var$useCollectionRender(collection, parent, renderDropIndicator);
    }
};
function $7135fc7d473fd974$var$useCollectionRender(collection, parent, renderDropIndicator) {
    return (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_0__/* .useCachedChildren */ .p)({
        items: parent ? collection.getChildren(parent.key) : collection,
        dependencies: [
            renderDropIndicator
        ],
        children (node) {
            let rendered = node.render(node);
            if (!renderDropIndicator || node.type !== 'item') return rendered;
            return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__).createElement((0, react__WEBPACK_IMPORTED_MODULE_1__).Fragment, null, renderDropIndicator({
                type: 'item',
                key: node.key,
                dropPosition: 'before'
            }), rendered, $7135fc7d473fd974$export$2dbbd341daed716d(collection, node, renderDropIndicator));
        }
    });
}
function $7135fc7d473fd974$export$2dbbd341daed716d(collection, node, renderDropIndicator) {
    let key = node.key;
    let keyAfter = collection.getKeyAfter(key);
    let nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    while(nextItemInFlattenedCollection != null && nextItemInFlattenedCollection.type !== 'item'){
        keyAfter = collection.getKeyAfter(nextItemInFlattenedCollection.key);
        nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    }
    let nextItemInSameLevel = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    while(nextItemInSameLevel != null && nextItemInSameLevel.type !== 'item')nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
    // Render one or more "after" drop indicators when the next item in the flattened collection
    // has a smaller level, is not an item, or there are no more items in the collection.
    // Otherwise, the "after" position is equivalent to the next item's "before" position.
    let afterIndicators = [];
    if (nextItemInSameLevel == null) {
        let current = node;
        while((current === null || current === void 0 ? void 0 : current.type) === 'item' && (!nextItemInFlattenedCollection || current.parentKey !== nextItemInFlattenedCollection.parentKey && nextItemInFlattenedCollection.level < current.level)){
            let indicator = renderDropIndicator({
                type: 'item',
                key: current.key,
                dropPosition: 'after'
            });
            if (/*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(indicator)) afterIndicators.push(/*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(indicator, {
                key: `${current.key}-after`
            }));
            current = current.parentKey != null ? collection.getItem(current.parentKey) : null;
        }
    }
    return afterIndicators;
}
const $7135fc7d473fd974$export$4feb769f8ddf26c5 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)($7135fc7d473fd974$export$a164736487e3f0ae);
function $7135fc7d473fd974$export$90e00781bc59d8f9(focusedKey) {
    return (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
}



//# sourceMappingURL=Collection.module.js.map


/***/ },

/***/ 70732
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $453cc9f0df89c0a5$export$77d5aafae4e095b2)
/* harmony export */ });
/* harmony import */ var _getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80423);


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
const $453cc9f0df89c0a5$var$cache = new WeakMap();
function $453cc9f0df89c0a5$export$77d5aafae4e095b2(collection) {
    let count = $453cc9f0df89c0a5$var$cache.get(collection);
    if (count != null) return count;
    // TS isn't smart enough to know we've ensured count is a number, so use a new variable
    let counter = 0;
    let countItems = (items)=>{
        for (let item of items){
            if (item.type === 'section') countItems((0, _getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getChildNodes */ .iQ)(item, collection));
            else if (item.type === 'item') counter++;
        }
    };
    countItems(collection);
    $453cc9f0df89c0a5$var$cache.set(collection, counter);
    return counter;
}



//# sourceMappingURL=getItemCount.module.js.map


/***/ },

/***/ 73837
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ $7af3f5b51489e0b5$export$253fe78d46329472)
/* harmony export */ });
/* harmony import */ var _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78831);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




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


function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA){
        if (!setB.has(item)) return false;
    }
    return true;
}
function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
    let { selectionMode: selectionMode = 'none', disallowEmptySelection: disallowEmptySelection = false, allowDuplicateSelectionEvents: allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = 'toggle', disabledBehavior: disabledBehavior = 'all' } = props;
    // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
    // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).
    let isFocusedRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    let [, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    let focusedKeyRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    let childFocusStrategyRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    let [, setFocusedKey] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    let selectedKeysProp = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>$7af3f5b51489e0b5$var$convertSelection(props.selectedKeys), [
        props.selectedKeys
    ]);
    let defaultSelectedKeys = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>$7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)()), [
        props.defaultSelectedKeys
    ]);
    let [selectedKeys, setSelectedKeys] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
    let disabledKeysProp = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let [selectionBehavior, setSelectionBehavior] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(selectionBehaviorProp);
    // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
    // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.
    if (selectionBehaviorProp === 'replace' && selectionBehavior === 'toggle' && typeof selectedKeys === 'object' && selectedKeys.size === 0) setSelectionBehavior('replace');
    // If the selectionBehavior prop changes, update the state as well.
    let lastSelectionBehavior = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(selectionBehaviorProp);
    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (selectionBehaviorProp !== lastSelectionBehavior.current) {
            setSelectionBehavior(selectionBehaviorProp);
            lastSelectionBehavior.current = selectionBehaviorProp;
        }
    }, [
        selectionBehaviorProp
    ]);
    return {
        selectionMode: selectionMode,
        disallowEmptySelection: disallowEmptySelection,
        selectionBehavior: selectionBehavior,
        setSelectionBehavior: setSelectionBehavior,
        get isFocused () {
            return isFocusedRef.current;
        },
        setFocused (f) {
            isFocusedRef.current = f;
            setFocused(f);
        },
        get focusedKey () {
            return focusedKeyRef.current;
        },
        get childFocusStrategy () {
            return childFocusStrategyRef.current;
        },
        setFocusedKey (k, childFocusStrategy = 'first') {
            focusedKeyRef.current = k;
            childFocusStrategyRef.current = childFocusStrategy;
            setFocusedKey(k);
        },
        selectedKeys: selectedKeys,
        setSelectedKeys (keys) {
            if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
        },
        disabledKeys: disabledKeysProp,
        disabledBehavior: disabledBehavior
    };
}
function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
    if (!selection) return defaultValue;
    return selection === 'all' ? 'all' : new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)(selection);
}



//# sourceMappingURL=useMultipleSelectionState.module.js.map


/***/ },

/***/ 78831
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ $e40ea825a81a3709$export$52baac22726c72bf)
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
 */ class $e40ea825a81a3709$export$52baac22726c72bf extends Set {
    constructor(keys, anchorKey, currentKey){
        super(keys);
        if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
            this.anchorKey = anchorKey !== null && anchorKey !== void 0 ? anchorKey : keys.anchorKey;
            this.currentKey = currentKey !== null && currentKey !== void 0 ? currentKey : keys.currentKey;
        } else {
            this.anchorKey = anchorKey !== null && anchorKey !== void 0 ? anchorKey : null;
            this.currentKey = currentKey !== null && currentKey !== void 0 ? currentKey : null;
        }
    }
}



//# sourceMappingURL=Selection.module.js.map


/***/ },

/***/ 80423
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ $c5a24bc478652b5f$export$7475b2c64539e4cf),
/* harmony export */   cj: () => (/* binding */ $c5a24bc478652b5f$export$5f3398f8733f90e2),
/* harmony export */   iQ: () => (/* binding */ $c5a24bc478652b5f$export$1005530eda016c13),
/* harmony export */   o3: () => (/* binding */ $c5a24bc478652b5f$export$8c434b3a7a4dad6),
/* harmony export */   ue: () => (/* binding */ $c5a24bc478652b5f$export$fbdeaa6a76694f71)
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
 */ function $c5a24bc478652b5f$export$1005530eda016c13(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === 'function') return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71(iterable) {
    return $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, 0);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function $c5a24bc478652b5f$export$7475b2c64539e4cf(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function $c5a24bc478652b5f$export$8c434b3a7a4dad6(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...$c5a24bc478652b5f$var$getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...$c5a24bc478652b5f$var$getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function $c5a24bc478652b5f$var$getAncestors(collection, node) {
    let parents = [];
    let currNode = node;
    while((currNode === null || currNode === void 0 ? void 0 : currNode.parentKey) != null){
        currNode = collection.getItem(currNode.parentKey);
        if (currNode) parents.unshift(currNode);
    }
    return parents;
}



//# sourceMappingURL=getChildNodes.module.js.map


/***/ },

/***/ 82627
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ $325a3faab7a68acd$export$a16aca283550c30d)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39892);


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
let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale } = (0, _context_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLocale */ .Y)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}



//# sourceMappingURL=useCollator.module.js.map


/***/ },

/***/ 83181
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $72a5793c14baf454$export$e0e4026c12a8bdbb),
/* harmony export */   Y: () => (/* binding */ $72a5793c14baf454$export$8b251419efc915eb)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41177);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);




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


const $72a5793c14baf454$export$e0e4026c12a8bdbb = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
const $72a5793c14baf454$export$8b251419efc915eb = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createLeafComponent */ .KU)((0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_2__/* .HeaderNode */ .EH), function Header(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $72a5793c14baf454$export$e0e4026c12a8bdbb);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement("header", {
        className: "react-aria-Header",
        ...props,
        ref: ref
    }, props.children);
});



//# sourceMappingURL=Header.module.js.map


/***/ },

/***/ 83362
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ $f1ab8c75478c6f73$export$cf75428e0b9ed1ea),
/* harmony export */   Y: () => (/* binding */ $f1ab8c75478c6f73$export$3351871ee4b288b8)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48084);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83908);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6660);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);




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


const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__).forwardRef(({ children: children, ...props }, ref)=>{
    let isRegistered = (0, react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
    let prevContext = (0, react__WEBPACK_IMPORTED_MODULE_4__.useContext)((0, _context_mjs__WEBPACK_IMPORTED_MODULE_0__/* .PressResponderContext */ .F));
    ref = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useObjectRef */ .U)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
    let context = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)(prevContext || {}, {
        ...props,
        ref: ref,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .useSyncRef */ .w)(prevContext, ref);
    (0, react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!isRegistered.current) {
            if (false) // removed by dead control flow
{}
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__).createElement((0, _context_mjs__WEBPACK_IMPORTED_MODULE_0__/* .PressResponderContext */ .F).Provider, {
        value: context
    }, children);
});
function $f1ab8c75478c6f73$export$cf75428e0b9ed1ea({ children: children }) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__).createElement((0, _context_mjs__WEBPACK_IMPORTED_MODULE_0__/* .PressResponderContext */ .F).Provider, {
        value: context
    }, children);
}



//# sourceMappingURL=PressResponder.module.js.map


/***/ },

/***/ 85057
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Se: () => (/* binding */ $337b884510726a0d$export$14c98a7594375490),
/* harmony export */   hJ: () => (/* binding */ $337b884510726a0d$export$c6fdb837b070b4ff)
/* harmony export */ });
/* unused harmony export OverlayContext */
/* harmony import */ var _PortalProvider_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12354);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83362);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49336);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40961);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60415);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49953);








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






const $337b884510726a0d$export$a2200b96afd16271 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createContext(null);
function $337b884510726a0d$export$c6fdb837b070b4ff(props) {
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_5__/* .useIsSSR */ .wR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, isExiting: isExiting } = props;
    let [contain, setContain] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    let contextValue = (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    let { getContainer: getContainer } = (0, _PortalProvider_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useUNSAFE_PortalContext */ .gX)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__/* .FocusScope */ .n1), {
        restoreFocus: true,
        contain: (props.shouldContainFocus || contain) && !isExiting
    }, contents);
    contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__/* .ClearPressResponder */ .N), null, contents));
    return /*#__PURE__*/ (0, react_dom__WEBPACK_IMPORTED_MODULE_4__).createPortal(contents, portalContainer);
}
function $337b884510726a0d$export$14c98a7594375490() {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_3__.useContext)($337b884510726a0d$export$a2200b96afd16271);
    let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .useLayoutEffect */ .N)(()=>{
        setContain === null || setContain === void 0 ? void 0 : setContain(true);
    }, [
        setContain
    ]);
}



//# sourceMappingURL=Overlay.module.js.map


/***/ },

/***/ 86484
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/Overlay.mjs
var Overlay = __webpack_require__(85057);
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
                // Check that the dialog is still focused, or focused was lost to the body.
                if (document.activeElement === ref.current || document.activeElement === document.body) {
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

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(77366);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
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
    // Allows popover width to match trigger element
    let [buttonWidth, setButtonWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (buttonRef.current) setButtonWidth(buttonRef.current.offsetWidth + 'px');
    }, [
        buttonRef
    ]);
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: buttonRef,
        onResize: onResize
    });
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
                    'aria-labelledby': overlayProps['aria-labelledby'],
                    style: {
                        '--trigger-width': buttonWidth
                    }
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
        else if (false) // removed by dead control flow
{}
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement("section", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, dialogProps),
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


/***/ },

/***/ 90757
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ $a11501f3d1d39e6c$export$ea8f71083e90600f)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(49336);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var useEffectEvent = __webpack_require__(7049);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/domHelpers.mjs
var domHelpers = __webpack_require__(24836);
;// ./node_modules/@react-aria/interactions/dist/useInteractOutside.mjs



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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
    let { ref: ref, onInteractOutside: onInteractOutside, isDisabled: isDisabled, onInteractOutsideStart: onInteractOutsideStart } = props;
    let stateRef = (0, react.useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, react.useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        const element = ref.current;
        const documentObject = (0, domHelpers/* getOwnerDocument */.TW)(element);
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onClick = (e)=>{
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            // Use click instead of pointerup to avoid Android Chrome issue
            // https://issues.chromium.org/issues/40732224
            documentObject.addEventListener('pointerdown', onPointerDown, true);
            documentObject.addEventListener('click', onClick, true);
            return ()=>{
                documentObject.removeEventListener('pointerdown', onPointerDown, true);
                documentObject.removeEventListener('click', onClick, true);
            };
        } else if (false) // removed by dead control flow
{}
    }, [
        ref,
        isDisabled
    ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    if (event.target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (event.target.closest('[data-react-aria-top-layer]')) return false;
    }
    if (!ref.current) return false;
    // When the event source is inside a Shadow DOM, event.target is just the shadow root.
    // Using event.composedPath instead means we can get the actual element inside the shadow root.
    // This only works if the shadow root is open, there is no way to detect if it is closed.
    // If the event composed path contains the ref, interaction is inside.
    return !event.composedPath().includes(ref.current);
}



//# sourceMappingURL=useInteractOutside.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(59461);
;// ./node_modules/@react-aria/overlays/dist/useOverlay.mjs




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


const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose, shouldCloseOnBlur: shouldCloseOnBlur, isOpen: isOpen, isDismissable: isDismissable = false, isKeyboardDismissDisabled: isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (0, react.useEffect)(()=>{
        if (isOpen && !$a11501f3d1d39e6c$var$visibleOverlays.includes(ref)) {
            $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
            return ()=>{
                let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
                if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
            };
        }
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack
    let onHide = ()=>{
        if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === 'Escape' && !isKeyboardDismissDisabled && !e.nativeEvent.isComposing) {
            e.stopPropagation();
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    (0, $e0b6e0b68ec7f50f$export$872b660ac5a1ff98)({
        ref: ref,
        onInteractOutside: isDismissable && isOpen ? onInteractOutside : undefined,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // Do not close if relatedTarget is null, which means focus is lost to the body.
            // That can happen when switching tabs, or due to a VoiceOver/Chrome bug with Control+Option+Arrow navigation.
            // Clicking on the body to close the overlay should already be handled by useInteractOutside.
            // https://github.com/adobe/react-spectrum/issues/4130
            // https://github.com/adobe/react-spectrum/issues/4922
            //
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (!e.relatedTarget || (0, FocusScope/* isElementInChildOfActiveScope */.Pu)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
}



//# sourceMappingURL=useOverlay.module.js.map


/***/ },

/***/ 91821
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ $86ea4cb521eb2e37$export$2317d149ed6f78c4)
});

;// ./node_modules/@react-aria/overlays/dist/ar-AE.mjs
var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = {
    "dismiss": `\u{62A}\u{62C}\u{627}\u{647}\u{644}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/overlays/dist/bg-BG.mjs
var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = {
    "dismiss": `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/overlays/dist/cs-CZ.mjs
var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = {
    "dismiss": `Odstranit`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/overlays/dist/da-DK.mjs
var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = {
    "dismiss": `Luk`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/overlays/dist/de-DE.mjs
var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = {
    "dismiss": `Schlie\xdfen`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/overlays/dist/el-GR.mjs
var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = {
    "dismiss": `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/overlays/dist/en-US.mjs
var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = {
    "dismiss": `Dismiss`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/overlays/dist/es-ES.mjs
var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = {
    "dismiss": `Descartar`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/overlays/dist/et-EE.mjs
var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = {
    "dismiss": `L\xf5peta`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/overlays/dist/fi-FI.mjs
var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = {
    "dismiss": `Hylk\xe4\xe4`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/overlays/dist/fr-FR.mjs
var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = {
    "dismiss": `Rejeter`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/overlays/dist/he-IL.mjs
var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = {
    "dismiss": `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/overlays/dist/hr-HR.mjs
var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = {
    "dismiss": `Odbaci`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/overlays/dist/hu-HU.mjs
var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = {
    "dismiss": `Elutas\xedt\xe1s`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/overlays/dist/it-IT.mjs
var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = {
    "dismiss": `Ignora`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/overlays/dist/ja-JP.mjs
var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = {
    "dismiss": `\u{9589}\u{3058}\u{308B}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/overlays/dist/ko-KR.mjs
var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = {
    "dismiss": `\u{BB34}\u{C2DC}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/overlays/dist/lt-LT.mjs
var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = {
    "dismiss": `Atmesti`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/overlays/dist/lv-LV.mjs
var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = {
    "dismiss": `Ner\u{101}d\u{12B}t`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/overlays/dist/nb-NO.mjs
var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = {
    "dismiss": `Lukk`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/overlays/dist/nl-NL.mjs
var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = {
    "dismiss": `Negeren`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/overlays/dist/pl-PL.mjs
var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = {
    "dismiss": `Zignoruj`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/overlays/dist/pt-BR.mjs
var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = {
    "dismiss": `Descartar`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/overlays/dist/pt-PT.mjs
var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = {
    "dismiss": `Dispensar`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/overlays/dist/ro-RO.mjs
var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = {
    "dismiss": `Revocare`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/overlays/dist/ru-RU.mjs
var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = {
    "dismiss": `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/overlays/dist/sk-SK.mjs
var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = {
    "dismiss": `Zru\u{161}i\u{165}`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/overlays/dist/sl-SI.mjs
var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = {
    "dismiss": `Opusti`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/overlays/dist/sr-SP.mjs
var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = {
    "dismiss": `Odbaci`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/overlays/dist/sv-SE.mjs
var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = {
    "dismiss": `Avvisa`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/overlays/dist/tr-TR.mjs
var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = {
    "dismiss": `Kapat`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/overlays/dist/uk-UA.mjs
var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = {
    "dismiss": `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/overlays/dist/zh-CN.mjs
var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = {
    "dismiss": `\u{53D6}\u{6D88}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/overlays/dist/zh-TW.mjs
var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = {
    "dismiss": `\u{95DC}\u{9589}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/overlays/dist/intlStrings.mjs



































var $a2f21f5f14f60553$exports = {};


































$a2f21f5f14f60553$exports = {
    "ar-AE": $773d5888b972f1cf$exports,
    "bg-BG": $d11f19852b941573$exports,
    "cs-CZ": $b983974c2ee1efb3$exports,
    "da-DK": $5809cc9d4e92de73$exports,
    "de-DE": $c68c2e4fc74398d1$exports,
    "el-GR": $0898b4c153db2b77$exports,
    "en-US": $6d74810286a15183$exports,
    "es-ES": $309d73dc65f78055$exports,
    "et-EE": $44ad94f7205cf593$exports,
    "fi-FI": $7c28f5687f0779a9$exports,
    "fr-FR": $e6d75df4b68bd73a$exports,
    "he-IL": $87505c9dab186d0f$exports,
    "hr-HR": $553439c3ffb3e492$exports,
    "hu-HU": $74cf411061b983a2$exports,
    "it-IT": $e933f298574dc435$exports,
    "ja-JP": $ac91fc9fe02f71f6$exports,
    "ko-KR": $52b96f86422025af$exports,
    "lt-LT": $c0d724c3e51dafa6$exports,
    "lv-LV": $c92899672a3fe72e$exports,
    "nb-NO": $9f576b39d8e7a9d6$exports,
    "nl-NL": $9d025808aeec81a7$exports,
    "pl-PL": $fce709921e2c0fa6$exports,
    "pt-BR": $2599cf0c4ab37f59$exports,
    "pt-PT": $3c220ae7ef8a35fd$exports,
    "ro-RO": $93562b5094072f54$exports,
    "ru-RU": $cd9e2abd0d06c7b4$exports,
    "sk-SK": $45375701f409adf1$exports,
    "sl-SI": $27fab53a576de9dd$exports,
    "sr-SP": $4438748d9952e7c7$exports,
    "sv-SE": $0936d7347ef4da4c$exports,
    "tr-TR": $29700c92185d38f8$exports,
    "uk-UA": $662ccaf2be4c25b3$exports,
    "zh-CN": $d80a27deda7cdb3c$exports,
    "zh-TW": $2b2734393847c884$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLabels.mjs
var useLabels = __webpack_require__(37061);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
;// ./node_modules/@react-aria/overlays/dist/DismissButton.mjs







function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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




function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss, ...otherProps } = props;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($a2f21f5f14f60553$exports))), '@react-aria/overlays');
    let labels = (0, useLabels/* useLabels */.b)(otherProps, stringFormatter.format('dismiss'));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return /*#__PURE__*/ (0, react).createElement((0, VisuallyHidden/* VisuallyHidden */.s), null, /*#__PURE__*/ (0, react).createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick,
        style: {
            width: 1,
            height: 1
        }
    }));
}



//# sourceMappingURL=DismissButton.module.js.map


/***/ },

/***/ 96584
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ $2a25aae57d74318e$export$a05409b8bb224a5a)
/* harmony export */ });
/* harmony import */ var _DOMLayoutDelegate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1249);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47912);



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

class $2a25aae57d74318e$export$a05409b8bb224a5a {
    isDisabled(item) {
        var _item_props;
        return this.disabledBehavior === 'all' && (((_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || this.disabledKeys.has(item.key));
    }
    findNextNonDisabled(key, getNext) {
        let nextKey = key;
        while(nextKey != null){
            let item = this.collection.getItem(nextKey);
            if ((item === null || item === void 0 ? void 0 : item.type) === 'item' && !this.isDisabled(item)) return nextKey;
            nextKey = getNext(nextKey);
        }
        return null;
    }
    getNextKey(key) {
        let nextKey = key;
        nextKey = this.collection.getKeyAfter(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyAfter(key));
    }
    getPreviousKey(key) {
        let nextKey = key;
        nextKey = this.collection.getKeyBefore(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyBefore(key));
    }
    findKey(key, nextKey, shouldSkip) {
        let tempKey = key;
        let itemRect = this.layoutDelegate.getItemRect(tempKey);
        if (!itemRect || tempKey == null) return null;
        // Find the item above or below in the same column.
        let prevRect = itemRect;
        do {
            tempKey = nextKey(tempKey);
            if (tempKey == null) break;
            itemRect = this.layoutDelegate.getItemRect(tempKey);
        }while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null);
        return tempKey;
    }
    isSameRow(prevRect, itemRect) {
        return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
    }
    isSameColumn(prevRect, itemRect) {
        return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
    }
    getKeyBelow(key) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getNextKey(key), this.isSameRow);
        else return this.getNextKey(key);
    }
    getKeyAbove(key) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getPreviousKey(key), this.isSameRow);
        else return this.getPreviousKey(key);
    }
    getNextColumn(key, right) {
        return right ? this.getPreviousKey(key) : this.getNextKey(key);
    }
    getKeyRightOf(key) {
        // This is a temporary solution for CardView until we refactor useSelectableCollection.
        // https://github.com/orgs/adobe/projects/19/views/32?pane=issue&itemId=77825042
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyRightOf' : 'getKeyLeftOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key));
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'rtl');
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'rtl'), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'rtl');
        return null;
    }
    getKeyLeftOf(key) {
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyLeftOf' : 'getKeyRightOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key));
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'ltr');
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'ltr'), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'ltr');
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyAfter(key));
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyBefore(key));
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        if (menu && !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isScrollable */ .o)(menu)) return this.getFirstKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x > pageX && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let pageY = Math.max(0, itemRect.y + itemRect.height - this.layoutDelegate.getVisibleRect().height);
            while(itemRect && itemRect.y > pageY && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey !== null && nextKey !== void 0 ? nextKey : this.getFirstKey();
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        if (menu && !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isScrollable */ .o)(menu)) return this.getLastKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.y - itemRect.width + this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x < pageX && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
            while(itemRect && itemRect.y < pageY && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey !== null && nextKey !== void 0 ? nextKey : this.getLastKey();
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            if (!item) return null;
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getNextKey(key);
        }
        return null;
    }
    constructor(...args){
        if (args.length === 1) {
            let opts = args[0];
            this.collection = opts.collection;
            this.ref = opts.ref;
            this.collator = opts.collator;
            this.disabledKeys = opts.disabledKeys || new Set();
            this.disabledBehavior = opts.disabledBehavior || 'all';
            this.orientation = opts.orientation || 'vertical';
            this.direction = opts.direction;
            this.layout = opts.layout || 'stack';
            this.layoutDelegate = opts.layoutDelegate || new (0, _DOMLayoutDelegate_mjs__WEBPACK_IMPORTED_MODULE_0__/* .DOMLayoutDelegate */ .K)(opts.ref);
        } else {
            this.collection = args[0];
            this.disabledKeys = args[1];
            this.ref = args[2];
            this.collator = args[3];
            this.layout = 'stack';
            this.orientation = 'vertical';
            this.disabledBehavior = 'all';
            this.layoutDelegate = new (0, _DOMLayoutDelegate_mjs__WEBPACK_IMPORTED_MODULE_0__/* .DOMLayoutDelegate */ .K)(this.ref);
        }
        // If this is a vertical stack, remove the left/right methods completely
        // so they aren't called by useDroppableCollection.
        if (this.layout === 'stack' && this.orientation === 'vertical') {
            this.getKeyLeftOf = undefined;
            this.getKeyRightOf = undefined;
        }
    }
}



//# sourceMappingURL=ListKeyboardDelegate.module.js.map


/***/ },

/***/ 97213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Info)
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
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("info", __iconNode);


//# sourceMappingURL=info.js.map


/***/ }

}]);