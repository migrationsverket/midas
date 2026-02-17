import{j as e}from"./iframe-DTfJSErE.js";import{C as m}from"./CheckboxGroup-DJmJvWYH.js";import{C as p}from"./Checkbox-ptjXMIs0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bkpg5gnq.js";import"./utils-B73muxhO.js";import"./clsx-B-dksMZM.js";import"./Text-D5Dq4q45.js";import"./useFocusRing-B1zsHiit.js";import"./index-BUT5P9H-.js";import"./index-CgWBRnNX.js";import"./clsx-Ciqy0D92.js";import"./Text-DDwjjFnB.js";import"./Label-BuuWS3DT.js";import"./Button-DSjX8i_m.js";import"./Hidden-D7A9_Rse.js";import"./useLabels-BqfQS0uq.js";import"./useButton-oYO7zjMC.js";import"./Dialog-C261NJAw.js";import"./RSPContexts-DA83ZcWW.js";import"./OverlayArrow-CTH9LQ8k.js";import"./useResizeObserver-BrFLorgc.js";import"./useControlledState-BaQo_f5T.js";import"./Collection-Cywdh-W1.js";import"./index-lje2h9lu.js";import"./Separator-D8SADm8K.js";import"./SelectionManager-C9R0-jGz.js";import"./useEvent-BxSLArWq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CcF_Y5ct.js";import"./useDescription-gEBlcK5R.js";import"./ListKeyboardDelegate-BlP5VjP_.js";import"./PressResponder-CuinuHt0.js";import"./useLocalizedStringFormatter-uC-u8m9n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2iCZixk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKITv4VW.js";import"./Button-Bw1mXw0X.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BApN70s6.js";import"./createLucideIcon-DuvGCIEA.js";import"./x-D3PqQT5R.js";import"./Heading-DZRygZKP.js";import"./info-w7z6wdWt.js";import"./Popover-DK1z9kYJ.js";import"./useFormValidation-dfBlIUiS.js";import"./useField-lTpGylRL.js";import"./Form-DPNHWdAN.js";import"./check-B-k24r0c.js";import"./useToggleState-Cved7GcD.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
