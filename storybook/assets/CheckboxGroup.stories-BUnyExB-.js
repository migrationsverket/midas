import{j as e}from"./iframe-_gH3GU_Z.js";import{C as m}from"./CheckboxGroup-DAV3OQ9_.js";import{C as p}from"./Checkbox-ByylVEMr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DpcLG2Fx.js";import"./utils-CfJDu102.js";import"./clsx-B-dksMZM.js";import"./Text-BRHHCRG8.js";import"./useFocusRing-BXEJ-Tr4.js";import"./index-DKn8ERok.js";import"./index-CVg2kWWp.js";import"./clsx-Ciqy0D92.js";import"./Text-DjGT25-P.js";import"./Label-8HLPMpvk.js";import"./Button-B0GHbiBt.js";import"./Hidden-D04Pc1_R.js";import"./useLabels-WQAK4zlE.js";import"./useButton-D8o09r3N.js";import"./Dialog-BtuTLPLx.js";import"./RSPContexts-FS6mevKY.js";import"./OverlayArrow-BEIjUFBk.js";import"./useResizeObserver-BDJqeTBY.js";import"./useControlledState-D8rfmS1g.js";import"./Collection-CiCTCt3v.js";import"./index-CTMRyEef.js";import"./Separator-OXKMMQ8u.js";import"./SelectionManager-94IQVh0z.js";import"./useEvent-DDt3427d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ata1nNeT.js";import"./useDescription-DCw1B2k2.js";import"./ListKeyboardDelegate-BbjP68Pi.js";import"./PressResponder-D2R8re7P.js";import"./useLocalizedStringFormatter-BtyaZgHU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNQkECp5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C6ArGHnI.js";import"./Button-DXF4_9k-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CwzfDNfE.js";import"./createLucideIcon-CfuZJf8D.js";import"./x-BwSPrVqf.js";import"./Heading-BWcf_paK.js";import"./info-DxFAs9sc.js";import"./Popover-t_dPh4fH.js";import"./useFormValidation-oTP1bryq.js";import"./useField-ByUbZnyG.js";import"./Form-BOENKVbc.js";import"./check-3JajyrTA.js";import"./useToggleState-CSsAH9oD.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
