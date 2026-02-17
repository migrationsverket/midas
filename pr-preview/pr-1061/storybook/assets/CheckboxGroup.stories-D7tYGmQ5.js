import{j as e}from"./iframe-CJaokZwQ.js";import{C as m}from"./CheckboxGroup-CAPYPxIq.js";import{C as p}from"./Checkbox-CNC7LSkw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Jy1N-IKu.js";import"./utils-CtEzJMyp.js";import"./clsx-B-dksMZM.js";import"./Text-Cl09Gfu2.js";import"./useFocusRing-Cs3fdfob.js";import"./index-D_wF1tYg.js";import"./index-Do-aKMQQ.js";import"./clsx-Ciqy0D92.js";import"./Text-DfXjE_jj.js";import"./Label-glivtVbc.js";import"./Button-CWvwIKjb.js";import"./Hidden-dqqTUJoh.js";import"./useLabels-CU-zAJI-.js";import"./useButton-CHkz07fZ.js";import"./Dialog-C9FcI8-s.js";import"./RSPContexts-DHtEutMT.js";import"./OverlayArrow-DCOatEQe.js";import"./useResizeObserver-C3UKzfY7.js";import"./useControlledState-BapUYJTX.js";import"./Collection-DfJ8PRvx.js";import"./index-DhTDUGqk.js";import"./Separator-CL1tk7Z9.js";import"./SelectionManager-DNlPeSZx.js";import"./useEvent-IUkh-taB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cgmxxflr.js";import"./useDescription-Cr4AdXjz.js";import"./ListKeyboardDelegate-DI7wiiNN.js";import"./PressResponder-D9hahw1K.js";import"./useLocalizedStringFormatter-Br5nqNbf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Xyi-hKom.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BY13fAwc.js";import"./Button-Tydpx-JE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DQMMP8yJ.js";import"./createLucideIcon-CyHnGhZ5.js";import"./x-FvjZsqr0.js";import"./Heading-C4NvwCX8.js";import"./info-BwTUGTQr.js";import"./Popover-DGDspnjK.js";import"./useFormValidation-4xdkgZhP.js";import"./useField-rWEXGZMG.js";import"./Form-DHxo0x7g.js";import"./check-DjzBubbV.js";import"./useToggleState-CltWFwpl.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
