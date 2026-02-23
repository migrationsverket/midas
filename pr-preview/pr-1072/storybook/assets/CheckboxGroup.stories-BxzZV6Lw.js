import{j as e}from"./iframe-C7mRVAw-.js";import{C as m}from"./CheckboxGroup-ZkyIfD4O.js";import{C as p}from"./Checkbox-CQd9XUwq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BFaJaxlc.js";import"./utils-BeEL8pJ2.js";import"./clsx-B-dksMZM.js";import"./Text-C-q-JnIT.js";import"./useFocusRing-B6vJKCx-.js";import"./index-C_BC5gdb.js";import"./index-BTnShkl9.js";import"./clsx-Ciqy0D92.js";import"./Text-SdK-7_Ed.js";import"./Label-DzN4dud1.js";import"./Button-BOx_rjlH.js";import"./Hidden-DMuuZGaU.js";import"./useLabels-Ds9YSjJx.js";import"./useButton-ZvjmP_g6.js";import"./Dialog-BzorbjZ_.js";import"./RSPContexts-3BOa1bAA.js";import"./OverlayArrow-D803GnqF.js";import"./useResizeObserver-C4OyXG_p.js";import"./useControlledState-CdL3PN3V.js";import"./Collection-CrM6FHNF.js";import"./index-BGdJvTOY.js";import"./Separator-CtIQYwU7.js";import"./SelectionManager-DdQv0Ybp.js";import"./useEvent-Cc0KmnDZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfN4lR5W.js";import"./useDescription-DTA-9R__.js";import"./ListKeyboardDelegate-CjS7qxm_.js";import"./PressResponder-OH7UskiT.js";import"./useLocalizedStringFormatter-5uEV4cAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fr_vkZ8o.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bi6dfUTC.js";import"./Button-CZ_HndjP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWqMwdpP.js";import"./createLucideIcon-CxN-HpyC.js";import"./x-BrKWut6c.js";import"./Heading-0hTRdsf4.js";import"./info-DjJTGZkt.js";import"./Popover-DIhZ_Ej7.js";import"./useFormValidation-CpzrLShJ.js";import"./useField-C7j1aptb.js";import"./Form-ke4oR6s4.js";import"./check-hXMFzkCI.js";import"./useToggleState-D1jWwDBR.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
