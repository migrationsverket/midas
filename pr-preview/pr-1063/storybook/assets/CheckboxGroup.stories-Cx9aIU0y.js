import{j as e}from"./iframe-DFBAwU5t.js";import{C as m}from"./CheckboxGroup-Cz0c-9yB.js";import{C as p}from"./Checkbox-D8plGooI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Co7gTVHK.js";import"./utils-08_GEW0N.js";import"./clsx-B-dksMZM.js";import"./Text-CDXpFHUP.js";import"./useFocusRing-B1-pNOdJ.js";import"./index-BvmdiSuy.js";import"./index-B5Eep4lh.js";import"./clsx-Ciqy0D92.js";import"./Text-D767DiYA.js";import"./Label-DrV9Uzc3.js";import"./Button-DwaTUIba.js";import"./Hidden-CtJEIX9A.js";import"./useLabels-VOQ-WGC9.js";import"./useButton-BgWyJ-L0.js";import"./Dialog-CWkzv1z4.js";import"./RSPContexts-BfZYNY1M.js";import"./OverlayArrow-BhilblKY.js";import"./useResizeObserver-Cq_3yOCl.js";import"./useControlledState-C4smYPng.js";import"./Collection-BPWUTHaO.js";import"./index-BBR8yyad.js";import"./Separator-_IwDzgMu.js";import"./SelectionManager-CmDoH34r.js";import"./useEvent-BmQdww5x.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CS6ud7d2.js";import"./useDescription-BGbqDhE9.js";import"./ListKeyboardDelegate-WDjH8gpp.js";import"./PressResponder-CkJ7-c7a.js";import"./useLocalizedStringFormatter-D1JI22qo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5XSDqDE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BEFipPde.js";import"./Button-BcXH9DHh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CG5pfhDM.js";import"./createLucideIcon-8UkP-gNy.js";import"./x-sbx_BOPL.js";import"./Heading-Bnfd32zh.js";import"./info-KHYAo607.js";import"./Popover-BDhkC3rf.js";import"./useFormValidation-DjiW17M6.js";import"./useField-Bnf9URlm.js";import"./Form-Dtd0XerJ.js";import"./check-CF6vTJnt.js";import"./useToggleState-CCJxi9p9.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
