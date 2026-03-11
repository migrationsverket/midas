import{j as e}from"./iframe-C2Yyxb_o.js";import{C as m}from"./CheckboxGroup-B8lvfZ2x.js";import{C as p}from"./Checkbox-BcvjsE0H.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C6hW-3rq.js";import"./utils-WFtffLiW.js";import"./clsx-B-dksMZM.js";import"./Text-Dt7S0YjD.js";import"./useFocusRing-nMTXWlTy.js";import"./index-DNvvTP-Y.js";import"./index-DURILlkI.js";import"./clsx-Ciqy0D92.js";import"./Text-CeM-jeK1.js";import"./Label-BSIe7yZO.js";import"./Button-BIrUuJFL.js";import"./Hidden-DgX5eHvD.js";import"./useLabels-BZQhvLB1.js";import"./useButton-COo6uvE9.js";import"./Dialog-Ca5QR5rZ.js";import"./RSPContexts-2VRlgjKK.js";import"./OverlayArrow-Cuj2GhQm.js";import"./useResizeObserver-DApr3h-8.js";import"./useControlledState-Cdg6EvLr.js";import"./Collection-CRznF4DQ.js";import"./index-SCf2pMTj.js";import"./Separator-DYnNf088.js";import"./SelectionManager-Bj0gjutB.js";import"./useEvent-DX2tR9aV.js";import"./scrollIntoView-CyGcDExg.js";import"./SelectionIndicator-TGObzo75.js";import"./useDescription-BVRp3o_m.js";import"./ListKeyboardDelegate-CIhBGTnQ.js";import"./PressResponder-DCy26f7a.js";import"./useLocalizedStringFormatter-BR3z1GcU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1QgDtMf.js";import"./getScrollParent-BkBLu-wI.js";import"./VisuallyHidden-B7F_lxL0.js";import"./x-DfcaNs2P.js";import"./createLucideIcon-CfyIEXzg.js";import"./useLocalizedStringFormatter-Cbipm8_N.js";import"./Heading-BDvA49Rx.js";import"./Button-BQqfifzb.js";import"./Button.module-D_C6WeTN.js";import"./info-DwWqKY3j.js";import"./Popover-CFwYPtoe.js";import"./useFormValidation-C7BWwups.js";import"./useField-_oAE-yI6.js";import"./Form-CyxWrLxN.js";import"./check-DaB1OjsN.js";import"./useToggleState-2QLi4EFT.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    ...args
  }) => {
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};const pr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,pr as __namedExportsOrder,nr as default};
