import{j as e}from"./iframe-DTEEsWKs.js";import{C as m}from"./CheckboxGroup-B_8yCD_h.js";import{C as p}from"./Checkbox-xWB1lakL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-YzVCmXmy.js";import"./utils-Bei6jhoM.js";import"./clsx-B-dksMZM.js";import"./Text-D2Kdkld6.js";import"./useFocusRing-Bt_R5Kxb.js";import"./index-CDhAOoC2.js";import"./index-CAL1rCpR.js";import"./clsx-Ciqy0D92.js";import"./Text-RBLlkHxH.js";import"./Label-BDaeEe6S.js";import"./Button-D8fw21xh.js";import"./Hidden-H9M_Xkwd.js";import"./useLabels-hQ-tPN-N.js";import"./useButton-Ci76CoW9.js";import"./Dialog-DIN0rEpg.js";import"./RSPContexts-5KZxHimu.js";import"./OverlayArrow-BBzX5q84.js";import"./useResizeObserver-CRT18-jo.js";import"./useControlledState-DH-4U24x.js";import"./Collection-CAGQHqjV.js";import"./index-J-Ia9wnG.js";import"./Separator-BWJxkkUD.js";import"./SelectionManager-C5-FRUSe.js";import"./useEvent-DsaPgCLq.js";import"./scrollIntoView-BryBizoW.js";import"./SelectionIndicator-Ja_ivI3O.js";import"./useDescription-D1sH4a-N.js";import"./ListKeyboardDelegate-589J7MJh.js";import"./PressResponder-Dr-jAvmU.js";import"./useLocalizedStringFormatter-ClfAxNed.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BkVioRiR.js";import"./VisuallyHidden-DXWpkl8V.js";import"./Button-Ir9Meu39.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-4UzQK-SV.js";import"./createLucideIcon-CxA0LOFq.js";import"./x-JqIoOrJh.js";import"./Heading-BZKArxoK.js";import"./info-CmCwUkTo.js";import"./Popover-DdyJyfoV.js";import"./useFormValidation-BgckL5go.js";import"./useField-DH4gi-7n.js";import"./Form-B3hcntLC.js";import"./check-DBNmR_Vj.js";import"./useToggleState-B-jqKwmF.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
