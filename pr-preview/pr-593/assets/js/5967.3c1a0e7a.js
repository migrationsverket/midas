"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5967],{

/***/ 8494:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $907718708eab68af$export$1a38b4ad7f578e1d)
/* harmony export */ });
/* harmony import */ var _useFocusRing_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16133);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);
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



function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
    let { children: children, focusClass: focusClass, focusRingClass: focusRingClass } = props;
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, _useFocusRing_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useFocusRing */ .o)(props);
    let child = (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.only(children);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).cloneElement(child, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(child.props, {
        ...focusProps,
        className: (0, clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
            [focusClass || '']: isFocused,
            [focusRingClass || '']: isFocusVisible
        })
    }));
}



//# sourceMappingURL=FocusRing.module.js.map


/***/ }),

/***/ 11811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $2d73ec29415bd339$export$712718f7aec83d5)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8343);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85441);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28940);
/* harmony import */ var _react_aria_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48868);
/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71144);








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






function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useFocusable */ .Wc)(props, ref);
    let validationState = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_3__/* .useFormValidationState */ .KZ)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_4__/* .useField */ .M)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .useFormReset */ .F)(ref, value, setValue);
    (0, _react_aria_form__WEBPACK_IMPORTED_MODULE_7__/* .useFormValidation */ .X)(props, validationState, ref);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // This works around a React/Chrome bug that prevents textarea elements from validating when controlled.
        // We prevent React from updating defaultValue (i.e. children) of textarea when `value` changes,
        // which causes Chrome to skip validation. Only updating `value` is ok in our case since our
        // textareas are always controlled. React is planning on removing this synchronization in a
        // future major version.
        // https://github.com/facebook/react/issues/19474
        // https://github.com/facebook/react/issues/11896
        if (ref.current instanceof (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .getOwnerWindow */ .mD)(ref.current).HTMLTextAreaElement) {
            let input = ref.current;
            Object.defineProperty(input, 'defaultValue', {
                get: ()=>input.value,
                set: ()=>{},
                configurable: true
            });
        }
    }, [
        ref
    ]);
    return {
        labelProps: labelProps,
        inputProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_9__/* .mergeProps */ .v)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            'aria-controls': props['aria-controls'],
            value: value,
            onChange: (e)=>setValue(e.target.value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            autoCorrect: props.autoCorrect,
            spellCheck: props.spellCheck,
            [parseInt((0, react__WEBPACK_IMPORTED_MODULE_0__).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useTextField.module.js.map


/***/ }),

/***/ 48639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ $c1d7fb2ec91bae71$export$6d08773d2e66f8f2)
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
function $c1d7fb2ec91bae71$var$Item(props) {
    return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems, title: title, children: children } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning) && "production" !== 'production') {}
    yield {
        type: 'item',
        props: props,
        rendered: rendered,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: 'item',
                value: child
            };
            else if (title) {
                let items = [];
                (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;



//# sourceMappingURL=Item.module.js.map


/***/ }),

/***/ 72487:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ $9fc4852771d079eb$export$6e2c8f0811a474ce)
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
function $9fc4852771d079eb$var$Section(props) {
    return null;
}
$9fc4852771d079eb$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children, title: title, items: items } = props;
    yield {
        type: 'section',
        props: props,
        hasChildNodes: true,
        rendered: title,
        'aria-label': props['aria-label'],
        *childNodes () {
            if (typeof children === 'function') {
                if (!items) throw new Error('props.children was a function but props.items is missing');
                for (let item of items)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $9fc4852771d079eb$export$6e2c8f0811a474ce = $9fc4852771d079eb$var$Section;



//# sourceMappingURL=Section.module.js.map


/***/ }),

/***/ 12939:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ $61ef60fc9b1041f4$export$cacbb3924155d68e)
});

// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getChildNodes.mjs
var getChildNodes = __webpack_require__(80423);
;// ./node_modules/@react-stately/virtualizer/dist/Layout.mjs
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
 */ class $c74cda7d31af1253$export$c84671f46d6a1ca {
    /**
   * Returns whether the layout should invalidate in response to
   * visible rectangle changes. By default, it only invalidates
   * when the virtualizer's size changes. Return true always
   * to make the layout invalidate while scrolling (e.g. sticky headers).
   */ shouldInvalidate(newRect, oldRect) {
        // By default, invalidate when the size changes
        return newRect.width !== oldRect.width || newRect.height !== oldRect.height;
    }
    /**
   * Returns whether the layout should invalidate when the layout options change.
   * By default it invalidates when the object identity changes. Override this
   * method to optimize layout updates based on specific option changes.
   */ shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return newOptions !== oldOptions;
    }
    /**
   * This method allows the layout to perform any pre-computation
   * it needs to in order to prepare LayoutInfos for retrieval.
   * Called by the virtualizer before `getVisibleLayoutInfos`
   * or `getLayoutInfo` are called.
   */ update(invalidationContext) {}
    /** @private */ getItemRect(key) {
        var _this_getLayoutInfo;
        var _this_getLayoutInfo_rect;
        return (_this_getLayoutInfo_rect = (_this_getLayoutInfo = this.getLayoutInfo(key)) === null || _this_getLayoutInfo === void 0 ? void 0 : _this_getLayoutInfo.rect) !== null && _this_getLayoutInfo_rect !== void 0 ? _this_getLayoutInfo_rect : null;
    }
    /** @private */ getVisibleRect() {
        return this.virtualizer.visibleRect;
    }
    constructor(){
        /** The Virtualizer the layout is currently attached to. */ this.virtualizer = null;
    }
}



//# sourceMappingURL=Layout.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/virtualizer/dist/Rect.mjs
var Rect = __webpack_require__(18442);
// EXTERNAL MODULE: ./node_modules/@react-stately/virtualizer/dist/Size.mjs
var Size = __webpack_require__(47379);
;// ./node_modules/@react-stately/virtualizer/dist/LayoutInfo.mjs
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
 */ class $d7fd61009c21d0bb$export$7e0eeb9da702a085 {
    /**
   * Returns a copy of the LayoutInfo.
   */ copy() {
        let res = new $d7fd61009c21d0bb$export$7e0eeb9da702a085(this.type, this.key, this.rect.copy());
        res.estimatedSize = this.estimatedSize;
        res.opacity = this.opacity;
        res.transform = this.transform;
        res.parentKey = this.parentKey;
        res.content = this.content;
        res.isSticky = this.isSticky;
        res.zIndex = this.zIndex;
        res.allowOverflow = this.allowOverflow;
        return res;
    }
    /**
   * @param type The type of element represented by this LayoutInfo. Should match the `type` of the corresponding collection node.
   * @param key A unique key for this LayoutInfo. Should match the `key` of the corresponding collection node.
   * @param rect The rectangle describing the size and position of this element.
   */ constructor(type, key, rect){
        this.type = type;
        this.key = key;
        this.parentKey = null;
        this.content = null;
        this.rect = rect;
        this.estimatedSize = false;
        this.isSticky = false;
        this.opacity = 1;
        this.transform = null;
        this.zIndex = 0;
        this.allowOverflow = false;
    }
}



//# sourceMappingURL=LayoutInfo.module.js.map

;// ./node_modules/@react-stately/layout/dist/ListLayout.mjs



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

