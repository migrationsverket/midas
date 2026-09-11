"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2995],{

/***/ 83259
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a3: () => (/* binding */ $dbdc5e6e7ce01b4b$export$72b9695b8216309a)
});

// UNUSED EXPORTS: ComboBoxContext, ComboBoxStateContext, ComboBoxValue, ComboBoxValueContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Button.mjs
var Button = __webpack_require__(93426);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/FieldError.mjs
var FieldError = __webpack_require__(3728);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Autocomplete.mjs
var Autocomplete = __webpack_require__(77314);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Form.mjs
var Form = __webpack_require__(70420);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Group.mjs
var Group = __webpack_require__(45439);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Input.mjs
var Input = __webpack_require__(36594);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Label.mjs
var Label = __webpack_require__(37820);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/ListBox.mjs + 3 modules
var ListBox = __webpack_require__(86670);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(51146);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/live-announcer/LiveAnnouncer.mjs
var LiveAnnouncer = __webpack_require__(35355);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/ariaHideOutside.mjs
var ariaHideOutside = __webpack_require__(61251);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/chain.mjs
var chain = __webpack_require__(96558);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/virtualFocus.mjs
var virtualFocus = __webpack_require__(93653);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/listbox/utils.mjs
var listbox_utils = __webpack_require__(98858);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/domHelpers.mjs
var domHelpers = __webpack_require__(1612);
;// ./node_modules/react-aria/dist/private/intl/combobox/ar-AE.mjs
var $44e96378ed9cec6d$exports = {};
$44e96378ed9cec6d$exports = {
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



//# sourceMappingURL=ar-AE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/bg-BG.mjs
var $4f2abbace6d15464$exports = {};
$4f2abbace6d15464$exports = {
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



//# sourceMappingURL=bg-BG.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/cs-CZ.mjs
var $c1cf508a70425b11$exports = {};
$c1cf508a70425b11$exports = {
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



//# sourceMappingURL=cs-CZ.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/da-DK.mjs
var $c6334dc4bef16229$exports = {};
$c6334dc4bef16229$exports = {
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



//# sourceMappingURL=da-DK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/de-DE.mjs
var $3c1f280212fbe3e1$exports = {};
$3c1f280212fbe3e1$exports = {
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



//# sourceMappingURL=de-DE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/el-GR.mjs
var $57ce5bfb234b266c$exports = {};
$57ce5bfb234b266c$exports = {
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



//# sourceMappingURL=el-GR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/en-US.mjs
var $2bdcc92d206ae897$exports = {};
$2bdcc92d206ae897$exports = {
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



//# sourceMappingURL=en-US.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/es-ES.mjs
var $05b3b7ff042563de$exports = {};
$05b3b7ff042563de$exports = {
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



//# sourceMappingURL=es-ES.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/et-EE.mjs
var $5ae036907590ca8d$exports = {};
$5ae036907590ca8d$exports = {
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



//# sourceMappingURL=et-EE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/fi-FI.mjs
var $f1b3c1991f38986b$exports = {};
$f1b3c1991f38986b$exports = {
    "buttonLabel": `N\xe4yt\xe4 ehdotukset`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} vaihtoehto`,
            other: ()=>`${formatter.number(args.optionCount)} vaihtoehtoa`
        })} saatavilla.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Siirtyi ryhm\xe4\xe4n ${args.groupTitle}, jossa ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} vaihtoehto`,
                    other: ()=>`${formatter.number(args.groupCount)} vaihtoehtoa`
                })}.`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valittu`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ehdotukset`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valittu`
};



//# sourceMappingURL=fi-FI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/fr-FR.mjs
var $7013cb8c11464d70$exports = {};
$7013cb8c11464d70$exports = {
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



//# sourceMappingURL=fr-FR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/he-IL.mjs
var $072bbd14cdc5486c$exports = {};
$072bbd14cdc5486c$exports = {
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



//# sourceMappingURL=he-IL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/hr-HR.mjs
var $0f316c1985a6fee3$exports = {};
$0f316c1985a6fee3$exports = {
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



//# sourceMappingURL=hr-HR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/hu-HU.mjs
var $ac61c1e7905e0d09$exports = {};
$ac61c1e7905e0d09$exports = {
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



//# sourceMappingURL=hu-HU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/it-IT.mjs
var $ecca75177af99ba0$exports = {};
$ecca75177af99ba0$exports = {
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



//# sourceMappingURL=it-IT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/ja-JP.mjs
var $8160c4de84c67861$exports = {};
$8160c4de84c67861$exports = {
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



//# sourceMappingURL=ja-JP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/ko-KR.mjs
var $1ef3deffd88c8b37$exports = {};
$1ef3deffd88c8b37$exports = {
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



//# sourceMappingURL=ko-KR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/lt-LT.mjs
var $78699a5d964b2618$exports = {};
$78699a5d964b2618$exports = {
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



//# sourceMappingURL=lt-LT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/lv-LV.mjs
var $f37ba73ed1338143$exports = {};
$f37ba73ed1338143$exports = {
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



//# sourceMappingURL=lv-LV.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/nb-NO.mjs
var $8a4e7bb0d7414172$exports = {};
$8a4e7bb0d7414172$exports = {
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



//# sourceMappingURL=nb-NO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/nl-NL.mjs
var $04d4b254da39a220$exports = {};
$04d4b254da39a220$exports = {
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



//# sourceMappingURL=nl-NL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/pl-PL.mjs
var $02691f952c80dd24$exports = {};
$02691f952c80dd24$exports = {
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



//# sourceMappingURL=pl-PL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/pt-BR.mjs
var $8fb4dd430e8c7c3f$exports = {};
$8fb4dd430e8c7c3f$exports = {
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



//# sourceMappingURL=pt-BR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/pt-PT.mjs
var $29daefa4936adb59$exports = {};
$29daefa4936adb59$exports = {
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



//# sourceMappingURL=pt-PT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/ro-RO.mjs
var $52a6b561e1fc9d26$exports = {};
$52a6b561e1fc9d26$exports = {
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



//# sourceMappingURL=ro-RO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/ru-RU.mjs
var $85a2d784d06219cd$exports = {};
$85a2d784d06219cd$exports = {
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



//# sourceMappingURL=ru-RU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/sk-SK.mjs
var $47782c12572523a2$exports = {};
$47782c12572523a2$exports = {
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



//# sourceMappingURL=sk-SK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/sl-SI.mjs
var $dc4a97a17026f14d$exports = {};
$dc4a97a17026f14d$exports = {
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



//# sourceMappingURL=sl-SI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/sr-SP.mjs
var $35792d4e62f2d9ad$exports = {};
$35792d4e62f2d9ad$exports = {
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



//# sourceMappingURL=sr-SP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/sv-SE.mjs
var $7fe78eec23a31941$exports = {};
$7fe78eec23a31941$exports = {
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



//# sourceMappingURL=sv-SE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/tr-TR.mjs
var $d89776e39290e23c$exports = {};
$d89776e39290e23c$exports = {
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



//# sourceMappingURL=tr-TR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/uk-UA.mjs
var $26dde2206a78f3a6$exports = {};
$26dde2206a78f3a6$exports = {
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



//# sourceMappingURL=uk-UA.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/zh-CN.mjs
var $5262194bce8d1b94$exports = {};
$5262194bce8d1b94$exports = {
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



//# sourceMappingURL=zh-CN.mjs.map

;// ./node_modules/react-aria/dist/private/intl/combobox/zh-TW.mjs
var $8ef2b23f73d70bf1$exports = {};
$8ef2b23f73d70bf1$exports = {
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



//# sourceMappingURL=zh-TW.mjs.map

;// ./node_modules/react-aria/dist/private/combobox/intlStrings.mjs



































var $4fbc67f91f577596$exports = {};


































$4fbc67f91f577596$exports = {
    "ar-AE": $44e96378ed9cec6d$exports,
    "bg-BG": $4f2abbace6d15464$exports,
    "cs-CZ": $c1cf508a70425b11$exports,
    "da-DK": $c6334dc4bef16229$exports,
    "de-DE": $3c1f280212fbe3e1$exports,
    "el-GR": $57ce5bfb234b266c$exports,
    "en-US": $2bdcc92d206ae897$exports,
    "es-ES": $05b3b7ff042563de$exports,
    "et-EE": $5ae036907590ca8d$exports,
    "fi-FI": $f1b3c1991f38986b$exports,
    "fr-FR": $7013cb8c11464d70$exports,
    "he-IL": $072bbd14cdc5486c$exports,
    "hr-HR": $0f316c1985a6fee3$exports,
    "hu-HU": $ac61c1e7905e0d09$exports,
    "it-IT": $ecca75177af99ba0$exports,
    "ja-JP": $8160c4de84c67861$exports,
    "ko-KR": $1ef3deffd88c8b37$exports,
    "lt-LT": $78699a5d964b2618$exports,
    "lv-LV": $f37ba73ed1338143$exports,
    "nb-NO": $8a4e7bb0d7414172$exports,
    "nl-NL": $04d4b254da39a220$exports,
    "pl-PL": $02691f952c80dd24$exports,
    "pt-BR": $8fb4dd430e8c7c3f$exports,
    "pt-PT": $29daefa4936adb59$exports,
    "ro-RO": $52a6b561e1fc9d26$exports,
    "ru-RU": $85a2d784d06219cd$exports,
    "sk-SK": $47782c12572523a2$exports,
    "sl-SI": $dc4a97a17026f14d$exports,
    "sr-SP": $35792d4e62f2d9ad$exports,
    "sv-SE": $7fe78eec23a31941$exports,
    "tr-TR": $d89776e39290e23c$exports,
    "uk-UA": $26dde2206a78f3a6$exports,
    "zh-CN": $5262194bce8d1b94$exports,
    "zh-TW": $8ef2b23f73d70bf1$exports
};



//# sourceMappingURL=intlStrings.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/platform.mjs
var platform = __webpack_require__(87082);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(88430);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(35692);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useEvent.mjs
var useEvent = __webpack_require__(49644);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useFormReset.mjs
var useFormReset = __webpack_require__(31199);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs + 2 modules
var useKeyboard = __webpack_require__(91357);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLabels.mjs
var useLabels = __webpack_require__(72765);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(57659);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/menu/useMenuTrigger.mjs + 36 modules
var useMenuTrigger = __webpack_require__(67680);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableCollection.mjs + 2 modules
var useSelectableCollection = __webpack_require__(68365);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/textfield/useTextField.mjs
var useTextField = __webpack_require__(65931);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useUpdateEffect.mjs
var useUpdateEffect = __webpack_require__(47148);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/collections/getChildNodes.mjs
var getChildNodes = __webpack_require__(20079);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/collections/getItemCount.mjs
var getItemCount = __webpack_require__(68276);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/form/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(19804);
;// ./node_modules/react-aria/dist/private/combobox/useComboBox.mjs





























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


























function $bf505c7417d9b616$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef, popoverRef: popoverRef, inputRef: inputRef, listBoxRef: listBoxRef, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap, isReadOnly: isReadOnly, isDisabled: isDisabled } = props;
    let backupBtnRef = (0, react.useRef)(null);
    buttonRef = buttonRef ?? backupBtnRef;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($4fbc67f91f577596$exports))), '@react-aria/combobox');
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, useMenuTrigger/* useMenuTrigger */.V)({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    (0, listbox_utils/* listData */.b).set(state, {
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
    // for textfield specific operations
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        shortcuts: {
            Enter: (e)=>{
                // Prevent default form submission if menu is open since we may be selecting a option
                let shouldPreventDefault = state.isOpen;
                // If the focused item is a link, trigger opening it. Items that are links are not selectable.
                if (state.isOpen && listBoxRef.current && state.selectionManager.focusedKey != null) {
                    let collectionItem = state.collection.getItem(state.selectionManager.focusedKey);
                    if (collectionItem?.props.href) {
                        let item = listBoxRef.current.querySelector(`[data-key="${CSS.escape(state.selectionManager.focusedKey.toString())}"]`);
                        if (item instanceof HTMLAnchorElement) router.open(item, e, collectionItem.props.href, collectionItem.props.routerOptions);
                        state.close();
                        return {
                            shouldPreventDefault: shouldPreventDefault
                        };
                    } else if (collectionItem?.props.onAction) {
                        collectionItem.props.onAction();
                        state.close();
                        return {
                            shouldPreventDefault: shouldPreventDefault
                        };
                    }
                }
                state.commit();
                return {
                    shouldPreventDefault: shouldPreventDefault
                };
            },
            Tab: ()=>{
                // If the focused item is a link, trigger opening it. Items that are links are not selectable.
                if (state.isOpen && listBoxRef.current && state.selectionManager.focusedKey != null) {
                    let collectionItem = state.collection.getItem(state.selectionManager.focusedKey);
                    if (collectionItem?.props.href) {
                        state.close();
                        return {
                            shouldPreventDefault: false
                        };
                    } else if (collectionItem?.props.onAction) {
                        collectionItem.props.onAction();
                        state.close();
                        return {
                            shouldPreventDefault: false,
                            shouldContinuePropagation: true
                        };
                    }
                }
                if (state.isOpen) state.commit();
                return {
                    shouldPreventDefault: false,
                    shouldContinuePropagation: true
                };
            },
            Escape: ()=>{
                let shouldContinuePropagation = false;
                if (!state.selectionManager.isEmpty || state.inputValue === '' || props.allowsCustomValue) shouldContinuePropagation = true;
                state.revert();
                return {
                    shouldContinuePropagation: shouldContinuePropagation
                };
            }
        }
    });
    let { keyboardProps: repeatKeyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        shortcuts: {
            ArrowDown: ()=>{
                state.open('first', 'manual');
                return {
                    shouldPreventDefault: false
                };
            },
            ArrowUp: ()=>{
                state.open('last', 'manual');
                return {
                    shouldPreventDefault: false
                };
            },
            ArrowLeft: ()=>{
                state.selectionManager.setFocusedKey(null);
                return {
                    shouldPreventDefault: false
                };
            },
            ArrowRight: ()=>{
                state.selectionManager.setFocusedKey(null);
                return {
                    shouldPreventDefault: false
                };
            }
        },
        allowRepeats: true
    });
    let onBlur = (e)=>{
        let blurFromButton = buttonRef?.current && buttonRef.current === e.relatedTarget;
        let blurIntoPopover = (0, DOMFunctions/* nodeContains */.sD)(popoverRef.current, e.relatedTarget);
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
    let valueId = $bf505c7417d9b616$var$useValueId([
        state.selectionManager.selectedKeys,
        state.selectionManager.selectionMode
    ]);
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useTextField/* useTextField */.v)({
        ...props,
        // In multi-select mode, only set required if the selection is empty.
        isRequired: props.selectionMode === 'multiple' ? props.isRequired && state.selectionManager.isEmpty : props.isRequired,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly ? (0, chain/* chain */.c)(state.isOpen && collectionProps.onKeyDown, keyboardProps.onKeyDown, repeatKeyboardProps.onKeyDown, props.onKeyDown) : props.onKeyDown,
        onBlur: onBlur,
        value: state.inputValue,
        defaultValue: state.defaultInputValue,
        onFocus: onFocus,
        autoComplete: 'off',
        validate: undefined,
        [(0, useFormValidationState/* privateValidationStateProp */.Lf)]: state,
        'aria-describedby': [
            valueId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    }, inputRef);
    (0, useFormReset/* useFormReset */.F)(inputRef, state.defaultValue, state.setValue);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === 'touch') {
            // Focus the input field in case it isn't focused yet
            inputRef.current?.focus();
            state.toggle(null, 'manual');
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== 'touch') {
            inputRef.current?.focus();
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
            e.preventDefault();
            inputRef.current?.focus();
            return;
        }
        let rect = (0, DOMFunctions/* getEventTarget */.wt)(e).getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + 0.5 * rect.width);
        let centerY = Math.ceil(rect.top + 0.5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            e.preventDefault();
            inputRef.current?.focus();
            state.toggle(null, 'manual');
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    let sectionKey = focusedItem?.parentKey ?? null;
    let itemKey = state.selectionManager.focusedKey ?? null;
    let lastSection = (0, react.useRef)(sectionKey);
    let lastItem = (0, react.useRef)(itemKey);
    (0, react.useEffect)(()=>{
        if ((0, platform/* isAppleDevice */.lg)() && focusedItem != null && itemKey != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = section?.['aria-label'] || (typeof section?.rendered === 'string' ? section.rendered : '') || '';
            let announcement = stringFormatter.format('focusAnnouncement', {
                isGroupChange: (section && sectionKey !== lastSection.current) ?? false,
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
    // TODO: do we need to do this for multi-select?
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
    (0, useEvent/* useEvent */._)(listBoxRef, 'react-aria-item-action', state.isOpen ? ()=>{
        state.close();
    } : undefined);
    return {
        labelProps: {
            ...labelProps,
            // Focus the input in case the label is not a native <label> element.
            onClick: 'htmlFor' in labelProps && labelProps.htmlFor || props.isDisabled ? undefined : ()=>{
                inputRef.current?.focus();
                (0, useFocusVisible/* setInteractionModality */.Cl)('keyboard');
            }
        },
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            preventFocusOnPress: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        // oxlint-disable-next-line react/react-compiler
        inputProps: (0, mergeProps/* mergeProps */.v)(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? (0, listbox_utils/* getItemId */.H)(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: (0, mergeProps/* mergeProps */.v)(menuProps, listBoxProps, {
            onAction: undefined,
            autoFocus: state.focusStrategy || true,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            linkBehavior: 'selection',
            ['UNSTABLE_itemBehavior']: 'action'
        }),
        valueProps: {
            id: valueId
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}
// This is a modified version of useSlotId that uses useEffect instead of useLayoutEffect.
// Triggering re-renders from useLayoutEffect breaks useComboBoxState's useEffect logic in React 18.
// These re-renders preempt async state updates in the useEffect, which ends up running multiple times
// prior to the state being updated. This results in onSelectionChange being called multiple times.
// TODO: refactor useComboBoxState to avoid this.
function $bf505c7417d9b616$var$useValueId(depArray = []) {
    let id = (0, useId/* useId */.Bi)();
    let [exists, setExists] = (0, react.useState)(true);
    let [lastDeps, setLastDeps] = (0, react.useState)(depArray);
    // If the deps changed, set exists to true so we can test whether the element exists.
    if (lastDeps.some((v, i)=>!Object.is(v, depArray[i]))) {
        setExists(true);
        setLastDeps(depArray);
    }
    (0, react.useEffect)(()=>{
        if (exists && !document.getElementById(id)) // oxlint-disable-next-line react/react-compiler
        setExists(false);
    }, [
        id,
        exists,
        lastDeps
    ]);
    return exists ? id : undefined;
}



//# sourceMappingURL=useComboBox.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(11513);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/list/ListCollection.mjs
var ListCollection = __webpack_require__(94447);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/list/useListState.mjs
var useListState = __webpack_require__(40447);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(42946);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
;// ./node_modules/react-stately/dist/private/combobox/useComboBoxState.mjs








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






function $120eca7b9c40f820$export$b453a3bfd4a5fa9e(props) {
    let { defaultFilter: defaultFilter, menuTrigger: menuTrigger = 'input', allowsEmptyCollection: allowsEmptyCollection = false, allowsCustomValue: allowsCustomValue, shouldCloseOnBlur: shouldCloseOnBlur = true, selectionMode: selectionMode = 'single' } = props;
    let [showAllItems, setShowAllItems] = (0, react.useState)(false);
    let [isFocused, setFocusedState] = (0, react.useState)(false);
    let [focusStrategy, setFocusStrategy] = (0, react.useState)(null);
    let defaultValue = (0, react.useMemo)(()=>{
        return props.defaultValue !== undefined ? props.defaultValue : selectionMode === 'single' ? props.defaultSelectedKey ?? null : [];
    }, [
        props.defaultValue,
        props.defaultSelectedKey,
        selectionMode
    ]);
    let value = (0, react.useMemo)(()=>{
        return props.value !== undefined ? props.value : selectionMode === 'single' ? props.selectedKey : undefined;
    }, [
        props.value,
        props.selectedKey,
        selectionMode
    ]);
    let [controlledValue, setControlledValue] = (0, useControlledState/* useControlledState */.P)(value, defaultValue, props.onChange);
    // Only display the first selected item if in single selection mode but the value is an array.
    let displayValue = selectionMode === 'single' && Array.isArray(controlledValue) ? controlledValue[0] : controlledValue;
    let setValue = (value)=>{
        if (selectionMode === 'single') {
            let key = Array.isArray(value) ? value[0] ?? null : value;
            setControlledValue(key);
            if (key !== displayValue) props.onSelectionChange?.(key);
        } else {
            let keys = [];
            if (Array.isArray(value)) keys = value;
            else if (value != null) keys = [
                value
            ];
            setControlledValue(keys);
        }
    };
    let { collection: collection, selectionManager: selectionManager, disabledKeys: disabledKeys } = (0, useListState/* useListState */.p)({
        ...props,
        items: props.items ?? props.defaultItems,
        selectionMode: selectionMode,
        disallowEmptySelection: selectionMode === 'single',
        allowDuplicateSelectionEvents: true,
        selectedKeys: (0, react.useMemo)(()=>$120eca7b9c40f820$var$convertValue(displayValue), [
            displayValue
        ]),
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            if (selectionMode === 'single') {
                let key = keys.values().next().value ?? null;
                if (key === displayValue) {
                    props.onSelectionChange?.(key);
                    // If key is the same, reset the inputValue and close the menu
                    // (scenario: user clicks on already selected option)
                    resetInputValue();
                    closeMenu();
                } else setValue(key);
            } else setValue([
                ...keys
            ]);
        }
    });
    let selectedKey = selectionMode === 'single' ? selectionManager.firstSelectedKey : null;
    let selectedItems = (0, react.useMemo)(()=>{
        return [
            ...selectionManager.selectedKeys
        ].map((key)=>collection.getItem(key)).filter((item)=>item != null);
    }, [
        selectionManager.selectedKeys,
        collection
    ]);
    let [inputValue, setInputValue] = (0, useControlledState/* useControlledState */.P)(props.inputValue, $120eca7b9c40f820$var$getDefaultInputValue(props.defaultInputValue, selectedKey, collection) || '', props.onInputChange);
    let [initialValue] = (0, react.useState)(displayValue);
    let [initialInputValue] = (0, react.useState)(inputValue);
    // Preserve original collection so we can show all items on demand
    let originalCollection = collection;
    let filteredCollection = (0, react.useMemo)(()=>// No default filter if items are controlled.
        props.items != null || !defaultFilter ? collection : $120eca7b9c40f820$var$filterCollection(collection, inputValue, defaultFilter), [
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
        let itemText = selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '';
        setLastValue(itemText);
        setInputValue(itemText);
    };
    let lastValueRef = (0, react.useRef)(displayValue);
    let lastSelectedKeyText = (0, react.useRef)(selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '');
    // intentional omit dependency array, want this to happen on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react.useEffect)(()=>{
        // Open and close menu automatically when the input value changes if the input is focused,
        // and there are items in the collection or allowEmptyCollection is true.
        if (isFocused && (filteredCollection.size > 0 || allowsEmptyCollection) && !triggerState.isOpen && inputValue !== lastValue && menuTrigger !== 'manual') // oxlint-disable-next-line react/react-compiler
        open(null, 'input');
        // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
        // but we are currently showing all items via button press
        if (!showAllItems && !allowsEmptyCollection && triggerState.isOpen && filteredCollection.size === 0) closeMenu();
        // Close when an item is selected.
        if (displayValue != null && displayValue !== lastValueRef.current && selectionMode === 'single') closeMenu();
        // Clear focused key when input value changes and display filtered collection again.
        if (inputValue !== lastValue) {
            selectionManager.setFocusedKey(null);
            setShowAllItems(false);
            // Set value to null when the user clears the input.
            // If controlled, this is the application developer's responsibility.
            if (selectionMode === 'single' && inputValue === '' && (props.inputValue === undefined || value === undefined)) setValue(null);
        }
        // If the value changed, update the input value.
        // Do nothing if both inputValue and value are controlled.
        // In this case, it's the user's responsibility to update inputValue in onSelectionChange.
        if (displayValue !== lastValueRef.current && (props.inputValue === undefined || value === undefined)) resetInputValue();
        else if (lastValue !== inputValue) setLastValue(inputValue);
        // Update the inputValue if the selected item's text changes from its last tracked value.
        // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
        // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
        // If inputValue is controlled, it is the user's responsibility to update the inputValue when items change.
        let selectedItemText = selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '';
        if (!isFocused && selectedKey != null && props.inputValue === undefined && selectedKey === lastValueRef.current) {
            if (lastSelectedKeyText.current !== selectedItemText) {
                setLastValue(selectedItemText);
                setInputValue(selectedItemText);
            }
        }
        lastValueRef.current = displayValue;
        lastSelectedKeyText.current = selectedItemText;
    });
    let validation = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: (0, react.useMemo)(()=>Array.isArray(displayValue) && displayValue.length === 0 ? null : {
                inputValue: inputValue,
                value: displayValue,
                selectedKey: selectedKey
            }, [
            inputValue,
            selectedKey,
            displayValue
        ])
    });
    // Revert input value and close menu
    let revert = ()=>{
        if (allowsCustomValue && selectedKey == null) commitCustomValue();
        else commitSelection();
    };
    let commitCustomValue = ()=>{
        if (selectionMode === 'multiple') {
            // In multi-select mode, the input's custom text is independent from the selected items.
            // Closing or committing the field should not clear the existing selection.
            setLastValue(inputValue);
            closeMenu();
            return;
        }
        let value = null;
        lastValueRef.current = value;
        setValue(value);
        closeMenu();
    };
    let commitSelection = (shouldForceSelectionChange = false)=>{
        // If multiple things are controlled, call onSelectionChange only when selecting the focused item,
        // or when inputValue needs to be synced back to the selected item on commit/blur.
        if (value !== undefined && props.inputValue !== undefined) {
            let itemText = selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '';
            if (shouldForceSelectionChange || selectionMode === 'multiple' || inputValue !== itemText) {
                props.onSelectionChange?.(selectedKey);
                props.onChange?.(displayValue);
            }
            // Stop menu from reopening from useEffect
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
            const itemText = selectedKey != null ? collection.getItem(selectedKey)?.textValue ?? '' : '';
            inputValue === itemText ? commitSelection() : commitCustomValue();
        } else // Reset inputValue and close menu
        commitSelection();
    };
    let commit = ()=>{
        if (triggerState.isOpen && selectionManager.focusedKey != null) {
            // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
            // fire onSelectionChange to allow the application to control the closing.
            if (selectionManager.isSelected(selectionManager.focusedKey) && selectionMode === 'single') commitSelection(true);
            else selectionManager.select(selectionManager.focusedKey);
        } else commitValue();
    };
    let valueOnFocus = (0, react.useRef)([
        inputValue,
        displayValue
    ]);
    let setFocused = (isFocused)=>{
        if (isFocused) {
            valueOnFocus.current = [
                inputValue,
                displayValue
            ];
            if (menuTrigger === 'focus' && !props.isReadOnly) open(null, 'focus');
        } else {
            if (shouldCloseOnBlur) commitValue();
            // Commit validation if the input value or selected items changed.
            if (inputValue !== valueOnFocus.current[0] || displayValue !== valueOnFocus.current[1]) validation.commitValidation();
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
    let defaultSelectedKey = props.defaultSelectedKey ?? (selectionMode === 'single' ? initialValue : null);
    return {
        ...validation,
        ...triggerState,
        focusStrategy: focusStrategy,
        toggle: toggle,
        open: open,
        close: commitValue,
        selectionManager: selectionManager,
        value: displayValue,
        defaultValue: defaultValue ?? initialValue,
        setValue: setValue,
        selectedKey: selectedKey,
        selectedItems: selectedItems,
        defaultSelectedKey: defaultSelectedKey,
        setSelectedKey: setValue,
        disabledKeys: disabledKeys,
        isFocused: isFocused,
        setFocused: setFocused,
        selectedItem: selectedItems[0] ?? null,
        collection: displayedCollection,
        inputValue: inputValue,
        defaultInputValue: $120eca7b9c40f820$var$getDefaultInputValue(props.defaultInputValue, defaultSelectedKey, collection) ?? initialInputValue,
        setInputValue: setInputValue,
        commit: commit,
        revert: revert
    };
}
function $120eca7b9c40f820$var$filterCollection(collection, inputValue, filter) {
    return new (0, ListCollection/* ListCollection */.J)($120eca7b9c40f820$var$filterNodes(collection, collection, inputValue, filter));
}
function $120eca7b9c40f820$var$filterNodes(collection, nodes, inputValue, filter) {
    let filteredNode = [];
    for (let node of nodes){
        if (node.type === 'section' && node.hasChildNodes) {
            let filtered = $120eca7b9c40f820$var$filterNodes(collection, (0, getChildNodes/* getChildNodes */.iQ)(node, collection), inputValue, filter);
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
function $120eca7b9c40f820$var$getDefaultInputValue(defaultInputValue, selectedKey, collection) {
    if (defaultInputValue == null) {
        if (selectedKey != null) return collection.getItem(selectedKey)?.textValue ?? '';
    }
    return defaultInputValue;
}
function $120eca7b9c40f820$var$convertValue(value) {
    if (value === undefined) return undefined;
    if (value === null) return [];
    return Array.isArray(value) ? value : [
        value
    ];
}



//# sourceMappingURL=useComboBoxState.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/Hidden.mjs
var Hidden = __webpack_require__(61207);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/useFilter.mjs
var useFilter = __webpack_require__(22707);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(10494);
;// ./node_modules/react-aria-components/dist/private/ComboBox.mjs
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$29f1550f4b0d4415;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$4d86445c2cf5e3;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$df3a06d6289f983e;
/* unused harmony import specifier */ var $er33p$createHideableComponent;
/* unused harmony import specifier */ var $er33p$filterDOMProps;
/* unused harmony import specifier */ var $er33p$useContext;
/* unused harmony import specifier */ var $er33p$useMemo;
/* unused harmony import specifier */ var $er33p$react;
/* unused harmony import specifier */ var $er33p$useListFormatter;






















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




















const $dbdc5e6e7ce01b4b$export$d414ccceff7063c3 = /*#__PURE__*/ (0, react.createContext)(null);
const $dbdc5e6e7ce01b4b$export$c02625b26074192c = /*#__PURE__*/ (0, react.createContext)(null);
const $dbdc5e6e7ce01b4b$export$72b9695b8216309a = /*#__PURE__*/ (0, Hidden/* createHideableComponent */.U7)(function ComboBox(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $dbdc5e6e7ce01b4b$export$d414ccceff7063c3);
    let { children: children, isDisabled: isDisabled = false, isInvalid: isInvalid = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false } = props;
    let content = (0, react.useMemo)(()=>/*#__PURE__*/ (0, react).createElement((0, ListBox/* ListBoxContext */.JC).Provider, {
            value: {
                items: props.items ?? props.defaultItems
            }
        }, typeof children === 'function' ? children({
            isOpen: false,
            isDisabled: isDisabled,
            isInvalid: isInvalid,
            isRequired: isRequired,
            defaultChildren: null,
            isReadOnly: isReadOnly
        }) : children), [
        children,
        isDisabled,
        isInvalid,
        isRequired,
        isReadOnly,
        props.items,
        props.defaultItems
    ]);
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: content
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($dbdc5e6e7ce01b4b$var$ComboBoxInner, {
            props: props,
            collection: collection,
            comboBoxRef: ref
        }));
});
// Contexts to clear inside the popover.
const $dbdc5e6e7ce01b4b$var$CLEAR_CONTEXTS = [
    (0, Label/* LabelContext */.I),
    (0, Button/* ButtonContext */.k),
    (0, Input/* InputContext */.E),
    (0, Autocomplete/* FieldInputContext */.wv),
    (0, Group/* GroupContext */.t),
    (0, Text/* TextContext */.h)
];
function $dbdc5e6e7ce01b4b$var$ComboBoxInner({ props: props, collection: collection, comboBoxRef: ref }) {
    let { name: name, formValue: formValue = 'key', allowsCustomValue: allowsCustomValue } = props;
    if (allowsCustomValue) formValue = 'text';
    let { validationBehavior: formValidationBehavior } = (0, utils/* useSlottedContext */.CC)((0, Form/* FormContext */.c)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let { contains: contains } = (0, useFilter/* useFilter */.U)({
        sensitivity: 'base'
    });
    let state = (0, $120eca7b9c40f820$export$b453a3bfd4a5fa9e)({
        ...props,
        defaultFilter: props.defaultFilter || contains,
        // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
        items: props.items,
        children: undefined,
        collection: collection,
        validationBehavior: validationBehavior
    });
    let buttonRef = (0, react.useRef)(null);
    let inputRef = (0, react.useRef)(null);
    let groupRef = (0, react.useRef)(null);
    let listBoxRef = (0, react.useRef)(null);
    let popoverRef = (0, react.useRef)(null);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let [labelElementType, setLabelElementType] = (0, react.useState)('label');
    let { buttonProps: buttonProps, inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, valueProps: valueProps, ...validation } = (0, $bf505c7417d9b616$export$8c18d1b4f7232bbf)({
        ...(0, utils/* removeDataAttributes */.SK)(props),
        label: label,
        inputRef: inputRef,
        buttonRef: buttonRef,
        listBoxRef: listBoxRef,
        popoverRef: popoverRef,
        name: formValue === 'text' ? name : undefined,
        validationBehavior: validationBehavior,
        labelElementType: labelElementType
    }, state);
    // Make menu width match input + button
    // Left for backward compatibility in case a <Group> is not rendered.
    let [menuWidth, setMenuWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (inputRef.current && !groupRef.current) {
            let buttonRect = buttonRef.current?.getBoundingClientRect();
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
    // Position popover relative to group if available, otherwise input.
    let triggerRef = (0, react.useMemo)(()=>({
            get current () {
                return groupRef.current || inputRef.current;
            }
        }), // oxlint-disable-next-line react/react-compiler
    [
        groupRef,
        inputRef
    ]);
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, react.useMemo)(()=>({
            isOpen: state.isOpen,
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isRequired: props.isRequired || false,
            isReadOnly: props.isReadOnly || false
        }), [
        state.isOpen,
        props.isDisabled,
        validation.isInvalid,
        props.isRequired,
        props.isReadOnly
    ]);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: renderPropsState,
        defaultClassName: 'react-aria-ComboBox'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    let inputs = [];
    if (name && formValue === 'key') {
        let values = Array.isArray(state.value) ? state.value : [
            state.value
        ];
        if (values.length === 0) values = [
            null
        ];
        inputs = values.map((value, i)=>/*#__PURE__*/ (0, react).createElement("input", {
                key: i,
                type: "hidden",
                name: name,
                form: props.form,
                value: value ?? ''
            }));
    }
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $dbdc5e6e7ce01b4b$export$c02625b26074192c,
                state
            ],
            [
                (0, Label/* LabelContext */.I),
                {
                    ...labelProps,
                    elementType: labelElementType,
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
                (0, Autocomplete/* FieldInputContext */.wv),
                {
                    ...inputProps,
                    ref: (0, react.useCallback)((el)=>{
                        inputRef.current = el; // TODO: figure out how to fix non-input element types in useComboBox/useTextField
                        if (el) setLabelElementType(el.tagName.toLowerCase() === 'input' ? 'label' : 'span');
                    }, []),
                    value: state.inputValue,
                    onChange: (v)=>state.setInputValue(v)
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
                    triggerRef: triggerRef,
                    scrollRef: listBoxRef,
                    placement: 'bottom start',
                    isNonModal: true,
                    trigger: 'ComboBox',
                    style: {
                        '--trigger-width': menuWidth
                    },
                    clearContexts: $dbdc5e6e7ce01b4b$var$CLEAR_CONTEXTS
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
                    ref: groupRef,
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, FieldError/* FieldErrorContext */.C),
                validation
            ],
            [
                $dbdc5e6e7ce01b4b$export$5c804022b41722df,
                valueProps
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": state.isFocused || undefined,
        "data-open": state.isOpen || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }, renderProps.children, inputs));
}
const $dbdc5e6e7ce01b4b$export$5c804022b41722df = /*#__PURE__*/ (0, react.createContext)(null);
const $dbdc5e6e7ce01b4b$export$3527949051a2d3a = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $er33p$createHideableComponent)(function ComboBoxValue(props, ref) {
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(props, ref, $dbdc5e6e7ce01b4b$export$5c804022b41722df);
    let state = (0, $er33p$useContext)($dbdc5e6e7ce01b4b$export$c02625b26074192c);
    let formatter = (0, $er33p$useListFormatter)();
    let selectedText = (0, $er33p$useMemo)(()=>formatter.format(state.selectedItems.map((item)=>item?.textValue || '').filter((v)=>v !== '')), [
        formatter,
        state.selectedItems
    ]);
    let renderProps = (0, $7230ffa83bc0c2cf$export$4d86445c2cf5e3)({
        ...props,
        defaultChildren: selectedText || props.placeholder,
        defaultClassName: 'react-aria-ComboBoxValue',
        values: {
            selectedItems: (0, $er33p$useMemo)(()=>state.selectedItems.map((item)=>item.value ?? null), [
                state.selectedItems
            ]),
            selectedText: selectedText,
            isPlaceholder: state.selectedItems.length === 0,
            state: state
        }
    });
    let DOMProps = (0, $er33p$filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, $er33p$react).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).div, {
        ref: ref,
        ...DOMProps,
        ...renderProps,
        "data-placeholder": state.selectedItems.length === 0 || undefined
    });
})));



//# sourceMappingURL=ComboBox.mjs.map


/***/ },

/***/ 88928
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U5: () => (/* binding */ $f9554a667e4f0374$export$f55761759794cf55),
/* harmony export */   Ux: () => (/* binding */ $f9554a667e4f0374$export$d188a835a7bc5783),
/* harmony export */   XW: () => (/* binding */ $f9554a667e4f0374$export$d1e8e3fbb7461f6),
/* harmony export */   oC: () => (/* binding */ $f9554a667e4f0374$export$971707d8a129a1f7)
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
const $f9554a667e4f0374$export$d188a835a7bc5783 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $f9554a667e4f0374$export$f55761759794cf55 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $f9554a667e4f0374$export$62ed72bc21f6b8a6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function DropIndicator(props, ref) {
    let { render: render } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f9554a667e4f0374$export$f55761759794cf55);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, render(props, ref));
});
function $f9554a667e4f0374$export$971707d8a129a1f7(dragAndDropHooks, dropState) {
    let renderDropIndicator = dragAndDropHooks?.renderDropIndicator;
    let isVirtualDragging = dragAndDropHooks?.isVirtualDragging?.();
    let fn = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target)=>{
        // Only show drop indicators when virtual dragging or this is the current drop target.
        // oxlint-disable-next-line react/react-compiler
        if (isVirtualDragging || dropState?.isDropTarget(target)) return renderDropIndicator ? renderDropIndicator(target) : /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f9554a667e4f0374$export$62ed72bc21f6b8a6, {
            target: target
        });
    }, // We invalidate whenever the target changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        dropState?.target,
        isVirtualDragging,
        renderDropIndicator
    ]);
    return dragAndDropHooks?.useDropIndicator ? fn : undefined;
}
function $f9554a667e4f0374$export$d1e8e3fbb7461f6(selectionManager, dragAndDropHooks, dropState) {
    // Persist the focused key and the drop target key.
    let focusedKey = selectionManager.focusedKey;
    let dropTargetKey = null;
    if (dragAndDropHooks?.isVirtualDragging?.() && dropState?.target?.type === 'item') {
        dropTargetKey = dropState.target.key;
        if (dropState.target.dropPosition === 'after') {
            // Normalize to the "before" drop position since we only render those to the DOM.
            let nextKey = dropState.collection.getKeyAfter(dropTargetKey);
            let lastDescendantKey = null;
            if (nextKey != null) {
                let targetLevel = dropState.collection.getItem(dropTargetKey)?.level ?? 0;
                // Skip over any rows that are descendants of the target ("after" position should be after all children)
                while(nextKey != null){
                    let node = dropState.collection.getItem(nextKey);
                    // eslint-disable-next-line max-depth
                    if (!node) break;
                    // Skip over non-item nodes (e.g., loaders) since they can't be drop targets.
                    // eslint-disable-next-line max-depth
                    if (node.type !== 'item') {
                        nextKey = dropState.collection.getKeyAfter(nextKey);
                        continue;
                    }
                    // Stop once we find an item at the same level or higher
                    // eslint-disable-next-line max-depth
                    if ((node.level ?? 0) <= targetLevel) break;
                    lastDescendantKey = nextKey;
                    nextKey = dropState.collection.getKeyAfter(nextKey);
                }
            }
            // If nextKey is null (end of collection), use the last descendant
            dropTargetKey = nextKey ?? lastDescendantKey ?? dropTargetKey;
        }
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



//# sourceMappingURL=DragAndDrop.mjs.map


/***/ },

/***/ 45439
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $3a442827418ebe87$export$eb2fcfdbd7ba97d4),
/* harmony export */   t: () => (/* binding */ $3a442827418ebe87$export$f9c6924e160136d1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react_aria_useHover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68068);
/* harmony import */ var react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66683);






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




const $3a442827418ebe87$export$f9c6924e160136d1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
const $3a442827418ebe87$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $3a442827418ebe87$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, isReadOnly: isReadOnly, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    isDisabled ??= !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid ??= !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria_useHover__WEBPACK_IMPORTED_MODULE_1__/* .useHover */ .M)({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)({
        within: true
    });
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
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
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).div, {
        ...(0, react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: props.role ?? 'group',
        slot: props.slot ?? undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined,
        "data-readonly": isReadOnly || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Group.mjs.map


/***/ },

/***/ 36594
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $41fb335299a4a39e$export$37fb8590cf2c088c),
/* harmony export */   p: () => (/* binding */ $41fb335299a4a39e$export$f5b8910cec6cf069)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61207);
/* harmony import */ var react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66683);
/* harmony import */ var react_aria_useHover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68068);







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





const $41fb335299a4a39e$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
let $41fb335299a4a39e$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $41fb335299a4a39e$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Input(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $41fb335299a4a39e$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria_useHover__WEBPACK_IMPORTED_MODULE_5__/* .useHover */ .M)({
        ...props,
        isDisabled: props.disabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
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
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).input, {
        ...(0, react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)($41fb335299a4a39e$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=Input.mjs.map


/***/ },

/***/ 22707
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ $ef182bb9912241d8$export$3274cf84b703fff)
/* harmony export */ });
/* harmony import */ var _useCollator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15435);
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

function $ef182bb9912241d8$export$3274cf84b703fff(options) {
    let collator = (0, _useCollator_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useCollator */ .Q)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((string, substring)=>{
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
    return (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}



//# sourceMappingURL=useFilter.mjs.map


/***/ },

/***/ 80439
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $191c9b6d48a0a4e2$export$294aa081a6c6f55d)
/* harmony export */ });
/* harmony import */ var _useLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60741);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47425);
/* harmony import */ var _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19633);




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


function $191c9b6d48a0a4e2$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, _useLabel_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLabel */ .M)(props);
    let descriptionId = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlotId */ .X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlotId */ .X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}



//# sourceMappingURL=useField.mjs.map


/***/ },

/***/ 65931
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $054f71d2330da2e3$export$712718f7aec83d5)
/* harmony export */ });
/* harmony import */ var _utils_filterDOMProps_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46683);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62975);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);
/* harmony import */ var _label_useField_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80439);
/* harmony import */ var _interactions_useFocusable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55602);
/* harmony import */ var _utils_useFormReset_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31199);
/* harmony import */ var _form_useFormValidation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99276);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96540);
/* harmony import */ var react_stately_useControlledState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32240);
/* harmony import */ var react_stately_private_form_useFormValidationState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19804);











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









