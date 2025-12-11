import{j as e}from"./iframe-BarP2jEI.js";import{C as m}from"./CheckboxGroup-Bwu4j2Q3.js";import{C as p}from"./Checkbox-Ck-NboVn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DxRFbn5t.js";import"./utils-C4VFQC2w.js";import"./clsx-B-dksMZM.js";import"./Text-Cgl57qJM.js";import"./useFocusRing-DKrTHlrP.js";import"./index-qTJghRDJ.js";import"./index-B3DTuUjM.js";import"./clsx-Ciqy0D92.js";import"./Text-CFga_qib.js";import"./Label-BWapmDIg.js";import"./Button-BFy7bnhd.js";import"./Hidden-BzLfC3ct.js";import"./useLabels-EBmgp5uD.js";import"./useButton-B6nqpc-n.js";import"./Dialog-D7ridQn2.js";import"./RSPContexts-DorGtGJK.js";import"./OverlayArrow-CCV6megK.js";import"./useResizeObserver-BmyNX4--.js";import"./useControlledState-DPmoT0HX.js";import"./Collection-B0ZXv8zU.js";import"./index-ccBN5LT5.js";import"./Separator-D1J7mo9z.js";import"./SelectionManager-zJTbAlTg.js";import"./useEvent-8BDkAAU_.js";import"./scrollIntoView-DWi33ldc.js";import"./SelectionIndicator-BCuneF3-.js";import"./useDescription-Dpb_au7p.js";import"./ListKeyboardDelegate-Ds2DiDW7.js";import"./PressResponder-Eu0Dw5_N.js";import"./useLocalizedStringFormatter-C81jcEn6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BvHL7zz3.js";import"./VisuallyHidden-xLs_ajub.js";import"./Button-BcHfCKKh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C2KBH29y.js";import"./createLucideIcon-MWFfQUSk.js";import"./x-DIka_85k.js";import"./Heading-C0pjRHxu.js";import"./info-H4Ph27dn.js";import"./Popover-vDS3n8YI.js";import"./useFormValidation-DoiobDGc.js";import"./useField-_KFG8c9F.js";import"./Form-C5lx1s5w.js";import"./check-Cg9Pt7Ck.js";import"./useToggleState-eVQX_jS4.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