const $61ef60fc9b1041f4$var$DEFAULT_HEIGHT = 48;
class $61ef60fc9b1041f4$export$cacbb3924155d68e extends (0, $c74cda7d31af1253$export$c84671f46d6a1ca) {
    // Backward compatibility for subclassing.
    get collection() {
        return this.virtualizer.collection;
    }
    getLayoutInfo(key) {
        var _this_layoutNodes_get;
        this.ensureLayoutInfo(key);
        return ((_this_layoutNodes_get = this.layoutNodes.get(key)) === null || _this_layoutNodes_get === void 0 ? void 0 : _this_layoutNodes_get.layoutInfo) || null;
    }
    getVisibleLayoutInfos(rect) {
        // Adjust rect to keep number of visible rows consistent.
        // (only if height > 1 for getDropTargetFromPoint)
        if (rect.height > 1) {
            var _this_rowHeight, _ref;
            let rowHeight = ((_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $61ef60fc9b1041f4$var$DEFAULT_HEIGHT) + this.gap;
            rect.y = Math.floor(rect.y / rowHeight) * rowHeight;
            rect.height = Math.ceil(rect.height / rowHeight) * rowHeight;
        }
        // If layout hasn't yet been done for the requested rect, union the
        // new rect with the existing valid rect, and recompute.
        this.layoutIfNeeded(rect);
        let res = [];
        let addNodes = (nodes)=>{
            for (let node of nodes)if (this.isVisible(node, rect)) {
                res.push(node.layoutInfo);
                if (node.children) addNodes(node.children);
            }
        };
        addNodes(this.rootNodes);
        return res;
    }
    layoutIfNeeded(rect) {
        if (!this.lastCollection) return;
        if (!this.requestedRect.containsRect(rect)) {
            this.requestedRect = this.requestedRect.union(rect);
            this.rootNodes = this.buildCollection();
        }
        // Ensure all of the persisted keys are available.
        for (let key of this.virtualizer.persistedKeys){
            if (this.ensureLayoutInfo(key)) return;
        }
    }
    ensureLayoutInfo(key) {
        // If the layout info wasn't found, it might be outside the bounds of the area that we've
        // computed layout for so far. This can happen when accessing a random key, e.g pressing Home/End.
        // Compute the full layout and try again.
        if (!this.layoutNodes.has(key) && this.requestedRect.area < this.contentSize.area && this.lastCollection) {
            this.requestedRect = new (0, Rect/* Rect */.r)(0, 0, Infinity, Infinity);
            this.rootNodes = this.buildCollection();
            this.requestedRect = new (0, Rect/* Rect */.r)(0, 0, this.contentSize.width, this.contentSize.height);
            return true;
        }
        return false;
    }
    isVisible(node, rect) {
        return node.layoutInfo.rect.intersects(rect) || node.layoutInfo.isSticky || node.layoutInfo.type === 'header' || node.layoutInfo.type === 'loader' || this.virtualizer.isPersistedKey(node.layoutInfo.key);
    }
    shouldInvalidateEverything(invalidationContext) {
        // Invalidate cache if the size of the collection changed.
        // In this case, we need to recalculate the entire layout.
        // Also invalidate if fixed sizes/gaps change.
        let options = invalidationContext.layoutOptions;
        var _options_rowHeight, _options_headingHeight, _options_loaderHeight, _options_gap, _options_padding;
        return invalidationContext.sizeChanged || this.rowHeight !== ((_options_rowHeight = options === null || options === void 0 ? void 0 : options.rowHeight) !== null && _options_rowHeight !== void 0 ? _options_rowHeight : this.rowHeight) || this.headingHeight !== ((_options_headingHeight = options === null || options === void 0 ? void 0 : options.headingHeight) !== null && _options_headingHeight !== void 0 ? _options_headingHeight : this.headingHeight) || this.loaderHeight !== ((_options_loaderHeight = options === null || options === void 0 ? void 0 : options.loaderHeight) !== null && _options_loaderHeight !== void 0 ? _options_loaderHeight : this.loaderHeight) || this.gap !== ((_options_gap = options === null || options === void 0 ? void 0 : options.gap) !== null && _options_gap !== void 0 ? _options_gap : this.gap) || this.padding !== ((_options_padding = options === null || options === void 0 ? void 0 : options.padding) !== null && _options_padding !== void 0 ? _options_padding : this.padding);
    }
    shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return newOptions.rowHeight !== oldOptions.rowHeight || newOptions.estimatedRowHeight !== oldOptions.estimatedRowHeight || newOptions.headingHeight !== oldOptions.headingHeight || newOptions.estimatedHeadingHeight !== oldOptions.estimatedHeadingHeight || newOptions.loaderHeight !== oldOptions.loaderHeight || newOptions.dropIndicatorThickness !== oldOptions.dropIndicatorThickness || newOptions.gap !== oldOptions.gap || newOptions.padding !== oldOptions.padding;
    }
    update(invalidationContext) {
        let collection = this.virtualizer.collection;
        // Reset valid rect if we will have to invalidate everything.
        // Otherwise we can reuse cached layout infos outside the current visible rect.
        this.invalidateEverything = this.shouldInvalidateEverything(invalidationContext);
        if (this.invalidateEverything) {
            this.requestedRect = this.virtualizer.visibleRect.copy();
            this.layoutNodes.clear();
        }
        let options = invalidationContext.layoutOptions;
        var _options_rowHeight;
        this.rowHeight = (_options_rowHeight = options === null || options === void 0 ? void 0 : options.rowHeight) !== null && _options_rowHeight !== void 0 ? _options_rowHeight : this.rowHeight;
        var _options_estimatedRowHeight;
        this.estimatedRowHeight = (_options_estimatedRowHeight = options === null || options === void 0 ? void 0 : options.estimatedRowHeight) !== null && _options_estimatedRowHeight !== void 0 ? _options_estimatedRowHeight : this.estimatedRowHeight;
        var _options_headingHeight;
        this.headingHeight = (_options_headingHeight = options === null || options === void 0 ? void 0 : options.headingHeight) !== null && _options_headingHeight !== void 0 ? _options_headingHeight : this.headingHeight;
        var _options_estimatedHeadingHeight;
        this.estimatedHeadingHeight = (_options_estimatedHeadingHeight = options === null || options === void 0 ? void 0 : options.estimatedHeadingHeight) !== null && _options_estimatedHeadingHeight !== void 0 ? _options_estimatedHeadingHeight : this.estimatedHeadingHeight;
        var _options_loaderHeight;
        this.loaderHeight = (_options_loaderHeight = options === null || options === void 0 ? void 0 : options.loaderHeight) !== null && _options_loaderHeight !== void 0 ? _options_loaderHeight : this.loaderHeight;
        var _options_dropIndicatorThickness;
        this.dropIndicatorThickness = (_options_dropIndicatorThickness = options === null || options === void 0 ? void 0 : options.dropIndicatorThickness) !== null && _options_dropIndicatorThickness !== void 0 ? _options_dropIndicatorThickness : this.dropIndicatorThickness;
        var _options_gap;
        this.gap = (_options_gap = options === null || options === void 0 ? void 0 : options.gap) !== null && _options_gap !== void 0 ? _options_gap : this.gap;
        var _options_padding;
        this.padding = (_options_padding = options === null || options === void 0 ? void 0 : options.padding) !== null && _options_padding !== void 0 ? _options_padding : this.padding;
        this.rootNodes = this.buildCollection();
        // Remove deleted layout nodes
        if (this.lastCollection && collection !== this.lastCollection) {
            for (let key of this.lastCollection.getKeys())if (!collection.getItem(key)) {
                let layoutNode = this.layoutNodes.get(key);
                if (layoutNode) this.layoutNodes.delete(key);
            }
        }
        this.lastCollection = collection;
        this.invalidateEverything = false;
        this.validRect = this.requestedRect.copy();
    }
    buildCollection(y = this.padding) {
        let collection = this.virtualizer.collection;
        let skipped = 0;
        let nodes = [];
        let isEmptyOrLoading = (collection === null || collection === void 0 ? void 0 : collection.size) === 0 || collection.size === 1 && collection.getItem(collection.getFirstKey()).type === 'loader';
        if (isEmptyOrLoading) y = 0;
        for (let node of collection){
            var _this_rowHeight, _ref;
            let rowHeight = ((_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $61ef60fc9b1041f4$var$DEFAULT_HEIGHT) + this.gap;
            // Skip rows before the valid rectangle unless they are already cached.
            if (node.type === 'item' && y + rowHeight < this.requestedRect.y && !this.isValid(node, y)) {
                y += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.buildChild(node, this.padding, y, null);
            y = layoutNode.layoutInfo.rect.maxY + this.gap;
            nodes.push(layoutNode);
            if (node.type === 'item' && y > this.requestedRect.maxY) {
                var _nodes_at;
                let itemsAfterRect = collection.size - (nodes.length + skipped);
                let lastNode = collection.getItem(collection.getLastKey());
                if ((lastNode === null || lastNode === void 0 ? void 0 : lastNode.type) === 'loader') itemsAfterRect--;
                y += itemsAfterRect * rowHeight;
                // Always add the loader sentinel if present. This assumes the loader is the last option/row
                // will need to refactor when handling multi section loading
                if ((lastNode === null || lastNode === void 0 ? void 0 : lastNode.type) === 'loader' && ((_nodes_at = nodes.at(-1)) === null || _nodes_at === void 0 ? void 0 : _nodes_at.layoutInfo.type) !== 'loader') {
                    let loader = this.buildChild(lastNode, this.padding, y, null);
                    nodes.push(loader);
                    y = loader.layoutInfo.rect.maxY;
                }
                break;
            }
        }
        y -= this.gap;
        y += isEmptyOrLoading ? 0 : this.padding;
        this.contentSize = new (0, Size/* Size */.o)(this.virtualizer.visibleRect.width, y);
        return nodes;
    }
    isValid(node, y) {
        let cached = this.layoutNodes.get(node.key);
        return !this.invalidateEverything && !!cached && cached.node === node && y === cached.layoutInfo.rect.y && cached.layoutInfo.rect.intersects(this.validRect) && cached.validRect.containsRect(cached.layoutInfo.rect.intersection(this.requestedRect));
    }
    buildChild(node, x, y, parentKey) {
        if (this.isValid(node, y)) return this.layoutNodes.get(node.key);
        let layoutNode = this.buildNode(node, x, y);
        layoutNode.layoutInfo.parentKey = parentKey !== null && parentKey !== void 0 ? parentKey : null;
        layoutNode.layoutInfo.allowOverflow = true;
        this.layoutNodes.set(node.key, layoutNode);
        return layoutNode;
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'section':
                return this.buildSection(node, x, y);
            case 'item':
                return this.buildItem(node, x, y);
            case 'header':
                return this.buildSectionHeader(node, x, y);
            case 'loader':
                return this.buildLoader(node, x, y);
            case 'separator':
                return this.buildItem(node, x, y);
            default:
                throw new Error('Unsupported node type: ' + node.type);
        }
    }
    buildLoader(node, x, y) {
        let rect = new (0, Rect/* Rect */.r)(x, y, this.padding, 0);
        let layoutInfo = new (0, $d7fd61009c21d0bb$export$7e0eeb9da702a085)('loader', node.key, rect);
        rect.width = this.virtualizer.contentSize.width - this.padding - x;
        var _this_loaderHeight, _ref, _ref1;
        // Note that if the user provides isLoading to their sentinel during a case where they only want to render the emptyState, this will reserve
        // room for the loader alongside rendering the emptyState
        rect.height = node.props.isLoading ? (_ref1 = (_ref = (_this_loaderHeight = this.loaderHeight) !== null && _this_loaderHeight !== void 0 ? _this_loaderHeight : this.rowHeight) !== null && _ref !== void 0 ? _ref : this.estimatedRowHeight) !== null && _ref1 !== void 0 ? _ref1 : $61ef60fc9b1041f4$var$DEFAULT_HEIGHT : 0;
        return {
            layoutInfo: layoutInfo,
            validRect: rect.intersection(this.requestedRect)
        };
    }
    buildSection(node, x, y) {
        let collection = this.virtualizer.collection;
        let width = this.virtualizer.visibleRect.width - this.padding;
        let rect = new (0, Rect/* Rect */.r)(x, y, width - x, 0);
        let layoutInfo = new (0, $d7fd61009c21d0bb$export$7e0eeb9da702a085)(node.type, node.key, rect);
        let startY = y;
        let skipped = 0;
        let children = [];
        for (let child of (0, getChildNodes/* getChildNodes */.iQ)(node, collection)){
            var _this_rowHeight, _ref;
            let rowHeight = ((_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $61ef60fc9b1041f4$var$DEFAULT_HEIGHT) + this.gap;
            // Skip rows before the valid rectangle unless they are already cached.
            if (y + rowHeight < this.requestedRect.y && !this.isValid(node, y)) {
                y += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.buildChild(child, x, y, layoutInfo.key);
            y = layoutNode.layoutInfo.rect.maxY + this.gap;
            children.push(layoutNode);
            if (y > this.requestedRect.maxY) {
                // Estimate the remaining height for rows that we don't need to layout right now.
                y += ([
                    ...(0, getChildNodes/* getChildNodes */.iQ)(node, collection)
                ].length - (children.length + skipped)) * rowHeight;
                break;
            }
        }
        y -= this.gap;
        rect.height = y - startY;
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node: node
        };
    }
    buildSectionHeader(node, x, y) {
        let width = this.virtualizer.visibleRect.width - this.padding;
        let rectHeight = this.headingHeight;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            let previousLayoutInfo = previousLayoutNode === null || previousLayoutNode === void 0 ? void 0 : previousLayoutNode.layoutInfo;
            if (previousLayoutInfo) {
                let curNode = this.virtualizer.collection.getItem(node.key);
                let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
                rectHeight = previousLayoutInfo.rect.height;
                isEstimated = width !== previousLayoutInfo.rect.width || curNode !== lastNode || previousLayoutInfo.estimatedSize;
            } else {
                rectHeight = node.rendered ? this.estimatedHeadingHeight : 0;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = $61ef60fc9b1041f4$var$DEFAULT_HEIGHT;
        let headerRect = new (0, Rect/* Rect */.r)(x, y, width - x, rectHeight);
        let header = new (0, $d7fd61009c21d0bb$export$7e0eeb9da702a085)('header', node.key, headerRect);
        header.estimatedSize = isEstimated;
        return {
            layoutInfo: header,
            children: [],
            validRect: header.rect.intersection(this.requestedRect),
            node: node
        };
    }
    buildItem(node, x, y) {
        let width = this.virtualizer.visibleRect.width - this.padding - x;
        let rectHeight = this.rowHeight;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                rectHeight = previousLayoutNode.layoutInfo.rect.height;
                isEstimated = width !== previousLayoutNode.layoutInfo.rect.width || node !== previousLayoutNode.node || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                rectHeight = this.estimatedRowHeight;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = $61ef60fc9b1041f4$var$DEFAULT_HEIGHT;
        let rect = new (0, Rect/* Rect */.r)(x, y, width, rectHeight);
        let layoutInfo = new (0, $d7fd61009c21d0bb$export$7e0eeb9da702a085)(node.type, node.key, rect);
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo,
            children: [],
            validRect: layoutInfo.rect,
            node: node
        };
    }
    updateItemSize(key, size) {
        let layoutNode = this.layoutNodes.get(key);
        // If no layoutInfo, item has been deleted/removed.
        if (!layoutNode) return false;
        let collection = this.virtualizer.collection;
        let layoutInfo = layoutNode.layoutInfo;
        layoutInfo.estimatedSize = false;
        if (layoutInfo.rect.height !== size.height) {
            // Copy layout info rather than mutating so that later caches are invalidated.
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect.height = size.height;
            layoutNode.layoutInfo = newLayoutInfo;
            // Items after this layoutInfo will need to be repositioned to account for the new height.
            // Adjust the validRect so that only items above remain valid.
            this.validRect.height = Math.min(this.validRect.height, layoutInfo.rect.y - this.validRect.y);
            // The requestedRect also needs to be adjusted to account for the height difference.
            this.requestedRect.height += newLayoutInfo.rect.height - layoutInfo.rect.height;
            // Invalidate layout for this layout node and all parents
            this.updateLayoutNode(key, layoutInfo, newLayoutInfo);
            let node = layoutInfo.parentKey != null ? collection.getItem(layoutInfo.parentKey) : null;
            while(node){
                this.updateLayoutNode(node.key, layoutInfo, newLayoutInfo);
                node = node.parentKey != null ? collection.getItem(node.parentKey) : null;
            }
            return true;
        }
        return false;
    }
    updateLayoutNode(key, oldLayoutInfo, newLayoutInfo) {
        let n = this.layoutNodes.get(key);
        if (n) {
            // Invalidate by intersecting the validRect of this node with the overall validRect.
            n.validRect = n.validRect.intersection(this.validRect);
            // Replace layout info in LayoutNode
            if (n.layoutInfo === oldLayoutInfo) n.layoutInfo = newLayoutInfo;
        }
    }
    getContentSize() {
        return this.contentSize;
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        x += this.virtualizer.visibleRect.x;
        y += this.virtualizer.visibleRect.y;
        // Find the closest item within on either side of the point using the gap width.
        let searchRect = new (0, Rect/* Rect */.r)(x, Math.max(0, y - this.gap), 1, Math.max(1, this.gap * 2));
        let candidates = this.getVisibleLayoutInfos(searchRect);
        let key = null;
        let minDistance = Infinity;
        for (let candidate of candidates){
            // Ignore items outside the search rect, e.g. persisted keys.
            if (!candidate.rect.intersects(searchRect)) continue;
            let yDist = Math.abs(candidate.rect.y - y);
            let maxYDist = Math.abs(candidate.rect.maxY - y);
            let dist = Math.min(yDist, maxYDist);
            if (dist < minDistance) {
                minDistance = dist;
                key = candidate.key;
            }
        }
        if (key == null || this.virtualizer.collection.size === 0) return {
            type: 'root'
        };
        let layoutInfo = this.getLayoutInfo(key);
        if (!layoutInfo) return null;
        let rect = layoutInfo.rect;
        let target = {
            type: 'item',
            key: layoutInfo.key,
            dropPosition: 'on'
        };
        // If dropping on the item isn't accepted, try the target before or after depending on the y position.
        // Otherwise, if dropping on the item is accepted, still try the before/after positions if within 10px
        // of the top or bottom of the item.
        if (!isValidDropTarget(target)) {
            if (y <= rect.y + rect.height / 2 && isValidDropTarget({
                ...target,
                dropPosition: 'before'
            })) target.dropPosition = 'before';
            else if (isValidDropTarget({
                ...target,
                dropPosition: 'after'
            })) target.dropPosition = 'after';
        } else if (y <= rect.y + 10 && isValidDropTarget({
            ...target,
            dropPosition: 'before'
        })) target.dropPosition = 'before';
        else if (y >= rect.maxY - 10 && isValidDropTarget({
            ...target,
            dropPosition: 'after'
        })) target.dropPosition = 'after';
        return target;
    }
    getDropTargetLayoutInfo(target) {
        let layoutInfo = this.getLayoutInfo(target.key);
        let rect;
        if (target.dropPosition === 'before') rect = new (0, Rect/* Rect */.r)(layoutInfo.rect.x, layoutInfo.rect.y - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
        else if (target.dropPosition === 'after') rect = new (0, Rect/* Rect */.r)(layoutInfo.rect.x, layoutInfo.rect.maxY - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
        else rect = layoutInfo.rect;
        return new (0, $d7fd61009c21d0bb$export$7e0eeb9da702a085)('dropIndicator', target.key + ':' + target.dropPosition, rect);
    }
    /**
   * Creates a new ListLayout with options. See the list of properties below for a description
   * of the options that can be provided.
   */ constructor(options = {}){
        super();
        var _options_rowHeight;
        this.rowHeight = (_options_rowHeight = options.rowHeight) !== null && _options_rowHeight !== void 0 ? _options_rowHeight : null;
        var _options_estimatedRowHeight;
        this.estimatedRowHeight = (_options_estimatedRowHeight = options.estimatedRowHeight) !== null && _options_estimatedRowHeight !== void 0 ? _options_estimatedRowHeight : null;
        var _options_headingHeight;
        this.headingHeight = (_options_headingHeight = options.headingHeight) !== null && _options_headingHeight !== void 0 ? _options_headingHeight : null;
        var _options_estimatedHeadingHeight;
        this.estimatedHeadingHeight = (_options_estimatedHeadingHeight = options.estimatedHeadingHeight) !== null && _options_estimatedHeadingHeight !== void 0 ? _options_estimatedHeadingHeight : null;
        var _options_loaderHeight;
        this.loaderHeight = (_options_loaderHeight = options.loaderHeight) !== null && _options_loaderHeight !== void 0 ? _options_loaderHeight : null;
        this.dropIndicatorThickness = options.dropIndicatorThickness || 2;
        this.gap = options.gap || 0;
        this.padding = options.padding || 0;
        this.layoutNodes = new Map();
        this.rootNodes = [];
        this.lastCollection = null;
        this.invalidateEverything = false;
        this.validRect = new (0, Rect/* Rect */.r)();
        this.requestedRect = new (0, Rect/* Rect */.r)();
        this.contentSize = new (0, Size/* Size */.o)();
    }
}



//# sourceMappingURL=ListLayout.module.js.map


/***/ }),

/***/ 17430:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ $3041db3296945e6e$export$baf26146a414f24a)
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
 */ class $3041db3296945e6e$export$baf26146a414f24a {
    /**
   * Returns a copy of this point.
   */ copy() {
        return new $3041db3296945e6e$export$baf26146a414f24a(this.x, this.y);
    }
    /**
   * Checks if two points are equal.
   */ equals(point) {
        return this.x === point.x && this.y === point.y;
    }
    /**
   * Returns true if this point is the origin.
   */ isOrigin() {
        return this.x === 0 && this.y === 0;
    }
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}



//# sourceMappingURL=Point.module.js.map


/***/ }),

