import{j as e}from"./iframe-C2hHAX_c.js";import{C as m}from"./CheckboxGroup-Cyi56E4n.js";import{C as p}from"./Checkbox-Da4WQN-2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D33fSaC5.js";import"./utils-CYjcBBm1.js";import"./clsx-B-dksMZM.js";import"./Text-CEBbuk7S.js";import"./useFocusRing-71g5CJVP.js";import"./index-utew35I4.js";import"./index-BISH_zx5.js";import"./clsx-Ciqy0D92.js";import"./Text-CXKXGfTm.js";import"./Label-BzcuGAQJ.js";import"./Button-D8SyKFCR.js";import"./Hidden-UkteWA62.js";import"./useLabels-CS2Af-Ri.js";import"./useButton-De47wRHH.js";import"./Dialog-DioqltWp.js";import"./RSPContexts-PGRfE4kt.js";import"./OverlayArrow-DJjWvuUn.js";import"./useResizeObserver-YYDXRqRx.js";import"./useControlledState-Bqiy5-s7.js";import"./Collection-Dg-AlUMT.js";import"./index-XNBPZcEf.js";import"./Separator-BZupGPjm.js";import"./SelectionManager-k5gNZb-Z.js";import"./useEvent-T4VjhQCT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C24OmCek.js";import"./useDescription-BiuYFYuv.js";import"./ListKeyboardDelegate-WnG7Jb66.js";import"./PressResponder-ofK5jlKx.js";import"./useLocalizedStringFormatter-Cusafc4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQepyth6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DWzqY3m_.js";import"./Button-DlfSSXdG.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BQOzlYhQ.js";import"./createLucideIcon-BcvDIfsv.js";import"./x-C0uuZGTx.js";import"./Heading-BANKo2Xq.js";import"./info-Bh7Hxsix.js";import"./Popover-DPy3wNDE.js";import"./useFormValidation-DHc1AjUb.js";import"./useField-CMmSOBcA.js";import"./Form-BmO7u4eV.js";import"./check-BulYR5eh.js";import"./useToggleState-CLGzywEw.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
