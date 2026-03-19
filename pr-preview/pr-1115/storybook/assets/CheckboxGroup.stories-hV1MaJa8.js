import{j as e}from"./iframe-DU8NLsSw.js";import{C as m}from"./CheckboxGroup-DWJt9bkv.js";import{C as p}from"./Checkbox-D5O4-T6Z.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CwLWEdZN.js";import"./utils-DschNtJz.js";import"./clsx-B-dksMZM.js";import"./Text-BZqm9ELR.js";import"./useFocusRing-BMKmF6E1.js";import"./index-C6itxEvf.js";import"./index-DDAOQfjR.js";import"./clsx-Ciqy0D92.js";import"./Text-Dif5ls4o.js";import"./Label-Ct3ZN431.js";import"./Button-CLXNoy7Y.js";import"./Hidden-DjBEVfsr.js";import"./useLabels-C6Oc5R34.js";import"./useButton-D62E3rKh.js";import"./Dialog-D9rtR4RO.js";import"./RSPContexts-B6N-eI9R.js";import"./OverlayArrow-DO-yg-5j.js";import"./useResizeObserver-B3lKcq_g.js";import"./useControlledState-CI3nCHv5.js";import"./Collection-BFEtU6Zj.js";import"./index-DxE-xFtT.js";import"./Separator-D2KwEruR.js";import"./SelectionManager-D66mxQR-.js";import"./useEvent-DHKGnH5O.js";import"./scrollIntoView-D3YlmEdr.js";import"./SelectionIndicator-KRuxcBLn.js";import"./useDescription-DHAJH0jb.js";import"./ListKeyboardDelegate-CpOAujDV.js";import"./PressResponder-Bw3EqB76.js";import"./useLocalizedStringFormatter-Cj1K2IHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ngnsKjAl.js";import"./getScrollParent-vSGEZB_b.js";import"./VisuallyHidden-CTGBozXG.js";import"./x-BTYP4-gW.js";import"./createLucideIcon-24KtAMn6.js";import"./useLocalizedStringFormatter-CFXzQyxC.js";import"./Heading-BFFMpYOw.js";import"./Button-CMEO0cNM.js";import"./Button.module-BB7N-cLd.js";import"./info-yxh-5K7v.js";import"./Popover-D4QOb9hJ.js";import"./Form-BJkA6abG.js";import"./useField-sZihLE4Q.js";import"./check-BFzigZ7Z.js";import"./useToggleState-B_janxqB.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
