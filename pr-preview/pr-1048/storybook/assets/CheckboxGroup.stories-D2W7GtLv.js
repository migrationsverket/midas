import{j as e}from"./iframe-0ay5Cl7Z.js";import{C as m}from"./CheckboxGroup-DvPhI26L.js";import{C as n}from"./Checkbox-mtyNjXBn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BsAQJ2uy.js";import"./utils-OwhIF6Yv.js";import"./useObjectRef-DG4zbPWe.js";import"./clsx-B-dksMZM.js";import"./Text-DfthMNVx.js";import"./useFocusRing-BCxb_ufh.js";import"./useFocusable-B634M_Fb.js";import"./index-9qv7Fem8.js";import"./index-U-aVmNqW.js";import"./clsx-Ciqy0D92.js";import"./Text-BGuljUD0.js";import"./Label-BEvqZhj3.js";import"./Button-DxAruj7U.js";import"./Hidden-BzPJJaE1.js";import"./number-DfkVkf0F.js";import"./useLabels-BQsB-eC9.js";import"./useButton-Dk5PjSpe.js";import"./Dialog-CsrRoGz5.js";import"./RSPContexts-CAeNAO0k.js";import"./OverlayArrow-EcjdagTC.js";import"./useResizeObserver-DERZdo11.js";import"./useControlledState-BZfBuZ3A.js";import"./Collection-DvvkxIOw.js";import"./CollectionBuilder-BTJH7Kto.js";import"./index-Dfbi8MRN.js";import"./Separator-hQ70M9LX.js";import"./SelectionManager-Cp7KGgYq.js";import"./useEvent-5vUs9lWK.js";import"./scrollIntoView-DBszQ3_a.js";import"./SelectionIndicator-zqXirjR8.js";import"./useDescription-f161JRhm.js";import"./ListKeyboardDelegate-vxkeYpMQ.js";import"./PressResponder-4fh9PZSY.js";import"./useLocalizedStringFormatter-Bev7EFEw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-MDYFQ4gP.js";import"./getScrollParent-Bg5c39wC.js";import"./VisuallyHidden-DQAFa958.js";import"./Button-C9_6wCAg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CA3dvWhn.js";import"./createLucideIcon-C-V0PVLC.js";import"./x-CV-T8NX-.js";import"./Heading-CLuq4JDV.js";import"./info-BX7F8BJn.js";import"./Popover-MJVDCkTa.js";import"./useFormValidation-Cy5tbrL6.js";import"./useField-DyriZxff.js";import"./Form-U_9riSua.js";import"./check-DsBPdSOr.js";import"./useToggleState-DqjR02Kj.js";const lr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(n,{value:r,children:r},r))},tags:["autodocs"]},o={},t={args:{showSelectAll:!0}},a={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(n,{value:"banana",children:"Banana"}),e.jsx(n,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},p={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...p.parameters?.docs?.source}}};const dr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,p as Invalid,o as Primary,i as ReadOnly,a as SelectAllInteraction,t as ShowSelectAll,dr as __namedExportsOrder,lr as default};
