"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6331],{

/***/ 8343:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ $99facab73266f662$export$5add1d006293d136)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue);
    let handleReset = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .J)(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}



//# sourceMappingURL=useFormReset.module.js.map


/***/ }),

/***/ 46945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ $2f9e0b0e857fd9ba$export$62444c3c724b1b20)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Table.mjs + 55 modules
var Table = __webpack_require__(43444);
// EXTERNAL MODULE: ./node_modules/@react-stately/layout/dist/ListLayout.mjs + 1 modules
var ListLayout = __webpack_require__(72733);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getChildNodes.mjs
var getChildNodes = __webpack_require__(80423);
// EXTERNAL MODULE: ./node_modules/@react-stately/virtualizer/dist/Size.mjs
var Size = __webpack_require__(47379);
// EXTERNAL MODULE: ./node_modules/@react-stately/virtualizer/dist/Rect.mjs
var Rect = __webpack_require__(18442);
// EXTERNAL MODULE: ./node_modules/@react-stately/virtualizer/dist/LayoutInfo.mjs
var LayoutInfo = __webpack_require__(77810);
;// ./node_modules/@react-stately/table/dist/TableUtils.mjs
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
 */ function $6818b1c4fc67028d$export$1994a077b98ee0d5(width) {
    return width != null && (!isNaN(width) || String(width).match(/^(\d+)(?=%$)/) !== null);
}
function $6818b1c4fc67028d$export$9078bad4c3934604(width) {
    if (!width || typeof width === 'number') return 1;
    let match = width.match(/^(.+)(?=fr$)/);
    // if width is the incorrect format, just default it to a 1fr
    if (!match) {
        if (false) // removed by dead control flow
{}
        return 1;
    }
    return parseFloat(match[0]);
}
function $6818b1c4fc67028d$export$7bbad27896f7ae9f(width, tableWidth) {
    if (typeof width === 'string') {
        let match = width.match(/^(\d+)(?=%$)/);
        if (!match) throw new Error('Only percentages or numbers are supported for static column widths');
        return tableWidth * (parseFloat(match[0]) / 100);
    }
    return width;
}
function $6818b1c4fc67028d$export$59185c62a7544aa0(maxWidth, tableWidth) {
    return maxWidth != null ? $6818b1c4fc67028d$export$7bbad27896f7ae9f(maxWidth, tableWidth) : Number.MAX_SAFE_INTEGER;
}
function $6818b1c4fc67028d$export$f556054ce4358701(minWidth, tableWidth) {
    return minWidth != null ? $6818b1c4fc67028d$export$7bbad27896f7ae9f(minWidth, tableWidth) : 0;
}
function $6818b1c4fc67028d$export$55d50dc687385491(availableWidth, columns, changedColumns, getDefaultWidth, getDefaultMinWidth) {
    let hasNonFrozenItems = false;
    let flexItems = columns.map((column, index)=>{
        var _changedColumns_get, _column_width, _ref, _ref1;
        let width = changedColumns.get(column.key) != null ? (_changedColumns_get = changedColumns.get(column.key)) !== null && _changedColumns_get !== void 0 ? _changedColumns_get : '1fr' : (_ref1 = (_ref = (_column_width = column.width) !== null && _column_width !== void 0 ? _column_width : column.defaultWidth) !== null && _ref !== void 0 ? _ref : getDefaultWidth === null || getDefaultWidth === void 0 ? void 0 : getDefaultWidth(index)) !== null && _ref1 !== void 0 ? _ref1 : '1fr';
        let frozen = false;
        let baseSize = 0;
        let flex = 0;
        let targetMainSize = 0;
        if ($6818b1c4fc67028d$export$1994a077b98ee0d5(width)) {
            baseSize = $6818b1c4fc67028d$export$7bbad27896f7ae9f(width, availableWidth);
            frozen = true;
        } else {
            flex = $6818b1c4fc67028d$export$9078bad4c3934604(width);
            if (flex <= 0) frozen = true;
        }
        var _column_minWidth, _ref2;
        let min = $6818b1c4fc67028d$export$f556054ce4358701((_ref2 = (_column_minWidth = column.minWidth) !== null && _column_minWidth !== void 0 ? _column_minWidth : getDefaultMinWidth === null || getDefaultMinWidth === void 0 ? void 0 : getDefaultMinWidth(index)) !== null && _ref2 !== void 0 ? _ref2 : 0, availableWidth);
        let max = $6818b1c4fc67028d$export$59185c62a7544aa0(column.maxWidth, availableWidth);
        let hypotheticalMainSize = Math.max(min, Math.min(baseSize, max));
        // 9.7.1
        // We don't make use of flex basis, it's always 0, so we are always in 'grow' mode.
        // 9.7.2
        if (frozen) targetMainSize = hypotheticalMainSize;
        else if (baseSize > hypotheticalMainSize) {
            frozen = true;
            targetMainSize = hypotheticalMainSize;
        }
        // 9.7.3
        if (!frozen) hasNonFrozenItems = true;
        return {
            frozen: frozen,
            baseSize: baseSize,
            hypotheticalMainSize: hypotheticalMainSize,
            min: min,
            max: max,
            flex: flex,
            targetMainSize: targetMainSize,
            violation: 0
        };
    });
    // 9.7.4
    // 9.7.4.a
    while(hasNonFrozenItems){
        // 9.7.4.b
        /**
     * Calculate the remaining free space as for initial free space,
     * above (9.7.3). If the sum of the unfrozen flex items’ flex factors is
     * less than one, multiply the initial free space by this sum (of flex factors).
     * If the magnitude of this value is less than the magnitude of
     * the remaining free space, use this as the remaining free space.
     */ let usedWidth = 0;
        let flexFactors = 0;
        flexItems.forEach((item)=>{
            if (item.frozen) usedWidth += item.targetMainSize;
            else {
                usedWidth += item.baseSize;
                flexFactors += item.flex;
            }
        });
        let remainingFreeSpace = availableWidth - usedWidth;
        // we only support integer FR's, and because of hasNonFrozenItems, we know that flexFactors > 0
        // so no need to check for flexFactors < 1
        // 9.7.4.c
        /**
     * If the remaining free space is zero
     * - Do nothing.
     * Else // remember, we're always in grow mode
     * - Find the ratio of the item’s flex grow factor to the
     * sum of the flex grow factors of all unfrozen items on
     * the line. Set the item’s target main size to its flex
     * base size plus a fraction of the remaining free space
     * proportional to the ratio.
     */ if (remainingFreeSpace > 0) flexItems.forEach((item)=>{
            if (!item.frozen) {
                let ratio = item.flex / flexFactors;
                item.targetMainSize = item.baseSize + ratio * remainingFreeSpace;
            }
        });
        // 9.7.4.d
        /**
     * Fix min/max violations. Clamp each non-frozen item’s
     * target main size by its used min and max main sizes
     * and floor its content-box size at zero. If the item’s
     * target main size was made smaller by this, it’s a max
     * violation. If the item’s target main size was made
     * larger by this, it’s a min violation.
     */ let totalViolation = 0;
        flexItems.forEach((item)=>{
            item.violation = 0;
            if (!item.frozen) {
                let { min: min, max: max, targetMainSize: targetMainSize } = item;
                item.targetMainSize = Math.max(min, Math.min(targetMainSize, max));
                item.violation = item.targetMainSize - targetMainSize;
                totalViolation += item.violation;
            }
        });
        // 9.7.4.e
        /**
     * Freeze over-flexed items. The total violation is the
     * sum of the adjustments from the previous step
     * ∑(clamped size - unclamped size). If the total violation is:
     * Zero
     * - Freeze all items.
     *
     * Positive
     * - Freeze all the items with min violations.
     *
     * Negative
     * - Freeze all the items with max violations.
     */ hasNonFrozenItems = false;
        flexItems.forEach((item)=>{
            if (totalViolation === 0 || Math.sign(totalViolation) === Math.sign(item.violation)) item.frozen = true;
            else if (!item.frozen) hasNonFrozenItems = true;
        });
    }
    return $6818b1c4fc67028d$var$cascadeRounding(flexItems);
}
function $6818b1c4fc67028d$var$cascadeRounding(flexItems) {
    /*
  Given an array of floats that sum to an integer, this rounds the floats
  and returns an array of integers with the same sum.
  */ let fpTotal = 0;
    let intTotal = 0;
    let roundedArray = [];
    flexItems.forEach(function(item) {
        let float = item.targetMainSize;
        let integer = Math.round(float + fpTotal) - intTotal;
        fpTotal += float;
        intTotal += integer;
        roundedArray.push(integer);
    });
    return roundedArray;
}