/***/ 18442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ $60423f92c7f9ad87$export$c79fc6492f3af13d)
/* harmony export */ });
/* harmony import */ var _Point_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17430);


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
class $60423f92c7f9ad87$export$c79fc6492f3af13d {
    /**
   * The maximum x-coordinate in the rectangle.
   */ get maxX() {
        return this.x + this.width;
    }
    /**
   * The maximum y-coordinate in the rectangle.
   */ get maxY() {
        return this.y + this.height;
    }
    /**
   * The area of the rectangle.
   */ get area() {
        return this.width * this.height;
    }
    /**
   * The top left corner of the rectangle.
   */ get topLeft() {
        return new (0, _Point_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Point */ .b)(this.x, this.y);
    }
    /**
   * The top right corner of the rectangle.
   */ get topRight() {
        return new (0, _Point_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Point */ .b)(this.maxX, this.y);
    }
    /**
   * The bottom left corner of the rectangle.
   */ get bottomLeft() {
        return new (0, _Point_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Point */ .b)(this.x, this.maxY);
    }
    /**
   * The bottom right corner of the rectangle.
   */ get bottomRight() {
        return new (0, _Point_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Point */ .b)(this.maxX, this.maxY);
    }
    /**
   * Returns whether this rectangle intersects another rectangle.
   * @param rect - The rectangle to check.
   */ intersects(rect) {
        return this.area > 0 && rect.area > 0 && this.x <= rect.x + rect.width && rect.x <= this.x + this.width && this.y <= rect.y + rect.height && rect.y <= this.y + this.height;
    }
    /**
   * Returns whether this rectangle fully contains another rectangle.
   * @param rect - The rectangle to check.
   */ containsRect(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.maxX >= rect.maxX && this.maxY >= rect.maxY;
    }
    /**
   * Returns whether the rectangle contains the given point.
   * @param point - The point to check.
   */ containsPoint(point) {
        return this.x <= point.x && this.y <= point.y && this.maxX >= point.x && this.maxY >= point.y;
    }
    /**
   * Returns the first corner of this rectangle (from top to bottom, left to right)
   * that is contained in the given rectangle, or null of the rectangles do not intersect.
   * @param rect - The rectangle to check.
   */ getCornerInRect(rect) {
        for (let key of [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ]){
            if (rect.containsPoint(this[key])) return key;
        }
        return null;
    }
    equals(rect) {
        return rect.x === this.x && rect.y === this.y && rect.width === this.width && rect.height === this.height;
    }
    pointEquals(point) {
        return this.x === point.x && this.y === point.y;
    }
    sizeEquals(size) {
        return this.width === size.width && this.height === size.height;
    }
    /**
   * Returns the union of this Rect and another.
   */ union(other) {
        let x = Math.min(this.x, other.x);
        let y = Math.min(this.y, other.y);
        let width = Math.max(this.maxX, other.maxX) - x;
        let height = Math.max(this.maxY, other.maxY) - y;
        return new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, width, height);
    }
    /**
   * Returns the intersection of this Rect with another.
   * If the rectangles do not intersect, an all zero Rect is returned.
   */ intersection(other) {
        if (!this.intersects(other)) return new $60423f92c7f9ad87$export$c79fc6492f3af13d(0, 0, 0, 0);
        let x = Math.max(this.x, other.x);
        let y = Math.max(this.y, other.y);
        return new $60423f92c7f9ad87$export$c79fc6492f3af13d(x, y, Math.min(this.maxX, other.maxX) - x, Math.min(this.maxY, other.maxY) - y);
    }
    /**
   * Returns a copy of this rectangle.
   */ copy() {
        return new $60423f92c7f9ad87$export$c79fc6492f3af13d(this.x, this.y, this.width, this.height);
    }
    constructor(x = 0, y = 0, width = 0, height = 0){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}



