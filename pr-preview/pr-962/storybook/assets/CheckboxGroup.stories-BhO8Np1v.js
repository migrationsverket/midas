import{j as e}from"./iframe-a6Wk3Xzy.js";import{C as m}from"./CheckboxGroup-C76R_hf6.js";import{C as p}from"./Checkbox-CVs6LAuz.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BCytiDW7.js";import"./utils-Djxj9dvS.js";import"./clsx-B-dksMZM.js";import"./Text-DkJniAIt.js";import"./useFocusRing-C1yXmCPx.js";import"./index-BIPy-evI.js";import"./index-h3_AmtF7.js";import"./clsx-Ciqy0D92.js";import"./Text-Cei6q4nW.js";import"./Label-DXagKvxd.js";import"./Button-D3kzwT0j.js";import"./Hidden-DuHdXNGk.js";import"./useLabels-C0y6iNyy.js";import"./useButton-BLcqsVts.js";import"./Dialog-CXvjpGUD.js";import"./RSPContexts-SYjPV_Gd.js";import"./OverlayArrow-CyE76S0y.js";import"./useResizeObserver-BdfPDCR2.js";import"./useControlledState-DCZoTGT5.js";import"./Collection-BxZCsRFI.js";import"./index-D2MYWhMB.js";import"./Separator-DC01dWRI.js";import"./SelectionManager-505Ik3lC.js";import"./useEvent-DDIjSBAF.js";import"./scrollIntoView-D4IpJVjb.js";import"./SelectionIndicator-CdYP5Mmy.js";import"./useDescription-CCWPLKTi.js";import"./ListKeyboardDelegate-hyjiyDq3.js";import"./PressResponder-Dhuu2u_J.js";import"./useLocalizedStringFormatter-CuYf0UQ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DPdiGwy9.js";import"./VisuallyHidden-nz69IdQH.js";import"./Button-BXJQHasJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-73Ei4hOY.js";import"./createLucideIcon-D5ghYwFQ.js";import"./x-UTOZVbAg.js";import"./Heading-B2z4anRX.js";import"./info-3ZPJIb02.js";import"./Popover-BqLHs2z5.js";import"./useFormValidation-ONm4qT-T.js";import"./useField-BDXXirFK.js";import"./Form-CV6_CH2f.js";import"./check-BMVdLF27.js";import"./useToggleState-BRuYAOwi.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
