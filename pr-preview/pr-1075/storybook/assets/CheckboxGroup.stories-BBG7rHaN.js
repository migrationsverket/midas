import{j as e}from"./iframe-Cz8HHCXP.js";import{C as m}from"./CheckboxGroup-yD7uJTtj.js";import{C as p}from"./Checkbox-COrulbNs.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CP8pZpTQ.js";import"./utils-CHHvFpL5.js";import"./clsx-B-dksMZM.js";import"./Text-C2eLHPBt.js";import"./useFocusRing-CifWSbR7.js";import"./index-ByLFS2_k.js";import"./index-DySfiLBO.js";import"./clsx-Ciqy0D92.js";import"./Text-Ds9GT8qW.js";import"./Label-Cn-uj30S.js";import"./Button-CyhSWA6k.js";import"./Hidden-DjfT0FF_.js";import"./useLabels-C0CZzmBW.js";import"./useButton-knBJS-If.js";import"./Dialog-PfjTyKnn.js";import"./RSPContexts-BZpnDWsc.js";import"./OverlayArrow-Czi8Ji7R.js";import"./useResizeObserver-DecP2-I9.js";import"./useControlledState-CGafyotv.js";import"./Collection-Bh_gfeuR.js";import"./index-DTlwesn3.js";import"./Separator-jmVq-6bR.js";import"./SelectionManager-7ahMGbrk.js";import"./useEvent-CnM7m0F3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dq--1A-J.js";import"./useDescription-D6nJ7Lob.js";import"./ListKeyboardDelegate-kyO647b2.js";import"./PressResponder-cjCNE8YI.js";import"./useLocalizedStringFormatter-uYoPNXl-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dohc3n8K.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bnafg7jN.js";import"./Button-_rHSG3fZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BF9hqiyk.js";import"./createLucideIcon-D0LCllt7.js";import"./x-BGPJdTwu.js";import"./Heading-DEjXC6uX.js";import"./info-CGU-eILb.js";import"./Popover-Dy7L_dCg.js";import"./useFormValidation-BmxCMhME.js";import"./useField-DMkuuKjj.js";import"./Form-DvbuDjI_.js";import"./check-GVxvPxno.js";import"./useToggleState-DXC7Y8ML.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
