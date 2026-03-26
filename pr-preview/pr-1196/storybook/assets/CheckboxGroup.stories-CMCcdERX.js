import{j as e}from"./iframe-DUmnjMKN.js";import{C as m}from"./CheckboxGroup-lU0DBIps.js";import{C as p}from"./Checkbox-Dwp67rP1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-0rnN8Sj0.js";import"./utils-0xSMeEGm.js";import"./clsx-B-dksMZM.js";import"./Text-CeMQVnHe.js";import"./useFocusRing-CNLfoayx.js";import"./index-DqAa-ger.js";import"./index-B5i8x2Yv.js";import"./clsx-Ciqy0D92.js";import"./Text-CnbD-jnj.js";import"./Label-CpgbjV-L.js";import"./Button-6X6Z2oCH.js";import"./Hidden-Cfzmra0d.js";import"./useLabel-CcUgjBrh.js";import"./useLabels-DUPDduiv.js";import"./useButton-DCAwdvik.js";import"./Dialog-DhQU9Gp8.js";import"./RSPContexts-QZF1MtLT.js";import"./OverlayArrow-CMtbCkYO.js";import"./useResizeObserver-DJBPn2hp.js";import"./useControlledState-D6z3aXVM.js";import"./Collection-BaHsUj9e.js";import"./index-fxnARNVi.js";import"./Separator-Bqn39AsS.js";import"./SelectionManager-CKBV8ory.js";import"./useEvent-CkK3gQjy.js";import"./scrollIntoView-Cg9djLSg.js";import"./SelectionIndicator-4GZjABHy.js";import"./useDescription-DXN7t0bP.js";import"./ListKeyboardDelegate-DHwJq8xV.js";import"./PressResponder-BWTo06XF.js";import"./useLocalizedStringFormatter-Brx_2IRC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D6XhKofk.js";import"./getScrollParent-BQDHCp3Y.js";import"./VisuallyHidden-Cb4icQhq.js";import"./x-54C-wf8A.js";import"./createLucideIcon-D1JpQBbc.js";import"./useLocalizedStringFormatter-DAICFjeC.js";import"./Heading-C1WgcKve.js";import"./Button-tmoOZgUj.js";import"./Button.module-BB7N-cLd.js";import"./info-BdTxmkNB.js";import"./Popover-B_m60QMD.js";import"./Form-CMYZ7XKZ.js";import"./useField-iVKXJziX.js";import"./check-qqeMj0m-.js";import"./useToggleState-Cla2RTo5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
