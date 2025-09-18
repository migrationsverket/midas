"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1158],{

/***/ 77064:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ $1e2864c73f66a4da$export$6fb4a10d2c950550)
/* harmony export */ });
/* harmony import */ var _Input_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79950);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83908);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83362);
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



const $1e2864c73f66a4da$export$6fb4a10d2c950550 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function FileTrigger(props, ref) {
    let { onSelect: onSelect, acceptedFileTypes: acceptedFileTypes, allowsMultiple: allowsMultiple, defaultCamera: defaultCamera, children: children, acceptDirectory: acceptDirectory, ...rest } = props;
    let inputRef = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useObjectRef */ .U)(ref);
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .filterDOMProps */ .$)(rest, {
        global: true
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__/* .PressResponder */ .Y), {
        onPress: ()=>{
            var _inputRef_current, _inputRef_current1;
            if ((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.value) inputRef.current.value = '';
            (_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.click();
        }
    }, children), /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _Input_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .p), {
        ...domProps,
        type: "file",
        ref: inputRef,
        style: {
            display: 'none'
        },
        accept: acceptedFileTypes === null || acceptedFileTypes === void 0 ? void 0 : acceptedFileTypes.toString(),
        onChange: (e)=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(e.target.files),
        capture: defaultCamera,
        multiple: allowsMultiple,
        // @ts-expect-error
        webkitdirectory: acceptDirectory ? '' : undefined
    }));
});



//# sourceMappingURL=FileTrigger.module.js.map


/***/ }),

/***/ 79950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $3985021b0ad6602f$export$37fb8590cf2c088c),
/* harmony export */   p: () => (/* binding */ $3985021b0ad6602f$export$f5b8910cec6cf069)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32217);
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



const $3985021b0ad6602f$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
let $3985021b0ad6602f$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $3985021b0ad6602f$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Input(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $3985021b0ad6602f$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useHover */ .M)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Input'
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("input", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .mergeProps */ .v)($3985021b0ad6602f$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=Input.module.js.map


/***/ }),

/***/ 95151:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ $cb088e721efb9218$export$3c6489d84dc98b6)
});

