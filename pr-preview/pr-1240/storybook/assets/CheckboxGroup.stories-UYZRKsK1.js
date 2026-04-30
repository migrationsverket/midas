import{j as e}from"./iframe-CbAzJO9N.js";import{C as m}from"./CheckboxGroup-qx5FHpz6.js";import{C as p}from"./Checkbox-D23XgCFx.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Q76E79z-.js";import"./utils-B0jB1E5G.js";import"./clsx-B-dksMZM.js";import"./Text-Cb6mQNAQ.js";import"./useFocusRing-Cvfx5XiJ.js";import"./index-CIpD7d_z.js";import"./index-zxdvsBHT.js";import"./clsx-Ciqy0D92.js";import"./Text-B0GIqCDR.js";import"./Label-ExQDaYWm.js";import"./Button-_5CpY_LG.js";import"./Hidden-j-F0-7Lz.js";import"./useLabel-DdRCBCBY.js";import"./useLabels-BUHgLQ-5.js";import"./useButton-CrpkGmXn.js";import"./Dialog-DW2Inq1H.js";import"./RSPContexts-CdwstRL7.js";import"./OverlayArrow-Dv4tydTP.js";import"./useResizeObserver-CrcmnwKx.js";import"./useControlledState-DjmxdyV_.js";import"./Collection-D60D3pRD.js";import"./index-hbx092to.js";import"./Separator-BZo3Gu1p.js";import"./SelectionManager-DBlz5uU6.js";import"./useEvent-VV5wi-lK.js";import"./scrollIntoView-CfANcw89.js";import"./SelectionIndicator-QNGy80KY.js";import"./useDescription-x0RZZUcB.js";import"./ListKeyboardDelegate-C6dnv3Af.js";import"./PressResponder-BTxBJQy3.js";import"./useLocalizedStringFormatter-DJXPkqTe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bskg7DBL.js";import"./getScrollParent-4mlCzyaP.js";import"./VisuallyHidden-Dhjqn-q1.js";import"./ModalOverlay-DvNGtE2h.js";import"./x-CrcasNM6.js";import"./createLucideIcon-lx1Wi4QI.js";import"./useLocalizedStringFormatter-AKU0Mz00.js";import"./Heading-5Uwbhg9g.js";import"./Button-Cly75nHE.js";import"./Button.module-BB7N-cLd.js";import"./info-BPfNumPG.js";import"./Popover-C2Zhsq-R.js";import"./Form-VNKUe-wT.js";import"./useField-CBtm8xuD.js";import"./check-BnsR9OmD.js";import"./useToggleState-C66aaA6a.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
