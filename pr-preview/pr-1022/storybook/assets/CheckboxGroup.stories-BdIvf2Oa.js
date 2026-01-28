import{j as e}from"./iframe-D-t8l-nQ.js";import{C as m}from"./CheckboxGroup-BsxZKrzw.js";import{C as p}from"./Checkbox-CxjOqhUF.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Nn4mt1Aj.js";import"./utils-C09TX1Ea.js";import"./clsx-B-dksMZM.js";import"./Text-CG0yYSyZ.js";import"./useFocusRing-CR_o_Q9s.js";import"./index-BdqC0PhN.js";import"./index-csafQpnv.js";import"./clsx-Ciqy0D92.js";import"./Text-D8XkFvPl.js";import"./Label-CYCA0m5-.js";import"./Button-Bv6XbooR.js";import"./Hidden-8h6Lngiq.js";import"./useLabels-BDhfzl9l.js";import"./useButton-ucD7gpk8.js";import"./Dialog-rO0zha-c.js";import"./RSPContexts-Bjm4deda.js";import"./OverlayArrow-CeTGPrJX.js";import"./useResizeObserver-CeMaA03n.js";import"./useControlledState-D_vJ43oY.js";import"./Collection-BJ_XawYo.js";import"./index-EviCI9Dk.js";import"./Separator-SNTykIrS.js";import"./SelectionManager-K7oo-nKh.js";import"./useEvent-D7sZf_Zj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C-3v6jXm.js";import"./useDescription-DnttFM8m.js";import"./ListKeyboardDelegate-DegdBO48.js";import"./PressResponder-CeZ_li-q.js";import"./useLocalizedStringFormatter-Dt4C4rmW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DPd47qqH.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CznJ6A2t.js";import"./Button-CHG0rl3V.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BmdgiejR.js";import"./createLucideIcon-CI-4TPo-.js";import"./x-D0A6-I5y.js";import"./Heading-BwMOfTtT.js";import"./info-D8EAVG3X.js";import"./Popover-Ckh16Jlm.js";import"./useFormValidation-Bh4BmBOT.js";import"./useField-C1D7xTDh.js";import"./Form-B3WM99l_.js";import"./check-DeGdF_Nq.js";import"./useToggleState-CSo1bWyu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