// UNUSED EXPORTS: DropZoneContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
;// ./node_modules/react-aria-components/dist/ar-AE.mjs
var $e038a7e7a6d81989$exports = {};
$e038a7e7a6d81989$exports = {
    "colorSwatchPicker": `\u{62A}\u{63A}\u{64A}\u{64A}\u{631}\u{627}\u{62A} \u{627}\u{644}\u{623}\u{644}\u{648}\u{627}\u{646}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{62D}\u{62F}\u{62F} \u{639}\u{646}\u{635}\u{631}\u{64B}\u{627}`,
    "tableResizer": `\u{623}\u{62F}\u{627}\u{629} \u{62A}\u{63A}\u{64A}\u{64A}\u{631} \u{627}\u{644}\u{62D}\u{62C}\u{645}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/react-aria-components/dist/bg-BG.mjs
var $0ec14741b0133644$exports = {};
$0ec14741b0133644$exports = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{438} \u{43C}\u{43E}\u{441}\u{442}\u{440}\u{438}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}`,
    "tableResizer": `\u{41F}\u{440}\u{435}\u{43E}\u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{438}\u{442}\u{435}\u{43B}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/react-aria-components/dist/cs-CZ.mjs
var $642f7badf2405784$exports = {};
$642f7badf2405784$exports = {
    "colorSwatchPicker": `Vzorky barev`,
    "dropzoneLabel": `M\xedsto pro p\u{159}eta\u{17E}en\xed`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `Zm\u{11B}na velikosti`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/react-aria-components/dist/da-DK.mjs
var $30cee8d2535734ec$exports = {};
$30cee8d2535734ec$exports = {
    "colorSwatchPicker": `Farvepr\xf8ver`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe6lg et element`,
    "tableResizer": `St\xf8rrelses\xe6ndring`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/react-aria-components/dist/de-DE.mjs
var $c302d0504fca332a$exports = {};
$c302d0504fca332a$exports = {
    "colorSwatchPicker": `Farbfelder`,
    "dropzoneLabel": `Ablegebereich`,
    "selectPlaceholder": `Element w\xe4hlen`,
    "tableResizer": `Gr\xf6\xdfenanpassung`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/react-aria-components/dist/el-GR.mjs
var $0d0703f2bd7e421c$exports = {};
$0d0703f2bd7e421c$exports = {
    "colorSwatchPicker": `\u{3A7}\u{3C1}\u{3C9}\u{3BC}\u{3B1}\u{3C4}\u{3B9}\u{3BA}\u{3AC} \u{3B4}\u{3B5}\u{3AF}\u{3B3}\u{3BC}\u{3B1}\u{3C4}\u{3B1}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3BE}\u{3C4}\u{3B5} \u{3AD}\u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3C4}\u{3B9}\u{3BA}\u{3B5}\u{3AF}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "tableResizer": `\u{391}\u{3BB}\u{3BB}\u{3B1}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3B3}\u{3AD}\u{3B8}\u{3BF}\u{3C5}\u{3C2}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/react-aria-components/dist/en-US.mjs
var $cafa55beb2fc5ef3$exports = {};
$cafa55beb2fc5ef3$exports = {
    "selectPlaceholder": `Select an item`,
    "tableResizer": `Resizer`,
    "dropzoneLabel": `DropZone`,
    "colorSwatchPicker": `Color swatches`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/react-aria-components/dist/es-ES.mjs
var $18ac2ceede598103$exports = {};
$18ac2ceede598103$exports = {
    "colorSwatchPicker": `Muestras de colores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Seleccionar un art\xedculo`,
    "tableResizer": `Cambiador de tama\xf1o`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/react-aria-components/dist/et-EE.mjs
var $718705a15b8a633a$exports = {};
$718705a15b8a633a$exports = {
    "colorSwatchPicker": `V\xe4rvin\xe4idised`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valige \xfcksus`,
    "tableResizer": `Suuruse muutja`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/react-aria-components/dist/fi-FI.mjs
var $bf36dae9ecc81ce0$exports = {};
$bf36dae9ecc81ce0$exports = {
    "colorSwatchPicker": `V\xe4rimallit`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valitse kohde`,
    "tableResizer": `Koon muuttaja`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/react-aria-components/dist/fr-FR.mjs
var $0b4828edb010b855$exports = {};
$0b4828edb010b855$exports = {
    "colorSwatchPicker": `\xc9chantillons de couleurs`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `S\xe9lectionner un \xe9l\xe9ment`,
    "tableResizer": `Redimensionneur`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/react-aria-components/dist/he-IL.mjs
var $0030f210b040e540$exports = {};
$0030f210b040e540$exports = {
    "colorSwatchPicker": `\u{5D3}\u{5D5}\u{5D2}\u{5DE}\u{5D9}\u{5D5}\u{5EA} \u{5E6}\u{5D1}\u{5E2}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{5D1}\u{5D7}\u{5E8} \u{5E4}\u{5E8}\u{5D9}\u{5D8}`,
    "tableResizer": `\u{5E9}\u{5D9}\u{5E0}\u{5D5}\u{5D9} \u{5D2}\u{5D5}\u{5D3}\u{5DC}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/react-aria-components/dist/hr-HR.mjs
var $1f0ebacf5a0c0fa1$exports = {};
$1f0ebacf5a0c0fa1$exports = {
    "colorSwatchPicker": `Uzorci boja`,
    "dropzoneLabel": `Zona spu\u{161}tanja`,
    "selectPlaceholder": `Odaberite stavku`,
    "tableResizer": `Promjena veli\u{10D}ine`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/react-aria-components/dist/hu-HU.mjs
var $3a706ba61f3d6bba$exports = {};
$3a706ba61f3d6bba$exports = {
    "colorSwatchPicker": `Sz\xednt\xe1rak`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe1lasszon ki egy elemet`,
    "tableResizer": `\xc1tm\xe9retez\u{151}`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/react-aria-components/dist/it-IT.mjs
var $0d17809e74607796$exports = {};
$0d17809e74607796$exports = {
    "colorSwatchPicker": `Campioni di colore`,
    "dropzoneLabel": `Zona di rilascio`,
    "selectPlaceholder": `Seleziona un elemento`,
    "tableResizer": `Ridimensionamento`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/react-aria-components/dist/ja-JP.mjs
var $65a71f9a56f1398f$exports = {};
$65a71f9a56f1398f$exports = {
    "colorSwatchPicker": `\u{30AB}\u{30E9}\u{30FC}\u{30B9}\u{30A6}\u{30A9}\u{30C3}\u{30C1}`,
    "dropzoneLabel": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30BE}\u{30FC}\u{30F3}`,
    "selectPlaceholder": `\u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}`,
    "tableResizer": `\u{30B5}\u{30A4}\u{30BA}\u{5909}\u{66F4}\u{30C4}\u{30FC}\u{30EB}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/react-aria-components/dist/ko-KR.mjs
var $e5efad074a74abef$exports = {};
$e5efad074a74abef$exports = {
    "colorSwatchPicker": `\u{C0C9}\u{C0C1} \u{ACAC}\u{BCF8}`,
    "dropzoneLabel": `\u{B4DC}\u{B86D} \u{C601}\u{C5ED}`,
    "selectPlaceholder": `\u{D56D}\u{BAA9} \u{C120}\u{D0DD}`,
    "tableResizer": `\u{D06C}\u{AE30} \u{C870}\u{C815}\u{AE30}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/react-aria-components/dist/lt-LT.mjs
var $d70c2a849e55c607$exports = {};
$d70c2a849e55c607$exports = {
    "colorSwatchPicker": `Spalv\u{173} pavyzd\u{17E}iai`,
    "dropzoneLabel": `\u{201E}DropZone\u{201C}`,
    "selectPlaceholder": `Pasirinkite element\u{105}`,
    "tableResizer": `Dyd\u{17E}io keitiklis`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/react-aria-components/dist/lv-LV.mjs
var $009bbbb440d0e907$exports = {};
$009bbbb440d0e907$exports = {
    "colorSwatchPicker": `Kr\u{101}su paraugi`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izv\u{113}l\u{113}ties vienumu`,
    "tableResizer": `Izm\u{113}ra main\u{12B}t\u{101}js`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/react-aria-components/dist/nb-NO.mjs
var $9366fe642464ee83$exports = {};
$9366fe642464ee83$exports = {
    "colorSwatchPicker": `Fargekart`,
    "dropzoneLabel": `Droppsone`,
    "selectPlaceholder": `Velg et element`,
    "tableResizer": `St\xf8rrelsesendrer`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/react-aria-components/dist/nl-NL.mjs
var $62f9bc1f98ea21de$exports = {};
$62f9bc1f98ea21de$exports = {
    "colorSwatchPicker": `kleurstalen`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecteer een item`,
    "tableResizer": `Resizer`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/react-aria-components/dist/pl-PL.mjs
var $4ec2e5b6623b1b76$exports = {};
$4ec2e5b6623b1b76$exports = {
    "colorSwatchPicker": `Pr\xf3bki kolor\xf3w`,
    "dropzoneLabel": `Strefa upuszczania`,
    "selectPlaceholder": `Wybierz element`,
    "tableResizer": `Zmiana rozmiaru`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/react-aria-components/dist/pt-BR.mjs
var $e25098e26647cc04$exports = {};
$e25098e26647cc04$exports = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/react-aria-components/dist/pt-PT.mjs
var $dd39c57d242c8156$exports = {};
$dd39c57d242c8156$exports = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/react-aria-components/dist/ro-RO.mjs
var $3b4c1ba5afd57b35$exports = {};
$3b4c1ba5afd57b35$exports = {
    "colorSwatchPicker": `Specimene de culoare`,
    "dropzoneLabel": `Zon\u{103} de plasare`,
    "selectPlaceholder": `Selecta\u{21B}i un element`,
    "tableResizer": `Instrument de redimensionare`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/react-aria-components/dist/ru-RU.mjs
var $a455b2cda79eb746$exports = {};
$a455b2cda79eb746$exports = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{44B}\u{435} \u{43E}\u{431}\u{440}\u{430}\u{437}\u{446}\u{44B}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{421}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{43E} \u{438}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{44F} \u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{430}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/react-aria-components/dist/sk-SK.mjs
var $b983ca1383d5b960$exports = {};
$b983ca1383d5b960$exports = {
    "colorSwatchPicker": `Vzorkovn\xedky farieb`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `N\xe1stroj na zmenu ve\u{13E}kosti`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/react-aria-components/dist/sl-SI.mjs
var $32a515ef673b0655$exports = {};
$32a515ef673b0655$exports = {
    "colorSwatchPicker": `Barvne palete`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izberite element`,
    "tableResizer": `Spreminjanje velikosti`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/react-aria-components/dist/sr-SP.mjs
var $89434176ab35446b$exports = {};
$89434176ab35446b$exports = {
    "colorSwatchPicker": `Uzorci boje`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izaberite stavku`,
    "tableResizer": `Promena veli\u{10D}ine`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/react-aria-components/dist/sv-SE.mjs
var $727da781aca847f9$exports = {};
$727da781aca847f9$exports = {
    "colorSwatchPicker": `F\xe4rgrutor`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe4lj en artikel`,
    "tableResizer": `Storleks\xe4ndrare`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/react-aria-components/dist/tr-TR.mjs
var $fcd2d84b9a2d489c$exports = {};
$fcd2d84b9a2d489c$exports = {
    "colorSwatchPicker": `Renk \xf6rnekleri`,
    "dropzoneLabel": `B\u{131}rakma B\xf6lgesi`,
    "selectPlaceholder": `Bir \xf6\u{11F}e se\xe7in`,
    "tableResizer": `Yeniden boyutland\u{131}r\u{131}c\u{131}`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/react-aria-components/dist/uk-UA.mjs
var $2422ac328687ee23$exports = {};
$2422ac328687ee23$exports = {
    "colorSwatchPicker": `\u{417}\u{440}\u{430}\u{437}\u{43A}\u{438} \u{43A}\u{43E}\u{43B}\u{44C}\u{43E}\u{440}\u{456}\u{432}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{438}\u{431}\u{435}\u{440}\u{456}\u{442}\u{44C} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{417}\u{430}\u{441}\u{456}\u{431} \u{437}\u{43C}\u{456}\u{43D}\u{435}\u{43D}\u{43D}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{440}\u{443}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/react-aria-components/dist/zh-CN.mjs
var $c9a532d1c973af61$exports = {};
$c9a532d1c973af61$exports = {
    "colorSwatchPicker": `\u{989C}\u{8272}\u{8272}\u{677F}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{533A}\u{57DF}`,
    "selectPlaceholder": `\u{9009}\u{62E9}\u{4E00}\u{4E2A}\u{9879}\u{76EE}`,
    "tableResizer": `\u{5C3A}\u{5BF8}\u{8C03}\u{6574}\u{5668}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/react-aria-components/dist/zh-TW.mjs
var $34de119f14549a4b$exports = {};
$34de119f14549a4b$exports = {
    "colorSwatchPicker": `\u{8272}\u{7968}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{5340}`,
    "selectPlaceholder": `\u{9078}\u{53D6}\u{9805}\u{76EE}`,
    "tableResizer": `\u{5927}\u{5C0F}\u{8ABF}\u{6574}\u{5668}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/react-aria-components/dist/intlStrings.mjs



































var $df39c1238ae2b5f3$exports = {};


































$df39c1238ae2b5f3$exports = {
    "ar-AE": $e038a7e7a6d81989$exports,
    "bg-BG": $0ec14741b0133644$exports,
    "cs-CZ": $642f7badf2405784$exports,
    "da-DK": $30cee8d2535734ec$exports,
    "de-DE": $c302d0504fca332a$exports,
    "el-GR": $0d0703f2bd7e421c$exports,
    "en-US": $cafa55beb2fc5ef3$exports,
    "es-ES": $18ac2ceede598103$exports,
    "et-EE": $718705a15b8a633a$exports,
    "fi-FI": $bf36dae9ecc81ce0$exports,
    "fr-FR": $0b4828edb010b855$exports,
    "he-IL": $0030f210b040e540$exports,
    "hr-HR": $1f0ebacf5a0c0fa1$exports,
    "hu-HU": $3a706ba61f3d6bba$exports,
    "it-IT": $0d17809e74607796$exports,
    "ja-JP": $65a71f9a56f1398f$exports,
    "ko-KR": $e5efad074a74abef$exports,
    "lt-LT": $d70c2a849e55c607$exports,
    "lv-LV": $009bbbb440d0e907$exports,
    "nb-NO": $9366fe642464ee83$exports,
    "nl-NL": $62f9bc1f98ea21de$exports,
    "pl-PL": $4ec2e5b6623b1b76$exports,
    "pt-BR": $e25098e26647cc04$exports,
    "pt-PT": $dd39c57d242c8156$exports,
    "ro-RO": $3b4c1ba5afd57b35$exports,
    "ru-RU": $a455b2cda79eb746$exports,
    "sk-SK": $b983ca1383d5b960$exports,
    "sl-SI": $32a515ef673b0655$exports,
    "sr-SP": $89434176ab35446b$exports,
    "sv-SE": $727da781aca847f9$exports,
    "tr-TR": $fcd2d84b9a2d489c$exports,
    "uk-UA": $2422ac328687ee23$exports,
    "zh-CN": $c9a532d1c973af61$exports,
    "zh-TW": $34de119f14549a4b$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/dnd/dist/DragManager.mjs






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




let $67560de7c78cb232$var$dropTargets = new Map();
let $67560de7c78cb232$var$dropItems = new Map();
let $67560de7c78cb232$var$dragSession = null;
let $67560de7c78cb232$var$subscriptions = new Set();
function $67560de7c78cb232$export$c28d9fb4a54e471a(target) {
    $67560de7c78cb232$var$dropTargets.set(target.element, target);
    $67560de7c78cb232$var$dragSession === null || $67560de7c78cb232$var$dragSession === void 0 ? void 0 : $67560de7c78cb232$var$dragSession.updateValidDropTargets();
    return ()=>{
        $67560de7c78cb232$var$dropTargets.delete(target.element);
        $67560de7c78cb232$var$dragSession === null || $67560de7c78cb232$var$dragSession === void 0 ? void 0 : $67560de7c78cb232$var$dragSession.updateValidDropTargets();
    };
}
function $67560de7c78cb232$export$aef80212ac99c003(item) {
    $67560de7c78cb232$var$dropItems.set(item.element, item);
    return ()=>{
        $67560de7c78cb232$var$dropItems.delete(item.element);
    };
}
function $67560de7c78cb232$export$549dbcf8649bf3b2(target, stringFormatter) {
    if ($67560de7c78cb232$var$dragSession) throw new Error('Cannot begin dragging while already dragging');
    $67560de7c78cb232$var$dragSession = new $67560de7c78cb232$var$DragSession(target, stringFormatter);
    requestAnimationFrame(()=>{
        if ($67560de7c78cb232$var$dragSession) {
            $67560de7c78cb232$var$dragSession.setup();
            if ((0, $7252cd45fc48c07c$export$1fb2158d224b542c)() === 'keyboard') $67560de7c78cb232$var$dragSession.next();
        }
    });
    for (let cb of $67560de7c78cb232$var$subscriptions)cb();
}
function $67560de7c78cb232$export$418e185dd3f1b968() {
    let [session, setSession] = (0, react.useState)($67560de7c78cb232$var$dragSession);
    (0, react.useEffect)(()=>{
        let cb = ()=>setSession($67560de7c78cb232$var$dragSession);
        $67560de7c78cb232$var$subscriptions.add(cb);
        return ()=>{
            $67560de7c78cb232$var$subscriptions.delete(cb);
        };
    }, []);
    return session;
}
function $67560de7c78cb232$export$403bc76cbf68cf60() {
    return !!$67560de7c78cb232$var$dragSession;
}
function $67560de7c78cb232$var$endDragging() {
    $67560de7c78cb232$var$dragSession = null;
    for (let cb of $67560de7c78cb232$var$subscriptions)cb();
}
function $67560de7c78cb232$export$7454aff2e161f241(element) {
    for (let target of $67560de7c78cb232$var$dropTargets.keys()){
        if (target.contains(element)) return true;
    }
    return false;
}
const $67560de7c78cb232$var$CANCELED_EVENTS = (/* unused pure expression or super */ null && ([
    'pointerdown',
    'pointermove',
    'pointerenter',
    'pointerleave',
    'pointerover',
    'pointerout',
    'pointerup',
    'mousedown',
    'mousemove',
    'mouseenter',
    'mouseleave',
    'mouseover',
    'mouseout',
    'mouseup',
    'touchstart',
    'touchmove',
    'touchend',
    'focusin',
    'focusout'
]));
const $67560de7c78cb232$var$CLICK_EVENTS = (/* unused pure expression or super */ null && ([
    'pointerup',
    'mouseup',
    'touchend'
]));
const $67560de7c78cb232$var$MESSAGES = {
    keyboard: 'dragStartedKeyboard',
    touch: 'dragStartedTouch',
    virtual: 'dragStartedVirtual'
};
class $67560de7c78cb232$var$DragSession {
    setup() {
        document.addEventListener('keydown', this.onKeyDown, true);
        document.addEventListener('keyup', this.onKeyUp, true);
        window.addEventListener('focus', this.onFocus, true);
        window.addEventListener('blur', this.onBlur, true);
        document.addEventListener('click', this.onClick, true);
        document.addEventListener('pointerdown', this.onPointerDown, true);
        for (let event of $67560de7c78cb232$var$CANCELED_EVENTS)document.addEventListener(event, this.cancelEvent, true);
        this.mutationObserver = new MutationObserver(()=>this.updateValidDropTargets());
        this.updateValidDropTargets();
        (0, $irqIb$announce)(this.stringFormatter.format($67560de7c78cb232$var$MESSAGES[(0, $7252cd45fc48c07c$export$1fb2158d224b542c)()]));
    }
    teardown() {
        var _this_mutationObserver, _this_restoreAriaHidden, _this;
        document.removeEventListener('keydown', this.onKeyDown, true);
        document.removeEventListener('keyup', this.onKeyUp, true);
        window.removeEventListener('focus', this.onFocus, true);
        window.removeEventListener('blur', this.onBlur, true);
        document.removeEventListener('click', this.onClick, true);
        document.removeEventListener('pointerdown', this.onPointerDown, true);
        for (let event of $67560de7c78cb232$var$CANCELED_EVENTS)document.removeEventListener(event, this.cancelEvent, true);
        (_this_mutationObserver = this.mutationObserver) === null || _this_mutationObserver === void 0 ? void 0 : _this_mutationObserver.disconnect();
        (_this_restoreAriaHidden = (_this = this).restoreAriaHidden) === null || _this_restoreAriaHidden === void 0 ? void 0 : _this_restoreAriaHidden.call(_this);
    }
    onKeyDown(e) {
        var _this_currentDropTarget;
        this.cancelEvent(e);
        if (e.key === 'Escape') {
            this.cancel();
            return;
        }
        if (e.key === 'Tab' && !(e.metaKey || e.altKey || e.ctrlKey)) {
            if (e.shiftKey) this.previous();
            else this.next();
        }
        if (typeof ((_this_currentDropTarget = this.currentDropTarget) === null || _this_currentDropTarget === void 0 ? void 0 : _this_currentDropTarget.onKeyDown) === 'function') this.currentDropTarget.onKeyDown(e, this.dragTarget);
    }
    onKeyUp(e) {
        this.cancelEvent(e);
        if (e.key === 'Enter') {
            var _this_getCurrentActivateButton;
            if (e.altKey || ((_this_getCurrentActivateButton = this.getCurrentActivateButton()) === null || _this_getCurrentActivateButton === void 0 ? void 0 : _this_getCurrentActivateButton.contains(e.target))) this.activate(this.currentDropTarget, this.currentDropItem);
            else this.drop();
        }
    }
    getCurrentActivateButton() {
        var _this_currentDropItem_activateButtonRef, _this_currentDropItem, _this_currentDropTarget_activateButtonRef, _this_currentDropTarget;
        var _this_currentDropItem_activateButtonRef_current, _ref;
        return (_ref = (_this_currentDropItem_activateButtonRef_current = (_this_currentDropItem = this.currentDropItem) === null || _this_currentDropItem === void 0 ? void 0 : (_this_currentDropItem_activateButtonRef = _this_currentDropItem.activateButtonRef) === null || _this_currentDropItem_activateButtonRef === void 0 ? void 0 : _this_currentDropItem_activateButtonRef.current) !== null && _this_currentDropItem_activateButtonRef_current !== void 0 ? _this_currentDropItem_activateButtonRef_current : (_this_currentDropTarget = this.currentDropTarget) === null || _this_currentDropTarget === void 0 ? void 0 : (_this_currentDropTarget_activateButtonRef = _this_currentDropTarget.activateButtonRef) === null || _this_currentDropTarget_activateButtonRef === void 0 ? void 0 : _this_currentDropTarget_activateButtonRef.current) !== null && _ref !== void 0 ? _ref : null;
    }
    onFocus(e) {
        let activateButton = this.getCurrentActivateButton();
        if (e.target === activateButton) {
            // TODO: canceling this breaks the focus ring. Revisit when we support tabbing.
            this.cancelEvent(e);
            return;
        }
        // Prevent focus events, except to the original drag target.
        if (e.target !== this.dragTarget.element) this.cancelEvent(e);
        // Ignore focus events on the window/document (JSDOM). Will be handled in onBlur, below.
        if (!(e.target instanceof HTMLElement) || e.target === this.dragTarget.element) return;
        let dropTarget = this.validDropTargets.find((target)=>target.element === e.target) || this.validDropTargets.find((target)=>target.element.contains(e.target));
        if (!dropTarget) {
            // if (e.target === activateButton) {
            //   activateButton.focus();
            // }
            if (this.currentDropTarget) this.currentDropTarget.element.focus();
            else this.dragTarget.element.focus();
            return;
        }
        let item = $67560de7c78cb232$var$dropItems.get(e.target);
        if (dropTarget) this.setCurrentDropTarget(dropTarget, item);
    }
    onBlur(e) {
        let activateButton = this.getCurrentActivateButton();
        if (e.relatedTarget === activateButton) {
            this.cancelEvent(e);
            return;
        }
        if (e.target !== this.dragTarget.element) this.cancelEvent(e);
        // If nothing is gaining focus, or e.relatedTarget is the window/document (JSDOM),
        // restore focus back to the current drop target if any, or the original drag target.
        if (!e.relatedTarget || !(e.relatedTarget instanceof HTMLElement)) {
            if (this.currentDropTarget) this.currentDropTarget.element.focus();
            else this.dragTarget.element.focus();
        }
    }
    onClick(e) {
        this.cancelEvent(e);
        if ((0, $irqIb$isVirtualClick)(e) || this.isVirtualClick) {
            var _item_activateButtonRef, _dropTarget_activateButtonRef;
            let dropElements = $67560de7c78cb232$var$dropItems.values();
            let item = [
                ...dropElements
            ].find((item)=>{
                var _item_activateButtonRef_current, _item_activateButtonRef;
                return item.element === e.target || ((_item_activateButtonRef = item.activateButtonRef) === null || _item_activateButtonRef === void 0 ? void 0 : (_item_activateButtonRef_current = _item_activateButtonRef.current) === null || _item_activateButtonRef_current === void 0 ? void 0 : _item_activateButtonRef_current.contains(e.target));
            });
            let dropTarget = this.validDropTargets.find((target)=>target.element.contains(e.target));
            var _item_activateButtonRef_current;
            let activateButton = (_item_activateButtonRef_current = item === null || item === void 0 ? void 0 : (_item_activateButtonRef = item.activateButtonRef) === null || _item_activateButtonRef === void 0 ? void 0 : _item_activateButtonRef.current) !== null && _item_activateButtonRef_current !== void 0 ? _item_activateButtonRef_current : dropTarget === null || dropTarget === void 0 ? void 0 : (_dropTarget_activateButtonRef = dropTarget.activateButtonRef) === null || _dropTarget_activateButtonRef === void 0 ? void 0 : _dropTarget_activateButtonRef.current;
            if ((activateButton === null || activateButton === void 0 ? void 0 : activateButton.contains(e.target)) && dropTarget) {
                this.activate(dropTarget, item);
                return;
            }
            if (e.target === this.dragTarget.element) {
                this.cancel();
                return;
            }
            if (dropTarget) {
                this.setCurrentDropTarget(dropTarget, item);
                this.drop(item);
            }
        }
    }
    onPointerDown(e) {
        // Android Talkback double tap has e.detail = 1 for onClick. Detect the virtual click in onPointerDown before onClick fires
        // so we can properly perform cancel and drop operations.
        this.cancelEvent(e);
        this.isVirtualClick = (0, $irqIb$isVirtualPointerEvent)(e);
    }
    cancelEvent(e) {
        var _this_dragTarget;
        // Allow focusin and focusout on the drag target so focus ring works properly.
        if ((e.type === 'focusin' || e.type === 'focusout') && (e.target === ((_this_dragTarget = this.dragTarget) === null || _this_dragTarget === void 0 ? void 0 : _this_dragTarget.element) || e.target === this.getCurrentActivateButton())) return;
        // Allow default for events that might cancel a click event
        if (!$67560de7c78cb232$var$CLICK_EVENTS.includes(e.type)) e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
    updateValidDropTargets() {
        if (!this.mutationObserver) return;
        this.mutationObserver.disconnect();
        if (this.restoreAriaHidden) this.restoreAriaHidden();
        this.validDropTargets = $67560de7c78cb232$var$findValidDropTargets(this.dragTarget);
        // Shuffle drop target order based on starting drag target.
        if (this.validDropTargets.length > 0) {
            let nearestIndex = this.findNearestDropTarget();
            this.validDropTargets = [
                ...this.validDropTargets.slice(nearestIndex),
                ...this.validDropTargets.slice(0, nearestIndex)
            ];
        }
        if (this.currentDropTarget && !this.validDropTargets.includes(this.currentDropTarget)) this.setCurrentDropTarget(this.validDropTargets[0]);
        // Find valid drop items within collections
        let types = (0, $7252cd45fc48c07c$export$e1d41611756c6326)(this.dragTarget.items);
        let validDropItems = [
            ...$67560de7c78cb232$var$dropItems.values()
        ].filter((item)=>{
            if (typeof item.getDropOperation === 'function') return item.getDropOperation(types, this.dragTarget.allowedDropOperations) !== 'cancel';
            return true;
        });
        // Filter out drop targets that contain valid items. We don't want to stop hiding elements
        // other than the drop items that exist inside the collection.
        let visibleDropTargets = this.validDropTargets.filter((target)=>!validDropItems.some((item)=>target.element.contains(item.element)));
        this.restoreAriaHidden = (0, $irqIb$ariaHideOutside)([
            this.dragTarget.element,
            ...validDropItems.flatMap((item)=>{
                var _item_activateButtonRef, _item_activateButtonRef1;
                return ((_item_activateButtonRef = item.activateButtonRef) === null || _item_activateButtonRef === void 0 ? void 0 : _item_activateButtonRef.current) ? [
                    item.element,
                    (_item_activateButtonRef1 = item.activateButtonRef) === null || _item_activateButtonRef1 === void 0 ? void 0 : _item_activateButtonRef1.current
                ] : [
                    item.element
                ];
            }),
            ...visibleDropTargets.flatMap((target)=>{
                var _target_activateButtonRef, _target_activateButtonRef1;
                return ((_target_activateButtonRef = target.activateButtonRef) === null || _target_activateButtonRef === void 0 ? void 0 : _target_activateButtonRef.current) ? [
                    target.element,
                    (_target_activateButtonRef1 = target.activateButtonRef) === null || _target_activateButtonRef1 === void 0 ? void 0 : _target_activateButtonRef1.current
                ] : [
                    target.element
                ];
            })
        ], {
            shouldUseInert: true
        });
        this.mutationObserver.observe(document.body, {
            subtree: true,
            attributes: true,
            attributeFilter: [
                'aria-hidden',
                'inert'
            ]
        });
    }
    next() {
        // TODO: Allow tabbing to the activate button. Revisit once we fix the focus ring.
        // For now, the activate button is reachable by screen readers and ArrowLeft/ArrowRight
        // is usable specifically by Tree. Will need tabbing for other components.
        // let activateButton = this.getCurrentActivateButton();
        // if (activateButton && document.activeElement !== activateButton) {
        //   activateButton.focus();
        //   return;
        // }
        if (!this.currentDropTarget) {
            this.setCurrentDropTarget(this.validDropTargets[0]);
            return;
        }
        let index = this.validDropTargets.indexOf(this.currentDropTarget);
        if (index < 0) {
            this.setCurrentDropTarget(this.validDropTargets[0]);
            return;
        }
        // If we've reached the end of the valid drop targets, cycle back to the original drag target.
        // This lets the user cancel the drag in case they don't have an Escape key (e.g. iPad keyboard case).
        if (index === this.validDropTargets.length - 1) {
            if (!this.dragTarget.element.closest('[aria-hidden="true"], [inert]')) {
                this.setCurrentDropTarget(null);
                this.dragTarget.element.focus();
            } else this.setCurrentDropTarget(this.validDropTargets[0]);
        } else this.setCurrentDropTarget(this.validDropTargets[index + 1]);
    }
    previous() {
        // let activateButton = this.getCurrentActivateButton();
        // if (activateButton && document.activeElement === activateButton) {
        //   let target = this.currentDropItem ?? this.currentDropTarget;
        //   if (target) {
        //     target.element.focus();
        //     return;
        //   }
        // }
        if (!this.currentDropTarget) {
            this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
            return;
        }
        let index = this.validDropTargets.indexOf(this.currentDropTarget);
        if (index < 0) {
            this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
            return;
        }
        // If we've reached the start of the valid drop targets, cycle back to the original drag target.
        // This lets the user cancel the drag in case they don't have an Escape key (e.g. iPad keyboard case).
        if (index === 0) {
            if (!this.dragTarget.element.closest('[aria-hidden="true"], [inert]')) {
                this.setCurrentDropTarget(null);
                this.dragTarget.element.focus();
            } else this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
        } else this.setCurrentDropTarget(this.validDropTargets[index - 1]);
    }
    findNearestDropTarget() {
        let dragTargetRect = this.dragTarget.element.getBoundingClientRect();
        let minDistance = Infinity;
        let nearest = -1;
        for(let i = 0; i < this.validDropTargets.length; i++){
            let dropTarget = this.validDropTargets[i];
            let rect = dropTarget.element.getBoundingClientRect();
            let dx = rect.left - dragTargetRect.left;
            let dy = rect.top - dragTargetRect.top;
            let dist = dx * dx + dy * dy;
            if (dist < minDistance) {
                minDistance = dist;
                nearest = i;
            }
        }
        return nearest;
    }
    setCurrentDropTarget(dropTarget, item) {
        if (dropTarget !== this.currentDropTarget) {
            if (this.currentDropTarget && typeof this.currentDropTarget.onDropExit === 'function') {
                let rect = this.currentDropTarget.element.getBoundingClientRect();
                this.currentDropTarget.onDropExit({
                    type: 'dropexit',
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                });
            }
            this.currentDropTarget = dropTarget;
            if (dropTarget) {
                if (typeof dropTarget.onDropEnter === 'function') {
                    let rect = dropTarget.element.getBoundingClientRect();
                    dropTarget.onDropEnter({
                        type: 'dropenter',
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2
                    }, this.dragTarget);
                }
                if (!item) dropTarget === null || dropTarget === void 0 ? void 0 : dropTarget.element.focus();
            }
        }
        if (item != null && item !== this.currentDropItem) {
            if (this.currentDropTarget && typeof this.currentDropTarget.onDropTargetEnter === 'function') this.currentDropTarget.onDropTargetEnter(item.target);
            item.element.focus();
            this.currentDropItem = item;
            // Announce first drop target after drag start announcement finishes.
            // Otherwise, it will never get announced because drag start announcement is assertive.
            if (!this.initialFocused) {
                let label = item === null || item === void 0 ? void 0 : item.element.getAttribute('aria-label');
                if (label) (0, $irqIb$announce)(label, 'polite');
                this.initialFocused = true;
            }
        }
    }
    end() {
        var // Re-trigger focus event on active element, since it will not have received it during dragging (see cancelEvent).
        // This corrects state such as whether focus ring should appear.
        // useDroppableCollection handles this itself, so this is only for standalone drop zones.
        _document_activeElement;
        this.teardown();
        $67560de7c78cb232$var$endDragging();
        if (typeof this.dragTarget.onDragEnd === 'function') {
            let target = this.currentDropTarget && this.dropOperation !== 'cancel' ? this.currentDropTarget : this.dragTarget;
            let rect = target.element.getBoundingClientRect();
            this.dragTarget.onDragEnd({
                type: 'dragend',
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2,
                dropOperation: this.dropOperation || 'cancel'
            });
        }
        if (this.currentDropTarget && !this.currentDropTarget.preventFocusOnDrop) (_document_activeElement = document.activeElement) === null || _document_activeElement === void 0 ? void 0 : _document_activeElement.dispatchEvent(new FocusEvent('focusin', {
            bubbles: true
        }));
        this.setCurrentDropTarget(null);
    }
    cancel() {
        this.setCurrentDropTarget(null);
        this.end();
        if (!this.dragTarget.element.closest('[aria-hidden="true"], [inert]')) this.dragTarget.element.focus();
        (0, $irqIb$announce)(this.stringFormatter.format('dropCanceled'));
    }
    drop(item) {
        if (!this.currentDropTarget) {
            this.cancel();
            return;
        }
        if (typeof (item === null || item === void 0 ? void 0 : item.getDropOperation) === 'function') {
            let types = (0, $7252cd45fc48c07c$export$e1d41611756c6326)(this.dragTarget.items);
            this.dropOperation = item.getDropOperation(types, this.dragTarget.allowedDropOperations);
        } else if (typeof this.currentDropTarget.getDropOperation === 'function') {
            let types = (0, $7252cd45fc48c07c$export$e1d41611756c6326)(this.dragTarget.items);
            this.dropOperation = this.currentDropTarget.getDropOperation(types, this.dragTarget.allowedDropOperations);
        } else // TODO: show menu ??
        this.dropOperation = this.dragTarget.allowedDropOperations[0];
        if (typeof this.currentDropTarget.onDrop === 'function') {
            let items = this.dragTarget.items.map((item)=>({
                    kind: 'text',
                    types: new Set(Object.keys(item)),
                    getText: (type)=>Promise.resolve(item[type])
                }));
            let rect = this.currentDropTarget.element.getBoundingClientRect();
            var _item_target;
            this.currentDropTarget.onDrop({
                type: 'drop',
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                items: items,
                dropOperation: this.dropOperation
            }, (_item_target = item === null || item === void 0 ? void 0 : item.target) !== null && _item_target !== void 0 ? _item_target : null);
        }
        this.end();
        (0, $irqIb$announce)(this.stringFormatter.format('dropComplete'));
    }
    activate(dropTarget, dropItem) {
        if (dropTarget && typeof dropTarget.onDropActivate === 'function') {
            var _dropItem_target;
            let target = (_dropItem_target = dropItem === null || dropItem === void 0 ? void 0 : dropItem.target) !== null && _dropItem_target !== void 0 ? _dropItem_target : null;
            let rect = dropTarget.element.getBoundingClientRect();
            dropTarget.onDropActivate({
                type: 'dropactivate',
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            }, target);
        }
    }
    constructor(target, stringFormatter){
        this.validDropTargets = [];
        this.currentDropTarget = null;
        this.currentDropItem = null;
        this.dropOperation = null;
        this.mutationObserver = null;
        this.restoreAriaHidden = null;
        this.isVirtualClick = false;
        this.dragTarget = target;
        this.stringFormatter = stringFormatter;
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onPointerDown = this.onPointerDown.bind(this);
        this.cancelEvent = this.cancelEvent.bind(this);
        this.initialFocused = false;
    }
}
function $67560de7c78cb232$var$findValidDropTargets(options) {
    let types = (0, $7252cd45fc48c07c$export$e1d41611756c6326)(options.items);
    return [
        ...$67560de7c78cb232$var$dropTargets.values()
    ].filter((target)=>{
        if (target.element.closest('[aria-hidden="true"], [inert]')) return false;
        if (typeof target.getDropOperation === 'function') return target.getDropOperation(types, options.allowedDropOperations) !== 'cancel';
        return true;
    });
}



//# sourceMappingURL=DragManager.module.js.map

;// ./node_modules/@react-aria/dnd/dist/constants.mjs
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
 */ var $103790afe9474d1c$export$60b7b4bcf3903d8e = /*#__PURE__*/ function(DROP_OPERATION) {
    DROP_OPERATION[DROP_OPERATION["none"] = 0] = "none";
    DROP_OPERATION[DROP_OPERATION["cancel"] = 0] = "cancel";
    DROP_OPERATION[DROP_OPERATION["move"] = 1] = "move";
    DROP_OPERATION[DROP_OPERATION["copy"] = 2] = "copy";
    DROP_OPERATION[DROP_OPERATION["link"] = 4] = "link";
    DROP_OPERATION[DROP_OPERATION["all"] = 7] = "all";
    return DROP_OPERATION;
}({});
const $103790afe9474d1c$export$9bbdfc78cf083e16 = {
    ...$103790afe9474d1c$export$60b7b4bcf3903d8e,
    copyMove: 3,
    copyLink: 6,
    linkMove: 5,
    all: 7,
    uninitialized: 7
};
const $103790afe9474d1c$export$dd0165308d8bff45 = $103790afe9474d1c$var$invert($103790afe9474d1c$export$9bbdfc78cf083e16);
$103790afe9474d1c$export$dd0165308d8bff45[7] = 'all'; // ensure we don't map to 'uninitialized'.
const $103790afe9474d1c$export$608ecc6f1b23c35d = {
    none: 'cancel',
    link: 'link',
    copy: 'copy',
    move: 'move'
};
const $103790afe9474d1c$export$5eacb0769d26d3b2 = $103790afe9474d1c$var$invert($103790afe9474d1c$export$608ecc6f1b23c35d);
function $103790afe9474d1c$var$invert(object) {
    let res = {};
    for(let key in object)res[object[key]] = key;
    return res;
}
const $103790afe9474d1c$export$4a7729b856e9a690 = new Set([
    'text/plain',
    'text/uri-list',
    'text/html'
]);
const $103790afe9474d1c$export$fd9f9fc120c5402d = 'application/vnd.react-aria.items+json';
const $103790afe9474d1c$export$f8fc6581787339b3 = 'application/octet-stream';



//# sourceMappingURL=constants.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
;// ./node_modules/@react-aria/dnd/dist/utils.mjs



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

const $7252cd45fc48c07c$export$dfdf5deeaf27473f = new WeakMap();
const $7252cd45fc48c07c$export$990fced5dfac2637 = Symbol();
function $7252cd45fc48c07c$export$3093291712f09a77(state) {
    let { id: id } = $7252cd45fc48c07c$export$dfdf5deeaf27473f.get(state) || {};
    if (!id) throw new Error('Droppable item outside a droppable collection');
    return id;
}
function $7252cd45fc48c07c$export$7e397efd01d3db27(state) {
    let { ref: ref } = $7252cd45fc48c07c$export$dfdf5deeaf27473f.get(state) || {};
    if (!ref) throw new Error('Droppable item outside a droppable collection');
    return ref;
}
function utils_$7252cd45fc48c07c$export$e1d41611756c6326(items) {
    let types = new Set();
    for (let item of items)for (let type of Object.keys(item))types.add(type);
    return types;
}
function $7252cd45fc48c07c$var$mapModality(modality) {
    if (!modality) modality = 'virtual';
    if (modality === 'pointer') modality = 'virtual';
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'touch';
    return modality;
}
function $7252cd45fc48c07c$export$49bac5d6d4b352ea() {
    return $7252cd45fc48c07c$var$mapModality((0, useFocusVisible/* useInteractionModality */.lb)());
}
function utils_$7252cd45fc48c07c$export$1fb2158d224b542c() {
    return $7252cd45fc48c07c$var$mapModality((0, $j62BV$getInteractionModality)());
}
function $7252cd45fc48c07c$export$f9c1490890ddd063(dataTransfer, items) {
    // The data transfer API doesn't support more than one item of a given type at once.
    // In addition, only a small set of types are supported natively for transfer between applications.
    // We allow for both multiple items, as well as multiple representations of a single item.
    // In order to make our API work with the native API, we serialize all items to JSON and
    // store as a single native item. We only need to do this if there is more than one item
    // of the same type, or if an item has more than one representation. Otherwise the native
    // API is sufficient.
    //
    // The DataTransferItemList API also theoretically supports adding files, which would enable
    // dragging binary data out of the browser onto the user's desktop for example. Unfortunately,
    // this does not currently work in any browser, so it is not currently supported by our API.
    // See e.g. https://bugs.chromium.org/p/chromium/issues/detail?id=438479.
    let groupedByType = new Map();
    let needsCustomData = false;
    let customData = [];
    for (let item of items){
        let types = Object.keys(item);
        if (types.length > 1) needsCustomData = true;
        let dataByType = {};
        for (let type of types){
            let typeItems = groupedByType.get(type);
            if (!typeItems) {
                typeItems = [];
                groupedByType.set(type, typeItems);
            } else needsCustomData = true;
            let data = item[type];
            dataByType[type] = data;
            typeItems.push(data);
        }
        customData.push(dataByType);
    }
    for (let [type, items] of groupedByType)if ((0, $103790afe9474d1c$export$4a7729b856e9a690).has(type)) {
        // Only one item of a given type can be set on a data transfer.
        // Join all of the items together separated by newlines.
        let data = items.join('\n');
        dataTransfer.items.add(data, type);
    } else // Set data to the first item so we have access to the list of types.
    dataTransfer.items.add(items[0], type);
    if (needsCustomData) {
        let data = JSON.stringify(customData);
        dataTransfer.items.add(data, (0, $103790afe9474d1c$export$fd9f9fc120c5402d));
    }
}
class $7252cd45fc48c07c$export$7f04ce188c91447c {
    has(type) {
        if (this.includesUnknownTypes || type === $7252cd45fc48c07c$export$990fced5dfac2637 && this.types.has((0, $103790afe9474d1c$export$f8fc6581787339b3))) return true;
        return typeof type === 'string' && this.types.has(type);
    }
    constructor(dataTransfer){
        this.types = new Set();
        let hasFiles = false;
        for (let item of dataTransfer.items)if (item.type !== (0, $103790afe9474d1c$export$fd9f9fc120c5402d)) {
            if (item.kind === 'file') hasFiles = true;
            if (item.type) this.types.add(item.type);
            else // Files with unknown types or extensions that don't map to a known mime type
            // are sometimes exposed as an empty string by the browser. Map to a generic
            // mime type instead. Note that this could also be a directory as there's no
            // way to determine if something is a file or directory until drop.
            this.types.add((0, $103790afe9474d1c$export$f8fc6581787339b3));
        }
        // In Safari, when dragging files, the dataTransfer.items list is empty, but dataTransfer.types contains "Files".
        // Unfortunately, this doesn't tell us what types of files the user is dragging, so we need to assume that any
        // type the user checks for is included. See https://bugs.webkit.org/show_bug.cgi?id=223517.
        this.includesUnknownTypes = !hasFiles && dataTransfer.types.includes('Files');
    }
}
function $7252cd45fc48c07c$export$d9e760437831f8b3(dataTransfer) {
    let items = [];
    if (!dataTransfer) return items;
    // If our custom drag type is available, use that. This is a JSON serialized
    // representation of all items in the drag, set when there are multiple items
    // of the same type, or an individual item has multiple representations.
    let hasCustomType = false;
    if (dataTransfer.types.includes((0, $103790afe9474d1c$export$fd9f9fc120c5402d))) try {
        let data = dataTransfer.getData((0, $103790afe9474d1c$export$fd9f9fc120c5402d));
        let parsed = JSON.parse(data);
        for (let item of parsed)items.push({
            kind: 'text',
            types: new Set(Object.keys(item)),
            getText: (type)=>Promise.resolve(item[type])
        });
        hasCustomType = true;
    } catch  {
    // ignore
    }
    // Otherwise, map native drag items to items of a single representation.
    if (!hasCustomType) {
        let stringItems = new Map();
        for (let item of dataTransfer.items){
            if (item.kind === 'string') // The data for all formats must be read here because the data transfer gets
            // cleared out after the event handler finishes. If the item has an empty string
            // as a type, the mime type is unknown. Map to a generic mime type instead.
            stringItems.set(item.type || (0, $103790afe9474d1c$export$f8fc6581787339b3), dataTransfer.getData(item.type));
            else if (item.kind === 'file') {
                // Despite the name, webkitGetAsEntry is also implemented in Firefox and Edge.
                // In the future, we may use getAsFileSystemHandle instead, but that's currently
                // only implemented in Chrome.
                if (typeof item.webkitGetAsEntry === 'function') {
                    let entry = item.webkitGetAsEntry();
                    // eslint-disable-next-line max-depth
                    if (!entry) continue;
                    // eslint-disable-next-line max-depth
                    if (entry.isFile) items.push($7252cd45fc48c07c$var$createFileItem(item.getAsFile()));
                    else if (entry.isDirectory) items.push($7252cd45fc48c07c$var$createDirectoryItem(entry));
                } else // Assume it's a file.
                items.push($7252cd45fc48c07c$var$createFileItem(item.getAsFile()));
            }
        }
        // All string items are different representations of the same item. There's no way to have
        // multiple string items at once in the current DataTransfer API.
        if (stringItems.size > 0) items.push({
            kind: 'text',
            types: new Set(stringItems.keys()),
            getText: (type)=>Promise.resolve(stringItems.get(type))
        });
    }
    return items;
}
function $7252cd45fc48c07c$var$blobToString(blob) {
    if (typeof blob.text === 'function') return blob.text();
    // Safari doesn't have the Blob#text() method yet...
    return new Promise((resolve, reject)=>{
        let reader = new FileReader;
        reader.onload = ()=>{
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(blob);
    });
}
function $7252cd45fc48c07c$var$createFileItem(file) {
    if (!file) throw new Error('No file provided');
    return {
        kind: 'file',
        type: file.type || (0, $103790afe9474d1c$export$f8fc6581787339b3),
        name: file.name,
        getText: ()=>$7252cd45fc48c07c$var$blobToString(file),
        getFile: ()=>Promise.resolve(file)
    };
}
function $7252cd45fc48c07c$var$createDirectoryItem(entry) {
    return {
        kind: 'directory',
        name: entry.name,
        getEntries: ()=>$7252cd45fc48c07c$var$getEntries(entry)
    };
}
async function* $7252cd45fc48c07c$var$getEntries(item) {
    let reader = item.createReader();
    // We must call readEntries repeatedly because there may be a limit to the
    // number of entries that are returned at once.
    let entries;
    do {
        entries = await new Promise((resolve, reject)=>{
            reader.readEntries(resolve, reject);
        });
        for (let entry of entries){
            if (entry.isFile) {
                let file = await $7252cd45fc48c07c$var$getEntryFile(entry);
                yield $7252cd45fc48c07c$var$createFileItem(file);
            } else if (entry.isDirectory) yield $7252cd45fc48c07c$var$createDirectoryItem(entry);
        }
    }while (entries.length > 0);
}
function $7252cd45fc48c07c$var$getEntryFile(entry) {
    return new Promise((resolve, reject)=>entry.file(resolve, reject));
}
function $7252cd45fc48c07c$export$97fd558bdc44bea1(dropItem) {
    return dropItem.kind === 'text';
}
function $7252cd45fc48c07c$export$a144e1752ebe0aa(dropItem) {
    return dropItem.kind === 'file';
}
function $7252cd45fc48c07c$export$2b40a62bdbe6b2b0(dropItem) {
    return dropItem.kind === 'directory';
}
let $7252cd45fc48c07c$export$6ca6700462636d0b = {
    draggingKeys: new Set()
};
function $7252cd45fc48c07c$export$f2be18a910c0caa6(ref) {
    $7252cd45fc48c07c$export$6ca6700462636d0b.draggingCollectionRef = ref;
}
function $7252cd45fc48c07c$export$72cb63bdda528276(keys) {
    $7252cd45fc48c07c$export$6ca6700462636d0b.draggingKeys = keys;
}
function $7252cd45fc48c07c$export$dac8db29d42db9a1(ref) {
    $7252cd45fc48c07c$export$6ca6700462636d0b.dropCollectionRef = ref;
}
function $7252cd45fc48c07c$export$70936501603e6c57() {
    $7252cd45fc48c07c$export$6ca6700462636d0b = {
        draggingKeys: new Set()
    };
}
function $7252cd45fc48c07c$export$6c10d32b362bfa5f(state) {
    $7252cd45fc48c07c$export$6ca6700462636d0b = state;
}
function $7252cd45fc48c07c$export$78bf638634500fa5(ref) {
    let { draggingCollectionRef: draggingCollectionRef, dropCollectionRef: dropCollectionRef } = $7252cd45fc48c07c$export$6ca6700462636d0b;
    return (draggingCollectionRef === null || draggingCollectionRef === void 0 ? void 0 : draggingCollectionRef.current) != null && draggingCollectionRef.current === ((ref === null || ref === void 0 ? void 0 : ref.current) || (dropCollectionRef === null || dropCollectionRef === void 0 ? void 0 : dropCollectionRef.current));
}
let $7252cd45fc48c07c$export$8e6636520ac15722;
function $7252cd45fc48c07c$export$64f52ed7349ddb84(dropEffect) {
    $7252cd45fc48c07c$export$8e6636520ac15722 = dropEffect;
}
let $7252cd45fc48c07c$export$f0130eb70b6347b8 = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none;
function $7252cd45fc48c07c$export$6539bc8c3a0a2d67(o) {
    $7252cd45fc48c07c$export$f0130eb70b6347b8 = o;
}



//# sourceMappingURL=utils.module.js.map

;// ./node_modules/@react-aria/dnd/dist/ar-AE.mjs
var $7dfcac1a0c98c789$exports = {};
$7dfcac1a0c98c789$exports = {
    "dragDescriptionKeyboard": `\u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionKeyboardAlt": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + Enter \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionLongPress": `\u{627}\u{636}\u{63A}\u{637} \u{628}\u{627}\u{633}\u{62A}\u{645}\u{631}\u{627}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionTouch": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragDescriptionVirtual": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dragItem": (args)=>`\u{627}\u{633}\u{62D}\u{628} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{627}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`,
            other: ()=>`${formatter.number(args.count)} \u{639}\u{646}\u{627}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}\u{629}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Enter \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D}\u{64A} Alt + Enter \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{627}\u{636}\u{63A}\u{637} \u{628}\u{627}\u{633}\u{62A}\u{645}\u{631}\u{627}\u{631} \u{644}\u{644}\u{633}\u{62D}\u{628} ${formatter.plural(args.count, {
            one: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`,
            other: `\u{639}\u{62F}\u{62F} \u{627}\u{644}\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{645}\u{62E}\u{62A}\u{627}\u{631}\u{629}`
        })}.`,
    "dragStartedKeyboard": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} Tab \u{644}\u{644}\u{627}\u{646}\u{62A}\u{642}\u{627}\u{644} \u{625}\u{644}\u{649} \u{645}\u{648}\u{636}\u{639} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} Escape \u{644}\u{644}\u{625}\u{644}\u{63A}\u{627}\u{621}.`,
    "dragStartedTouch": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{62A}\u{642}\u{644} \u{625}\u{644}\u{649} \u{645}\u{648}\u{636}\u{639} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dragStartedVirtual": `\u{628}\u{62F}\u{623} \u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{62A}\u{642}\u{644} \u{625}\u{644}\u{649} \u{645}\u{643}\u{627}\u{646} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}\u{60C} \u{62B}\u{645} \u{627}\u{646}\u{642}\u{631} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropCanceled": `\u{62A}\u{645} \u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropComplete": `\u{627}\u{643}\u{62A}\u{645}\u{644} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropDescriptionKeyboard": `\u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}. \u{627}\u{636}\u{63A}\u{637} Escape \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "dropDescriptionTouch": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropDescriptionVirtual": `\u{627}\u{646}\u{642}\u{631} \u{644}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}.`,
    "dropIndicator": `\u{645}\u{624}\u{634}\u{631} \u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}`,
    "dropOnItem": (args)=>`\u{625}\u{641}\u{644}\u{627}\u{62A} ${args.itemText}`,
    "dropOnRoot": `\u{627}\u{644}\u{625}\u{641}\u{644}\u{627}\u{62A}`,
    "endDragKeyboard": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} Enter \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "endDragTouch": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{636}\u{63A}\u{637} \u{645}\u{631}\u{62A}\u{64A}\u{646} \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "endDragVirtual": `\u{627}\u{644}\u{633}\u{62D}\u{628}. \u{627}\u{646}\u{642}\u{631} \u{644}\u{625}\u{644}\u{63A}\u{627}\u{621} \u{627}\u{644}\u{633}\u{62D}\u{628}.`,
    "insertAfter": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{628}\u{639}\u{62F} ${args.itemText}`,
    "insertBefore": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{642}\u{628}\u{644} ${args.itemText}`,
    "insertBetween": (args)=>`\u{623}\u{62F}\u{62E}\u{644} \u{628}\u{64A}\u{646} ${args.beforeItemText} \u{648} ${args.afterItemText}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/dnd/dist/bg-BG.mjs
var $f311c26671219eca$exports = {};
$f311c26671219eca$exports = {
    "dragDescriptionKeyboard": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragDescriptionKeyboardAlt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt + Enter, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragDescriptionLongPress": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragDescriptionTouch": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{432}\u{443}\u{43A}\u{440}\u{430}\u{442}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragDescriptionVirtual": `\u{429}\u{440}\u{430}\u{43A}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{437}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{442}\u{435}.`,
    "dragItem": (args)=>`\u{41F}\u{43B}\u{44A}\u{437}\u{43D}\u{438} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{41F}\u{43B}\u{44A}\u{437}\u{43D}\u{438} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{430}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Enter, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{43D}\u{435}\u{442}\u{435} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt \u{438} Enter, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{43D}\u{435}\u{442}\u{435} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{43D}\u{435}\u{442}\u{435} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
        })}.`,
    "dragStartedKeyboard": `\u{417}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Tab\u{201C}, \u{437}\u{430} \u{434}\u{430} \u{441}\u{435} \u{43F}\u{440}\u{438}\u{434}\u{432}\u{438}\u{436}\u{438}\u{442}\u{435} \u{434}\u{43E} \u{446}\u{435}\u{43B}\u{442}\u{430}, \u{441}\u{43B}\u{435}\u{434} \u{43A}\u{43E}\u{435}\u{442}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Escape\u{201C} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430}.`,
    "dragStartedTouch": `\u{417}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41F}\u{440}\u{438}\u{434}\u{432}\u{438}\u{436}\u{435}\u{442}\u{435} \u{441}\u{435} \u{434}\u{43E} \u{446}\u{435}\u{43B}\u{442}\u{430}, \u{441}\u{43B}\u{435}\u{434} \u{43A}\u{43E}\u{435}\u{442}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{432}\u{443}\u{43A}\u{440}\u{430}\u{442}\u{43D}\u{43E}, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{443}\u{441}\u{43D}\u{435}\u{442}\u{435}.`,
    "dragStartedVirtual": `\u{417}\u{430}\u{43F}\u{43E}\u{447}\u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41F}\u{440}\u{438}\u{434}\u{432}\u{438}\u{436}\u{435}\u{442}\u{435} \u{441}\u{435} \u{434}\u{43E} \u{446}\u{435}\u{43B}\u{442}\u{430}, \u{441}\u{43B}\u{435}\u{434} \u{43A}\u{43E}\u{435}\u{442}\u{43E} \u{449}\u{440}\u{430}\u{43A}\u{43D}\u{435}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}.`,
    "dropCanceled": `\u{41F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}\u{442}\u{43E} \u{435} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{43E}.`,
    "dropComplete": `\u{41F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}\u{442}\u{43E} \u{435} \u{437}\u{430}\u{432}\u{44A}\u{440}\u{448}\u{435}\u{43D}\u{43E}.`,
    "dropDescriptionKeyboard": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Escape\u{201C} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430} \u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}\u{442}\u{43E}.`,
    "dropDescriptionTouch": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{432}\u{443}\u{43A}\u{440}\u{430}\u{442}\u{43D}\u{43E} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}.`,
    "dropDescriptionVirtual": `\u{429}\u{440}\u{430}\u{43A}\u{43D}\u{435}\u{442}\u{435} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}.`,
    "dropIndicator": `\u{438}\u{43D}\u{434}\u{438}\u{43A}\u{430}\u{442}\u{43E}\u{440} \u{437}\u{430} \u{43F}\u{443}\u{441}\u{43A}\u{430}\u{43D}\u{435}`,
    "dropOnItem": (args)=>`\u{41F}\u{443}\u{441}\u{43D}\u{438} \u{432}\u{44A}\u{440}\u{445}\u{443} ${args.itemText}`,
    "dropOnRoot": `\u{41F}\u{443}\u{441}\u{43D}\u{438} \u{432}\u{44A}\u{440}\u{445}\u{443}`,
    "endDragKeyboard": `\u{41F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{201E}Enter\u{201C} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430} \u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}\u{442}\u{43E}.`,
    "endDragTouch": `\u{41F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{434}\u{432}\u{443}\u{43A}\u{440}\u{430}\u{442}\u{43D}\u{43E} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430} \u{43D}\u{430} \u{43F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}\u{442}\u{43E}.`,
    "endDragVirtual": `\u{41F}\u{43B}\u{44A}\u{437}\u{433}\u{430}\u{43D}\u{435}. \u{429}\u{440}\u{430}\u{43A}\u{43D}\u{435}\u{442}\u{435} \u{437}\u{430} \u{43E}\u{442}\u{43C}\u{44F}\u{43D}\u{430}.`,
    "insertAfter": (args)=>`\u{412}\u{43C}\u{44A}\u{43A}\u{43D}\u{438} \u{441}\u{43B}\u{435}\u{434} ${args.itemText}`,
    "insertBefore": (args)=>`\u{412}\u{43C}\u{44A}\u{43A}\u{43D}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{438} ${args.itemText}`,
    "insertBetween": (args)=>`\u{412}\u{43C}\u{44A}\u{43A}\u{43D}\u{438} \u{43C}\u{435}\u{436}\u{434}\u{443} ${args.beforeItemText} \u{438} ${args.afterItemText}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/dnd/dist/cs-CZ.mjs
