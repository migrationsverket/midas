"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6078],{

/***/ 15371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ $bb77f239b46e8c72$export$3274cf84b703fff)
/* harmony export */ });
/* harmony import */ var _useCollator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82627);
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

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = (0, _useCollator_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useCollator */ .Q)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}



//# sourceMappingURL=useFilter.module.js.map


/***/ }),

/***/ 22644:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ $4f58c5f72bcf79f7$export$496315a1608d9602)
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
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    const lastDeps = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let prevDeps = lastDeps.current;
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!prevDeps || dependencies.some((dep, i)=>!Object.is(dep, prevDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



//# sourceMappingURL=useUpdateEffect.module.js.map


/***/ }),

/***/ 319:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ $a0d645289fe9b86b$export$e7f05e985daf4b5f)
/* harmony export */ });
/* harmony import */ var _useListState_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46655);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
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


function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
    var _props_defaultSelectedKey;
    let [selectedKey, setSelectedKey] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
    let selectedKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>selectedKey != null ? [
            selectedKey
        ] : [], [
        selectedKey
    ]);
    let { collection: collection, disabledKeys: disabledKeys, selectionManager: selectionManager } = (0, _useListState_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useListState */ .p)({
        ...props,
        selectionMode: 'single',
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            var _keys_values_next_value;
            let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
            // Always fire onSelectionChange, even if the key is the same
            // as the current key (useControlledState does not).
            if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
            setSelectedKey(key);
        }
    });
    let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        selectedItem: selectedItem
    };
}



//# sourceMappingURL=useSingleSelectListState.module.js.map


/***/ }),

/***/ 20050:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a3: () => (/* binding */ $d01f2c01039c0eec$export$72b9695b8216309a)
});

// UNUSED EXPORTS: ComboBoxContext, ComboBoxStateContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs
var ListBox = __webpack_require__(97849);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useFilter.mjs
var useFilter = __webpack_require__(15371);
;// ./node_modules/@react-aria/combobox/dist/ar-AE.mjs
var $02cb4c75c506befe$exports = {};
$02cb4c75c506befe$exports = {
    "buttonLabel": `\u{639}\u{631}\u{636} \u{627}\u{644}\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
        })} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${args.groupTitle}, \u{645}\u{639} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{645}\u{62D}\u{62F}\u{62F}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    "selectedAnnouncement": (args)=>`${args.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/combobox/dist/bg-BG.mjs
var $568b8163f1e56faf$exports = {};
$568b8163f1e56faf$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{436}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
        })} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${args.groupTitle}, \u{441} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/combobox/dist/cs-CZ.mjs
var $87581c0202d106b8$exports = {};
$87581c0202d106b8$exports = {
    "buttonLabel": `Zobrazit doporu\u{10D}en\xed`,
    "countAnnouncement": (args, formatter)=>`K dispozici ${formatter.plural(args.optionCount, {
            one: ()=>`je ${formatter.number(args.optionCount)} mo\u{17E}nost`,
            other: ()=>`jsou/je ${formatter.number(args.optionCount)} mo\u{17E}nosti/-\xed`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadan\xe1 skupina \u{201E}${args.groupTitle}\u{201C} ${formatter.plural(args.groupCount, {
                    one: ()=>`s ${formatter.number(args.groupCount)} mo\u{17E}nost\xed`,
                    other: ()=>`se ${formatter.number(args.groupCount)} mo\u{17E}nostmi`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: ` (vybr\xe1no)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `N\xe1vrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybr\xe1no`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/combobox/dist/da-DK.mjs
var $a10a0369f5433ed1$exports = {};
$a10a0369f5433ed1$exports = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mulighed tilg\xe6ngelig`,
            other: ()=>`${formatter.number(args.optionCount)} muligheder tilg\xe6ngelige`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angivet gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mulighed`,
                    other: ()=>`${formatter.number(args.groupCount)} muligheder`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/combobox/dist/de-DE.mjs
var $bfd288727d5cb166$exports = {};
$bfd288727d5cb166$exports = {
    "buttonLabel": `Empfehlungen anzeigen`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} Option`,
            other: ()=>`${formatter.number(args.optionCount)} Optionen`
        })} verf\xfcgbar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Eingetretene Gruppe ${args.groupTitle}, mit ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} Option`,
                    other: ()=>`${formatter.number(args.groupCount)} Optionen`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, ausgew\xe4hlt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Empfehlungen`,
    "selectedAnnouncement": (args)=>`${args.optionText}, ausgew\xe4hlt`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/combobox/dist/el-GR.mjs
var $ca177778f9a74e3c$exports = {};
$ca177778f9a74e3c$exports = {
    "buttonLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3B2}\u{3BF}\u{3BB}\u{3AE} \u{3C0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3C9}\u{3BD}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `
        })} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${args.groupTitle}, \u{3BC}\u{3B5} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/en-US.mjs
var $9b5aa79ef84beb6c$exports = {};
$9b5aa79ef84beb6c$exports = {
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Entered group ${args.groupTitle}, with ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selected`,
            other: ``
        }, args.isSelected)}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} available.`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selected`,
    "buttonLabel": `Show suggestions`,
    "listboxLabel": `Suggestions`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/combobox/dist/es-ES.mjs
var $57968e8209de2557$exports = {};
$57968e8209de2557$exports = {
    "buttonLabel": `Mostrar sugerencias`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opci\xf3n`,
            other: ()=>`${formatter.number(args.optionCount)} opciones`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Se ha unido al grupo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opci\xf3n`,
                    other: ()=>`${formatter.number(args.groupCount)} opciones`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, seleccionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugerencias`,
    "selectedAnnouncement": (args)=>`${args.optionText}, seleccionado`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/combobox/dist/et-EE.mjs
var $60690790bf4c1c6a$exports = {};
$60690790bf4c1c6a$exports = {
    "buttonLabel": `Kuva soovitused`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} valik`,
            other: ()=>`${formatter.number(args.optionCount)} valikud`
        })} saadaval.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Sisestatud r\xfchm ${args.groupTitle}, valikuga ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} valik`,
                    other: ()=>`${formatter.number(args.groupCount)} valikud`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valitud`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Soovitused`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valitud`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/combobox/dist/fi-FI.mjs
var $1101246e8c7d9357$exports = {};
$1101246e8c7d9357$exports = {
    "buttonLabel": `N\xe4yt\xe4 ehdotukset`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} vaihtoehto`,
            other: ()=>`${formatter.number(args.optionCount)} vaihtoehdot`
        })} saatavilla.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Mentiin ryhm\xe4\xe4n ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} vaihtoehdon`,
                    other: ()=>`${formatter.number(args.groupCount)} vaihtoehdon`
                })} kanssa.`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valittu`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ehdotukset`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valittu`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/combobox/dist/fr-FR.mjs
var $6404b5cb5b241730$exports = {};
$6404b5cb5b241730$exports = {
    "buttonLabel": `Afficher les suggestions`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groupe ${args.groupTitle} rejoint, avec ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, s\xe9lectionn\xe9(s)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggestions`,
    "selectedAnnouncement": (args)=>`${args.optionText}, s\xe9lectionn\xe9`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/he-IL.mjs
