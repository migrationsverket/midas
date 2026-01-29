import{j as e}from"./iframe-CxaG9I7P.js";import{C as m}from"./CheckboxGroup-BBqTzsDq.js";import{C as p}from"./Checkbox-DcFZl-qF.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C4Y2gpA2.js";import"./utils-Czlm0UBK.js";import"./clsx-B-dksMZM.js";import"./Text-B1ar5pgm.js";import"./useFocusRing-B_8tQUZZ.js";import"./index-t5CRhWba.js";import"./index-C83Nl3_M.js";import"./clsx-Ciqy0D92.js";import"./Text-Bsr9FprL.js";import"./Label-C9x5OzrZ.js";import"./Button-CmgJ4xb0.js";import"./Hidden-C8k63pZ_.js";import"./useLabels-Q9h_GLhy.js";import"./useButton-BF83G0Tr.js";import"./Dialog-DYdk1Gmn.js";import"./RSPContexts-CqSw1FEj.js";import"./OverlayArrow-GOTvl9Ar.js";import"./useResizeObserver-CKfl-E9w.js";import"./useControlledState-BJUuheTr.js";import"./Collection-D-DLhQ9U.js";import"./index-3NXgPggs.js";import"./Separator-Dd4TCG1R.js";import"./SelectionManager-CeziSyDL.js";import"./useEvent-DnFFUpVr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B6rWNH3A.js";import"./useDescription-Bku4Pvc9.js";import"./ListKeyboardDelegate-BlrHGTdI.js";import"./PressResponder-Bfj7Bjbd.js";import"./useLocalizedStringFormatter-BKXqtz3g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CURYxixi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C45-MbEO.js";import"./Button-CzqSm8W5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcPkzblS.js";import"./createLucideIcon-Bvlak_27.js";import"./x-CeZp12Sq.js";import"./Heading-BCnUBzk0.js";import"./info-Dd8P1yaE.js";import"./Popover-l1ZlkkXZ.js";import"./useFormValidation-1UvULbqT.js";import"./useField-eXjHNk9f.js";import"./Form-BP8EURmm.js";import"./check-C99l1nb6.js";import"./useToggleState-BzwvRsCu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
