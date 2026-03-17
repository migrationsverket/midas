import{j as e}from"./iframe-BuuAXrXC.js";import{C as m}from"./CheckboxGroup-GsNVgb5E.js";import{C as p}from"./Checkbox-CDNheLFf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-EC843UUw.js";import"./utils-CtsDHbZe.js";import"./clsx-B-dksMZM.js";import"./Text-6_usI8rI.js";import"./useFocusRing-CrOe_O8c.js";import"./index-BbfDc97u.js";import"./index-32pD7yrL.js";import"./clsx-Ciqy0D92.js";import"./Text-ri3V3kO7.js";import"./Label-TdkeK-nZ.js";import"./Button-DvBK65Gf.js";import"./Hidden-E4h0Oh4e.js";import"./useLabels-CGKYF4iS.js";import"./useButton-BnwORE09.js";import"./Dialog-DASoqCTh.js";import"./RSPContexts-GYXhZ2kG.js";import"./OverlayArrow-B_qmHsh9.js";import"./useResizeObserver-CiFNlJHb.js";import"./useControlledState-jhkXU9fd.js";import"./Collection-B0Hs1IvJ.js";import"./index-a9F44m-_.js";import"./Separator-DwwXVBmJ.js";import"./SelectionManager-BdqnjQ-I.js";import"./useEvent-CPDI-Sn6.js";import"./scrollIntoView-BPvWn1k3.js";import"./SelectionIndicator-ClskVgwB.js";import"./useDescription-DdQEt6e5.js";import"./ListKeyboardDelegate-BYIOwBbd.js";import"./PressResponder-hUYrP0m_.js";import"./useLocalizedStringFormatter-BEGIzj17.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DFK_ASMv.js";import"./getScrollParent-CUa_lcZe.js";import"./VisuallyHidden-6El7FPtm.js";import"./x-Dbf8QEqu.js";import"./createLucideIcon-iyjQV_Z5.js";import"./useLocalizedStringFormatter-B4LAAnFe.js";import"./Heading-BY8SUnpc.js";import"./Button-DGWTIzH5.js";import"./Button.module-BB7N-cLd.js";import"./info-d7IdREtp.js";import"./Popover-DMlTalWb.js";import"./Form-Dh-jyLTL.js";import"./useField-DDR_miEa.js";import"./check-DJ92GzTo.js";import"./useToggleState-DUTEWacV.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