var $dfeafa702e92e31f$exports = {};
$dfeafa702e92e31f$exports = {
    "buttonLabel": `\u{5D4}\u{5E6}\u{5D2} \u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${formatter.number(args.optionCount)}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
        })} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${args.groupTitle}, \u{5E2}\u{5DD} ${formatter.plural(args.groupCount, {
                    one: ()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${formatter.number(args.groupCount)}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/combobox/dist/hr-HR.mjs
var $2d125e0b34676352$exports = {};
$2d125e0b34676352$exports = {
    "buttonLabel": `Prika\u{17E}i prijedloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno jo\u{161}: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, odabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Prijedlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, odabrano`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/hu-HU.mjs
var $ea029611d7634059$exports = {};
$ea029611d7634059$exports = {
    "buttonLabel": `Javaslatok megjelen\xedt\xe9se`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} lehet\u{151}s\xe9g`,
            other: ()=>`${formatter.number(args.optionCount)} lehet\u{151}s\xe9g`
        })} \xe1ll rendelkez\xe9sre.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Bel\xe9pett a(z) ${args.groupTitle} csoportba, amely ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} lehet\u{151}s\xe9get`,
                    other: ()=>`${formatter.number(args.groupCount)} lehet\u{151}s\xe9get`
                })} tartalmaz. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, kijel\xf6lve`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Javaslatok`,
    "selectedAnnouncement": (args)=>`${args.optionText}, kijel\xf6lve`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/combobox/dist/it-IT.mjs
var $77f075bb86ad7091$exports = {};
$77f075bb86ad7091$exports = {
    "buttonLabel": `Mostra suggerimenti`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opzione disponibile`,
            other: ()=>`${formatter.number(args.optionCount)} opzioni disponibili`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingresso nel gruppo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opzione`,
                    other: ()=>`${formatter.number(args.groupCount)} opzioni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selezionato`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggerimenti`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selezionato`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/combobox/dist/ja-JP.mjs
var $6e87462e84907983$exports = {};
$6e87462e84907983$exports = {
    "buttonLabel": `\u{5019}\u{88DC}\u{3092}\u{8868}\u{793A}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
        })}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${args.groupTitle}\u{3001}${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
                })}\u{3092}\u{542B}\u{3080}\u{3002}`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5019}\u{88DC}`,
    "selectedAnnouncement": (args)=>`${args.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/combobox/dist/ko-KR.mjs
var $9246f2c6edc6b232$exports = {};
$9246f2c6edc6b232$exports = {
    "buttonLabel": `\u{C81C}\u{C548} \u{C0AC}\u{D56D} \u{D45C}\u{C2DC}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)}\u{AC1C} \u{C635}\u{C158}`,
            other: ()=>`${formatter.number(args.optionCount)}\u{AC1C} \u{C635}\u{C158}`
        })}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)}\u{AC1C} \u{C635}\u{C158}`,
                    other: ()=>`${formatter.number(args.groupCount)}\u{AC1C} \u{C635}\u{C158}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{C120}\u{D0DD}\u{B428}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{C81C}\u{C548}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{C120}\u{D0DD}\u{B428}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/lt-LT.mjs
var $e587accc6c0a434c$exports = {};
$e587accc6c0a434c$exports = {
    "buttonLabel": `Rodyti pasi\u{16B}lymus`,
    "countAnnouncement": (args, formatter)=>`Yra ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} parinktis`,
            other: ()=>`${formatter.number(args.optionCount)} parinktys (-i\u{173})`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{12E}vesta grup\u{117} ${args.groupTitle}, su ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} parinktimi`,
                    other: ()=>`${formatter.number(args.groupCount)} parinktimis (-i\u{173})`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, pasirinkta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Pasi\u{16B}lymai`,
    "selectedAnnouncement": (args)=>`${args.optionText}, pasirinkta`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/combobox/dist/lv-LV.mjs
var $03a1900e7400b5ab$exports = {};
$03a1900e7400b5ab$exports = {
    "buttonLabel": `R\u{101}d\u{12B}t ieteikumus`,
    "countAnnouncement": (args, formatter)=>`Pieejamo opciju skaits: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcijas`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ievad\u{12B}ta grupa ${args.groupTitle}, ar ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opciju`,
                    other: ()=>`${formatter.number(args.groupCount)} opcij\u{101}m`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, atlas\u{12B}ta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ieteikumi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, atlas\u{12B}ta`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/combobox/dist/nb-NO.mjs
var $1387676441be6cf6$exports = {};
$1387676441be6cf6$exports = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativer`
        })} finnes.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angitt gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativer`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/combobox/dist/nl-NL.mjs
var $17e82ebf0f8ab91f$exports = {};
$17e82ebf0f8ab91f$exports = {
    "buttonLabel": `Suggesties weergeven`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} optie`,
            other: ()=>`${formatter.number(args.optionCount)} opties`
        })} beschikbaar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groep ${args.groupTitle} ingevoerd met ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} optie`,
                    other: ()=>`${formatter.number(args.groupCount)} opties`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, geselecteerd`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggesties`,
    "selectedAnnouncement": (args)=>`${args.optionText}, geselecteerd`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/combobox/dist/pl-PL.mjs
var $2f5377d3471630e5$exports = {};
$2f5377d3471630e5$exports = {
    "buttonLabel": `Wy\u{15B}wietlaj sugestie`,
    "countAnnouncement": (args, formatter)=>`dost\u{119}pna/dost\u{119}pne(-nych) ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcja`,
            other: ()=>`${formatter.number(args.optionCount)} opcje(-i)`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Do\u{142}\u{105}czono do grupy ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcj\u{105}`,
                    other: ()=>`${formatter.number(args.groupCount)} opcjami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, wybrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestie`,
    "selectedAnnouncement": (args)=>`${args.optionText}, wybrano`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/combobox/dist/pt-BR.mjs
