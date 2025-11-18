import{j as e}from"./iframe-DL0cr3No.js";import{C as m}from"./CheckboxGroup-CZBcK1K6.js";import{C as p}from"./Checkbox-Xtk4oD8d.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CSzLSbH0.js";import"./utils-BUc-cOn8.js";import"./clsx-B-dksMZM.js";import"./Text-BZY7tPCZ.js";import"./useFocusRing-CUC21zm9.js";import"./index-RgupsUkd.js";import"./index-D6BEsua6.js";import"./clsx-Ciqy0D92.js";import"./Text-B4js3SUR.js";import"./Label-DJx2IpW_.js";import"./Button-B1jV44pP.js";import"./Hidden-pim-7Fp3.js";import"./useLabels-BC5LH5iw.js";import"./useButton-Bc5mEHZW.js";import"./Dialog-BohIRJvw.js";import"./RSPContexts-BjTXbXCR.js";import"./OverlayArrow-CG3MQ4PF.js";import"./useResizeObserver-BzJLR3Y9.js";import"./useControlledState-oFMNdbap.js";import"./Collection-DcDiE1Pr.js";import"./index-CeDlO_O7.js";import"./Separator--vLAl-M-.js";import"./SelectionManager-DRsW8gID.js";import"./useEvent-DDHdI2jX.js";import"./scrollIntoView-D8yUuFnl.js";import"./SelectionIndicator-DBYP8byp.js";import"./useDescription-LyMbX_kV.js";import"./ListKeyboardDelegate-vPzME-XO.js";import"./PressResponder-CSJ-l0Dm.js";import"./useLocalizedStringFormatter-YyaJr3k3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bmi8soUw.js";import"./VisuallyHidden-LIFheGCJ.js";import"./useLocalizedStringFormatter-BelfBJw5.js";import"./Button-BJrL0Zus.js";import"./Button.module-CtQ1deO8.js";import"./x-BkuPOkXI.js";import"./createLucideIcon-CtVHrRwE.js";import"./Heading-BzXe7sUB.js";import"./info-DQIPe783.js";import"./Popover-CewDHiUk.js";import"./useFormValidation-B1jylFA2.js";import"./useField-M8QTnn6A.js";import"./Form-BUbZ_MNV.js";import"./check-UugKNikk.js";import"./useToggleState-BTbszsQ5.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
