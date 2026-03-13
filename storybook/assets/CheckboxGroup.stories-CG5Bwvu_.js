import{j as e}from"./iframe-EoEhw5Zh.js";import{C as m}from"./CheckboxGroup-DFAV5TUl.js";import{C as p}from"./Checkbox-VrdasVtj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D-MKG4ii.js";import"./utils-9vpvreaM.js";import"./clsx-B-dksMZM.js";import"./Text-DXp13W0h.js";import"./useFocusRing-DMgSEdD4.js";import"./index-Dr8ff7Yx.js";import"./index-BnBZZEud.js";import"./clsx-Ciqy0D92.js";import"./Text-D9CNFP89.js";import"./Label-DM7nkZpa.js";import"./Button-DjmrYvse.js";import"./Hidden-CX87kr-j.js";import"./useLabels-CyiNSM6o.js";import"./useButton-CoeBifMi.js";import"./Dialog-Btlvd5Ns.js";import"./RSPContexts-0TY2XP1U.js";import"./OverlayArrow-DxQzkW5-.js";import"./useResizeObserver-BSOyndif.js";import"./useControlledState-cFso-qT1.js";import"./Collection-B9ccTc4Z.js";import"./index-CO1-2h13.js";import"./Separator-C53QjOil.js";import"./SelectionManager-DQz7Nw5Y.js";import"./useEvent-BNUGgeID.js";import"./scrollIntoView-CQrFR7ZE.js";import"./SelectionIndicator-HT-3N3vM.js";import"./useDescription-BA8q_yzK.js";import"./ListKeyboardDelegate-bFzoPsuL.js";import"./PressResponder-D_69Y5um.js";import"./useLocalizedStringFormatter-SZJWhWFc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKl41UlG.js";import"./getScrollParent-B_rII4gY.js";import"./VisuallyHidden-q1pwiIQH.js";import"./x-D6rw-x5f.js";import"./createLucideIcon-mCwC6Qs_.js";import"./useLocalizedStringFormatter-Crb0wUWJ.js";import"./Heading-CEG4slW5.js";import"./Button-y454-6pk.js";import"./Button.module-D_C6WeTN.js";import"./info-CPNKuNrf.js";import"./Popover-pG9coscQ.js";import"./useFormValidation-BEz7E7z8.js";import"./useField-CmCZJ2oU.js";import"./Form-DwDbWIsi.js";import"./check-DK2mhTIJ.js";import"./useToggleState-bs0RJp51.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
