import{j as e}from"./iframe-C1JT45wI.js";import{C as m}from"./CheckboxGroup-C9tHbg33.js";import{C as p}from"./Checkbox-Di5P7n8j.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CRFea137.js";import"./utils-B3mA2zMb.js";import"./clsx-B-dksMZM.js";import"./Text-Do4Hf0SC.js";import"./useFocusRing-CMjH5GB-.js";import"./index-C7sIRXbI.js";import"./index-Ddf_a0id.js";import"./clsx-Ciqy0D92.js";import"./Text-BnVMb_Eh.js";import"./Label-CsI35Iya.js";import"./Button-iYwZhBmL.js";import"./Hidden-B97wECjB.js";import"./useLabels-DEpiNBM8.js";import"./useButton-gvMW1tsr.js";import"./Dialog-BWPdqkkK.js";import"./RSPContexts-DsZAf0Kq.js";import"./OverlayArrow-6b3z8Dc4.js";import"./useResizeObserver-DNv4RNnC.js";import"./useControlledState-1gHrzrW8.js";import"./Collection-D6aLFlgl.js";import"./index-NpDGjW3p.js";import"./Separator-M5nPkv4s.js";import"./SelectionManager-Bfq0-7_-.js";import"./useEvent-CMhUQfXy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQBUQ4k9.js";import"./useDescription-AygReMNv.js";import"./ListKeyboardDelegate-B7KmNsgj.js";import"./PressResponder-BOgwUnrt.js";import"./useLocalizedStringFormatter-BMOogDa6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-pC8zvn35.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CExqZ3An.js";import"./Button-Cvr3NX4g.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-OdPEDV.js";import"./createLucideIcon-DjE8uKST.js";import"./x-BEtEw_xa.js";import"./Heading-ZXPKAgVW.js";import"./info-BXyxxGGm.js";import"./Popover-D1vltZt0.js";import"./useFormValidation-DlaAewcn.js";import"./useField-ClfrWth6.js";import"./Form-CmZHX-Gu.js";import"./check-B0G9DJKh.js";import"./useToggleState-DQ6qqjDm.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