//# sourceMappingURL=TableUtils.module.js.map

;// ./node_modules/@react-stately/table/dist/TableColumnLayout.mjs


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
class $a9e7ae544a4e41dd$export$7ff77a162970b30e {
    /** Takes an array of columns and splits it into 2 maps of columns with controlled and columns with uncontrolled widths. */ splitColumnsIntoControlledAndUncontrolled(columns) {
        return columns.reduce((acc, col)=>{
            if (col.props.width != null) acc[0].set(col.key, col);
            else acc[1].set(col.key, col);
            return acc;
        }, [
            new Map(),
            new Map()
        ]);
    }
    /** Takes uncontrolled and controlled widths and joins them into a single Map. */ recombineColumns(columns, uncontrolledWidths, uncontrolledColumns, controlledColumns) {
        return new Map(columns.map((col)=>{
            if (uncontrolledColumns.has(col.key)) return [
                col.key,
                uncontrolledWidths.get(col.key)
            ];
            else return [
                col.key,
                controlledColumns.get(col.key).props.width
            ];
        }));
    }
    /** Used to make an initial Map of the uncontrolled widths based on default widths. */ getInitialUncontrolledWidths(uncontrolledColumns) {
        return new Map(Array.from(uncontrolledColumns).map(([key, col])=>{
            var _this_getDefaultWidth, _this;
            var _col_props_defaultWidth, _ref;
            return [
                key,
                (_ref = (_col_props_defaultWidth = col.props.defaultWidth) !== null && _col_props_defaultWidth !== void 0 ? _col_props_defaultWidth : (_this_getDefaultWidth = (_this = this).getDefaultWidth) === null || _this_getDefaultWidth === void 0 ? void 0 : _this_getDefaultWidth.call(_this, col)) !== null && _ref !== void 0 ? _ref : '1fr'
            ];
        }));
    }
    getColumnWidth(key) {
        var _this_columnWidths_get;
        return (_this_columnWidths_get = this.columnWidths.get(key)) !== null && _this_columnWidths_get !== void 0 ? _this_columnWidths_get : 0;
    }
    getColumnMinWidth(key) {
        var _this_columnMinWidths_get;
        return (_this_columnMinWidths_get = this.columnMinWidths.get(key)) !== null && _this_columnMinWidths_get !== void 0 ? _this_columnMinWidths_get : 0;
    }
    getColumnMaxWidth(key) {
        var _this_columnMaxWidths_get;
        return (_this_columnMaxWidths_get = this.columnMaxWidths.get(key)) !== null && _this_columnMaxWidths_get !== void 0 ? _this_columnMaxWidths_get : 0;
    }
    resizeColumnWidth(collection, uncontrolledWidths, col, width) {
        let prevColumnWidths = this.columnWidths;
        let freeze = true;
        let newWidths = new Map();
        width = Math.max(this.getColumnMinWidth(col), Math.min(this.getColumnMaxWidth(col), Math.floor(width)));
        collection.columns.forEach((column)=>{
            var _prevColumnWidths_get, _column_props_width;
            if (column.key === col) {
                newWidths.set(column.key, width);
                freeze = false;
            } else if (freeze) // freeze columns to the left to their previous pixel value
            newWidths.set(column.key, (_prevColumnWidths_get = prevColumnWidths.get(column.key)) !== null && _prevColumnWidths_get !== void 0 ? _prevColumnWidths_get : 0);
            else newWidths.set(column.key, (_column_props_width = column.props.width) !== null && _column_props_width !== void 0 ? _column_props_width : uncontrolledWidths.get(column.key));
        });
        return newWidths;
    }
    buildColumnWidths(tableWidth, collection, widths) {
        this.columnWidths = new Map();
        this.columnMinWidths = new Map();
        this.columnMaxWidths = new Map();
        // initial layout or table/window resizing
        let columnWidths = (0, $6818b1c4fc67028d$export$55d50dc687385491)(tableWidth, collection.columns.map((col)=>({
                ...col.props,
                key: col.key
            })), widths, (i)=>this.getDefaultWidth(collection.columns[i]), (i)=>this.getDefaultMinWidth(collection.columns[i]));
        // columns going in will be the same order as the columns coming out
        columnWidths.forEach((width, index)=>{
            let key = collection.columns[index].key;
            let column = collection.columns[index];
            this.columnWidths.set(key, width);
            var _column_props_minWidth;
            this.columnMinWidths.set(key, (0, $6818b1c4fc67028d$export$f556054ce4358701)((_column_props_minWidth = column.props.minWidth) !== null && _column_props_minWidth !== void 0 ? _column_props_minWidth : this.getDefaultMinWidth(column), tableWidth));
            this.columnMaxWidths.set(key, (0, $6818b1c4fc67028d$export$59185c62a7544aa0)(column.props.maxWidth, tableWidth));
        });
        return this.columnWidths;
    }
    constructor(options){
        this.columnWidths = new Map();
        this.columnMinWidths = new Map();
        this.columnMaxWidths = new Map();
        var _options_getDefaultWidth;
        this.getDefaultWidth = (_options_getDefaultWidth = options === null || options === void 0 ? void 0 : options.getDefaultWidth) !== null && _options_getDefaultWidth !== void 0 ? _options_getDefaultWidth : ()=>'1fr';
        var _options_getDefaultMinWidth;
        this.getDefaultMinWidth = (_options_getDefaultMinWidth = options === null || options === void 0 ? void 0 : options.getDefaultMinWidth) !== null && _options_getDefaultMinWidth !== void 0 ? _options_getDefaultMinWidth : ()=>75;
    }
}