function $054f71d2330da2e3$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, react_stately_useControlledState__WEBPACK_IMPORTED_MODULE_8__/* .useControlledState */ .P)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, _interactions_useFocusable_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useFocusable */ .Wc)(props, ref);
    let validationState = (0, react_stately_private_form_useFormValidationState__WEBPACK_IMPORTED_MODULE_9__/* .useFormValidationState */ .KZ)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _label_useField_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useField */ .M)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _utils_filterDOMProps_mjs__WEBPACK_IMPORTED_MODULE_0__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_7__.useState)(value);
    (0, _utils_useFormReset_mjs__WEBPACK_IMPORTED_MODULE_5__/* .useFormReset */ .F)(ref, props.defaultValue ?? initialValue, setValue);
    (0, _form_useFormValidation_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useFormValidation */ .X)(props, validationState, ref);
    return {
        labelProps: labelProps,
        inputProps: (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
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
            onChange: (e)=>setValue((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e).value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            form: props.form,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            autoCorrect: props.autoCorrect,
            spellCheck: props.spellCheck,
            [parseInt((0, react__WEBPACK_IMPORTED_MODULE_7__).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
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



//# sourceMappingURL=useTextField.mjs.map


/***/ },

/***/ 22868
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $b24d1bc31a0f941d$export$a9d04c5684123369)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



function $b24d1bc31a0f941d$export$a9d04c5684123369(value) {
    const pieces = (0, react__WEBPACK_IMPORTED_MODULE_0__.version).split('.');
    const major = parseInt(pieces[0], 10);
    if (major >= 19) return value;
    // compatibility with React < 19
    return value ? 'true' : undefined;
}



//# sourceMappingURL=inertValue.mjs.map


/***/ },

/***/ 93323
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ $0407362eaf54473e$export$ccaea96c28e8b9e7)
/* harmony export */ });
/* harmony import */ var _getScrollParent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99597);
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83265);
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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



