"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5545],{

/***/ 70196
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ $143fb904d86051ce$export$89be5a243e59c4b2)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Collection.mjs
var Collection = __webpack_require__(53658);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/virtualizer/Rect.mjs
var Rect = __webpack_require__(14150);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/virtualizer/Size.mjs
var Size = __webpack_require__(82295);
;// ./node_modules/react-stately/dist/private/virtualizer/ReusableView.mjs
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
 */ let $6bbafa22c92cc056$var$KEY = 0;
class $6bbafa22c92cc056$export$1a5223887c560441 {
    constructor(virtualizer, viewType){
        this.virtualizer = virtualizer;
        this.key = ++$6bbafa22c92cc056$var$KEY;
        this.viewType = viewType;
        this.children = new Set();
        this.reusableViews = new Map();
        this.layoutInfo = null;
        this.content = null;
        this.rendered = null;
    }
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
        let view = reusable && reusable.length > 0 ? reusable.shift() : new $6bbafa22c92cc056$export$7a41b6f219e61634(this.virtualizer, this, reuseType);
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
}
class $6bbafa22c92cc056$export$e21886a4eef6b29a extends $6bbafa22c92cc056$export$1a5223887c560441 {
    constructor(virtualizer){
        super(virtualizer, 'root');
    }
}
class $6bbafa22c92cc056$export$7a41b6f219e61634 extends $6bbafa22c92cc056$export$1a5223887c560441 {
    constructor(virtualizer, parent, viewType){
        super(virtualizer, viewType);
        this.parent = parent;
    }
}



//# sourceMappingURL=ReusableView.mjs.map

;// ./node_modules/react-stately/dist/private/virtualizer/utils.mjs
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
 */ /** Returns whether two sets are equal. */ function $5225cf049274675d$export$a8d0d0c8d1c5df64(a, b) {
    if (a === b) return true;
    if (a.size !== b.size) return false;
    for (let key of a){
        if (!b.has(key)) return false;
    }
    return true;
}



//# sourceMappingURL=utils.mjs.map

// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/virtualizer/Point.mjs
var Point = __webpack_require__(75266);
;// ./node_modules/react-stately/dist/private/virtualizer/OverscanManager.mjs



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

class $f64c7bdbe8bdc6dc$export$4455ee6afb38dcbb {
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
        let overscanX = this.visibleRect.width / 3;
        overscanned.width += overscanX;
        if (this.velocity.x < 0) overscanned.x -= overscanX;
        return overscanned;
    }
    constructor(){
        this.startTime = 0;
        this.velocity = new (0, Point/* Point */.b)(0, 0);
        this.visibleRect = new (0, Rect/* Rect */.r)();
    }
}



//# sourceMappingURL=OverscanManager.mjs.map

;// ./node_modules/react-stately/dist/private/virtualizer/ScrollAnchor.mjs


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
/**
 * Minimum overlap an item must have with the viewport, along the scroll axis,
 * to be eligible as a scroll anchor. Without this, an item that only overlaps the viewport
 * by a sliver (e.g. 1px, essentially scrolled out of view) can still "win" the anchor
 * tie-break over a substantially visible item.
 */ const $78014f4785404d8e$var$MIN_ANCHOR_OVERLAP = 4;
function $78014f4785404d8e$var$dimensionForAxis(axis) {
    return axis === 'x' ? 'width' : 'height';
}
function $78014f4785404d8e$export$413719533c5919c9(anchor, axis, getLayoutInfo, visibleRect, contentSize) {
    let finalInfo = getLayoutInfo(anchor.key);
    if (!finalInfo) return null;
    let adjustment = finalInfo.rect[anchor.corner][axis] - visibleRect[axis] - anchor.offset;
    if (adjustment === 0) return null;
    let target = visibleRect[axis] + adjustment;
    let dimension = $78014f4785404d8e$var$dimensionForAxis(axis);
    let max = Math.max(0, contentSize[dimension] - visibleRect[dimension]);
    let clamped = Math.max(0, Math.min(max, target));
    return clamped !== visibleRect[axis] ? clamped : null;
}
function $78014f4785404d8e$export$69fb4c6de5f339b7(edge, axis, visibleRect, visibleLayoutInfos, isAnchorable = ()=>true) {
    let dimension = $78014f4785404d8e$var$dimensionForAxis(axis);
    let best = null;
    for (let [key, layoutInfo] of visibleLayoutInfos){
        if (!layoutInfo || !isAnchorable(layoutInfo)) continue;
        let overlap = layoutInfo.rect.intersection(visibleRect)[dimension];
        if (layoutInfo.rect.area > 0 && overlap >= $78014f4785404d8e$var$MIN_ANCHOR_OVERLAP) {
            let corner = layoutInfo.rect.getCornerInRect(visibleRect) ?? 'topLeft';
            let offset = layoutInfo.rect[corner][axis] - visibleRect[axis];
            let isBetter = !best || (edge === 'end' ? offset < best.offset : offset > best.offset);
            if (isBetter) best = {
                key: key,
                corner: corner,
                offset: offset
            };
        }
    }
    return best;
}
function $78014f4785404d8e$export$c74597e403428eac(edge, axis, contentSize, previousVisibleRect) {
    if (edge === 'start') return 0;
    let dimension = $78014f4785404d8e$var$dimensionForAxis(axis);
    return Math.max(0, contentSize[dimension] - previousVisibleRect[dimension]);
}
function $78014f4785404d8e$export$f644bffd4937530e(visibleRect, contentSize, edge, axis, threshold) {
    if (edge === 'start') return visibleRect[axis] <= threshold;
    let dimension = $78014f4785404d8e$var$dimensionForAxis(axis);
    let distanceFromEnd = contentSize[dimension] - (visibleRect[axis] + visibleRect[dimension]);
    return distanceFromEnd <= threshold;
}
function $78014f4785404d8e$export$dcb80b718ca193d7(edge, axis, anchor, wasNearAnchorEdge, isScrolling, itemSizeChanged, contentSizeDelta, getLayoutInfo, previousVisibleRect, contentSize) {
    let withTarget = (target)=>axis === 'x' ? new (0, Rect/* Rect */.r)(target, previousVisibleRect.y, previousVisibleRect.width, previousVisibleRect.height) : new (0, Rect/* Rect */.r)(previousVisibleRect.x, target, previousVisibleRect.width, previousVisibleRect.height);
    if (anchor) {
        let target = $78014f4785404d8e$export$413719533c5919c9(anchor, axis, getLayoutInfo, previousVisibleRect, contentSize);
        if (target != null) return withTarget(target);
    }
    if (wasNearAnchorEdge && !isScrolling && (!itemSizeChanged || contentSizeDelta > 0)) {
        let target = withTarget($78014f4785404d8e$export$c74597e403428eac(edge, axis, contentSize, previousVisibleRect));
        return target.equals(previousVisibleRect) ? null : target;
    }
    return null;
}
class $78014f4785404d8e$export$8ce0fdedc36cb6b {
    /** Resets all tracked state, e.g. when the virtualizer's layout instance changes. */ reset() {
        this.hasSnappedToEdge = false;
        this.hadEstimatedVisibleItems = false;
        this.wasNearAnchorEdge = false;
    }
    /**
   * Captures the anchor from pre-layout view positions.
   */ captureBeforeLayout(anchorInfo, preLayoutInfos, visibleRect) {
        if (!anchorInfo) return null;
        return $78014f4785404d8e$export$69fb4c6de5f339b7(anchorInfo.edge, anchorInfo.axis, visibleRect, preLayoutInfos, anchorInfo.isAnchorable);
    }
    /**
   * Runs the full post-layout decision: updates the tracked state for the next pass, and
   * returns the resolved scroll target, or null if nothing should change.
   */ resolveAfterLayout(options) {
        let { anchorInfo: anchorInfo, anchor: anchor, postLayoutInfos: postLayoutInfos, previousVisibleRect: previousVisibleRect, previousContentSize: previousContentSize, contentSize: contentSize, itemSizeChanged: itemSizeChanged, isScrolling: isScrolling, getLayoutInfo: getLayoutInfo } = options;
        if (!anchorInfo) return null;
        // Read the previous pass's state into locals before any writes below overwrite it.
        let wasSettlingLastPass = this.hadEstimatedVisibleItems;
        let wasNearAnchorEdgeLastPass = this.wasNearAnchorEdge;
        let hasEstimated = false;
        for (let layoutInfo of postLayoutInfos.values())if (layoutInfo.estimatedSize) {
            hasEstimated = true;
            break;
        }
        this.hadEstimatedVisibleItems = hasEstimated;
        // Don't recheck "near edge?" mid-resize because it could look like a scroll that never happened.
        // Reuse the answer from before the resizing started.
        if (!wasSettlingLastPass) this.wasNearAnchorEdge = $78014f4785404d8e$export$f644bffd4937530e(previousVisibleRect, previousContentSize, anchorInfo.edge, anchorInfo.axis, anchorInfo.threshold);
        if (previousVisibleRect.area === 0) return null;
        let dimension = anchorInfo.axis === 'x' ? 'width' : 'height';
        let contentSizeDelta = contentSize[dimension] - previousContentSize[dimension];
        let isFirstAnchoredLayout = !this.hasSnappedToEdge;
        this.hasSnappedToEdge = true;
        // Only modify scroll when content actually changed (or this is the first layout, which always snaps)
        if (!(isFirstAnchoredLayout || contentSizeDelta !== 0 || itemSizeChanged)) return null;
        let wasNearAnchorEdge = isFirstAnchoredLayout || wasSettlingLastPass && wasNearAnchorEdgeLastPass || $78014f4785404d8e$export$f644bffd4937530e(previousVisibleRect, previousContentSize, anchorInfo.edge, anchorInfo.axis, anchorInfo.threshold);
        // A first-ever layout always snaps to the edge, even if the raw distance check says
        // otherwise. Save that real decision here so later passes in this cascade reuse it.
        if (!wasSettlingLastPass) this.wasNearAnchorEdge = wasNearAnchorEdge;
        // Skip restoring to the captured anchor while still resizing because items above it are also still growing,
        // and following it would fall short of the edge.
        let effectiveAnchor = isFirstAnchoredLayout || wasSettlingLastPass && wasNearAnchorEdgeLastPass ? null : anchor;
        return $78014f4785404d8e$export$dcb80b718ca193d7(anchorInfo.edge, anchorInfo.axis, effectiveAnchor, wasNearAnchorEdge, isScrolling, itemSizeChanged, contentSizeDelta, getLayoutInfo, previousVisibleRect, contentSize);
    }
    constructor(){
        this.hasSnappedToEdge = false;
        this.hadEstimatedVisibleItems = false;
        this.wasNearAnchorEdge = false;
    }
}



