"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6244],{

/***/ 48697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ 99628:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vw: () => (/* binding */ $eaf9e70818b436db$export$3288d34c523a1192),
  CR: () => (/* binding */ $eaf9e70818b436db$export$67ea30858aaf75e3),
  LY: () => (/* binding */ $eaf9e70818b436db$export$f9fef0f55402315b)
});

// UNUSED EXPORTS: TagGroupContext, TagListContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 3 modules
var ListBox = __webpack_require__(79255);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useField.mjs
var useField = __webpack_require__(85441);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(59461);
;// ./node_modules/@react-aria/gridlist/dist/utils.mjs
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
 */ const $ce9b18daab526bbd$export$5b9bb410392e3991 = new WeakMap();
function $ce9b18daab526bbd$export$f45c25170b9a99c2(state, key) {
    var _listMap_get;
    let { id: id } = (_listMap_get = $ce9b18daab526bbd$export$5b9bb410392e3991.get(state)) !== null && _listMap_get !== void 0 ? _listMap_get : {};
    if (!id) throw new Error('Unknown list');
    return `${id}-${$ce9b18daab526bbd$export$e0c709538cb8ae18(key)}`;
}
function $ce9b18daab526bbd$export$e0c709538cb8ae18(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}



//# sourceMappingURL=utils.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/grid/dist/useHighlightSelectionDescription.mjs
var useHighlightSelectionDescription = __webpack_require__(56111);
// EXTERNAL MODULE: ./node_modules/@react-aria/grid/dist/useGridSelectionAnnouncement.mjs
var useGridSelectionAnnouncement = __webpack_require__(1256);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var useHasTabbableChild = __webpack_require__(12152);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableList.mjs
var useSelectableList = __webpack_require__(58579);
;// ./node_modules/@react-aria/gridlist/dist/useGridList.mjs






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




function $f47efb0c3a859cf2$export$664f9155035607eb(props, state, ref) {
    let { isVirtualized: isVirtualized, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, onAction: onAction, disallowTypeAhead: disallowTypeAhead, linkBehavior: linkBehavior = 'action', keyboardNavigationBehavior: keyboardNavigationBehavior = 'arrow', escapeKeyBehavior: escapeKeyBehavior = 'clearSelection', shouldSelectOnPressUp: shouldSelectOnPressUp } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: listProps } = (0, useSelectableList/* useSelectableList */.y)({
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        ref: ref,
        keyboardDelegate: keyboardDelegate,
        layoutDelegate: layoutDelegate,
        isVirtualized: isVirtualized,
        selectOnFocus: state.selectionManager.selectionBehavior === 'replace',
        shouldFocusWrap: props.shouldFocusWrap,
        linkBehavior: linkBehavior,
        disallowTypeAhead: disallowTypeAhead,
        autoFocus: props.autoFocus,
        escapeKeyBehavior: escapeKeyBehavior
    });
    let id = (0, useId/* useId */.Bi)(props.id);
    (0, $ce9b18daab526bbd$export$5b9bb410392e3991).set(state, {
        id: id,
        onAction: onAction,
        linkBehavior: linkBehavior,
        keyboardNavigationBehavior: keyboardNavigationBehavior,
        shouldSelectOnPressUp: shouldSelectOnPressUp
    });
    let descriptionProps = (0, useHighlightSelectionDescription/* useHighlightSelectionDescription */.m)({
        selectionManager: state.selectionManager,
        hasItemActions: !!onAction
    });
    let hasTabbableChild = (0, useHasTabbableChild/* useHasTabbableChild */.$)(ref, {
        isDisabled: state.collection.size !== 0
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let gridProps = (0, mergeProps/* mergeProps */.v)(domProps, {
        role: 'grid',
        id: id,
        'aria-multiselectable': state.selectionManager.selectionMode === 'multiple' ? 'true' : undefined
    }, // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    state.collection.size === 0 ? {
        tabIndex: hasTabbableChild ? -1 : 0
    } : listProps, descriptionProps);
    if (isVirtualized) {
        gridProps['aria-rowcount'] = state.collection.size;
        gridProps['aria-colcount'] = 1;
    }
    (0, useGridSelectionAnnouncement/* useGridSelectionAnnouncement */.H)({}, state);
    return {
        gridProps: gridProps
    };
}



//# sourceMappingURL=useGridList.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./node_modules/@react-aria/tag/dist/useTagGroup.mjs








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






