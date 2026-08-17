"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5482],{

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

/***/ 17282
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vw: () => (/* binding */ $3df3ddf5bafbc7b1$export$3288d34c523a1192),
  CR: () => (/* binding */ $3df3ddf5bafbc7b1$export$67ea30858aaf75e3),
  TB: () => (/* binding */ $3df3ddf5bafbc7b1$export$5b07b5dd2cbd96e3),
  LY: () => (/* binding */ $3df3ddf5bafbc7b1$export$f9fef0f55402315b),
  sM: () => (/* binding */ $3df3ddf5bafbc7b1$export$e755ce3685dd0ca9)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Button.mjs
var Button = __webpack_require__(93426);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Collection.mjs
var Collection = __webpack_require__(53658);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Label.mjs
var Label = __webpack_require__(37820);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/ListBox.mjs + 3 modules
var ListBox = __webpack_require__(86670);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Autocomplete.mjs
var Autocomplete = __webpack_require__(77314);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(17863);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(17062);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
;// ./node_modules/react-aria/dist/private/gridlist/utils.mjs
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
 */ const $c1c90317e8bffe4d$export$5b9bb410392e3991 = new WeakMap();
function $c1c90317e8bffe4d$export$f45c25170b9a99c2(state, key) {
    let { id: id } = $c1c90317e8bffe4d$export$5b9bb410392e3991.get(state) ?? {};
    if (!id) throw new Error('Unknown list');
    return `${id}-${$c1c90317e8bffe4d$export$e0c709538cb8ae18(key)}`;
}
function $c1c90317e8bffe4d$export$e0c709538cb8ae18(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}



//# sourceMappingURL=utils.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/grid/useGridSelectionAnnouncement.mjs
var useGridSelectionAnnouncement = __webpack_require__(53140);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useHasTabbableChild.mjs
var useHasTabbableChild = __webpack_require__(16466);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/grid/useHighlightSelectionDescription.mjs
var useHighlightSelectionDescription = __webpack_require__(62755);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableList.mjs
var useSelectableList = __webpack_require__(70353);
;// ./node_modules/react-aria/dist/private/gridlist/useGridList.mjs









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







