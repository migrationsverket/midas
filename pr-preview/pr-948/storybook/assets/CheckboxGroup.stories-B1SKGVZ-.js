import{j as e}from"./iframe-B3cZlMLq.js";import{C as m}from"./CheckboxGroup-CnuUMpIl.js";import{C as p}from"./Checkbox-CFSCbMz_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CwMfAejD.js";import"./utils-C2IA6zAi.js";import"./clsx-B-dksMZM.js";import"./Text-BDM3k8gp.js";import"./useFocusRing-Dkrn5RRD.js";import"./index-pKcy2ErU.js";import"./index-D2uszoET.js";import"./clsx-Ciqy0D92.js";import"./Text-DMP_bw7r.js";import"./Label-B0e6JnY2.js";import"./Button-D5tqtILh.js";import"./Hidden-qU92wu5k.js";import"./useLabels-gayIneyO.js";import"./useButton-DYFBzz8O.js";import"./Dialog-3HARhlaJ.js";import"./RSPContexts-BGkD65I-.js";import"./OverlayArrow-BYMu192H.js";import"./useResizeObserver-WzPTznhj.js";import"./useControlledState-BjN-icKh.js";import"./Collection-CmdLX-Un.js";import"./index-D6dUN0sU.js";import"./Separator-DcOgo5Rp.js";import"./SelectionManager-p9LBYUuI.js";import"./useEvent-DoDjcMOQ.js";import"./scrollIntoView-3f3I6qXZ.js";import"./SelectionIndicator-vytaxVBf.js";import"./useDescription-Ca1I1_7m.js";import"./ListKeyboardDelegate-Br-FAoxl.js";import"./PressResponder-DUBLzW5W.js";import"./useLocalizedStringFormatter-BxBaRmG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DjWGnAkK.js";import"./VisuallyHidden-DFgNwsT9.js";import"./Button-D3BwvYvD.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-ChaREiKB.js";import"./createLucideIcon-cIeaTryR.js";import"./x-Bh2TZMn2.js";import"./Heading-DL-GOIro.js";import"./info-BOTcSQLe.js";import"./Popover-BjRfxx6m.js";import"./useFormValidation-DpSJBzg9.js";import"./useField-bNv-bTy9.js";import"./Form-3lY06ROM.js";import"./check-C0TqZU8u.js";import"./useToggleState-ZIE6uDFu.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