//# sourceMappingURL=TableColumnLayout.module.js.map

;// ./node_modules/@react-stately/layout/dist/TableLayout.mjs





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



const $a152112e902709bf$var$DEFAULT_ROW_HEIGHT = 48;
class $a152112e902709bf$export$62444c3c724b1b20 extends (0, ListLayout/* ListLayout */.$) {
    // Backward compatibility for subclassing.
    get collection() {
        return this.virtualizer.collection;
    }
    columnsChanged(newCollection, oldCollection) {
        return !oldCollection || newCollection.columns !== oldCollection.columns && newCollection.columns.length !== oldCollection.columns.length || newCollection.columns.some((c, i)=>c.key !== oldCollection.columns[i].key || c.props.width !== oldCollection.columns[i].props.width || c.props.minWidth !== oldCollection.columns[i].props.minWidth || c.props.maxWidth !== oldCollection.columns[i].props.maxWidth);
    }
    shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return newOptions.columnWidths !== oldOptions.columnWidths || super.shouldInvalidateLayoutOptions(newOptions, oldOptions);
    }
    update(invalidationContext) {
        var _invalidationContext_layoutOptions;
        let newCollection = this.virtualizer.collection;
        // If columnWidths were provided via layoutOptions, update those.
        // Otherwise, calculate column widths ourselves.
        if ((_invalidationContext_layoutOptions = invalidationContext.layoutOptions) === null || _invalidationContext_layoutOptions === void 0 ? void 0 : _invalidationContext_layoutOptions.columnWidths) {
            if (invalidationContext.layoutOptions.columnWidths !== this.columnWidths) {
                this.columnWidths = invalidationContext.layoutOptions.columnWidths;
                invalidationContext.sizeChanged = true;
            }
        } else if (invalidationContext.sizeChanged || this.columnsChanged(newCollection, this.lastCollection)) {
            let columnLayout = new (0, $a9e7ae544a4e41dd$export$7ff77a162970b30e)({});
            this.columnWidths = columnLayout.buildColumnWidths(this.virtualizer.visibleRect.width - this.padding * 2, newCollection, new Map());
            invalidationContext.sizeChanged = true;
        }
        super.update(invalidationContext);
    }
    buildCollection() {
        var _collection_head;
        this.stickyColumnIndices = [];
        let collection = this.virtualizer.collection;
        if (((_collection_head = collection.head) === null || _collection_head === void 0 ? void 0 : _collection_head.key) === -1) return [];
        for (let column of collection.columns)// The selection cell and any other sticky columns always need to be visible.
        // In addition, row headers need to be in the DOM for accessibility labeling.
        if (this.isStickyColumn(column) || collection.rowHeaderColumnKeys.has(column.key)) this.stickyColumnIndices.push(column.index);
        let header = this.buildTableHeader();
        this.layoutNodes.set(header.layoutInfo.key, header);
        let body = this.buildBody(header.layoutInfo.rect.maxY + this.gap);
        this.lastPersistedKeys = null;
        body.layoutInfo.rect.width = Math.max(header.layoutInfo.rect.width, body.layoutInfo.rect.width);
        this.contentSize = new (0, Size/* Size */.o)(body.layoutInfo.rect.width + this.padding * 2, body.layoutInfo.rect.maxY + this.padding);
        return [
            header,
            body
        ];
    }
    buildTableHeader() {
        var _collection_head;
        let collection = this.virtualizer.collection;
        let rect = new (0, Rect/* Rect */.r)(this.padding, this.padding, 0, 0);
        var _collection_head_key;
        let layoutInfo = new (0, LayoutInfo/* LayoutInfo */.B)('header', (_collection_head_key = (_collection_head = collection.head) === null || _collection_head === void 0 ? void 0 : _collection_head.key) !== null && _collection_head_key !== void 0 ? _collection_head_key : 'header', rect);
        layoutInfo.isSticky = true;
        layoutInfo.zIndex = 1;
        let y = this.padding;
        let width = 0;
        let children = [];
        for (let headerRow of collection.headerRows){
            let layoutNode = this.buildChild(headerRow, this.padding, y, layoutInfo.key);
            layoutNode.layoutInfo.parentKey = layoutInfo.key;
            y = layoutNode.layoutInfo.rect.maxY;
            width = Math.max(width, layoutNode.layoutInfo.rect.width);
            layoutNode.index = children.length;
            children.push(layoutNode);
        }
        rect.width = width;
        rect.height = y - this.padding;
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: layoutInfo.rect,
            node: collection.head
        };
    }
    buildHeaderRow(headerRow, x, y) {
        let rect = new (0, Rect/* Rect */.r)(x, y, 0, 0);
        let row = new (0, LayoutInfo/* LayoutInfo */.B)('headerrow', headerRow.key, rect);
        let height = 0;
        let columns = [];
        for (let cell of (0, getChildNodes/* getChildNodes */.iQ)(headerRow, this.virtualizer.collection)){
            let layoutNode = this.buildChild(cell, x, y, row.key);
            layoutNode.layoutInfo.parentKey = row.key;
            x = layoutNode.layoutInfo.rect.maxX;
            height = Math.max(height, layoutNode.layoutInfo.rect.height);
            layoutNode.index = columns.length;
            columns.push(layoutNode);
        }
        for (let [i, layout] of columns.entries())layout.layoutInfo.zIndex = columns.length - i + 1;
        this.setChildHeights(columns, height);
        rect.height = height;
        rect.width = x - rect.x;
        return {
            layoutInfo: row,
            children: columns,
            validRect: rect,
            node: headerRow
        };
    }
    setChildHeights(children, height) {
        for (let child of children)if (child.layoutInfo.rect.height !== height) {
            // Need to copy the layout info before we mutate it.
            child.layoutInfo = child.layoutInfo.copy();
            child.layoutInfo.rect.height = height;
        }
    }
    // used to get the column widths when rendering to the DOM
    getRenderedColumnWidth(node) {
        let collection = this.virtualizer.collection;
        var _node_colSpan;
        let colSpan = (_node_colSpan = node.colSpan) !== null && _node_colSpan !== void 0 ? _node_colSpan : 1;
        var _node_colIndex;
        let colIndex = (_node_colIndex = node.colIndex) !== null && _node_colIndex !== void 0 ? _node_colIndex : node.index;
        let width = 0;
        for(let i = colIndex; i < colIndex + colSpan; i++){
            let column = collection.columns[i];
            var _this_columnWidths_get;
            if ((column === null || column === void 0 ? void 0 : column.key) != null) width += (_this_columnWidths_get = this.columnWidths.get(column.key)) !== null && _this_columnWidths_get !== void 0 ? _this_columnWidths_get : 0;
        }
        return width;
    }
    getEstimatedHeight(node, width, height, estimatedHeight) {
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (height == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall collection view changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                height = previousLayoutNode.layoutInfo.rect.height;
                isEstimated = node !== previousLayoutNode.node || width !== previousLayoutNode.layoutInfo.rect.width || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                height = estimatedHeight !== null && estimatedHeight !== void 0 ? estimatedHeight : $a152112e902709bf$var$DEFAULT_ROW_HEIGHT;
                isEstimated = true;
            }
        }
        return {
            height: height,
            isEstimated: isEstimated
        };
    }
    getEstimatedRowHeight() {
        var _this_rowHeight, _ref;
        return (_ref = (_this_rowHeight = this.rowHeight) !== null && _this_rowHeight !== void 0 ? _this_rowHeight : this.estimatedRowHeight) !== null && _ref !== void 0 ? _ref : $a152112e902709bf$var$DEFAULT_ROW_HEIGHT;
    }
    buildColumn(node, x, y) {
        let width = this.getRenderedColumnWidth(node);
        var _this_headingHeight, _this_estimatedHeadingHeight;
        let { height: height, isEstimated: isEstimated } = this.getEstimatedHeight(node, width, (_this_headingHeight = this.headingHeight) !== null && _this_headingHeight !== void 0 ? _this_headingHeight : this.rowHeight, (_this_estimatedHeadingHeight = this.estimatedHeadingHeight) !== null && _this_estimatedHeadingHeight !== void 0 ? _this_estimatedHeadingHeight : this.estimatedRowHeight);
        let rect = new (0, Rect/* Rect */.r)(x, y, width, height);
        let layoutInfo = new (0, LayoutInfo/* LayoutInfo */.B)(node.type, node.key, rect);
        layoutInfo.isSticky = this.isStickyColumn(node);
        layoutInfo.zIndex = layoutInfo.isSticky ? 2 : 1;
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo,
            children: [],
            validRect: layoutInfo.rect,
            node: node
        };
    }
    // For subclasses.
    // eslint-disable-next-line
    isStickyColumn(node) {
        return false;
    }
    buildBody(y) {
        let collection = this.virtualizer.collection;
        let rect = new (0, Rect/* Rect */.r)(this.padding, y, 0, 0);
        let layoutInfo = new (0, LayoutInfo/* LayoutInfo */.B)('rowgroup', collection.body.key, rect);
        let startY = y;
        let skipped = 0;
        let width = 0;
        let children = [];
        let rowHeight = this.getEstimatedRowHeight() + this.gap;
        let childNodes = (0, getChildNodes/* getChildNodes */.iQ)(collection.body, collection);
        for (let node of childNodes){
            // Skip rows before the valid rectangle unless they are already cached.
            if (y + rowHeight < this.requestedRect.y && !this.isValid(node, y)) {
                y += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.buildChild(node, this.padding, y, layoutInfo.key);
            layoutNode.layoutInfo.parentKey = layoutInfo.key;
            layoutNode.index = children.length;
            y = layoutNode.layoutInfo.rect.maxY + this.gap;
            width = Math.max(width, layoutNode.layoutInfo.rect.width);
            children.push(layoutNode);
            if (y > this.requestedRect.maxY) {
                var _children_at;
                let rowsAfterRect = collection.size - (children.length + skipped);
                let lastNode = (0, getChildNodes/* getLastItem */.W)(childNodes);
                if ((lastNode === null || lastNode === void 0 ? void 0 : lastNode.type) === 'loader') rowsAfterRect--;
                // Estimate the remaining height for rows that we don't need to layout right now.
                y += rowsAfterRect * rowHeight;
                // Always add the loader sentinel if present. This assumes the loader is the last row in the body,
                // will need to refactor when handling multi section loading
                if ((lastNode === null || lastNode === void 0 ? void 0 : lastNode.type) === 'loader' && ((_children_at = children.at(-1)) === null || _children_at === void 0 ? void 0 : _children_at.layoutInfo.type) !== 'loader') {
                    let loader = this.buildChild(lastNode, this.padding, y, layoutInfo.key);
                    loader.layoutInfo.parentKey = layoutInfo.key;
                    loader.index = collection.size;
                    width = Math.max(width, loader.layoutInfo.rect.width);
                    children.push(loader);
                    y = loader.layoutInfo.rect.maxY;
                }
                break;
            }
        }
        // Make sure that the table body gets a height if empty or performing initial load
        let isEmptyOrLoading = (collection === null || collection === void 0 ? void 0 : collection.size) === 0 || collection.size === 1 && collection.getItem(collection.getFirstKey()).type === 'loader';
        if (isEmptyOrLoading) y = this.virtualizer.visibleRect.maxY;
        else y -= this.gap;
        rect.width = width;
        rect.height = y - startY;
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node: collection.body
        };
    }
    buildNode(node, x, y) {
        switch(node.type){
            case 'headerrow':
                return this.buildHeaderRow(node, x, y);
            case 'item':
                return this.buildRow(node, x, y);
            case 'column':
            case 'placeholder':
                return this.buildColumn(node, x, y);
            case 'cell':
                return this.buildCell(node, x, y);
            case 'loader':
                return this.buildLoader(node, x, y);
            default:
                throw new Error('Unknown node type ' + node.type);
        }
    }
    buildRow(node, x, y) {
        var _collection_head;
        let collection = this.virtualizer.collection;
        let rect = new (0, Rect/* Rect */.r)(x, y, 0, 0);
        let layoutInfo = new (0, LayoutInfo/* LayoutInfo */.B)('row', node.key, rect);
        let children = [];
        let height = 0;
        for (let child of (0, getChildNodes/* getChildNodes */.iQ)(node, collection))if (child.type === 'cell') {
            if (x > this.requestedRect.maxX) {
                // Adjust existing cached layoutInfo to ensure that it is out of view.
                // This can happen due to column resizing.
                let layoutNode = this.layoutNodes.get(child.key);
                if (layoutNode) {
                    layoutNode.layoutInfo.rect.x = x;
                    x += layoutNode.layoutInfo.rect.width;
                } else break;
            } else {
                let layoutNode = this.buildChild(child, x, y, layoutInfo.key);
                x = layoutNode.layoutInfo.rect.maxX;
                height = Math.max(height, layoutNode.layoutInfo.rect.height);
                layoutNode.index = children.length;
                children.push(layoutNode);
            }
        }
        this.setChildHeights(children, height);
        var _collection_head_key;
        rect.width = this.layoutNodes.get((_collection_head_key = (_collection_head = collection.head) === null || _collection_head === void 0 ? void 0 : _collection_head.key) !== null && _collection_head_key !== void 0 ? _collection_head_key : 'header').layoutInfo.rect.width;
        rect.height = height;
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: rect.intersection(this.requestedRect),
            node: node
        };
    }
    buildCell(node, x, y) {
        let width = this.getRenderedColumnWidth(node);
        let { height: height, isEstimated: isEstimated } = this.getEstimatedHeight(node, width, this.rowHeight, this.estimatedRowHeight);
        let rect = new (0, Rect/* Rect */.r)(x, y, width, height);
        let layoutInfo = new (0, LayoutInfo/* LayoutInfo */.B)(node.type, node.key, rect);
        layoutInfo.isSticky = this.isStickyColumn(node);
        layoutInfo.zIndex = layoutInfo.isSticky ? 2 : 1;
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo,
            children: [],
            validRect: rect,
            node: node
        };
    }
    getVisibleLayoutInfos(rect) {
        // Adjust rect to keep number of visible rows consistent.
        // (only if height > 1 for getDropTargetFromPoint)
        if (rect.height > 1) {
            let rowHeight = this.getEstimatedRowHeight();
            rect.y = Math.floor(rect.y / rowHeight) * rowHeight;
            rect.height = Math.ceil(rect.height / rowHeight) * rowHeight;
        }
        // If layout hasn't yet been done for the requested rect, union the
        // new rect with the existing valid rect, and recompute.
        this.layoutIfNeeded(rect);
        let res = [];
        this.buildPersistedIndices();
        for (let node of this.rootNodes){
            res.push(node.layoutInfo);
            this.addVisibleLayoutInfos(res, node, rect);
        }
        return res;
    }
    addVisibleLayoutInfos(res, node, rect) {
        if (!node.children || node.children.length === 0) return;
        switch(node.layoutInfo.type){
            case 'header':
                for (let child of node.children){
                    res.push(child.layoutInfo);
                    this.addVisibleLayoutInfos(res, child, rect);
                }
                break;
            case 'rowgroup':
                {
                    let firstVisibleRow = this.binarySearch(node.children, rect.topLeft, 'y');
                    let lastVisibleRow = this.binarySearch(node.children, rect.bottomRight, 'y');
                    // Add persisted rows before the visible rows.
                    let persistedRowIndices = this.persistedIndices.get(node.layoutInfo.key);
                    let persistIndex = 0;
                    while(persistedRowIndices && persistIndex < persistedRowIndices.length && persistedRowIndices[persistIndex] < firstVisibleRow){
                        let idx = persistedRowIndices[persistIndex];
                        if (idx < node.children.length) {
                            res.push(node.children[idx].layoutInfo);
                            this.addVisibleLayoutInfos(res, node.children[idx], rect);
                        }
                        persistIndex++;
                    }
                    for(let i = firstVisibleRow; i <= lastVisibleRow; i++){
                        // Skip persisted rows that overlap with visible cells.
                        while(persistedRowIndices && persistIndex < persistedRowIndices.length && persistedRowIndices[persistIndex] < i)persistIndex++;
                        res.push(node.children[i].layoutInfo);
                        this.addVisibleLayoutInfos(res, node.children[i], rect);
                    }
                    // Add persisted rows after the visible rows.
                    while(persistedRowIndices && persistIndex < persistedRowIndices.length){
                        let idx = persistedRowIndices[persistIndex++];
                        if (idx < node.children.length) {
                            res.push(node.children[idx].layoutInfo);
                            this.addVisibleLayoutInfos(res, node.children[idx], rect);
                        }
                    }
                    // Always include loading sentinel even when virtualized, we assume it is always the last child for now
                    let lastRow = node.children.at(-1);
                    if ((lastRow === null || lastRow === void 0 ? void 0 : lastRow.layoutInfo.type) === 'loader') res.push(lastRow.layoutInfo);
                    break;
                }
            case 'headerrow':
            case 'row':
                {
                    let firstVisibleCell = this.binarySearch(node.children, rect.topLeft, 'x');
                    let lastVisibleCell = this.binarySearch(node.children, rect.topRight, 'x');
                    let stickyIndex = 0;
                    // Add persisted/sticky cells before the visible cells.
                    let persistedCellIndices = this.persistedIndices.get(node.layoutInfo.key) || this.stickyColumnIndices;
                    while(stickyIndex < persistedCellIndices.length && persistedCellIndices[stickyIndex] < firstVisibleCell){
                        let idx = persistedCellIndices[stickyIndex];
                        if (idx < node.children.length) res.push(node.children[idx].layoutInfo);
                        stickyIndex++;
                    }
                    for(let i = firstVisibleCell; i <= lastVisibleCell; i++){
                        // Skip sticky cells that overlap with visible cells.
                        while(stickyIndex < persistedCellIndices.length && persistedCellIndices[stickyIndex] < i)stickyIndex++;
                        res.push(node.children[i].layoutInfo);
                    }
                    // Add any remaining sticky cells after the visible cells.
                    while(stickyIndex < persistedCellIndices.length){
                        let idx = persistedCellIndices[stickyIndex++];
                        if (idx < node.children.length) res.push(node.children[idx].layoutInfo);
                    }
                    break;
                }
            default:
                throw new Error('Unknown node type ' + node.layoutInfo.type);
        }
    }
    binarySearch(items, point, axis) {
        let low = 0;
        let high = items.length - 1;
        while(low <= high){
            let mid = low + high >> 1;
            let item = items[mid];
            if (axis === 'x' && item.layoutInfo.rect.maxX <= point.x || axis === 'y' && item.layoutInfo.rect.maxY <= point.y) low = mid + 1;
            else if (axis === 'x' && item.layoutInfo.rect.x > point.x || axis === 'y' && item.layoutInfo.rect.y > point.y) high = mid - 1;
            else return mid;
        }
        return Math.max(0, Math.min(items.length - 1, low));
    }
    buildPersistedIndices() {
        if (this.virtualizer.persistedKeys === this.lastPersistedKeys) return;
        this.lastPersistedKeys = this.virtualizer.persistedKeys;
        this.persistedIndices.clear();
        // Build a map of parentKey => indices of children to persist.
        for (let key of this.virtualizer.persistedKeys){
            var _this_layoutNodes_get;
            let layoutInfo = (_this_layoutNodes_get = this.layoutNodes.get(key)) === null || _this_layoutNodes_get === void 0 ? void 0 : _this_layoutNodes_get.layoutInfo;
            // Walk up ancestors so parents are also persisted if children are.
            while(layoutInfo && layoutInfo.parentKey){
                var _this_layoutNodes_get1, _this_layoutNodes_get2;
                let collectionNode = this.virtualizer.collection.getItem(layoutInfo.key);
                let indices = this.persistedIndices.get(layoutInfo.parentKey);
                if (!indices) {
                    // stickyColumnIndices are always persisted along with any cells from persistedKeys.
                    indices = (collectionNode === null || collectionNode === void 0 ? void 0 : collectionNode.type) === 'cell' || (collectionNode === null || collectionNode === void 0 ? void 0 : collectionNode.type) === 'column' ? [
                        ...this.stickyColumnIndices
                    ] : [];
                    this.persistedIndices.set(layoutInfo.parentKey, indices);
                }
                let index = (_this_layoutNodes_get1 = this.layoutNodes.get(layoutInfo.key)) === null || _this_layoutNodes_get1 === void 0 ? void 0 : _this_layoutNodes_get1.index;
                if (index != null && !indices.includes(index)) indices.push(index);
                layoutInfo = (_this_layoutNodes_get2 = this.layoutNodes.get(layoutInfo.parentKey)) === null || _this_layoutNodes_get2 === void 0 ? void 0 : _this_layoutNodes_get2.layoutInfo;
            }
        }
        for (let indices of this.persistedIndices.values())indices.sort((a, b)=>a - b);
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
            if (candidate.type !== 'row' || !candidate.rect.intersects(searchRect)) continue;
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
        let layoutInfo = super.getDropTargetLayoutInfo(target);
        layoutInfo.parentKey = this.virtualizer.collection.body.key;
        return layoutInfo;
    }
    constructor(options){
        super(options), this.lastCollection = null, this.columnWidths = new Map(), this.lastPersistedKeys = null, this.persistedIndices = new Map();
        this.stickyColumnIndices = [];
    }
}