function $0407362eaf54473e$export$ccaea96c28e8b9e7(props, ref) {
    let { collection: collection, onLoadMore: onLoadMore, scrollOffset: scrollOffset = 1, direction: direction = 'end' } = props;
    let sentinelObserver = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    let triggerLoadMore = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .J)((entries)=>{
        // Use "isIntersecting" over an equality check of 0 since it seems like there is cases where
        // a intersection ratio of 0 can be reported when isIntersecting is actually true
        for (let entry of entries)// Note that this will be called if the collection changes, even if onLoadMore was already called and is being processed.
        // Up to user discretion as to how to handle these multiple onLoadMore calls
        if (entry.isIntersecting && onLoadMore) onLoadMore();
    });
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useLayoutEffect */ .N)(()=>{
        if (ref.current) {
            // Tear down and set up a new IntersectionObserver when the collection changes so that we can properly trigger additional loadMores if there is room for more items
            // Need to do this tear down and set up since using a large rootMargin will mean the observer's callback isn't called even when scrolling the item into view beause its visibility hasn't actually changed
            // https://codesandbox.io/p/sandbox/magical-swanson-dhgp89?file=%2Fsrc%2FApp.js%3A21%2C21
            const margin = 100 * scrollOffset;
            // For direction='start', right/left margins have no affect for vertical scroll containers. We are not supporting reverse horizontal scroll containers for now.
            const rootMargin = direction === 'start' ? `${margin}% 0px 0px 0px` : `0px ${margin}% ${margin}% ${margin}%`;
            sentinelObserver.current = new IntersectionObserver(triggerLoadMore, {
                root: (0, _getScrollParent_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getScrollParent */ .m)(ref?.current),
                rootMargin: rootMargin
            });
            sentinelObserver.current.observe(ref.current);
        }
        return ()=>{
            if (sentinelObserver.current) sentinelObserver.current.disconnect();
        };
    }, [
        collection,
        ref,
        scrollOffset,
        direction
    ]);
}



