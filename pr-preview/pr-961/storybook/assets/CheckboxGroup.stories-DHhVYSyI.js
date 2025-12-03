import{j as e}from"./iframe-DzpGAGRs.js";import{C as m}from"./CheckboxGroup-CIqMVstF.js";import{C as p}from"./Checkbox-n3dZH415.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BJ6H7Ap3.js";import"./utils-DhQZEy20.js";import"./clsx-B-dksMZM.js";import"./Text-DzINHNBQ.js";import"./useFocusRing-CBMZ-ulq.js";import"./index-RZDpPbNi.js";import"./index-COvdJqzc.js";import"./clsx-Ciqy0D92.js";import"./Text-BciY5Tjq.js";import"./Label-yvUHoT_l.js";import"./Button-DhsqVPF-.js";import"./Hidden-BamiLY6w.js";import"./useLabels-CnU9ekD0.js";import"./useButton-DgcuQT2f.js";import"./Dialog-x_tPqD_g.js";import"./RSPContexts-Dqik0rA0.js";import"./OverlayArrow-CxKtVg1H.js";import"./useResizeObserver-DhqDyjeF.js";import"./useControlledState-Cd4ZWdr1.js";import"./Collection-CfCyruHm.js";import"./index-CPNUj5zQ.js";import"./Separator-DXYgY4tL.js";import"./SelectionManager-yKB6RIVq.js";import"./useEvent-CFsLuxvR.js";import"./scrollIntoView-J6xnNcxw.js";import"./SelectionIndicator-WJ1Ng6sH.js";import"./useDescription-_6Itm5b2.js";import"./ListKeyboardDelegate-C2T8--ZF.js";import"./PressResponder-B8bj9uGX.js";import"./useLocalizedStringFormatter-Chv8IKjN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DkDG2Qlb.js";import"./VisuallyHidden-Bu_FxHbl.js";import"./Button-zwkBBH84.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DclIrRz1.js";import"./createLucideIcon-BvhlWCmI.js";import"./x-oOrzlPsL.js";import"./Heading-CYq4rErI.js";import"./info-CYt-BXip.js";import"./Popover-Cup6NCRB.js";import"./useFormValidation-CoLbxmFl.js";import"./useField-CDhzWcTA.js";import"./Form-kiC6Xfma.js";import"./check-oOyuTTUK.js";import"./useToggleState-DdBpiNhE.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
