"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5224],{

/***/ 57653
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $4fcfe18fac72dabd$export$2de4954e8ae13b9f),
/* harmony export */   k: () => (/* binding */ $4fcfe18fac72dabd$export$746d02f47f4d381)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react_aria_filterDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46683);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




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


const $4fcfe18fac72dabd$export$2de4954e8ae13b9f = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    placement: 'bottom'
});
const $4fcfe18fac72dabd$export$746d02f47f4d381 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function OverlayArrow(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $4fcfe18fac72dabd$export$2de4954e8ae13b9f);
    let placement = props.placement;
    let style = {
        position: 'absolute',
        transform: placement === 'top' || placement === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)'
    };
    if (placement != null) style[placement] = '100%';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        defaultClassName: 'react-aria-OverlayArrow',
        values: {
            placement: placement
        }
    });
    // remove undefined values from renderProps.style object so that it can be
    // spread merged with the other style object
    if (renderProps.style) Object.keys(renderProps.style).forEach((key)=>renderProps.style[key] === undefined && delete renderProps.style[key]);
    let DOMProps = (0, react_aria_filterDOMProps__WEBPACK_IMPORTED_MODULE_1__/* .filterDOMProps */ .$)(props);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).div, {
        ...DOMProps,
        ...renderProps,
        style: {
            ...style,
            ...renderProps.style
        },
        ref: ref,
        "data-placement": placement
    });
});



//# sourceMappingURL=OverlayArrow.mjs.map


/***/ },

/***/ 14488
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gX: () => (/* binding */ $72abaeab4d80592f$export$9fc1347d4195ccb3)
/* harmony export */ });
/* unused harmony exports PortalContext, UNSAFE_PortalProvider */
/* unused harmony import specifier */ var $9DQBE$react;
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
const $72abaeab4d80592f$export$60d741e20e0aa309 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function $72abaeab4d80592f$export$78efe591171d7d45(props) {
    let { getContainer: getContainer } = props;
    let { getContainer: ctxGetContainer } = $72abaeab4d80592f$export$9fc1347d4195ccb3();
    return /*#__PURE__*/ (0, $9DQBE$react).createElement($72abaeab4d80592f$export$60d741e20e0aa309.Provider, {
        value: {
            getContainer: getContainer === null ? undefined : getContainer ?? ctxGetContainer
        }
    }, props.children);
}
function $72abaeab4d80592f$export$9fc1347d4195ccb3() {
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($72abaeab4d80592f$export$60d741e20e0aa309) ?? {};
}



//# sourceMappingURL=PortalProvider.mjs.map


/***/ },

/***/ 42686
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ $22e2f5f6490788e8$export$f6211563215e3b37),
/* harmony export */   o: () => (/* binding */ $22e2f5f6490788e8$export$18fc8428861184da)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1612);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62975);
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


const $22e2f5f6490788e8$export$f6211563215e3b37 = new WeakMap();
function $22e2f5f6490788e8$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef, isOpen: isOpen, onClose: onClose } = opts;
    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isOpen || onClose === null) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e);
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .nodeContains */ .sD)(target, triggerRef.current)) return;
            // Ignore scroll events on any input or textarea as the cursor position can cause it to scroll
            // such as in a combobox. Clicking the dropdown button places focus on the input, and if the
            // text inside the input extends beyond the 'end', then it will scroll so the cursor is visible at the end.
            if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
            let onCloseHandler = onClose || $22e2f5f6490788e8$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        return (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .addEvent */ .W2)((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getPropagationTargets */ .vK)(triggerRef.current), 'scroll', onScroll, true);
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}



//# sourceMappingURL=useCloseOnScroll.mjs.map


/***/ },

/***/ 49902
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ $b3526bc71400be8d$export$d39e1813b3bdd0e1)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/platform.mjs
var platform = __webpack_require__(87082);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/number.mjs
var number = __webpack_require__(95677);
;// ./node_modules/react-aria/dist/private/overlays/calculatePosition.mjs




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


