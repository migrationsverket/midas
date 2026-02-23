import{j as e}from"./iframe-BvaNkZ6j.js";import{C as m}from"./CheckboxGroup-DSrX8150.js";import{C as p}from"./Checkbox-Crba1vwU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CXm6_yyH.js";import"./utils-CNgJIKxW.js";import"./clsx-B-dksMZM.js";import"./Text-YlHeMW3d.js";import"./useFocusRing-qCtyWvqN.js";import"./index-1t0eXXk7.js";import"./index-CU93jXVK.js";import"./clsx-Ciqy0D92.js";import"./Text-Bnqxz3nE.js";import"./Label-Cv_S-uC6.js";import"./Button-DSPwUnGO.js";import"./Hidden-D5Pu3QcA.js";import"./useLabels-COvNNRTy.js";import"./useButton-DkC5W3Ti.js";import"./Dialog-C7jCV_Zk.js";import"./RSPContexts-DNdoMlvy.js";import"./OverlayArrow-B9ZhQIHK.js";import"./useResizeObserver-CAe_3c_T.js";import"./useControlledState-jnjho331.js";import"./Collection-D4B2Y49d.js";import"./index-DHzc84gA.js";import"./Separator-D4vRshlS.js";import"./SelectionManager-MKoByHH0.js";import"./useEvent-07YEmXce.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D2ZQPVOX.js";import"./useDescription-DJyGbkRQ.js";import"./ListKeyboardDelegate-B2dZEP_i.js";import"./PressResponder-HmiYoH-q.js";import"./useLocalizedStringFormatter-DRG9aNFD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvW5kagd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-QqUieSTF.js";import"./Button-BwfGni6y.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B1tb5Rk6.js";import"./createLucideIcon-C_AWNDAW.js";import"./x-DiPLC0FF.js";import"./Heading-BGtGvdOe.js";import"./info-CaxTIc9S.js";import"./Popover-DtBkRFZf.js";import"./useFormValidation-CFBRBLfT.js";import"./useField-DOL_aQHp.js";import"./Form-ctSkFViV.js";import"./check-vVM56i8G.js";import"./useToggleState-DYa1opoc.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
