import{j as e}from"./iframe-DIgCkbD1.js";import{C as m}from"./CheckboxGroup-D4AVqhoA.js";import{C as p}from"./Checkbox-B1InwlXS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BtS7DKcw.js";import"./utils-D8xi_xBs.js";import"./clsx-B-dksMZM.js";import"./Text-Ci7gikDv.js";import"./useFocusRing-B4tmv29s.js";import"./index-CX1iR86j.js";import"./index-CWy7JOdY.js";import"./clsx-Ciqy0D92.js";import"./Text-D4RhZXD6.js";import"./Label-SSlVc1WR.js";import"./Button-L3gEMBR5.js";import"./Hidden-CeUFJKQL.js";import"./useLabels-CMNk11Q0.js";import"./useButton-Cw6qVxnq.js";import"./Dialog-Bp9SjHhK.js";import"./RSPContexts-CJngwRS-.js";import"./OverlayArrow-CopZHNLH.js";import"./useResizeObserver-DMDldRHO.js";import"./useControlledState-iud_Pbox.js";import"./Collection-B5hB3YM5.js";import"./index-e0Avl3RF.js";import"./Separator-DV9TXI7k.js";import"./SelectionManager-C7EgQSqt.js";import"./useEvent-DzaedMFS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY0GrkkP.js";import"./useDescription-DZesk85t.js";import"./ListKeyboardDelegate-DPy1dQ1v.js";import"./PressResponder-TYlz6-Gi.js";import"./useLocalizedStringFormatter-C6XmYEGX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMZRmXm_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DCGxt7Nj.js";import"./Button-DQt3X-10.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXAAVeZG.js";import"./createLucideIcon-DsB032j6.js";import"./x-BLSu5xtU.js";import"./Heading-B7NBDRgB.js";import"./info-CEUO1zmh.js";import"./Popover-B5L4XLHW.js";import"./useFormValidation-DTzib3Vr.js";import"./useField-DhzdSUPc.js";import"./Form-BSXJDsRb.js";import"./check-DZYlZTMa.js";import"./useToggleState-DOoZhcLi.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