var $1aa4ade186550f72$exports = {};
$1aa4ade186550f72$exports = {
    "dragDescriptionKeyboard": `Stisknut\xedm kl\xe1vesy Enter za\u{10D}nete s p\u{159}etahov\xe1n\xedm.`,
    "dragDescriptionKeyboardAlt": `Stisknut\xedm Alt + Enter zah\xe1j\xedte p\u{159}etahov\xe1n\xed.`,
    "dragDescriptionLongPress": `Dlouh\xfdm stisknut\xedm zah\xe1j\xedte p\u{159}etahov\xe1n\xed.`,
    "dragDescriptionTouch": `Poklep\xe1n\xedm za\u{10D}nete s p\u{159}etahov\xe1n\xedm.`,
    "dragDescriptionVirtual": `Kliknut\xedm za\u{10D}nete s p\u{159}etahov\xe1n\xedm.`,
    "dragItem": (args)=>`P\u{159}et\xe1hnout ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`P\u{159}et\xe1hnout ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybranou polo\u{17E}ku`,
            few: ()=>`${formatter.number(args.count)} vybran\xe9 polo\u{17E}ky`,
            other: ()=>`${formatter.number(args.count)} vybran\xfdch polo\u{17E}ek`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Stisknut\xedm kl\xe1vesy Enter p\u{159}et\xe1hn\u{11B}te ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybranou polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybran\xe9 polo\u{17E}ky`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Stisknut\xedm Alt + Enter p\u{159}et\xe1hn\u{11B}te ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybranou polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybran\xe9 polo\u{17E}ky`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Dlouh\xfdm stisknut\xedm p\u{159}et\xe1hnete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybranou polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybran\xe9 polo\u{17E}ky`
        })}.`,
    "dragStartedKeyboard": `Za\u{10D}n\u{11B}te s p\u{159}etahov\xe1n\xedm. Po stisknut\xed kl\xe1vesy Tab najd\u{11B}te po\u{17E}adovan\xfd c\xedl a stisknut\xedm kl\xe1vesy Enter p\u{159}eta\u{17E}en\xed dokon\u{10D}ete nebo stisknut\xedm kl\xe1vesy Esc akci zru\u{161}te.`,
    "dragStartedTouch": `Za\u{10D}n\u{11B}te s p\u{159}etahov\xe1n\xedm. Najd\u{11B}te po\u{17E}adovan\xfd c\xedl a poklep\xe1n\xedm p\u{159}eta\u{17E}en\xed dokon\u{10D}ete.`,
    "dragStartedVirtual": `Za\u{10D}n\u{11B}te s p\u{159}etahov\xe1n\xedm. Najd\u{11B}te po\u{17E}adovan\xfd c\xedl a kliknut\xedm nebo stisknut\xedm kl\xe1vesy Enter p\u{159}eta\u{17E}en\xed dokon\u{10D}ete.`,
    "dropCanceled": `P\u{159}eta\u{17E}en\xed bylo zru\u{161}eno.`,
    "dropComplete": `P\u{159}eta\u{17E}en\xed bylo dokon\u{10D}eno.`,
    "dropDescriptionKeyboard": `Stisknut\xedm kl\xe1vesy Enter p\u{159}eta\u{17E}en\xed dokon\u{10D}ete nebo stisknut\xedm kl\xe1vesy Esc akci zru\u{161}te.`,
    "dropDescriptionTouch": `Poklep\xe1n\xedm p\u{159}eta\u{17E}en\xed dokon\u{10D}ete.`,
    "dropDescriptionVirtual": `Kliknut\xedm objekt p\u{159}et\xe1hn\u{11B}te.`,
    "dropIndicator": `indik\xe1tor p\u{159}eta\u{17E}en\xed`,
    "dropOnItem": (args)=>`P\u{159}et\xe1hnout na ${args.itemText}`,
    "dropOnRoot": `P\u{159}et\xe1hnout na`,
    "endDragKeyboard": `Prob\xedh\xe1 p\u{159}etahov\xe1n\xed. Stisknut\xedm kl\xe1vesy Enter p\u{159}eta\u{17E}en\xed zru\u{161}\xedte.`,
    "endDragTouch": `Prob\xedh\xe1 p\u{159}etahov\xe1n\xed. Poklep\xe1n\xedm p\u{159}eta\u{17E}en\xed zru\u{161}\xedte.`,
    "endDragVirtual": `Prob\xedh\xe1 p\u{159}etahov\xe1n\xed. Kliknut\xedm p\u{159}eta\u{17E}en\xed zru\u{161}\xedte.`,
    "insertAfter": (args)=>`Vlo\u{17E}it za ${args.itemText}`,
    "insertBefore": (args)=>`Vlo\u{17E}it p\u{159}ed ${args.itemText}`,
    "insertBetween": (args)=>`Vlo\u{17E}it mezi ${args.beforeItemText} a ${args.afterItemText}`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/dnd/dist/da-DK.mjs
var $b6b0ea1b94a7633c$exports = {};
$b6b0ea1b94a7633c$exports = {
    "dragDescriptionKeyboard": `Tryk p\xe5 Enter for at starte med at tr\xe6kke.`,
    "dragDescriptionKeyboardAlt": `Tryk p\xe5 Alt + Enter for at starte med at tr\xe6kke.`,
    "dragDescriptionLongPress": `Tryk l\xe6nge for at starte med at tr\xe6kke.`,
    "dragDescriptionTouch": `Dobbelttryk for at starte med at tr\xe6kke.`,
    "dragDescriptionVirtual": `Klik for at starte med at tr\xe6kke.`,
    "dragItem": (args)=>`Tr\xe6k ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Tr\xe6k ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgt element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Tryk p\xe5 Enter for at tr\xe6kke ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgte element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Tryk p\xe5 Alt + Enter for at tr\xe6kke ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgte element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Tryk l\xe6nge for at tr\xe6kke ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgte element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragStartedKeyboard": `Startet med at tr\xe6kke. Tryk p\xe5 Tab for at g\xe5 til et slip-m\xe5l, tryk derefter p\xe5 Enter for at slippe, eller tryk p\xe5 Escape for at annullere.`,
    "dragStartedTouch": `Startet med at tr\xe6kke. G\xe5 til et slip-m\xe5l, og dobbelttryk derefter for at slippe.`,
    "dragStartedVirtual": `Startet med at tr\xe6kke. G\xe5 til et slip-m\xe5l, og klik eller tryk derefter p\xe5 enter for at slippe.`,
    "dropCanceled": `Slip annulleret.`,
    "dropComplete": `Slip fuldf\xf8rt.`,
    "dropDescriptionKeyboard": `Tryk p\xe5 Enter for at slippe. Tryk p\xe5 Escape for at annullere tr\xe6kning.`,
    "dropDescriptionTouch": `Dobbelttryk for at slippe.`,
    "dropDescriptionVirtual": `Klik for at slippe.`,
    "dropIndicator": `slip-indikator`,
    "dropOnItem": (args)=>`Slip p\xe5 ${args.itemText}`,
    "dropOnRoot": `Slip p\xe5`,
    "endDragKeyboard": `Tr\xe6kning. Tryk p\xe5 enter for at annullere tr\xe6k.`,
    "endDragTouch": `Tr\xe6kning. Dobbelttryk for at annullere tr\xe6k.`,
    "endDragVirtual": `Tr\xe6kning. Klik for at annullere tr\xe6kning.`,
    "insertAfter": (args)=>`Inds\xe6t efter ${args.itemText}`,
    "insertBefore": (args)=>`Inds\xe6t f\xf8r ${args.itemText}`,
    "insertBetween": (args)=>`Inds\xe6t mellem ${args.beforeItemText} og ${args.afterItemText}`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/dnd/dist/de-DE.mjs
var $d10e4f47c744ad52$exports = {};
$d10e4f47c744ad52$exports = {
    "dragDescriptionKeyboard": `Dr\xfccken Sie die Eingabetaste, um den Ziehvorgang zu starten.`,
    "dragDescriptionKeyboardAlt": `Alt + Eingabe dr\xfccken, um den Ziehvorgang zu starten.`,
    "dragDescriptionLongPress": `Lang dr\xfccken, um mit dem Ziehen zu beginnen.`,
    "dragDescriptionTouch": `Tippen Sie doppelt, um den Ziehvorgang zu starten.`,
    "dragDescriptionVirtual": `Zum Starten des Ziehvorgangs klicken.`,
    "dragItem": (args)=>`${args.itemText} ziehen`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ausgew\xe4hltes Objekt`,
            other: ()=>`${formatter.number(args.count)} ausgew\xe4hlte Objekte`
        })} ziehen`,
    "dragSelectedKeyboard": (args, formatter)=>`Eingabetaste dr\xfccken, um ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ausgew\xe4hltes Element`,
            other: ()=>`${formatter.number(args.count)} ausgew\xe4hlte Elemente`
        })} zu ziehen.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Alt + Eingabetaste dr\xfccken, um ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ausgew\xe4hltes Element`,
            other: ()=>`${formatter.number(args.count)} ausgew\xe4hlte Elemente`
        })} zu ziehen.`,
    "dragSelectedLongPress": (args, formatter)=>`Lang dr\xfccken, um ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ausgew\xe4hltes Element`,
            other: ()=>`${formatter.number(args.count)} ausgew\xe4hlte Elemente`
        })} zu ziehen.`,
    "dragStartedKeyboard": `Ziehvorgang gestartet. Dr\xfccken Sie die Tabulatortaste, um zu einem Ablegeziel zu navigieren und dr\xfccken Sie dann die Eingabetaste, um das Objekt abzulegen, oder Escape, um den Vorgang abzubrechen.`,
    "dragStartedTouch": `Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und tippen Sie doppelt, um das Objekt abzulegen.`,
    "dragStartedVirtual": `Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und klicken Sie oder dr\xfccken Sie die Eingabetaste, um das Objekt abzulegen.`,
    "dropCanceled": `Ablegen abgebrochen.`,
    "dropComplete": `Ablegen abgeschlossen.`,
    "dropDescriptionKeyboard": `Dr\xfccken Sie die Eingabetaste, um das Objekt abzulegen. Dr\xfccken Sie Escape, um den Vorgang abzubrechen.`,
    "dropDescriptionTouch": `Tippen Sie doppelt, um das Objekt abzulegen.`,
    "dropDescriptionVirtual": `Zum Ablegen klicken.`,
    "dropIndicator": `Ablegeanzeiger`,
    "dropOnItem": (args)=>`Auf ${args.itemText} ablegen`,
    "dropOnRoot": `Ablegen auf`,
    "endDragKeyboard": `Ziehvorgang l\xe4uft. Dr\xfccken Sie die Eingabetaste, um den Vorgang abzubrechen.`,
    "endDragTouch": `Ziehvorgang l\xe4uft. Tippen Sie doppelt, um den Vorgang abzubrechen.`,
    "endDragVirtual": `Ziehvorgang l\xe4uft. Klicken Sie, um den Vorgang abzubrechen.`,
    "insertAfter": (args)=>`Nach ${args.itemText} einf\xfcgen`,
    "insertBefore": (args)=>`Vor ${args.itemText} einf\xfcgen`,
    "insertBetween": (args)=>`Zwischen ${args.beforeItemText} und ${args.afterItemText} einf\xfcgen`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/dnd/dist/el-GR.mjs
var $b3d2bb9abce688ab$exports = {};
$b3d2bb9abce688ab$exports = {
    "dragDescriptionKeyboard": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "dragDescriptionKeyboardAlt": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + Enter \u{3B3}\u{3B9}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "dragDescriptionLongPress": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BE}\u{3B5}\u{3BA}\u{3B9}\u{3BD}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}.`,
    "dragDescriptionTouch": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3B4}\u{3CD}\u{3BF} \u{3C6}\u{3BF}\u{3C1}\u{3AD}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "dragDescriptionVirtual": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BE}\u{3B5}\u{3BA}\u{3B9}\u{3BD}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}.`,
    "dragItem": (args)=>`\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3C3}\u{3B5} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3C3}\u{3CD}\u{3C1}\u{3B5}\u{3C4}\u{3B5} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + Enter \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3C3}\u{3CD}\u{3C1}\u{3B5}\u{3C4}\u{3B5} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3C3}\u{3CD}\u{3C1}\u{3B5}\u{3C4}\u{3B5} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
        })}.`,
    "dragStartedKeyboard": `\u{397} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3BE}\u{3B5}\u{3BA}\u{3AF}\u{3BD}\u{3B7}\u{3C3}\u{3B5}. \u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3C0}\u{3BB}\u{3AE}\u{3BA}\u{3C4}\u{3C1}\u{3BF} Tab \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B2}\u{3B5}\u{3AF}\u{3C4}\u{3B5} \u{3C3}\u{3B5} \u{3AD}\u{3BD}\u{3B1}\u{3BD} \u{3C0}\u{3C1}\u{3BF}\u{3BF}\u{3C1}\u{3B9}\u{3C3}\u{3BC}\u{3CC} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}\u{3C2} \u{3BA}\u{3B1}\u{3B9}, \u{3C3}\u{3C4}\u{3B7} \u{3C3}\u{3C5}\u{3BD}\u{3AD}\u{3C7}\u{3B5}\u{3B9}\u{3B1}, \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Escape \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7}.`,
    "dragStartedTouch": `\u{397} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3BE}\u{3B5}\u{3BA}\u{3AF}\u{3BD}\u{3B7}\u{3C3}\u{3B5}. \u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3B2}\u{3B5}\u{3AF}\u{3C4}\u{3B5} \u{3C3}\u{3B5} \u{3AD}\u{3BD}\u{3B1}\u{3BD} \u{3C0}\u{3C1}\u{3BF}\u{3BF}\u{3C1}\u{3B9}\u{3C3}\u{3BC}\u{3CC} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}\u{3C2} \u{3BA}\u{3B1}\u{3B9}, \u{3C3}\u{3C4}\u{3B7} \u{3C3}\u{3C5}\u{3BD}\u{3AD}\u{3C7}\u{3B5}\u{3B9}\u{3B1}, \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3B4}\u{3CD}\u{3BF} \u{3C6}\u{3BF}\u{3C1}\u{3AD}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}.`,
    "dragStartedVirtual": `\u{397} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3BE}\u{3B5}\u{3BA}\u{3AF}\u{3BD}\u{3B7}\u{3C3}\u{3B5}. \u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3B2}\u{3B5}\u{3AF}\u{3C4}\u{3B5} \u{3C3}\u{3B5} \u{3AD}\u{3BD}\u{3B1}\u{3BD} \u{3C0}\u{3C1}\u{3BF}\u{3BF}\u{3C1}\u{3B9}\u{3C3}\u{3BC}\u{3CC} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}\u{3C2} \u{3BA}\u{3B1}\u{3B9}, \u{3C3}\u{3C4}\u{3B7} \u{3C3}\u{3C5}\u{3BD}\u{3AD}\u{3C7}\u{3B5}\u{3B9}\u{3B1}, \u{3BA}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}.`,
    "dropCanceled": `\u{397} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3B1}\u{3BA}\u{3C5}\u{3C1}\u{3CE}\u{3B8}\u{3B7}\u{3BA}\u{3B5}.`,
    "dropComplete": `\u{397} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3BF}\u{3BB}\u{3BF}\u{3BA}\u{3BB}\u{3B7}\u{3C1}\u{3CE}\u{3B8}\u{3B7}\u{3BA}\u{3B5}.`,
    "dropDescriptionKeyboard": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}. \u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Escape \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "dropDescriptionTouch": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3B4}\u{3CD}\u{3BF} \u{3C6}\u{3BF}\u{3C1}\u{3AD}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}.`,
    "dropDescriptionVirtual": `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}.`,
    "dropIndicator": `\u{3B4}\u{3B5}\u{3AF}\u{3BA}\u{3C4}\u{3B7}\u{3C2} \u{3B1}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7}\u{3C2}`,
    "dropOnItem": (args)=>`\u{391}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3C3}\u{3B5} ${args.itemText}`,
    "dropOnRoot": `\u{391}\u{3C0}\u{3CC}\u{3B8}\u{3B5}\u{3C3}\u{3B7} \u{3C3}\u{3B5}`,
    "endDragKeyboard": `\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3C3}\u{3B5} \u{3B5}\u{3BE}\u{3AD}\u{3BB}\u{3B9}\u{3BE}\u{3B7}. \u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Enter \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "endDragTouch": `\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3C3}\u{3B5} \u{3B5}\u{3BE}\u{3AD}\u{3BB}\u{3B9}\u{3BE}\u{3B7}. \u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{3B4}\u{3CD}\u{3BF} \u{3C6}\u{3BF}\u{3C1}\u{3AD}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "endDragVirtual": `\u{39C}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC} \u{3C3}\u{3B5} \u{3B5}\u{3BE}\u{3AD}\u{3BB}\u{3B9}\u{3BE}\u{3B7}. \u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3B1}\u{3BA}\u{3CD}\u{3C1}\u{3C9}\u{3C3}\u{3B7} \u{3C4}\u{3B7}\u{3C2} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3C6}\u{3BF}\u{3C1}\u{3AC}\u{3C2}.`,
    "insertAfter": (args)=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3C9}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3AC} \u{3B1}\u{3C0}\u{3CC} ${args.itemText}`,
    "insertBefore": (args)=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3C9}\u{3B3}\u{3AE} \u{3C0}\u{3C1}\u{3B9}\u{3BD} \u{3B1}\u{3C0}\u{3CC} ${args.itemText}`,
    "insertBetween": (args)=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3C9}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3BE}\u{3CD} ${args.beforeItemText} \u{3BA}\u{3B1}\u{3B9} ${args.afterItemText}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/dnd/dist/en-US.mjs