//# sourceMappingURL=Rect.module.js.map


/***/ }),

/***/ 47379:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec)
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
 */ class $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec {
    /**
   * Returns a copy of this size.
   */ copy() {
        return new $ee1bfa90a957fb8a$export$cb6da89c6af1a8ec(this.width, this.height);
    }
    /**
   * Returns whether this size is equal to another one.
   */ equals(other) {
        return this.width === other.width && this.height === other.height;
    }
    /**
   * The total area of the Size.
   */ get area() {
        return this.width * this.height;
    }
    constructor(width = 0, height = 0){
        this.width = width;
        this.height = height;
    }
}



//# sourceMappingURL=Size.module.js.map


/***/ }),

/***/ 43660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $216918bed6669f72$export$f5c9f3c2c4054eec),
/* harmony export */   k: () => (/* binding */ $216918bed6669f72$export$2dc6166a7e65358c)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);







const $216918bed6669f72$export$2dc6166a7e65358c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
let $216918bed6669f72$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $216918bed6669f72$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function TextArea(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $216918bed6669f72$export$2dc6166a7e65358c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useHover */ .M)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-TextArea'
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("textarea", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)($216918bed6669f72$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=TextArea.module.js.map


/***/ }),

/***/ 32945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $bcdf0525bf22703d$export$2c73285ae9390cec),
/* harmony export */   H: () => (/* binding */ $bcdf0525bf22703d$export$2129e27b3ef0d483)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _FieldError_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44300);
/* harmony import */ var _Form_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23128);
/* harmony import */ var _Input_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79950);
/* harmony import */ var _Label_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21704);
/* harmony import */ var _TextArea_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43660);
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27279);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11811);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);












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










const $bcdf0525bf22703d$export$2129e27b3ef0d483 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $bcdf0525bf22703d$export$2c73285ae9390cec = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function TextField(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $bcdf0525bf22703d$export$2129e27b3ef0d483);
    let { validationBehavior: formValidationBehavior } = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlottedContext */ .CC)((0, _Form_mjs__WEBPACK_IMPORTED_MODULE_3__/* .FormContext */ .c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let inputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let [inputContextProps, mergedInputRef] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)({}, inputRef, (0, _Input_mjs__WEBPACK_IMPORTED_MODULE_4__/* .InputContext */ .E));
    let [labelRef, label] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlot */ ._E)(!props['aria-label'] && !props['aria-labelledby']);
    let [inputElementType, setInputElementType] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)('input');
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .useTextField */ .v)({
        ...(0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .removeDataAttributes */ .SK)(props),
        inputElementType: inputElementType,
        label: label,
        validationBehavior: validationBehavior
    }, mergedInputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((el)=>{
        mergedInputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, [
        mergedInputRef
    ]);
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-TextField'
    });
    let DOMProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .filterDOMProps */ .$)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Provider */ .Kq), {
        values: [
            [
                (0, _Label_mjs__WEBPACK_IMPORTED_MODULE_7__/* .LabelContext */ .I),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, _Input_mjs__WEBPACK_IMPORTED_MODULE_4__/* .InputContext */ .E),
                {
                    ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .mergeProps */ .v)(inputProps, inputContextProps),
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, _TextArea_mjs__WEBPACK_IMPORTED_MODULE_9__/* .TextAreaContext */ .k),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, _Text_mjs__WEBPACK_IMPORTED_MODULE_10__/* .TextContext */ .h),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, _FieldError_mjs__WEBPACK_IMPORTED_MODULE_11__/* .FieldErrorContext */ .C),
                validation
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=TextField.module.js.map


/***/ }),

/***/ 424:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ $ce3a951440fc273f$export$89be5a243e59c4b2)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/@react-stately/virtualizer/dist/Rect.mjs
var Rect = __webpack_require__(18442);
;// ./node_modules/@react-stately/virtualizer/dist/ReusableView.mjs
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
 */ let $ad1d98aa8f0c31b4$var$KEY = 0;