//# sourceMappingURL=useLoadMoreSentinel.mjs.map


/***/ },

/***/ 47148
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ $3c71b1595a147f24$export$496315a1608d9602)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83265);
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

function $3c71b1595a147f24$export$496315a1608d9602(cb, dependencies) {
    const isInitialMount = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const lastDeps = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let cbEvent = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useEffectEvent */ .J)(cb);
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let prevDeps = lastDeps.current;
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!prevDeps || dependencies.some((dep, i)=>!Object.is(dep, prevDeps[i]))) cbEvent();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



//# sourceMappingURL=useUpdateEffect.mjs.map


/***/ },

/***/ 73577
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ $c73d3f3d5ec90946$export$bc3384a35de93d66)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-stately/dist/private/data/useListData.mjs
/* unused harmony import specifier */ var $3Jrml$useState;
/* unused harmony import specifier */ var $3Jrml$useMemo;


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
function $232f8dea1b0a4f2f$export$762f73dccccd255d(options) {
    let { initialItems: initialItems = [], initialSelectedKeys: initialSelectedKeys, getKey: getKey = (item)=>item.id ?? item.key, filter: filter, initialFilterText: initialFilterText = '' } = options;
    // Store both items and filteredItems in state so we can go back to the unfiltered list
    let [state, setState] = (0, $3Jrml$useState)({
        items: initialItems,
        selectedKeys: initialSelectedKeys === 'all' ? 'all' : new Set(initialSelectedKeys || []),
        filterText: initialFilterText
    });
    let filteredItems = (0, $3Jrml$useMemo)(()=>filter ? state.items.filter((item)=>filter(item, state.filterText)) : state.items, [
        state.items,
        state.filterText,
        filter
    ]);
    return {
        ...state,
        items: filteredItems,
        ...$232f8dea1b0a4f2f$export$79c0c687a5963b0a({
            getKey: getKey
        }, setState),
        getItem (key) {
            return state.items.find((item)=>getKey(item) === key);
        }
    };
}
function $232f8dea1b0a4f2f$export$79c0c687a5963b0a(opts, dispatch) {
    let { cursor: cursor, getKey: getKey } = opts;
    return {
        setSelectedKeys (selectedKeys) {
            dispatch((state)=>({
                    ...state,
                    selectedKeys: selectedKeys
                }));
        },
        addKeysToSelection (selectedKeys) {
            dispatch((state)=>{
                if (state.selectedKeys === 'all') return state;
                if (selectedKeys === 'all') return {
                    ...state,
                    selectedKeys: 'all'
                };
                return {
                    ...state,
                    selectedKeys: new Set([
                        ...state.selectedKeys,
                        ...selectedKeys
                    ])
                };
            });
        },
        removeKeysFromSelection (selectedKeys) {
            dispatch((state)=>{
                if (selectedKeys === 'all') return {
                    ...state,
                    selectedKeys: new Set()
                };
                let selection = state.selectedKeys === 'all' ? new Set(state.items.map(getKey)) : new Set(state.selectedKeys);
                for (let key of selectedKeys)selection.delete(key);
                return {
                    ...state,
                    selectedKeys: selection
                };
            });
        },
        setFilterText (filterText) {
            dispatch((state)=>({
                    ...state,
                    filterText: filterText
                }));
        },
        insert (index, ...values) {
            dispatch((state)=>$232f8dea1b0a4f2f$var$insert(state, index, ...values));
        },
        insertBefore (key, ...values) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey?.(item) === key);
                if (index === -1) {
                    if (state.items.length === 0) index = 0;
                    else return state;
                }
                return $232f8dea1b0a4f2f$var$insert(state, index, ...values);
            });
        },
        insertAfter (key, ...values) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey?.(item) === key);
                if (index === -1) {
                    if (state.items.length === 0) index = 0;
                    else return state;
                }
                return $232f8dea1b0a4f2f$var$insert(state, index + 1, ...values);
            });
        },
        prepend (...values) {
            dispatch((state)=>$232f8dea1b0a4f2f$var$insert(state, 0, ...values));
        },
        append (...values) {
            dispatch((state)=>$232f8dea1b0a4f2f$var$insert(state, state.items.length, ...values));
        },
        remove (...keys) {
            dispatch((state)=>{
                let keySet = new Set(keys);
                let items = state.items.filter((item)=>!keySet.has(getKey(item)));
                let selection = 'all';
                if (state.selectedKeys !== 'all') {
                    selection = new Set(state.selectedKeys);
                    for (let key of keys)selection.delete(key);
                }
                if (cursor == null && items.length === 0) selection = new Set();
                return {
                    ...state,
                    items: items,
                    selectedKeys: selection
                };
            });
        },
        removeSelectedItems () {
            dispatch((state)=>{
                if (state.selectedKeys === 'all') return {
                    ...state,
                    items: [],
                    selectedKeys: new Set()
                };
                let selectedKeys = state.selectedKeys;
                let items = state.items.filter((item)=>!selectedKeys.has(getKey(item)));
                return {
                    ...state,
                    items: items,
                    selectedKeys: new Set()
                };
            });
        },
        move (key, toIndex) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key);
                if (index === -1) return state;
                let copy = state.items.slice();
                let [item] = copy.splice(index, 1);
                copy.splice(toIndex, 0, item);
                return {
                    ...state,
                    items: copy
                };
            });
        },
        moveBefore (key, keys) {
            dispatch((state)=>{
                let toIndex = state.items.findIndex((item)=>getKey(item) === key);
                if (toIndex === -1) return state;
                // Find indices of keys to move. Sort them so that the order in the list is retained.
                let keyArray = Array.isArray(keys) ? keys : [
                    ...keys
                ];
                let indices = keyArray.map((key)=>state.items.findIndex((item)=>getKey(item) === key)).sort((a, b)=>a - b);
                return $232f8dea1b0a4f2f$var$move(state, indices, toIndex);
            });
        },
        moveAfter (key, keys) {
            dispatch((state)=>{
                let toIndex = state.items.findIndex((item)=>getKey(item) === key);
                if (toIndex === -1) return state;
                let keyArray = Array.isArray(keys) ? keys : [
                    ...keys
                ];
                let indices = keyArray.map((key)=>state.items.findIndex((item)=>getKey(item) === key)).sort((a, b)=>a - b);
                return $232f8dea1b0a4f2f$var$move(state, indices, toIndex + 1);
            });
        },
        update (key, newValue) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key);
                if (index === -1) return state;
                let updatedValue;
                if (typeof newValue === 'function') updatedValue = newValue(state.items[index]);
                else updatedValue = newValue;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, index),
                        updatedValue,
                        ...state.items.slice(index + 1)
                    ]
                };
            });
        }
    };
}
function $232f8dea1b0a4f2f$var$insert(state, index, ...values) {
    return {
        ...state,
        items: [
            ...state.items.slice(0, index),
            ...values,
            ...state.items.slice(index)
        ]
    };
}
function $232f8dea1b0a4f2f$var$move(state, indices, toIndex) {
    // Shift the target down by the number of items being moved from before the target
    toIndex -= indices.filter((index)=>index < toIndex).length;
    let moves = indices.map((from)=>({
            from: from,
            to: toIndex++
        }));
    // Shift later from indices down if they have a larger index
    for(let i = 0; i < moves.length; i++){
        let a = moves[i].from;
        for(let j = i; j < moves.length; j++){
            let b = moves[j].from;
            if (b > a) moves[j].from--;
        }
    }
    // Interleave the moves so they can be applied one by one rather than all at once
    for(let i = 0; i < moves.length; i++){
        let a = moves[i];
        for(let j = moves.length - 1; j > i; j--){
            let b = moves[j];
            if (b.from < a.to) a.to++;
            else b.from++;
        }
    }
    let copy = state.items.slice();
    for (let move of moves){
        let [item] = copy.splice(move.from, 1);
        copy.splice(move.to, 0, item);
    }
    return {
        ...state,
        items: copy
    };
}



