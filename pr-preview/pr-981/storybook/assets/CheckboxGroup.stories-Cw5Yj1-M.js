import{j as e}from"./iframe-CmunamRf.js";import{C as m}from"./CheckboxGroup-Bb-8IueG.js";import{C as p}from"./Checkbox-C4EXuPTN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DG3EzHGA.js";import"./utils-Do45Qf3w.js";import"./clsx-B-dksMZM.js";import"./Text-7Mv1aRO9.js";import"./useFocusRing-DFmjP9RI.js";import"./index-BzS_2Nae.js";import"./index-CuMnXGnl.js";import"./clsx-Ciqy0D92.js";import"./Text-DoOol8PB.js";import"./Label-D4SsXjUR.js";import"./Button-I_qPWlHX.js";import"./Hidden-UzlcYpta.js";import"./useLabels-TxZzTxtJ.js";import"./useButton-DK3uhVHY.js";import"./Dialog-BUKFdovJ.js";import"./RSPContexts-BHCYibY1.js";import"./OverlayArrow-Cuooq3hj.js";import"./useResizeObserver-BMs2Lb56.js";import"./useControlledState-CMrkhqrU.js";import"./Collection-CGde15hM.js";import"./index-Bi8Rutwx.js";import"./Separator-zXZL7aqG.js";import"./SelectionManager-BYqaFR_n.js";import"./useEvent-BFMxJZE1.js";import"./scrollIntoView-BgicmmuX.js";import"./SelectionIndicator-7yX63bIk.js";import"./useDescription-hVP8LGT1.js";import"./ListKeyboardDelegate-yTTov5y5.js";import"./PressResponder-DE7epYFQ.js";import"./useLocalizedStringFormatter-BdmLjVnV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CUywN_ok.js";import"./VisuallyHidden-Cp_LZnsq.js";import"./Button-BDNFHLWn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B-CkpdIL.js";import"./createLucideIcon--1kAEzMd.js";import"./x-BRYbY-gr.js";import"./Heading-DRcWHY0O.js";import"./info-65bBuQAj.js";import"./Popover-DifjSUDF.js";import"./useFormValidation-e1uzRsDW.js";import"./useField-BNCtOcHp.js";import"./Form-B_SA6qDB.js";import"./check-DbzNrEbL.js";import"./useToggleState-BDtaI1mo.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