var $f9b46437e610cca1$exports = {};
$f9b46437e610cca1$exports = {
    "dragItem": (args)=>`Drag ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Drag ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} selected item`,
            other: ()=>`${formatter.number(args.count)} selected items`
        })}`,
    "dragDescriptionKeyboard": `Press Enter to start dragging.`,
    "dragDescriptionKeyboardAlt": `Press Alt + Enter to start dragging.`,
    "dragDescriptionTouch": `Double tap to start dragging.`,
    "dragDescriptionVirtual": `Click to start dragging.`,
    "dragDescriptionLongPress": `Long press to start dragging.`,
    "dragSelectedKeyboard": (args, formatter)=>`Press Enter to drag ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} selected item`,
            other: ()=>`${formatter.number(args.count)} selected items`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Press Alt + Enter to drag ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} selected item`,
            other: ()=>`${formatter.number(args.count)} selected items`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Long press to drag ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} selected item`,
            other: ()=>`${formatter.number(args.count)} selected items`
        })}.`,
    "dragStartedKeyboard": `Started dragging. Press Tab to navigate to a drop target, then press Enter to drop, or press Escape to cancel.`,
    "dragStartedTouch": `Started dragging. Navigate to a drop target, then double tap to drop.`,
    "dragStartedVirtual": `Started dragging. Navigate to a drop target, then click or press Enter to drop.`,
    "endDragKeyboard": `Dragging. Press Enter to cancel drag.`,
    "endDragTouch": `Dragging. Double tap to cancel drag.`,
    "endDragVirtual": `Dragging. Click to cancel drag.`,
    "dropDescriptionKeyboard": `Press Enter to drop. Press Escape to cancel drag.`,
    "dropDescriptionTouch": `Double tap to drop.`,
    "dropDescriptionVirtual": `Click to drop.`,
    "dropCanceled": `Drop canceled.`,
    "dropComplete": `Drop complete.`,
    "dropIndicator": `drop indicator`,
    "dropOnRoot": `Drop on`,
    "dropOnItem": (args)=>`Drop on ${args.itemText}`,
    "insertBefore": (args)=>`Insert before ${args.itemText}`,
    "insertBetween": (args)=>`Insert between ${args.beforeItemText} and ${args.afterItemText}`,
    "insertAfter": (args)=>`Insert after ${args.itemText}`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/dnd/dist/es-ES.mjs
var $204b5c01bd3acf26$exports = {};
$204b5c01bd3acf26$exports = {
    "dragDescriptionKeyboard": `Pulse Intro para empezar a arrastrar.`,
    "dragDescriptionKeyboardAlt": `Pulse Intro para empezar a arrastrar.`,
    "dragDescriptionLongPress": `Mantenga pulsado para comenzar a arrastrar.`,
    "dragDescriptionTouch": `Pulse dos veces para iniciar el arrastre.`,
    "dragDescriptionVirtual": `Haga clic para iniciar el arrastre.`,
    "dragItem": (args)=>`Arrastrar ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Arrastrar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pulse Intro para arrastrar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pulse Alt + Intro para arrastrar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Mantenga pulsado para arrastrar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento seleccionado`,
            other: ()=>`${formatter.number(args.count)} elementos seleccionados`
        })}.`,
    "dragStartedKeyboard": `Se ha empezado a arrastrar. Pulse el tabulador para ir al p\xfablico destinatario donde se vaya a colocar y, a continuaci\xf3n, pulse Intro para soltar, o pulse Escape para cancelar.`,
    "dragStartedTouch": `Se ha empezado a arrastrar. Vaya al p\xfablico destinatario donde se vaya a colocar y, a continuaci\xf3n, pulse dos veces para soltar.`,
    "dragStartedVirtual": `Se ha empezado a arrastrar. Vaya al p\xfablico destinatario donde se vaya a colocar y, a continuaci\xf3n, haga clic o pulse Intro para soltar.`,
    "dropCanceled": `Se ha cancelado la colocaci\xf3n.`,
    "dropComplete": `Colocaci\xf3n finalizada.`,
    "dropDescriptionKeyboard": `Pulse Intro para soltar. Pulse Escape para cancelar el arrastre.`,
    "dropDescriptionTouch": `Pulse dos veces para soltar.`,
    "dropDescriptionVirtual": `Haga clic para soltar.`,
    "dropIndicator": `indicador de colocaci\xf3n`,
    "dropOnItem": (args)=>`Soltar en ${args.itemText}`,
    "dropOnRoot": `Soltar en`,
    "endDragKeyboard": `Arrastrando. Pulse Intro para cancelar el arrastre.`,
    "endDragTouch": `Arrastrando. Pulse dos veces para cancelar el arrastre.`,
    "endDragVirtual": `Arrastrando. Haga clic para cancelar el arrastre.`,
    "insertAfter": (args)=>`Insertar despu\xe9s de ${args.itemText}`,
    "insertBefore": (args)=>`Insertar antes de ${args.itemText}`,
    "insertBetween": (args)=>`Insertar entre ${args.beforeItemText} y ${args.afterItemText}`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/dnd/dist/et-EE.mjs
var $110bdd83348ecbc0$exports = {};
$110bdd83348ecbc0$exports = {
    "dragDescriptionKeyboard": `Lohistamise alustamiseks vajutage klahvi Enter.`,
    "dragDescriptionKeyboardAlt": `Lohistamise alustamiseks vajutage klahvikombinatsiooni Alt + Enter.`,
    "dragDescriptionLongPress": `Vajutage pikalt lohistamise alustamiseks.`,
    "dragDescriptionTouch": `Topeltpuudutage lohistamise alustamiseks.`,
    "dragDescriptionVirtual": `Kl\xf5psake lohistamise alustamiseks.`,
    "dragItem": (args)=>`Lohista ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Lohista ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valitud \xfcksust`,
            other: ()=>`${formatter.number(args.count)} valitud \xfcksust`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valitud \xfcksuse`,
            other: ()=>`${formatter.number(args.count)} valitud \xfcksuse`
        })} lohistamiseks vajutage sisestusklahvi Enter.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Lohistamiseks vajutage klahvikombinatsiooni Alt + Enter ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valitud \xfcksuse`,
            other: ()=>`${formatter.number(args.count)} valitud \xfcksuse`
        })} jaoks.`,
    "dragSelectedLongPress": (args, formatter)=>`Pikk vajutus ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valitud \xfcksuse`,
            other: ()=>`${formatter.number(args.count)} valitud \xfcksuse`
        })} lohistamiseks.`,
    "dragStartedKeyboard": `Alustati lohistamist. Kukutamise sihtm\xe4rgi juurde navigeerimiseks vajutage klahvi Tab, seej\xe4rel vajutage kukutamiseks klahvi Enter v\xf5i loobumiseks klahvi Escape.`,
    "dragStartedTouch": `Alustati lohistamist. Navigeerige kukutamise sihtm\xe4rgi juurde ja topeltpuudutage kukutamiseks.`,
    "dragStartedVirtual": `Alustati lohistamist. Navigeerige kukutamise sihtm\xe4rgi juurde ja kukutamiseks kl\xf5psake v\xf5i vajutage klahvi Enter.`,
    "dropCanceled": `Lohistamisest loobuti.`,
    "dropComplete": `Lohistamine on tehtud.`,
    "dropDescriptionKeyboard": `Kukutamiseks vajutage klahvi Enter. Lohistamisest loobumiseks vajutage klahvi Escape.`,
    "dropDescriptionTouch": `Kukutamiseks topeltpuudutage.`,
    "dropDescriptionVirtual": `Kukutamiseks kl\xf5psake.`,
    "dropIndicator": `lohistamise indikaator`,
    "dropOnItem": (args)=>`Kukuta asukohta ${args.itemText}`,
    "dropOnRoot": `Kukuta asukohta`,
    "endDragKeyboard": `Lohistamine. Lohistamisest loobumiseks vajutage klahvi Enter.`,
    "endDragTouch": `Lohistamine. Lohistamisest loobumiseks topeltpuudutage.`,
    "endDragVirtual": `Lohistamine. Lohistamisest loobumiseks kl\xf5psake.`,
    "insertAfter": (args)=>`Sisesta ${args.itemText} j\xe4rele`,
    "insertBefore": (args)=>`Sisesta ${args.itemText} ette`,
    "insertBetween": (args)=>`Sisesta ${args.beforeItemText} ja ${args.afterItemText} vahele`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/dnd/dist/fi-FI.mjs
var $87d3ccd5e347c7cc$exports = {};
$87d3ccd5e347c7cc$exports = {
    "dragDescriptionKeyboard": `Aloita vet\xe4minen painamalla Enter-n\xe4pp\xe4int\xe4.`,
    "dragDescriptionKeyboardAlt": `Aloita vet\xe4minen painamalla Alt + Enter -n\xe4pp\xe4inyhdistelm\xe4\xe4.`,
    "dragDescriptionLongPress": `Aloita vet\xe4minen pit\xe4m\xe4ll\xe4 painettuna.`,
    "dragDescriptionTouch": `Aloita vet\xe4minen kaksoisnapauttamalla.`,
    "dragDescriptionVirtual": `Aloita vet\xe4minen napsauttamalla.`,
    "dragItem": (args)=>`Ved\xe4 kohdetta ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Ved\xe4 ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valittua kohdetta`,
            other: ()=>`${formatter.number(args.count)} valittua kohdetta`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Ved\xe4 painamalla Enter ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valittu kohde`,
            other: ()=>`${formatter.number(args.count)} valittua kohdetta`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Ved\xe4 painamalla Alt + Enter ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valittu kohde`,
            other: ()=>`${formatter.number(args.count)} valittua kohdetta`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Ved\xe4 pit\xe4m\xe4ll\xe4 painettuna ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valittu kohde`,
            other: ()=>`${formatter.number(args.count)} valittua kohdetta`
        })}.`,
    "dragStartedKeyboard": `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen painamalla sarkainn\xe4pp\xe4int\xe4 ja sitten pudota painamalla Enter-n\xe4pp\xe4int\xe4 tai peruuta painamalla Escape-n\xe4pp\xe4int\xe4.`,
    "dragStartedTouch": `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen ja pudota kaksoisnapauttamalla.`,
    "dragStartedVirtual": `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen ja pudota napsauttamalla tai painamalla Enter-n\xe4pp\xe4int\xe4.`,
    "dropCanceled": `Pudotus peruutettu.`,
    "dropComplete": `Pudotus suoritettu.`,
    "dropDescriptionKeyboard": `Pudota painamalla Enter-n\xe4pp\xe4int\xe4. Peruuta vet\xe4minen painamalla Escape-n\xe4pp\xe4int\xe4.`,
    "dropDescriptionTouch": `Pudota kaksoisnapauttamalla.`,
    "dropDescriptionVirtual": `Pudota napsauttamalla.`,
    "dropIndicator": `pudotuksen ilmaisin`,
    "dropOnItem": (args)=>`Pudota kohteeseen ${args.itemText}`,
    "dropOnRoot": `Pudota kohteeseen`,
    "endDragKeyboard": `Vedet\xe4\xe4n. Peruuta vet\xe4minen painamalla Enter-n\xe4pp\xe4int\xe4.`,
    "endDragTouch": `Vedet\xe4\xe4n. Peruuta vet\xe4minen kaksoisnapauttamalla.`,
    "endDragVirtual": `Vedet\xe4\xe4n. Peruuta vet\xe4minen napsauttamalla.`,
    "insertAfter": (args)=>`Lis\xe4\xe4 kohteen ${args.itemText} j\xe4lkeen`,
    "insertBefore": (args)=>`Lis\xe4\xe4 ennen kohdetta ${args.itemText}`,
    "insertBetween": (args)=>`Lis\xe4\xe4 kohteiden ${args.beforeItemText} ja ${args.afterItemText} v\xe4liin`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/dnd/dist/fr-FR.mjs
var $a5de891427686596$exports = {};
$a5de891427686596$exports = {
    "dragDescriptionKeyboard": `Appuyez sur Entr\xe9e pour commencer le d\xe9placement.`,
    "dragDescriptionKeyboardAlt": `Appuyez sur Alt\xa0+\xa0Entr\xe9e pour commencer \xe0 faire glisser.`,
    "dragDescriptionLongPress": `Appuyez de mani\xe8re prolong\xe9e pour commencer \xe0 faire glisser.`,
    "dragDescriptionTouch": `Touchez deux fois pour commencer le d\xe9placement.`,
    "dragDescriptionVirtual": `Cliquez pour commencer le d\xe9placement.`,
    "dragItem": (args)=>`D\xe9placer ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`D\xe9placer ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Appuyez sur Entr\xe9e pour faire glisser ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Appuyez sur Alt\xa0+\xa0Entr\xe9e pour faire glisser ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Appuyez de mani\xe8re prolong\xe9e pour faire glisser ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
            other: ()=>`${formatter.number(args.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
        })}.`,
    "dragStartedKeyboard": `D\xe9placement commenc\xe9. Appuyez sur Tabulation pour acc\xe9der \xe0 une cible de d\xe9p\xf4t, puis appuyez sur Entr\xe9e pour d\xe9poser, ou appuyez sur \xc9chap pour annuler.`,
    "dragStartedTouch": `D\xe9placement commenc\xe9. Acc\xe9dez \xe0 une cible de d\xe9p\xf4t, puis touchez deux fois pour d\xe9poser.`,
    "dragStartedVirtual": `D\xe9placement commenc\xe9. Acc\xe9dez \xe0 une cible de d\xe9p\xf4t, puis cliquez ou appuyez sur Entr\xe9e pour d\xe9poser.`,
    "dropCanceled": `D\xe9p\xf4t annul\xe9.`,
    "dropComplete": `D\xe9p\xf4t termin\xe9.`,
    "dropDescriptionKeyboard": `Appuyez sur Entr\xe9e pour d\xe9poser. Appuyez sur \xc9chap pour annuler le d\xe9placement.`,
    "dropDescriptionTouch": `Touchez deux fois pour d\xe9poser.`,
    "dropDescriptionVirtual": `Cliquez pour d\xe9poser.`,
    "dropIndicator": `indicateur de d\xe9p\xf4t`,
    "dropOnItem": (args)=>`D\xe9poser sur ${args.itemText}`,
    "dropOnRoot": `D\xe9poser sur`,
    "endDragKeyboard": `D\xe9placement. Appuyez sur Entr\xe9e pour annuler le d\xe9placement.`,
    "endDragTouch": `D\xe9placement. Touchez deux fois pour annuler le d\xe9placement.`,
    "endDragVirtual": `D\xe9placement. Cliquez pour annuler le d\xe9placement.`,
    "insertAfter": (args)=>`Ins\xe9rer apr\xe8s ${args.itemText}`,
    "insertBefore": (args)=>`Ins\xe9rer avant ${args.itemText}`,
    "insertBetween": (args)=>`Ins\xe9rer entre ${args.beforeItemText} et ${args.afterItemText}`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/dnd/dist/he-IL.mjs
var $ad7f4c66d85b4494$exports = {};
$ad7f4c66d85b4494$exports = {
    "dragDescriptionKeyboard": `\u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}.`,
    "dragDescriptionKeyboardAlt": `\u{5D4}\u{5E7}\u{5E9} Alt + Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}.`,
    "dragDescriptionLongPress": `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}.`,
    "dragDescriptionTouch": `\u{5D4}\u{5E7}\u{5E9} \u{5E4}\u{5E2}\u{5DE}\u{5D9}\u{5D9}\u{5DD} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5D1}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "dragDescriptionVirtual": `\u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}.`,
    "dragItem": (args)=>`\u{5D2}\u{5E8}\u{5D5}\u{5E8} \u{5D0}\u{5EA} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{5D2}\u{5E8}\u{5D5}\u{5E8} ${formatter.plural(args.count, {
            one: ()=>`\u{5E4}\u{5E8}\u{5D9}\u{5D8} \u{5E0}\u{5D1}\u{5D7}\u{5E8} ${formatter.number(args.count)}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{5D4}\u{5E7}\u{5E9} Alt + Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ()=>`${formatter.number(args.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E9}\u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
        })}.`,
    "dragStartedKeyboard": `\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5EA} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}. \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Tab \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E0}\u{5D5}\u{5D5}\u{5D8} \u{5DC}\u{5E0}\u{5E7}\u{5D5}\u{5D3}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4} \u{5D5}\u{5DC}\u{5D0}\u{5D7}\u{5E8} \u{5DE}\u{5DB}\u{5DF} \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8} \u{5D0}\u{5D5} \u{5E2}\u{5DC} Escape \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC}.`,
    "dragStartedTouch": `\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5EA} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}. \u{5E0}\u{5D5}\u{5D5}\u{5D8} \u{5DC}\u{5E0}\u{5E7}\u{5D5}\u{5D3}\u{5EA} \u{5D4}\u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8} \u{5D5}\u{5DC}\u{5D0}\u{5D7}\u{5E8} \u{5DE}\u{5DB}\u{5DF} \u{5D4}\u{5E7}\u{5E9} \u{5E4}\u{5E2}\u{5DE}\u{5D9}\u{5D9}\u{5DD} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}.`,
    "dragStartedVirtual": `\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5EA} \u{5DC}\u{5D2}\u{5E8}\u{5D5}\u{5E8}. \u{5E0}\u{5D5}\u{5D5}\u{5D8} \u{5DC}\u{5E0}\u{5E7}\u{5D5}\u{5D3}\u{5EA} \u{5D4}\u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8} \u{5D5}\u{5DC}\u{5D0}\u{5D7}\u{5E8} \u{5DE}\u{5DB}\u{5DF} \u{5DC}\u{5D7}\u{5E5} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}.`,
    "dropCanceled": `\u{5D4}\u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8} \u{5D1}\u{5D5}\u{5D8}\u{5DC}.`,
    "dropComplete": `\u{5D4}\u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8} \u{5D4}\u{5D5}\u{5E9}\u{5DC}\u{5DD}.`,
    "dropDescriptionKeyboard": `\u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}. \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Escape \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "dropDescriptionTouch": `\u{5D4}\u{5E7}\u{5E9} \u{5E4}\u{5E2}\u{5DE}\u{5D9}\u{5D9}\u{5DD} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}.`,
    "dropDescriptionVirtual": `\u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E9}\u{5D7}\u{5E8}\u{5E8}.`,
    "dropIndicator": `\u{5DE}\u{5D7}\u{5D5}\u{5D5}\u{5DF} \u{5E9}\u{5D7}\u{5E8}\u{5D5}\u{5E8}`,
    "dropOnItem": (args)=>`\u{5E9}\u{5D7}\u{5E8}\u{5E8} \u{5E2}\u{5DC} ${args.itemText}`,
    "dropOnRoot": `\u{5E9}\u{5D7}\u{5E8}\u{5E8} \u{5E2}\u{5DC}`,
    "endDragKeyboard": `\u{5D2}\u{5D5}\u{5E8}\u{5E8}. \u{5D4}\u{5E7}\u{5E9} \u{5E2}\u{5DC} Enter \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "endDragTouch": `\u{5D2}\u{5D5}\u{5E8}\u{5E8}. \u{5D4}\u{5E7}\u{5E9} \u{5E4}\u{5E2}\u{5DE}\u{5D9}\u{5D9}\u{5DD} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "endDragVirtual": `\u{5D2}\u{5D5}\u{5E8}\u{5E8}. \u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D1}\u{5D8}\u{5DC} \u{5D0}\u{5EA} \u{5D4}\u{5D2}\u{5E8}\u{5D9}\u{5E8}\u{5D4}.`,
    "insertAfter": (args)=>`\u{5D4}\u{5D5}\u{5E1}\u{5E3} \u{5D0}\u{5D7}\u{5E8}\u{5D9} ${args.itemText}`,
    "insertBefore": (args)=>`\u{5D4}\u{5D5}\u{5E1}\u{5E3} \u{5DC}\u{5E4}\u{5E0}\u{5D9} ${args.itemText}`,
    "insertBetween": (args)=>`\u{5D4}\u{5D5}\u{5E1}\u{5E3} \u{5D1}\u{5D9}\u{5DF} ${args.beforeItemText} \u{5DC}\u{5D1}\u{5D9}\u{5DF} ${args.afterItemText}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/dnd/dist/hr-HR.mjs
