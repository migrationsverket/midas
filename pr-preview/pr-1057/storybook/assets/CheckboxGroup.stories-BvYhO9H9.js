import{j as e}from"./iframe-JdJ-OJm1.js";import{C as m}from"./CheckboxGroup-BgTXiTni.js";import{C as p}from"./Checkbox-BMoUmEOo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BnFcX8Xu.js";import"./utils-96Qmq1tf.js";import"./clsx-B-dksMZM.js";import"./Text-DIR17Pu1.js";import"./useFocusRing-DO3ZBB6k.js";import"./index-BNPS8vul.js";import"./index-DPgChp4i.js";import"./clsx-Ciqy0D92.js";import"./Text-JWOQbzzd.js";import"./Label-CXR60Qin.js";import"./Button-DZGa_zA9.js";import"./Hidden-DKn4TiUA.js";import"./useLabels-TKpnNBwe.js";import"./useButton-CFkNx72h.js";import"./Dialog-CvVjvxX0.js";import"./RSPContexts-FHwAvAup.js";import"./OverlayArrow-CLxF1Nrn.js";import"./useResizeObserver-B-MYGkyy.js";import"./useControlledState-D8NqpIqI.js";import"./Collection-C9if6wGk.js";import"./index-D4irGP9Q.js";import"./Separator-CoL6nCE9.js";import"./SelectionManager-Df6LefBc.js";import"./useEvent-LxIxBIYw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BVMdCOZy.js";import"./useDescription-CQRfVWLt.js";import"./ListKeyboardDelegate-BLVLGwaI.js";import"./PressResponder-WAEWb9JB.js";import"./useLocalizedStringFormatter-1JARTe_X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C_zL_4CQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dgod2K5q.js";import"./Button-DhPOwdCl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C8P-aJlJ.js";import"./createLucideIcon-oTUJ9cxW.js";import"./x-DLZInyov.js";import"./Heading-C_TZWBlV.js";import"./info-iKV4g4LT.js";import"./Popover-f5XJ8qYg.js";import"./useFormValidation-BOj7Bfra.js";import"./useField-DgnJ1pPy.js";import"./Form-yrI-dzfw.js";import"./check-0U43-RVh.js";import"./useToggleState-TpWr7m2e.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
