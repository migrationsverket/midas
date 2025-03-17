"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5521],{

/***/ 13208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Example: () => (/* binding */ Example),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_modal_mdx_902_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-modal-mdx-902.json
const site_docs_components_modal_mdx_902_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/modal","title":"Modal","description":"Modal som lägger sig över allt annat innehåll.","source":"@site/docs/components/modal.mdx","sourceDirName":"components","slug":"/components/modal","permalink":"/pr-preview/pr-304/components/modal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Modal","description":"Modal som lägger sig över allt annat innehåll.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(38355);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/ariaHideOutside.mjs
var ariaHideOutside = __webpack_require__(2269);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlay.mjs + 1 modules
var useOverlay = __webpack_require__(90757);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/Overlay.mjs + 1 modules
var Overlay = __webpack_require__(75963);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/usePreventScroll.mjs
var usePreventScroll = __webpack_require__(20445);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/overlays/dist/useModalOverlay.mjs







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





function $8ac8429251c45e4b$export$dbc0f175b25fb0fb(props, state, ref) {
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, useOverlay/* useOverlay */.e)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    (0, usePreventScroll/* usePreventScroll */.H)({
        isDisabled: !state.isOpen
    });
    (0, Overlay/* useOverlayFocusContain */.Se)();
    (0, react.useEffect)(()=>{
        if (state.isOpen && ref.current) return (0, ariaHideOutside/* ariaHideOutside */.h)([
            ref.current
        ]);
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: (0, mergeProps/* mergeProps */.v)(overlayProps),
        underlayProps: underlayProps
    };
}



//# sourceMappingURL=useModalOverlay.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlayTrigger.mjs
var useOverlayTrigger = __webpack_require__(26940);
// EXTERNAL MODULE: ./node_modules/@react-aria/dialog/dist/useDialog.mjs
var useDialog = __webpack_require__(4681);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
;// ./packages/components/src/modal/Dialog.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Dialog_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-01":"light-dark(#f2f2f2, #262626)","--background-01":"light-dark(#ffffff, #171717)","--text-primary":"light-dark(#171717, #f2f2f2)","modal":"modal_yuES","overlay":"overlay_eZeP","modalHeader":"modalHeader_B1eE","modalBody":"modalBody_FPgg","modalHeading":"modalHeading_rV3b"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/modal/Dialog.tsx
var _excluded=["title","children"],_excluded2=["state","children"],_excluded3=["label","children"];var Dialog=function Dialog(_ref){var title=_ref.title,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var ref=react.useRef(null);var _useDialog=(0,useDialog/* useDialog */.s)(props,ref),dialogProps=_useDialog.dialogProps,titleProps=_useDialog.titleProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},dialogProps,{ref:ref,className:Dialog_module.modalBody,"aria-modal":true,children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("h2",Object.assign({},titleProps,{className:(0,clsx/* default */.A)(Dialog_module.modalHeading,titleProps.className),children:title})),children]}));};var Modal=function Modal(_ref2){var state=_ref2.state,children=_ref2.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useModalOverlay=$8ac8429251c45e4b$export$dbc0f175b25fb0fb(props,state,ref),modalProps=_useModalOverlay.modalProps,underlayProps=_useModalOverlay.underlayProps;return/*#__PURE__*/(0,jsx_runtime.jsx)(Overlay/* Overlay */.hJ,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},underlayProps,{className:(0,clsx/* default */.A)(Dialog_module.overlay,underlayProps.className),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},modalProps,{className:(0,clsx/* default */.A)(Dialog_module.modal,modalProps.className),ref:ref,children:children}))}))});};var ModalTrigger=function ModalTrigger(_ref3){var label=_ref3.label,children=_ref3.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var state=(0,useOverlayTriggerState/* useOverlayTriggerState */.T)(props);var _useOverlayTrigger=(0,useOverlayTrigger/* useOverlayTrigger */.o)({type:'dialog'},state),triggerProps=_useOverlayTrigger.triggerProps,overlayProps=_useOverlayTrigger.overlayProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({},triggerProps,{children:label})),state.isOpen&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Modal,Object.assign({},props,{state:state,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Dialog_module.modalHeader,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:state.close,variant:"tertiary",icon:x/* default */.A,iconPlacement:"right",children:"St\xE4ng"})}),/*#__PURE__*/react.cloneElement(children(state.close),overlayProps)]}))]});};
// EXTERNAL MODULE: ./packages/components/src/flex/Flex.tsx
var Flex = __webpack_require__(39996);
// EXTERNAL MODULE: ./packages/components/src/flex/FlexItem.tsx
var FlexItem = __webpack_require__(52981);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 10 modules
var Select = __webpack_require__(81732);
// EXTERNAL MODULE: ./packages/components/src/textarea/TextArea.tsx + 1 modules
var TextArea = __webpack_require__(75756);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var Heading = __webpack_require__(57936);
;// ./apps/docs/docs/components/modal.mdx


