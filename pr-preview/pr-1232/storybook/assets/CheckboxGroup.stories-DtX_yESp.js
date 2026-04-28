import{j as e}from"./iframe-BWYHj7v3.js";import{C as m}from"./CheckboxGroup-DIckqMYQ.js";import{C as p}from"./Checkbox-Cn8ttPOY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BSBdPgF-.js";import"./utils-D2pxdcvN.js";import"./clsx-B-dksMZM.js";import"./Text-C4Gl7LUF.js";import"./useFocusRing-Dyg95bXZ.js";import"./index-7oEDLDPj.js";import"./index-9pfm-tft.js";import"./clsx-Ciqy0D92.js";import"./Text-7TDSW4-z.js";import"./Label-DR-14BQL.js";import"./Button-wGSaEaEO.js";import"./Hidden-B4Hoeqhu.js";import"./useLabel-CMMx43mY.js";import"./useLabels-DZpMO0Qr.js";import"./useButton-xg-vHwOd.js";import"./Dialog-BqnNGtZ2.js";import"./RSPContexts-Cti5diL6.js";import"./OverlayArrow-DATwpM57.js";import"./useResizeObserver-HwVTSCAl.js";import"./useControlledState-DsTneGsr.js";import"./Collection-Dku4YGez.js";import"./index-D44Hxb6u.js";import"./Separator-sjh5eGsW.js";import"./SelectionManager-naoen6to.js";import"./useEvent-y7Reijfp.js";import"./scrollIntoView-DbvRPzab.js";import"./SelectionIndicator-DOs2NO6p.js";import"./useDescription-DkSuF9rM.js";import"./ListKeyboardDelegate-o0zsP83E.js";import"./PressResponder-DzM78joY.js";import"./useLocalizedStringFormatter-C_LLFDGY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-_TVsaW.js";import"./getScrollParent-DoohMUen.js";import"./VisuallyHidden-CBrM5tre.js";import"./ModalOverlay-Coq4E0D8.js";import"./x-BuNpvuba.js";import"./createLucideIcon-Dbzq6jGp.js";import"./useLocalizedStringFormatter-BfKsi0NO.js";import"./Heading-Cu3egZD8.js";import"./Button-DEdirHEy.js";import"./Button.module-BB7N-cLd.js";import"./info-BBom3UrL.js";import"./Popover-JClwP6OG.js";import"./Form-8H488Lu1.js";import"./useField-DGT7cjYh.js";import"./check-Dh2KwMn4.js";import"./useToggleState-B0z64ft7.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