class $ad1d98aa8f0c31b4$export$1a5223887c560441 {
    /**
   * Prepares the view for reuse. Called just before the view is removed from the DOM.
   */ prepareForReuse() {
        this.content = null;
        this.rendered = null;
        this.layoutInfo = null;
    }
    getReusableView(reuseType) {
        // Reusable view queue should be FIFO so that DOM order remains consistent during scrolling.
        // For example, cells within a row should remain in the same order even if the row changes contents.
        // The cells within a row are removed from their parent in order. If the row is reused, the cells
        // should be reused in the new row in the same order they were before.
        let reusable = this.reusableViews.get(reuseType);
        let view = reusable && reusable.length > 0 ? reusable.shift() : new $ad1d98aa8f0c31b4$export$7a41b6f219e61634(this.virtualizer, this, reuseType);
        return view;
    }
    reuseChild(child) {
        child.prepareForReuse();
        let reusable = this.reusableViews.get(child.viewType);
        if (!reusable) {
            reusable = [];
            this.reusableViews.set(child.viewType, reusable);
        }
        reusable.push(child);
    }
    constructor(virtualizer, viewType){
        this.virtualizer = virtualizer;
        this.key = ++$ad1d98aa8f0c31b4$var$KEY;
        this.viewType = viewType;
        this.children = new Set();
        this.reusableViews = new Map();
        this.layoutInfo = null;
        this.content = null;
        this.rendered = null;
    }
}
class $ad1d98aa8f0c31b4$export$e21886a4eef6b29a extends $ad1d98aa8f0c31b4$export$1a5223887c560441 {
    constructor(virtualizer){
        super(virtualizer, 'root');
    }
}
class $ad1d98aa8f0c31b4$export$7a41b6f219e61634 extends $ad1d98aa8f0c31b4$export$1a5223887c560441 {
    constructor(virtualizer, parent, viewType){
        super(virtualizer, viewType);
        this.parent = parent;
    }
}



//# sourceMappingURL=ReusableView.module.js.map

;// ./node_modules/@react-stately/virtualizer/dist/utils.mjs
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
 */ /** Returns whether two sets are equal. */ function $fc36f9a046a9ce79$export$a8d0d0c8d1c5df64(a, b) {
    if (a === b) return true;
    if (a.size !== b.size) return false;
    for (let key of a){
        if (!b.has(key)) return false;
    }
    return true;
}



//# sourceMappingURL=utils.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/virtualizer/dist/Point.mjs
var Point = __webpack_require__(17430);
;// ./node_modules/@react-stately/virtualizer/dist/OverscanManager.mjs



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

class $364191b3decf3697$export$4455ee6afb38dcbb {
    setVisibleRect(rect) {
        let time = performance.now() - this.startTime;
        if (time < 500) {
            if (rect.x !== this.visibleRect.x && time > 0) this.velocity.x = (rect.x - this.visibleRect.x) / time;
            if (rect.y !== this.visibleRect.y && time > 0) this.velocity.y = (rect.y - this.visibleRect.y) / time;
        }
        this.startTime = performance.now();
        this.visibleRect = rect;
    }
    getOverscannedRect() {
        let overscanned = this.visibleRect.copy();
        let overscanY = this.visibleRect.height / 3;
        overscanned.height += overscanY;
        if (this.velocity.y < 0) overscanned.y -= overscanY;
        if (this.velocity.x !== 0) {
            let overscanX = this.visibleRect.width / 3;
            overscanned.width += overscanX;
            if (this.velocity.x < 0) overscanned.x -= overscanX;
        }
        return overscanned;
    }
    constructor(){
        this.startTime = 0;
        this.velocity = new (0, Point/* Point */.b)(0, 0);
        this.visibleRect = new (0, Rect/* Rect */.r)();
    }
}



//# sourceMappingURL=OverscanManager.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/virtualizer/dist/Size.mjs
var Size = __webpack_require__(47379);
;// ./node_modules/@react-stately/virtualizer/dist/Virtualizer.mjs






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




class $38b9490c1cca8fc4$export$89be5a243e59c4b2 {
    /** Returns whether the given key, or an ancestor, is persisted. */ isPersistedKey(key) {
        // Quick check if the key is directly in the set of persisted keys.
        if (this.persistedKeys.has(key)) return true;
        // If not, check if the key is an ancestor of any of the persisted keys.
        for (let k of this.persistedKeys)while(k != null){
            let layoutInfo = this.layout.getLayoutInfo(k);
            if (!layoutInfo || layoutInfo.parentKey == null) break;
            k = layoutInfo.parentKey;
            if (k === key) return true;
        }
        return false;
    }
    getParentView(layoutInfo) {
        return layoutInfo.parentKey != null ? this._visibleViews.get(layoutInfo.parentKey) : this._rootView;
    }
    getReusableView(layoutInfo) {
        let parentView = this.getParentView(layoutInfo);
        let view = parentView.getReusableView(layoutInfo.type);
        view.layoutInfo = layoutInfo;
        this._renderView(view);
        return view;
    }
    _renderView(reusableView) {
        if (reusableView.layoutInfo) {
            let { type: type, key: key, content: content } = reusableView.layoutInfo;
            reusableView.content = content || this.collection.getItem(key);
            reusableView.rendered = this._renderContent(type, reusableView.content);
        }
    }
    _renderContent(type, content) {
        let cached = content != null ? this._renderedContent.get(content) : null;
        if (cached != null) return cached;
        let rendered = this.delegate.renderView(type, content);
        if (content) this._renderedContent.set(content, rendered);
        return rendered;
    }
    /**
   * Returns the key for the item view currently at the given point.
   */ keyAtPoint(point) {
        let rect = new (0, Rect/* Rect */.r)(point.x, point.y, 1, 1);
        let layoutInfos = rect.area === 0 ? [] : this.layout.getVisibleLayoutInfos(rect);
        // Layout may return multiple layout infos in the case of
        // persisted keys, so find the first one that actually intersects.
        for (let layoutInfo of layoutInfos){
            if (layoutInfo.rect.intersects(rect)) return layoutInfo.key;
        }
        return null;
    }
    relayout(context = {}) {
        // Update the layout
        this.layout.update(context);
        this.contentSize = this.layout.getContentSize();
        // Constrain scroll position.
        // If the content changed, scroll to the top.
        let visibleRect = this.visibleRect;
        let contentOffsetX = context.contentChanged ? 0 : visibleRect.x;
        let contentOffsetY = context.contentChanged ? 0 : visibleRect.y;
        contentOffsetX = Math.max(0, Math.min(this.contentSize.width - visibleRect.width, contentOffsetX));
        contentOffsetY = Math.max(0, Math.min(this.contentSize.height - visibleRect.height, contentOffsetY));
        if (contentOffsetX !== visibleRect.x || contentOffsetY !== visibleRect.y) {
            // If the offset changed, trigger a new re-render.
            let rect = new (0, Rect/* Rect */.r)(contentOffsetX, contentOffsetY, visibleRect.width, visibleRect.height);
            this.delegate.setVisibleRect(rect);
        } else this.updateSubviews();
    }
    getVisibleLayoutInfos() {
        let isTestEnv =  false && 0;
        let isClientWidthMocked = isTestEnv && typeof HTMLElement !== 'undefined' && Object.getOwnPropertyNames(HTMLElement.prototype).includes('clientWidth');
        let isClientHeightMocked = isTestEnv && typeof HTMLElement !== 'undefined' && Object.getOwnPropertyNames(HTMLElement.prototype).includes('clientHeight');
        let rect;
        if (isTestEnv && !(isClientWidthMocked && isClientHeightMocked)) rect = new (0, Rect/* Rect */.r)(0, 0, this.contentSize.width, this.contentSize.height);
        else rect = this._overscanManager.getOverscannedRect();
        let layoutInfos = this.layout.getVisibleLayoutInfos(rect);
        let map = new Map;
        for (let layoutInfo of layoutInfos)map.set(layoutInfo.key, layoutInfo);
        return map;
    }
    updateSubviews() {
        let visibleLayoutInfos = this.getVisibleLayoutInfos();
        let removed = new Set();
        for (let [key, view] of this._visibleViews){
            let layoutInfo = visibleLayoutInfos.get(key);
            // If a view's parent changed, treat it as a delete and re-create in the new parent.
            if (!layoutInfo || view.parent !== this.getParentView(layoutInfo)) {
                this._visibleViews.delete(key);
                view.parent.reuseChild(view);
                removed.add(view); // Defer removing in case we reuse this view.
            }
        }
        for (let [key, layoutInfo] of visibleLayoutInfos){
            let view = this._visibleViews.get(key);
            if (!view) {
                view = this.getReusableView(layoutInfo);
                view.parent.children.add(view);
                this._visibleViews.set(key, view);
                removed.delete(view);
            } else {
                view.layoutInfo = layoutInfo;
                let item = this.collection.getItem(layoutInfo.key);
                if (view.content !== item) {
                    if (view.content != null) this._renderedContent.delete(view.content);
                    this._renderView(view);
                }
            }
        }
        // The remaining views in `removed` were not reused to render new items.
        // They should be removed from the DOM. We also clear the reusable view queue
        // here since there's no point holding onto views that have been removed.
        // Doing so hurts performance in the future when reusing elements due to FIFO order.
        for (let view of removed){
            view.parent.children.delete(view);
            view.parent.reusableViews.clear();
        }
        // Reordering DOM nodes is costly, so we defer this until scrolling stops.
        // DOM order does not affect visual order (due to absolute positioning),
        // but does matter for assistive technology users.
        if (!this._isScrolling) // Layout infos must be in topological order (parents before children).
        for (let key of visibleLayoutInfos.keys()){
            let view = this._visibleViews.get(key);
            view.parent.children.delete(view);
            view.parent.children.add(view);
        }
    }
    /** Performs layout and updates visible views as needed. */ render(opts) {
        let mutableThis = this;
        let needsLayout = false;
        let offsetChanged = false;
        let sizeChanged = false;
        let itemSizeChanged = false;
        let layoutOptionsChanged = false;
        let needsUpdate = false;
        if (opts.collection !== this.collection) {
            mutableThis.collection = opts.collection;
            needsLayout = true;
        }
        if (opts.layout !== this.layout || this.layout.virtualizer !== this) {
            if (this.layout) this.layout.virtualizer = null;
            opts.layout.virtualizer = this;
            mutableThis.layout = opts.layout;
            needsLayout = true;
        }
        if (opts.persistedKeys && !(0, $fc36f9a046a9ce79$export$a8d0d0c8d1c5df64)(opts.persistedKeys, this.persistedKeys)) {
            mutableThis.persistedKeys = opts.persistedKeys;
            needsUpdate = true;
        }
        if (!this.visibleRect.equals(opts.visibleRect)) {
            this._overscanManager.setVisibleRect(opts.visibleRect);
            let shouldInvalidate = this.layout.shouldInvalidate(opts.visibleRect, this.visibleRect);
            if (shouldInvalidate) {
                offsetChanged = !opts.visibleRect.pointEquals(this.visibleRect);
                sizeChanged = !opts.visibleRect.sizeEquals(this.visibleRect);
                needsLayout = true;
            } else needsUpdate = true;
            mutableThis.visibleRect = opts.visibleRect;
        }
        if (opts.invalidationContext !== this._invalidationContext) {
            if (opts.invalidationContext) {
                sizeChanged || (sizeChanged = opts.invalidationContext.sizeChanged || false);
                offsetChanged || (offsetChanged = opts.invalidationContext.offsetChanged || false);
                itemSizeChanged || (itemSizeChanged = opts.invalidationContext.itemSizeChanged || false);
                layoutOptionsChanged || (layoutOptionsChanged = opts.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && opts.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(opts.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions));
                needsLayout || (needsLayout = itemSizeChanged || sizeChanged || offsetChanged || layoutOptionsChanged);
            }
            this._invalidationContext = opts.invalidationContext;
        }
        if (opts.isScrolling !== this._isScrolling) {
            this._isScrolling = opts.isScrolling;
            if (!opts.isScrolling) // Update to fix the DOM order after scrolling.
            needsUpdate = true;
        }
        if (needsLayout) this.relayout({
            offsetChanged: offsetChanged,
            sizeChanged: sizeChanged,
            itemSizeChanged: itemSizeChanged,
            layoutOptionsChanged: layoutOptionsChanged,
            layoutOptions: this._invalidationContext.layoutOptions
        });
        else if (needsUpdate) this.updateSubviews();
        return Array.from(this._rootView.children);
    }
    getVisibleView(key) {
        return this._visibleViews.get(key);
    }
    invalidate(context) {
        this.delegate.invalidate(context);
    }
    updateItemSize(key, size) {
        if (!this.layout.updateItemSize) return;
        let changed = this.layout.updateItemSize(key, size);
        if (changed) this.invalidate({
            itemSizeChanged: true
        });
    }
    constructor(options){
        this.delegate = options.delegate;
        this.collection = options.collection;
        this.layout = options.layout;
        this.contentSize = new (0, Size/* Size */.o);
        this.visibleRect = new (0, Rect/* Rect */.r);
        this.persistedKeys = new Set();
        this._visibleViews = new Map();
        this._renderedContent = new WeakMap();
        this._rootView = new (0, $ad1d98aa8f0c31b4$export$e21886a4eef6b29a)(this);
        this._isScrolling = false;
        this._invalidationContext = {};
        this._overscanManager = new (0, $364191b3decf3697$export$4455ee6afb38dcbb)();
    }
}