const frontMatter = {
	title: 'Modal',
	description: 'Modal som lägger sig över allt annat innehåll.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Button: Button/* Button */.$,
      ModalTrigger: ModalTrigger,
      Dialog: Dialog,
      Flex: Flex/* Flex */.s,
      FlexItem: FlexItem/* FlexItem */.Z,
      Select: Select/* Select */.l
    },
    ...props,
    children: `<>
            <ModalTrigger
        label={'Radera frukter'}
        isDismissable={true}
      >
        {(close) => (
          <Dialog title='Vill du radera alla frukter?'>
          <p>Är du säker? De går inte att återskapa.</p>
          <Flex fluid={true}>
            <FlexItem col='auto'>
            <Button
              variant={'danger'}
              onPress={close}
            >
              Radera frukter
            </Button>
            </FlexItem>
            <FlexItem col='auto'>
             <Button
              variant={'secondary'}
              onPress={close}
            >
              Avbryt
            </Button>
            </FlexItem>
            </Flex>
          </Dialog>
        )}
      </ModalTrigger>
        </>`
  });
};
const toc = [{
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Avancerat innehåll",
  "id": "avancerat-innehåll",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Modal',
      friendlyName: "Modal, Dialog, Dialogruta",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/useDialog.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modaler lägger sig över allt annat innehåll för att fokusera användarens fokus på en sak."
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideCode: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-och-användning",
      children: "Installation och användning"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/components\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ModalTrigger, Dialog } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isOpen"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onOpenChange"
      }), " för att kontrollera om modalen är öppen eller stängd. För att stänga modal via klick utanför\nmodalens yta, sätt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isDismissable={true}"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avancerat-innehåll",
      children: "Avancerat innehåll"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modaler kan även innehålla mer avancerat innehåll som ett formulär. Använd då autoFocus på första element för att användarens fokus ska flyttas dit när modalen öppnas."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Button: Button/* Button */.$,
        ModalTrigger: ModalTrigger,
        Dialog: Dialog,
        Flex: Flex/* Flex */.s,
        FlexItem: FlexItem/* FlexItem */.Z,
        Heading: Heading/* Heading */.D,
        Select: Select/* Select */.l,
        TextArea: TextArea/* TextArea */.f
      },
      children: `<>
     <ModalTrigger
      label={'Öppna modal'}
      isDismissable={true}
    >
      {(close) => (
        <Dialog title='Vill du avsluta uppdraget?'>
        <Flex fluid={true} style={{marginBottom: '1rem'}}>
        <FlexItem col>
        <TextArea label={'Ange anledning'} description={'Skriv anledning'} maxCharacters={100} autoFocus />
        </FlexItem>
        </Flex>
        <Flex fluid={true}>
          <FlexItem col='auto'>
          <Button
            onPress={close}
          >
            Spara korrespondens
          </Button>
          </FlexItem>
          <FlexItem col='auto'>
           <Button
            variant={'secondary'}
            onPress={close}
          >
            Avbryt
          </Button>
          </FlexItem>
          </Flex>
        </Dialog>
      )}
    </ModalTrigger>
      </>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "ModalTrigger"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 81732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select)
});

// UNUSED EXPORTS: SelectComponent

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useButton.mjs
var useButton = __webpack_require__(69229);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusRing.mjs
var FocusRing = __webpack_require__(8494);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/Section.mjs
var Section = __webpack_require__(72487);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/Item.mjs
var Item = __webpack_require__(48639);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var dist_TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useOption.mjs
var useOption = __webpack_require__(407);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useListBoxSection.mjs
var useListBoxSection = __webpack_require__(72016);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useListBox.mjs
var useListBox = __webpack_require__(77059);
;// ./packages/components/src/select/Select.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-strong":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px white, 0 0 0 4px black","--layer-02":"light-dark(#ffffff, #383838)","--border-invalid":"light-dark(#e62323, #e62323)","--layer-hover-02":"light-dark(#e6e6e6, #474747)","--layer-selected-02":"light-dark(#d9d9d9, #525252)","--layer-selected-hover-02":"light-dark(#cccccc, #5d5d5d)","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--field-disabled":"light-dark(#f2f2f2, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--text-invalid":"light-dark(#e62323, #e62323)","selectAllButton":"selectAllButton_vETM","selectLabel":"selectLabel_ym7d","selectLabelDisabled":"selectLabelDisabled_q13p","button":"button_qOaA","buttonOpen":"buttonOpen_JL6G","icon":"icon_roiA","buttonDisabled":"buttonDisabled_hGbG","multiSelect":"multiSelect_fCqw","description":"description_Zgpc","descriptionInvalid":"descriptionInvalid_GyuZ","descriptionDisabled":"descriptionDisabled_gloN","popover":"popover_Bl6D","listBox":"listBox_BiFm","listBoxItem":"listBoxItem_yOJV","listBoxItemSelected":"listBoxItemSelected_USLD","listBoxItemDisabled":"listBoxItemDisabled_IkTb","listBoxItemFocused":"listBoxItemFocused_dAO1","listBoxItemFocusVisible":"listBoxItemFocusVisible_SKwl","listBoxItemCheckmark":"listBoxItemCheckmark_Dz5t","selectContainer":"selectContainer_ChZ6","selectValueTag":"selectValueTag_Bx1C","selectValueTagDisabled":"selectValueTagDisabled_hNWH","truncate":"truncate_J6cE","clearButton":"clearButton_p8du","fieldError":"fieldError_DzbR","checkboxContainer":"checkboxContainer_u2A7","checkbox":"checkbox_BLsk"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/select/SelectListBox.tsx
var Option=function Option(_ref){var _clsx;var item=_ref.item,state=_ref.state;var ref=react.useRef(null);var _useOption=(0,useOption/* useOption */.x)({key:item.key},state,ref),optionProps=_useOption.optionProps,isDisabled=_useOption.isDisabled,isSelected=_useOption.isSelected,isFocused=_useOption.isFocused,isFocusVisible=_useOption.isFocusVisible;return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",Object.assign({},optionProps,{ref:ref,className:(0,clsx/* default */.A)(Select_module.listBoxItem,(_clsx={},_clsx[Select_module.listBoxItemDisabled]=isDisabled,_clsx[Select_module.listBoxItemFocused]=isFocused,_clsx[Select_module.listBoxItemFocusVisible]=isFocusVisible,_clsx[Select_module.listBoxItemSelected]=isSelected,_clsx)),children:[state.selectionMode==='multiple'&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:Select_module.checkbox,type:"checkbox",disabled:isDisabled,checked:isSelected,readOnly:true})}),typeof item.rendered==='string'?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"truncate block",children:item.rendered}):item.rendered,isSelected&&state.selectionMode==='single'?/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:20,className:Select_module.listBoxItemCheckmark}):null]}));};var SelectListBox_Section=function Section(_ref2){var section=_ref2.section,state=_ref2.state;var _useListBoxSection=(0,useListBoxSection/* useListBoxSection */.u)({heading:section.rendered,'aria-label':section['aria-label']}),itemProps=_useListBoxSection.itemProps,headingProps=_useListBoxSection.headingProps,groupProps=_useListBoxSection.groupProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",Object.assign({},itemProps,{className:'',children:[section.rendered&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},headingProps,{className:Select_module.selectSectionHeading,children:section.rendered})),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},groupProps,{children:Array.from(section.childNodes).map(function(node){return/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:node,state:state},node.key);})}))]}));};var SelectListBox=function SelectListBox(props){var ref=react.useRef(null);var _props$listBoxRef=props.listBoxRef,listBoxRef=_props$listBoxRef===void 0?ref:_props$listBoxRef,state=props.state;var _useListBox=(0,useListBox/* useListBox */.X)(Object.assign({},props,{// When Select is clearable, do not clear the selection once ESC key is pressed, see https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/selection/src/useSelectableCollection.ts#L226
disallowEmptySelection:true}),state,listBoxRef),listBoxProps=_useListBox.listBoxProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},listBoxProps,{className:Select_module.listBox,ref:listBoxRef,children:Array.from(state.collection).map(function(item){return item.type==='section'?/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox_Section,{section:item,state:state},item.key):/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:item,state:state},item.key);})}));};
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(68305);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlay.mjs + 1 modules
var useOverlay = __webpack_require__(90757);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlayPosition.mjs + 1 modules
var useOverlayPosition = __webpack_require__(31364);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useModal.mjs
var useModal = __webpack_require__(59875);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/DismissButton.mjs + 35 modules
var DismissButton = __webpack_require__(91821);
;// ./packages/components/src/select/SelectPopover.tsx
var SelectPopover=function SelectPopover(_ref){var _Object$assign;var isOpen=_ref.isOpen,onClose=_ref.onClose,children=_ref.children,className=_ref.className,triggerRef=_ref.triggerRef;var ref=react.useRef(null);var _useOverlay=(0,useOverlay/* useOverlay */.e)({isOpen:isOpen,onClose:onClose,isDismissable:true,shouldCloseOnBlur:true},ref),overlayProps=_useOverlay.overlayProps;var _useOverlayPosition=(0,useOverlayPosition/* useOverlayPosition */.v)({isOpen:isOpen,offset:0,crossOffset:0,containerPadding:0,overlayRef:ref,targetRef:triggerRef,placement:'bottom start'}),positionProps=_useOverlayPosition.overlayProps,updatePosition=_useOverlayPosition.updatePosition;// TODO: Remove once this is solved https://github.com/adobe/react-spectrum/blob/9ca62f94405cb8b930bd155f6e44c4854f0a20f3/packages/@react-spectrum/picker/src/Picker.tsx#L99
react.useLayoutEffect(function(){if(isOpen){requestAnimationFrame(function(){updatePosition();});}},[isOpen,updatePosition]);var style=Object.assign({},positionProps.style,(_Object$assign={},_Object$assign["--select-width"]=triggerRef.current?triggerRef.current.offsetWidth+"px":undefined,_Object$assign));return/*#__PURE__*/(0,jsx_runtime.jsx)(useModal/* OverlayContainer */.Sf,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},(0,mergeProps/* mergeProps */.v)(overlayProps,positionProps),{ref:ref,className:className,style:style,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(FocusScope/* FocusScope */.n1,{restoreFocus:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DismissButton/* DismissButton */.R,{onDismiss:onClose}),children,/*#__PURE__*/(0,jsx_runtime.jsx)(DismissButton/* DismissButton */.R,{onDismiss:onClose})]})}))});};
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useCollator.mjs
var useCollator = __webpack_require__(82627);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useField.mjs
var useField = __webpack_require__(85441);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs + 35 modules
var useMenuTrigger = __webpack_require__(25263);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useTypeSelect.mjs
var useTypeSelect = __webpack_require__(18399);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
;// ./packages/components/src/select/useMultiSelect.ts
function useMultiSelect(props,state,ref){var disallowEmptySelection=props.disallowEmptySelection,isDisabled=props.isDisabled;var collator=(0,useCollator/* useCollator */.Q)({usage:'search',sensitivity:'base'});var delegate=(0,react.useMemo)(function(){return new ListKeyboardDelegate/* ListKeyboardDelegate */.n(state.collection,state.disabledKeys,null,collator);},[state.collection,state.disabledKeys,collator]);var _useMenuTrigger=(0,useMenuTrigger/* useMenuTrigger */.V)({isDisabled:isDisabled,type:'listbox'},state,ref),menuTriggerProps=_useMenuTrigger.menuTriggerProps,menuProps=_useMenuTrigger.menuProps;var triggerOnKeyDown=function triggerOnKeyDown(e){var selectedKeys=state.selectedKeys,selectionMode=state.selectionMode;var firstKey=selectedKeys.values().next().value;// Select items when trigger has focus - imitating default `<select>` behaviour.
// In multi selection mode it does not make sense.
if(selectionMode==='single'){switch(e.key){case'ArrowLeft':{// prevent scrolling containers
e.preventDefault();var key=selectedKeys.size>0?delegate.getKeyAbove(firstKey):delegate.getFirstKey();if(key){state.setSelectedKeys([key]);}break;}case'ArrowRight':{// prevent scrolling containers
e.preventDefault();var _key=selectedKeys.size>0?delegate.getKeyBelow(firstKey):delegate.getFirstKey();if(_key){state.setSelectedKeys([_key]);}break;}// no default
}}};// Typeahead functionality - imitating default `<select>` behaviour.
var _useTypeSelect=(0,useTypeSelect/* useTypeSelect */.I)({keyboardDelegate:delegate,selectionManager:state.selectionManager,onTypeSelect:function onTypeSelect(key){state.setSelectedKeys([key]);}}),typeSelectProps=_useTypeSelect.typeSelectProps;var _useField=(0,useField/* useField */.M)(Object.assign({},props,{labelElementType:'span'})),labelProps=_useField.labelProps,fieldProps=_useField.fieldProps;typeSelectProps.onKeyDown=typeSelectProps.onKeyDownCapture;delete typeSelectProps.onKeyDownCapture;var domProps=(0,filterDOMProps/* filterDOMProps */.$)(props,{labelable:true});var triggerProps=(0,mergeProps/* mergeProps */.v)(typeSelectProps,menuTriggerProps,fieldProps);var valueId=(0,useId/* useId */.Bi)();return{labelProps:Object.assign({},labelProps,{onClick:function onClick(){if(!props.isDisabled){var _ref$current;(_ref$current=ref.current)==null||_ref$current.focus();// Show the focus ring so the user knows where focus went
(0,useFocusVisible/* setInteractionModality */.Cl)('keyboard');}}}),triggerProps:(0,mergeProps/* mergeProps */.v)(domProps,Object.assign({},triggerProps,{onKeyDown:(0,chain/* chain */.c)(triggerProps.onKeyDown,triggerOnKeyDown,props.onKeyDown),onKeyUp:props.onKeyUp,'aria-labelledby':[triggerProps['aria-labelledby'],triggerProps['aria-label']&&!triggerProps['aria-labelledby']?triggerProps.id:null,valueId].filter(Boolean).join(' '),onFocus:function onFocus(e){if(state.isFocused){return;}if(props.onFocus){props.onFocus(e);}state.setFocused(true);},onBlur:function onBlur(e){if(state.isOpen){return;}if(props.onBlur){props.onBlur(e);}state.setFocused(false);}})),valueProps:{id:valueId},menuProps:Object.assign({},menuProps,{disallowEmptySelection:disallowEmptySelection,autoFocus:state.focusStrategy||true,shouldSelectOnPressUp:true,shouldFocusOnHover:true,onBlur:function onBlur(e){if(e.currentTarget.contains(e.relatedTarget)){return;}if(props.onBlur){props.onBlur(e);}state.setFocused(false);},'aria-labelledby':[fieldProps['aria-labelledby'],triggerProps['aria-label']&&!fieldProps['aria-labelledby']?triggerProps.id:null].filter(Boolean).join(' ')})};}
// EXTERNAL MODULE: ./node_modules/@react-stately/menu/dist/useMenuTriggerState.mjs
var useMenuTriggerState = __webpack_require__(55745);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useListState.mjs
var useListState = __webpack_require__(46655);
;// ./packages/components/src/select/useMultiSelectListState.ts
function useMultiSelectListState(props){var _useListState=(0,useListState/* useListState */.p)(props),collection=_useListState.collection,disabledKeys=_useListState.disabledKeys,selectionManager=_useListState.selectionManager,_useListState$selecti=_useListState.selectionManager,setSelectedKeys=_useListState$selecti.setSelectedKeys,selectedKeys=_useListState$selecti.selectedKeys,selectionMode=_useListState$selecti.selectionMode;var missingKeys=[];var selectedItems=selectedKeys.size!==0?Array.from(selectedKeys).map(function(key){var item=collection.getItem(key);if(!item){missingKeys.push(key);}return item;})// Remove undefined values when some keys are not present in the collection
.filter(Boolean):null;if(missingKeys.length){// eslint-disable-next-line no-console
console.warn("Select: Keys \""+missingKeys.join(', ')+"\" passed to \"selectedKeys\" are not present in the collection.");}return{collection:collection,disabledKeys:disabledKeys,selectionManager:selectionManager,selectionMode:selectionMode,selectedKeys:selectedKeys,setSelectedKeys:setSelectedKeys.bind(selectionManager),selectedItems:selectedItems};}
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
;// ./packages/components/src/select/useMultiSelectState.ts
/** Added this for a better output, will see how this plays out */function useMultiSelectState(props){var _listState$selectedKe;var selectionMode=props.selectionMode;var _useState=(0,react.useState)(false),isFocused=_useState[0],setFocused=_useState[1];var triggerState=(0,useMenuTriggerState/* useMenuTriggerState */.I)(props);var listState=useMultiSelectListState(Object.assign({},props,{onSelectionChange:function onSelectionChange(keys){var onSelectionChange=props.onSelectionChange;if(onSelectionChange!=null){if(keys==='all'){// This may change back to "all" once we will implement async loading of additional
// items and differentiation between "select all" vs. "select visible".
onSelectionChange(Array.from(listState.collection.getKeys()));}else{selectionMode==='single'?onSelectionChange(keys.values().next().value):onSelectionChange(Array.from(keys));}}// Multi select stays open after item selection
if(selectionMode==='single'){triggerState.close();}}}));var validationState=(0,useFormValidationState/* useFormValidationState */.KZ)(Object.assign({},props,{validationBehavior:'native',value:selectionMode==='single'?(_listState$selectedKe=listState.selectedKeys.values().next().value)==null?void 0:_listState$selectedKe.toString():listState.selectedKeys}));// Reset validation for single selects when the selected key changes.
(0,react.useEffect)(function(){if(selectionMode==='single'&&listState.selectedKeys.size){validationState.resetValidation();validationState.commitValidation();}},[listState.selectedKeys.size,selectionMode,validationState]);return Object.assign({},listState,triggerState,{close:function close(){triggerState.close();if(listState.selectedKeys.size){validationState.resetValidation();validationState.commitValidation();}},open:function open(){// Don't open if the collection is empty.
if(listState.collection.size!==0){triggerState.open();}},toggle:function toggle(focusStrategy){if(listState.collection.size!==0){triggerState.toggle(focusStrategy);}},isFocused:isFocused,setFocused:setFocused},validationState);}
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
;// ./packages/components/src/tag/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--text-disabled":"light-dark(#bfbfbf, #525252)","--field-active-01":"light-dark(#d9d9d9, #383838)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--icon-primary":"light-dark(#171717, #f2f2f2)","button":"button_Loby","tag":"tag_WAeO","dismissable":"dismissable_Tfml","tagText":"tagText_f_lx","tagList":"tagList_sxPC"});
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
;// ./packages/components/src/tag/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable","className"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,className=_ref2.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"small",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};
;// ./packages/components/src/utils/useObserveElement.tsx
function useObserveElement(element){var debounce=function debounce(callback,delay){var timeout;return function(entries,observer){clearTimeout(timeout);timeout=setTimeout(function(){callback(entries,observer);},delay);};};var _useState=(0,react.useState)(0),width=_useState[0],setWidth=_useState[1];var _useState2=(0,react.useState)(0),height=_useState2[0],setHeight=_useState2[1];(0,react.useEffect)(function(){if(!element)return;var resizeObserver=new ResizeObserver(debounce(function(entries){var _entries$0$contentBox=entries[0].contentBoxSize[0],inlineSize=_entries$0$contentBox.inlineSize,blockSize=_entries$0$contentBox.blockSize;setWidth(inlineSize);setHeight(blockSize);},500));resizeObserver.observe(element);return function(){resizeObserver.disconnect();};},[element]);return{width:width,height:height};}
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useFormReset.mjs
var useFormReset = __webpack_require__(8343);
// EXTERNAL MODULE: ./node_modules/@react-aria/form/dist/useFormValidation.mjs
var useFormValidation = __webpack_require__(48868);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
;// ./packages/components/src/select/HiddenMultiSelect.tsx
/**
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */function useHiddenMultiSelect(_ref,state,triggerRef){var _state$selectedKeys$v;var autoComplete=_ref.autoComplete,name=_ref.name,isDisabled=_ref.isDisabled,isRequired=_ref.isRequired,selectRef=_ref.selectRef;var _useVisuallyHidden=(0,VisuallyHidden/* useVisuallyHidden */.B)(),visuallyHiddenProps=_useVisuallyHidden.visuallyHiddenProps;(0,useFormReset/* useFormReset */.F)(selectRef,state.selectedKeys,state.setSelectedKeys);(0,useFormValidation/* useFormValidation */.X)({validationBehavior:'native',focus:function focus(){var _triggerRef$current;return(_triggerRef$current=triggerRef.current)==null?void 0:_triggerRef$current.focus();}},state,selectRef);// In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
// In Firefox, there must be a <label> to identify the <select> whereas other browsers
// seem to identify it just by surrounding text.
// The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
// 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
// non tabbable with tabIndex={-1}.
return{containerProps:Object.assign({},visuallyHiddenProps,{'aria-hidden':true,// @ts-expect-error - data-a11y-ignore is not a standard attribute
'data-react-aria-prevent-focus':true,'data-a11y-ignore':'aria-hidden-focus'}),inputProps:{style:{display:'none'}},selectProps:{tabIndex:-1,autoComplete:autoComplete,disabled:isDisabled,required:isRequired,name:name,value:state.selectionMode==='single'?(_state$selectedKeys$v=state.selectedKeys.values().next().value)==null?void 0:_state$selectedKeys$v.toString():Array.from(state.selectedKeys).map(function(key){return key.toString();}),onChange:function onChange(e){return state.setSelectedKeys(e.target.value);}}};}/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */function HiddenMultiSelect(props){var state=props.state,triggerRef=props.triggerRef,label=props.label,name=props.name,isDisabled=props.isDisabled;var selectRef=(0,react.useRef)(null);var _useHiddenMultiSelect=useHiddenMultiSelect(Object.assign({},props,{selectRef:selectRef}),state,triggerRef),containerProps=_useHiddenMultiSelect.containerProps,selectProps=_useHiddenMultiSelect.selectProps;// If used in a <form>, use a hidden input so the value can be submitted to a server.
// If the collection isn't too big, use a hidden <select> element for this so that browser
// autofill will work. Otherwise, use an <input type="hidden">.
if(state.collection.size<=300){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},containerProps,{"data-testid":"hidden-select-container",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{children:[label,/*#__PURE__*/(0,jsx_runtime.jsxs)("select",Object.assign({},selectProps,{ref:selectRef,multiple:state.selectionMode==='multiple',children:[/*#__PURE__*/(0,jsx_runtime.jsx)("option",{}),[].concat(state.collection.getKeys()).map(function(key){var item=state.collection.getItem(key);if(item&&item.type==='item'){return/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:item.key,children:item.textValue},item.key);}return null;})]}))]})}));}else if(name){var _state$selectedKeys$v2,_state$selectedKeys$v3,_Array$from$map;return/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"hidden",autoComplete:selectProps.autoComplete,name:name,disabled:isDisabled,value:state.selectionMode==='single'?(_state$selectedKeys$v2=(_state$selectedKeys$v3=state.selectedKeys.values().next().value)==null?void 0:_state$selectedKeys$v3.toString())!=null?_state$selectedKeys$v2:'':(_Array$from$map=Array.from(state.selectedKeys).map(function(key){return key.toString();}))!=null?_Array$from$map:''});}return null;}
;// ./packages/components/src/select/Select.tsx
var Select_excluded=["selectionMode"],Select_excluded2=["options"];var SelectComponent=/*#__PURE__*/react.forwardRef(function(_ref,forwardedRef){var _clsx2,_clsx3,_clsx4,_clsx5,_state$selectedItems;var _ref$selectionMode=_ref.selectionMode,selectionMode=_ref$selectionMode===void 0?'single':_ref$selectionMode,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Select_excluded);var props=Object.assign({selectionMode:selectionMode},rest);var autoFocus=props.autoFocus,className=props.className,excludeFromTabOrder=props.excludeFromTabOrder,_props$isClearable=props.isClearable,isClearable=_props$isClearable===void 0?true:_props$isClearable,isDisabled=props.isDisabled,isSelectableAll=props.isSelectableAll,label=props.label,description=props.description,placeholder=props.placeholder,showTags=props.showTags,errorMessage=props.errorMessage;var refAllButton=(0,react.useRef)(null);var ref=(0,useObjectRef/* useObjectRef */.U)(forwardedRef);var disallowEmptySelection=!isClearable;var state=useMultiSelectState(Object.assign({},props,{disallowEmptySelection:disallowEmptySelection}));var _useMultiSelect=useMultiSelect(Object.assign({},props,{disallowEmptySelection:disallowEmptySelection}),state,ref),labelProps=_useMultiSelect.labelProps,triggerProps=_useMultiSelect.triggerProps,valueProps=_useMultiSelect.valueProps,menuProps=_useMultiSelect.menuProps;var _useButton=(0,useButton/* useButton */.s)(Object.assign({},triggerProps,{autoFocus:autoFocus,excludeFromTabOrder:excludeFromTabOrder,isDisabled:isDisabled}),ref),buttonProps=_useButton.buttonProps;var isActive=state.isOpen||state.selectedItems;var isAllSelection=state.selectionManager.isSelectAll;var isIndeterminateSelection=!isAllSelection&&!state.selectionManager.isEmpty;var hasClearButton=isClearable&&state.selectedItems;var hasHeader=isSelectableAll;var handleClear=function handleClear(){return state.selectionManager.clearSelection();};var handleSelectAll=function handleSelectAll(){return state.selectionManager.toggleSelectAll();};var handleRemove=function handleRemove(key){return state.selectionManager.toggleSelection(key);};var _useObserveElement=useObserveElement(ref.current),buttonWidth=_useObserveElement.width;var formatItems=function formatItems(items){var _clsx;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Select_module.selectValueTag,(_clsx={},_clsx[Select_module.selectValueTagDisabled]=isDisabled,_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Select_module.truncate,style:{maxWidth:buttonWidth-64},children:items.length>1?items.length+" valda":items[0].textValue}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{disabled:isDisabled,"aria-label":"Rensa alla",className:Select_module.clearButton,onClick:function onClick(){var _ref$current;handleClear();ref==null||(_ref$current=ref.current)==null||_ref$current.focus();},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{width:20,height:20})})]});};(0,react.useEffect)(function(){if(refAllButton.current){refAllButton.current.indeterminate=isIndeterminateSelection;}},[isIndeterminateSelection]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HiddenMultiSelect,{isDisabled:props.isDisabled,isRequired:props.isRequired,name:props.name,state:state,triggerRef:ref,label:props.label+'-hidden'}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* default */.A)([Select_module.multiSelect],(_clsx2={},_clsx2[Select_module.multiSelectOpen]=state.isOpen,_clsx2),className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.multiSelect,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},labelProps,{slot:'label',className:(0,clsx/* default */.A)(Select_module.selectLabel,(_clsx3={},_clsx3[Select_module.selectLabelActive]=isActive,_clsx3[Select_module.selectLabelDisabled]=isDisabled,_clsx3)),children:label})),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(Select_module.description,(_clsx4={},_clsx4[Select_module.descriptionDisabled]=isDisabled,_clsx4[Select_module.descriptionInvalid]=!!errorMessage,_clsx4)),slot:'description',children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:Select_module.fieldError,children:errorMessage}),state.displayValidation.validationErrors.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.fieldError,children:errorMessage||state.displayValidation.validationErrors.map(function(error){return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:error},error);})}):null,/*#__PURE__*/(0,jsx_runtime.jsx)(FocusRing/* FocusRing */.v,{focusRingClass:Select_module.buttonFocused,autoFocus:autoFocus,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.selectContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",Object.assign({},buttonProps,mergeProps/* mergeProps */.v,{className:(0,clsx/* default */.A)(Select_module.button,(_clsx5={},_clsx5[Select_module.buttonOpen]=state.isOpen,_clsx5[Select_module.buttonActive]=state.selectedItems,_clsx5[Select_module.buttonDisabled]=isDisabled,_clsx5)),"data-invalid":state.displayValidation.validationErrors.length>0||state.displayValidation.isInvalid,type:"button",ref:ref,children:[state.selectionMode==='multiple'&&!state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:placeholder}):null,state.selectionMode!=='multiple'?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:((_state$selectedItems=state.selectedItems)==null?void 0:_state$selectedItems.length)===1?state.selectedItems[0].textValue:placeholder}):null,/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})]})),state.selectionMode==='multiple'&&state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},valueProps,{children:formatItems(state.selectedItems)})):null]})}),state.isOpen&&/*#__PURE__*/(0,jsx_runtime.jsxs)(SelectPopover,{isOpen:state.isOpen,onClose:state.close,className:Select_module.popover,triggerRef:ref,children:[hasHeader&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isSelectableAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(FocusRing/* FocusRing */.v,{focusRingClass:Select_module.listItemfocusRing,children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",onClick:handleSelectAll,className:Select_module.selectAllButton,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.listBoxItem,tabIndex:-1,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:Select_module.checkbox,type:"checkbox",checked:isAllSelection,ref:refAllButton,readOnly:true,tabIndex:-1})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:'Select All'})]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"selectDivider"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox,Object.assign({},menuProps,{state:state})),hasClearButton&&false&&/*#__PURE__*/0]})]}),showTags&&state.selectedItems!==null&&/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup,Object.assign({"aria-label":'Selected Items',selectionBehavior:'toggle',onRemove:function onRemove(keys){return handleRemove([].concat(keys)[0]);}},mergeProps/* mergeProps */.v,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{items:state.selectedItems,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{textValue:item.textValue,id:item.key,dismissable:true,isDisabled:isDisabled,children:item.textValue},item.key);}})}))]}))]});});var Select=/*#__PURE__*/react.forwardRef(function(_ref2,ref){var options=_ref2.options,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,Select_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(SelectComponent,Object.assign({},props,{items:options,ref:ref,children:function children(section){return section.children?/*#__PURE__*/(0,jsx_runtime.jsx)(Section/* Section */.w,{items:section.children,title:section.name,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:item.textValue,children:item.name});}},section.name):/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:section.textValue,children:section.name});}}));});Select.displayName='Select';

/***/ }),

/***/ 75756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ TextArea)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/textarea/TextArea.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextArea_module = ({"tokens":"\"../theme/tokens.css\"","--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","textArea":"textArea_r3SS","count":"count_om8K","countExceeded":"countExceeded_GeTp"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextArea.mjs
var dist_TextArea = __webpack_require__(43660);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var textfield_TextField = __webpack_require__(69240);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(53502);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/textarea/TextArea.tsx
'use client';var _excluded=["label","description","rows","maxLength","minLength","errorMessage","showCounter","validate","className"];var TextArea=function TextArea(_ref){var _ref2,_props$defaultValue;var label=_ref.label,description=_ref.description,rows=_ref.rows,maxLength=_ref.maxLength,minLength=_ref.minLength,errorMessage=_ref.errorMessage,showCounter=_ref.showCounter,validate=_ref.validate,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState((_ref2=(_props$defaultValue=props.defaultValue)!=null?_props$defaultValue:props.value)!=null?_ref2:''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);};var Count=function Count(){if(maxLength){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:(0,clsx/* default */.A)(TextArea_module.count,value.length>maxLength&&TextArea_module.countExceeded),children:[value.length," / ",maxLength]});}if(showCounter){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:TextArea_module.count,children:value.length});}return null;};var validateInput=function validateInput(value){var maxLengthError=maxLength&&value.length>maxLength?"Du har angett "+(value.length-maxLength)+" tecken f\xF6r mycket. F\xE4ltet \xE4r begr\xE4nsat till "+maxLength+" tecken.":null;var minLengthError=minLength&&value.length<minLength?"Du har angett "+Math.abs(value.length-minLength)+" tecken f\xF6r lite. F\xE4ltet kr\xE4ver \xE5tminstone "+minLength+" tecken.":null;var otherValidationError=validate?validate(value):null;return maxLengthError||minLengthError||otherValidationError||true;};return/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,Object.assign({className:(0,clsx/* default */.A)(TextField_module/* default */.A.inputField,className),validate:validateInput},props,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(textfield_TextField/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Count,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextArea/* TextArea */.f,{className:TextArea_module.textArea,rows:rows,onFocus:handleChange,onChange:handleChange})]})}));};

/***/ }),

/***/ 69240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A_: () => (/* binding */ TextField),
/* harmony export */   oi: () => (/* binding */ InputWrapper)
/* harmony export */ });
/* unused harmony exports ssnRegEx, dossNrRegEx */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32945);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79950);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27279);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21704);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44300);
/* harmony import */ var _TextField_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53502);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86559);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","validationType","validate","maxLength","showCounter","className"];var TextField=function TextField(_ref){var _ref2,_props$defaultValue;var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,validate=_ref.validate,maxLength=_ref.maxLength,showCounter=_ref.showCounter,className=_ref.className,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState((_ref2=(_props$defaultValue=props.defaultValue)!=null?_props$defaultValue:props.value)!=null?_ref2:''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);};var validateInput=function validateInput(value){if(validationType==='ssn')return ssnRegEx.test(value)?null:'Felaktigt personnummer';if(validationType==='dossnr')return dossNrRegEx.test(value)?null:'Felaktigt dossiernummer';if(validationType instanceof RegExp)return new RegExp(validationType).test(value)?null:errorMessage==null?void 0:errorMessage.toString();if(maxLength)return maxLength&&value.length>maxLength?"Du har angett "+(value.length-maxLength)+" tecken f\xF6r mycket. F\xE4ltet \xE4r begr\xE4nsat till "+maxLength+" tecken.":null;if(validate)return validate(value);return true;};var Count=function Count(){if(maxLength){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,value.length>maxLength&&_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.countExceeded),children:[value.length," / ",maxLength]});}if(showCounter){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,children:value.length});}return null;};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .A,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputField,className),validate:validateInput},props,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Count,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .p,{type:props.type,className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.input,onChange:handleChange,onBlur:handleChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PasswordField,{type:props.type,input:value})]})]})}));};var PasswordField=function PasswordField(_ref3){var type=_ref3.type,input=_ref3.input;var _React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState(false),showPassword=_React$useState2[0],setShowPassword=_React$useState2[1];if(type==='password')return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[showPassword&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordText,children:input}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref4){var label=_ref4.label,description=_ref4.description,errorMessage=_ref4.errorMessage,children=_ref4.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputWrapper,children:[label&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__/* .Label */ .J,{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.label,children:label}),description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.text,children:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_10__/* .FieldError */ .b,{"data-testid":"fieldError",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');var dossNrRegEx=new RegExp('^(\\d{1,2}\\+\\d{6}-\\d{1,2}$|\\d{1,2}-\\d{6}(/\\d{1,2})?$|\\d{1,2}\\d{6}$|\\d{6,8}$)');

/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--border-invalid":"light-dark(#e62323, #e62323)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px white, 0 0 0 4px black","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ })

}]);