var $4aa59f3c6a796cae$exports = {};
$4aa59f3c6a796cae$exports = {
    "dragDescriptionKeyboard": `Pritisnite Enter da biste po\u{10D}eli povla\u{10D}iti.`,
    "dragDescriptionKeyboardAlt": `Pritisnite Alt + Enter za po\u{10D}etak povla\u{10D}enja.`,
    "dragDescriptionLongPress": `Dugo pritisnite za po\u{10D}etak povla\u{10D}enja.`,
    "dragDescriptionTouch": `Dvaput dodirnite da biste po\u{10D}eli povla\u{10D}iti.`,
    "dragDescriptionVirtual": `Kliknite da biste po\u{10D}eli povla\u{10D}iti.`,
    "dragItem": (args)=>`Povucite stavku ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Povucite ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} odabranu stavku`,
            other: ()=>`ovoliko odabranih stavki: ${formatter.number(args.count)}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pritisnite Enter za povla\u{10D}enje ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} odabrana stavka`,
            other: ()=>`${formatter.number(args.count)} odabrane stavke`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pritisnite Alt + Enter za povla\u{10D}enje ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} odabrana stavka`,
            other: ()=>`${formatter.number(args.count)} odabrane stavke`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Dugo pritisnite za povla\u{10D}enje ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} odabrana stavka`,
            other: ()=>`${formatter.number(args.count)} odabrane stavke`
        })}.`,
    "dragStartedKeyboard": `Po\u{10D}eli ste povla\u{10D}iti. Pritisnite tipku tabulatora da biste do\u{161}li do cilja ispu\u{161}tanja, a zatim Enter da biste ispustili stavku ili Escape da biste prekinuli povla\u{10D}enje.`,
    "dragStartedTouch": `Po\u{10D}eli ste povla\u{10D}iti. Do\u{111}ite do cilja ispu\u{161}tanja, a zatim dvaput dodirnite da biste ispustili stavku.`,
    "dragStartedVirtual": `Po\u{10D}eli ste povla\u{10D}iti. Do\u{111}ite do cilja ispu\u{161}tanja, a zatim kliknite ili pritisnite Enter da biste ispustili stavku.`,
    "dropCanceled": `Povla\u{10D}enje je prekinuto.`,
    "dropComplete": `Ispu\u{161}tanje je dovr\u{161}eno.`,
    "dropDescriptionKeyboard": `Pritisnite Enter da biste ispustili stavku. Pritisnite Escape da biste prekinuli povla\u{10D}enje.`,
    "dropDescriptionTouch": `Dvaput dodirnite da biste ispustili stavku.`,
    "dropDescriptionVirtual": `Kliknite da biste ispustili stavku.`,
    "dropIndicator": `pokazatelj ispu\u{161}tanja`,
    "dropOnItem": (args)=>`Ispustite na stavku ${args.itemText}`,
    "dropOnRoot": `Ispustite na`,
    "endDragKeyboard": `Povla\u{10D}enje. Pritisnite Enter da biste prekinuli povla\u{10D}enje.`,
    "endDragTouch": `Povla\u{10D}enje. Dvaput dodirnite da biste prekinuli povla\u{10D}enje.`,
    "endDragVirtual": `Povla\u{10D}enje. Kliknite da biste prekinuli povla\u{10D}enje.`,
    "insertAfter": (args)=>`Umetnite iza stavke ${args.itemText}`,
    "insertBefore": (args)=>`Ispustite ispred stavke ${args.itemText}`,
    "insertBetween": (args)=>`Umetnite izme\u{111}u stavki ${args.beforeItemText} i ${args.afterItemText}`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/dnd/dist/hu-HU.mjs
var $d8d3646556c40586$exports = {};
$d8d3646556c40586$exports = {
    "dragDescriptionKeyboard": `Nyomja le az Enter billenty\u{171}t a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
    "dragDescriptionKeyboardAlt": `Nyomja le az Alt + Enter billenty\u{171}ket a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
    "dragDescriptionLongPress": `Hosszan nyomja meg a h\xfaz\xe1s elind\xedt\xe1s\xe1hoz.`,
    "dragDescriptionTouch": `Koppintson dupl\xe1n a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
    "dragDescriptionVirtual": `Kattintson a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
    "dragItem": (args)=>`${args.itemText} h\xfaz\xe1sa`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`
        })} h\xfaz\xe1sa`,
    "dragSelectedKeyboard": (args, formatter)=>`Nyomja meg az Entert ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`
        })} h\xfaz\xe1s\xe1hoz.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Nyomja meg az Alt + Enter billenty\u{171}ket ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`
        })} h\xfaz\xe1s\xe1hoz.`,
    "dragSelectedLongPress": (args, formatter)=>`Tartsa lenyomva hosszan ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`,
            other: ()=>`${formatter.number(args.count)} kijel\xf6lt elem`
        })} h\xfaz\xe1s\xe1hoz.`,
    "dragStartedKeyboard": `H\xfaz\xe1s megkezdve. Nyomja le a Tab billenty\u{171}t az elenged\xe9si c\xe9lhoz navig\xe1l\xe1s\xe1hoz, majd nyomja le az Enter billenty\u{171}t az elenged\xe9shez, vagy nyomja le az Escape billenty\u{171}t a megszak\xedt\xe1shoz.`,
    "dragStartedTouch": `H\xfaz\xe1s megkezdve. Navig\xe1ljon egy elenged\xe9si c\xe9lhoz, majd koppintson dupl\xe1n az elenged\xe9shez.`,
    "dragStartedVirtual": `H\xfaz\xe1s megkezdve. Navig\xe1ljon egy elenged\xe9si c\xe9lhoz, majd kattintson vagy nyomja le az Enter billenty\u{171}t az elenged\xe9shez.`,
    "dropCanceled": `Elenged\xe9s megszak\xedtva.`,
    "dropComplete": `Elenged\xe9s teljes\xedtve.`,
    "dropDescriptionKeyboard": `Nyomja le az Enter billenty\u{171}t az elenged\xe9shez. Nyomja le az Escape billenty\u{171}t a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
    "dropDescriptionTouch": `Koppintson dupl\xe1n az elenged\xe9shez.`,
    "dropDescriptionVirtual": `Kattintson az elenged\xe9shez.`,
    "dropIndicator": `elenged\xe9sjelz\u{151}`,
    "dropOnItem": (args)=>`Elenged\xe9s erre: ${args.itemText}`,
    "dropOnRoot": `Elenged\xe9s erre:`,
    "endDragKeyboard": `H\xfaz\xe1s folyamatban. Nyomja le az Enter billenty\u{171}t a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
    "endDragTouch": `H\xfaz\xe1s folyamatban. Koppintson dupl\xe1n a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
    "endDragVirtual": `H\xfaz\xe1s folyamatban. Kattintson a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
    "insertAfter": (args)=>`Besz\xfar\xe1s ${args.itemText} ut\xe1n`,
    "insertBefore": (args)=>`Besz\xfar\xe1s ${args.itemText} el\xe9`,
    "insertBetween": (args)=>`Besz\xfar\xe1s ${args.beforeItemText} \xe9s ${args.afterItemText} k\xf6z\xe9`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/dnd/dist/it-IT.mjs
var $982d558b45395246$exports = {};
$982d558b45395246$exports = {
    "dragDescriptionKeyboard": `Premi Invio per iniziare a trascinare.`,
    "dragDescriptionKeyboardAlt": `Premi Alt + Invio per iniziare a trascinare.`,
    "dragDescriptionLongPress": `Premi a lungo per iniziare a trascinare.`,
    "dragDescriptionTouch": `Tocca due volte per iniziare a trascinare.`,
    "dragDescriptionVirtual": `Fai clic per iniziare a trascinare.`,
    "dragItem": (args)=>`Trascina ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Trascina ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} altro elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} altri elementi selezionati`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Premi Invio per trascinare ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} elementi selezionati`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Premi Alt + Invio per trascinare ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} elementi selezionati`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Premi a lungo per trascinare ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} elemento selezionato`,
            other: ()=>`${formatter.number(args.count)} elementi selezionati`
        })}.`,
    "dragStartedKeyboard": `Hai iniziato a trascinare. Premi Tab per arrivare sull\u{2019}area di destinazione, quindi premi Invio per rilasciare o Esc per annullare.`,
    "dragStartedTouch": `Hai iniziato a trascinare. Arriva sull\u{2019}area di destinazione, quindi tocca due volte per rilasciare.`,
    "dragStartedVirtual": `Hai iniziato a trascinare. Arriva sull\u{2019}area di destinazione, quindi fai clic o premi Invio per rilasciare.`,
    "dropCanceled": `Rilascio annullato.`,
    "dropComplete": `Rilascio completato.`,
    "dropDescriptionKeyboard": `Premi Invio per rilasciare. Premi Esc per annullare.`,
    "dropDescriptionTouch": `Tocca due volte per rilasciare.`,
    "dropDescriptionVirtual": `Fai clic per rilasciare.`,
    "dropIndicator": `indicatore di rilascio`,
    "dropOnItem": (args)=>`Rilascia su ${args.itemText}`,
    "dropOnRoot": `Rilascia su`,
    "endDragKeyboard": `Trascinamento. Premi Invio per annullare.`,
    "endDragTouch": `Trascinamento. Tocca due volte per annullare.`,
    "endDragVirtual": `Trascinamento. Fai clic per annullare.`,
    "insertAfter": (args)=>`Inserisci dopo ${args.itemText}`,
    "insertBefore": (args)=>`Inserisci prima di ${args.itemText}`,
    "insertBetween": (args)=>`Inserisci tra ${args.beforeItemText} e ${args.afterItemText}`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/dnd/dist/ja-JP.mjs
var $6a0cf387b9de036c$exports = {};
$6a0cf387b9de036c$exports = {
    "dragDescriptionKeyboard": `Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{3066}\u{304F}\u{3060}\u{3055}\u{3044}\u{3002}`,
    "dragDescriptionKeyboardAlt": `Alt+Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragDescriptionLongPress": `\u{9577}\u{62BC}\u{3057}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragDescriptionTouch": `\u{30C0}\u{30D6}\u{30EB}\u{30BF}\u{30C3}\u{30D7}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragDescriptionVirtual": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragItem": (args)=>`${args.itemText} \u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{306E}\u{9078}\u{629E}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{306E}\u{9078}\u{629E}\u{9805}\u{76EE}`
        })} \u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}`,
    "dragSelectedKeyboard": (args, formatter)=>`Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{3001}${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`
        })}\u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Alt+Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{3001}${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`
        })}\u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragSelectedLongPress": (args, formatter)=>`\u{9577}\u{62BC}\u{3057}\u{3057}\u{3066}\u{3001}${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{9078}\u{629E}\u{3057}\u{305F}\u{9805}\u{76EE}`
        })}\u{3092}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragStartedKeyboard": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3059}\u{3002}Tab \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30BF}\u{30FC}\u{30B2}\u{30C3}\u{30C8}\u{306B}\u{3044}\u{3069}\u{3046}\u{3057}\u{3001}Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3059}\u{308B}\u{304B}\u{3001}Esc \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragStartedTouch": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{306E}\u{30BF}\u{30FC}\u{30B2}\u{30C3}\u{30C8}\u{306B}\u{79FB}\u{52D5}\u{3057}\u{3001}\u{30C0}\u{30D6}\u{30EB}\u{30BF}\u{30C3}\u{30D7}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dragStartedVirtual": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{958B}\u{59CB}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{306E}\u{30BF}\u{30FC}\u{30B2}\u{30C3}\u{30C8}\u{306B}\u{79FB}\u{52D5}\u{3057}\u{3001}\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{307E}\u{305F}\u{306F} Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dropCanceled": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{304C}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3055}\u{308C}\u{307E}\u{3057}\u{305F}\u{3002}`,
    "dropComplete": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{304C}\u{5B8C}\u{4E86}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}`,
    "dropDescriptionKeyboard": `Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}Esc \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dropDescriptionTouch": `\u{30C0}\u{30D6}\u{30EB}\u{30BF}\u{30C3}\u{30D7}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dropDescriptionVirtual": `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "dropIndicator": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30A4}\u{30F3}\u{30B8}\u{30B1}\u{30FC}\u{30BF}\u{30FC}`,
    "dropOnItem": (args)=>`${args.itemText} \u{306B}\u{30C9}\u{30ED}\u{30C3}\u{30D7}`,
    "dropOnRoot": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{5834}\u{6240}`,
    "endDragKeyboard": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{3066}\u{3044}\u{307E}\u{3059}\u{3002}Enter \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "endDragTouch": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{3066}\u{3044}\u{307E}\u{3059}\u{3002}\u{30C0}\u{30D6}\u{30EB}\u{30BF}\u{30C3}\u{30D7}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "endDragVirtual": `\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3057}\u{3066}\u{3044}\u{307E}\u{3059}\u{3002}\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{30C9}\u{30E9}\u{30C3}\u{30B0}\u{3092}\u{30AD}\u{30E3}\u{30F3}\u{30BB}\u{30EB}\u{3057}\u{307E}\u{3059}\u{3002}`,
    "insertAfter": (args)=>`${args.itemText} \u{306E}\u{5F8C}\u{306B}\u{633F}\u{5165}`,
    "insertBefore": (args)=>`${args.itemText} \u{306E}\u{524D}\u{306B}\u{633F}\u{5165}`,
    "insertBetween": (args)=>`${args.beforeItemText} \u{3068} ${args.afterItemText} \u{306E}\u{9593}\u{306B}\u{633F}\u{5165}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/dnd/dist/ko-KR.mjs
var $a97fefa2956f4bcb$exports = {};
$a97fefa2956f4bcb$exports = {
    "dragDescriptionKeyboard": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}.`,
    "dragDescriptionKeyboardAlt": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} Alt + Enter\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragDescriptionLongPress": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{AE38}\u{AC8C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragDescriptionTouch": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{B354}\u{BE14} \u{D0ED}\u{D558}\u{C138}\u{C694}.`,
    "dragDescriptionVirtual": `\u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C138}\u{C694}.`,
    "dragItem": (args)=>`${args.itemText} \u{B4DC}\u{B798}\u{ADF8}`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`
        })} \u{B4DC}\u{B798}\u{ADF8}`,
    "dragSelectedKeyboard": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`
        })}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`
        })}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{B824}\u{BA74} Alt + Enter\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragSelectedLongPress": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C120}\u{D0DD} \u{D56D}\u{BAA9}`
        })}\u{C744} \u{B4DC}\u{B798}\u{ADF8}\u{D558}\u{B824}\u{BA74} \u{AE38}\u{AC8C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`,
    "dragStartedKeyboard": `\u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{C2DC}\u{C791}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}. Tab\u{C744} \u{B20C}\u{B7EC} \u{B4DC}\u{B86D} \u{B300}\u{C0C1}\u{C73C}\u{B85C} \u{C774}\u{B3D9}\u{D55C} \u{B2E4}\u{C74C} Enter\u{B97C} \u{B20C}\u{B7EC} \u{B4DC}\u{B86D}\u{D558}\u{AC70}\u{B098} Esc\u{B97C} \u{B20C}\u{B7EC} \u{CDE8}\u{C18C}\u{D558}\u{C138}\u{C694}.`,
    "dragStartedTouch": `\u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{C2DC}\u{C791}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B86D} \u{B300}\u{C0C1}\u{C73C}\u{B85C} \u{C774}\u{B3D9}\u{D55C} \u{B2E4}\u{C74C} \u{B354}\u{BE14} \u{D0ED}\u{D558}\u{C5EC} \u{B4DC}\u{B86D}\u{D558}\u{C138}\u{C694}.`,
    "dragStartedVirtual": `\u{B4DC}\u{B798}\u{ADF8}\u{AC00} \u{C2DC}\u{C791}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B86D} \u{B300}\u{C0C1}\u{C73C}\u{B85C} \u{C774}\u{B3D9}\u{D55C} \u{B2E4}\u{C74C} \u{D074}\u{B9AD}\u{D558}\u{AC70}\u{B098} Enter\u{B97C} \u{B20C}\u{B7EC} \u{B4DC}\u{B86D}\u{D558}\u{C138}\u{C694}.`,
    "dropCanceled": `\u{B4DC}\u{B86D}\u{C774} \u{CDE8}\u{C18C}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "dropComplete": `\u{B4DC}\u{B86D}\u{C774} \u{C644}\u{B8CC}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "dropDescriptionKeyboard": `\u{B4DC}\u{B86D}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}. \u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{CDE8}\u{C18C}\u{D558}\u{B824}\u{BA74} Esc\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}.`,
    "dropDescriptionTouch": `\u{B354}\u{BE14} \u{D0ED}\u{D558}\u{C5EC} \u{B4DC}\u{B86D}\u{D558}\u{C138}\u{C694}.`,
    "dropDescriptionVirtual": `\u{B4DC}\u{B86D}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C138}\u{C694}.`,
    "dropIndicator": `\u{B4DC}\u{B86D} \u{D45C}\u{C2DC}\u{AE30}`,
    "dropOnItem": (args)=>`${args.itemText}\u{C5D0} \u{B4DC}\u{B86D}`,
    "dropOnRoot": `\u{B4DC}\u{B86D} \u{B300}\u{C0C1}`,
    "endDragKeyboard": `\u{B4DC}\u{B798}\u{ADF8} \u{C911}\u{C785}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{CDE8}\u{C18C}\u{D558}\u{B824}\u{BA74} Enter\u{B97C} \u{B204}\u{B974}\u{C138}\u{C694}.`,
    "endDragTouch": `\u{B4DC}\u{B798}\u{ADF8} \u{C911}\u{C785}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{CDE8}\u{C18C}\u{D558}\u{B824}\u{BA74} \u{B354}\u{BE14} \u{D0ED}\u{D558}\u{C138}\u{C694}.`,
    "endDragVirtual": `\u{B4DC}\u{B798}\u{ADF8} \u{C911}\u{C785}\u{B2C8}\u{B2E4}. \u{B4DC}\u{B798}\u{ADF8}\u{B97C} \u{CDE8}\u{C18C}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C138}\u{C694}.`,
    "insertAfter": (args)=>`${args.itemText} \u{C774}\u{D6C4}\u{C5D0} \u{C0BD}\u{C785}`,
    "insertBefore": (args)=>`${args.itemText} \u{C774}\u{C804}\u{C5D0} \u{C0BD}\u{C785}`,
    "insertBetween": (args)=>`${args.beforeItemText} \u{BC0F} ${args.afterItemText} \u{C0AC}\u{C774}\u{C5D0} \u{C0BD}\u{C785}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/dnd/dist/lt-LT.mjs
var $5fb5837f94e1c150$exports = {};
$5fb5837f94e1c150$exports = {
    "dragDescriptionKeyboard": `Paspauskite \u{201E}Enter\u{201C}, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragDescriptionKeyboardAlt": `Paspauskite \u{201E}Alt + Enter\u{201C}, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragDescriptionLongPress": `Palaikykite nuspaud\u{119}, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragDescriptionTouch": `Palieskite dukart, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragDescriptionVirtual": `Spustel\u{117}kite, kad prad\u{117}tum\u{117}te vilkti.`,
    "dragItem": (args)=>`Vilkti ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Vilkti ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pasirinkt\u{105} element\u{105}`,
            other: ()=>`${formatter.number(args.count)} pasirinktus elementus`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Paspauskite \u{201E}Enter\u{201C}, jei norite nuvilkti ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pasirinkt\u{105} element\u{105}`,
            other: ()=>`${formatter.number(args.count)} pasirinktus elementus`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Paspauskite \u{201E}Alt + Enter\u{201C}, kad nuvilktum\u{117}te ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pasirinkt\u{105} element\u{105}`,
            other: ()=>`${formatter.number(args.count)} pasirinktus elementus`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Nuspaud\u{119} palaikykite, kad nuvilktum\u{117}te ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pasirinkt\u{105} element\u{105}`,
            other: ()=>`${formatter.number(args.count)} pasirinktus elementus`
        })}.`,
    "dragStartedKeyboard": `Prad\u{117}ta vilkti. Paspauskite \u{201E}Tab\u{201C}, kad pereitum\u{117}te \u{12F} tiesiogin\u{119} paskirties viet\u{105}, tada paspauskite \u{201E}Enter\u{201C}, kad numestum\u{117}te, arba \u{201E}Escape\u{201C}, kad at\u{161}auktum\u{117}te.`,
    "dragStartedTouch": `Prad\u{117}ta vilkti. Eikite \u{12F} tiesiogin\u{119} paskirties viet\u{105}, tada palieskite dukart, kad numestum\u{117}te.`,
    "dragStartedVirtual": `Prad\u{117}ta vilkti. Eikite \u{12F} tiesiogin\u{119} paskirties viet\u{105} ir spustel\u{117}kite arba paspauskite \u{201E}Enter\u{201C}, kad numestum\u{117}te.`,
    "dropCanceled": `Numetimas at\u{161}auktas.`,
    "dropComplete": `Numesta.`,
    "dropDescriptionKeyboard": `Paspauskite \u{201E}Enter\u{201C}, kad numestum\u{117}te. Paspauskite \u{201E}Escape\u{201C}, kad at\u{161}auktum\u{117}te vilkim\u{105}.`,
    "dropDescriptionTouch": `Palieskite dukart, kad numestum\u{117}te.`,
    "dropDescriptionVirtual": `Spustel\u{117}kite, kad numestum\u{117}te.`,
    "dropIndicator": `numetimo indikatorius`,
    "dropOnItem": (args)=>`Numesti ant ${args.itemText}`,
    "dropOnRoot": `Numesti ant`,
    "endDragKeyboard": `Velkama. Paspauskite \u{201E}Enter\u{201C}, kad at\u{161}auktum\u{117}te vilkim\u{105}.`,
    "endDragTouch": `Velkama. Spustel\u{117}kite dukart, kad at\u{161}auktum\u{117}te vilkim\u{105}.`,
    "endDragVirtual": `Velkama. Spustel\u{117}kite, kad at\u{161}auktum\u{117}te vilkim\u{105}.`,
    "insertAfter": (args)=>`\u{12E}terpti po ${args.itemText}`,
    "insertBefore": (args)=>`\u{12E}terpti prie\u{161} ${args.itemText}`,
    "insertBetween": (args)=>`\u{12E}terpti tarp ${args.beforeItemText} ir ${args.afterItemText}`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/dnd/dist/lv-LV.mjs
var $5b2e5709864cc922$exports = {};
$5b2e5709864cc922$exports = {
    "dragDescriptionKeyboard": `Nospiediet Enter, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragDescriptionKeyboardAlt": `Nospiediet tausti\u{146}u kombin\u{101}ciju Alt+Enter, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragDescriptionLongPress": `Turiet nospiestu, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragDescriptionTouch": `Veiciet dubultsk\u{101}rienu, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragDescriptionVirtual": `Noklik\u{161}\u{137}iniet, lai s\u{101}ktu vilk\u{161}anu.`,
    "dragItem": (args)=>`Velciet ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Velciet ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} atlas\u{12B}to vienumu`,
            other: ()=>`${formatter.number(args.count)} atlas\u{12B}tos vienumus`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Nospiediet tausti\u{146}u Enter, lai vilktu ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} atlas\u{12B}to vienumu`,
            other: ()=>`${formatter.number(args.count)} atlas\u{12B}tos vienumus`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Nospiediet tausti\u{146}u kombin\u{101}ciju Alt+Enter, lai vilktu ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} atlas\u{12B}to vienumu`,
            other: ()=>`${formatter.number(args.count)} atlas\u{12B}tos vienumus`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Turiet nospiestu, lai vilktu ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} atlas\u{12B}to vienumu`,
            other: ()=>`${formatter.number(args.count)} atlas\u{12B}tos vienumus`
        })}.`,
    "dragStartedKeyboard": `Uzs\u{101}kta vilk\u{161}ana. Nospiediet tausti\u{146}u Tab, lai p\u{101}rietu uz nome\u{161}anas m\u{113}r\u{137}i, p\u{113}c tam nospiediet Enter, lai nomestu, vai nospiediet Escape, lai atceltu.`,
    "dragStartedTouch": `Uzs\u{101}kta vilk\u{161}ana. P\u{101}rejiet uz nome\u{161}anas m\u{113}r\u{137}i, p\u{113}c tam veiciet dubultsk\u{101}rienu, lai nomestu.`,
    "dragStartedVirtual": `Uzs\u{101}kta vilk\u{161}ana. P\u{101}rejiet uz nome\u{161}anas m\u{113}r\u{137}i, p\u{113}c tam nospiediet Enter, lai nomestu.`,
    "dropCanceled": `Nome\u{161}ana atcelta.`,
    "dropComplete": `Nome\u{161}ana pabeigta.`,
    "dropDescriptionKeyboard": `Nospiediet Enter, lai nomestu. Nospiediet Escape, lai atceltu vilk\u{161}anu.`,
    "dropDescriptionTouch": `Veiciet dubultsk\u{101}rienu, lai nomestu.`,
    "dropDescriptionVirtual": `Noklik\u{161}\u{137}iniet, lai nomestu.`,
    "dropIndicator": `nome\u{161}anas indikators`,
    "dropOnItem": (args)=>`Nometiet uz ${args.itemText}`,
    "dropOnRoot": `Nometiet uz`,
    "endDragKeyboard": `Notiek vilk\u{161}ana. Nospiediet Enter, lai atceltu vilk\u{161}anu.`,
    "endDragTouch": `Notiek vilk\u{161}ana. Veiciet dubultsk\u{101}rienu, lai atceltu vilk\u{161}anu.`,
    "endDragVirtual": `Notiek vilk\u{161}ana. Noklik\u{161}\u{137}iniet, lai atceltu vilk\u{161}anu.`,
    "insertAfter": (args)=>`Ievietojiet p\u{113}c ${args.itemText}`,
    "insertBefore": (args)=>`Ievietojiet pirms ${args.itemText}`,
    "insertBetween": (args)=>`Ievietojiet starp ${args.beforeItemText} un ${args.afterItemText}`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/dnd/dist/nb-NO.mjs
