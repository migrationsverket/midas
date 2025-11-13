import{j as e}from"./iframe-1vIqjnby.js";import{C as m}from"./CheckboxGroup-TODYxRjf.js";import{C as p}from"./Checkbox-DYiYCnw9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-cJah9zTn.js";import"./utils-DP4tvbox.js";import"./clsx-B-dksMZM.js";import"./Text-D5j6OND1.js";import"./useFocusRing-qKukOunu.js";import"./index-fb0U5xET.js";import"./index-CQziH2IA.js";import"./clsx-Ciqy0D92.js";import"./Text-xTP-Xoo1.js";import"./Label-Bs6Gjzsz.js";import"./Button-I0OIDbhB.js";import"./Hidden-C6xvz5Aa.js";import"./useLabels-Cb18_xpb.js";import"./useButton-yhDvMx9o.js";import"./Dialog-QcJzazWJ.js";import"./RSPContexts-a3xvsoTH.js";import"./OverlayArrow-C-S-uo79.js";import"./useResizeObserver-BmxZKQb4.js";import"./useControlledState-Gd009-3T.js";import"./Collection-B_qjrqu1.js";import"./index-6FT_6TTx.js";import"./Separator-VabwxyGE.js";import"./SelectionManager-LnSuBezg.js";import"./useEvent-CSNMnz9a.js";import"./scrollIntoView-jQrGDwuP.js";import"./SelectionIndicator-C6nzsYuD.js";import"./useDescription-BqgyIHM3.js";import"./ListKeyboardDelegate-CQrGCtp7.js";import"./PressResponder-CiRFdRvu.js";import"./useLocalizedStringFormatter-CJVMb10g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-QIQly7dc.js";import"./VisuallyHidden-BDeEE_jR.js";import"./useLocalizedStringFormatter-CW75oDtM.js";import"./Button-lao2U65D.js";import"./Button.module-CtQ1deO8.js";import"./x-D0NlZ6zO.js";import"./createLucideIcon-BEyZRkKF.js";import"./Heading-Bxf8NlZx.js";import"./info-Bnv_n0yS.js";import"./Popover-CRLvUmwf.js";import"./useFormValidation-CY-fO6eB.js";import"./useField-DHtH5iYa.js";import"./Form-CK7gSjVE.js";import"./check-B5NQLBey.js";import"./useToggleState-YTgcViPo.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