//# sourceMappingURL=useListData.mjs.map

;// ./node_modules/react-stately/dist/private/data/useAsyncList.mjs



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

function $c73d3f3d5ec90946$var$reducer(data, action) {
    let selectedKeys;
    switch(data.state){
        case 'idle':
        case 'error':
            switch(action.type){
                case 'loading':
                case 'loadingMore':
                case 'sorting':
                case 'filtering':
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: action.abortController
                    };
                case 'update':
                    return {
                        ...data,
                        ...action.updater?.(data)
                    };
                case 'success':
                case 'error':
                    return data;
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        case 'loading':
        case 'sorting':
        case 'filtering':
            switch(action.type){
                case 'success':
                    // Ignore if there is a newer abortcontroller in state.
                    // This means that multiple requests were going at once.
                    // We want to take only the latest result.
                    if (action.abortController !== data.abortController) return data;
                    selectedKeys = action.selectedKeys ?? data.selectedKeys;
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: 'idle',
                        items: [
                            ...action.items ?? []
                        ],
                        selectedKeys: selectedKeys === 'all' ? 'all' : new Set(selectedKeys),
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: undefined,
                        cursor: action.cursor
                    };
                case 'error':
                    if (action.abortController !== data.abortController) return data;
                    return {
                        ...data,
                        state: 'error',
                        error: action.error,
                        abortController: undefined
                    };
                case 'loading':
                case 'loadingMore':
                case 'sorting':
                case 'filtering':
                    // We're already loading, and another load was triggered at the same time.
                    // We need to abort the previous load and start a new one.
                    data.abortController?.abort('aborting current load and starting new one');
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        abortController: action.abortController
                    };
                case 'update':
                    // We're already loading, and an update happened at the same time (e.g. selectedKey changed).
                    // Update data but don't abort previous load.
                    return {
                        ...data,
                        ...action.updater?.(data)
                    };
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        case 'loadingMore':
            switch(action.type){
                case 'success':
                    selectedKeys = data.selectedKeys === 'all' || action.selectedKeys === 'all' ? 'all' : new Set([
                        ...data.selectedKeys,
                        ...action.selectedKeys ?? []
                    ]);
                    // Append the new items
                    return {
                        ...data,
                        state: 'idle',
                        items: [
                            ...data.items,
                            ...action.items ?? []
                        ],
                        selectedKeys: selectedKeys,
                        sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                        abortController: undefined,
                        cursor: action.cursor
                    };
                case 'error':
                    if (action.abortController !== data.abortController) return data;
                    return {
                        ...data,
                        state: 'error',
                        error: action.error
                    };
                case 'loading':
                case 'sorting':
                case 'filtering':
                    // We're already loading more, and another load was triggered at the same time.
                    // We need to abort the previous load more and start a new one.
                    data.abortController?.abort();
                    return {
                        ...data,
                        filterText: action.filterText ?? data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        abortController: action.abortController
                    };
                case 'loadingMore':
                    // If already loading more and another loading more is triggered, abort the new load more since
                    // it is a duplicate request since the cursor hasn't been updated.
                    // Do not overwrite the data.abortController
                    action.abortController?.abort();
                    return data;
                case 'update':
                    // We're already loading, and an update happened at the same time (e.g. selectedKey changed).
                    // Update data but don't abort previous load.
                    return {
                        ...data,
                        ...action.updater?.(data)
                    };
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        default:
            throw new Error(`Invalid state "${data.state}"`);
    }
}
function $c73d3f3d5ec90946$export$bc3384a35de93d66(options) {
    const { load: load, sort: sort, initialSelectedKeys: initialSelectedKeys, initialSortDescriptor: initialSortDescriptor, getKey: getKey = (item)=>item.id || item.key, initialFilterText: initialFilterText = '' } = options;
    let [data, dispatch] = (0, react.useReducer)($c73d3f3d5ec90946$var$reducer, {
        state: 'idle',
        error: undefined,
        items: [],
        selectedKeys: initialSelectedKeys === 'all' ? 'all' : new Set(initialSelectedKeys),
        sortDescriptor: initialSortDescriptor,
        filterText: initialFilterText
    });
    const dispatchFetch = async (action, fn)=>{
        let abortController = new AbortController();
        try {
            dispatch({
                ...action,
                abortController: abortController
            });
            let previousFilterText = action.filterText ?? data.filterText;
            let response = await fn({
                items: data.items.slice(),
                selectedKeys: data.selectedKeys,
                sortDescriptor: action.sortDescriptor ?? data.sortDescriptor,
                signal: abortController.signal,
                cursor: action.type === 'loadingMore' ? data.cursor : undefined,
                filterText: previousFilterText,
                loadingState: data.state
            });
            let filterText = response.filterText ?? previousFilterText;
            dispatch({
                type: 'success',
                ...response,
                abortController: abortController
            });
            // Fetch a new filtered list if filterText is updated via `load` response func rather than list.setFilterText
            // Only do this if not aborted (e.g. user triggers another filter action before load completes)
            if (filterText && filterText !== previousFilterText && !abortController.signal.aborted) dispatchFetch({
                type: 'filtering',
                filterText: filterText
            }, load);
        } catch (e) {
            dispatch({
                type: 'error',
                error: e,
                abortController: abortController
            });
        }
    };
    let didDispatchInitialFetch = (0, react.useRef)(false);
    (0, react.useEffect)(()=>{
        if (!didDispatchInitialFetch.current) {
            dispatchFetch({
                type: 'loading'
            }, load);
            didDispatchInitialFetch.current = true;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        items: data.items,
        selectedKeys: data.selectedKeys,
        sortDescriptor: data.sortDescriptor,
        isLoading: data.state === 'loading' || data.state === 'loadingMore' || data.state === 'sorting' || data.state === 'filtering',
        loadingState: data.state,
        error: data.error,
        filterText: data.filterText,
        getItem (key) {
            return data.items.find((item)=>getKey(item) === key);
        },
        reload () {
            dispatchFetch({
                type: 'loading'
            }, load);
        },
        loadMore () {
            // Ignore if already loading more or if performing server side filtering.
            if (data.state === 'loading' || data.state === 'loadingMore' || data.state === 'filtering' || data.cursor == null) return;
            dispatchFetch({
                type: 'loadingMore'
            }, load);
        },
        sort (sortDescriptor) {
            dispatchFetch({
                type: 'sorting',
                sortDescriptor: sortDescriptor
            }, sort || load);
        },
        ...(0, $232f8dea1b0a4f2f$export$79c0c687a5963b0a)({
            ...options,
            getKey: getKey,
            cursor: data.cursor
        }, (fn)=>{
            dispatch({
                type: 'update',
                updater: fn
            });
        }),
        setFilterText (filterText) {
            dispatchFetch({
                type: 'filtering',
                filterText: filterText
            }, load);
        }
    };
}



//# sourceMappingURL=useAsyncList.mjs.map


/***/ }

}]);