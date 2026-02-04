import{j as e}from"./iframe-AzeRMI6E.js";import{C as m}from"./CheckboxGroup-BnQA0JKb.js";import{C as p}from"./Checkbox-CLsWoWFm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bhumxp-K.js";import"./utils-C6Ogk0cQ.js";import"./clsx-B-dksMZM.js";import"./Text-DifqYix-.js";import"./useFocusRing-IRQc2pc2.js";import"./index-6ebY7xVy.js";import"./index-BUDprfFK.js";import"./clsx-Ciqy0D92.js";import"./Text-CgQK_TBj.js";import"./Label-CsHKhuPA.js";import"./Button-BM_9r6cn.js";import"./Hidden-DlywG7Qa.js";import"./useLabels-CKRjxM8h.js";import"./useButton-F4pMDae2.js";import"./Dialog-8UUQmDqb.js";import"./RSPContexts-zi7bfW4c.js";import"./OverlayArrow-DnyVe5Yt.js";import"./useResizeObserver-ClCLhwuI.js";import"./useControlledState-KwKgHDy1.js";import"./Collection-CDhyUV2N.js";import"./index-d-6dDUYh.js";import"./Separator-yNfoQZtW.js";import"./SelectionManager-uTGJdGpQ.js";import"./useEvent-hvkR2q06.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B0GlzpJ_.js";import"./useDescription-DaNElkfk.js";import"./ListKeyboardDelegate--oU5vUq4.js";import"./PressResponder-DByLmu6r.js";import"./useLocalizedStringFormatter-C14yyg5V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8nb0CDz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cdl-x6Ak.js";import"./Button-Dymh8tI2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3Cc5nzM.js";import"./createLucideIcon-Cbaqp_e4.js";import"./x-CXoFC9Eh.js";import"./Heading-CKa78Z7t.js";import"./info-CjOPVPlC.js";import"./Popover-P4PXPuEU.js";import"./useFormValidation-Fw-45rMv.js";import"./useField-BOUewxY-.js";import"./Form-Cpd_U7HJ.js";import"./check-BRDl3HLR.js";import"./useToggleState-CFze852B.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
