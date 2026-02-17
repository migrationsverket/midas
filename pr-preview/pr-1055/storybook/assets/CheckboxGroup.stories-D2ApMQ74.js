import{j as e}from"./iframe-BUqHy7GG.js";import{C as m}from"./CheckboxGroup-DZ1kE0Lh.js";import{C as p}from"./Checkbox-DaYe9n80.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CDxUPwIp.js";import"./utils-DrdsiK-L.js";import"./clsx-B-dksMZM.js";import"./Text-B9jmhAwE.js";import"./useFocusRing-CebfJ1br.js";import"./index-DEv5Wt7N.js";import"./index-DZDSHzQO.js";import"./clsx-Ciqy0D92.js";import"./Text-6n5u0fKg.js";import"./Label-gfWgXfsZ.js";import"./Button-CodW0JYq.js";import"./Hidden-N4_Hw_bF.js";import"./useLabels-Dw6biMU5.js";import"./useButton-CwpzBG5G.js";import"./Dialog-qKoc5lzA.js";import"./RSPContexts-r592QdOJ.js";import"./OverlayArrow-C6nnpT1Y.js";import"./useResizeObserver-BWZcEgzp.js";import"./useControlledState-BKp7Diu5.js";import"./Collection-Bw_hG3jl.js";import"./index-DOsODoS1.js";import"./Separator-BA-clOZZ.js";import"./SelectionManager-CxDB_yOQ.js";import"./useEvent-ErruG-b9.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DCK9j9oG.js";import"./useDescription-B9Fe93xB.js";import"./ListKeyboardDelegate-DJkvH0e-.js";import"./PressResponder-BgwM_wsI.js";import"./useLocalizedStringFormatter-CvEuXf2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvBGSArR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DMnJ-77G.js";import"./Button-C0V6-7WF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8scW4RRu.js";import"./createLucideIcon-DBH6mYos.js";import"./x-Cxd8KX91.js";import"./Heading-D6s9n0x1.js";import"./info-BRbYWcbJ.js";import"./Popover-BAVECtS6.js";import"./useFormValidation-CbKAev3H.js";import"./useField-Bt7YmqoZ.js";import"./Form-COZwrKDi.js";import"./check-BDJ6T9P0.js";import"./useToggleState-CHLRl1V4.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