//# sourceMappingURL=Virtualizer.module.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
;// ./node_modules/@react-stately/virtualizer/dist/useVirtualizerState.mjs





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



function $fc0b13b484ac1194$export$1505db82fe357e65(opts) {
    let [visibleRect, setVisibleRect] = (0, react.useState)(new (0, Rect/* Rect */.r)(0, 0, 0, 0));
    let [isScrolling, setScrolling] = (0, react.useState)(false);
    let [invalidationContext, setInvalidationContext] = (0, react.useState)({});
    let visibleRectChanged = (0, react.useRef)(false);
    let [virtualizer] = (0, react.useState)(()=>new (0, $38b9490c1cca8fc4$export$89be5a243e59c4b2)({
            collection: opts.collection,
            layout: opts.layout,
            delegate: {
                setVisibleRect (rect) {
                    setVisibleRect(rect);
                    visibleRectChanged.current = true;
                },
                // TODO: should changing these invalidate the entire cache?
                renderView: opts.renderView,
                invalidate: setInvalidationContext
            }
        }));
    // onVisibleRectChange must be called from an effect, not during render.
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (visibleRectChanged.current) {
            visibleRectChanged.current = false;
            opts.onVisibleRectChange(visibleRect);
        }
    });
    let mergedInvalidationContext = (0, react.useMemo)(()=>{
        if (opts.layoutOptions != null) return {
            ...invalidationContext,
            layoutOptions: opts.layoutOptions
        };
        return invalidationContext;
    }, [
        invalidationContext,
        opts.layoutOptions
    ]);
    let visibleViews = virtualizer.render({
        layout: opts.layout,
        collection: opts.collection,
        persistedKeys: opts.persistedKeys,
        layoutOptions: opts.layoutOptions,
        visibleRect: visibleRect,
        invalidationContext: mergedInvalidationContext,
        isScrolling: isScrolling
    });
    let contentSize = virtualizer.contentSize;
    let startScrolling = (0, react.useCallback)(()=>{
        setScrolling(true);
    }, []);
    let endScrolling = (0, react.useCallback)(()=>{
        setScrolling(false);
    }, []);
    let state = (0, react.useMemo)(()=>({
            virtualizer: virtualizer,
            visibleViews: visibleViews,
            setVisibleRect: setVisibleRect,
            contentSize: contentSize,
            isScrolling: isScrolling,
            startScrolling: startScrolling,
            endScrolling: endScrolling
        }), [
        virtualizer,
        visibleViews,
        setVisibleRect,
        contentSize,
        isScrolling,
        startScrolling,
        endScrolling
    ]);
    return state;
}



//# sourceMappingURL=useVirtualizerState.module.js.map

;// ./node_modules/@react-aria/virtualizer/dist/utils.mjs
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
 */ let $ce415dc67314b753$var$cachedRTLResult = null;