//# sourceMappingURL=TableLayout.module.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/TableLayout.mjs




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


class $2f9e0b0e857fd9ba$export$62444c3c724b1b20 extends (0, $a152112e902709bf$export$62444c3c724b1b20) {
    // Invalidate the layout whenever the column widths change.
    useLayoutOptions() {
        // This is not a React class component, just a regular class.
        /* eslint-disable react-hooks/rules-of-hooks */ let colResizeState = (0, react.useContext)((0, Table/* TableColumnResizeStateContext */.jX));
        return (0, react.useMemo)(()=>({
                columnWidths: colResizeState === null || colResizeState === void 0 ? void 0 : colResizeState.columnWidths
            }), [
            colResizeState === null || colResizeState === void 0 ? void 0 : colResizeState.columnWidths
        ]);
    }
}



//# sourceMappingURL=TableLayout.module.js.map


/***/ }),

/***/ 48868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ $e93e671b31057976$export$b8473d3665f3a75a)
/* harmony export */ });
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95562);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49953);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7049);




/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
    let { validationBehavior: validationBehavior, focus: focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        if (validationBehavior === 'native' && (ref === null || ref === void 0 ? void 0 : ref.current) && !ref.current.disabled) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute('title')) ref.current.title = '';
            if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
        }
    });
    let onReset = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useEffectEvent */ .J)(()=>{
        state.resetValidation();
    });
    let onInvalid = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useEffectEvent */ .J)((e)=>{
        var _ref_current;
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
            var _ref_current1;
            if (focus) focus();
            else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
            // Always show focus ring.
            (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__/* .setInteractionModality */ .Cl)('keyboard');
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useEffectEvent */ .J)(()=>{
        state.commitValidation();
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let input = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!input) return;
        let form = input.form;
        input.addEventListener('invalid', onInvalid);
        input.addEventListener('change', onChange);
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', onReset);
        return ()=>{
            input.removeEventListener('invalid', onInvalid);
            input.removeEventListener('change', onChange);
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', onReset);
        };
    }, [
        ref,
        onInvalid,
        onChange,
        onReset,
        validationBehavior
    ]);
}
function $e93e671b31057976$var$getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function $e93e671b31057976$var$getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: $e93e671b31057976$var$getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (!element.validity.valid) return element;
    }
    return null;
}