var $dee9868b6fa95ffe$exports = {};
$dee9868b6fa95ffe$exports = {
    "buttonLabel": `Mostrar sugest\xf5es`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\xe7\xe3o`,
            other: ()=>`${formatter.number(args.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo inserido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\xe7\xe3o`,
                    other: ()=>`${formatter.number(args.groupCount)} op\xe7\xf5es`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugest\xf5es`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/pt-PT.mjs
var $f8b2e63637cbb5a6$exports = {};
$f8b2e63637cbb5a6$exports = {
    "buttonLabel": `Apresentar sugest\xf5es`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\xe7\xe3o`,
            other: ()=>`${formatter.number(args.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo introduzido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\xe7\xe3o`,
                    other: ()=>`${formatter.number(args.groupCount)} op\xe7\xf5es`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugest\xf5es`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/combobox/dist/ro-RO.mjs
var $46a885db3b44ea95$exports = {};
$46a885db3b44ea95$exports = {
    "buttonLabel": `Afi\u{219}are sugestii`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\u{21B}iune`,
            other: ()=>`${formatter.number(args.optionCount)} op\u{21B}iuni`
        })} disponibile.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grup ${args.groupTitle} introdus, cu ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\u{21B}iune`,
                    other: ()=>`${formatter.number(args.groupCount)} op\u{21B}iuni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selectat`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestii`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selectat`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/combobox/dist/ru-RU.mjs
var $50d8a8f0afa9dee5$exports = {};
$50d8a8f0afa9dee5$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{44C} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${args.groupTitle}, \u{441} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{43C}\u{438}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/combobox/dist/sk-SK.mjs
var $2867ee6173245507$exports = {};
$2867ee6173245507$exports = {
    "buttonLabel": `Zobrazi\u{165} n\xe1vrhy`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mo\u{17E}nos\u{165}`,
            other: ()=>`${formatter.number(args.optionCount)} mo\u{17E}nosti/-\xed`
        })} k dispoz\xedcii.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadan\xe1 skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mo\u{17E}nos\u{165}ou`,
                    other: ()=>`${formatter.number(args.groupCount)} mo\u{17E}nos\u{165}ami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, vybrat\xe9`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `N\xe1vrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybrat\xe9`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/combobox/dist/sl-SI.mjs
var $0631b65beeb09b50$exports = {};
$0631b65beeb09b50$exports = {
    "buttonLabel": `Prika\u{17E}i predloge`,
    "countAnnouncement": (args, formatter)=>`Na voljo je ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Vnesena skupina ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcija`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izbrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlogi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izbrano`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/combobox/dist/sr-SP.mjs
var $65fc749265dcd686$exports = {};
$65fc749265dcd686$exports = {
    "buttonLabel": `Prika\u{17E}i predloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno jo\u{161}: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena grupa ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} optione/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izabrano`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/combobox/dist/sv-SE.mjs
var $69ba655c7853c08e$exports = {};
$69ba655c7853c08e$exports = {
    "buttonLabel": `Visa f\xf6rslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativ`
        })} tillg\xe4ngliga.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingick i gruppen ${args.groupTitle} med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativ`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valda`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `F\xf6rslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valda`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/combobox/dist/tr-TR.mjs
var $a79794784d61577c$exports = {};
$a79794784d61577c$exports = {
    "buttonLabel": `\xd6nerileri g\xf6ster`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} se\xe7enek`,
            other: ()=>`${formatter.number(args.optionCount)} se\xe7enekler`
        })} kullan\u{131}labilir.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Girilen grup ${args.groupTitle}, ile ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} se\xe7enek`,
                    other: ()=>`${formatter.number(args.groupCount)} se\xe7enekler`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, se\xe7ildi`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\xd6neriler`,
    "selectedAnnouncement": (args)=>`${args.optionText}, se\xe7ildi`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/uk-UA.mjs
var $c2845791417ebaf4$exports = {};
$c2845791417ebaf4$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{438} \u{43F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${args.groupTitle}, \u{437} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/combobox/dist/zh-CN.mjs
var $29b642d0025cc7a4$exports = {};
$29b642d0025cc7a4$exports = {
    "buttonLabel": `\u{663E}\u{793A}\u{5EFA}\u{8BAE}`,
    "countAnnouncement": (args, formatter)=>`\u{6709} ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{4E2A}\u{9009}\u{9879}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{4E2A}\u{9009}\u{9879}`
        })}\u{53EF}\u{7528}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{8FDB}\u{5165}\u{4E86} ${args.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{4E2A}\u{9009}\u{9879}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{4E2A}\u{9009}\u{9879}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5DF2}\u{9009}\u{62E9}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5EFA}\u{8BAE}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5DF2}\u{9009}\u{62E9}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/combobox/dist/zh-TW.mjs
var $cd36dd33f9d46936$exports = {};
$cd36dd33f9d46936$exports = {
    "buttonLabel": `\u{986F}\u{793A}\u{5EFA}\u{8B70}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{9078}\u{9805}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{9078}\u{9805}`
        })} \u{53EF}\u{7528}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${args.groupTitle}, \u{6709} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{9078}\u{9805}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{9078}\u{9805}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5DF2}\u{9078}\u{53D6}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5EFA}\u{8B70}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5DF2}\u{9078}\u{53D6}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/combobox/dist/intlStrings.mjs



































var $de5926a92e8ebc5b$exports = {};


































$de5926a92e8ebc5b$exports = {
    "ar-AE": $02cb4c75c506befe$exports,
    "bg-BG": $568b8163f1e56faf$exports,
    "cs-CZ": $87581c0202d106b8$exports,
    "da-DK": $a10a0369f5433ed1$exports,
    "de-DE": $bfd288727d5cb166$exports,
    "el-GR": $ca177778f9a74e3c$exports,
    "en-US": $9b5aa79ef84beb6c$exports,
    "es-ES": $57968e8209de2557$exports,
    "et-EE": $60690790bf4c1c6a$exports,
    "fi-FI": $1101246e8c7d9357$exports,
    "fr-FR": $6404b5cb5b241730$exports,
    "he-IL": $dfeafa702e92e31f$exports,
    "hr-HR": $2d125e0b34676352$exports,
    "hu-HU": $ea029611d7634059$exports,
    "it-IT": $77f075bb86ad7091$exports,
    "ja-JP": $6e87462e84907983$exports,
    "ko-KR": $9246f2c6edc6b232$exports,
    "lt-LT": $e587accc6c0a434c$exports,
    "lv-LV": $03a1900e7400b5ab$exports,
    "nb-NO": $1387676441be6cf6$exports,
    "nl-NL": $17e82ebf0f8ab91f$exports,
    "pl-PL": $2f5377d3471630e5$exports,
    "pt-BR": $dee9868b6fa95ffe$exports,
    "pt-PT": $f8b2e63637cbb5a6$exports,
    "ro-RO": $46a885db3b44ea95$exports,
    "ru-RU": $50d8a8f0afa9dee5$exports,
    "sk-SK": $2867ee6173245507$exports,
    "sl-SI": $0631b65beeb09b50$exports,
    "sr-SP": $65fc749265dcd686$exports,
    "sv-SE": $69ba655c7853c08e$exports,
    "tr-TR": $a79794784d61577c$exports,
    "uk-UA": $c2845791417ebaf4$exports,
    "zh-CN": $29b642d0025cc7a4$exports,
    "zh-TW": $cd36dd33f9d46936$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/live-announcer/dist/LiveAnnouncer.mjs
var LiveAnnouncer = __webpack_require__(60771);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/ariaHideOutside.mjs
var ariaHideOutside = __webpack_require__(2269);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/utils.mjs
var dist_utils = __webpack_require__(97918);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLabels.mjs
var useLabels = __webpack_require__(37061);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/platform.mjs
var platform = __webpack_require__(69202);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var useUpdateEffect = __webpack_require__(22644);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(99672);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/domHelpers.mjs
var domHelpers = __webpack_require__(24836);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/virtualFocus.mjs
var virtualFocus = __webpack_require__(55799);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getChildNodes.mjs
var getChildNodes = __webpack_require__(80423);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getItemCount.mjs
var getItemCount = __webpack_require__(70732);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableCollection.mjs + 2 modules
var useSelectableCollection = __webpack_require__(1243);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs + 35 modules
var useMenuTrigger = __webpack_require__(25263);
// EXTERNAL MODULE: ./node_modules/@react-aria/textfield/dist/useTextField.mjs
var useTextField = __webpack_require__(11811);
;// ./node_modules/@react-aria/combobox/dist/useComboBox.mjs















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












function $c350ade66beef0af$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef, popoverRef: popoverRef, inputRef: inputRef, listBoxRef: listBoxRef, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap, isReadOnly: isReadOnly, isDisabled: isDisabled } = props;
    let backupBtnRef = (0, react.useRef)(null);
    buttonRef = buttonRef !== null && buttonRef !== void 0 ? buttonRef : backupBtnRef;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($de5926a92e8ebc5b$exports))), '@react-aria/combobox');
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, useMenuTrigger/* useMenuTrigger */.V)({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    (0, dist_utils/* listData */.b).set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let { collection: collection } = state;
    let { disabledKeys: disabledKeys } = state.selectionManager;
    let delegate = (0, react.useMemo)(()=>keyboardDelegate || new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)({
            collection: collection,
            disabledKeys: disabledKeys,
            ref: listBoxRef,
            layoutDelegate: layoutDelegate
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps } = (0, useSelectableCollection/* useSelectableCollection */.y)({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap: shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    let router = (0, openLink/* useRouter */.rd)();
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        if (e.nativeEvent.isComposing) return;
        switch(e.key){
            case 'Enter':
            case 'Tab':
                // Prevent form submission if menu is open since we may be selecting a option
                if (state.isOpen && e.key === 'Enter') e.preventDefault();
                // If the focused item is a link, trigger opening it. Items that are links are not selectable.
                if (state.isOpen && listBoxRef.current && state.selectionManager.focusedKey != null && state.selectionManager.isLink(state.selectionManager.focusedKey)) {
                    let item = listBoxRef.current.querySelector(`[data-key="${CSS.escape(state.selectionManager.focusedKey.toString())}"]`);
                    if (e.key === 'Enter' && item instanceof HTMLAnchorElement) {
                        let collectionItem = state.collection.getItem(state.selectionManager.focusedKey);
                        if (collectionItem) router.open(item, e, collectionItem.props.href, collectionItem.props.routerOptions);
                    }
                    state.close();
                } else state.commit();
                break;
            case 'Escape':
                if (state.selectedKey !== null || state.inputValue === '' || props.allowsCustomValue) e.continuePropagation();
                state.revert();
                break;
            case 'ArrowDown':
                state.open('first', 'manual');
                break;
            case 'ArrowUp':
                state.open('last', 'manual');
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                state.selectionManager.setFocusedKey(null);
                break;
        }
    };
    let onBlur = (e)=>{
        var _popoverRef_current;
        let blurFromButton = (buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) && buttonRef.current === e.relatedTarget;
        let blurIntoPopover = (_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.contains(e.relatedTarget);
        // Ignore blur if focused moved to the button(if exists) or into the popover.
        if (blurFromButton || blurIntoPopover) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useTextField/* useTextField */.v)({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly ? (0, chain/* chain */.c)(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown) : props.onKeyDown,
        onBlur: onBlur,
        value: state.inputValue,
        onFocus: onFocus,
        autoComplete: 'off',
        validate: undefined,
        [(0, useFormValidationState/* privateValidationStateProp */.Lf)]: state
    }, inputRef);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === 'touch') {
            var // Focus the input field in case it isn't focused yet
            _inputRef_current;
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            state.toggle(null, 'manual');
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== 'touch') {
            var _inputRef_current;
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            state.toggle(e.pointerType === 'keyboard' || e.pointerType === 'virtual' ? 'first' : null, 'manual');
        }
    };
    let triggerLabelProps = (0, useLabels/* useLabels */.b)({
        id: menuTriggerProps.id,
        'aria-label': stringFormatter.format('buttonLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    let listBoxProps = (0, useLabels/* useLabels */.b)({
        id: menuProps.id,
        'aria-label': stringFormatter.format('listboxLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = (0, react.useRef)(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            var _inputRef_current;
            e.preventDefault();
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + .5 * rect.width);
        let centerY = Math.ceil(rect.top + .5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            var _inputRef_current1;
            e.preventDefault();
            (_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.focus();
            state.toggle(null, 'manual');
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    var _focusedItem_parentKey;
    let sectionKey = (_focusedItem_parentKey = focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) !== null && _focusedItem_parentKey !== void 0 ? _focusedItem_parentKey : null;
    var _state_selectionManager_focusedKey;
    let itemKey = (_state_selectionManager_focusedKey = state.selectionManager.focusedKey) !== null && _state_selectionManager_focusedKey !== void 0 ? _state_selectionManager_focusedKey : null;
    let lastSection = (0, react.useRef)(sectionKey);
    let lastItem = (0, react.useRef)(itemKey);
    (0, react.useEffect)(()=>{
        if ((0, platform/* isAppleDevice */.lg)() && focusedItem != null && itemKey != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = (section === null || section === void 0 ? void 0 : section['aria-label']) || (typeof (section === null || section === void 0 ? void 0 : section.rendered) === 'string' ? section.rendered : '') || '';
            var _ref;
            let announcement = stringFormatter.format('focusAnnouncement', {
                isGroupChange: (_ref = section && sectionKey !== lastSection.current) !== null && _ref !== void 0 ? _ref : false,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...(0, getChildNodes/* getChildNodes */.iQ)(section, state.collection)
                ].length : 0,
                optionText: focusedItem['aria-label'] || focusedItem.textValue || '',
                isSelected: isSelected
            });
            (0, LiveAnnouncer/* announce */.iP)(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = (0, getItemCount/* getItemCount */.v)(state.collection);
    let lastSize = (0, react.useRef)(optionCount);
    let lastOpen = (0, react.useRef)(state.isOpen);
    (0, react.useEffect)(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || (0, platform/* isAppleDevice */.lg)());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = stringFormatter.format('countAnnouncement', {
                optionCount: optionCount
            });
            (0, LiveAnnouncer/* announce */.iP)(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = (0, react.useRef)(state.selectedKey);
    (0, react.useEffect)(()=>{
        if ((0, platform/* isAppleDevice */.lg)() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem['aria-label'] || state.selectedItem.textValue || '';
            let announcement = stringFormatter.format('selectedAnnouncement', {
                optionText: optionText
            });
            (0, LiveAnnouncer/* announce */.iP)(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    (0, react.useEffect)(()=>{
        if (state.isOpen) return (0, ariaHideOutside/* ariaHideOutside */.h)([
            inputRef.current,
            popoverRef.current
        ].filter((element)=>element != null));
    }, [
        state.isOpen,
        inputRef,
        popoverRef
    ]);
    (0, useUpdateEffect/* useUpdateEffect */.w)(()=>{
        // Re-show focus ring when there is no virtually focused item.
        if (!focusedItem && inputRef.current && (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(inputRef.current)) === inputRef.current) (0, virtualFocus/* dispatchVirtualFocus */.Ig)(inputRef.current, null);
    }, [
        focusedItem
    ]);
    return {
        labelProps: labelProps,
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            preventFocusOnPress: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        inputProps: (0, mergeProps/* mergeProps */.v)(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? (0, dist_utils/* getItemId */.H)(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: (0, mergeProps/* mergeProps */.v)(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            linkBehavior: 'selection'
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useComboBox.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useSingleSelectListState.mjs
var useSingleSelectListState = __webpack_require__(319);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/ListCollection.mjs
var ListCollection = __webpack_require__(7471);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
;// ./node_modules/@react-stately/combobox/dist/useComboBoxState.mjs







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





function $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e(props) {
    var _collection_getItem;
    let { defaultFilter: defaultFilter, menuTrigger: menuTrigger = 'input', allowsEmptyCollection: allowsEmptyCollection = false, allowsCustomValue: allowsCustomValue, shouldCloseOnBlur: shouldCloseOnBlur = true } = props;
    let [showAllItems, setShowAllItems] = (0, react.useState)(false);
    let [isFocused, setFocusedState] = (0, react.useState)(false);
    let [focusStrategy, setFocusStrategy] = (0, react.useState)(null);
    let onSelectionChange = (key)=>{
        if (props.onSelectionChange) props.onSelectionChange(key);
        // If key is the same, reset the inputValue and close the menu
        // (scenario: user clicks on already selected option)
        if (key === selectedKey) {
            resetInputValue();
            closeMenu();
        }
    };
    var _props_items;
    let { collection: collection, selectionManager: selectionManager, selectedKey: selectedKey, setSelectedKey: setSelectedKey, selectedItem: selectedItem, disabledKeys: disabledKeys } = (0, useSingleSelectListState/* useSingleSelectListState */.V)({
        ...props,
        onSelectionChange: onSelectionChange,
        items: (_props_items = props.items) !== null && _props_items !== void 0 ? _props_items : props.defaultItems
    });
    let defaultInputValue = props.defaultInputValue;
    if (defaultInputValue == null) {
        var _collection_getItem1;
        var _collection_getItem_textValue;
        if (selectedKey == null) defaultInputValue = '';
        else defaultInputValue = (_collection_getItem_textValue = (_collection_getItem1 = collection.getItem(selectedKey)) === null || _collection_getItem1 === void 0 ? void 0 : _collection_getItem1.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '';
    }
    let [inputValue, setInputValue] = (0, useControlledState/* useControlledState */.P)(props.inputValue, defaultInputValue, props.onInputChange);
    // Preserve original collection so we can show all items on demand
    let originalCollection = collection;
    let filteredCollection = (0, react.useMemo)(()=>// No default filter if items are controlled.
        props.items != null || !defaultFilter ? collection : $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, defaultFilter), [
        collection,
        inputValue,
        defaultFilter,
        props.items
    ]);
    let [lastCollection, setLastCollection] = (0, react.useState)(filteredCollection);
    // Track what action is attempting to open the menu
    let menuOpenTrigger = (0, react.useRef)('focus');
    let onOpenChange = (open)=>{
        if (props.onOpenChange) props.onOpenChange(open, open ? menuOpenTrigger.current : undefined);
        selectionManager.setFocused(open);
        if (!open) selectionManager.setFocusedKey(null);
    };
    let triggerState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)({
        ...props,
        onOpenChange: onOpenChange,
        isOpen: undefined,
        defaultOpen: undefined
    });
    let open = (focusStrategy = null, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // Prevent open operations from triggering if there is nothing to display
        // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
        // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
        if (allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) {
            if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is manually opened. Only care about this if items are undefined
            setShowAllItems(true);
            menuOpenTrigger.current = trigger;
            setFocusStrategy(focusStrategy);
            triggerState.open();
        }
    };
    let toggle = (focusStrategy = null, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
        if (!(allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) && !triggerState.isOpen) return;
        if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is toggled open. Only care about this if items are undefined
        setShowAllItems(true);
        // Only update the menuOpenTrigger if menu is currently closed
        if (!triggerState.isOpen) menuOpenTrigger.current = trigger;
        toggleMenu(focusStrategy);
    };
    let updateLastCollection = (0, react.useCallback)(()=>{
        setLastCollection(showAllItems ? originalCollection : filteredCollection);
    }, [
        showAllItems,
        originalCollection,
        filteredCollection
    ]);
    // If menu is going to close, save the current collection so we can freeze the displayed collection when the
    // user clicks outside the popover to close the menu. Prevents the menu contents from updating as the menu closes.
    let toggleMenu = (0, react.useCallback)((focusStrategy = null)=>{
        if (triggerState.isOpen) updateLastCollection();
        setFocusStrategy(focusStrategy);
        triggerState.toggle();
    }, [
        triggerState,
        updateLastCollection
    ]);
    let closeMenu = (0, react.useCallback)(()=>{
        if (triggerState.isOpen) {
            updateLastCollection();
            triggerState.close();
        }
    }, [
        triggerState,
        updateLastCollection
    ]);
    let [lastValue, setLastValue] = (0, react.useState)(inputValue);
    let resetInputValue = ()=>{
        var _collection_getItem;
        var _collection_getItem_textValue;
        let itemText = selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '';
        setLastValue(itemText);
        setInputValue(itemText);
    };
    var _props_selectedKey, _ref;
    let lastSelectedKey = (0, react.useRef)((_ref = (_props_selectedKey = props.selectedKey) !== null && _props_selectedKey !== void 0 ? _props_selectedKey : props.defaultSelectedKey) !== null && _ref !== void 0 ? _ref : null);
    var _collection_getItem_textValue1;
    let lastSelectedKeyText = (0, react.useRef)(selectedKey != null ? (_collection_getItem_textValue1 = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue1 !== void 0 ? _collection_getItem_textValue1 : '' : '');
    // intentional omit dependency array, want this to happen on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react.useEffect)(()=>{
        var _collection_getItem;
        // Open and close menu automatically when the input value changes if the input is focused,
        // and there are items in the collection or allowEmptyCollection is true.
        if (isFocused && (filteredCollection.size > 0 || allowsEmptyCollection) && !triggerState.isOpen && inputValue !== lastValue && menuTrigger !== 'manual') open(null, 'input');
        // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
        // but we are currently showing all items via button press
        if (!showAllItems && !allowsEmptyCollection && triggerState.isOpen && filteredCollection.size === 0) closeMenu();
        // Close when an item is selected.
        if (selectedKey != null && selectedKey !== lastSelectedKey.current) closeMenu();
        // Clear focused key when input value changes and display filtered collection again.
        if (inputValue !== lastValue) {
            selectionManager.setFocusedKey(null);
            setShowAllItems(false);
            // Set selectedKey to null when the user clears the input.
            // If controlled, this is the application developer's responsibility.
            if (inputValue === '' && (props.inputValue === undefined || props.selectedKey === undefined)) setSelectedKey(null);
        }
        // If the selectedKey changed, update the input value.
        // Do nothing if both inputValue and selectedKey are controlled.
        // In this case, it's the user's responsibility to update inputValue in onSelectionChange.
        if (selectedKey !== lastSelectedKey.current && (props.inputValue === undefined || props.selectedKey === undefined)) resetInputValue();
        else if (lastValue !== inputValue) setLastValue(inputValue);
        var _collection_getItem_textValue;
        // Update the inputValue if the selected item's text changes from its last tracked value.
        // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
        // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
        // If inputValue is controlled, it is the user's responsibility to update the inputValue when items change.
        let selectedItemText = selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '';
        if (!isFocused && selectedKey != null && props.inputValue === undefined && selectedKey === lastSelectedKey.current) {
            if (lastSelectedKeyText.current !== selectedItemText) {
                setLastValue(selectedItemText);
                setInputValue(selectedItemText);
            }
        }
        lastSelectedKey.current = selectedKey;
        lastSelectedKeyText.current = selectedItemText;
    });
    let validation = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: (0, react.useMemo)(()=>({
                inputValue: inputValue,
                selectedKey: selectedKey
            }), [
            inputValue,
            selectedKey
        ])
    });
    // Revert input value and close menu
    let revert = ()=>{
        if (allowsCustomValue && selectedKey == null) commitCustomValue();
        else commitSelection();
    };
    let commitCustomValue = ()=>{
        lastSelectedKey.current = null;
        setSelectedKey(null);
        closeMenu();
    };
    let commitSelection = ()=>{
        // If multiple things are controlled, call onSelectionChange
        if (props.selectedKey !== undefined && props.inputValue !== undefined) {
            var _props_onSelectionChange, _collection_getItem;
            (_props_onSelectionChange = props.onSelectionChange) === null || _props_onSelectionChange === void 0 ? void 0 : _props_onSelectionChange.call(props, selectedKey);
            var _collection_getItem_textValue;
            // Stop menu from reopening from useEffect
            let itemText = selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '';
            setLastValue(itemText);
            closeMenu();
        } else {
            // If only a single aspect of combobox is controlled, reset input value and close menu for the user
            resetInputValue();
            closeMenu();
        }
    };
    const commitValue = ()=>{
        if (allowsCustomValue) {
            var _collection_getItem;
            var _collection_getItem_textValue;
            const itemText = selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '';
            inputValue === itemText ? commitSelection() : commitCustomValue();
        } else // Reset inputValue and close menu
        commitSelection();
    };
    let commit = ()=>{
        if (triggerState.isOpen && selectionManager.focusedKey != null) {
            // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
            // fire onSelectionChange to allow the application to control the closing.
            if (selectedKey === selectionManager.focusedKey) commitSelection();
            else setSelectedKey(selectionManager.focusedKey);
        } else commitValue();
    };
    let valueOnFocus = (0, react.useRef)(inputValue);
    let setFocused = (isFocused)=>{
        if (isFocused) {
            valueOnFocus.current = inputValue;
            if (menuTrigger === 'focus' && !props.isReadOnly) open(null, 'focus');
        } else {
            if (shouldCloseOnBlur) commitValue();
            if (inputValue !== valueOnFocus.current) validation.commitValidation();
        }
        setFocusedState(isFocused);
    };
    let displayedCollection = (0, react.useMemo)(()=>{
        if (triggerState.isOpen) {
            if (showAllItems) return originalCollection;
            else return filteredCollection;
        } else return lastCollection;
    }, [
        triggerState.isOpen,
        originalCollection,
        filteredCollection,
        showAllItems,
        lastCollection
    ]);
    return {
        ...validation,
        ...triggerState,
        focusStrategy: focusStrategy,
        toggle: toggle,
        open: open,
        close: commitValue,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        disabledKeys: disabledKeys,
        isFocused: isFocused,
        setFocused: setFocused,
        selectedItem: selectedItem,
        collection: displayedCollection,
        inputValue: inputValue,
        setInputValue: setInputValue,
        commit: commit,
        revert: revert
    };
}
function $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, filter) {
    return new (0, ListCollection/* ListCollection */.J)($a9e7382a7d111cb5$var$filterNodes(collection, collection, inputValue, filter));
}
function $a9e7382a7d111cb5$var$filterNodes(collection, nodes, inputValue, filter) {
    let filteredNode = [];
    for (let node of nodes){
        if (node.type === 'section' && node.hasChildNodes) {
            let filtered = $a9e7382a7d111cb5$var$filterNodes(collection, (0, getChildNodes/* getChildNodes */.iQ)(node, collection), inputValue, filter);
            if ([
                ...filtered
            ].some((node)=>node.type === 'item')) filteredNode.push({
                ...node,
                childNodes: filtered
            });
        } else if (node.type === 'item' && filter(node.textValue, inputValue)) filteredNode.push({
            ...node
        });
        else if (node.type !== 'item') filteredNode.push({
            ...node
        });
    }
    return filteredNode;
}



//# sourceMappingURL=useComboBoxState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(77366);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
;// ./node_modules/react-aria-components/dist/ComboBox.mjs

















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















const $d01f2c01039c0eec$export$d414ccceff7063c3 = /*#__PURE__*/ (0, react.createContext)(null);
const $d01f2c01039c0eec$export$c02625b26074192c = /*#__PURE__*/ (0, react.createContext)(null);
const $d01f2c01039c0eec$export$72b9695b8216309a = /*#__PURE__*/ (0, react.forwardRef)(function ComboBox(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $d01f2c01039c0eec$export$d414ccceff7063c3);
    let { children: children, isDisabled: isDisabled = false, isInvalid: isInvalid = false, isRequired: isRequired = false } = props;
    let content = (0, react.useMemo)(()=>{
        var _props_items;
        return /*#__PURE__*/ (0, react).createElement((0, ListBox/* ListBoxContext */.JC).Provider, {
            value: {
                items: (_props_items = props.items) !== null && _props_items !== void 0 ? _props_items : props.defaultItems
            }
        }, typeof children === 'function' ? children({
            isOpen: false,
            isDisabled: isDisabled,
            isInvalid: isInvalid,
            isRequired: isRequired,
            defaultChildren: null
        }) : children);
    }, [
        children,
        isDisabled,
        isInvalid,
        isRequired,
        props.items,
        props.defaultItems
    ]);
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: content
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($d01f2c01039c0eec$var$ComboBoxInner, {
            props: props,
            collection: collection,
            comboBoxRef: ref
        }));
});
function $d01f2c01039c0eec$var$ComboBoxInner({ props: props, collection: collection, comboBoxRef: ref }) {
    let { name: name, formValue: formValue = 'key', allowsCustomValue: allowsCustomValue } = props;
    if (allowsCustomValue) formValue = 'text';
    let { validationBehavior: formValidationBehavior } = (0, utils/* useSlottedContext */.CC)((0, Form/* FormContext */.c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let { contains: contains } = (0, useFilter/* useFilter */.U)({
        sensitivity: 'base'
    });
    let state = (0, $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e)({
        defaultFilter: props.defaultFilter || contains,
        ...props,
        // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
        items: props.items,
        children: undefined,
        collection: collection,
        validationBehavior: validationBehavior
    });
    let buttonRef = (0, react.useRef)(null);
    let inputRef = (0, react.useRef)(null);
    let listBoxRef = (0, react.useRef)(null);
    let popoverRef = (0, react.useRef)(null);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { buttonProps: buttonProps, inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $c350ade66beef0af$export$8c18d1b4f7232bbf)({
        ...(0, utils/* removeDataAttributes */.SK)(props),
        label: label,
        inputRef: inputRef,
        buttonRef: buttonRef,
        listBoxRef: listBoxRef,
        popoverRef: popoverRef,
        name: formValue === 'text' ? name : undefined,
        validationBehavior: validationBehavior
    }, state);
    // Make menu width match input + button
    let [menuWidth, setMenuWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (inputRef.current) {
            var _buttonRef_current;
            let buttonRect = (_buttonRef_current = buttonRef.current) === null || _buttonRef_current === void 0 ? void 0 : _buttonRef_current.getBoundingClientRect();
            let inputRect = inputRef.current.getBoundingClientRect();
            let minX = buttonRect ? Math.min(buttonRect.left, inputRect.left) : inputRect.left;
            let maxX = buttonRect ? Math.max(buttonRect.right, inputRect.right) : inputRect.right;
            setMenuWidth(maxX - minX + 'px');
        }
    }, [
        buttonRef,
        inputRef,
        setMenuWidth
    ]);
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: inputRef,
        onResize: onResize
    });
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, react.useMemo)(()=>({
            isOpen: state.isOpen,
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isRequired: props.isRequired || false
        }), [
        state.isOpen,
        props.isDisabled,
        validation.isInvalid,
        props.isRequired
    ]);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: renderPropsState,
        defaultClassName: 'react-aria-ComboBox'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    delete DOMProps.id;
    var _state_selectedKey;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $d01f2c01039c0eec$export$c02625b26074192c,
                state
            ],
            [
                (0, Label/* LabelContext */.I),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, Button/* ButtonContext */.k),
                {
                    ...buttonProps,
                    ref: buttonRef,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, Input/* InputContext */.E),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    ref: popoverRef,
                    triggerRef: inputRef,
                    scrollRef: listBoxRef,
                    placement: 'bottom start',
                    isNonModal: true,
                    trigger: 'ComboBox',
                    style: {
                        '--trigger-width': menuWidth
                    }
                }
            ],
            [
                (0, ListBox/* ListBoxContext */.JC),
                {
                    ...listBoxProps,
                    ref: listBoxRef
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
            ],
            [
                (0, Group/* GroupContext */.t),
                {
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, FieldError/* FieldErrorContext */.C),
                validation
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": state.isFocused || undefined,
        "data-open": state.isOpen || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }), name && formValue === 'key' && /*#__PURE__*/ (0, react).createElement("input", {
        type: "hidden",
        name: name,
        value: (_state_selectedKey = state.selectedKey) !== null && _state_selectedKey !== void 0 ? _state_selectedKey : ''
    }));
}



//# sourceMappingURL=ComboBox.module.js.map


/***/ }),

/***/ 79124:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U5: () => (/* binding */ $612b8eb6cb90e02d$export$f55761759794cf55),
/* harmony export */   Ux: () => (/* binding */ $612b8eb6cb90e02d$export$d188a835a7bc5783),
/* harmony export */   XW: () => (/* binding */ $612b8eb6cb90e02d$export$d1e8e3fbb7461f6),
/* harmony export */   oC: () => (/* binding */ $612b8eb6cb90e02d$export$971707d8a129a1f7)
/* harmony export */ });
/* unused harmony export DropIndicator */
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
const $612b8eb6cb90e02d$export$d188a835a7bc5783 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $612b8eb6cb90e02d$export$f55761759794cf55 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $612b8eb6cb90e02d$export$62ed72bc21f6b8a6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function DropIndicator(props, ref) {
    let { render: render } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($612b8eb6cb90e02d$export$f55761759794cf55);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, render(props, ref));
});
function $612b8eb6cb90e02d$export$971707d8a129a1f7(dragAndDropHooks, dropState) {
    var _dragAndDropHooks_isVirtualDragging;
    let renderDropIndicator = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.renderDropIndicator;
    let isVirtualDragging = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks);
    let fn = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target)=>{
        // Only show drop indicators when virtual dragging or this is the current drop target.
        if (isVirtualDragging || (dropState === null || dropState === void 0 ? void 0 : dropState.isDropTarget(target))) return renderDropIndicator ? renderDropIndicator(target) : /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($612b8eb6cb90e02d$export$62ed72bc21f6b8a6, {
            target: target
        });
    // We invalidate whenever the target changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        dropState === null || dropState === void 0 ? void 0 : dropState.target,
        isVirtualDragging,
        renderDropIndicator
    ]);
    return (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) ? fn : undefined;
}
function $612b8eb6cb90e02d$export$d1e8e3fbb7461f6(selectionManager, dragAndDropHooks, dropState) {
    var _dragAndDropHooks_isVirtualDragging, _dropState_target;
    // Persist the focused key and the drop target key.
    let focusedKey = selectionManager.focusedKey;
    let dropTargetKey = null;
    if ((dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks)) && (dropState === null || dropState === void 0 ? void 0 : (_dropState_target = dropState.target) === null || _dropState_target === void 0 ? void 0 : _dropState_target.type) === 'item') {
        dropTargetKey = dropState.target.key;
        var _dropState_collection_getKeyAfter;
        if (dropState.target.dropPosition === 'after') // Normalize to the "before" drop position since we only render those to the DOM.
        dropTargetKey = (_dropState_collection_getKeyAfter = dropState.collection.getKeyAfter(dropTargetKey)) !== null && _dropState_collection_getKeyAfter !== void 0 ? _dropState_collection_getKeyAfter : dropTargetKey;
    }
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k != null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
}



//# sourceMappingURL=DragAndDrop.module.js.map


/***/ }),

/***/ 63899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $a049562f99e7db0e$export$eb2fcfdbd7ba97d4),
/* harmony export */   t: () => (/* binding */ $a049562f99e7db0e$export$f9c6924e160136d1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
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


const $a049562f99e7db0e$export$f9c6924e160136d1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $a049562f99e7db0e$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $a049562f99e7db0e$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useHover */ .M)({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useFocusRing */ .o)({
        within: true
    });
    isDisabled !== null && isDisabled !== void 0 ? isDisabled : isDisabled = !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid !== null && isInvalid !== void 0 ? isInvalid : isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Group'
    });
    var _props_role, _props_slot;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: (_props_role = props.role) !== null && _props_role !== void 0 ? _props_role : 'group',
        slot: (_props_slot = props.slot) !== null && _props_slot !== void 0 ? _props_slot : undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Group.module.js.map


/***/ })

}]);