var $ee15bb8efb18cc69$exports = {};
$ee15bb8efb18cc69$exports = {
    "dragDescriptionKeyboard": `Trykk p\xe5 Enter for \xe5 begynne \xe5 dra.`,
    "dragDescriptionKeyboardAlt": `Trykk p\xe5 Alt + Enter for \xe5 begynne \xe5 dra.`,
    "dragDescriptionLongPress": `Trykk lenge for \xe5 begynne \xe5 dra.`,
    "dragDescriptionTouch": `Dobbelttrykk for \xe5 begynne \xe5 dra.`,
    "dragDescriptionVirtual": `Klikk for \xe5 begynne \xe5 dra.`,
    "dragItem": (args)=>`Dra ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} merket element`,
            other: ()=>`${formatter.number(args.count)} merkede elementer`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Trykk Enter for \xe5 dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgt element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Trykk p\xe5 Alt + Enter for \xe5 dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgt element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Trykk lenge for \xe5 dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valgt element`,
            other: ()=>`${formatter.number(args.count)} valgte elementer`
        })}.`,
    "dragStartedKeyboard": `Begynte \xe5 dra. Trykk p\xe5 Tab for \xe5 navigere til et m\xe5l, og trykk deretter p\xe5 Enter for \xe5 slippe eller p\xe5 Esc for \xe5 avbryte.`,
    "dragStartedTouch": `Begynte \xe5 dra. Naviger til et m\xe5l, og dobbelttrykk for \xe5 slippe.`,
    "dragStartedVirtual": `Begynte \xe5 dra. Naviger til et m\xe5l, og klikk eller trykk p\xe5 Enter for \xe5 slippe.`,
    "dropCanceled": `Avbr\xf8t slipping.`,
    "dropComplete": `Slippingen er fullf\xf8rt.`,
    "dropDescriptionKeyboard": `Trykk p\xe5 Enter for \xe5 slippe. Trykk p\xe5 Esc hvis du vil avbryte draingen.`,
    "dropDescriptionTouch": `Dobbelttrykk for \xe5 slippe.`,
    "dropDescriptionVirtual": `Klikk for \xe5 slippe.`,
    "dropIndicator": `slippeindikator`,
    "dropOnItem": (args)=>`Slipp p\xe5 ${args.itemText}`,
    "dropOnRoot": `Slipp p\xe5`,
    "endDragKeyboard": `Drar. Trykk p\xe5 Enter hvis du vil avbryte.`,
    "endDragTouch": `Drar. Dobbelttrykk hvis du vil avbryte.`,
    "endDragVirtual": `Drar. Klikk hvis du vil avbryte.`,
    "insertAfter": (args)=>`Sett inn etter ${args.itemText}`,
    "insertBefore": (args)=>`Sett inn f\xf8r ${args.itemText}`,
    "insertBetween": (args)=>`Sett inn mellom ${args.beforeItemText} og ${args.afterItemText}`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/dnd/dist/nl-NL.mjs
var $1daf2d4602e26ac4$exports = {};
$1daf2d4602e26ac4$exports = {
    "dragDescriptionKeyboard": `Druk op Enter om te slepen.`,
    "dragDescriptionKeyboardAlt": `Druk op Alt + Enter om te slepen.`,
    "dragDescriptionLongPress": `Houd lang ingedrukt om te slepen.`,
    "dragDescriptionTouch": `Dubbeltik om te slepen.`,
    "dragDescriptionVirtual": `Klik om met slepen te starten.`,
    "dragItem": (args)=>`${args.itemText} slepen`,
    "dragSelectedItems": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} geselecteerd item`,
            other: ()=>`${formatter.number(args.count)} geselecteerde items`
        })} slepen`,
    "dragSelectedKeyboard": (args, formatter)=>`Druk op Enter om ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} geselecteerd item`,
            other: ()=>`${formatter.number(args.count)} geselecteerde items`
        })} te slepen.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Druk op Alt + Enter om ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} geselecteerd item`,
            other: ()=>`${formatter.number(args.count)} geselecteerde items`
        })} te slepen.`,
    "dragSelectedLongPress": (args, formatter)=>`Houd lang ingedrukt om ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} geselecteerd item`,
            other: ()=>`${formatter.number(args.count)} geselecteerde items`
        })} te slepen.`,
    "dragStartedKeyboard": `Begonnen met slepen. Druk op Tab om naar een locatie te gaan. Druk dan op Enter om neer te zetten, of op Esc om te annuleren.`,
    "dragStartedTouch": `Begonnen met slepen. Ga naar de gewenste locatie en dubbeltik om neer te zetten.`,
    "dragStartedVirtual": `Begonnen met slepen. Ga naar de gewenste locatie en klik of druk op Enter om neer te zetten.`,
    "dropCanceled": `Neerzetten geannuleerd.`,
    "dropComplete": `Neerzetten voltooid.`,
    "dropDescriptionKeyboard": `Druk op Enter om neer te zetten. Druk op Esc om het slepen te annuleren.`,
    "dropDescriptionTouch": `Dubbeltik om neer te zetten.`,
    "dropDescriptionVirtual": `Klik om neer te zetten.`,
    "dropIndicator": `aanwijzer voor neerzetten`,
    "dropOnItem": (args)=>`Neerzetten op ${args.itemText}`,
    "dropOnRoot": `Neerzetten op`,
    "endDragKeyboard": `Bezig met slepen. Druk op Enter om te annuleren.`,
    "endDragTouch": `Bezig met slepen. Dubbeltik om te annuleren.`,
    "endDragVirtual": `Bezig met slepen. Klik om te annuleren.`,
    "insertAfter": (args)=>`Plaatsen na ${args.itemText}`,
    "insertBefore": (args)=>`Plaatsen v\xf3\xf3r ${args.itemText}`,
    "insertBetween": (args)=>`Plaatsen tussen ${args.beforeItemText} en ${args.afterItemText}`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/dnd/dist/pl-PL.mjs
var $7115429b0f60511f$exports = {};
$7115429b0f60511f$exports = {
    "dragDescriptionKeyboard": `Naci\u{15B}nij Enter, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragDescriptionKeyboardAlt": `Naci\u{15B}nij Alt + Enter, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragDescriptionLongPress": `Naci\u{15B}nij i przytrzymaj, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragDescriptionTouch": `Dotknij dwukrotnie, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragDescriptionVirtual": `Kliknij, aby rozpocz\u{105}\u{107} przeci\u{105}ganie.`,
    "dragItem": (args)=>`Przeci\u{105}gnij ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Przeci\u{105}gnij ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} wybrany element`,
            other: ()=>`${formatter.number(args.count)} wybranych element\xf3w`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Naci\u{15B}nij Enter, aby przeci\u{105}gn\u{105}\u{107} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} wybrany element`,
            other: ()=>`${formatter.number(args.count)} wybrane(-ych) elementy(-\xf3w)`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Naci\u{15B}nij Alt + Enter, aby przeci\u{105}gn\u{105}\u{107} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} wybrany element`,
            other: ()=>`${formatter.number(args.count)} wybrane(-ych) elementy(-\xf3w)`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Naci\u{15B}nij i przytrzymaj, aby przeci\u{105}gn\u{105}\u{107} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} wybrany element`,
            other: ()=>`${formatter.number(args.count)} wybrane(-ych) elementy(-\xf3w)`
        })}.`,
    "dragStartedKeyboard": `Rozpocz\u{119}to przeci\u{105}ganie. Naci\u{15B}nij Tab, aby wybra\u{107} miejsce docelowe, a nast\u{119}pnie naci\u{15B}nij Enter, aby upu\u{15B}ci\u{107}, lub Escape, aby anulowa\u{107}.`,
    "dragStartedTouch": `Rozpocz\u{119}to przeci\u{105}ganie. Wybierz miejsce, w kt\xf3rym chcesz upu\u{15B}ci\u{107} element, a nast\u{119}pnie dotknij dwukrotnie, aby upu\u{15B}ci\u{107}.F`,
    "dragStartedVirtual": `Rozpocz\u{119}to przeci\u{105}ganie. Wybierz miejsce, w kt\xf3rym chcesz upu\u{15B}ci\u{107} element, a nast\u{119}pnie kliknij lub naci\u{15B}nij Enter, aby upu\u{15B}ci\u{107}.`,
    "dropCanceled": `Anulowano upuszczenie.`,
    "dropComplete": `Zako\u{144}czono upuszczanie.`,
    "dropDescriptionKeyboard": `Naci\u{15B}nij Enter, aby upu\u{15B}ci\u{107}. Naci\u{15B}nij Escape, aby anulowa\u{107} przeci\u{105}gni\u{119}cie.`,
    "dropDescriptionTouch": `Dotknij dwukrotnie, aby upu\u{15B}ci\u{107}.`,
    "dropDescriptionVirtual": `Kliknij, aby upu\u{15B}ci\u{107}.`,
    "dropIndicator": `wska\u{17A}nik upuszczenia`,
    "dropOnItem": (args)=>`Upu\u{15B}\u{107} na ${args.itemText}`,
    "dropOnRoot": `Upu\u{15B}\u{107}`,
    "endDragKeyboard": `Przeci\u{105}ganie. Naci\u{15B}nij Enter, aby anulowa\u{107} przeci\u{105}gni\u{119}cie.`,
    "endDragTouch": `Przeci\u{105}ganie. Kliknij dwukrotnie, aby anulowa\u{107} przeci\u{105}gni\u{119}cie.`,
    "endDragVirtual": `Przeci\u{105}ganie. Kliknij, aby anulowa\u{107} przeci\u{105}ganie.`,
    "insertAfter": (args)=>`Umie\u{15B}\u{107} za ${args.itemText}`,
    "insertBefore": (args)=>`Umie\u{15B}\u{107} przed ${args.itemText}`,
    "insertBetween": (args)=>`Umie\u{15B}\u{107} mi\u{119}dzy ${args.beforeItemText} i ${args.afterItemText}`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/dnd/dist/pt-BR.mjs
var $5edd453ae5d4a8bc$exports = {};
$5edd453ae5d4a8bc$exports = {
    "dragDescriptionKeyboard": `Pressione Enter para come\xe7ar a arrastar.`,
    "dragDescriptionKeyboardAlt": `Pressione Alt + Enter para come\xe7ar a arrastar.`,
    "dragDescriptionLongPress": `Pressione e segure para come\xe7ar a arrastar.`,
    "dragDescriptionTouch": `Toque duas vezes para come\xe7ar a arrastar.`,
    "dragDescriptionVirtual": `Clique para come\xe7ar a arrastar.`,
    "dragItem": (args)=>`Arrastar ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} item selecionado`,
            other: ()=>`${formatter.number(args.count)} itens selecionados`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pressione Enter para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pressione Alt + Enter para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Pressione e segure para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragStartedKeyboard": `Comece a arrastar. Pressione Tab para navegar at\xe9 um alvo e, em seguida, pressione Enter para soltar ou pressione Escape para cancelar.`,
    "dragStartedTouch": `Comece a arrastar. Navegue at\xe9 um alvo e toque duas vezes para soltar.`,
    "dragStartedVirtual": `Comece a arrastar. Navegue at\xe9 um alvo e clique ou pressione Enter para soltar.`,
    "dropCanceled": `Libera\xe7\xe3o cancelada.`,
    "dropComplete": `Libera\xe7\xe3o conclu\xedda.`,
    "dropDescriptionKeyboard": `Pressione Enter para soltar. Pressione Escape para cancelar.`,
    "dropDescriptionTouch": `Toque duas vezes para soltar.`,
    "dropDescriptionVirtual": `Clique para soltar.`,
    "dropIndicator": `indicador de libera\xe7\xe3o`,
    "dropOnItem": (args)=>`Soltar em ${args.itemText}`,
    "dropOnRoot": `Soltar`,
    "endDragKeyboard": `Arrastando. Pressione Enter para cancelar.`,
    "endDragTouch": `Arrastando. Toque duas vezes para cancelar.`,
    "endDragVirtual": `Arrastando. Clique para cancelar.`,
    "insertAfter": (args)=>`Inserir ap\xf3s ${args.itemText}`,
    "insertBefore": (args)=>`Inserir antes de ${args.itemText}`,
    "insertBetween": (args)=>`Inserir entre ${args.beforeItemText} e ${args.afterItemText}`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/dnd/dist/pt-PT.mjs
var $5f431994f708535e$exports = {};
$5f431994f708535e$exports = {
    "dragDescriptionKeyboard": `Prima Enter para iniciar o arrasto.`,
    "dragDescriptionKeyboardAlt": `Prima Alt + Enter para iniciar o arrasto.`,
    "dragDescriptionLongPress": `Prima longamente para come\xe7ar a arrastar.`,
    "dragDescriptionTouch": `Fa\xe7a duplo toque para come\xe7ar a arrastar.`,
    "dragDescriptionVirtual": `Clique para iniciar o arrasto.`,
    "dragItem": (args)=>`Arrastar ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} item selecionado`,
            other: ()=>`${formatter.number(args.count)} itens selecionados`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Prima Enter para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Prima Alt + Enter para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Prima longamente para arrastar ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} o item selecionado`,
            other: ()=>`${formatter.number(args.count)} os itens selecionados`
        })}.`,
    "dragStartedKeyboard": `Arrasto iniciado. Prima a tecla de tabula\xe7\xe3o para navegar para um destino para largar, e em seguida prima Enter para largar ou prima Escape para cancelar.`,
    "dragStartedTouch": `Arrasto iniciado. Navegue para um destino para largar, e em seguida fa\xe7a duplo toque para largar.`,
    "dragStartedVirtual": `Arrasto iniciado. Navegue para um destino para largar, e em seguida clique ou prima Enter para largar.`,
    "dropCanceled": `Largar cancelado.`,
    "dropComplete": `Largar completo.`,
    "dropDescriptionKeyboard": `Prima Enter para largar. Prima Escape para cancelar o arrasto.`,
    "dropDescriptionTouch": `Fa\xe7a duplo toque para largar.`,
    "dropDescriptionVirtual": `Clique para largar.`,
    "dropIndicator": `Indicador de largar`,
    "dropOnItem": (args)=>`Largar em ${args.itemText}`,
    "dropOnRoot": `Largar em`,
    "endDragKeyboard": `A arrastar. Prima Enter para cancelar o arrasto.`,
    "endDragTouch": `A arrastar. Fa\xe7a duplo toque para cancelar o arrasto.`,
    "endDragVirtual": `A arrastar. Clique para cancelar o arrasto.`,
    "insertAfter": (args)=>`Inserir depois de ${args.itemText}`,
    "insertBefore": (args)=>`Inserir antes de ${args.itemText}`,
    "insertBetween": (args)=>`Inserir entre ${args.beforeItemText} e ${args.afterItemText}`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/dnd/dist/ro-RO.mjs
var $107b5e2e45e971f1$exports = {};
$107b5e2e45e971f1$exports = {
    "dragDescriptionKeyboard": `Ap\u{103}sa\u{21B}i pe Enter pentru a \xeencepe glisarea.`,
    "dragDescriptionKeyboardAlt": `Ap\u{103}sa\u{21B}i pe Alt + Enter pentru a \xeencepe glisarea.`,
    "dragDescriptionLongPress": `Ap\u{103}sa\u{21B}i lung pentru a \xeencepe glisarea.`,
    "dragDescriptionTouch": `Atinge\u{21B}i de dou\u{103} ori pentru a \xeencepe s\u{103} glisa\u{21B}i.`,
    "dragDescriptionVirtual": `Face\u{21B}i clic pentru a \xeencepe glisarea.`,
    "dragItem": (args)=>`Glisa\u{21B}i ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Glisa\u{21B}i ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Ap\u{103}sa\u{21B}i pe Enter pentru a glisa ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Ap\u{103}sa\u{21B}i pe Alt + Enter pentru a glisa ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Ap\u{103}sa\u{21B}i lung pentru a glisa ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} element selectat`,
            other: ()=>`${formatter.number(args.count)} elemente selectate`
        })}.`,
    "dragStartedKeyboard": `A \xeenceput glisarea. Ap\u{103}sa\u{21B}i pe Tab pentru a naviga la o \u{21B}int\u{103} de fixare, apoi ap\u{103}sa\u{21B}i pe Enter pentru a fixa sau ap\u{103}sa\u{21B}i pe Escape pentru a anula glisarea.`,
    "dragStartedTouch": `A \xeenceput glisarea. Naviga\u{21B}i la o \u{21B}int\u{103} de fixare, apoi atinge\u{21B}i de dou\u{103} ori pentru a fixa.`,
    "dragStartedVirtual": `A \xeenceput glisarea. Naviga\u{21B}i la o \u{21B}int\u{103} de fixare, apoi face\u{21B}i clic sau ap\u{103}sa\u{21B}i pe Enter pentru a fixa.`,
    "dropCanceled": `Fixare anulat\u{103}.`,
    "dropComplete": `Fixare finalizat\u{103}.`,
    "dropDescriptionKeyboard": `Ap\u{103}sa\u{21B}i pe Enter pentru a fixa. Ap\u{103}sa\u{21B}i pe Escape pentru a anula glisarea.`,
    "dropDescriptionTouch": `Atinge\u{21B}i de dou\u{103} ori pentru a fixa.`,
    "dropDescriptionVirtual": `Face\u{21B}i clic pentru a fixa.`,
    "dropIndicator": `indicator de fixare`,
    "dropOnItem": (args)=>`Fixa\u{21B}i pe ${args.itemText}`,
    "dropOnRoot": `Fixare pe`,
    "endDragKeyboard": `Se gliseaz\u{103}. Ap\u{103}sa\u{21B}i pe Enter pentru a anula glisarea.`,
    "endDragTouch": `Se gliseaz\u{103}. Atinge\u{21B}i de dou\u{103} ori pentru a anula glisarea.`,
    "endDragVirtual": `Se gliseaz\u{103}. Face\u{21B}i clic pentru a anula glisarea.`,
    "insertAfter": (args)=>`Insera\u{21B}i dup\u{103} ${args.itemText}`,
    "insertBefore": (args)=>`Insera\u{21B}i \xeenainte de ${args.itemText}`,
    "insertBetween": (args)=>`Insera\u{21B}i \xeentre ${args.beforeItemText} \u{219}i ${args.afterItemText}`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/dnd/dist/ru-RU.mjs
var $d4b9c2f01c1892f7$exports = {};
$d4b9c2f01c1892f7$exports = {
    "dragDescriptionKeyboard": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter \u{434}\u{43B}\u{44F} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F}.`,
    "dragDescriptionKeyboardAlt": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + Enter, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{442}\u{44C}.`,
    "dragDescriptionLongPress": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{442}\u{44C}.`,
    "dragDescriptionTouch": `\u{414}\u{432}\u{430}\u{436}\u{434}\u{44B} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F}.`,
    "dragDescriptionVirtual": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F}.`,
    "dragItem": (args)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{44C} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{44C} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Enter \u{434}\u{43B}\u{44F} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{433}\u{43E} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{430}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + Enter \u{434}\u{43B}\u{44F} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{433}\u{43E} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{430}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{433}\u{43E} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{430}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{445} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432}`
        })}.`,
    "dragStartedKeyboard": `\u{41D}\u{430}\u{447}\u{430}\u{442}\u{43E} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Tab \u{434}\u{43B}\u{44F} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{430} \u{446}\u{435}\u{43B}\u{438}, \u{437}\u{430}\u{442}\u{435}\u{43C} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}, \u{438}\u{43B}\u{438} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Escape \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{44F}.`,
    "dragStartedTouch": `\u{41D}\u{430}\u{447}\u{430}\u{442}\u{43E} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{446}\u{435}\u{43B}\u{44C}, \u{437}\u{430}\u{442}\u{435}\u{43C} \u{434}\u{432}\u{430}\u{436}\u{434}\u{44B} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}.`,
    "dragStartedVirtual": `\u{41D}\u{430}\u{447}\u{430}\u{442}\u{43E} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Tab \u{434}\u{43B}\u{44F} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{430} \u{446}\u{435}\u{43B}\u{438}, \u{437}\u{430}\u{442}\u{435}\u{43C} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}.`,
    "dropCanceled": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{43E}.`,
    "dropComplete": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43E}.`,
    "dropDescriptionKeyboard": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Escape \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B}.`,
    "dropDescriptionTouch": `\u{414}\u{432}\u{430}\u{436}\u{434}\u{44B} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}.`,
    "dropDescriptionVirtual": `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}.`,
    "dropIndicator": `\u{438}\u{43D}\u{434}\u{438}\u{43A}\u{430}\u{442}\u{43E}\u{440} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{44F}`,
    "dropOnItem": (args)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{44C} \u{43D}\u{430} ${args.itemText}`,
    "dropOnRoot": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{449}\u{438}\u{442}\u{44C} \u{43D}\u{430}`,
    "endDragKeyboard": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{432}\u{438}\u{448}\u{443} Enter \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B}.`,
    "endDragTouch": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{414}\u{432}\u{430}\u{436}\u{434}\u{44B} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B}.`,
    "endDragVirtual": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{430}\u{441}\u{43A}\u{438}\u{432}\u{430}\u{43D}\u{438}\u{435}. \u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435} \u{434}\u{43B}\u{44F} \u{43E}\u{442}\u{43C}\u{435}\u{43D}\u{44B}.`,
    "insertAfter": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{441}\u{43B}\u{435} ${args.itemText}`,
    "insertBefore": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43F}\u{435}\u{440}\u{435}\u{434} ${args.itemText}`,
    "insertBetween": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43C}\u{435}\u{436}\u{434}\u{443} ${args.beforeItemText} \u{438} ${args.afterItemText}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/dnd/dist/sk-SK.mjs
var $dbdc1942894e83e4$exports = {};
$dbdc1942894e83e4$exports = {
    "dragDescriptionKeyboard": `Stla\u{10D}en\xedm kl\xe1vesu Enter za\u{10D}nete pres\xfavanie.`,
    "dragDescriptionKeyboardAlt": `Stla\u{10D}en\xedm kl\xe1vesov Alt + Enter za\u{10D}nete pres\xfavanie.`,
    "dragDescriptionLongPress": `Dlh\xfdm stla\u{10D}en\xedm za\u{10D}nete pres\xfavanie.`,
    "dragDescriptionTouch": `Dvojit\xfdm kliknut\xedm za\u{10D}nete pres\xfavanie.`,
    "dragDescriptionVirtual": `Kliknut\xedm za\u{10D}nete pres\xfavanie.`,
    "dragItem": (args)=>`Presun\xfa\u{165} polo\u{17E}ku ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Presun\xfa\u{165} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybrat\xfa polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybrat\xe9 polo\u{17E}ky`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Stla\u{10D}en\xedm kl\xe1vesu Enter presuniete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybrat\xfa polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybrat\xfdch polo\u{17E}iek`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Stla\u{10D}en\xedm kl\xe1vesov Alt + Enter presuniete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybrat\xfa polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybrat\xfdch polo\u{17E}iek`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Dlh\xfdm stla\u{10D}en\xedm presuniete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} vybrat\xfa polo\u{17E}ku`,
            other: ()=>`${formatter.number(args.count)} vybrat\xfdch polo\u{17E}iek`
        })}.`,
    "dragStartedKeyboard": `Pres\xfavanie sa za\u{10D}alo. Do cie\u{13E}ov\xe9ho umiestnenia prejdete stla\u{10D}en\xedm kl\xe1vesu Tab. Ak chcete polo\u{17E}ku umiestni\u{165}, stla\u{10D}te kl\xe1ves Enter alebo stla\u{10D}te kl\xe1ves Esc, ak chcete pres\xfavanie zru\u{161}i\u{165}.`,
    "dragStartedTouch": `Pres\xfavanie sa za\u{10D}alo. Prejdite na cie\u{13E}ov\xe9 umiestnenie a dvojit\xfdm kliknut\xedm umiestnite polo\u{17E}ku.`,
    "dragStartedVirtual": `Pres\xfavanie sa za\u{10D}alo. Prejdite na cie\u{13E}ov\xe9 umiestnenie a kliknut\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Enter umiestnite polo\u{17E}ku.`,
    "dropCanceled": `Umiestnenie zru\u{161}en\xe9.`,
    "dropComplete": `Umiestnenie dokon\u{10D}en\xe9.`,
    "dropDescriptionKeyboard": `Stla\u{10D}en\xedm kl\xe1vesu Enter umiestnite polo\u{17E}ku. Stla\u{10D}en\xedm kl\xe1vesu Esc zru\u{161}\xedte pres\xfavanie.`,
    "dropDescriptionTouch": `Dvojit\xfdm kliknut\xedm umiestnite polo\u{17E}ku.`,
    "dropDescriptionVirtual": `Kliknut\xedm umiestnite polo\u{17E}ku.`,
    "dropIndicator": `indik\xe1tor umiestnenia`,
    "dropOnItem": (args)=>`Umiestni\u{165} na polo\u{17E}ku ${args.itemText}`,
    "dropOnRoot": `Umiestni\u{165} na`,
    "endDragKeyboard": `Prebieha pres\xfavanie. Ak ho chcete zru\u{161}i\u{165}, stla\u{10D}te kl\xe1ves Enter.`,
    "endDragTouch": `Prebieha pres\xfavanie. Dvojit\xfdm kliknut\xedm ho m\xf4\u{17E}ete zru\u{161}i\u{165}.`,
    "endDragVirtual": `Prebieha pres\xfavanie.`,
    "insertAfter": (args)=>`Vlo\u{17E}i\u{165} za polo\u{17E}ku ${args.itemText}`,
    "insertBefore": (args)=>`Vlo\u{17E}i\u{165} pred polo\u{17E}ku ${args.itemText}`,
    "insertBetween": (args)=>`Vlo\u{17E}i\u{165} medzi polo\u{17E}ky ${args.beforeItemText} a ${args.afterItemText}`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/dnd/dist/sl-SI.mjs
var $fbaaaaebd547d998$exports = {};
$fbaaaaebd547d998$exports = {
    "dragDescriptionKeyboard": `Pritisnite tipko Enter za za\u{10D}etek vle\u{10D}enja.`,
    "dragDescriptionKeyboardAlt": `Pritisnite tipki Alt + Enter za za\u{10D}etek vle\u{10D}enja.`,
    "dragDescriptionLongPress": `Pritisnite in zadr\u{17E}ite za za\u{10D}etek vle\u{10D}enja.`,
    "dragDescriptionTouch": `Dvotapnite za za\u{10D}etek vle\u{10D}enja.`,
    "dragDescriptionVirtual": `Kliknite za za\u{10D}etek vle\u{10D}enja.`,
    "dragItem": (args)=>`Povleci ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Povlecite ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izbran element`,
            other: ()=>`izbrane elemente (${formatter.number(args.count)})`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pritisnite tipko Enter, da povle\u{10D}ete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izbrani element`,
            other: ()=>`${formatter.number(args.count)} izbranih elementov`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pritisnite tipki Alt + Enter, da povle\u{10D}ete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izbrani element`,
            other: ()=>`${formatter.number(args.count)} izbranih elementov`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Pritisnite in zadr\u{17E}ite, da povle\u{10D}ete ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izbrani element`,
            other: ()=>`${formatter.number(args.count)} izbranih elementov`
        })}.`,
    "dragStartedKeyboard": `Vle\u{10D}enje se je za\u{10D}elo. Pritisnite tipko Tab za pomik na mesto, kamor \u{17E}elite spustiti elemente, in pritisnite tipko Enter, da jih spustite, ali tipko Escape, da prekli\u{10D}ete postopek.`,
    "dragStartedTouch": `Vle\u{10D}enje se je za\u{10D}elo. Pomaknite se na mesto, kamor \u{17E}elite spustiti elemente, in dvotapnite, da jih spustite.`,
    "dragStartedVirtual": `Vle\u{10D}enje se je za\u{10D}elo. Pomaknite se na mesto, kamor \u{17E}elite spustiti elemente, in kliknite ali pritisnite tipko Enter, da jih spustite.`,
    "dropCanceled": `Spust je preklican.`,
    "dropComplete": `Spust je kon\u{10D}an.`,
    "dropDescriptionKeyboard": `Pritisnite tipko Enter, da spustite. Pritisnite tipko Escape, da prekli\u{10D}ete vle\u{10D}enje.`,
    "dropDescriptionTouch": `Dvotapnite, da spustite.`,
    "dropDescriptionVirtual": `Kliknite, da spustite.`,
    "dropIndicator": `indikator spusta`,
    "dropOnItem": (args)=>`Spusti na mesto ${args.itemText}`,
    "dropOnRoot": `Spusti na mesto`,
    "endDragKeyboard": `Vle\u{10D}enje. Pritisnite tipko Enter za preklic vle\u{10D}enja.`,
    "endDragTouch": `Vle\u{10D}enje. Dvotapnite za preklic vle\u{10D}enja.`,
    "endDragVirtual": `Vle\u{10D}enje. Kliknite, da prekli\u{10D}ete vle\u{10D}enje.`,
    "insertAfter": (args)=>`Vstavi za ${args.itemText}`,
    "insertBefore": (args)=>`Vstavi pred ${args.itemText}`,
    "insertBetween": (args)=>`Vstavi med ${args.beforeItemText} in ${args.afterItemText}`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/dnd/dist/sr-SP.mjs
var $a0caa33f1e264489$exports = {};
$a0caa33f1e264489$exports = {
    "dragDescriptionKeyboard": `Pritisnite Enter da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragDescriptionKeyboardAlt": `Pritisnite Alt + Enter da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragDescriptionLongPress": `Pritisnite dugo da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragDescriptionTouch": `Dvaput dodirnite da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragDescriptionVirtual": `Kliknite da biste zapo\u{10D}eli prevla\u{10D}enje.`,
    "dragItem": (args)=>`Prevucite ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Prevucite ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izabranu stavku`,
            other: ()=>`${formatter.number(args.count)} izabrane stavke`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Pritisnite Enter da biste prevukli ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izabranu stavku`,
            other: ()=>`${formatter.number(args.count)} izabranih stavki`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Pritisnite Alt + Enter da biste prevukli ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izabranu stavku`,
            other: ()=>`${formatter.number(args.count)} izabranih stavki`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Pritisnite dugo da biste prevukli ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} izabranu stavku`,
            other: ()=>`${formatter.number(args.count)} izabranih stavki`
        })}.`,
    "dragStartedKeyboard": `Prevla\u{10D}enje je zapo\u{10D}eto. Pritisnite Tab da biste oti\u{161}li do cilja za otpu\u{161}tanje, zatim pritisnite Enter za ispu\u{161}tanje ili pritisnite Escape za otkazivanje.`,
    "dragStartedTouch": `Prevla\u{10D}enje je zapo\u{10D}eto. Idite do cilja za otpu\u{161}tanje, a zatim dvaput dodirnite za otpu\u{161}tanje.`,
    "dragStartedVirtual": `Prevla\u{10D}enje je zapo\u{10D}eto. Idite do cilja za otpu\u{161}tanje, a zatim kliknite ili pritinite Enter za otpu\u{161}tanje.`,
    "dropCanceled": `Otpu\u{161}tanje je otkazano.`,
    "dropComplete": `Prevla\u{10D}enje je zavr\u{161}eno.`,
    "dropDescriptionKeyboard": `Pritisnite Enter da biste otpustili. Pritisnite Escape da biste otkazali prevla\u{10D}enje.`,
    "dropDescriptionTouch": `Dvaput dodirnite za otpu\u{161}tanje.`,
    "dropDescriptionVirtual": `Kliknite za otpu\u{161}tanje.`,
    "dropIndicator": `Indikator otpu\u{161}tanja`,
    "dropOnItem": (args)=>`Otpusti na ${args.itemText}`,
    "dropOnRoot": `Otpusti na`,
    "endDragKeyboard": `Prevla\u{10D}enje u toku. Pritisnite Enter da biste otkazali prevla\u{10D}enje.`,
    "endDragTouch": `Prevla\u{10D}enje u toku. Dvaput dodirnite da biste otkazali prevla\u{10D}enje.`,
    "endDragVirtual": `Prevla\u{10D}enje u toku. Kliknite da biste otkazali prevla\u{10D}enje.`,
    "insertAfter": (args)=>`Umetnite posle ${args.itemText}`,
    "insertBefore": (args)=>`Umetnite ispred ${args.itemText}`,
    "insertBetween": (args)=>`Umetnite izme\u{111}u ${args.beforeItemText} i ${args.afterItemText}`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/dnd/dist/sv-SE.mjs
