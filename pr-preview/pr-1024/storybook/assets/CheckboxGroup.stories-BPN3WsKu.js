import{j as e}from"./iframe-DsUbAoSq.js";import{C as m}from"./CheckboxGroup-GFKqCYLK.js";import{C as p}from"./Checkbox-G7VAJ7WE.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ekmgTayW.js";import"./utils-CItAFvY_.js";import"./clsx-B-dksMZM.js";import"./Text-Bd-2tMqu.js";import"./useFocusRing-ClDYXhda.js";import"./index-ZLozb24P.js";import"./index-BR563_q3.js";import"./clsx-Ciqy0D92.js";import"./Text-zFFTMSPY.js";import"./Label-CZrRAjsT.js";import"./Button-D9RawpLu.js";import"./Hidden-B6jIkc3U.js";import"./useLabels-CUikAVDR.js";import"./useButton-ota4yok-.js";import"./Dialog-HmLVov3g.js";import"./RSPContexts-GvaUrLm8.js";import"./OverlayArrow-CMGgcRPr.js";import"./useResizeObserver-CBF1A0dl.js";import"./useControlledState-DI4_-MQt.js";import"./Collection-C9tiANbY.js";import"./index-C-JsD-TI.js";import"./Separator-DyqAvtne.js";import"./SelectionManager-Pml6f90q.js";import"./useEvent-CgdlAV5M.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CV-tS1Al.js";import"./useDescription-DayPqPx3.js";import"./ListKeyboardDelegate-Bh2C9Qia.js";import"./PressResponder-DuBPcQr9.js";import"./useLocalizedStringFormatter-CqRU1qss.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTsFJrsB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BNJ8vALJ.js";import"./Button-pix4LUFA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFjihYlH.js";import"./createLucideIcon-hAagXGW6.js";import"./x-CVUBtniR.js";import"./Heading-Bh0pg882.js";import"./info-Dg0JjAHd.js";import"./Popover-Dgwqhbyi.js";import"./useFormValidation-CLj26moS.js";import"./useField-B-KRuKWC.js";import"./Form-BfBWKEHX.js";import"./check-D7c3kwss.js";import"./useToggleState-FHIEluIy.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