//# sourceMappingURL=useFormValidation.module.js.map


/***/ }),

/***/ 71144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KZ: () => (/* binding */ $e5be200c675c3b3a$export$fc1a364ae1f3ff10),
/* harmony export */   Lf: () => (/* binding */ $e5be200c675c3b3a$export$a763b9476acd3eb),
/* harmony export */   Xy: () => (/* binding */ $e5be200c675c3b3a$export$571b5131b7e65c11),
/* harmony export */   YD: () => (/* binding */ $e5be200c675c3b3a$export$dad6ae84456c676a),
/* harmony export */   cX: () => (/* binding */ $e5be200c675c3b3a$export$75ee7c75d68f5b0e),
/* harmony export */   oE: () => (/* binding */ $e5be200c675c3b3a$export$aca958c65c314e6c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $e5be200c675c3b3a$export$aca958c65c314e6c = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
    ...$e5be200c675c3b3a$export$aca958c65c314e6c,
    customError: true,
    valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
    isInvalid: false,
    validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
    validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = '__formValidationState' + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
    // Private prop for parent components to pass state to children.
    if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
        let { realtimeValidation: realtimeValidation, displayValidation: displayValidation, updateValidation: updateValidation, resetValidation: resetValidation, commitValidation: commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
        return {
            realtimeValidation: realtimeValidation,
            displayValidation: displayValidation,
            updateValidation: updateValidation,
            resetValidation: resetValidation,
            commitValidation: commitValidation
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
    let { isInvalid: isInvalid, validationState: validationState, name: name, value: value, builtinValidation: builtinValidation, validate: validate, validationBehavior: validationBehavior = 'aria' } = props;
    // backward compatibility.
    if (validationState) isInvalid || (isInvalid = validationState === 'invalid');
    // If the isInvalid prop is controlled, update validation result in realtime.
    let controlledError = isInvalid !== undefined ? {
        isInvalid: isInvalid,
        validationErrors: [],
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!validate || value == null) return null;
        let validateErrors = $e5be200c675c3b3a$var$runValidate(validate, value);
        return $e5be200c675c3b3a$var$getValidationResult(validateErrors);
    }, [
        validate,
        value
    ]);
    if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = undefined;
    // Get relevant server errors from the form.
    let serverErrors = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($e5be200c675c3b3a$export$571b5131b7e65c11);
    let serverErrorMessages = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>$e5be200c675c3b3a$var$asArray(serverErrors[name])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let [currentValidity, setCurrentValidity] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let lastError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
    let displayValidation = validationBehavior === 'native' ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation: realtimeValidation,
        displayValidation: displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === 'aria' && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
            if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === 'native') setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === 'native') setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function $e5be200c675c3b3a$var$asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
    if (typeof validate === 'function') {
        let e = validate(value);
        if (e && typeof e !== 'boolean') return $e5be200c675c3b3a$var$asArray(e);
    }
    return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
    if (a === b) return true;
    return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}
function $e5be200c675c3b3a$export$75ee7c75d68f5b0e(...results) {
    let errors = new Set();
    let isInvalid = false;
    let validationDetails = {
        ...$e5be200c675c3b3a$export$aca958c65c314e6c
    };
    for (let v of results){
        var _validationDetails, _key;
        for (let e of v.validationErrors)errors.add(e);
        // Only these properties apply for checkboxes.
        isInvalid || (isInvalid = v.isInvalid);
        for(let key in validationDetails)(_validationDetails = validationDetails)[_key = key] || (_validationDetails[_key] = v.validationDetails[key]);
    }
    validationDetails.valid = !isInvalid;
    return {
        isInvalid: isInvalid,
        validationErrors: [
            ...errors
        ],
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useFormValidationState.module.js.map


/***/ })

}]);