var $d576b66176f5c0ff$exports = {};
$d576b66176f5c0ff$exports = {
    "dragDescriptionKeyboard": `Tryck p\xe5 enter f\xf6r att b\xf6rja dra.`,
    "dragDescriptionKeyboardAlt": `Tryck p\xe5 Alt + Retur f\xf6r att b\xf6rja dra.`,
    "dragDescriptionLongPress": `Tryck l\xe4nge f\xf6r att b\xf6rja dra.`,
    "dragDescriptionTouch": `Dubbeltryck f\xf6r att b\xf6rja dra.`,
    "dragDescriptionVirtual": `Klicka f\xf6r att b\xf6rja dra.`,
    "dragItem": (args)=>`Dra ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`Dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} valt objekt`,
            other: ()=>`${formatter.number(args.count)} valda objekt`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`Tryck p\xe5 Retur f\xf6r att dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} markerat objekt`,
            other: ()=>`${formatter.number(args.count)} markerade objekt`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`Tryck p\xe5 Alt + Retur f\xf6r att dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} markerat objekt`,
            other: ()=>`${formatter.number(args.count)} markerade objekt`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`Tryck l\xe4nge f\xf6r att dra ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} markerat objekt`,
            other: ()=>`${formatter.number(args.count)} markerade objekt`
        })}.`,
    "dragStartedKeyboard": `B\xf6rja dra. Tryck p\xe5 tabb f\xf6r att navigera till m\xe5let, tryck p\xe5 enter f\xf6r att sl\xe4ppa eller p\xe5 escape f\xf6r att avbryta.`,
    "dragStartedTouch": `B\xf6rja dra. Navigera till ett m\xe5l och dubbeltryck f\xf6r att sl\xe4ppa.`,
    "dragStartedVirtual": `B\xf6rja dra. Navigera till ett m\xe5l och klicka eller tryck p\xe5 enter f\xf6r att sl\xe4ppa.`,
    "dropCanceled": `Sl\xe4pp\xe5tg\xe4rd avbr\xf6ts.`,
    "dropComplete": `Sl\xe4pp\xe5tg\xe4rd klar.`,
    "dropDescriptionKeyboard": `Tryck p\xe5 enter f\xf6r att sl\xe4ppa. Tryck p\xe5 escape f\xf6r att avbryta drag\xe5tg\xe4rd.`,
    "dropDescriptionTouch": `Dubbeltryck f\xf6r att sl\xe4ppa.`,
    "dropDescriptionVirtual": `Klicka f\xf6r att sl\xe4ppa.`,
    "dropIndicator": `sl\xe4ppindikator`,
    "dropOnItem": (args)=>`Sl\xe4pp p\xe5 ${args.itemText}`,
    "dropOnRoot": `Sl\xe4pp p\xe5`,
    "endDragKeyboard": `Drar. Tryck p\xe5 enter f\xf6r att avbryta drag\xe5tg\xe4rd.`,
    "endDragTouch": `Drar. Dubbeltryck f\xf6r att avbryta drag\xe5tg\xe4rd.`,
    "endDragVirtual": `Drar. Klicka f\xf6r att avbryta drag\xe5tg\xe4rd.`,
    "insertAfter": (args)=>`Infoga efter ${args.itemText}`,
    "insertBefore": (args)=>`Infoga f\xf6re ${args.itemText}`,
    "insertBetween": (args)=>`Infoga mellan ${args.beforeItemText} och ${args.afterItemText}`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/dnd/dist/tr-TR.mjs
var $0681f168c13d8f2a$exports = {};
$0681f168c13d8f2a$exports = {
    "dragDescriptionKeyboard": `S\xfcr\xfcklemeyi ba\u{15F}latmak i\xe7in Enter'a bas\u{131}n.`,
    "dragDescriptionKeyboardAlt": `S\xfcr\xfcklemeyi ba\u{15F}latmak i\xe7in Alt + Enter'a bas\u{131}n.`,
    "dragDescriptionLongPress": `S\xfcr\xfcklemeye ba\u{15F}lamak i\xe7in uzun bas\u{131}n.`,
    "dragDescriptionTouch": `S\xfcr\xfcklemeyi ba\u{15F}latmak i\xe7in \xe7ift t\u{131}klay\u{131}n.`,
    "dragDescriptionVirtual": `S\xfcr\xfcklemeyi ba\u{15F}latmak i\xe7in t\u{131}klay\u{131}n.`,
    "dragItem": (args)=>`${args.itemText}\u{2019}i s\xfcr\xfckle`,
    "dragSelectedItems": (args, formatter)=>`S\xfcr\xfckle ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} se\xe7ili \xf6ge`,
            other: ()=>`${formatter.number(args.count)} se\xe7ili \xf6ge`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`,
            other: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`
        })} \xf6\u{11F}esini s\xfcr\xfcklemek i\xe7in Enter'a bas\u{131}n.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`,
            other: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`
        })} \xf6\u{11F}esini s\xfcr\xfcklemek i\xe7in Alt + Enter tu\u{15F}una bas\u{131}n.`,
    "dragSelectedLongPress": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`,
            other: ()=>`${formatter.number(args.count)} se\xe7ilmi\u{15F} \xf6\u{11F}e`
        })} \xf6\u{11F}esini s\xfcr\xfcklemek i\xe7in uzun bas\u{131}n.`,
    "dragStartedKeyboard": `S\xfcr\xfckleme ba\u{15F}lat\u{131}ld\u{131}. Bir b\u{131}rakma hedefine gitmek i\xe7in Tab\u{2019}a bas\u{131}n, ard\u{131}ndan b\u{131}rakmak i\xe7in Enter\u{2019}a bas\u{131}n veya iptal etmek i\xe7in Escape\u{2019}e bas\u{131}n.`,
    "dragStartedTouch": `S\xfcr\xfckleme ba\u{15F}lat\u{131}ld\u{131}. Bir b\u{131}rakma hedefine gidin, ard\u{131}ndan b\u{131}rakmak i\xe7in \xe7ift t\u{131}klay\u{131}n.`,
    "dragStartedVirtual": `S\xfcr\xfckleme ba\u{15F}lat\u{131}ld\u{131}. Bir b\u{131}rakma hedefine gidin, ard\u{131}ndan b\u{131}rakmak i\xe7in Enter\u{2019}a t\u{131}klay\u{131}n veya bas\u{131}n.`,
    "dropCanceled": `B\u{131}rakma iptal edildi.`,
    "dropComplete": `B\u{131}rakma tamamland\u{131}.`,
    "dropDescriptionKeyboard": `B\u{131}rakmak i\xe7in Enter'a bas\u{131}n. S\xfcr\xfcklemeyi iptal etmek i\xe7in Escape'e bas\u{131}n.`,
    "dropDescriptionTouch": `B\u{131}rakmak i\xe7in \xe7ift t\u{131}klay\u{131}n.`,
    "dropDescriptionVirtual": `B\u{131}rakmak i\xe7in t\u{131}klay\u{131}n.`,
    "dropIndicator": `b\u{131}rakma g\xf6stergesi`,
    "dropOnItem": (args)=>`${args.itemText} \xfczerine b\u{131}rak`,
    "dropOnRoot": `B\u{131}rak\u{131}n`,
    "endDragKeyboard": `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in Enter'a bas\u{131}n.`,
    "endDragTouch": `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in \xe7ift t\u{131}klay\u{131}n.`,
    "endDragVirtual": `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in t\u{131}klay\u{131}n.`,
    "insertAfter": (args)=>`${args.itemText}\u{2019}den sonra gir`,
    "insertBefore": (args)=>`${args.itemText}\u{2019}den \xf6nce gir`,
    "insertBetween": (args)=>`${args.beforeItemText} ve ${args.afterItemText} aras\u{131}na gir`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/dnd/dist/uk-UA.mjs