//# sourceMappingURL=ScrollAnchor.mjs.map

;// ./node_modules/react-stately/dist/private/virtualizer/Virtualizer.mjs







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





class $4537523c0f2a47dc$export$89be5a243e59c4b2 {
    constructor(options){
        this.delegate = options.delegate;
        this.collection = options.collection;
        this.layout = options.layout;
        this.contentSize = new (0, Size/* Size */.o)();
        this.visibleRect = new (0, Rect/* Rect */.r)();
        this.size = new (0, Size/* Size */.o)();
        this.persistedKeys = new Set();
        this._visibleViews = new Map();
        this._renderedContent = new WeakMap();
        this._rootView = new (0, $6bbafa22c92cc056$export$e21886a4eef6b29a)(this);
        this._isScrolling = false;
        this._invalidationContext = {};
        this._overscanManager = new (0, $f64c7bdbe8bdc6dc$export$4455ee6afb38dcbb)();
        this._scrollAnchor = new (0, $78014f4785404d8e$export$8ce0fdedc36cb6b)();
    }
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
        // @ts-ignore
        let anchorInfo = this.layout.UNSTABLE_getScrollAnchorInfo?.(context.layoutOptions) ?? null;
        // Capture scroll anchor from current (pre-layout) view positions.
        // On first render _visibleViews is empty so no anchor will be found.
        let anchor = null;
        if (anchorInfo) {
            let preLayoutInfos = [];
            for (let [key, view] of this._visibleViews){
                let layoutInfo = this.layout.getLayoutInfo(key) ?? view.layoutInfo;
                if (layoutInfo) preLayoutInfos.push([
                    key,
                    layoutInfo
                ]);
            }
            anchor = this._scrollAnchor.captureBeforeLayout(anchorInfo, preLayoutInfos, this.visibleRect);
        }
        let previousContentSize = this.contentSize;
        let previousVisibleRect = this.visibleRect;
        // Update the layout
        this.layout.update(context);
        let rawContentSize = this.layout.getContentSize();
        this.contentSize = new (0, Size/* Size */.o)(rawContentSize.width, rawContentSize.height);
        let target = this._scrollAnchor.resolveAfterLayout({
            anchorInfo: anchorInfo,
            anchor: anchor,
            postLayoutInfos: anchorInfo ? this.getVisibleLayoutInfos() : new Map(),
            previousVisibleRect: previousVisibleRect,
            previousContentSize: previousContentSize,
            contentSize: this.contentSize,
            itemSizeChanged: context.itemSizeChanged ?? false,
            isScrolling: this._isScrolling,
            getLayoutInfo: (key)=>this.layout.getLayoutInfo(key)
        });
        if (target) {
            // Queues a new render cycle. Return early to skip updateSubviews — running it now
            // would position views against the old visibleRect, causing a flash before the
            // incoming relayout corrects them.
            this.delegate.setVisibleRect(target);
            return;
        }
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
        let map = new Map();
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
        let widthChanged = false;
        let heightChanged = false;
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
            this._scrollAnchor.reset();
            needsLayout = true;
        }
        if (opts.persistedKeys && !(0, $5225cf049274675d$export$a8d0d0c8d1c5df64)(opts.persistedKeys, this.persistedKeys)) {
            mutableThis.persistedKeys = opts.persistedKeys;
            needsUpdate = true;
        }
        if (!this.visibleRect.equals(opts.visibleRect) || !this.size.equals(opts.size)) {
            this._overscanManager.setVisibleRect(opts.visibleRect);
            // Create a rectangle using the scroll position and layout size of the scroll view. This is not the same
            // as the visibleRect, whose width and height may change during window scrolling.
            let oldRect = new (0, Rect/* Rect */.r)(this.visibleRect.x, this.visibleRect.y, this.size.width, this.size.height);
            let newRect = new (0, Rect/* Rect */.r)(opts.visibleRect.x, opts.visibleRect.y, opts.size.width, opts.size.height);
            let shouldInvalidate = this.layout.shouldInvalidate(newRect, oldRect);
            if (shouldInvalidate) {
                offsetChanged = !opts.visibleRect.pointEquals(this.visibleRect);
                sizeChanged = !this.size.equals(opts.size);
                widthChanged = this.size.width !== opts.size.width;
                heightChanged = this.size.height !== opts.size.height;
                needsLayout = true;
            } else needsUpdate = true;
            mutableThis.visibleRect = opts.visibleRect;
            mutableThis.size = opts.size;
        }
        if (opts.invalidationContext !== this._invalidationContext) {
            if (opts.invalidationContext) {
                sizeChanged ||= opts.invalidationContext.sizeChanged || false;
                widthChanged ||= opts.invalidationContext.widthChanged || false;
                heightChanged ||= opts.invalidationContext.heightChanged || false;
                offsetChanged ||= opts.invalidationContext.offsetChanged || false;
                itemSizeChanged ||= opts.invalidationContext.itemSizeChanged || false;
                layoutOptionsChanged ||= opts.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && opts.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(opts.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions);
                needsLayout ||= itemSizeChanged || sizeChanged || offsetChanged || layoutOptionsChanged;
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
            widthChanged: widthChanged,
            heightChanged: heightChanged,
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
}



//# sourceMappingURL=Virtualizer.mjs.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-stately/dist/private/virtualizer/useVirtualizerState.mjs





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



const $51e619e0f141c3ec$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, react).useLayoutEffect : ()=>{};
function $51e619e0f141c3ec$export$1505db82fe357e65(opts) {
    let [visibleRect, setVisibleRect] = (0, react.useState)(new (0, Rect/* Rect */.r)(0, 0, 0, 0));
    let [size, setSize] = (0, react.useState)(new (0, Size/* Size */.o)());
    let [isScrolling, setScrolling] = (0, react.useState)(false);
    let [invalidationContext, setInvalidationContext] = (0, react.useState)({});
    let visibleRectChanged = (0, react.useRef)(false);
    let [virtualizer] = (0, react.useState)(// oxlint-disable-next-line react/react-compiler
    ()=>new (0, $4537523c0f2a47dc$export$89be5a243e59c4b2)({
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
    $51e619e0f141c3ec$export$e5c5a5f917a5871c(()=>{
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
        size: opts.allowsWindowScrolling ? size : visibleRect,
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
            size: size,
            setSize: setSize,
            contentSize: contentSize,
            isScrolling: isScrolling,
            startScrolling: startScrolling,
            endScrolling: endScrolling
        }), [
        virtualizer,
        visibleViews,
        setVisibleRect,
        size,
        setSize,
        contentSize,
        isScrolling,
        startScrolling,
        endScrolling
    ]);
    return state;
}



//# sourceMappingURL=useVirtualizerState.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/domHelpers.mjs
var domHelpers = __webpack_require__(1612);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
;// ./node_modules/react-aria/dist/private/virtualizer/utils.mjs
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
 */ let $3db4938a3baa5776$var$cachedRTLResult = null;
function $3db4938a3baa5776$export$faf7630257ad4304(recalculate = false) {
    if ($3db4938a3baa5776$var$cachedRTLResult === null || recalculate) {
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
        if (outerDiv.scrollLeft > 0) $3db4938a3baa5776$var$cachedRTLResult = 'positive-descending';
        else {
            outerDiv.scrollLeft = 1;
            if (outerDiv.scrollLeft === 0) $3db4938a3baa5776$var$cachedRTLResult = 'negative';
            else $3db4938a3baa5776$var$cachedRTLResult = 'positive-ascending';
        }
        document.body.removeChild(outerDiv);
        return $3db4938a3baa5776$var$cachedRTLResult;
    }
    return $3db4938a3baa5776$var$cachedRTLResult;
}
function $3db4938a3baa5776$export$1389d168952b34b5(node, direction) {
    let { scrollLeft: scrollLeft } = node;
    // scrollLeft in rtl locales differs across browsers, so normalize.
    // See comment by getRTLOffsetType below for details.
    if (direction === 'rtl') {
        let { scrollWidth: scrollWidth, clientWidth: clientWidth } = node;
        switch($3db4938a3baa5776$export$faf7630257ad4304()){
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
function $3db4938a3baa5776$export$ed5fd5ffe5ab0ac(node, direction, scrollLeft) {
    if (direction === 'rtl') switch($3db4938a3baa5776$export$faf7630257ad4304()){
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



//# sourceMappingURL=utils.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
var useEffectEvent = __webpack_require__(83265);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(74441);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(10494);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./node_modules/react-aria/dist/private/virtualizer/ScrollView.mjs
/* unused harmony import specifier */ var $03e8ab2d84d7657a$export$4338b53315abf666;
/* unused harmony import specifier */ var $3rdQQ$react;












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










function $d83ca946696b1300$var$ScrollView(props, ref) {
    ref = (0, $03e8ab2d84d7657a$export$4338b53315abf666)(ref);
    let { scrollViewProps: scrollViewProps, contentProps: contentProps } = $d83ca946696b1300$export$2ea0c4974da4731b(props, ref);
    return /*#__PURE__*/ (0, $3rdQQ$react).createElement("div", {
        role: "presentation",
        ...scrollViewProps,
        ref: ref
    }, /*#__PURE__*/ (0, $3rdQQ$react).createElement("div", contentProps, props.children));
}
const $d83ca946696b1300$export$5665e3d6be6adea = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $3rdQQ$react).forwardRef($d83ca946696b1300$var$ScrollView)));
function $d83ca946696b1300$export$2ea0c4974da4731b(props, ref) {
    let { contentSize: contentSize, onVisibleRectChange: onVisibleRectChange, onSizeChange: onSizeChange, innerStyle: innerStyle, onScrollStart: onScrollStart, onScrollEnd: onScrollEnd, scrollDirection: scrollDirection = 'both', onScroll: onScrollProp, allowsWindowScrolling: allowsWindowScrolling, ...otherProps } = props;
    // oxlint-disable-next-line react/react-compiler
    let state = (0, react.useRef)({
        // Internal scroll position of the scroll view.
        scrollPosition: new (0, Point/* Point */.b)(),
        // Size of the scroll view.
        size: new (0, Size/* Size */.o)(),
        // Offset of the scroll view relative to the window viewport.
        viewportOffset: new (0, Point/* Point */.b)(),
        // Size of the window viewport.
        viewportSize: new (0, Size/* Size */.o)(),
        scrollEndTime: 0,
        scrollTimeout: null,
        isScrolling: false,
        lastVisibleRect: new (0, Rect/* Rect */.r)()
    }).current;
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let updateVisibleRect = (0, react.useCallback)(()=>{
        // Intersect the window viewport with the scroll view itself to find the actual visible rectangle.
        // This allows virtualized components to have unbounded height but still virtualize when scrolled with the page.
        // While there may be other scrollable elements between the <body> and the scroll view, we do not take
        // their sizes into account for performance reasons. Their scroll positions are accounted for in viewportOffset
        // though (due to getBoundingClientRect). This may result in more rows than absolutely necessary being rendered,
        // but no more than the entire height of the viewport which is good enough for virtualization use cases.
        let visibleRect = allowsWindowScrolling ? new (0, Rect/* Rect */.r)(state.viewportOffset.x + state.scrollPosition.x, state.viewportOffset.y + state.scrollPosition.y, Math.max(0, Math.min(state.size.width - state.viewportOffset.x, state.viewportSize.width)), Math.max(0, Math.min(state.size.height - state.viewportOffset.y, state.viewportSize.height))) : new (0, Rect/* Rect */.r)(state.scrollPosition.x, state.scrollPosition.y, state.size.width, state.size.height);
        // Don't emit updates if the visible area is zero and the last emitted area was also zero.
        if (visibleRect.area > 0 || state.lastVisibleRect.area > 0) {
            onVisibleRectChange(visibleRect);
            state.lastVisibleRect = visibleRect;
        }
    }, [
        state,
        allowsWindowScrolling,
        onVisibleRectChange
    ]);
    let [isScrolling, setScrolling] = (0, react.useState)(false);
    let onScroll = (0, react.useCallback)((e)=>{
        let target = (0, DOMFunctions/* getEventTarget */.wt)(e);
        if (!(0, DOMFunctions/* nodeContains */.sD)(target, ref.current)) return;
        if (onScrollProp && target === ref.current) onScrollProp(e);
        if (target !== ref.current) {
            // An ancestor element or the window was scrolled. Update the position of the scroll view relative to the viewport.
            let boundingRect = ref.current.getBoundingClientRect();
            let x = boundingRect.x < 0 ? -boundingRect.x : 0;
            let y = boundingRect.y < 0 ? -boundingRect.y : 0;
            if (x === state.viewportOffset.x && y === state.viewportOffset.y) return;
            state.viewportOffset = new (0, Point/* Point */.b)(x, y);
        } else {
            // The scroll view itself was scrolled. Update the local scroll position.
            // Prevent rubber band scrolling from shaking when scrolling out of bounds
            let scrollTop = target.scrollTop;
            let scrollLeft = (0, $3db4938a3baa5776$export$1389d168952b34b5)(target, direction);
            state.scrollPosition = new (0, Point/* Point */.b)(Math.max(0, Math.min(scrollLeft, contentSize.width - state.size.width)), Math.max(0, Math.min(scrollTop, contentSize.height - state.size.height)));
        }
        (0, react_dom.flushSync)(()=>{
            updateVisibleRect();
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
        onScrollProp,
        ref,
        direction,
        state,
        contentSize,
        updateVisibleRect,
        onScrollStart,
        onScrollEnd
    ]);
    // Attach a document-level capturing scroll listener so we can account for scrollable ancestors.
    (0, react.useEffect)(()=>{
        return (0, domHelpers/* addEvent */.W2)((0, DOMFunctions/* getPropagationTargets */.vK)(ref.current, (0, domHelpers/* getOwnerDocument */.TW)(ref.current)), 'scroll', onScroll, true);
    }, [
        onScroll,
        ref
    ]);
    (0, react.useEffect)(()=>{
        return ()=>{
            if (state.scrollTimeout != null) clearTimeout(state.scrollTimeout);
            if (state.isScrolling) window.dispatchEvent(new Event('tk.connect-observer'));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let isUpdatingSize = (0, react.useRef)(false);
    let updateSize = (0, react.useCallback)((flush)=>{
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
        // Update the window viewport size.
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let viewportSizeChanged = state.viewportSize.width !== viewportWidth || state.viewportSize.height !== viewportHeight;
        if (viewportSizeChanged) state.viewportSize = new (0, Size/* Size */.o)(viewportWidth, viewportHeight);
        if (state.size.width !== w || state.size.height !== h || viewportSizeChanged) {
            state.size = new (0, Size/* Size */.o)(w, h);
            flush(()=>{
                updateVisibleRect();
                onSizeChange?.(state.size);
            });
            // If the clientWidth or clientHeight changed, scrollbars appeared or disappeared as
            // a result of the layout update. In this case, re-layout again to account for the
            // adjusted space. In very specific cases this might result in the scrollbars disappearing
            // again, resulting in extra padding. We stop after a maximum of two layout passes to avoid
            // an infinite loop. This matches how browsers behavior with native CSS grid layout.
            if (!isTestEnv && clientWidth !== dom.clientWidth || clientHeight !== dom.clientHeight) {
                state.size = new (0, Size/* Size */.o)(dom.clientWidth, dom.clientHeight);
                flush(()=>{
                    updateVisibleRect();
                    onSizeChange?.(state.size);
                });
            }
        }
        isUpdatingSize.current = false;
    }, [
        ref,
        state,
        updateVisibleRect,
        onSizeChange
    ]);
    let updateSizeEvent = (0, useEffectEvent/* useEffectEvent */.J)(updateSize);
    // Track the size of the entire window viewport, which is used to bound the size of the virtualizer's visible rectangle.
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        // Initialize viewportRect before updating size for the first time.
        state.viewportSize = new (0, Size/* Size */.o)(window.innerWidth, window.innerHeight);
        let onWindowResize = ()=>{
            updateSizeEvent((0, react_dom.flushSync));
        };
        window.addEventListener('resize', onWindowResize);
        return ()=>window.removeEventListener('resize', onWindowResize);
    }, [
        state
    ]);
    // Update visible rect when the content size changes, in case scrollbars need to appear or disappear.
    let lastContentSize = (0, react.useRef)(null);
    let [update, setUpdate] = (0, react.useState)({});
    // We only contain a call to setState in here for testing environments.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (!isUpdatingSize.current && (lastContentSize.current == null || !contentSize.equals(lastContentSize.current))) {
            // React doesn't allow flushSync inside effects, so queue a microtask.
            // We also need to wait until all refs are set (e.g. when passing a ref down from a parent).
            // If we are in an `act` environment, update immediately without a microtask so you don't need
            // to mock timers in tests. In this case, the update is synchronous already.
            // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
            // https://github.com/reactwg/react-18/discussions/102
            if (// @ts-ignore
            typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined') {
                // This is so we update size in a separate render but within the same act. Needs to be setState instead of refs
                // due to strict mode.
                setUpdate({});
                lastContentSize.current = contentSize;
                return;
            } else queueMicrotask(()=>updateSizeEvent((0, react_dom.flushSync)));
        }
        lastContentSize.current = contentSize;
    });
    // Will only run in tests, needs to be in separate effect so it is properly run in the next render in strict mode.
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        updateSizeEvent((fn)=>fn());
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
    // oxlint-disable-next-line react/react-compiler
    } else if (scrollDirection === 'vertical' || contentSize.width === state.size.width) {
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
        isScrolling: isScrolling,
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



//# sourceMappingURL=ScrollView.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/isElementVisible.mjs
var isElementVisible = __webpack_require__(36105);
;// ./node_modules/react-aria/dist/private/virtualizer/useVirtualizerItem.mjs






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




function $cd3854145620ec6a$export$1da781778207e0a2(options) {
    let { layoutInfo: layoutInfo, virtualizer: virtualizer, ref: ref, shouldObserveItemSize: shouldObserveItemSize } = options;
    let key = layoutInfo?.key;
    let updateSize = (0, react.useCallback)(()=>{
        if (key != null && ref.current) {
            // if the virtualized item is not visible (aka display none on virtualized collection),
            // we want to avoid reporting size 0 otherwise we get into a state where the virtualizer renders 0 items
            // when it is hidden and thus won't remeasure when it is is unhidden
            if (!(0, isElementVisible/* isElementVisible */.J)(ref.current)) return;
            let size = $cd3854145620ec6a$var$getSize(ref.current);
            virtualizer.updateItemSize(key, size);
        }
    }, [
        virtualizer,
        key,
        ref
    ]);
    let updateSizeEvent = (0, useEffectEvent/* useEffectEvent */.J)(updateSize);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (layoutInfo?.estimatedSize) updateSizeEvent();
    });
    // TODO: Consider using a MutationObserver in addition to ResizeObserver to detect
    // when inner DOM structure changes cause an item's height to change.
    // The current ResizeObserver only observes direct children,
    // so mutations deeper in the tree won't trigger a remeasure, leading to stale cached heights and overlapping items.
    // useResizeObserver observes one element via ref, but the wrapper height is fixed by layout
    // and won't change when content grows. Observe direct children instead, then remeasure the
    // wrapper in updateSize.
    (0, react.useEffect)(()=>{
        if (!shouldObserveItemSize) return;
        let el = ref.current;
        if (!el || typeof ResizeObserver === 'undefined') return;
        let resizeObserver = new ResizeObserver((entries)=>{
            if (!entries.length) return;
            updateSizeEvent();
        });
        for (let child of el.children)resizeObserver.observe(child);
        return ()=>{
            resizeObserver.disconnect();
        };
    }, [
        shouldObserveItemSize,
        ref,
        key
    ]);
    return {
        updateSize: updateSize
    };
}
function $cd3854145620ec6a$var$getSize(node) {
    // Reset height before measuring so we get the intrinsic size
    let height = node.style.height;
    node.style.height = '';
    let size = new (0, Size/* Size */.o)(node.scrollWidth, node.scrollHeight);
    node.style.height = height;
    return size;
}



//# sourceMappingURL=useVirtualizerItem.mjs.map

;// ./node_modules/react-aria/dist/private/virtualizer/VirtualizerItem.mjs




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


function $6c92e9e346cd7b1c$export$6796df8ba7398521(props) {
    let { style: style, className: className, layoutInfo: layoutInfo, virtualizer: virtualizer, parent: parent, children: children, shouldObserveItemSize: shouldObserveItemSize } = props;
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let ref = (0, react.useRef)(null);
    (0, $cd3854145620ec6a$export$1da781778207e0a2)({
        layoutInfo: layoutInfo,
        virtualizer: virtualizer,
        ref: ref,
        shouldObserveItemSize: shouldObserveItemSize
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        role: "presentation",
        ref: ref,
        className: className,
        style: {
            ...$6c92e9e346cd7b1c$export$1481e64fbe01b8b3(layoutInfo, direction, parent),
            ...style
        }
    }, children);
}
let $6c92e9e346cd7b1c$var$cache = new WeakMap();
function $6c92e9e346cd7b1c$export$1481e64fbe01b8b3(layoutInfo, dir, parent) {
    let xProperty = dir === 'rtl' ? 'right' : 'left';
    let cached = $6c92e9e346cd7b1c$var$cache.get(layoutInfo);
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
    let style = {
        position: layoutInfo.isSticky ? 'sticky' : 'absolute',
        // Sticky elements are positioned in normal document flow. Display inline-block so that they don't push other sticky columns onto the following rows.
        display: layoutInfo.isSticky ? 'inline-block' : undefined,
        overflow: layoutInfo.allowOverflow ? 'visible' : 'hidden',
        opacity: layoutInfo.opacity,
        zIndex: layoutInfo.zIndex,
        transform: layoutInfo.transform ?? undefined,
        contain: 'size layout style',
        ...rectStyles
    };
    $6c92e9e346cd7b1c$var$cache.set(layoutInfo, style);
    return style;
}



//# sourceMappingURL=VirtualizerItem.mjs.map

;// ./node_modules/react-aria-components/dist/private/Virtualizer.mjs






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




const $143fb904d86051ce$var$VirtualizerContext = /*#__PURE__*/ (0, react.createContext)(null);
const $143fb904d86051ce$var$VirtualizerOptionsContext = /*#__PURE__*/ (0, react.createContext)(null);
function $143fb904d86051ce$export$89be5a243e59c4b2(props) {
    let { children: children, layout: layoutProp, layoutOptions: layoutOptions, shouldObserveItemSize: shouldObserveItemSize } = props;
    let layout = (0, react.useMemo)(()=>typeof layoutProp === 'function' ? new layoutProp() : layoutProp, [
        layoutProp
    ]);
    let renderer = (0, react.useMemo)(()=>({
            isVirtualized: true,
            layoutDelegate: layout,
            dropTargetDelegate: layout.getDropTargetFromPoint ? layout : undefined,
            CollectionRoot: $143fb904d86051ce$var$CollectionRoot,
            CollectionBranch: $143fb904d86051ce$var$CollectionBranch
        }), [
        layout
    ]);
    return /*#__PURE__*/ (0, react).createElement((0, Collection/* CollectionRendererContext */.zL).Provider, {
        value: renderer
    }, /*#__PURE__*/ (0, react).createElement($143fb904d86051ce$var$VirtualizerOptionsContext.Provider, {
        value: {
            layout: layout,
            layoutOptions: layoutOptions,
            shouldObserveItemSize: shouldObserveItemSize
        }
    }, children));
}
function $143fb904d86051ce$var$CollectionRoot({ collection: collection, persistedKeys: persistedKeys, scrollRef: scrollRef, renderDropIndicator: renderDropIndicator }) {
    let { layout: layout, layoutOptions: layoutOptions, shouldObserveItemSize: shouldObserveItemSize } = (0, react.useContext)($143fb904d86051ce$var$VirtualizerOptionsContext);
    // oxlint-disable-next-line react/react-compiler
    let layoutOptions2 = layout.useLayoutOptions?.();
    let state = (0, $51e619e0f141c3ec$export$1505db82fe357e65)({
        allowsWindowScrolling: true,
        layout: layout,
        collection: collection,
        renderView: (type, item)=>{
            return item?.render?.(item);
        },
        onVisibleRectChange (rect) {
            let element = scrollRef?.current;
            if (element) {
                // oxlint-disable-next-line react/react-compiler
                element.scrollLeft = rect.x;
                element.scrollTop = rect.y;
            }
        },
        persistedKeys: persistedKeys,
        layoutOptions: (0, react.useMemo)(()=>layoutOptions && layoutOptions2 ? {
                ...layoutOptions,
                ...layoutOptions2
            } : layoutOptions || layoutOptions2, [
            layoutOptions,
            layoutOptions2
        ])
    });
    let { contentProps: contentProps } = (0, $d83ca946696b1300$export$2ea0c4974da4731b)({
        onVisibleRectChange: state.setVisibleRect,
        onSizeChange: state.setSize,
        contentSize: state.contentSize,
        onScrollStart: state.startScrolling,
        onScrollEnd: state.endScrolling,
        allowsWindowScrolling: true
    }, scrollRef);
    return /*#__PURE__*/ (0, react).createElement("div", contentProps, /*#__PURE__*/ (0, react).createElement($143fb904d86051ce$var$VirtualizerContext.Provider, {
        value: state
    }, $143fb904d86051ce$var$renderChildren(null, state.visibleViews, renderDropIndicator, shouldObserveItemSize)));
}
function $143fb904d86051ce$var$CollectionBranch({ parent: parent, renderDropIndicator: renderDropIndicator }) {
    let virtualizer = (0, react.useContext)($143fb904d86051ce$var$VirtualizerContext);
    let parentView = virtualizer.virtualizer.getVisibleView(parent.key);
    let { shouldObserveItemSize: shouldObserveItemSize } = (0, react.useContext)($143fb904d86051ce$var$VirtualizerOptionsContext);
    return $143fb904d86051ce$var$renderChildren(parentView, Array.from(parentView.children), renderDropIndicator, shouldObserveItemSize);
}
function $143fb904d86051ce$var$renderChildren(parent, children, renderDropIndicator, shouldObserveItemSize) {
    return children.map((view)=>$143fb904d86051ce$var$renderWrapper(parent, view, renderDropIndicator, shouldObserveItemSize));
}
function $143fb904d86051ce$var$renderWrapper(parent, reusableView, renderDropIndicator, shouldObserveItemSize) {
    let rendered = /*#__PURE__*/ (0, react).createElement((0, $6c92e9e346cd7b1c$export$6796df8ba7398521), {
        key: reusableView.key,
        layoutInfo: reusableView.layoutInfo,
        virtualizer: reusableView.virtualizer,
        parent: parent?.layoutInfo,
        shouldObserveItemSize: shouldObserveItemSize
    }, reusableView.rendered);
    let { collection: collection, layout: layout } = reusableView.virtualizer;
    let node = reusableView.content;
    if (node?.type === 'item' && renderDropIndicator && layout.getDropTargetLayoutInfo) rendered = /*#__PURE__*/ (0, react).createElement((0, react).Fragment, {
        key: reusableView.key
    }, $143fb904d86051ce$var$renderDropIndicatorWrapper(parent, reusableView, {
        type: 'item',
        key: reusableView.content.key,
        dropPosition: 'before'
    }, renderDropIndicator), rendered, (0, Collection/* renderAfterDropIndicators */.Cv)(collection, node, (target)=>$143fb904d86051ce$var$renderDropIndicatorWrapper(parent, reusableView, target, renderDropIndicator)));
    return rendered;
}
function $143fb904d86051ce$var$renderDropIndicatorWrapper(parent, reusableView, target, renderDropIndicator) {
    let indicator = renderDropIndicator(target);
    if (indicator) {
        let layoutInfo = reusableView.virtualizer.layout.getDropTargetLayoutInfo(target);
        indicator = /*#__PURE__*/ (0, react).createElement((0, $6c92e9e346cd7b1c$export$6796df8ba7398521), {
            layoutInfo: layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent?.layoutInfo
        }, indicator);
    }
    return indicator;
}



//# sourceMappingURL=Virtualizer.mjs.map


/***/ },

/***/ 13196
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ $942f06a693c162e2$export$cacbb3924155d68e)
});

// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/collections/getChildNodes.mjs
var getChildNodes = __webpack_require__(20079);
;// ./node_modules/react-stately/dist/private/virtualizer/Layout.mjs
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
 */ class $85410e0c3cc54f1d$export$c84671f46d6a1ca {
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
        return this.getLayoutInfo(key)?.rect ?? null;
    }
    /** @private */ getVisibleRect() {
        return this.virtualizer.visibleRect;
    }
    constructor(){
        /** The Virtualizer the layout is currently attached to. */ this.virtualizer = null;
    }
}



//# sourceMappingURL=Layout.mjs.map

;// ./node_modules/react-stately/dist/private/virtualizer/LayoutInfo.mjs
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
 */ class $eb6255cbf080eb7d$export$7e0eeb9da702a085 {
    /**
   * @param type The type of element represented by this LayoutInfo. Should match the `type` of the
   *   corresponding collection node.
   * @param key A unique key for this LayoutInfo. Should match the `key` of the corresponding
   *   collection node.
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
    /**
   * Returns a copy of the LayoutInfo.
   */ copy() {
        let res = new $eb6255cbf080eb7d$export$7e0eeb9da702a085(this.type, this.key, this.rect.copy());
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
}



//# sourceMappingURL=LayoutInfo.mjs.map

// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/virtualizer/Rect.mjs
var Rect = __webpack_require__(14150);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/virtualizer/Size.mjs
var Size = __webpack_require__(82295);
;// ./node_modules/react-stately/dist/private/layout/ListLayout.mjs






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




const $942f06a693c162e2$var$DEFAULT_HEIGHT = 48;
class $942f06a693c162e2$export$cacbb3924155d68e extends (0, $85410e0c3cc54f1d$export$c84671f46d6a1ca) {
    /**
   * Creates a new ListLayout with options. See the list of properties below for a description
   * of the options that can be provided.
   */ constructor(options = {}){
        super();
        this.rowSize = options?.rowSize ?? options?.rowHeight ?? null;
        this.orientation = options.orientation ?? 'vertical';
        this.estimatedRowSize = options?.estimatedRowSize ?? options?.estimatedRowHeight ?? null;
        this.headingSize = options?.headingSize ?? options?.headingHeight ?? null;
        this.estimatedHeadingSize = options?.estimatedHeadingSize ?? options?.estimatedHeadingHeight ?? null;
        this.loaderSize = options?.loaderSize ?? options?.loaderHeight ?? null;
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
    // Backward compatibility for subclassing.
    get collection() {
        return this.virtualizer.collection;
    }
    /** @deprecated Use `rowSize` instead. */ get rowHeight() {
        return this.rowSize;
    }
    /** @deprecated Use `estimatedRowSize` instead. */ get estimatedRowHeight() {
        return this.estimatedRowSize;
    }
    /** @deprecated Use `headingSize` instead. */ get headingHeight() {
        return this.headingSize;
    }
    /** @deprecated Use `estimatedHeadingSize` instead. */ get estimatedHeadingHeight() {
        return this.estimatedHeadingSize;
    }
    /** @deprecated Use `loaderSize` instead. */ get loaderHeight() {
        return this.loaderSize;
    }
    getLayoutInfo(key) {
        this.ensureLayoutInfo(key);
        return this.layoutNodes.get(key)?.layoutInfo || null;
    }
    getVisibleLayoutInfos(rect) {
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        // Adjust rect to keep number of visible rows consistent.
        // (only if height > 1 or width > 1 for getDropTargetFromPoint)
        if (rect[heightProperty] > 1) {
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? $942f06a693c162e2$var$DEFAULT_HEIGHT) + this.gap;
            // Clone only before mutating
            rect = rect.copy();
            let offset = Math.floor(rect[offsetProperty] / rowHeight) * rowHeight;
            let height = rect[heightProperty] + rect[offsetProperty] - offset;
            rect[offsetProperty] = offset;
            rect[heightProperty] = Math.ceil(height / rowHeight) * rowHeight;
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
        let options = invalidationContext.layoutOptions;
        return invalidationContext.sizeChanged || this.rowSize !== (options?.rowSize ?? options?.rowHeight ?? this.rowSize) || this.orientation !== (options?.orientation ?? this.orientation) || this.headingSize !== (options?.headingSize ?? options?.headingHeight ?? this.headingSize) || this.loaderSize !== (options?.loaderSize ?? options?.loaderHeight ?? this.loaderSize) || this.gap !== (options?.gap ?? this.gap) || this.padding !== (options?.padding ?? this.padding);
    }
    shouldInvalidateLayoutOptions(newOptions, oldOptions) {
        return (newOptions?.rowSize ?? newOptions?.rowHeight) !== (oldOptions?.rowSize ?? oldOptions?.rowHeight) || newOptions.orientation !== oldOptions.orientation || (newOptions?.estimatedRowSize ?? newOptions?.estimatedRowHeight) !== (oldOptions?.estimatedRowSize ?? oldOptions?.estimatedRowHeight) || (newOptions?.headingSize ?? newOptions?.headingHeight) !== (oldOptions?.headingSize ?? oldOptions?.headingHeight) || (newOptions?.estimatedHeadingSize ?? newOptions?.estimatedHeadingHeight) !== (oldOptions?.estimatedHeadingSize ?? oldOptions?.estimatedHeadingHeight) || (newOptions?.loaderSize ?? newOptions?.loaderHeight) !== (oldOptions?.loaderSize ?? oldOptions?.loaderHeight) || newOptions.dropIndicatorThickness !== oldOptions.dropIndicatorThickness || newOptions.gap !== oldOptions.gap || newOptions.padding !== oldOptions.padding;
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
        this.rowSize = options?.rowSize ?? options?.rowHeight ?? this.rowSize;
        this.orientation = options?.orientation ?? this.orientation;
        this.estimatedRowSize = options?.estimatedRowSize ?? options?.estimatedRowHeight ?? this.estimatedRowSize;
        this.headingSize = options?.headingSize ?? options?.headingHeight ?? this.headingSize;
        this.estimatedHeadingSize = options?.estimatedHeadingSize ?? options?.estimatedHeadingHeight ?? this.estimatedHeadingSize;
        this.loaderSize = options?.loaderSize ?? options?.loaderHeight ?? this.loaderSize;
        this.dropIndicatorThickness = options?.dropIndicatorThickness ?? this.dropIndicatorThickness;
        this.gap = options?.gap ?? this.gap;
        this.padding = options?.padding ?? this.padding;
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
    buildCollection(offset = this.padding) {
        let collection = this.virtualizer.collection;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let maxOffsetProperty = this.orientation === 'horizontal' ? 'maxX' : 'maxY';
        // filter out content nodes since we don't want them to affect the height
        // Tree specific for now, if we add content nodes to other collection items, we might need to reconsider this
        let collectionNodes = $942f06a693c162e2$var$toArray(collection, (node)=>node.type !== 'content');
        let loaderNodes = collectionNodes.filter((node)=>node.type === 'loader');
        let nodes = [];
        let isEmptyOrLoading = collection?.size === 0;
        if (isEmptyOrLoading) offset = 0;
        for (let node of collectionNodes){
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? $942f06a693c162e2$var$DEFAULT_HEIGHT) + this.gap;
            // Skip rows before the valid rectangle unless they are already cached.
            if (node.type === 'item' && offset + rowHeight < this.requestedRect[offsetProperty] && !this.isValid(node, offset)) {
                offset += rowHeight;
                continue;
            }
            let layoutNode = this.orientation === 'horizontal' ? this.buildChild(node, offset, this.padding, null) : this.buildChild(node, this.padding, offset, null);
            offset = layoutNode.layoutInfo.rect[maxOffsetProperty] + this.gap;
            nodes.push(layoutNode);
            if (node.type === 'loader') {
                let index = loaderNodes.indexOf(node);
                loaderNodes.splice(index, 1);
            }
            // Build each loader that exists in the collection that is outside the visible rect so that they are persisted
            // at the proper estimated location. If the node.type is "section" then we don't do this shortcut since we have to
            // build the sections to see how tall they are.
            if ((node.type === 'item' || node.type === 'loader') && offset > this.requestedRect[maxOffsetProperty]) {
                let lastProcessedIndex = collectionNodes.indexOf(node);
                for (let loaderNode of loaderNodes){
                    let loaderNodeIndex = collectionNodes.indexOf(loaderNode);
                    // Subtract by an additional 1 since we've already added the current item's height to y
                    offset += (loaderNodeIndex - lastProcessedIndex - 1) * rowHeight;
                    let loader = this.orientation === 'horizontal' ? this.buildChild(loaderNode, offset, this.padding, null) : this.buildChild(loaderNode, this.padding, offset, null);
                    nodes.push(loader);
                    offset = loader.layoutInfo.rect[maxOffsetProperty];
                    lastProcessedIndex = loaderNodeIndex;
                }
                // Account for the rest of the items after the last loader spinner, subtract by 1 since we've processed the current node's height already
                offset += (collectionNodes.length - lastProcessedIndex - 1) * rowHeight;
                break;
            }
        }
        offset = Math.max(offset - this.gap, 0);
        offset += isEmptyOrLoading ? 0 : this.padding;
        this.contentSize = this.orientation === 'horizontal' ? new (0, Size/* Size */.o)(offset, this.virtualizer.size.height) : new (0, Size/* Size */.o)(this.virtualizer.size.width, offset);
        return nodes;
    }
    isValid(node, offset) {
        let cached = this.layoutNodes.get(node.key);
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        return !this.invalidateEverything && !!cached && cached.node === node && offset === cached.layoutInfo.rect[offsetProperty] && cached.layoutInfo.rect.intersects(this.validRect) && cached.validRect.containsRect(cached.layoutInfo.rect.intersection(this.requestedRect));
    }
    buildChild(node, x, y, parentKey) {
        if (this.isValid(node, this.orientation === 'horizontal' ? x : y)) return this.layoutNodes.get(node.key);
        let layoutNode = this.buildNode(node, x, y);
        layoutNode.layoutInfo.parentKey = parentKey ?? null;
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
        let layoutInfo = new (0, $eb6255cbf080eb7d$export$7e0eeb9da702a085)(node.type, node.key, rect);
        // Note that if the user provides isLoading to their sentinel during a case where they only want to render the emptyState, this will reserve
        // room for the loader alongside rendering the emptyState
        if (this.orientation === 'horizontal') {
            rect.height = this.virtualizer.contentSize.height - this.padding - y;
            rect.width = node.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? $942f06a693c162e2$var$DEFAULT_HEIGHT : 0;
        } else {
            rect.width = this.virtualizer.contentSize.width - this.padding - x;
            rect.height = node.props.isLoading ? this.loaderSize ?? this.rowSize ?? this.estimatedRowSize ?? $942f06a693c162e2$var$DEFAULT_HEIGHT : 0;
        }
        return {
            layoutInfo: layoutInfo,
            validRect: rect.intersection(this.requestedRect)
        };
    }
    buildSection(node, x, y) {
        let collection = this.virtualizer.collection;
        let width = this.virtualizer.size.width - this.padding - x;
        let height = this.virtualizer.size.height - this.padding - y;
        let rect = this.orientation === 'horizontal' ? new (0, Rect/* Rect */.r)(x, y, 0, height) : new (0, Rect/* Rect */.r)(x, y, width, 0);
        let layoutInfo = new (0, $eb6255cbf080eb7d$export$7e0eeb9da702a085)(node.type, node.key, rect);
        let offset = this.orientation === 'horizontal' ? x : y;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let maxOffsetProperty = this.orientation === 'horizontal' ? 'maxX' : 'maxY';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let skipped = 0;
        let children = [];
        for (let child of (0, getChildNodes/* getChildNodes */.iQ)(node, collection)){
            // skip if it is a content node, Tree specific for now, if we add content nodes to other collection items, we might need to reconsider this
            if (child.type === 'content') continue;
            let rowHeight = (this.rowSize ?? this.estimatedRowSize ?? $942f06a693c162e2$var$DEFAULT_HEIGHT) + this.gap;
            // Skip rows before the valid rectangle unless they are already cached.
            if (offset + rowHeight < this.requestedRect[offsetProperty] && !this.isValid(node, offset)) {
                offset += rowHeight;
                skipped++;
                continue;
            }
            let layoutNode = this.orientation === 'horizontal' ? this.buildChild(child, offset, y, layoutInfo.key) : this.buildChild(child, x, offset, layoutInfo.key);
            offset = layoutNode.layoutInfo.rect[maxOffsetProperty] + this.gap;
            children.push(layoutNode);
            if (offset > this.requestedRect[maxOffsetProperty]) {
                // Estimate the remaining height for rows that we don't need to layout right now.
                offset += ([
                    ...(0, getChildNodes/* getChildNodes */.iQ)(node, collection)
                ].length - (children.length + skipped)) * rowHeight;
                break;
            }
        }
        offset -= this.gap;
        rect[heightProperty] = offset - (this.orientation === 'horizontal' ? x : y);
        return {
            layoutInfo: layoutInfo,
            children: children,
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node: node
        };
    }
    buildSectionHeader(node, x, y) {
        let widthProperty = this.orientation === 'horizontal' ? 'height' : 'width';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let width = this.virtualizer.size[widthProperty] - this.padding - (this.orientation === 'horizontal' ? y : x);
        let rectHeight = this.headingSize;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            let previousLayoutInfo = previousLayoutNode?.layoutInfo;
            if (previousLayoutInfo) {
                let curNode = this.virtualizer.collection.getItem(node.key);
                let lastNode = this.lastCollection ? this.lastCollection.getItem(node.key) : null;
                rectHeight = previousLayoutNode.layoutInfo.rect[heightProperty];
                isEstimated = width !== previousLayoutInfo.rect[widthProperty] || curNode !== lastNode || previousLayoutInfo.estimatedSize;
            } else {
                rectHeight = node.rendered ? this.estimatedHeadingSize : 0;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = $942f06a693c162e2$var$DEFAULT_HEIGHT;
        let headerRect = this.orientation === 'horizontal' ? new (0, Rect/* Rect */.r)(x, y, rectHeight, width - y) : new (0, Rect/* Rect */.r)(x, y, width - x, rectHeight);
        let header = new (0, $eb6255cbf080eb7d$export$7e0eeb9da702a085)('header', node.key, headerRect);
        header.estimatedSize = isEstimated;
        return {
            layoutInfo: header,
            children: [],
            validRect: header.rect.intersection(this.requestedRect),
            node: node
        };
    }
    buildItem(node, x, y) {
        let widthProperty = this.orientation === 'horizontal' ? 'height' : 'width';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        let width = this.virtualizer.size[widthProperty] - this.padding - (this.orientation === 'horizontal' ? y : x);
        let rectHeight = this.rowSize;
        let isEstimated = false;
        // If no explicit height is available, use an estimated height.
        if (rectHeight == null) {
            // If a previous version of this layout info exists, reuse its height.
            // Mark as estimated if the size of the overall virtualizer changed,
            // or the content of the item changed.
            let previousLayoutNode = this.layoutNodes.get(node.key);
            if (previousLayoutNode) {
                rectHeight = previousLayoutNode.layoutInfo.rect[heightProperty];
                isEstimated = width !== previousLayoutNode.layoutInfo.rect[widthProperty] || node !== previousLayoutNode.node || previousLayoutNode.layoutInfo.estimatedSize;
            } else {
                rectHeight = this.estimatedRowSize;
                isEstimated = true;
            }
        }
        if (rectHeight == null) rectHeight = $942f06a693c162e2$var$DEFAULT_HEIGHT;
        let rect = this.orientation === 'horizontal' ? new (0, Rect/* Rect */.r)(x, y, rectHeight, width) : new (0, Rect/* Rect */.r)(x, y, width, rectHeight);
        let layoutInfo = new (0, $eb6255cbf080eb7d$export$7e0eeb9da702a085)(node.type, node.key, rect);
        layoutInfo.estimatedSize = isEstimated;
        return {
            layoutInfo: layoutInfo,
            children: [],
            validRect: layoutInfo.rect.intersection(this.requestedRect),
            node: node
        };
    }
    updateItemSize(key, size) {
        let layoutNode = this.layoutNodes.get(key);
        // If no layoutInfo, item has been deleted/removed.
        if (!layoutNode) return false;
        let collection = this.virtualizer.collection;
        let layoutInfo = layoutNode.layoutInfo;
        let offsetProperty = this.orientation === 'horizontal' ? 'x' : 'y';
        let heightProperty = this.orientation === 'horizontal' ? 'width' : 'height';
        layoutInfo.estimatedSize = false;
        if (layoutInfo.rect[heightProperty] !== size[heightProperty]) {
            // Copy layout info rather than mutating so that later caches are invalidated.
            let newLayoutInfo = layoutInfo.copy();
            newLayoutInfo.rect[heightProperty] = size[heightProperty];
            layoutNode.layoutInfo = newLayoutInfo;
            // Items after this layoutInfo will need to be repositioned to account for the new height.
            // Adjust the validRect so that only items above remain valid.
            this.validRect[heightProperty] = Math.min(this.validRect[heightProperty], layoutInfo.rect[offsetProperty] - this.validRect[offsetProperty]);
            // The requestedRect also needs to be adjusted to account for the height difference.
            if (layoutNode.node?.type === 'item') this.requestedRect[heightProperty] += newLayoutInfo.rect[heightProperty] - layoutInfo.rect[heightProperty];
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
        if (target.dropPosition === 'before') rect = this.orientation === 'horizontal' ? new (0, Rect/* Rect */.r)(Math.max(0, layoutInfo.rect.x - this.dropIndicatorThickness / 2), layoutInfo.rect.y, this.dropIndicatorThickness, layoutInfo.rect.height) : new (0, Rect/* Rect */.r)(layoutInfo.rect.x, Math.max(0, layoutInfo.rect.y - this.dropIndicatorThickness / 2), layoutInfo.rect.width, this.dropIndicatorThickness);
        else if (target.dropPosition === 'after') {
            // Render after last visible descendant of the drop target.
            let targetNode = this.collection.getItem(target.key);
            if (targetNode) {
                let targetLevel = targetNode.level ?? 0;
                let currentKey = this.collection.getKeyAfter(target.key);
                while(currentKey != null){
                    let node = this.collection.getItem(currentKey);
                    if (!node || node.level <= targetLevel) break;
                    layoutInfo = this.getLayoutInfo(currentKey) || layoutInfo;
                    currentKey = this.collection.getKeyAfter(currentKey);
                }
            }
            rect = this.orientation === 'horizontal' ? new (0, Rect/* Rect */.r)(layoutInfo.rect.maxX - this.dropIndicatorThickness / 2, layoutInfo.rect.y, this.dropIndicatorThickness, layoutInfo.rect.height) : new (0, Rect/* Rect */.r)(layoutInfo.rect.x, layoutInfo.rect.maxY - this.dropIndicatorThickness / 2, layoutInfo.rect.width, this.dropIndicatorThickness);
        } else rect = layoutInfo.rect;
        return new (0, $eb6255cbf080eb7d$export$7e0eeb9da702a085)('dropIndicator', target.key + ':' + target.dropPosition, rect);
    }
}
function $942f06a693c162e2$var$toArray(collection, predicate) {
    const result = [];
    for (const node of collection)if (predicate(node)) result.push(node);
    return result;
}



//# sourceMappingURL=ListLayout.mjs.map


/***/ },

/***/ 75266
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ $b88f793813fc795e$export$baf26146a414f24a)
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
 */ class $b88f793813fc795e$export$baf26146a414f24a {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    /**
   * Returns a copy of this point.
   */ copy() {
        return new $b88f793813fc795e$export$baf26146a414f24a(this.x, this.y);
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
}



//# sourceMappingURL=Point.mjs.map


/***/ },

/***/ 14150
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ $af827553fd3cf456$export$c79fc6492f3af13d)
/* harmony export */ });
/* harmony import */ var _Point_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75266);


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
class $af827553fd3cf456$export$c79fc6492f3af13d {
    constructor(x = 0, y = 0, width = 0, height = 0){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
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
   *
   * @param rect - The rectangle to check.
   */ intersects(rect) {
        let isTestEnv =  false && 0;
        return (isTestEnv || this.area > 0 && rect.area > 0) && this.x <= rect.x + rect.width && rect.x <= this.x + this.width && this.y <= rect.y + rect.height && rect.y <= this.y + this.height;
    }
    /**
   * Returns whether this rectangle fully contains another rectangle.
   *
   * @param rect - The rectangle to check.
   */ containsRect(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.maxX >= rect.maxX && this.maxY >= rect.maxY;
    }
    /**
   * Returns whether the rectangle contains the given point.
   *
   * @param point - The point to check.
   */ containsPoint(point) {
        return this.x <= point.x && this.y <= point.y && this.maxX >= point.x && this.maxY >= point.y;
    }
    /**
   * Returns the first corner of this rectangle (from top to bottom, left to right)
   * that is contained in the given rectangle, or null of the rectangles do not intersect.
   *
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
        return new $af827553fd3cf456$export$c79fc6492f3af13d(x, y, width, height);
    }
    /**
   * Returns the intersection of this Rect with another.
   * If the rectangles do not intersect, an all zero Rect is returned.
   */ intersection(other) {
        if (!this.intersects(other)) return new $af827553fd3cf456$export$c79fc6492f3af13d(0, 0, 0, 0);
        let x = Math.max(this.x, other.x);
        let y = Math.max(this.y, other.y);
        return new $af827553fd3cf456$export$c79fc6492f3af13d(x, y, Math.min(this.maxX, other.maxX) - x, Math.min(this.maxY, other.maxY) - y);
    }
    /**
   * Returns a copy of this rectangle.
   */ copy() {
        return new $af827553fd3cf456$export$c79fc6492f3af13d(this.x, this.y, this.width, this.height);
    }
}



//# sourceMappingURL=Rect.mjs.map


/***/ },

/***/ 82295
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec)
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
 */ class $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec {
    constructor(width = 0, height = 0){
        this.width = Math.max(width, 0);
        this.height = Math.max(height, 0);
    }
    /**
   * Returns a copy of this size.
   */ copy() {
        return new $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec(this.width, this.height);
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
}



//# sourceMappingURL=Size.mjs.map


/***/ }

}]);