const $d7323bca8d074eeb$export$653eddfc964b0f8a = new WeakMap();
function $d7323bca8d074eeb$export$4f8b5cda58b7e8ff(props, state, ref) {
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let keyboardDelegate = props.keyboardDelegate || new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)({
        collection: state.collection,
        ref: ref,
        orientation: 'horizontal',
        direction: direction,
        disabledKeys: state.disabledKeys,
        disabledBehavior: state.selectionManager.disabledBehavior
    });
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useField/* useField */.M)({
        ...props,
        labelElementType: 'span'
    });
    let { gridProps: gridProps } = (0, $f47efb0c3a859cf2$export$664f9155035607eb)({
        ...props,
        ...fieldProps,
        keyboardDelegate: keyboardDelegate,
        shouldFocusWrap: true,
        linkBehavior: 'override',
        keyboardNavigationBehavior: 'tab'
    }, state, ref);
    let [isFocusWithin, setFocusWithin] = (0, react.useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        onFocusWithinChange: setFocusWithin
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    // If the last tag is removed, focus the container.
    let prevCount = (0, react.useRef)(state.collection.size);
    (0, react.useEffect)(()=>{
        if (ref.current && prevCount.current > 0 && state.collection.size === 0 && isFocusWithin) ref.current.focus();
        prevCount.current = state.collection.size;
    }, [
        state.collection.size,
        isFocusWithin,
        ref
    ]);
    $d7323bca8d074eeb$export$653eddfc964b0f8a.set(state, {
        onRemove: props.onRemove
    });
    return {
        gridProps: (0, mergeProps/* mergeProps */.v)(gridProps, domProps, {
            role: state.collection.size ? 'grid' : null,
            'aria-atomic': false,
            'aria-relevant': 'additions',
            'aria-live': isFocusWithin ? 'polite' : 'off',
            ...focusWithinProps,
            ...fieldProps
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}



//# sourceMappingURL=useTagGroup.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
;// ./node_modules/@react-aria/tag/dist/ar-AE.mjs
var $84925f526f90eebd$exports = {};
$84925f526f90eebd$exports = {
    "removeButtonLabel": `\u{625}\u{632}\u{627}\u{644}\u{629}`,
    "removeDescription": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D} DELETE \u{644}\u{625}\u{632}\u{627}\u{644}\u{629} \u{639}\u{644}\u{627}\u{645}\u{629}.`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/tag/dist/bg-BG.mjs
var $c0650163dc1b6f9d$exports = {};
$c0650163dc1b6f9d$exports = {
    "removeButtonLabel": `\u{41F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{432}\u{430}\u{43D}\u{435}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Delete, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{43D}\u{435}\u{442}\u{435} \u{43C}\u{430}\u{440}\u{43A}\u{435}\u{440}\u{430}.`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/tag/dist/cs-CZ.mjs
var $b2b55661291de587$exports = {};
$b2b55661291de587$exports = {
    "removeButtonLabel": `Odebrat`,
    "removeDescription": `Stisknut\xedm kl\xe1vesy Delete odeberete zna\u{10D}ku.`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/tag/dist/da-DK.mjs
var $deb83970956f6d5b$exports = {};
$deb83970956f6d5b$exports = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Tryk p\xe5 Slet for at fjerne tag.`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/tag/dist/de-DE.mjs
var $aea1cb4c7ec97e1c$exports = {};
$aea1cb4c7ec97e1c$exports = {
    "removeButtonLabel": `Entfernen`,
    "removeDescription": `Auf \u{201E}L\xf6schen\u{201C} dr\xfccken, um das Tag zu entfernen.`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/tag/dist/el-GR.mjs
var $3618d917e503a8d3$exports = {};
$3618d917e503a8d3$exports = {
    "removeButtonLabel": `\u{39A}\u{3B1}\u{3C4}\u{3AC}\u{3C1}\u{3B3}\u{3B7}\u{3C3}\u{3B7}`,
    "removeDescription": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{394}\u{3B9}\u{3B1}\u{3B3}\u{3C1}\u{3B1}\u{3C6}\u{3AE} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BA}\u{3B1}\u{3C4}\u{3B1}\u{3C1}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C4}\u{3B9}\u{3BA}\u{3AD}\u{3C4}\u{3B1}.`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/tag/dist/en-US.mjs
var $9eb56bbbe8e31294$exports = {};
$9eb56bbbe8e31294$exports = {
    "removeDescription": `Press Delete to remove tag.`,
    "removeButtonLabel": `Remove`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/tag/dist/es-ES.mjs
var $361c604b0fc269a3$exports = {};
$361c604b0fc269a3$exports = {
    "removeButtonLabel": `Quitar`,
    "removeDescription": `Pulse Eliminar para quitar la etiqueta.`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/tag/dist/et-EE.mjs
var $2f00170f4ee3ca01$exports = {};
$2f00170f4ee3ca01$exports = {
    "removeButtonLabel": `Eemalda`,
    "removeDescription": `Sildi eemaldamiseks vajutage kustutusklahvi Delete.`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/tag/dist/fi-FI.mjs
var $80ee16b64fab9fb5$exports = {};
$80ee16b64fab9fb5$exports = {
    "removeButtonLabel": `Poista`,
    "removeDescription": `Poista tunniste painamalla Poista-painiketta.`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/tag/dist/fr-FR.mjs
var $be9d354476c08087$exports = {};
$be9d354476c08087$exports = {
    "removeButtonLabel": `Supprimer`,
    "removeDescription": `Appuyez sur Supprimer pour supprimer l\u{2019}\xe9tiquette.`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/tag/dist/he-IL.mjs
var $ffeb903ba092eb35$exports = {};
$ffeb903ba092eb35$exports = {
    "removeButtonLabel": `\u{5D4}\u{5E1}\u{5E8}`,
    "removeDescription": `\u{5DC}\u{5D7}\u{5E5} \u{5E2}\u{5DC} \u{5DE}\u{5D7}\u{5E7} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5E1}\u{5D9}\u{5E8} \u{5EA}\u{5D2}.`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/tag/dist/hr-HR.mjs
var $1df6722c6f19728b$exports = {};
$1df6722c6f19728b$exports = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Delete za uklanjanje oznake.`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/tag/dist/hu-HU.mjs
var $093d57e325bc9071$exports = {};
$093d57e325bc9071$exports = {
    "removeButtonLabel": `Elt\xe1vol\xedt\xe1s`,
    "removeDescription": `Nyomja meg a Delete billenty\u{171}t a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/tag/dist/it-IT.mjs
var $609dbdfbcad85bdb$exports = {};
$609dbdfbcad85bdb$exports = {
    "removeButtonLabel": `Rimuovi`,
    "removeDescription": `Premi Elimina per rimuovere il tag.`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/tag/dist/ja-JP.mjs
var $c08e84f882644048$exports = {};
$c08e84f882644048$exports = {
    "removeButtonLabel": `\u{524A}\u{9664}`,
    "removeDescription": `\u{30BF}\u{30B0}\u{3092}\u{524A}\u{9664}\u{3059}\u{308B}\u{306B}\u{306F}\u{3001}Delete \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{307E}\u{3059}\u{3002}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/tag/dist/ko-KR.mjs
var $5cd130489822fa21$exports = {};
$5cd130489822fa21$exports = {
    "removeButtonLabel": `\u{C81C}\u{AC70}`,
    "removeDescription": `\u{D0DC}\u{ADF8}\u{B97C} \u{C81C}\u{AC70}\u{D558}\u{B824}\u{BA74} Delete \u{D0A4}\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/tag/dist/lt-LT.mjs
var $ab5183739b6c5e7e$exports = {};
$ab5183739b6c5e7e$exports = {
    "removeButtonLabel": `Pa\u{161}alinti`,
    "removeDescription": `Nor\u{117}dami pa\u{161}alinti \u{17E}ym\u{105}, paspauskite \u{201E}Delete\u{201C} klavi\u{161}\u{105}.`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/tag/dist/lv-LV.mjs
var $dd84a0b574be3f23$exports = {};
$dd84a0b574be3f23$exports = {
    "removeButtonLabel": `No\u{146}emt`,
    "removeDescription": `Nospiediet Delete [Dz\u{113}st], lai no\u{146}emtu tagu.`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/tag/dist/nb-NO.mjs
var $85eee97d14eef7b5$exports = {};
$85eee97d14eef7b5$exports = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Trykk p\xe5 Slett for \xe5 fjerne taggen.`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/tag/dist/nl-NL.mjs
var $18781839f93b0314$exports = {};
$18781839f93b0314$exports = {
    "removeButtonLabel": `Verwijderen`,
    "removeDescription": `Druk op Verwijderen om de tag te verwijderen.`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/tag/dist/pl-PL.mjs
var $1c40ffbbfe9f3bda$exports = {};
$1c40ffbbfe9f3bda$exports = {
    "removeButtonLabel": `Usu\u{144}`,
    "removeDescription": `Naci\u{15B}nij Usu\u{144}, aby usun\u{105}\u{107} znacznik.`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/tag/dist/pt-BR.mjs
var $156880e329b1c717$exports = {};
$156880e329b1c717$exports = {
    "removeButtonLabel": `Remover`,
    "removeDescription": `Pressione Delete para remover a tag.`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/tag/dist/pt-PT.mjs
var $b6d50b1d20768ce4$exports = {};
$b6d50b1d20768ce4$exports = {
    "removeButtonLabel": `Eliminar`,
    "removeDescription": `Prima Delete para eliminar a tag.`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/tag/dist/ro-RO.mjs
var $d8c38c691b006187$exports = {};
$d8c38c691b006187$exports = {
    "removeButtonLabel": `\xcendep\u{103}rta\u{163}i`,
    "removeDescription": `Ap\u{103}sa\u{21B}i pe Delete (\u{218}tergere) pentru a elimina eticheta.`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/tag/dist/ru-RU.mjs
var $ed9b4bf7ce1fb1d7$exports = {};
$ed9b4bf7ce1fb1d7$exports = {
    "removeButtonLabel": `\u{423}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C}`,
    "removeDescription": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} DELETE, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{443}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C} \u{442}\u{435}\u{433}.`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/tag/dist/sk-SK.mjs
var $51d8721afda4d678$exports = {};
$51d8721afda4d678$exports = {
    "removeButtonLabel": `Odstr\xe1ni\u{165}`,
    "removeDescription": `Ak chcete odstr\xe1ni\u{165} zna\u{10D}ku, stla\u{10D}te kl\xe1ves Delete.`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/tag/dist/sl-SI.mjs
var $fd37a27baae493e8$exports = {};
$fd37a27baae493e8$exports = {
    "removeButtonLabel": `Odstrani`,
    "removeDescription": `Pritisnite Delete, da odstranite oznako.`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/tag/dist/sr-SP.mjs
var $5505a1ca71ffd6f4$exports = {};
$5505a1ca71ffd6f4$exports = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Obri\u{161}i da biste uklonili oznaku.`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/tag/dist/sv-SE.mjs
var $33670e148c84ad02$exports = {};
$33670e148c84ad02$exports = {
    "removeButtonLabel": `Ta bort`,
    "removeDescription": `Tryck p\xe5 Radera f\xf6r att ta bort taggen.`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/tag/dist/tr-TR.mjs
var $0bf46fdcdd7cb5f6$exports = {};
$0bf46fdcdd7cb5f6$exports = {
    "removeButtonLabel": `Kald\u{131}r`,
    "removeDescription": `Etiketi kald\u{131}rmak i\xe7in Sil tu\u{15F}una bas\u{131}n.`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/tag/dist/uk-UA.mjs
var $9d9765222bc08ca2$exports = {};
$9d9765222bc08ca2$exports = {
    "removeButtonLabel": `\u{412}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Delete, \u{449}\u{43E}\u{431} \u{432}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438} \u{442}\u{435}\u{433}.`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/tag/dist/zh-CN.mjs
var $d737296cedcdee9f$exports = {};
$d737296cedcdee9f$exports = {
    "removeButtonLabel": `\u{5220}\u{9664}`,
    "removeDescription": `\u{6309}\u{4E0B}\u{201C}\u{5220}\u{9664}\u{201D}\u{4EE5}\u{5220}\u{9664}\u{6807}\u{8BB0}\u{3002}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/tag/dist/zh-TW.mjs
var $09cd168ab18773f4$exports = {};
$09cd168ab18773f4$exports = {
    "removeButtonLabel": `\u{79FB}\u{9664}`,
    "removeDescription": `\u{6309} Delete \u{9375}\u{4EE5}\u{79FB}\u{9664}\u{6A19}\u{8A18}\u{3002}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/tag/dist/intlStrings.mjs



































var $3bb15cc24d006ec5$exports = {};


































$3bb15cc24d006ec5$exports = {
    "ar-AE": $84925f526f90eebd$exports,
    "bg-BG": $c0650163dc1b6f9d$exports,
    "cs-CZ": $b2b55661291de587$exports,
    "da-DK": $deb83970956f6d5b$exports,
    "de-DE": $aea1cb4c7ec97e1c$exports,
    "el-GR": $3618d917e503a8d3$exports,
    "en-US": $9eb56bbbe8e31294$exports,
    "es-ES": $361c604b0fc269a3$exports,
    "et-EE": $2f00170f4ee3ca01$exports,
    "fi-FI": $80ee16b64fab9fb5$exports,
    "fr-FR": $be9d354476c08087$exports,
    "he-IL": $ffeb903ba092eb35$exports,
    "hr-HR": $1df6722c6f19728b$exports,
    "hu-HU": $093d57e325bc9071$exports,
    "it-IT": $609dbdfbcad85bdb$exports,
    "ja-JP": $c08e84f882644048$exports,
    "ko-KR": $5cd130489822fa21$exports,
    "lt-LT": $ab5183739b6c5e7e$exports,
    "lv-LV": $dd84a0b574be3f23$exports,
    "nb-NO": $85eee97d14eef7b5$exports,
    "nl-NL": $18781839f93b0314$exports,
    "pl-PL": $1c40ffbbfe9f3bda$exports,
    "pt-BR": $156880e329b1c717$exports,
    "pt-PT": $b6d50b1d20768ce4$exports,
    "ro-RO": $d8c38c691b006187$exports,
    "ru-RU": $ed9b4bf7ce1fb1d7$exports,
    "sk-SK": $51d8721afda4d678$exports,
    "sl-SI": $fd37a27baae493e8$exports,
    "sr-SP": $5505a1ca71ffd6f4$exports,
    "sv-SE": $33670e148c84ad02$exports,
    "tr-TR": $0bf46fdcdd7cb5f6$exports,
    "uk-UA": $9d9765222bc08ca2$exports,
    "zh-CN": $d737296cedcdee9f$exports,
    "zh-TW": $09cd168ab18773f4$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useDescription.mjs
var useDescription = __webpack_require__(44346);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/scrollIntoView.mjs + 1 modules
var scrollIntoView = __webpack_require__(6868);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/getScrollParent.mjs
var getScrollParent = __webpack_require__(24514);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/focusSafely.mjs
var focusSafely = __webpack_require__(4175);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 2 modules
var FocusScope = __webpack_require__(13560);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getChildNodes.mjs
var getChildNodes = __webpack_require__(80423);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(33462);
;// ./node_modules/@react-aria/gridlist/dist/useGridListItem.mjs









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







const $4e8b0456ef72939f$var$EXPANSION_KEYS = {
    'expand': {
        ltr: 'ArrowRight',
        rtl: 'ArrowLeft'
    },
    'collapse': {
        ltr: 'ArrowLeft',
        rtl: 'ArrowRight'
    }
};
function $4e8b0456ef72939f$export$9610e69494fadfd2(props, state, ref) {
    var _node_props, _node_props1;
    // Copied from useGridCell + some modifications to make it not so grid specific
    let { node: node, isVirtualized: isVirtualized } = props;
    // let stringFormatter = useLocalizedStringFormatter(intlMessages, '@react-aria/gridlist');
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let { onAction: onAction, linkBehavior: linkBehavior, keyboardNavigationBehavior: keyboardNavigationBehavior, shouldSelectOnPressUp: shouldSelectOnPressUp } = (0, $ce9b18daab526bbd$export$5b9bb410392e3991).get(state);
    let descriptionId = (0, useId/* useSlotId */.X1)();
    // We need to track the key of the item at the time it was last focused so that we force
    // focus to go to the item when the DOM node is reused for a different item in a virtualizer.
    let keyWhenFocused = (0, react.useRef)(null);
    let focus = ()=>{
        var _ref_current;
        // Don't shift focus to the row if the active element is a element within the row already
        // (e.g. clicking on a row button)
        if (ref.current !== null && (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(document.activeElement)))) (0, focusSafely/* focusSafely */.l)(ref.current);
    };
    let treeGridRowProps = {};
    let hasChildRows = props.hasChildItems;
    let hasLink = state.selectionManager.isLink(node.key);
    if (node != null && 'expandedKeys' in state) {
        var _state_collection_getChildren, _state_collection, _filter_at;
        // TODO: ideally node.hasChildNodes would be a way to tell if a row has child nodes, but the row's contents make it so that value is always
        // true...
        let children = (_state_collection_getChildren = (_state_collection = state.collection).getChildren) === null || _state_collection_getChildren === void 0 ? void 0 : _state_collection_getChildren.call(_state_collection, node.key);
        hasChildRows = hasChildRows || [
            ...children !== null && children !== void 0 ? children : []
        ].length > 1;
        if (onAction == null && !hasLink && state.selectionManager.selectionMode === 'none' && hasChildRows) onAction = ()=>state.toggleKey(node.key);
        let isExpanded = hasChildRows ? state.expandedKeys.has(node.key) : undefined;
        let setSize = 1;
        var _filter_at_index;
        if (node.level > 0 && (node === null || node === void 0 ? void 0 : node.parentKey) != null) {
            let parent = state.collection.getItem(node.parentKey);
            if (parent) {
                var _state_collection_getChildren1, _state_collection1;
                // siblings must exist because our original node exists, same with lastItem
                let siblings = (_state_collection_getChildren1 = (_state_collection1 = state.collection).getChildren) === null || _state_collection_getChildren1 === void 0 ? void 0 : _state_collection_getChildren1.call(_state_collection1, parent.key);
                setSize = (0, getChildNodes/* getLastItem */.W)(siblings).index + 1;
            }
        } else setSize = ((_filter_at_index = (_filter_at = [
            ...state.collection
        ].filter((row)=>row.level === 0).at(-1)) === null || _filter_at === void 0 ? void 0 : _filter_at.index) !== null && _filter_at_index !== void 0 ? _filter_at_index : 0) + 1;
        treeGridRowProps = {
            'aria-expanded': isExpanded,
            'aria-level': node.level + 1,
            'aria-posinset': (node === null || node === void 0 ? void 0 : node.index) + 1,
            'aria-setsize': setSize
        };
    }
    let { itemProps: itemProps, ...itemStates } = (0, useSelectableItem/* useSelectableItem */.p)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp || shouldSelectOnPressUp,
        onAction: onAction || ((_node_props = node.props) === null || _node_props === void 0 ? void 0 : _node_props.onAction) ? (0, chain/* chain */.c)((_node_props1 = node.props) === null || _node_props1 === void 0 ? void 0 : _node_props1.onAction, onAction ? ()=>onAction(node.key) : undefined) : undefined,
        focus: focus,
        linkBehavior: linkBehavior
    });
    let onKeyDownCapture = (e)=>{
        if (!e.currentTarget.contains(e.target) || !ref.current || !document.activeElement) return;
        let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current);
        walker.currentNode = document.activeElement;
        if ('expandedKeys' in state && document.activeElement === ref.current) {
            if (e.key === $4e8b0456ef72939f$var$EXPANSION_KEYS['expand'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && !state.expandedKeys.has(node.key)) {
                state.toggleKey(node.key);
                e.stopPropagation();
                return;
            } else if (e.key === $4e8b0456ef72939f$var$EXPANSION_KEYS['collapse'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && state.expandedKeys.has(node.key)) {
                state.toggleKey(node.key);
                e.stopPropagation();
                return;
            }
        }
        switch(e.key){
            case 'ArrowLeft':
                if (keyboardNavigationBehavior === 'arrow') {
                    // Find the next focusable element within the row.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, focusSafely/* focusSafely */.l)(focusable);
                        (0, scrollIntoView/* scrollIntoViewport */.o)(focusable, {
                            containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                        });
                    } else {
                        // If there is no next focusable child, then return focus back to the row
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'rtl') {
                            (0, focusSafely/* focusSafely */.l)(ref.current);
                            (0, scrollIntoView/* scrollIntoViewport */.o)(ref.current, {
                                containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = $4e8b0456ef72939f$var$last(walker);
                            if (lastElement) {
                                (0, focusSafely/* focusSafely */.l)(lastElement);
                                (0, scrollIntoView/* scrollIntoViewport */.o)(lastElement, {
                                    containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowRight':
                if (keyboardNavigationBehavior === 'arrow') {
                    let focusable = direction === 'rtl' ? walker.previousNode() : walker.nextNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, focusSafely/* focusSafely */.l)(focusable);
                        (0, scrollIntoView/* scrollIntoViewport */.o)(focusable, {
                            containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                        });
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'ltr') {
                            (0, focusSafely/* focusSafely */.l)(ref.current);
                            (0, scrollIntoView/* scrollIntoViewport */.o)(ref.current, {
                                containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = $4e8b0456ef72939f$var$last(walker);
                            if (lastElement) {
                                (0, focusSafely/* focusSafely */.l)(lastElement);
                                (0, scrollIntoView/* scrollIntoViewport */.o)(lastElement, {
                                    containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                // Prevent this event from reaching row children, e.g. menu buttons. We want arrow keys to navigate
                // to the row above/below instead. We need to re-dispatch the event from a higher parent so it still
                // bubbles and gets handled by useSelectableCollection.
                if (!e.altKey && ref.current.contains(e.target)) {
                    var _ref_current_parentElement;
                    e.stopPropagation();
                    e.preventDefault();
                    (_ref_current_parentElement = ref.current.parentElement) === null || _ref_current_parentElement === void 0 ? void 0 : _ref_current_parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    let onFocus = (e)=>{
        keyWhenFocused.current = node.key;
        if (e.target !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the row itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row
            // in that case since the list should act like a single tab stop.
            if (!(0, useFocusVisible/* isFocusVisible */.pP)()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
    };
    let onKeyDown = (e)=>{
        if (!e.currentTarget.contains(e.target) || !ref.current || !document.activeElement) return;
        switch(e.key){
            case 'Tab':
                if (keyboardNavigationBehavior === 'tab') {
                    // If there is another focusable element within this item, stop propagation so the tab key
                    // is handled by the browser and not by useSelectableCollection (which would take us out of the list).
                    let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current, {
                        tabbable: true
                    });
                    walker.currentNode = document.activeElement;
                    let next = e.shiftKey ? walker.previousNode() : walker.nextNode();
                    if (next) e.stopPropagation();
                }
        }
    };
    let syntheticLinkProps = (0, openLink/* useSyntheticLinkProps */.HI)(node.props);
    let linkProps = itemStates.hasAction ? syntheticLinkProps : {};
    // TODO: re-add when we get translations and fix this for iOS VO
    // let rowAnnouncement;
    // if (onAction) {
    //   rowAnnouncement = stringFormatter.format('hasActionAnnouncement');
    // } else if (hasLink) {
    //   rowAnnouncement = stringFormatter.format('hasLinkAnnouncement', {
    //     link: node.props.href
    //   });
    // }
    let rowProps = (0, mergeProps/* mergeProps */.v)(itemProps, linkProps, {
        role: 'row',
        onKeyDownCapture: onKeyDownCapture,
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        // 'aria-label': [(node.textValue || undefined), rowAnnouncement].filter(Boolean).join(', '),
        'aria-label': node.textValue || undefined,
        'aria-selected': state.selectionManager.canSelectItem(node.key) ? state.selectionManager.isSelected(node.key) : undefined,
        'aria-disabled': state.selectionManager.isDisabled(node.key) || undefined,
        'aria-labelledby': descriptionId && node.textValue ? `${(0, $ce9b18daab526bbd$export$f45c25170b9a99c2)(state, node.key)} ${descriptionId}` : undefined,
        id: (0, $ce9b18daab526bbd$export$f45c25170b9a99c2)(state, node.key)
    });
    if (isVirtualized) rowProps['aria-rowindex'] = node.index + 1;
    let gridCellProps = {
        role: 'gridcell',
        'aria-colindex': 1
    };
    // TODO: should isExpanded and hasChildRows be a item state that gets returned by the hook?
    return {
        rowProps: {
            ...(0, mergeProps/* mergeProps */.v)(rowProps, treeGridRowProps)
        },
        gridCellProps: gridCellProps,
        descriptionProps: {
            id: descriptionId
        },
        ...itemStates
    };
}
function $4e8b0456ef72939f$var$last(walker) {
    let next = null;
    let last = null;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}



//# sourceMappingURL=useGridListItem.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
;// ./node_modules/@react-aria/tag/dist/useTag.mjs








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





function $fc6126c82a4601f1$export$3f568fff7dff2f03(props, state, ref) {
    let { item: item } = props;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($3bb15cc24d006ec5$exports))), '@react-aria/tag');
    let buttonId = (0, useId/* useId */.Bi)();
    let { onRemove: onRemove } = (0, $d7323bca8d074eeb$export$653eddfc964b0f8a).get(state) || {};
    let { rowProps: rowProps, gridCellProps: gridCellProps, ...states } = (0, $4e8b0456ef72939f$export$9610e69494fadfd2)({
        node: item
    }, state, ref);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { descriptionProps: _, ...stateWithoutDescription } = states;
    let isDisabled = state.disabledKeys.has(item.key) || item.props.isDisabled;
    let onKeyDown = (e)=>{
        if (e.key === 'Delete' || e.key === 'Backspace') {
            if (isDisabled) return;
            e.preventDefault();
            if (state.selectionManager.isSelected(item.key)) onRemove === null || onRemove === void 0 ? void 0 : onRemove(new Set(state.selectionManager.selectedKeys));
            else onRemove === null || onRemove === void 0 ? void 0 : onRemove(new Set([
                item.key
            ]));
        }
    };
    let modality = (0, useFocusVisible/* useInteractionModality */.lb)();
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'pointer';
    let description = onRemove && (modality === 'keyboard' || modality === 'virtual') ? stringFormatter.format('removeDescription') : '';
    let descProps = (0, useDescription/* useDescription */.I)(description);
    let isItemFocused = item.key === state.selectionManager.focusedKey;
    let isFocused = state.selectionManager.focusedKey != null;
    let tabIndex = -1;
    if (!isDisabled && (isItemFocused || !isFocused)) tabIndex = 0;
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item.props);
    let linkProps = (0, openLink/* useSyntheticLinkProps */.HI)(item.props);
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)({
        isDisabled: isDisabled
    }, ref);
    return {
        removeButtonProps: {
            'aria-label': stringFormatter.format('removeButtonLabel'),
            'aria-labelledby': `${buttonId} ${rowProps.id}`,
            isDisabled: isDisabled,
            id: buttonId,
            onPress: ()=>onRemove ? onRemove(new Set([
                    item.key
                ])) : null
        },
        rowProps: (0, mergeProps/* mergeProps */.v)(focusableProps, rowProps, domProps, linkProps, {
            tabIndex: tabIndex,
            onKeyDown: onRemove ? onKeyDown : undefined,
            'aria-describedby': descProps['aria-describedby']
        }),
        gridCellProps: (0, mergeProps/* mergeProps */.v)(gridCellProps, {
            'aria-errormessage': props['aria-errormessage'],
            'aria-label': props['aria-label']
        }),
        ...stateWithoutDescription,
        allowsRemoving: !!onRemove
    };
}



//# sourceMappingURL=useTag.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useListState.mjs
var useListState = __webpack_require__(46655);
;// ./node_modules/react-aria-components/dist/TagGroup.mjs












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










const $eaf9e70818b436db$export$5b07b5dd2cbd96e3 = /*#__PURE__*/ (0, react.createContext)(null);
const $eaf9e70818b436db$export$e755ce3685dd0ca9 = /*#__PURE__*/ (0, react.createContext)(null);
const $eaf9e70818b436db$export$67ea30858aaf75e3 = /*#__PURE__*/ (0, react.forwardRef)(function TagGroup(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $eaf9e70818b436db$export$5b07b5dd2cbd96e3);
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: props.children
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($eaf9e70818b436db$var$TagGroupInner, {
            props: props,
            forwardedRef: ref,
            collection: collection
        }));
});
function $eaf9e70818b436db$var$TagGroupInner({ props: props, forwardedRef: ref, collection: collection }) {
    let tagListRef = (0, react.useRef)(null);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let state = (0, useListState/* useListState */.p)({
        ...props,
        children: undefined,
        collection: collection
    });
    // Prevent DOM props from going to two places.
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    let domPropOverrides = Object.fromEntries(Object.entries(domProps).map(([k])=>[
            k,
            undefined
        ]));
    let { gridProps: gridProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $d7323bca8d074eeb$export$4f8b5cda58b7e8ff)({
        ...props,
        ...domPropOverrides,
        label: label
    }, state, tagListRef);
    var _props_className;
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...domProps,
        ref: ref,
        slot: props.slot || undefined,
        className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : 'react-aria-TagGroup',
        style: props.style
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Label/* LabelContext */.I),
                {
                    ...labelProps,
                    elementType: 'span',
                    ref: labelRef
                }
            ],
            [
                $eaf9e70818b436db$export$e755ce3685dd0ca9,
                {
                    ...gridProps,
                    ref: tagListRef
                }
            ],
            [
                (0, ListBox/* ListStateContext */.DN),
                state
            ],
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, props.children));
}
const $eaf9e70818b436db$export$f9fef0f55402315b = /*#__PURE__*/ (0, react.forwardRef)(function TagList(props, ref) {
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    return state ? /*#__PURE__*/ (0, react).createElement($eaf9e70818b436db$var$TagListInner, {
        props: props,
        forwardedRef: ref
    }) : /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props);
});
function $eaf9e70818b436db$var$TagListInner({ props: props, forwardedRef: forwardedRef }) {
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    let { CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let [gridProps, ref] = (0, utils/* useContextProps */.JT)(props, forwardedRef, $eaf9e70818b436db$export$e755ce3685dd0ca9);
    delete gridProps.items;
    delete gridProps.renderEmptyState;
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let renderValues = {
        isEmpty: state.collection.size === 0,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        state: state
    };
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        className: props.className,
        style: props.style,
        defaultClassName: 'react-aria-TagList',
        values: renderValues
    });
    let persistedKeys = (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey);
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)(gridProps, focusProps),
        ...renderProps,
        ref: ref,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, state.collection.size === 0 && props.renderEmptyState ? props.renderEmptyState(renderValues) : /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: persistedKeys
    }));
}
const $eaf9e70818b436db$export$3288d34c523a1192 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)('item', (props, forwardedRef, item)=>{
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)({
        within: false
    });
    let { rowProps: rowProps, gridCellProps: gridCellProps, removeButtonProps: removeButtonProps, ...states } = (0, $fc6126c82a4601f1$export$3f568fff7dff2f03)({
        item: item
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: !states.allowsSelection,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-Tag',
        values: {
            ...states,
            isFocusVisible: isFocusVisible,
            isHovered: isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior
        }
    });
    (0, react.useEffect)(()=>{
        if (!item.textValue && "production" !== 'production') // removed by dead control flow
{}
    }, [
        item.textValue
    ]);
    return /*#__PURE__*/ (0, react).createElement("div", {
        ref: ref,
        ...renderProps,
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props), rowProps, focusProps, hoverProps),
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-allows-removing": states.allowsRemoving || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...gridCellProps,
        style: {
            display: 'contents'
        }
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Button/* ButtonContext */.k),
                {
                    slots: {
                        remove: removeButtonProps
                    }
                }
            ],
            [
                (0, Collection/* CollectionRendererContext */.zL),
                (0, Collection/* DefaultCollectionRenderer */.N)
            ]
        ]
    }, renderProps.children)));
});



//# sourceMappingURL=TagGroup.module.js.map


/***/ })

}]);