const $954926fb6168ae2a$var$AXIS = {
    top: 'top',
    bottom: 'top',
    left: 'left',
    right: 'left'
};
const $954926fb6168ae2a$var$FLIPPED_DIRECTION = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const $954926fb6168ae2a$var$CROSS_AXIS = {
    top: 'left',
    left: 'top'
};
const $954926fb6168ae2a$var$AXIS_SIZE = {
    top: 'height',
    left: 'width'
};
const $954926fb6168ae2a$var$TOTAL_SIZE = {
    width: 'totalWidth',
    height: 'totalHeight'
};
const $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE = {};
let $954926fb6168ae2a$var$getVisualViewport = ()=>typeof document !== 'undefined' ? window.visualViewport : null;
function $954926fb6168ae2a$var$getContainerDimensions(containerNode, visualViewport) {
    let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
    let scroll = {};
    let isPinchZoomedIn = (visualViewport?.scale ?? 1) > 1;
    // In the case where the container is `html` or `body` and the container doesn't have something like `position: relative`,
    // then position absolute will be positioned relative to the viewport, also known as the `initial containing block`.
    // That's why we use the visual viewport instead.
    if (containerNode.tagName === 'BODY' || containerNode.tagName === 'HTML') {
        let documentElement = document.documentElement;
        totalWidth = documentElement.clientWidth;
        totalHeight = documentElement.clientHeight;
        width = visualViewport?.width ?? totalWidth;
        height = visualViewport?.height ?? totalHeight;
        scroll.top = documentElement.scrollTop || containerNode.scrollTop;
        scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
        // The goal of the below is to get a top/left value that represents the top/left of the visual viewport with
        // respect to the layout viewport origin. This combined with the scrollTop/scrollLeft will allow us to calculate
        // coordinates/values with respect to the visual viewport or with respect to the layout viewport.
        if (visualViewport) {
            top = visualViewport.offsetTop;
            left = visualViewport.offsetLeft;
        }
    } else {
        ({ width: width, height: height, top: top, left: left } = $954926fb6168ae2a$var$getOffset(containerNode, false));
        scroll.top = containerNode.scrollTop;
        scroll.left = containerNode.scrollLeft;
        totalWidth = width;
        totalHeight = height;
    }
    if ((0, platform/* isWebKit */.Tc)() && (containerNode.tagName === 'BODY' || containerNode.tagName === 'HTML') && isPinchZoomedIn) {
        // Safari will report a non-zero scrollTop/Left for the non-scrolling body/HTML element when pinch zoomed in unlike other browsers.
        // Set to zero for parity calculations so we get consistent positioning of overlays across all browsers.
        // Also switch to visualViewport.pageTop/pageLeft so that we still accomodate for scroll positioning for body/HTML elements that are actually scrollable
        // before pinch zoom happens
        scroll.top = 0;
        scroll.left = 0;
        top = visualViewport?.pageTop ?? 0;
        left = visualViewport?.pageLeft ?? 0;
    }
    return {
        width: width,
        height: height,
        totalWidth: totalWidth,
        totalHeight: totalHeight,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $954926fb6168ae2a$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
// Determines the amount of space required when moving the overlay to ensure it remains in the boundary
function $954926fb6168ae2a$var$getDelta(axis, offset, size, // The dimensions of the boundary element that the popover is
// positioned within (most of the time this is the <body>).
boundaryDimensions, // The dimensions of the containing block element that the popover is
// positioned relative to (e.g. parent with position: relative).
// Usually this is the same as the boundary element, but if the popover
// is portaled somewhere other than the body and has an ancestor with
// position: relative/absolute, it will be different.
containerDimensions, padding, containerOffsetWithBoundary) {
    let containerScroll = containerDimensions.scroll[axis] ?? 0;
    // The height/width of the boundary. Matches the axis along which we are adjusting the overlay position
    let boundarySize = boundaryDimensions[$954926fb6168ae2a$var$AXIS_SIZE[axis]];
    // Calculate the edges of the boundary (accomodating for the boundary padding) and the edges of the overlay.
    // Note that these values are with respect to the visual viewport (aka 0,0 is the top left of the viewport)
    let boundaryStartEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + padding;
    let boundaryEndEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + boundarySize - padding;
    // transformed value of the left edge of the overlay
    let startEdgeOffset = offset - containerScroll + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[$954926fb6168ae2a$var$AXIS[axis]];
    // transformed value of the right edge of the overlay
    let endEdgeOffset = offset - containerScroll + size + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[$954926fb6168ae2a$var$AXIS[axis]];
    // If any of the overlay edges falls outside of the boundary, shift the overlay the required amount to align one of the overlay's
    // edges with the closest boundary edge.
    if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
    else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
    else return 0;
}
function $954926fb6168ae2a$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $954926fb6168ae2a$var$parsePlacement(input) {
    if ($954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input]) return $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(' ');
    let axis = $954926fb6168ae2a$var$AXIS[placement] || 'right';
    let crossAxis = $954926fb6168ae2a$var$CROSS_AXIS[axis];
    if (!$954926fb6168ae2a$var$AXIS[crossPlacement]) crossPlacement = 'center';
    let size = $954926fb6168ae2a$var$AXIS_SIZE[axis];
    let crossSize = $954926fb6168ae2a$var$AXIS_SIZE[crossAxis];
    $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input];
}
function $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions) {
    let { placement: placement, crossPlacement: crossPlacement, axis: axis, crossAxis: crossAxis, size: size, crossSize: crossSize } = placementInfo;
    let position = {};
    // button position
    position[crossAxis] = childOffset[crossAxis] ?? 0;
    if (crossPlacement === 'center') //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += ((childOffset[crossSize] ?? 0) - (overlaySize[crossSize] ?? 0)) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += (childOffset[crossSize] ?? 0) - (overlaySize[crossSize] ?? 0);
     /* else {
    the overlay top should match the button top
  } */ 
    position[crossAxis] += crossOffset;
    // overlay top or left overlapping arrow with button bottom or right
    const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
    // overlay bottom or right overlapping arrow with button top or left
    const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
    position[crossAxis] = (0, number/* clamp */.qE)(position[crossAxis], minPosition, maxPosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container.
        let containerHeight = isContainerPositioned ? containerDimensions[size] : containerDimensions[$954926fb6168ae2a$var$TOTAL_SIZE[size]];
        position[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $954926fb6168ae2a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport) {
    // For cases where position is set via "bottom" instead of "top", we need to calculate the true overlay top
    // with respect to the container.
    let overlayTop = (position.top != null ? position.top : containerDimensions[$954926fb6168ae2a$var$TOTAL_SIZE.height] - (position.bottom ?? 0) - overlayHeight) - (containerDimensions.scroll.top ?? 0);
    // calculate the dimentions of the "boundingRect" which is most restrictive top/bottom of the boundaryRect and the visual view port
    let boundaryToContainerTransformOffset = isContainerDescendentOfBoundary ? containerOffsetWithBoundary.top : 0;
    let boundingRect = {
        // This should be boundary top in container coord system vs viewport top in container coord system
        // For the viewport top, there are several cases
        // 1. pinchzoom case where we want the viewports offset top as top here
        // 2. case where container is offset from the boundary and is contained by the boundary. In this case the top we want here is NOT 0, we want to take boundary's top even though is is a negative number OR the visual viewport, whichever is more restrictive
        top: Math.max(boundaryDimensions.top + boundaryToContainerTransformOffset, (visualViewport?.offsetTop ?? boundaryDimensions.top) + boundaryToContainerTransformOffset),
        bottom: Math.min(boundaryDimensions.top + boundaryDimensions.height + boundaryToContainerTransformOffset, (visualViewport?.offsetTop ?? 0) + (visualViewport?.height ?? 0))
    };
    let maxHeight = heightGrowthDirection !== 'top' ? Math.max(0, boundingRect.bottom - // this is the bottom of the boundary
    overlayTop - // this is the top of the overlay
    ((margins.top ?? 0) + (margins.bottom ?? 0) + padding // save additional space for margin and padding
    )) : Math.max(0, overlayTop + overlayHeight - // this is the bottom of the overlay
    boundingRect.top - // this is the top of the boundary
    ((margins.top ?? 0) + (margins.bottom ?? 0) + padding // save additional space for margin and padding
    ));
    return maxHeight;
}
function $954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo, containerDimensions, isContainerDescendentOfBoundary) {
    let { placement: placement, axis: axis, size: size } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - // trigger start
    (containerDimensions.scroll[axis] ?? 0) - // transform trigger position to be with respect to viewport 0,0
    (boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0)) - // boundary start
    (margins[axis] ?? 0) - // margins usually for arrows or other decorations
    margins[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] - padding); // padding between overlay and boundary
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0) - childOffset[axis] - childOffset[size] + (containerDimensions.scroll[axis] ?? 0) - (margins[axis] ?? 0) - margins[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $954926fb6168ae2a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport) {
    let placementInfo = $954926fb6168ae2a$var$parsePlacement(placementInput);
    let { size: size, crossAxis: crossAxis, crossSize: crossSize, placement: placement, crossPlacement: crossPlacement } = placementInfo;
    let position = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
    let normalizedOffset = offset;
    let space = $954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo, containerDimensions, isContainerDescendentOfBoundary);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && overlaySize[size] > space) {
        let flippedPlacementInfo = $954926fb6168ae2a$var$parsePlacement(`${$954926fb6168ae2a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
        let flippedSpace = $954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo, containerDimensions, isContainerDescendentOfBoundary);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    // Determine the direction the height of the overlay can grow so that we can choose how to calculate the max height
    let heightGrowthDirection = 'bottom';
    if (placementInfo.axis === 'top') {
        if (placementInfo.placement === 'top') heightGrowthDirection = 'top';
        else if (placementInfo.placement === 'bottom') heightGrowthDirection = 'bottom';
    } else if (placementInfo.crossAxis === 'top') {
        if (placementInfo.crossPlacement === 'top') heightGrowthDirection = 'bottom';
        else if (placementInfo.crossPlacement === 'bottom') heightGrowthDirection = 'top';
    }
    let delta = $954926fb6168ae2a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let maxHeight = $954926fb6168ae2a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
    delta = $954926fb6168ae2a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let arrowPosition = {};
    // All values are transformed so that 0 is at the top/left of the overlay depending on the orientation
    // Prefer the arrow being in the center of the trigger/overlay anchor element
    // childOffset[crossAxis] + .5 * childOffset[crossSize] = absolute position with respect to the trigger's coordinate system that would place the arrow in the center of the trigger
    // position[crossAxis] - margins[AXIS[crossAxis]] = value use to transform the position to a value with respect to the overlay's coordinate system. A child element's (aka arrow) position absolute's "0"
    // is positioned after the margin of its parent (aka overlay) so we need to subtract it to get the proper coordinate transform
    let origin = childOffset[crossAxis] - position[crossAxis] - margins[$954926fb6168ae2a$var$AXIS[crossAxis]];
    let preferredArrowPosition = origin + 0.5 * childOffset[crossSize];
    // Min/Max position limits for the arrow with respect to the overlay
    const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
    // overlaySize[crossSize] - margins = true size of the overlay
    const overlayMargin = $954926fb6168ae2a$var$AXIS[crossAxis] === 'left' ? (margins.left ?? 0) + (margins.right ?? 0) : (margins.top ?? 0) + (margins.bottom ?? 0);
    const arrowMaxPosition = overlaySize[crossSize] - overlayMargin - arrowSize / 2 - arrowBoundaryOffset;
    // Min/Max position limits for the arrow with respect to the trigger/overlay anchor element
    // Same margin accomodation done here as well as for the preferredArrowPosition
    const arrowOverlappingChildMinEdge = childOffset[crossAxis] + arrowSize / 2 - (position[crossAxis] + margins[$954926fb6168ae2a$var$AXIS[crossAxis]]);
    const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - arrowSize / 2 - (position[crossAxis] + margins[$954926fb6168ae2a$var$AXIS[crossAxis]]);
    // Clamp the arrow positioning so that it always is within the bounds of the anchor and the overlay
    const arrowPositionOverlappingChild = (0, number/* clamp */.qE)(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
    arrowPosition[crossAxis] = (0, number/* clamp */.qE)(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
    // If there is an arrow, use that as the origin so that animations are smooth.
    // Otherwise use the target edge.
    ({ placement: placement, crossPlacement: crossPlacement } = placementInfo);
    if (arrowSize) origin = arrowPosition[crossAxis];
    else if (crossPlacement === 'right') origin += childOffset[crossSize];
    else if (crossPlacement === 'center') origin += childOffset[crossSize] / 2;
    let crossOrigin = placement === 'left' || placement === 'top' ? overlaySize[size] : 0;
    let triggerAnchorPoint = {
        x: placement === 'top' || placement === 'bottom' ? origin : crossOrigin,
        y: placement === 'left' || placement === 'right' ? origin : crossOrigin
    };
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placement,
        triggerAnchorPoint: triggerAnchorPoint
    };
}
function $954926fb6168ae2a$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement, targetNode: targetNode, overlayNode: overlayNode, scrollNode: scrollNode, padding: padding, shouldFlip: shouldFlip, boundaryElement: boundaryElement, offset: offset, crossOffset: crossOffset, maxHeight: maxHeight, arrowSize: arrowSize = 0, arrowBoundaryOffset: arrowBoundaryOffset = 0, targetRect: targetRect } = opts;
    let visualViewport = $954926fb6168ae2a$var$getVisualViewport();
    let container = overlayNode instanceof HTMLElement ? $954926fb6168ae2a$var$getContainingBlock(overlayNode) : document.documentElement;
    let isViewportContainer = container === document.documentElement;
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
    let childOffset = isViewportContainer ? $954926fb6168ae2a$var$getOffset(targetNode, false, targetRect) : $954926fb6168ae2a$var$getPosition(targetNode, container, false, targetRect);
    if (!isViewportContainer) {
        let { marginTop: marginTop, marginLeft: marginLeft } = window.getComputedStyle(targetNode);
        childOffset.top += parseInt(marginTop, 10) || 0;
        childOffset.left += parseInt(marginLeft, 10) || 0;
    }
    let overlaySize = $954926fb6168ae2a$var$getOffset(overlayNode, true);
    let margins = $954926fb6168ae2a$var$getMargins(overlayNode);
    overlaySize.width += (margins.left ?? 0) + (margins.right ?? 0);
    overlaySize.height += (margins.top ?? 0) + (margins.bottom ?? 0);
    let scrollSize = $954926fb6168ae2a$var$getScroll(scrollNode);
    // Note that due to logic inside getContainerDimensions, for cases where the boundary element is the body, we will return
    // a height/width that matches the visual viewport size rather than the body's height/width (aka for zoom it will be zoom adjusted size)
    // and a top/left that is adjusted as well (will return the top/left of the zoomed in viewport, or 0,0 for a non-zoomed body)
    // Otherwise this returns the height/width of a arbitrary boundary element, and its top/left with respect to the viewport (NOTE THIS MEANS IT DOESNT INCLUDE SCROLL)
    let boundaryDimensions = $954926fb6168ae2a$var$getContainerDimensions(boundaryElement, visualViewport);
    let containerDimensions = $954926fb6168ae2a$var$getContainerDimensions(container, visualViewport);
    // There are several difference cases of how to calculate the containerOffsetWithBoundary:
    // - boundaryElement is body or HTML and the container is an arbitrary element in the boundary (aka submenu with parent menu as container in v3)
    // - boundaryElement and container are both body or HTML element (aka standard popover case)
    // - boundaryElement is customized by the user. Container can also be arbitrary (either body/HTML or some other element)
    // containerOffsetWithBoundary should always return a value that is the boundary's coordinate offset with respect to the container coord system (container is 0, 0)
    let containerOffsetWithBoundary;
    if ((boundaryElement.tagName === 'BODY' || boundaryElement.tagName === 'HTML') && !isViewportContainer) {
        // Use getRect instead of getOffset because boundaryDimensions for BODY/HTML is in viewport coordinate space,
        // not document coordinate space
        let containerRect = $954926fb6168ae2a$export$4b834cebd9e5cebe(container, false);
        // the offset should be negative because if container is at viewport position x,y, then viewport top (aka 0)
        // is at position -x,y in container-relative coordinates
        containerOffsetWithBoundary = {
            top: -(containerRect.top - boundaryDimensions.top),
            left: -(containerRect.left - boundaryDimensions.left),
            width: 0,
            height: 0
        };
    } else if ((boundaryElement.tagName === 'BODY' || boundaryElement.tagName === 'HTML') && isViewportContainer) // both are the same viewport container, no offset needed
    containerOffsetWithBoundary = {
        top: 0,
        left: 0,
        width: 0,
        height: 0
    };
    else // This returns the boundary's coordinate with respect to the container. This case captures cases such as when you provide a custom boundary
    // like in ScrollingBoundaryContainerExample in Popover.stories.
    containerOffsetWithBoundary = $954926fb6168ae2a$var$getPosition(boundaryElement, container, false);
    let isContainerDescendentOfBoundary = (0, DOMFunctions/* nodeContains */.sD)(boundaryElement, container);
    return $954926fb6168ae2a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport);
}
function $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale) {
    let { top: top, left: left, width: width, height: height } = node.getBoundingClientRect();
    // Use offsetWidth and offsetHeight if this is an HTML element, so that
    // the size is not affected by scale transforms.
    if (ignoreScale && node instanceof node.ownerDocument.defaultView.HTMLElement) {
        width = node.offsetWidth;
        height = node.offsetHeight;
    }
    return {
        top: top,
        left: left,
        width: width,
        height: height
    };
}
function $954926fb6168ae2a$var$getOffset(node, ignoreScale, overrideRect) {
    let { top: top, left: left, width: width, height: height } = overrideRect || $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale);
    let { scrollTop: scrollTop, scrollLeft: scrollLeft, clientTop: clientTop, clientLeft: clientLeft } = document.documentElement;
    return {
        top: top + scrollTop - clientTop,
        left: left + scrollLeft - clientLeft,
        width: width,
        height: height
    };
}
function $954926fb6168ae2a$var$getPosition(node, parent, ignoreScale, overrideRect) {
    let style = window.getComputedStyle(node);
    let offset;
    if (style.position === 'fixed') offset = overrideRect || $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale);
    else {
        offset = $954926fb6168ae2a$var$getOffset(node, ignoreScale, overrideRect);
        let parentOffset = $954926fb6168ae2a$var$getOffset(parent, ignoreScale);
        let parentStyle = window.getComputedStyle(parent);
        parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
        parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
        offset.top -= parentOffset.top;
        offset.left -= parentOffset.left;
    }
    offset.top -= parseInt(style.marginTop, 10) || 0;
    offset.left -= parseInt(style.marginLeft, 10) || 0;
    return offset;
}
// Returns the containing block of an element, which is the element that
// this element will be positioned relative to.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
function $954926fb6168ae2a$var$getContainingBlock(node) {
    // The offsetParent of an element in most cases equals the containing block.
    // https://w3c.github.io/csswg-drafts/cssom-view/#dom-htmlelement-offsetparent
    let offsetParent = node.offsetParent;
    // The offsetParent algorithm terminates at the document body,
    // even if the body is not a containing block. Double check that
    // and use the documentElement if so.
    if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === 'static' && !$954926fb6168ae2a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
    // TODO(later): handle table elements?
    // The offsetParent can be null if the element has position: fixed, or a few other cases.
    // We have to walk up the tree manually in this case because fixed positioned elements
    // are still positioned relative to their containing block, which is not always the viewport.
    if (offsetParent == null) {
        offsetParent = node.parentElement;
        while(offsetParent && !$954926fb6168ae2a$var$isContainingBlock(offsetParent))offsetParent = offsetParent.parentElement;
    }
    // Fall back to the viewport.
    return offsetParent || document.documentElement;
}
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
function $954926fb6168ae2a$var$isContainingBlock(node) {
    let style = window.getComputedStyle(node);
    return style.transform !== 'none' || /transform|perspective/.test(style.willChange) || style.filter !== 'none' || style.contain === 'paint' || 'backdropFilter' in style && style.backdropFilter !== 'none' || 'WebkitBackdropFilter' in style && style.WebkitBackdropFilter !== 'none';
}



//# sourceMappingURL=calculatePosition.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/useCloseOnScroll.mjs
var useCloseOnScroll = __webpack_require__(42686);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(74441);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(10494);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs








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






let $b3526bc71400be8d$var$visualViewport = typeof document !== 'undefined' ? window.visualViewport : null;
function $b3526bc71400be8d$export$d39e1813b3bdd0e1(props) {
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let { arrowSize: arrowSize, targetRef: targetRef, overlayRef: overlayRef, arrowRef: arrowRef, scrollRef: scrollRef = overlayRef, placement: placement = 'bottom', containerPadding: containerPadding = 12, shouldFlip: shouldFlip = true, boundaryElement: boundaryElement = typeof document !== 'undefined' ? document.body : null, offset: offset = 0, crossOffset: crossOffset = 0, shouldUpdatePosition: shouldUpdatePosition = true, isOpen: isOpen = true, onClose: onClose, maxHeight: maxHeight, arrowBoundaryOffset: arrowBoundaryOffset = 0, getTargetRect: getTargetRect } = props;
    let [position, setPosition] = (0, react.useState)(null);
    let deps = [
        shouldUpdatePosition,
        placement,
        // oxlint-disable-next-line react/react-compiler
        overlayRef.current,
        // oxlint-disable-next-line react/react-compiler
        targetRef.current,
        // oxlint-disable-next-line react/react-compiler
        arrowRef?.current,
        // oxlint-disable-next-line react/react-compiler
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight,
        arrowBoundaryOffset,
        arrowSize
    ];
    // Note, the position freezing breaks if body sizes itself dynamicly with the visual viewport but that might
    // just be a non-realistic use case
    // Upon opening a overlay, record the current visual viewport scale so we can freeze the overlay styles
    let lastScale = (0, react.useRef)($b3526bc71400be8d$var$visualViewport?.scale);
    (0, react.useEffect)(()=>{
        if (isOpen) lastScale.current = $b3526bc71400be8d$var$visualViewport?.scale;
    }, [
        isOpen
    ]);
    let updatePosition = (0, react.useCallback)(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !boundaryElement) return;
        if ($b3526bc71400be8d$var$visualViewport?.scale !== lastScale.current) return;
        // Determine a scroll anchor based on the focused element.
        // This stores the offset of the anchor element from the scroll container
        // so it can be restored after repositioning. This way if the overlay height
        // changes, the focused element appears to stay in the same position.
        let anchor = null;
        if (scrollRef.current && (0, DOMFunctions/* isFocusWithin */.ae)(scrollRef.current)) {
            let anchorRect = (0, DOMFunctions/* getActiveElement */.bq)()?.getBoundingClientRect();
            let scrollRect = scrollRef.current.getBoundingClientRect();
            // Anchor from the top if the offset is in the top half of the scrollable element,
            // otherwise anchor from the bottom.
            anchor = {
                type: 'top',
                offset: (anchorRect?.top ?? 0) - scrollRect.top
            };
            if (anchor.offset > scrollRect.height / 2) {
                anchor.type = 'bottom';
                anchor.offset = (anchorRect?.bottom ?? 0) - scrollRect.bottom;
            }
        }
        // Always reset the overlay's previous max height if not defined by the user so that we can compensate for
        // RAC collections populating after a second render and properly set a correct max height + positioning when it populates.
        let overlay = overlayRef.current;
        if (!maxHeight && overlayRef.current) {
            overlay.style.top = '0px';
            overlay.style.bottom = '';
            overlay.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + 'px';
        }
        let position = (0, $954926fb6168ae2a$export$b3ceb0cbf1056d98)({
            placement: $b3526bc71400be8d$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current || overlayRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight,
            arrowSize: arrowSize ?? (arrowRef?.current ? (0, $954926fb6168ae2a$export$4b834cebd9e5cebe)(arrowRef.current, true).width : 0),
            arrowBoundaryOffset: arrowBoundaryOffset,
            targetRect: getTargetRect?.(targetRef.current)
        });
        if (!position.position) return;
        // Modify overlay styles directly so positioning happens immediately without the need of a second render
        // This is so we don't have to delay autoFocus scrolling or delay applying preventScroll for popovers
        overlay.style.top = '';
        overlay.style.bottom = '';
        overlay.style.left = '';
        overlay.style.right = '';
        Object.keys(position.position).forEach((key)=>overlay.style[key] = position.position[key] + 'px');
        overlay.style.maxHeight = position.maxHeight != null ? position.maxHeight + 'px' : '';
        // Restore scroll position relative to anchor element.
        let activeElement = (0, DOMFunctions/* getActiveElement */.bq)();
        if (anchor && activeElement && scrollRef.current) {
            let anchorRect = activeElement.getBoundingClientRect();
            let scrollRect = scrollRef.current.getBoundingClientRect();
            let newOffset = anchorRect[anchor.type] - scrollRect[anchor.type];
            scrollRef.current.scrollTop += newOffset - anchor.offset;
        }
        // Trigger a set state for a second render anyway for arrow positioning
        setPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    }, deps);
    // Update position when anything changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    (0, useLayoutEffect/* useLayoutEffect */.N)(updatePosition, deps);
    // Update position on window resize
    $b3526bc71400be8d$var$useResize(updatePosition);
    // Update position when the overlay changes size (might need to flip).
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: overlayRef,
        onResize: updatePosition
    });
    // Update position when the target changes size (might need to flip).
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: targetRef,
        onResize: updatePosition
    });
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = (0, react.useRef)(false);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        // Only reposition the overlay if a scroll event happens immediately as a result of resize (aka the virtual keyboard has appears)
        // We don't want to reposition the overlay if the user has pinch zoomed in and is scrolling the viewport around.
        let onScroll = ()=>{
            if (isResizing.current) onResize();
        };
        $b3526bc71400be8d$var$visualViewport?.addEventListener('resize', onResize);
        $b3526bc71400be8d$var$visualViewport?.addEventListener('scroll', onScroll);
        return ()=>{
            $b3526bc71400be8d$var$visualViewport?.removeEventListener('resize', onResize);
            $b3526bc71400be8d$var$visualViewport?.removeEventListener('scroll', onScroll);
        };
    }, [
        updatePosition
    ]);
    let close = (0, react.useCallback)(()=>{
        if (!isResizing.current) onClose?.();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    (0, useCloseOnScroll/* useCloseOnScroll */.o)({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose && close
    });
    return {
        overlayProps: {
            style: {
                position: position ? 'absolute' : 'fixed',
                top: !position ? 0 : undefined,
                left: !position ? 0 : undefined,
                zIndex: 100000,
                ...position?.position,
                maxHeight: position?.maxHeight ?? '100vh'
            }
        },
        placement: position?.placement ?? null,
        triggerAnchorPoint: position?.triggerAnchorPoint ?? null,
        arrowProps: {
            'aria-hidden': 'true',
            role: 'presentation',
            style: {
                left: position?.arrowOffsetLeft,
                top: position?.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $b3526bc71400be8d$var$useResize(onResize) {
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        window.addEventListener('resize', onResize, false);
        return ()=>{
            window.removeEventListener('resize', onResize, false);
        };
    }, [
        onResize
    ]);
}
function $b3526bc71400be8d$var$translateRTL(position, direction) {
    if (direction === 'rtl') return position.replace('start', 'right').replace('end', 'left');
    return position.replace('start', 'left').replace('end', 'right');
}



//# sourceMappingURL=useOverlayPosition.mjs.map


/***/ },

/***/ 26855
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ $fcc7165e876206c6$export$45fda7c47f93fd48),
/* harmony export */   _: () => (/* binding */ $fcc7165e876206c6$export$6d3443f2c48bfc20)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74441);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40961);
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


function $fcc7165e876206c6$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    let isAnimationReady = isEntering && isReady;
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLayoutEffect */ .N)(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    $fcc7165e876206c6$var$useAnimation(ref, isAnimationReady, (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>setEntering(false), []));
    return isAnimationReady;
}
function $fcc7165e876206c6$export$45fda7c47f93fd48(ref, isOpen) {
    let [exitState, setExitState] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(isOpen ? 'open' : 'closed');
    switch(exitState){
        case 'open':
            // If isOpen becomes false, set the state to exiting.
            if (!isOpen) setExitState('exiting');
            break;
        case 'closed':
        case 'exiting':
            // If we are exiting and isOpen becomes true, the animation was interrupted.
            // Reset the state to open.
            if (isOpen) setExitState('open');
            break;
    }
    let isExiting = exitState === 'exiting';
    $fcc7165e876206c6$var$useAnimation(ref, isExiting, (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function $fcc7165e876206c6$var$useAnimation(ref, isActive, onEnd) {
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLayoutEffect */ .N)(()=>{
        if (isActive && ref.current) {
            if (!('getAnimations' in ref.current)) {
                // JSDOM
                onEnd();
                return;
            }
            let animations = ref.current.getAnimations();
            if (animations.length === 0) {
                onEnd();
                return;
            }
            let canceled = false;
            Promise.allSettled(animations.map((a)=>a.finished)).then(()=>{
                if (!canceled) (0, react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>{
                    onEnd();
                });
            });
            return ()=>{
                canceled = true;
            };
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}



//# sourceMappingURL=animation.mjs.map


/***/ },

/***/ 10494
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ $970072cf4b13fde3$export$683480f191c0e3ea)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);





function $970072cf4b13fde3$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $970072cf4b13fde3$export$683480f191c0e3ea(options) {
    // Only call onResize from inside the effect, otherwise we'll void our assumption that
    // useEffectEvents are safe to pass in.
    const { ref: ref, box: box, onResize: onResize } = options;
    let onResizeEvent = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useEffectEvent */ .J)(onResize);
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let element = ref?.current;
        if (!element) return;
        if (!$970072cf4b13fde3$var$hasResizeObserver()) {
            window.addEventListener('resize', onResizeEvent, false);
            return ()=>{
                window.removeEventListener('resize', onResizeEvent, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResizeEvent();
            });
            resizeObserverInstance.observe(element, {
                box: box
            });
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        ref,
        box
    ]);
}



//# sourceMappingURL=useResizeObserver.mjs.map


/***/ },

/***/ 42946
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ $f11fb0bcf1b2687a$export$61c6a8c84e605fb6)
/* harmony export */ });
/* harmony import */ var _utils_useControlledState_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32240);
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

function $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = (0, _utils_useControlledState_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useControlledState */ .P)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    let [point, setPoint] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const open = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setOpen(true);
    }, [
        setOpen
    ]);
    const close = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setOpen(false);
    }, [
        setOpen
    ]);
    const toggle = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setOpen(!isOpen);
    }, [
        setOpen,
        isOpen
    ]);
    return {
        isOpen: isOpen,
        setOpen: setOpen,
        open: open,
        close: close,
        toggle: toggle,
        point: point,
        setPoint: setPoint
    };
}



//# sourceMappingURL=useOverlayTriggerState.mjs.map


/***/ },

/***/ 32240
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $3e6197669829fe11$export$40bfa8c7b0832715)
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
// Use the earliest effect possible to reset the ref below.
const $3e6197669829fe11$var$useEarlyEffect = typeof document !== 'undefined' ? (0, react__WEBPACK_IMPORTED_MODULE_0__)['useInsertionEffect'] ?? (0, react__WEBPACK_IMPORTED_MODULE_0__).useLayoutEffect : ()=>{};
function $3e6197669829fe11$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    // Store the value in both state and a ref. The state value will only be used when uncontrolled.
    // The ref is used to track the most current value, which is passed to the function setState callback.
    let [stateValue, setStateValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || defaultValue);
    let valueRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateValue);
    let isControlledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && "production" !== 'production') // removed by dead control flow
{}
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    // After each render, update the ref to the current value.
    // This ensures that the setState callback argument is reset.
    // Note: the effect should not have any dependencies so that controlled values always reset.
    let currentValue = isControlled ? value : stateValue;
    $3e6197669829fe11$var$useEarlyEffect(()=>{
        valueRef.current = currentValue;
    });
    let [, forceUpdate] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(()=>({}), {});
    let setValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value, ...args)=>{
        // @ts-ignore - TS doesn't know that T cannot be a function.
        let newValue = typeof value === 'function' ? value(valueRef.current) : value;
        if (!Object.is(valueRef.current, newValue)) {
            // Update the ref so that the next setState callback has the most recent value.
            valueRef.current = newValue;
            setStateValue(newValue);
            // Always trigger a re-render, even when controlled, so that the layout effect above runs to reset the value.
            forceUpdate();
            // Trigger onChange. Note that if setState is called multiple times in a single event,
            // onChange will be called for each one instead of only once.
            onChange?.(newValue, ...args);
        }
    }, [
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}



//# sourceMappingURL=useControlledState.mjs.map


/***/ }

}]);