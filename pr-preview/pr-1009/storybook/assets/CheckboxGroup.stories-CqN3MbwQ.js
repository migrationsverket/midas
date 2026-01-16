import{j as e}from"./iframe-BfX_07x0.js";import{C as m}from"./CheckboxGroup-DxAo-Hnf.js";import{C as p}from"./Checkbox-BSAdHKFp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CRBWYL-W.js";import"./utils-otEk9Sjq.js";import"./clsx-B-dksMZM.js";import"./Text-BlHVCXfu.js";import"./useFocusRing-B8HbIXNd.js";import"./index-Fv7k2kbU.js";import"./index-Tc84QQew.js";import"./clsx-Ciqy0D92.js";import"./Text-B2HNGjiH.js";import"./Label-C8T1niBL.js";import"./Button-BjsM-sZt.js";import"./Hidden-BW_Q879K.js";import"./useLabels-BDfZfP3D.js";import"./useButton-Bnqm25mU.js";import"./Dialog-BaNlAR24.js";import"./RSPContexts-Cjsc-eOQ.js";import"./OverlayArrow-CuPHKC8V.js";import"./useResizeObserver-DE6Jojwh.js";import"./useControlledState-BDBdaFnj.js";import"./Collection-B-H-yU5f.js";import"./index-CAt6XeDx.js";import"./Separator-DgrfS2q7.js";import"./SelectionManager-CGKOZMdZ.js";import"./useEvent-TK48cLph.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CNeDQaEc.js";import"./useDescription-tN0S61gz.js";import"./ListKeyboardDelegate-BxcuPLOy.js";import"./PressResponder-Dyai04df.js";import"./useLocalizedStringFormatter-DfmLe7Uo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKRWm9Cp.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Mgvz9RsA.js";import"./Button-S0b0VHM6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtSMgK2r.js";import"./createLucideIcon-NdhLV474.js";import"./x-BXf0dImH.js";import"./Heading-DNwj3PZt.js";import"./info-CRmXFHgj.js";import"./Popover-B63yxUdD.js";import"./useFormValidation-TqVcjqfe.js";import"./useField-D18NE3Od.js";import"./Form-C-L0Ndhq.js";import"./check-BBArJTKH.js";import"./useToggleState-D1ScT3uT.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