function $34d813d3524a584a$export$664f9155035607eb(props, state, ref) {
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
        escapeKeyBehavior: escapeKeyBehavior,
        UNSTABLE_focusOnEntry: props.UNSTABLE_focusOnEntry
    });
    let id = (0, useId/* useId */.Bi)(props.id);
    (0, $c1c90317e8bffe4d$export$5b9bb410392e3991).set(state, {
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



//# sourceMappingURL=useGridList.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(88430);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/label/useField.mjs
var useField = __webpack_require__(80439);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(75655);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/tag/useTagGroup.mjs









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







const $223860f9cb8a07a2$export$653eddfc964b0f8a = new WeakMap();
function $223860f9cb8a07a2$export$4f8b5cda58b7e8ff(props, state, ref) {
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
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
    let { gridProps: gridProps } = (0, $34d813d3524a584a$export$664f9155035607eb)({
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
    $223860f9cb8a07a2$export$653eddfc964b0f8a.set(state, {
        onRemove: props.onRemove
    });
    return {
        gridProps: (0, mergeProps/* mergeProps */.v)(gridProps, domProps, {
            role: state.collection.size ? 'grid' : 'group',
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



//# sourceMappingURL=useTagGroup.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ar-AE.mjs
var $20280e7751d18882$exports = {};
$20280e7751d18882$exports = {
    "removeButtonLabel": `\u{625}\u{632}\u{627}\u{644}\u{629}`,
    "removeDescription": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D} DELETE \u{644}\u{625}\u{632}\u{627}\u{644}\u{629} \u{639}\u{644}\u{627}\u{645}\u{629}.`
};



//# sourceMappingURL=ar-AE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/bg-BG.mjs
var $f1187d4416e18442$exports = {};
$f1187d4416e18442$exports = {
    "removeButtonLabel": `\u{41F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{432}\u{430}\u{43D}\u{435}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Delete, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{43D}\u{435}\u{442}\u{435} \u{43C}\u{430}\u{440}\u{43A}\u{435}\u{440}\u{430}.`
};



//# sourceMappingURL=bg-BG.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/cs-CZ.mjs
var $be15883e6181a852$exports = {};
$be15883e6181a852$exports = {
    "removeButtonLabel": `Odebrat`,
    "removeDescription": `Stisknut\xedm kl\xe1vesy Delete odeberete zna\u{10D}ku.`
};



//# sourceMappingURL=cs-CZ.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/da-DK.mjs
var $87bbc6bd6a045cd5$exports = {};
$87bbc6bd6a045cd5$exports = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Tryk p\xe5 Slet for at fjerne tag.`
};



//# sourceMappingURL=da-DK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/de-DE.mjs
var $9205ee863542906a$exports = {};
$9205ee863542906a$exports = {
    "removeButtonLabel": `Entfernen`,
    "removeDescription": `Auf \u{201E}L\xf6schen\u{201C} dr\xfccken, um das Tag zu entfernen.`
};



//# sourceMappingURL=de-DE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/el-GR.mjs
var $cbf667bd46d90afe$exports = {};
$cbf667bd46d90afe$exports = {
    "removeButtonLabel": `\u{39A}\u{3B1}\u{3C4}\u{3AC}\u{3C1}\u{3B3}\u{3B7}\u{3C3}\u{3B7}`,
    "removeDescription": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{394}\u{3B9}\u{3B1}\u{3B3}\u{3C1}\u{3B1}\u{3C6}\u{3AE} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BA}\u{3B1}\u{3C4}\u{3B1}\u{3C1}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C4}\u{3B9}\u{3BA}\u{3AD}\u{3C4}\u{3B1}.`
};



//# sourceMappingURL=el-GR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/en-US.mjs
var $86befe85692caa5e$exports = {};
$86befe85692caa5e$exports = {
    "removeDescription": `Press Delete to remove tag.`,
    "removeButtonLabel": `Remove`
};



//# sourceMappingURL=en-US.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/es-ES.mjs
var $820860ff69b4d53e$exports = {};
$820860ff69b4d53e$exports = {
    "removeButtonLabel": `Quitar`,
    "removeDescription": `Pulse Eliminar para quitar la etiqueta.`
};



//# sourceMappingURL=es-ES.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/et-EE.mjs
var $69db28e4ed958394$exports = {};
$69db28e4ed958394$exports = {
    "removeButtonLabel": `Eemalda`,
    "removeDescription": `Sildi eemaldamiseks vajutage kustutusklahvi Delete.`
};



//# sourceMappingURL=et-EE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/fi-FI.mjs
var $39d81641bfeda51f$exports = {};
$39d81641bfeda51f$exports = {
    "removeButtonLabel": `Poista`,
    "removeDescription": `Poista tunniste painamalla Poista-painiketta.`
};



//# sourceMappingURL=fi-FI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/fr-FR.mjs
var $25dc53e39d7a27ee$exports = {};
$25dc53e39d7a27ee$exports = {
    "removeButtonLabel": `Supprimer`,
    "removeDescription": `Appuyez sur Supprimer pour supprimer l\u{2019}\xe9tiquette.`
};



//# sourceMappingURL=fr-FR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/he-IL.mjs
var $5e9e2094eb0f96cf$exports = {};
$5e9e2094eb0f96cf$exports = {
    "removeButtonLabel": `\u{5D4}\u{5E1}\u{5E8}`,
    "removeDescription": `\u{5DC}\u{5D7}\u{5E5} \u{5E2}\u{5DC} \u{5DE}\u{5D7}\u{5E7} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5E1}\u{5D9}\u{5E8} \u{5EA}\u{5D2}.`
};



//# sourceMappingURL=he-IL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/hr-HR.mjs
var $6157c9954e0b6191$exports = {};
$6157c9954e0b6191$exports = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Delete za uklanjanje oznake.`
};



//# sourceMappingURL=hr-HR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/hu-HU.mjs
var $f0c9ecd45a629623$exports = {};
$f0c9ecd45a629623$exports = {
    "removeButtonLabel": `Elt\xe1vol\xedt\xe1s`,
    "removeDescription": `Nyomja meg a Delete billenty\u{171}t a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.`
};



//# sourceMappingURL=hu-HU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/it-IT.mjs
var $2dd1894272e6d5f5$exports = {};
$2dd1894272e6d5f5$exports = {
    "removeButtonLabel": `Rimuovi`,
    "removeDescription": `Premi Elimina per rimuovere il tag.`
};



//# sourceMappingURL=it-IT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ja-JP.mjs
var $a2ec1bfcd7856caa$exports = {};
$a2ec1bfcd7856caa$exports = {
    "removeButtonLabel": `\u{524A}\u{9664}`,
    "removeDescription": `\u{30BF}\u{30B0}\u{3092}\u{524A}\u{9664}\u{3059}\u{308B}\u{306B}\u{306F}\u{3001}Delete \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{307E}\u{3059}\u{3002}`
};



//# sourceMappingURL=ja-JP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ko-KR.mjs
var $0b4f3a4ee068274f$exports = {};
$0b4f3a4ee068274f$exports = {
    "removeButtonLabel": `\u{C81C}\u{AC70}`,
    "removeDescription": `\u{D0DC}\u{ADF8}\u{B97C} \u{C81C}\u{AC70}\u{D558}\u{B824}\u{BA74} Delete \u{D0A4}\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`
};



//# sourceMappingURL=ko-KR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/lt-LT.mjs
var $94ea096d46664c2a$exports = {};
$94ea096d46664c2a$exports = {
    "removeButtonLabel": `Pa\u{161}alinti`,
    "removeDescription": `Nor\u{117}dami pa\u{161}alinti \u{17E}ym\u{105}, paspauskite \u{201E}Delete\u{201C} klavi\u{161}\u{105}.`
};



//# sourceMappingURL=lt-LT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/lv-LV.mjs
var $5ab25ba52a4fc5fe$exports = {};
$5ab25ba52a4fc5fe$exports = {
    "removeButtonLabel": `No\u{146}emt`,
    "removeDescription": `Nospiediet Delete [Dz\u{113}st], lai no\u{146}emtu tagu.`
};



//# sourceMappingURL=lv-LV.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/nb-NO.mjs
var $8664c125579aad3b$exports = {};
$8664c125579aad3b$exports = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Trykk p\xe5 Slett for \xe5 fjerne taggen.`
};



//# sourceMappingURL=nb-NO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/nl-NL.mjs
var $8b8307f7979e9601$exports = {};
$8b8307f7979e9601$exports = {
    "removeButtonLabel": `Verwijderen`,
    "removeDescription": `Druk op Verwijderen om de tag te verwijderen.`
};



//# sourceMappingURL=nl-NL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/pl-PL.mjs
var $fc2b20ad3e18d428$exports = {};
$fc2b20ad3e18d428$exports = {
    "removeButtonLabel": `Usu\u{144}`,
    "removeDescription": `Naci\u{15B}nij Usu\u{144}, aby usun\u{105}\u{107} znacznik.`
};



//# sourceMappingURL=pl-PL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/pt-BR.mjs
var $10f26aa1cfdb1c9f$exports = {};
$10f26aa1cfdb1c9f$exports = {
    "removeButtonLabel": `Remover`,
    "removeDescription": `Pressione Delete para remover a tag.`
};



//# sourceMappingURL=pt-BR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/pt-PT.mjs
var $32bc609604120001$exports = {};
$32bc609604120001$exports = {
    "removeButtonLabel": `Eliminar`,
    "removeDescription": `Prima Delete para eliminar a tag.`
};



//# sourceMappingURL=pt-PT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ro-RO.mjs
var $3bbcff21376a0476$exports = {};
$3bbcff21376a0476$exports = {
    "removeButtonLabel": `\xcendep\u{103}rta\u{163}i`,
    "removeDescription": `Ap\u{103}sa\u{21B}i pe Delete (\u{218}tergere) pentru a elimina eticheta.`
};



//# sourceMappingURL=ro-RO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ru-RU.mjs
var $54717c47d92e7a92$exports = {};
$54717c47d92e7a92$exports = {
    "removeButtonLabel": `\u{423}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C}`,
    "removeDescription": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} DELETE, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{443}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C} \u{442}\u{435}\u{433}.`
};



//# sourceMappingURL=ru-RU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/sk-SK.mjs
var $59aa54360d27f339$exports = {};
$59aa54360d27f339$exports = {
    "removeButtonLabel": `Odstr\xe1ni\u{165}`,
    "removeDescription": `Ak chcete odstr\xe1ni\u{165} zna\u{10D}ku, stla\u{10D}te kl\xe1ves Delete.`
};



//# sourceMappingURL=sk-SK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/sl-SI.mjs
var $de07b4eb19bfbc3a$exports = {};
$de07b4eb19bfbc3a$exports = {
    "removeButtonLabel": `Odstrani`,
    "removeDescription": `Pritisnite Delete, da odstranite oznako.`
};



//# sourceMappingURL=sl-SI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/sr-SP.mjs
var $e99d9c77cf4a7b4f$exports = {};
$e99d9c77cf4a7b4f$exports = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Obri\u{161}i da biste uklonili oznaku.`
};



//# sourceMappingURL=sr-SP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/sv-SE.mjs
var $710e3e95d2a199c9$exports = {};
$710e3e95d2a199c9$exports = {
    "removeButtonLabel": `Ta bort`,
    "removeDescription": `Tryck p\xe5 Radera f\xf6r att ta bort taggen.`
};



//# sourceMappingURL=sv-SE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/tr-TR.mjs
var $0e55c776c1bcfcb6$exports = {};
$0e55c776c1bcfcb6$exports = {
    "removeButtonLabel": `Kald\u{131}r`,
    "removeDescription": `Etiketi kald\u{131}rmak i\xe7in Sil tu\u{15F}una bas\u{131}n.`
};



//# sourceMappingURL=tr-TR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/uk-UA.mjs
var $18523129a261d712$exports = {};
$18523129a261d712$exports = {
    "removeButtonLabel": `\u{412}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Delete, \u{449}\u{43E}\u{431} \u{432}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438} \u{442}\u{435}\u{433}.`
};



//# sourceMappingURL=uk-UA.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/zh-CN.mjs
var $2407c222bf8df5ec$exports = {};
$2407c222bf8df5ec$exports = {
    "removeButtonLabel": `\u{5220}\u{9664}`,
    "removeDescription": `\u{6309}\u{4E0B}\u{201C}\u{5220}\u{9664}\u{201D}\u{4EE5}\u{5220}\u{9664}\u{6807}\u{8BB0}\u{3002}`
};



//# sourceMappingURL=zh-CN.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/zh-TW.mjs
var $b96bdf8456dd3b44$exports = {};
$b96bdf8456dd3b44$exports = {
    "removeButtonLabel": `\u{79FB}\u{9664}`,
    "removeDescription": `\u{6309} Delete \u{9375}\u{4EE5}\u{79FB}\u{9664}\u{6A19}\u{8A18}\u{3002}`
};



//# sourceMappingURL=zh-TW.mjs.map

;// ./node_modules/react-aria/dist/private/tag/intlStrings.mjs



































var $c861dd473ab3d00c$exports = {};


































$c861dd473ab3d00c$exports = {
    "ar-AE": $20280e7751d18882$exports,
    "bg-BG": $f1187d4416e18442$exports,
    "cs-CZ": $be15883e6181a852$exports,
    "da-DK": $87bbc6bd6a045cd5$exports,
    "de-DE": $9205ee863542906a$exports,
    "el-GR": $cbf667bd46d90afe$exports,
    "en-US": $86befe85692caa5e$exports,
    "es-ES": $820860ff69b4d53e$exports,
    "et-EE": $69db28e4ed958394$exports,
    "fi-FI": $39d81641bfeda51f$exports,
    "fr-FR": $25dc53e39d7a27ee$exports,
    "he-IL": $5e9e2094eb0f96cf$exports,
    "hr-HR": $6157c9954e0b6191$exports,
    "hu-HU": $f0c9ecd45a629623$exports,
    "it-IT": $2dd1894272e6d5f5$exports,
    "ja-JP": $a2ec1bfcd7856caa$exports,
    "ko-KR": $0b4f3a4ee068274f$exports,
    "lt-LT": $94ea096d46664c2a$exports,
    "lv-LV": $5ab25ba52a4fc5fe$exports,
    "nb-NO": $8664c125579aad3b$exports,
    "nl-NL": $8b8307f7979e9601$exports,
    "pl-PL": $fc2b20ad3e18d428$exports,
    "pt-BR": $10f26aa1cfdb1c9f$exports,
    "pt-PT": $32bc609604120001$exports,
    "ro-RO": $3bbcff21376a0476$exports,
    "ru-RU": $54717c47d92e7a92$exports,
    "sk-SK": $59aa54360d27f339$exports,
    "sl-SI": $de07b4eb19bfbc3a$exports,
    "sr-SP": $e99d9c77cf4a7b4f$exports,
    "sv-SE": $710e3e95d2a199c9$exports,
    "tr-TR": $0e55c776c1bcfcb6$exports,
    "uk-UA": $18523129a261d712$exports,
    "zh-CN": $2407c222bf8df5ec$exports,
    "zh-TW": $b96bdf8456dd3b44$exports
};



//# sourceMappingURL=intlStrings.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useDescription.mjs
var useDescription = __webpack_require__(67010);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/chain.mjs
var chain = __webpack_require__(96558);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/focusSafely.mjs
var focusSafely = __webpack_require__(75105);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/domHelpers.mjs
var domHelpers = __webpack_require__(1612);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/getScrollParent.mjs
var getScrollParent = __webpack_require__(99597);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(35692);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/scrollIntoView.mjs + 1 modules
var scrollIntoView = __webpack_require__(58796);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(1904);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
;// ./node_modules/react-aria/dist/private/gridlist/useGridListItem.mjs
















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














const $be7bed9611dd7497$var$EXPANSION_KEYS = {
    expand: {
        ltr: 'ArrowRight',
        rtl: 'ArrowLeft'
    },
    collapse: {
        ltr: 'ArrowLeft',
        rtl: 'ArrowRight'
    }
};
function $be7bed9611dd7497$export$9610e69494fadfd2(props, state, ref) {
    // Copied from useGridCell + some modifications to make it not so grid specific
    let { node: node, isVirtualized: isVirtualized, focusMode: focusMode = 'row', allowsArrowNavigation: allowsArrowNavigation } = props;
    // let stringFormatter = useLocalizedStringFormatter(intlMessages, '@react-aria/gridlist');
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let { onAction: onAction, linkBehavior: linkBehavior, keyboardNavigationBehavior: keyboardNavigationBehavior, shouldSelectOnPressUp: shouldSelectOnPressUp } = (0, $c1c90317e8bffe4d$export$5b9bb410392e3991).get(state);
    let descriptionId = (0, useId/* useSlotId */.X1)();
    // We need to track the key of the item at the time it was last focused so that we force
    // focus to go to the item when the DOM node is reused for a different item in a virtualizer.
    let keyWhenFocused = (0, react.useRef)(null);
    let focus = ()=>{
        if (ref.current === null) return;
        if (focusMode === 'child') {
            // If focus is already on a focusable child within the row, early return so we don't shift focus
            if ((0, DOMFunctions/* isFocusWithin */.ae)(ref.current) && ref.current !== (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(ref.current))) return;
            let treeWalker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current, {
                tabbable: true
            });
            let focusable = treeWalker.firstChild();
            if (focusable) {
                (0, focusSafely/* focusSafely */.l)(focusable);
                (0, scrollIntoView/* scrollIntoViewport */.o)(focusable, {
                    containingElement: (0, getScrollParent/* getScrollParent */.m)(focusable)
                });
                return;
            }
        }
        // Don't shift focus to the row if the active element is a element within the row already
        // (e.g. clicking on a row button)
        if (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !(0, DOMFunctions/* isFocusWithin */.ae)(ref.current)) (0, focusSafely/* focusSafely */.l)(ref.current);
    };
    let treeGridRowProps = {};
    let hasChildRows = props.hasChildItems;
    let hasLink = state.selectionManager.isLink(node.key);
    if (node != null && 'expandedKeys' in state) {
        // TODO: ideally node.hasChildNodes would be a way to tell if a row has child nodes, but the row's contents make it so that value is always
        // true...
        let children = state.collection.getChildren?.(node.key);
        hasChildRows = hasChildRows || [
            ...children ?? []
        ].length > 1;
        if (onAction == null && !hasLink && state.selectionManager.selectionMode === 'none' && hasChildRows) onAction = ()=>state.toggleKey(node.key);
        let isExpanded = hasChildRows ? state.expandedKeys.has(node.key) : undefined;
        let setSize = 1;
        let index = node.index;
        if (node.level >= 0 && node?.parentKey != null) {
            let parent = state.collection.getItem(node.parentKey);
            if (parent) {
                // siblings must exist because our original node exists
                let siblings = $be7bed9611dd7497$var$getDirectChildren(parent, state.collection);
                setSize = [
                    ...siblings
                ].filter((row)=>row.type === 'item').length;
                if (index > 0 && siblings[0].type !== 'item') index -= 1; // subtract one for the parent item's content node
            }
        } else setSize = [
            ...state.collection
        ].filter((row)=>row.level === 0 && row.type === 'item').length;
        treeGridRowProps = {
            'aria-expanded': isExpanded,
            'aria-level': node.level + 1,
            'aria-posinset': index + 1,
            'aria-setsize': setSize
        };
    }
    let { itemProps: itemProps, ...itemStates } = (0, useSelectableItem/* useSelectableItem */.p)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp || shouldSelectOnPressUp,
        onAction: onAction || node.props?.onAction ? (0, chain/* chain */.c)(node.props?.onAction, onAction ? ()=>onAction(node.key) : undefined) : undefined,
        focus: focus,
        linkBehavior: linkBehavior
    });
    let onKeyDownCapture = (e)=>{
        let activeElement = (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(ref.current));
        if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e)) || !ref.current || !activeElement) return;
        let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current);
        walker.currentNode = activeElement;
        if ($be7bed9611dd7497$var$handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, ref.current, allowsArrowNavigation)) return;
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
                            let lastElement = $be7bed9611dd7497$var$last(walker);
                            // oxlint-disable-next-line max-depth
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
                            let lastElement = $be7bed9611dd7497$var$last(walker);
                            // oxlint-disable-next-line max-depth
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
                if (!e.altKey && (0, DOMFunctions/* nodeContains */.sD)(ref.current, (0, DOMFunctions/* getEventTarget */.wt)(e))) {
                    e.stopPropagation();
                    e.preventDefault();
                    ref.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    let onFocus = (e)=>{
        keyWhenFocused.current = node.key;
        if ((0, DOMFunctions/* getEventTarget */.wt)(e) !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the row itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row
            // in that case since the list should act like a single tab stop.
            if (!(0, useFocusVisible/* isFocusVisible */.pP)()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
        // if focus goes back to cell from child, make sure we don't refocus the cell if we are in focusMode=child
        // since that would be a focus trap
        if (focusMode === 'child' && e.relatedTarget && (0, DOMFunctions/* nodeContains */.sD)(ref.current, e.relatedTarget)) return;
        // If the cell itself is focused, wait a frame so that focus finishes propagating
        // up to the tree, and move focus to a focusable child if possible.
        requestAnimationFrame(()=>{
            if (focusMode === 'child' && (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(ref.current)) === ref.current) focus();
        });
    };
    let onKeyDown = (e)=>{
        let activeElement = (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(ref.current));
        if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e)) || !ref.current || !activeElement) return;
        if (keyboardNavigationBehavior === 'tab') {
            // Stop propagation for all events that originate from the children of the gridlist item since we don't want to trigger
            // grid level interactions (row navigation/typeselect/etc)
            // exception made for Tab since that needs to propagate to useSelectableCollection to tab out of the gridlist, might be others?
            if ((0, DOMFunctions/* getEventTarget */.wt)(e) !== ref.current && e.key !== 'Tab') {
                e.stopPropagation();
                return;
            }
            if ($be7bed9611dd7497$var$handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, ref.current, allowsArrowNavigation)) return;
        }
        switch(e.key){
            case 'Tab':
                if (keyboardNavigationBehavior === 'tab') {
                    // If there is another focusable element within this item, stop propagation so the tab key
                    // is handled by the browser and not by useSelectableCollection (which would take us out of the list).
                    let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current, {
                        tabbable: true
                    });
                    walker.currentNode = activeElement;
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
    // oxlint-disable-next-line react/react-compiler
    let rowProps = (0, mergeProps/* mergeProps */.v)(itemProps, linkProps, {
        role: 'row',
        onKeyDownCapture: keyboardNavigationBehavior === 'arrow' || allowsArrowNavigation ? onKeyDownCapture : undefined,
        onFocus: onFocus,
        // 'aria-label': [(node.textValue || undefined), rowAnnouncement].filter(Boolean).join(', '),
        'aria-label': node['aria-label'] || node.textValue || undefined,
        'aria-selected': state.selectionManager.canSelectItem(node.key) ? state.selectionManager.isSelected(node.key) : undefined,
        'aria-disabled': state.selectionManager.isDisabled(node.key) || undefined,
        'aria-labelledby': descriptionId && (node['aria-label'] || node.textValue) ? `${(0, $c1c90317e8bffe4d$export$f45c25170b9a99c2)(state, node.key)} ${descriptionId}` : undefined,
        id: (0, $c1c90317e8bffe4d$export$f45c25170b9a99c2)(state, node.key)
    });
    if (focusMode === 'child' && allowsArrowNavigation && keyboardNavigationBehavior === 'tab') rowProps.tabIndex = -1;
    // we need to guard against space/enter triggering selection/row link via usePress (from itemProps) so check if propagation
    // is stopped. this also fixes space not working in a textfield in a tree parent row
    let baseOnKeyDown = rowProps.onKeyDown;
    rowProps.onKeyDown = (e)=>{
        onKeyDown(e);
        if (!e.isPropagationStopped()) baseOnKeyDown?.(e);
    };
    if (isVirtualized) {
        let { collection: collection } = state;
        let nodes = [
            ...collection
        ];
        // TODO: refactor ListCollection to store an absolute index of a node's position?
        rowProps['aria-rowindex'] = nodes.find((node)=>node.type === 'section') ? [
            ...collection.getKeys()
        ].filter((key)=>collection.getItem(key)?.type !== 'section').findIndex((key)=>key === node.key) + 1 : node.index + 1;
    }
    let gridCellProps = {
        role: 'gridcell',
        'aria-colindex': 1
    };
    // TODO: should isExpanded and hasChildRows be a item state that gets returned by the hook?
    // oxlint-disable react/react-compiler
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
// oxlint-enable react/react-compiler
}
function $be7bed9611dd7497$var$handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, rowRef, allowsArrowNavigation) {
    if (!('expandedKeys' in state) || !allowsArrowNavigation && activeElement !== rowRef) return false;
    if (e.key === $be7bed9611dd7497$var$EXPANSION_KEYS['expand'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && !state.expandedKeys.has(node.key)) {
        state.toggleKey(node.key);
        e.stopPropagation();
        return true;
    } else if (e.key === $be7bed9611dd7497$var$EXPANSION_KEYS['collapse'][direction] && state.selectionManager.focusedKey === node.key) {
        // If item is collapsible, collapse it; else move to parent
        if (hasChildRows && state.expandedKeys.has(node.key)) {
            state.toggleKey(node.key);
            e.stopPropagation();
            return true;
        } else if (!state.expandedKeys.has(node.key) && node.parentKey && state.collection.getItem(node.parentKey)?.type === 'item') {
            // Item is a leaf or already collapsed, move focus to parent
            state.selectionManager.setFocusedKey(node.parentKey);
            e.stopPropagation();
            return true;
        }
    }
    return false;
}
function $be7bed9611dd7497$var$last(walker) {
    let next = null;
    let last = null;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
function $be7bed9611dd7497$var$getDirectChildren(parent, collection) {
    // We can't assume that we can use firstChildKey because if a person builds a tree using hooks, they would not have access to that property (using type Node vs CollectionNode)
    // Instead, get all children and start at the first node (rather than just using firstChildKey) and only look at its siblings
    let children = collection.getChildren?.(parent.key);
    let childArray = children ? Array.from(children) : [];
    let node = childArray.length > 0 ? childArray[0] : null;
    let siblings = [];
    while(node){
        siblings.push(node);
        node = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    }
    return siblings;
}



//# sourceMappingURL=useGridListItem.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs + 2 modules
var useKeyboard = __webpack_require__(91357);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(57659);
;// ./node_modules/react-aria/dist/private/tag/useTag.mjs














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











function $8b763916586fd6a6$export$3f568fff7dff2f03(props, state, ref) {
    let { item: item } = props;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($c861dd473ab3d00c$exports))), '@react-aria/tag');
    let buttonId = (0, useId/* useId */.Bi)();
    let { onRemove: onRemove } = (0, $223860f9cb8a07a2$export$653eddfc964b0f8a).get(state) || {};
    let { rowProps: rowProps, gridCellProps: gridCellProps, ...states } = (0, $be7bed9611dd7497$export$9610e69494fadfd2)({
        node: item
    }, state, ref);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { descriptionProps: _, ...stateWithoutDescription } = states;
    let isDisabled = state.disabledKeys.has(item.key) || item.props.isDisabled;
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        isDisabled: isDisabled,
        shortcuts: {
            Delete: ()=>{
                if (state.selectionManager.isSelected(item.key)) onRemove?.(new Set(state.selectionManager.selectedKeys));
                else onRemove?.(new Set([
                    item.key
                ]));
            },
            Backspace: ()=>{
                if (state.selectionManager.isSelected(item.key)) onRemove?.(new Set(state.selectionManager.selectedKeys));
                else onRemove?.(new Set([
                    item.key
                ]));
            }
        },
        allowRepeats: true
    });
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
        ...item.props,
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
            ...onRemove ? keyboardProps : {},
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



//# sourceMappingURL=useTag.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(11513);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var BaseCollection = __webpack_require__(2764);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/list/useListState.mjs
var useListState = __webpack_require__(40447);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var useFocusRing = __webpack_require__(66683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useObjectRef.mjs
var useObjectRef = __webpack_require__(80716);
;// ./node_modules/react-aria-components/dist/private/TagGroup.mjs





















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



















const $3df3ddf5bafbc7b1$export$5b07b5dd2cbd96e3 = /*#__PURE__*/ (0, react.createContext)(null);
const $3df3ddf5bafbc7b1$export$e755ce3685dd0ca9 = /*#__PURE__*/ (0, react.createContext)(null);
const $3df3ddf5bafbc7b1$export$67ea30858aaf75e3 = /*#__PURE__*/ (0, react.forwardRef)(function TagGroup(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $3df3ddf5bafbc7b1$export$5b07b5dd2cbd96e3);
    return /*#__PURE__*/ (0, react).createElement((0, ListBox/* ListStateContext */.DN).Provider, {
        value: null
    }, /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: props.children
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($3df3ddf5bafbc7b1$var$TagGroupInner, {
            props: props,
            forwardedRef: ref,
            collection: collection
        })));
});
function $3df3ddf5bafbc7b1$var$TagGroupInner({ props: props, forwardedRef: ref, collection: collection }) {
    let tagListRef = (0, react.useRef)(null);
    // Extract the user provided id so it doesn't clash with the collection id provided by Autocomplete
    let { id: id, ...otherProps } = props;
    [otherProps, tagListRef] = (0, utils/* useContextProps */.JT)(otherProps, tagListRef, (0, Autocomplete/* SelectableCollectionContext */.Co));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { filter: filter, shouldUseVirtualFocus: shouldUseVirtualFocus, ...DOMCollectionProps } = otherProps;
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let tagGroupState = (0, useListState/* useListState */.p)({
        ...DOMCollectionProps,
        children: undefined,
        collection: collection
    });
    // oxlint-disable-next-line react/react-compiler
    let filteredState = (0, useListState/* UNSTABLE_useFilteredListState */.Z)(tagGroupState, filter);
    // Prevent DOM props from going to two places.
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
        global: true
    });
    let domPropOverrides = Object.fromEntries(Object.entries(domProps).map(([k, val])=>[
            k,
            k === 'id' ? val : undefined
        ]));
    let { gridProps: gridProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $223860f9cb8a07a2$export$4f8b5cda58b7e8ff)({
        ...DOMCollectionProps,
        ...domPropOverrides,
        label: label
    }, filteredState, tagListRef);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        render: props.render,
        ...domProps,
        id: id,
        ref: ref,
        slot: props.slot || undefined,
        className: props.className ?? 'react-aria-TagGroup',
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
                $3df3ddf5bafbc7b1$export$e755ce3685dd0ca9,
                {
                    ...gridProps,
                    ref: tagListRef
                }
            ],
            [
                (0, ListBox/* ListStateContext */.DN),
                filteredState
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
const $3df3ddf5bafbc7b1$export$f9fef0f55402315b = /*#__PURE__*/ (0, react.forwardRef)(function TagList(props, ref) {
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    return state ? /*#__PURE__*/ (0, react).createElement($3df3ddf5bafbc7b1$var$TagListInner, {
        props: props,
        forwardedRef: ref
    }) : /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props);
});
function $3df3ddf5bafbc7b1$var$TagListInner({ props: props, forwardedRef: forwardedRef }) {
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    let { CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let [gridProps, ref] = (0, utils/* useContextProps */.JT)({}, forwardedRef, $3df3ddf5bafbc7b1$export$e755ce3685dd0ca9);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let renderValues = {
        isEmpty: state.collection.size === 0,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        state: state
    };
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-TagList',
        values: renderValues
    });
    let persistedKeys = (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey);
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, gridProps, focusProps),
        ref: ref,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, state.collection.size === 0 && props.renderEmptyState ? props.renderEmptyState(renderValues) : /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: persistedKeys
    })));
}
const $3df3ddf5bafbc7b1$export$3288d34c523a1192 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)((0, BaseCollection/* ItemNode */._B), (props, forwardedRef, item)=>{
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)({
        within: false
    });
    let { rowProps: rowProps, gridCellProps: gridCellProps, removeButtonProps: removeButtonProps, ...states } = (0, $8b763916586fd6a6$export$3f568fff7dff2f03)({
        item: item
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: !states.allowsSelection && !states.hasAction,
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ref: ref,
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, rowProps, focusProps, hoverProps),
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
            ],
            [
                (0, SelectionIndicator/* SelectionIndicatorContext */.r),
                {
                    isSelected: states.isSelected
                }
            ]
        ]
    }, renderProps.children)));
});



//# sourceMappingURL=TagGroup.mjs.map


/***/ }

}]);