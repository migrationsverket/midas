import{j as e}from"./iframe-DKSPN_rt.js";import{C as m}from"./CheckboxGroup-BL1Szm6a.js";import{C as p}from"./Checkbox-Cbc3PMXZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CGHdNWyD.js";import"./utils-Dsb4CS80.js";import"./clsx-B-dksMZM.js";import"./Text-Bjh-HQuI.js";import"./useFocusRing-DIM101qK.js";import"./index-CgoYFXbr.js";import"./index-DIEsqu5Q.js";import"./clsx-Ciqy0D92.js";import"./Text-DS4myfGl.js";import"./Label-CT_uc7QN.js";import"./Button-D_ksf53O.js";import"./Hidden-rmoVbPRV.js";import"./useLabels-DMhDiSEv.js";import"./useButton-ld_mmKe7.js";import"./Dialog-Cd0Qusqo.js";import"./RSPContexts-D7Y3JUuE.js";import"./OverlayArrow-D7xR0OBY.js";import"./useResizeObserver-Bu_ol_6y.js";import"./useControlledState-CRiY1CfR.js";import"./Collection-Pk1zjnDd.js";import"./index-B4oV2hzS.js";import"./Separator-BKjTkHwz.js";import"./SelectionManager-CRXXHeJa.js";import"./useEvent-WaBg8569.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-jJOTZ3KW.js";import"./useDescription-CtUioLWT.js";import"./ListKeyboardDelegate-lcz-DEyi.js";import"./PressResponder-15UO_rnr.js";import"./useLocalizedStringFormatter-DHrvMH-8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CtpBP1yi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C5ojwSbT.js";import"./Button-DeDsiUlU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BNEuYvl4.js";import"./createLucideIcon-Cef0fBNb.js";import"./x-RaB1lDYv.js";import"./Heading-BumJDw-e.js";import"./info-BOF0MMRQ.js";import"./Popover-DG4fFYgh.js";import"./useFormValidation-No2F6jq6.js";import"./useField-Bm2ze5GN.js";import"./Form-DNk9CeTC.js";import"./check-DQevY4Zw.js";import"./useToggleState-BPz-Nz-B.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