function $ce415dc67314b753$export$faf7630257ad4304(recalculate = false) {
    if ($ce415dc67314b753$var$cachedRTLResult === null || recalculate) {
        const outerDiv = document.createElement('div');
        const outerStyle = outerDiv.style;
        outerStyle.width = '50px';
        outerStyle.height = '50px';
        outerStyle.overflow = 'scroll';
        outerStyle.direction = 'rtl';
        const innerDiv = document.createElement('div');
        const innerStyle = innerDiv.style;
        innerStyle.width = '100px';
        innerStyle.height = '100px';
        outerDiv.appendChild(innerDiv);
        document.body.appendChild(outerDiv);
        if (outerDiv.scrollLeft > 0) $ce415dc67314b753$var$cachedRTLResult = 'positive-descending';
        else {
            outerDiv.scrollLeft = 1;
            if (outerDiv.scrollLeft === 0) $ce415dc67314b753$var$cachedRTLResult = 'negative';
            else $ce415dc67314b753$var$cachedRTLResult = 'positive-ascending';
        }
        document.body.removeChild(outerDiv);
        return $ce415dc67314b753$var$cachedRTLResult;
    }
    return $ce415dc67314b753$var$cachedRTLResult;
}
function $ce415dc67314b753$export$1389d168952b34b5(node, direction) {
    let { scrollLeft: scrollLeft } = node;
    // scrollLeft in rtl locales differs across browsers, so normalize.
    // See comment by getRTLOffsetType below for details.
    if (direction === 'rtl') {
        let { scrollWidth: scrollWidth, clientWidth: clientWidth } = node;
        switch($ce415dc67314b753$export$faf7630257ad4304()){
            case 'negative':
                scrollLeft = -scrollLeft;
                break;
            case 'positive-descending':
                scrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
        }
    }
    return scrollLeft;
}
function $ce415dc67314b753$export$ed5fd5ffe5ab0ac(node, direction, scrollLeft) {
    if (direction === 'rtl') switch($ce415dc67314b753$export$faf7630257ad4304()){
        case 'negative':
            scrollLeft = -scrollLeft;
            break;
        case 'positive-ascending':
            break;
        default:
            {
                const { clientWidth: clientWidth, scrollWidth: scrollWidth } = node;
                scrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
    }
    node.scrollLeft = scrollLeft;
}



//# sourceMappingURL=utils.module.js.map

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEvent.mjs
var useEvent = __webpack_require__(17460);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var useEffectEvent = __webpack_require__(7049);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(77366);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./node_modules/@react-aria/virtualizer/dist/ScrollView.mjs







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
 */ // @ts-ignore






function $44a6ee657928b002$var$ScrollView(props, ref) {
    ref = (0, $f9kpT$useObjectRef)(ref);
    let { scrollViewProps: scrollViewProps, contentProps: contentProps } = $44a6ee657928b002$export$2ea0c4974da4731b(props, ref);
    return /*#__PURE__*/ (0, $f9kpT$react).createElement("div", {
        role: "presentation",
        ...scrollViewProps,
        ref: ref
    }, /*#__PURE__*/ (0, $f9kpT$react).createElement("div", contentProps, props.children));
}
const $44a6ee657928b002$export$5665e3d6be6adea = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $f9kpT$react).forwardRef($44a6ee657928b002$var$ScrollView)));
function $44a6ee657928b002$export$2ea0c4974da4731b(props, ref) {
    let { contentSize: contentSize, onVisibleRectChange: onVisibleRectChange, innerStyle: innerStyle, onScrollStart: onScrollStart, onScrollEnd: onScrollEnd, scrollDirection: scrollDirection = 'both', ...otherProps } = props;
    let state = (0, react.useRef)({
        scrollTop: 0,
        scrollLeft: 0,
        scrollEndTime: 0,
        scrollTimeout: null,
        width: 0,
        height: 0,
        isScrolling: false
    }).current;
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let [isScrolling, setScrolling] = (0, react.useState)(false);
    let onScroll = (0, react.useCallback)((e)=>{
        if (e.target !== e.currentTarget) return;
        if (props.onScroll) props.onScroll(e);
        (0, react_dom.flushSync)(()=>{
            let scrollTop = e.currentTarget.scrollTop;
            let scrollLeft = (0, $ce415dc67314b753$export$1389d168952b34b5)(e.currentTarget, direction);
            // Prevent rubber band scrolling from shaking when scrolling out of bounds
            state.scrollTop = Math.max(0, Math.min(scrollTop, contentSize.height - state.height));
            state.scrollLeft = Math.max(0, Math.min(scrollLeft, contentSize.width - state.width));
            onVisibleRectChange(new (0, Rect/* Rect */.r)(state.scrollLeft, state.scrollTop, state.width, state.height));
            if (!state.isScrolling) {
                state.isScrolling = true;
                setScrolling(true);
                // Pause typekit MutationObserver during scrolling.
                window.dispatchEvent(new Event('tk.disconnect-observer'));
                if (onScrollStart) onScrollStart();
            }
            // So we don't constantly call clearTimeout and setTimeout,
            // keep track of the current timeout time and only reschedule
            // the timer when it is getting close.
            let now = Date.now();
            if (state.scrollEndTime <= now + 50) {
                state.scrollEndTime = now + 300;
                if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
                state.scrollTimeout = setTimeout(()=>{
                    state.isScrolling = false;
                    setScrolling(false);
                    state.scrollTimeout = null;
                    window.dispatchEvent(new Event('tk.connect-observer'));
                    if (onScrollEnd) onScrollEnd();
                }, 300);
            }
        });
    }, [
        props,
        direction,
        state,
        contentSize,
        onVisibleRectChange,
        onScrollStart,
        onScrollEnd
    ]);
    // Attach event directly to ref so RAC Virtualizer doesn't need to send props upward.
    (0, useEvent/* useEvent */._)(ref, 'scroll', onScroll);
    (0, react.useEffect)(()=>{
        return ()=>{
            if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
            if (state.isScrolling) window.dispatchEvent(new Event('tk.connect-observer'));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let isUpdatingSize = (0, react.useRef)(false);
    let updateSize = (0, useEffectEvent/* useEffectEvent */.J)((flush)=>{
        let dom = ref.current;
        if (!dom || isUpdatingSize.current) return;
        // Prevent reentrancy when resize observer fires, triggers re-layout that results in
        // content size update, causing below layout effect to fire. This avoids infinite loops.
        isUpdatingSize.current = true;
        let isTestEnv =  false && 0;
        let isClientWidthMocked = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientWidth');
        let isClientHeightMocked = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes('clientHeight');
        let clientWidth = dom.clientWidth;
        let clientHeight = dom.clientHeight;
        let w = isTestEnv && !isClientWidthMocked ? Infinity : clientWidth;
        let h = isTestEnv && !isClientHeightMocked ? Infinity : clientHeight;
        if (state.width !== w || state.height !== h) {
            state.width = w;
            state.height = h;
            flush(()=>{
                onVisibleRectChange(new (0, Rect/* Rect */.r)(state.scrollLeft, state.scrollTop, w, h));
            });
            // If the clientWidth or clientHeight changed, scrollbars appeared or disappeared as
            // a result of the layout update. In this case, re-layout again to account for the
            // adjusted space. In very specific cases this might result in the scrollbars disappearing
            // again, resulting in extra padding. We stop after a maximum of two layout passes to avoid
            // an infinite loop. This matches how browsers behavior with native CSS grid layout.
            if (!isTestEnv && clientWidth !== dom.clientWidth || clientHeight !== dom.clientHeight) {
                state.width = dom.clientWidth;
                state.height = dom.clientHeight;
                flush(()=>{
                    onVisibleRectChange(new (0, Rect/* Rect */.r)(state.scrollLeft, state.scrollTop, state.width, state.height));
                });
            }
        }
        isUpdatingSize.current = false;
    });
    // Update visible rect when the content size changes, in case scrollbars need to appear or disappear.
    let lastContentSize = (0, react.useRef)(null);
    let [update, setUpdate] = (0, react.useState)({});
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (!isUpdatingSize.current && (lastContentSize.current == null || !contentSize.equals(lastContentSize.current))) {
            // React doesn't allow flushSync inside effects, so queue a microtask.
            // We also need to wait until all refs are set (e.g. when passing a ref down from a parent).
            // If we are in an `act` environment, update immediately without a microtask so you don't need
            // to mock timers in tests. In this case, the update is synchronous already.
            // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
            // https://github.com/reactwg/react-18/discussions/102
            // @ts-ignore
            if (typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined') {
                // This is so we update size in a separate render but within the same act. Needs to be setState instead of refs
                // due to strict mode.
                setUpdate({});
                lastContentSize.current = contentSize;
                return;
            } else queueMicrotask(()=>updateSize((0, react_dom.flushSync)));
        }
        lastContentSize.current = contentSize;
    });
    // Will only run in tests, needs to be in separate effect so it is properly run in the next render in strict mode.
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        updateSize((fn)=>fn());
    }, [
        update
    ]);
    let onResize = (0, react.useCallback)(()=>{
        updateSize((0, react_dom.flushSync));
    }, [
        updateSize
    ]);
    // Watch border-box instead of of content-box so that we don't go into
    // an infinite loop when scrollbars appear or disappear.
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: ref,
        box: 'border-box',
        onResize: onResize
    });
    let style = {
        // Reset padding so that relative positioning works correctly. Padding will be done in JS layout.
        padding: 0,
        ...otherProps.style
    };
    if (scrollDirection === 'horizontal') {
        style.overflowX = 'auto';
        style.overflowY = 'hidden';
    } else if (scrollDirection === 'vertical' || contentSize.width === state.width) {
        // Set overflow-x: hidden if content size is equal to the width of the scroll view.
        // This prevents horizontal scrollbars from flickering during resizing due to resize observer
        // firing slower than the frame rate, which may cause an infinite re-render loop.
        style.overflowY = 'auto';
        style.overflowX = 'hidden';
    } else style.overflow = 'auto';
    innerStyle = {
        width: Number.isFinite(contentSize.width) ? contentSize.width : undefined,
        height: Number.isFinite(contentSize.height) ? contentSize.height : undefined,
        pointerEvents: isScrolling ? 'none' : 'auto',
        position: 'relative',
        ...innerStyle
    };
    return {
        scrollViewProps: {
            ...otherProps,
            style: style
        },
        contentProps: {
            role: 'presentation',
            style: innerStyle
        }
    };
}



//# sourceMappingURL=ScrollView.module.js.map

;// ./node_modules/@react-aria/virtualizer/dist/useVirtualizerItem.mjs




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


function $47736c1e63ba1c6d$export$1da781778207e0a2(options) {
    let { layoutInfo: layoutInfo, virtualizer: virtualizer, ref: ref } = options;
    let key = layoutInfo === null || layoutInfo === void 0 ? void 0 : layoutInfo.key;
    let updateSize = (0, react.useCallback)(()=>{
        if (key != null && ref.current) {
            let size = $47736c1e63ba1c6d$var$getSize(ref.current);
            virtualizer.updateItemSize(key, size);
        }
    }, [
        virtualizer,
        key,
        ref
    ]);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (layoutInfo === null || layoutInfo === void 0 ? void 0 : layoutInfo.estimatedSize) updateSize();
    });
    return {
        updateSize: updateSize
    };
}
function $47736c1e63ba1c6d$var$getSize(node) {
    // Reset height before measuring so we get the intrinsic size
    let height = node.style.height;
    node.style.height = '';
    let size = new (0, Size/* Size */.o)(node.scrollWidth, node.scrollHeight);
    node.style.height = height;
    return size;
}