var $2bfbc1f42c1cf5a7$exports = {};
$2bfbc1f42c1cf5a7$exports = {
    "dragDescriptionKeyboard": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragDescriptionKeyboardAlt": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Alt + Enter, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragDescriptionLongPress": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{456} \u{443}\u{442}\u{440}\u{438}\u{43C}\u{443}\u{439}\u{442}\u{435}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragDescriptionTouch": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{432}\u{456}\u{447}\u{456}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragDescriptionVirtual": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dragItem": (args)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{456}\u{442}\u{44C} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}(-\u{456}\u{432})`
        })}.`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Alt + Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}(-\u{456}\u{432})`
        })}.`,
    "dragSelectedLongPress": (args, formatter)=>`\u{423}\u{442}\u{440}\u{438}\u{43C}\u{443}\u{439}\u{442}\u{435}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
            other: ()=>`${formatter.number(args.count)} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{445} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}(-\u{456}\u{432})`
        })}.`,
    "dragStartedKeyboard": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{43F}\u{43E}\u{447}\u{430}\u{43B}\u{43E}\u{441}\u{44F}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Tab, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{439}\u{442}\u{438} \u{434}\u{43E} \u{446}\u{456}\u{43B}\u{456} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}, \u{43F}\u{43E}\u{442}\u{456}\u{43C} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}, \u{430}\u{431}\u{43E} Escape, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}.`,
    "dragStartedTouch": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{43F}\u{43E}\u{447}\u{430}\u{43B}\u{43E}\u{441}\u{44F}. \u{41F}\u{435}\u{440}\u{435}\u{439}\u{434}\u{456}\u{442}\u{44C} \u{434}\u{43E} \u{446}\u{456}\u{43B}\u{456} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}, \u{43F}\u{43E}\u{442}\u{456}\u{43C} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{432}\u{456}\u{447}\u{456}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}.`,
    "dragStartedVirtual": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{43F}\u{43E}\u{447}\u{430}\u{43B}\u{43E}\u{441}\u{44F}. \u{41F}\u{435}\u{440}\u{435}\u{439}\u{434}\u{456}\u{442}\u{44C} \u{434}\u{43E} \u{446}\u{456}\u{43B}\u{456} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}, \u{43F}\u{43E}\u{442}\u{456}\u{43C} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}.`,
    "dropCanceled": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{441}\u{43A}\u{430}\u{441}\u{43E}\u{432}\u{430}\u{43D}\u{43E}.`,
    "dropComplete": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43E}.`,
    "dropDescriptionKeyboard": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Escape, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "dropDescriptionTouch": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{432}\u{456}\u{447}\u{456}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}.`,
    "dropDescriptionVirtual": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438}.`,
    "dropIndicator": `\u{456}\u{43D}\u{434}\u{438}\u{43A}\u{430}\u{442}\u{43E}\u{440} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}`,
    "dropOnItem": (args)=>`\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} \u{43D}\u{430} ${args.itemText}`,
    "dropOnRoot": `\u{41F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{43D}\u{443}\u{442}\u{438} \u{43D}\u{430}`,
    "endDragKeyboard": `\u{422}\u{440}\u{438}\u{432}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Enter, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "endDragTouch": `\u{422}\u{440}\u{438}\u{432}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{434}\u{432}\u{456}\u{447}\u{456}, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "endDragVirtual": `\u{422}\u{440}\u{438}\u{432}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}. \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{441}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{44F}\u{433}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}.`,
    "insertAfter": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{438} \u{43F}\u{456}\u{441}\u{43B}\u{44F} ${args.itemText}`,
    "insertBefore": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{438} \u{43F}\u{435}\u{440}\u{435}\u{434} ${args.itemText}`,
    "insertBetween": (args)=>`\u{412}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{438} \u{43C}\u{456}\u{436} ${args.beforeItemText} \u{456} ${args.afterItemText}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/dnd/dist/zh-CN.mjs
var $d0f488d433b55b8a$exports = {};
$d0f488d433b55b8a$exports = {
    "dragDescriptionKeyboard": `\u{6309} Enter \u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragDescriptionKeyboardAlt": `\u{6309} Alt + Enter \u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragDescriptionLongPress": `\u{957F}\u{6309}\u{4EE5}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragDescriptionTouch": `\u{53CC}\u{51FB}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragDescriptionVirtual": `\u{5355}\u{51FB}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}`,
    "dragItem": (args)=>`\u{62D6}\u{52A8} ${args.itemText}`,
    "dragSelectedItems": (args, formatter)=>`\u{62D6}\u{52A8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{9009}\u{4E2D}\u{9879}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{9009}\u{4E2D}\u{9879}\u{76EE}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{6309} Enter \u{4EE5}\u{62D6}\u{52A8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`,
            other: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`
        })}\u{3002}`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{6309} Alt + Enter \u{4EE5}\u{62D6}\u{52A8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`,
            other: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`
        })}\u{3002}`,
    "dragSelectedLongPress": (args, formatter)=>`\u{957F}\u{6309}\u{4EE5}\u{62D6}\u{52A8} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`,
            other: ()=>`${formatter.number(args.count)} \u{4E2A}\u{9009}\u{5B9A}\u{9879}`
        })}\u{3002}`,
    "dragStartedKeyboard": `\u{5DF2}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}\u{6309} Tab \u{5BFC}\u{822A}\u{5230}\u{653E}\u{7F6E}\u{76EE}\u{6807}\u{FF0C}\u{7136}\u{540E}\u{6309} Enter \u{653E}\u{7F6E}\u{6216}\u{6309} Escape \u{53D6}\u{6D88}\u{3002}`,
    "dragStartedTouch": `\u{5DF2}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}\u{5BFC}\u{822A}\u{5230}\u{653E}\u{7F6E}\u{76EE}\u{6807}\u{FF0C}\u{7136}\u{540E}\u{53CC}\u{51FB}\u{653E}\u{7F6E}\u{3002}`,
    "dragStartedVirtual": `\u{5DF2}\u{5F00}\u{59CB}\u{62D6}\u{52A8}\u{3002}\u{5BFC}\u{822A}\u{5230}\u{653E}\u{7F6E}\u{76EE}\u{6807}\u{FF0C}\u{7136}\u{540E}\u{5355}\u{51FB}\u{6216}\u{6309} Enter \u{653E}\u{7F6E}\u{3002}`,
    "dropCanceled": `\u{653E}\u{7F6E}\u{5DF2}\u{53D6}\u{6D88}\u{3002}`,
    "dropComplete": `\u{653E}\u{7F6E}\u{5DF2}\u{5B8C}\u{6210}\u{3002}`,
    "dropDescriptionKeyboard": `\u{6309} Enter \u{653E}\u{7F6E}\u{3002}\u{6309} Escape \u{53D6}\u{6D88}\u{62D6}\u{52A8}\u{3002}`,
    "dropDescriptionTouch": `\u{53CC}\u{51FB}\u{653E}\u{7F6E}\u{3002}`,
    "dropDescriptionVirtual": `\u{5355}\u{51FB}\u{653E}\u{7F6E}\u{3002}`,
    "dropIndicator": `\u{653E}\u{7F6E}\u{6807}\u{8BB0}`,
    "dropOnItem": (args)=>`\u{653E}\u{7F6E}\u{4E8E} ${args.itemText}`,
    "dropOnRoot": `\u{653E}\u{7F6E}\u{4E8E}`,
    "endDragKeyboard": `\u{6B63}\u{5728}\u{62D6}\u{52A8}\u{3002}\u{6309} Enter \u{53D6}\u{6D88}\u{62D6}\u{52A8}\u{3002}`,
    "endDragTouch": `\u{6B63}\u{5728}\u{62D6}\u{52A8}\u{3002}\u{53CC}\u{51FB}\u{53D6}\u{6D88}\u{62D6}\u{52A8}\u{3002}`,
    "endDragVirtual": `\u{6B63}\u{5728}\u{62D6}\u{52A8}\u{3002}\u{5355}\u{51FB}\u{53D6}\u{6D88}\u{62D6}\u{52A8}\u{3002}`,
    "insertAfter": (args)=>`\u{63D2}\u{5165}\u{5230} ${args.itemText} \u{4E4B}\u{540E}`,
    "insertBefore": (args)=>`\u{63D2}\u{5165}\u{5230} ${args.itemText} \u{4E4B}\u{524D}`,
    "insertBetween": (args)=>`\u{63D2}\u{5165}\u{5230} ${args.beforeItemText} \u{548C} ${args.afterItemText} \u{4E4B}\u{95F4}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/dnd/dist/zh-TW.mjs
var $46168b0dce85301e$exports = {};
$46168b0dce85301e$exports = {
    "dragDescriptionKeyboard": `\u{6309} Enter \u{9375}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragDescriptionKeyboardAlt": `\u{6309} Alt+Enter \u{9375}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragDescriptionLongPress": `\u{9577}\u{6309}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragDescriptionTouch": `\u{8F15}\u{9EDE}\u{5169}\u{4E0B}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragDescriptionVirtual": `\u{6309}\u{4E00}\u{4E0B}\u{6ED1}\u{9F20}\u{4EE5}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}`,
    "dragItem": (args)=>`\u{62D6}\u{66F3}\u{300C}${args.itemText}\u{300D}`,
    "dragSelectedItems": (args, formatter)=>`\u{62D6}\u{66F3} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`
        })}`,
    "dragSelectedKeyboard": (args, formatter)=>`\u{6309} Enter \u{9375}\u{4EE5}\u{62D6}\u{66F3} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`
        })}\u{3002}`,
    "dragSelectedKeyboardAlt": (args, formatter)=>`\u{6309} Alt+Enter \u{9375}\u{4EE5}\u{62D6}\u{66F3} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`
        })}\u{3002}`,
    "dragSelectedLongPress": (args, formatter)=>`\u{9577}\u{6309}\u{4EE5}\u{62D6}\u{66F3} ${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{9078}\u{5B9A}\u{9805}\u{76EE}`
        })}\u{3002}`,
    "dragStartedKeyboard": `\u{5DF2}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}\u{6309} Tab \u{9375}\u{4EE5}\u{700F}\u{89BD}\u{81F3}\u{653E}\u{7F6E}\u{76EE}\u{6A19}\u{FF0C}\u{7136}\u{5F8C}\u{6309} Enter \u{9375}\u{4EE5}\u{653E}\u{7F6E}\u{FF0C}\u{6216}\u{6309} Escape \u{9375}\u{4EE5}\u{53D6}\u{6D88}\u{3002}`,
    "dragStartedTouch": `\u{5DF2}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}\u{700F}\u{89BD}\u{81F3}\u{653E}\u{7F6E}\u{76EE}\u{6A19}\u{FF0C}\u{7136}\u{5F8C}\u{8F15}\u{9EDE}\u{5169}\u{4E0B}\u{4EE5}\u{653E}\u{7F6E}\u{3002}`,
    "dragStartedVirtual": `\u{5DF2}\u{958B}\u{59CB}\u{62D6}\u{66F3}\u{3002}\u{700F}\u{89BD}\u{81F3}\u{653E}\u{7F6E}\u{76EE}\u{6A19}\u{FF0C}\u{7136}\u{5F8C}\u{6309}\u{4E00}\u{4E0B}\u{6ED1}\u{9F20}\u{6216}\u{6309} Enter \u{9375}\u{4EE5}\u{653E}\u{7F6E}\u{3002}`,
    "dropCanceled": `\u{653E}\u{7F6E}\u{5DF2}\u{53D6}\u{6D88}\u{3002}`,
    "dropComplete": `\u{653E}\u{7F6E}\u{5DF2}\u{5B8C}\u{6210}\u{3002}`,
    "dropDescriptionKeyboard": `\u{6309} Enter \u{9375}\u{4EE5}\u{653E}\u{7F6E}\u{3002}\u{6309} Escape \u{9375}\u{4EE5}\u{53D6}\u{6D88}\u{62D6}\u{66F3}\u{3002}`,
    "dropDescriptionTouch": `\u{8F15}\u{9EDE}\u{5169}\u{4E0B}\u{4EE5}\u{653E}\u{7F6E}\u{3002}`,
    "dropDescriptionVirtual": `\u{6309}\u{4E00}\u{4E0B}\u{6ED1}\u{9F20}\u{4EE5}\u{653E}\u{7F6E}\u{3002}`,
    "dropIndicator": `\u{653E}\u{7F6E}\u{6307}\u{793A}\u{5668}`,
    "dropOnItem": (args)=>`\u{653E}\u{7F6E}\u{5728}\u{300C}${args.itemText}\u{300D}\u{4E0A}`,
    "dropOnRoot": `\u{653E}\u{7F6E}\u{5728}`,
    "endDragKeyboard": `\u{62D6}\u{66F3}\u{4E2D}\u{3002}\u{6309} Enter \u{9375}\u{4EE5}\u{53D6}\u{6D88}\u{62D6}\u{66F3}\u{3002}`,
    "endDragTouch": `\u{62D6}\u{66F3}\u{4E2D}\u{3002}\u{8F15}\u{9EDE}\u{5169}\u{4E0B}\u{4EE5}\u{53D6}\u{6D88}\u{62D6}\u{66F3}\u{3002}`,
    "endDragVirtual": `\u{62D6}\u{66F3}\u{4E2D}\u{3002}\u{6309}\u{4E00}\u{4E0B}\u{6ED1}\u{9F20}\u{4EE5}\u{53D6}\u{6D88}\u{62D6}\u{66F3}\u{3002}`,
    "insertAfter": (args)=>`\u{63D2}\u{5165}\u{81F3}\u{300C}${args.itemText}\u{300D}\u{4E4B}\u{5F8C}`,
    "insertBefore": (args)=>`\u{63D2}\u{5165}\u{81F3}\u{300C}${args.itemText}\u{300D}\u{4E4B}\u{524D}`,
    "insertBetween": (args)=>`\u{63D2}\u{5165}\u{81F3}\u{300C}${args.beforeItemText}\u{300D}\u{548C}\u{300C}${args.afterItemText}\u{300D}\u{4E4B}\u{9593}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/dnd/dist/intlStrings.mjs



































var $865c2eb7c00a83f1$exports = {};


































$865c2eb7c00a83f1$exports = {
    "ar-AE": $7dfcac1a0c98c789$exports,
    "bg-BG": $f311c26671219eca$exports,
    "cs-CZ": $1aa4ade186550f72$exports,
    "da-DK": $b6b0ea1b94a7633c$exports,
    "de-DE": $d10e4f47c744ad52$exports,
    "el-GR": $b3d2bb9abce688ab$exports,
    "en-US": $f9b46437e610cca1$exports,
    "es-ES": $204b5c01bd3acf26$exports,
    "et-EE": $110bdd83348ecbc0$exports,
    "fi-FI": $87d3ccd5e347c7cc$exports,
    "fr-FR": $a5de891427686596$exports,
    "he-IL": $ad7f4c66d85b4494$exports,
    "hr-HR": $4aa59f3c6a796cae$exports,
    "hu-HU": $d8d3646556c40586$exports,
    "it-IT": $982d558b45395246$exports,
    "ja-JP": $6a0cf387b9de036c$exports,
    "ko-KR": $a97fefa2956f4bcb$exports,
    "lt-LT": $5fb5837f94e1c150$exports,
    "lv-LV": $5b2e5709864cc922$exports,
    "nb-NO": $ee15bb8efb18cc69$exports,
    "nl-NL": $1daf2d4602e26ac4$exports,
    "pl-PL": $7115429b0f60511f$exports,
    "pt-BR": $5edd453ae5d4a8bc$exports,
    "pt-PT": $5f431994f708535e$exports,
    "ro-RO": $107b5e2e45e971f1$exports,
    "ru-RU": $d4b9c2f01c1892f7$exports,
    "sk-SK": $dbdc1942894e83e4$exports,
    "sl-SI": $fbaaaaebd547d998$exports,
    "sr-SP": $a0caa33f1e264489$exports,
    "sv-SE": $d576b66176f5c0ff$exports,
    "tr-TR": $0681f168c13d8f2a$exports,
    "uk-UA": $2bfbc1f42c1cf5a7$exports,
    "zh-CN": $d0f488d433b55b8a$exports,
    "zh-TW": $46168b0dce85301e$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useDescription.mjs
var useDescription = __webpack_require__(44346);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
;// ./node_modules/@react-aria/dnd/dist/useVirtualDrop.mjs







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




const $224594fe3e57ff1e$var$MESSAGES = {
    keyboard: 'dropDescriptionKeyboard',
    touch: 'dropDescriptionTouch',
    virtual: 'dropDescriptionVirtual'
};
function $224594fe3e57ff1e$export$62447ad3d2ec7da6() {
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($865c2eb7c00a83f1$exports))), '@react-aria/dnd');
    let modality = (0, $7252cd45fc48c07c$export$49bac5d6d4b352ea)();
    let dragSession = $67560de7c78cb232$export$418e185dd3f1b968();
    let descriptionProps = (0, useDescription/* useDescription */.I)(dragSession ? stringFormatter.format($224594fe3e57ff1e$var$MESSAGES[modality]) : '');
    return {
        dropProps: {
            ...descriptionProps,
            // Mobile Safari does not properly bubble click events on elements except links or inputs
            // unless there is an onclick handler bound directly to the element itself. By adding this
            // handler, React will take care of adding that for us, and we are able to handle document
            // level click events in the DragManager.
            // See https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
            onClick: ()=>{}
        }
    };
}



//# sourceMappingURL=useVirtualDrop.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var useEffectEvent = __webpack_require__(7049);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/platform.mjs
var platform = __webpack_require__(69202);
;// ./node_modules/@react-aria/dnd/dist/useDrop.mjs







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





const $5c06e4929e123553$var$DROP_ACTIVATE_TIMEOUT = 800;
function $5c06e4929e123553$export$ccdee5eaf73cf661(options) {
    let { hasDropButton: hasDropButton, isDisabled: isDisabled } = options;
    let [isDropTarget, setDropTarget] = (0, react.useState)(false);
    let state = (0, react.useRef)({
        x: 0,
        y: 0,
        dragOverElements: new Set(),
        dropEffect: 'none',
        allowedOperations: (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).all,
        dropActivateTimer: undefined
    }).current;
    let fireDropEnter = (e)=>{
        setDropTarget(true);
        if (typeof options.onDropEnter === 'function') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropEnter({
                type: 'dropenter',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y
            });
        }
    };
    let fireDropExit = (e)=>{
        setDropTarget(false);
        if (typeof options.onDropExit === 'function') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropExit({
                type: 'dropexit',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y
            });
        }
    };
    let onDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        let allowedOperations = $5c06e4929e123553$var$getAllowedOperations(e);
        if (e.clientX === state.x && e.clientY === state.y && allowedOperations === state.allowedOperations) {
            e.dataTransfer.dropEffect = state.dropEffect;
            return;
        }
        state.x = e.clientX;
        state.y = e.clientY;
        let prevDropEffect = state.dropEffect;
        // Update drop effect if allowed drop operations changed (e.g. user pressed modifier key).
        if (allowedOperations !== state.allowedOperations) {
            let allowedOps = $5c06e4929e123553$var$allowedOperationsToArray(allowedOperations);
            let dropOperation = allowedOps[0];
            if (typeof options.getDropOperation === 'function') {
                let types = new (0, $7252cd45fc48c07c$export$7f04ce188c91447c)(e.dataTransfer);
                dropOperation = $5c06e4929e123553$var$getDropOperation(allowedOperations, options.getDropOperation(types, allowedOps));
            }
            state.dropEffect = (0, $103790afe9474d1c$export$5eacb0769d26d3b2)[dropOperation] || 'none';
        }
        if (typeof options.getDropOperationForPoint === 'function') {
            let types = new (0, $7252cd45fc48c07c$export$7f04ce188c91447c)(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            let dropOperation = $5c06e4929e123553$var$getDropOperation(allowedOperations, options.getDropOperationForPoint(types, $5c06e4929e123553$var$allowedOperationsToArray(allowedOperations), state.x - rect.x, state.y - rect.y));
            state.dropEffect = (0, $103790afe9474d1c$export$5eacb0769d26d3b2)[dropOperation] || 'none';
        }
        state.allowedOperations = allowedOperations;
        e.dataTransfer.dropEffect = state.dropEffect;
        // If the drop operation changes, update state and fire events appropriately.
        if (state.dropEffect === 'none' && prevDropEffect !== 'none') fireDropExit(e);
        else if (state.dropEffect !== 'none' && prevDropEffect === 'none') fireDropEnter(e);
        if (typeof options.onDropMove === 'function' && state.dropEffect !== 'none') {
            let rect = e.currentTarget.getBoundingClientRect();
            options.onDropMove({
                type: 'dropmove',
                x: state.x - rect.x,
                y: state.y - rect.y
            });
        }
        clearTimeout(state.dropActivateTimer);
        if (options.onDropActivate && typeof options.onDropActivate === 'function' && state.dropEffect !== 'none') {
            let onDropActivateOptions = options.onDropActivate;
            let rect = e.currentTarget.getBoundingClientRect();
            state.dropActivateTimer = setTimeout(()=>{
                onDropActivateOptions({
                    type: 'dropactivate',
                    x: state.x - rect.x,
                    y: state.y - rect.y
                });
            }, $5c06e4929e123553$var$DROP_ACTIVATE_TIMEOUT);
        }
    };
    let onDragEnter = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        state.dragOverElements.add(e.target);
        if (state.dragOverElements.size > 1) return;
        let allowedOperationsBits = $5c06e4929e123553$var$getAllowedOperations(e);
        let allowedOperations = $5c06e4929e123553$var$allowedOperationsToArray(allowedOperationsBits);
        let dropOperation = allowedOperations[0];
        if (typeof options.getDropOperation === 'function') {
            let types = new (0, $7252cd45fc48c07c$export$7f04ce188c91447c)(e.dataTransfer);
            dropOperation = $5c06e4929e123553$var$getDropOperation(allowedOperationsBits, options.getDropOperation(types, allowedOperations));
        }
        if (typeof options.getDropOperationForPoint === 'function') {
            let types = new (0, $7252cd45fc48c07c$export$7f04ce188c91447c)(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            dropOperation = $5c06e4929e123553$var$getDropOperation(allowedOperationsBits, options.getDropOperationForPoint(types, allowedOperations, e.clientX - rect.x, e.clientY - rect.y));
        }
        state.x = e.clientX;
        state.y = e.clientY;
        state.allowedOperations = allowedOperationsBits;
        state.dropEffect = (0, $103790afe9474d1c$export$5eacb0769d26d3b2)[dropOperation] || 'none';
        e.dataTransfer.dropEffect = state.dropEffect;
        if (dropOperation !== 'cancel') fireDropEnter(e);
    };
    let onDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        // We would use e.relatedTarget to detect if the drag is still inside the drop target,
        // but it is always null in WebKit. https://bugs.webkit.org/show_bug.cgi?id=66547
        // Instead, we track all of the targets of dragenter events in a set, and remove them
        // in dragleave. When the set becomes empty, we've left the drop target completely.
        // We must also remove any elements that are no longer in the DOM, because dragleave
        // events will never be fired for these. This can happen, for example, with drop
        // indicators between items, which disappear when the drop target changes.
        state.dragOverElements.delete(e.target);
        for (let element of state.dragOverElements)if (!e.currentTarget.contains(element)) state.dragOverElements.delete(element);
        if (state.dragOverElements.size > 0) return;
        if (state.dropEffect !== 'none') fireDropExit(e);
        clearTimeout(state.dropActivateTimer);
    };
    let onDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        // Track drop effect in global state for Chrome Android. https://bugs.chromium.org/p/chromium/issues/detail?id=1353951
        // Android onDragEnd always returns "none" as its drop effect.
        (0, $7252cd45fc48c07c$export$64f52ed7349ddb84)(state.dropEffect);
        if (typeof options.onDrop === 'function') {
            let dropOperation = (0, $103790afe9474d1c$export$608ecc6f1b23c35d)[state.dropEffect];
            let items = (0, $7252cd45fc48c07c$export$d9e760437831f8b3)(e.dataTransfer);
            let rect = e.currentTarget.getBoundingClientRect();
            let event = {
                type: 'drop',
                x: e.clientX - rect.x,
                y: e.clientY - rect.y,
                items: items,
                dropOperation: dropOperation
            };
            options.onDrop(event);
        }
        let dndStateSnapshot = {
            ...(0, $7252cd45fc48c07c$export$6ca6700462636d0b)
        };
        state.dragOverElements.clear();
        fireDropExit(e);
        clearTimeout(state.dropActivateTimer);
        // If there wasn't a collection being tracked as a dragged collection, then we are in a case where a non RSP drag is dropped on a
        // RSP collection and thus we don't need to preserve the global drop effect
        if (dndStateSnapshot.draggingCollectionRef == null) (0, $7252cd45fc48c07c$export$64f52ed7349ddb84)(undefined);
        else // Otherwise we need to preserve the global dnd state for onDragEnd's isInternal check.
        // At the moment fireDropExit may clear dropCollectionRef (i.e. useDroppableCollection's provided onDropExit, required to clear dropCollectionRef when exiting a valid drop target)
        (0, $7252cd45fc48c07c$export$6c10d32b362bfa5f)(dndStateSnapshot);
    };
    let onDropEnter = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (typeof options.onDropEnter === 'function') options.onDropEnter(e);
    });
    let onDropExit = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (typeof options.onDropExit === 'function') options.onDropExit(e);
    });
    let onDropActivate = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (typeof options.onDropActivate === 'function') options.onDropActivate(e);
    });
    let onKeyboardDrop = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (typeof options.onDrop === 'function') options.onDrop(e);
    });
    let getDropOperationKeyboard = (0, useEffectEvent/* useEffectEvent */.J)((types, allowedOperations)=>{
        if (options.getDropOperation) return options.getDropOperation(types, allowedOperations);
        return allowedOperations[0];
    });
    let { ref: ref } = options;
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (isDisabled || !ref.current) return;
        return $67560de7c78cb232$export$c28d9fb4a54e471a({
            element: ref.current,
            getDropOperation: getDropOperationKeyboard,
            onDropEnter (e) {
                setDropTarget(true);
                onDropEnter(e);
            },
            onDropExit (e) {
                setDropTarget(false);
                onDropExit(e);
            },
            onDrop: onKeyboardDrop,
            onDropActivate: onDropActivate
        });
    }, [
        isDisabled,
        ref,
        getDropOperationKeyboard,
        onDropEnter,
        onDropExit,
        onKeyboardDrop,
        onDropActivate
    ]);
    let { dropProps: dropProps } = (0, $224594fe3e57ff1e$export$62447ad3d2ec7da6)();
    if (isDisabled) return {
        dropProps: {},
        dropButtonProps: {
            isDisabled: true
        },
        isDropTarget: false
    };
    return {
        dropProps: {
            ...!hasDropButton && dropProps,
            onDragEnter: onDragEnter,
            onDragOver: onDragOver,
            onDragLeave: onDragLeave,
            onDrop: onDrop
        },
        dropButtonProps: {
            ...hasDropButton && dropProps
        },
        isDropTarget: isDropTarget
    };
}
function $5c06e4929e123553$var$getAllowedOperations(e) {
    let allowedOperations = (0, $103790afe9474d1c$export$9bbdfc78cf083e16)[e.dataTransfer.effectAllowed];
    // WebKit always sets effectAllowed to "copyMove" on macOS, and "all" on iOS, regardless of what was
    // set during the dragstart event: https://bugs.webkit.org/show_bug.cgi?id=178058
    //
    // Android Chrome also sets effectAllowed to "copyMove" in all cases: https://bugs.chromium.org/p/chromium/issues/detail?id=1359182
    //
    // If the drag started within the page, we can use a global variable to get the real allowed operations.
    // This needs to be intersected with the actual effectAllowed, which may have been filtered based on modifier keys.
    // Unfortunately, this means that link operations do not work at all in Safari.
    if (0, $7252cd45fc48c07c$export$f0130eb70b6347b8) allowedOperations &= (0, $7252cd45fc48c07c$export$f0130eb70b6347b8);
    // Chrome and Safari on macOS will automatically filter effectAllowed when pressing modifier keys,
    // allowing the user to switch between move, link, and copy operations. Firefox on macOS and all
    // Windows browsers do not do this, so do it ourselves instead. The exact keys are platform dependent.
    // https://ux.stackexchange.com/questions/83748/what-are-the-most-common-modifier-keys-for-dragging-objects-with-a-mouse
    //
    // Note that none of these modifiers are ever set in WebKit due to a bug: https://bugs.webkit.org/show_bug.cgi?id=77465
    // However, Safari does update effectAllowed correctly, so we can just rely on that.
    let allowedModifiers = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none;
    if ((0, platform/* isMac */.cX)()) {
        if (e.altKey) allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).copy;
        // Chrome and Safari both use the Control key for link, even though Finder uses Command + Option.
        // iPadOS doesn't support link operations and will not fire the drop event at all if dropEffect is set to link.
        // https://bugs.webkit.org/show_bug.cgi?id=244701
        if (e.ctrlKey && !(0, platform/* isIPad */.bh)()) allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).link;
        if (e.metaKey) allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).move;
    } else {
        if (e.altKey) allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).link;
        if (e.shiftKey) allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).move;
        if (e.ctrlKey) allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).copy;
    }
    if (allowedModifiers) return allowedOperations & allowedModifiers;
    return allowedOperations;
}
function $5c06e4929e123553$var$allowedOperationsToArray(allowedOperationsBits) {
    let allowedOperations = [];
    if (allowedOperationsBits & (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).move) allowedOperations.push('move');
    if (allowedOperationsBits & (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).copy) allowedOperations.push('copy');
    if (allowedOperationsBits & (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).link) allowedOperations.push('link');
    return allowedOperations;
}
function $5c06e4929e123553$var$getDropOperation(allowedOperations, operation) {
    let op = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e)[operation];
    return allowedOperations & op ? operation : 'cancel';
}



//# sourceMappingURL=useDrop.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useButton.mjs
var useButton = __webpack_require__(69229);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocus.mjs
var useFocus = __webpack_require__(33424);
;// ./node_modules/@react-aria/dnd/dist/useClipboard.mjs





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



const $9fcc7f0d70d084ee$var$globalEvents = new Map();
function $9fcc7f0d70d084ee$var$addGlobalEventListener(event, fn) {
    let eventData = $9fcc7f0d70d084ee$var$globalEvents.get(event);
    if (!eventData) {
        let handlers = new Set();
        let listener = (e)=>{
            for (let handler of handlers)handler(e);
        };
        eventData = {
            listener: listener,
            handlers: handlers
        };
        $9fcc7f0d70d084ee$var$globalEvents.set(event, eventData);
        document.addEventListener(event, listener);
    }
    eventData.handlers.add(fn);
    return ()=>{
        eventData.handlers.delete(fn);
        if (eventData.handlers.size === 0) {
            document.removeEventListener(event, eventData.listener);
            $9fcc7f0d70d084ee$var$globalEvents.delete(event);
        }
    };
}
function $9fcc7f0d70d084ee$export$2314ca2a3e892862(options) {
    let { isDisabled: isDisabled } = options;
    let isFocusedRef = (0, react.useRef)(false);
    let { focusProps: focusProps } = (0, useFocus/* useFocus */.i)({
        onFocusChange: (isFocused)=>{
            isFocusedRef.current = isFocused;
        }
    });
    let onBeforeCopy = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        // Enable the "Copy" menu item in Safari if this element is focused and copying is supported.
        if (isFocusedRef.current && options.getItems) e.preventDefault();
    });
    let onCopy = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (!isFocusedRef.current || !options.getItems) return;
        e.preventDefault();
        if (e.clipboardData) {
            var _options_onCopy;
            (0, $7252cd45fc48c07c$export$f9c1490890ddd063)(e.clipboardData, options.getItems({
                action: 'copy'
            }));
            (_options_onCopy = options.onCopy) === null || _options_onCopy === void 0 ? void 0 : _options_onCopy.call(options);
        }
    });
    let onBeforeCut = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (isFocusedRef.current && options.onCut && options.getItems) e.preventDefault();
    });
    let onCut = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (!isFocusedRef.current || !options.onCut || !options.getItems) return;
        e.preventDefault();
        if (e.clipboardData) {
            (0, $7252cd45fc48c07c$export$f9c1490890ddd063)(e.clipboardData, options.getItems({
                action: 'cut'
            }));
            options.onCut();
        }
    });
    let onBeforePaste = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        // Unfortunately, e.clipboardData.types is not available in this event so we always
        // have to enable the Paste menu item even if the type of data is unsupported.
        if (isFocusedRef.current && options.onPaste) e.preventDefault();
    });
    let onPaste = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (!isFocusedRef.current || !options.onPaste) return;
        e.preventDefault();
        if (e.clipboardData) {
            let items = (0, $7252cd45fc48c07c$export$d9e760437831f8b3)(e.clipboardData);
            options.onPaste(items);
        }
    });
    (0, react.useEffect)(()=>{
        if (isDisabled) return;
        return (0, chain/* chain */.c)($9fcc7f0d70d084ee$var$addGlobalEventListener('beforecopy', onBeforeCopy), $9fcc7f0d70d084ee$var$addGlobalEventListener('copy', onCopy), $9fcc7f0d70d084ee$var$addGlobalEventListener('beforecut', onBeforeCut), $9fcc7f0d70d084ee$var$addGlobalEventListener('cut', onCut), $9fcc7f0d70d084ee$var$addGlobalEventListener('beforepaste', onBeforePaste), $9fcc7f0d70d084ee$var$addGlobalEventListener('paste', onPaste));
    }, [
        isDisabled,
        onBeforeCopy,
        onCopy,
        onBeforeCut,
        onCut,
        onBeforePaste,
        onPaste
    ]);
    return {
        clipboardProps: focusProps
    };
}



//# sourceMappingURL=useClipboard.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLabels.mjs
var useLabels = __webpack_require__(37061);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/isFocusable.mjs + 1 modules
var isFocusable = __webpack_require__(72912);
;// ./node_modules/react-aria-components/dist/DropZone.mjs








function DropZone_$parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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





const $cb088e721efb9218$export$14a72053295ff9a6 = /*#__PURE__*/ (0, react.createContext)(null);
const $cb088e721efb9218$export$3c6489d84dc98b6 = /*#__PURE__*/ (0, react.forwardRef)(function DropZone(props, ref) {
    let { isDisabled: isDisabled = false } = props;
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $cb088e721efb9218$export$14a72053295ff9a6);
    let dropzoneRef = (0, useObjectRef/* useObjectRef */.U)(ref);
    let buttonRef = (0, react.useRef)(null);
    let { dropProps: dropProps, dropButtonProps: dropButtonProps, isDropTarget: isDropTarget } = (0, $5c06e4929e123553$export$ccdee5eaf73cf661)({
        ...props,
        ref: buttonRef,
        hasDropButton: true
    });
    let { buttonProps: buttonProps } = (0, useButton/* useButton */.s)(dropButtonProps || {}, buttonRef);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)(props);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, (DropZone_$parcel$interopDefault($df39c1238ae2b5f3$exports))), 'react-aria-components');
    let textId = (0, useId/* useSlotId */.X1)();
    let ariaLabel = props['aria-label'] || stringFormatter.format('dropzoneLabel');
    let messageId = props['aria-labelledby'];
    let ariaLabelledby = [
        textId,
        messageId
    ].filter(Boolean).join(' ');
    let labelProps = (0, useLabels/* useLabels */.b)({
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    let { clipboardProps: clipboardProps } = (0, $9fcc7f0d70d084ee$export$2314ca2a3e892862)({
        isDisabled: isDisabled,
        onPaste: (items)=>{
            var _props_onDrop;
            return (_props_onDrop = props.onDrop) === null || _props_onDrop === void 0 ? void 0 : _props_onDrop.call(props, {
                type: 'drop',
                items: items,
                x: 0,
                y: 0,
                dropOperation: 'copy'
            });
        }
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDropTarget: isDropTarget,
            isDisabled: isDisabled
        },
        defaultClassName: 'react-aria-DropZone'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Text/* TextContext */.h),
                {
                    id: textId,
                    slot: 'label'
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, dropProps, hoverProps),
        slot: props.slot || undefined,
        ref: dropzoneRef,
        onClick: (e)=>{
            var _dropzoneRef_current;
            let target = e.target;
            while(target && ((_dropzoneRef_current = dropzoneRef.current) === null || _dropzoneRef_current === void 0 ? void 0 : _dropzoneRef_current.contains(target))){
                if ((0, isFocusable/* isFocusable */.t)(target)) break;
                else if (target === dropzoneRef.current) {
                    var _buttonRef_current;
                    (_buttonRef_current = buttonRef.current) === null || _buttonRef_current === void 0 ? void 0 : _buttonRef_current.focus();
                    break;
                }
                target = target.parentElement;
            }
        },
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-drop-target": isDropTarget || undefined,
        "data-disabled": isDisabled || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, VisuallyHidden/* VisuallyHidden */.s), null, /*#__PURE__*/ (0, react).createElement("button", {
        ...(0, mergeProps/* mergeProps */.v)(buttonProps, focusProps, clipboardProps, labelProps),
        ref: buttonRef
    })), renderProps.children));
});



//# sourceMappingURL=DropZone.module.js.map


/***/ })

}]);