//# sourceMappingURL=useVirtualizerItem.module.js.map

;// ./node_modules/@react-aria/virtualizer/dist/VirtualizerItem.mjs




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


function $ccf8a0a04e4175ae$export$6796df8ba7398521(props) {
    let { style: style, className: className, layoutInfo: layoutInfo, virtualizer: virtualizer, parent: parent, children: children } = props;
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let ref = (0, react.useRef)(null);
    (0, $47736c1e63ba1c6d$export$1da781778207e0a2)({
        layoutInfo: layoutInfo,
        virtualizer: virtualizer,
        ref: ref
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        role: "presentation",
        ref: ref,
        className: className,
        style: {
            ...$ccf8a0a04e4175ae$export$1481e64fbe01b8b3(layoutInfo, direction, parent),
            ...style
        }
    }, children);
}
let $ccf8a0a04e4175ae$var$cache = new WeakMap();
function $ccf8a0a04e4175ae$export$1481e64fbe01b8b3(layoutInfo, dir, parent) {
    let xProperty = dir === 'rtl' ? 'right' : 'left';
    let cached = $ccf8a0a04e4175ae$var$cache.get(layoutInfo);
    if (cached && cached[xProperty] != null) {
        if (!parent) return cached;
        // Invalidate if the parent position changed.
        let top = layoutInfo.rect.y - parent.rect.y;
        let x = layoutInfo.rect.x - parent.rect.x;
        if (cached.top === top && cached[xProperty] === x) return cached;
    }
    let rectStyles = {
        // TODO: For layoutInfos that are sticky that have parents with overflow visible, their "top" will be relative to the to the nearest scrolling container
        // which WON'T be the parent since the parent has overflow visible. This means we shouldn't offset the height by the parent's position
        // Not 100% about this change here since it is quite ambigious what the scrolling container maybe and how its top is positioned with respect to the
        // calculated layoutInfo.y here
        top: layoutInfo.rect.y - (parent && !(parent.allowOverflow && layoutInfo.isSticky) ? parent.rect.y : 0),
        [xProperty]: layoutInfo.rect.x - (parent && !(parent.allowOverflow && layoutInfo.isSticky) ? parent.rect.x : 0),
        width: layoutInfo.rect.width,
        height: layoutInfo.rect.height
    };
    // Get rid of any non finite values since they aren't valid css values
    Object.entries(rectStyles).forEach(([key, value])=>{
        if (!Number.isFinite(value)) rectStyles[key] = undefined;
    });
    var _layoutInfo_transform;
    let style = {
        position: layoutInfo.isSticky ? 'sticky' : 'absolute',
        // Sticky elements are positioned in normal document flow. Display inline-block so that they don't push other sticky columns onto the following rows.
        display: layoutInfo.isSticky ? 'inline-block' : undefined,
        overflow: layoutInfo.allowOverflow ? 'visible' : 'hidden',
        opacity: layoutInfo.opacity,
        zIndex: layoutInfo.zIndex,
        transform: (_layoutInfo_transform = layoutInfo.transform) !== null && _layoutInfo_transform !== void 0 ? _layoutInfo_transform : undefined,
        contain: 'size layout style',
        ...rectStyles
    };
    $ccf8a0a04e4175ae$var$cache.set(layoutInfo, style);
    return style;
}



//# sourceMappingURL=VirtualizerItem.module.js.map

;// ./node_modules/react-aria-components/dist/Virtualizer.mjs





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



const $ce3a951440fc273f$var$VirtualizerContext = /*#__PURE__*/ (0, react.createContext)(null);
const $ce3a951440fc273f$var$LayoutContext = /*#__PURE__*/ (0, react.createContext)(null);
function $ce3a951440fc273f$export$89be5a243e59c4b2(props) {
    let { children: children, layout: layoutProp, layoutOptions: layoutOptions } = props;
    let layout = (0, react.useMemo)(()=>typeof layoutProp === 'function' ? new layoutProp() : layoutProp, [
        layoutProp
    ]);
    let renderer = (0, react.useMemo)(()=>({
            isVirtualized: true,
            layoutDelegate: layout,
            dropTargetDelegate: layout.getDropTargetFromPoint ? layout : undefined,
            CollectionRoot: $ce3a951440fc273f$var$CollectionRoot,
            CollectionBranch: $ce3a951440fc273f$var$CollectionBranch
        }), [
        layout
    ]);
    return /*#__PURE__*/ (0, react).createElement((0, Collection/* CollectionRendererContext */.zL).Provider, {
        value: renderer
    }, /*#__PURE__*/ (0, react).createElement($ce3a951440fc273f$var$LayoutContext.Provider, {
        value: {
            layout: layout,
            layoutOptions: layoutOptions
        }
    }, children));
}
function $ce3a951440fc273f$var$CollectionRoot({ collection: collection, persistedKeys: persistedKeys, scrollRef: scrollRef, renderDropIndicator: renderDropIndicator }) {
    var _layout_useLayoutOptions;
    let { layout: layout, layoutOptions: layoutOptions } = (0, react.useContext)($ce3a951440fc273f$var$LayoutContext);
    let layoutOptions2 = (_layout_useLayoutOptions = layout.useLayoutOptions) === null || _layout_useLayoutOptions === void 0 ? void 0 : _layout_useLayoutOptions.call(layout);
    let state = (0, $fc0b13b484ac1194$export$1505db82fe357e65)({
        layout: layout,
        collection: collection,
        renderView: (type, item)=>{
            var _item_render;
            return item === null || item === void 0 ? void 0 : (_item_render = item.render) === null || _item_render === void 0 ? void 0 : _item_render.call(item, item);
        },
        onVisibleRectChange (rect) {
            let element = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
            if (element) {
                element.scrollLeft = rect.x;
                element.scrollTop = rect.y;
            }
        },
        persistedKeys: persistedKeys,
        layoutOptions: (0, react.useMemo)(()=>{
            if (layoutOptions && layoutOptions2) return {
                ...layoutOptions,
                ...layoutOptions2
            };
            return layoutOptions || layoutOptions2;
        }, [
            layoutOptions,
            layoutOptions2
        ])
    });
    let { contentProps: contentProps } = (0, $44a6ee657928b002$export$2ea0c4974da4731b)({
        onVisibleRectChange: state.setVisibleRect,
        contentSize: state.contentSize,
        onScrollStart: state.startScrolling,
        onScrollEnd: state.endScrolling
    }, scrollRef);
    return /*#__PURE__*/ (0, react).createElement("div", contentProps, /*#__PURE__*/ (0, react).createElement($ce3a951440fc273f$var$VirtualizerContext.Provider, {
        value: state
    }, $ce3a951440fc273f$var$renderChildren(null, state.visibleViews, renderDropIndicator)));
}
function $ce3a951440fc273f$var$CollectionBranch({ parent: parent, renderDropIndicator: renderDropIndicator }) {
    let virtualizer = (0, react.useContext)($ce3a951440fc273f$var$VirtualizerContext);
    let parentView = virtualizer.virtualizer.getVisibleView(parent.key);
    return $ce3a951440fc273f$var$renderChildren(parentView, Array.from(parentView.children), renderDropIndicator);
}
function $ce3a951440fc273f$var$renderChildren(parent, children, renderDropIndicator) {
    return children.map((view)=>$ce3a951440fc273f$var$renderWrapper(parent, view, renderDropIndicator));
}
function $ce3a951440fc273f$var$renderWrapper(parent, reusableView, renderDropIndicator) {
    let rendered = /*#__PURE__*/ (0, react).createElement((0, $ccf8a0a04e4175ae$export$6796df8ba7398521), {
        key: reusableView.key,
        layoutInfo: reusableView.layoutInfo,
        virtualizer: reusableView.virtualizer,
        parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
    }, reusableView.rendered);
    let { collection: collection, layout: layout } = reusableView.virtualizer;
    let { key: key, type: type } = reusableView.content;
    if (type === 'item' && renderDropIndicator && layout.getDropTargetLayoutInfo) rendered = /*#__PURE__*/ (0, react).createElement((0, react).Fragment, {
        key: reusableView.key
    }, $ce3a951440fc273f$var$renderDropIndicatorWrapper(parent, reusableView, 'before', renderDropIndicator), rendered, collection.getKeyAfter(key) == null && $ce3a951440fc273f$var$renderDropIndicatorWrapper(parent, reusableView, 'after', renderDropIndicator));
    return rendered;
}
function $ce3a951440fc273f$var$renderDropIndicatorWrapper(parent, reusableView, dropPosition, renderDropIndicator) {
    let target = {
        type: 'item',
        key: reusableView.content.key,
        dropPosition: dropPosition
    };
    let indicator = renderDropIndicator(target);
    if (indicator) {
        let layoutInfo = reusableView.virtualizer.layout.getDropTargetLayoutInfo(target);
        indicator = /*#__PURE__*/ (0, react).createElement((0, $ccf8a0a04e4175ae$export$6796df8ba7398521), {
            layoutInfo: layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent === null || parent === void 0 ? void 0 : parent.layoutInfo
        }, indicator);
    }
    return indicator;
}



//# sourceMappingURL=Virtualizer.module.js.map


/***/ })

}]);