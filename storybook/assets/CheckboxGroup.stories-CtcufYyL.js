import{j as e}from"./iframe-BMRKkr6e.js";import{C as m}from"./CheckboxGroup-DZLKlvrw.js";import{C as p}from"./Checkbox-DiTIK0Of.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CYoJn7Ex.js";import"./utils-B-Wd4T21.js";import"./clsx-B-dksMZM.js";import"./Text-Dwlww6gP.js";import"./useFocusRing-CUJDhn4b.js";import"./index-DC2q9WHS.js";import"./index-DM5nM3xE.js";import"./clsx-Ciqy0D92.js";import"./Text-yRvyJMt7.js";import"./Label-_wBKyD_e.js";import"./Button-Dhgmb7a4.js";import"./Hidden-l6G7bJI-.js";import"./useLabels-LcBHp2R_.js";import"./useButton-Dx2DQTbk.js";import"./Dialog-CwJI87Uj.js";import"./RSPContexts-BnN2F5J4.js";import"./OverlayArrow-C3WhtyZT.js";import"./useResizeObserver-38Wtw_EX.js";import"./useControlledState-CtWZRpAk.js";import"./Collection-CrtYSmGP.js";import"./index-gixeR2_9.js";import"./Separator-C44O_kW2.js";import"./SelectionManager-DiVceX2c.js";import"./useEvent-bPhGLQHX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DdxuIDlF.js";import"./useDescription-C304Q647.js";import"./ListKeyboardDelegate-CR7uIuuR.js";import"./PressResponder-C3rlrrkb.js";import"./useLocalizedStringFormatter-DHdUL6pM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKvv7o_3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ul3GEQ14.js";import"./Button-8LMnIdeM.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DwRrqd4W.js";import"./createLucideIcon-DZqSyMAm.js";import"./x-D17aNKNC.js";import"./Heading-BEILCOej.js";import"./info-Saq-iQ1I.js";import"./Popover-CPI7ch0m.js";import"./useFormValidation-D3ipRiab.js";import"./useField-BYylXV7g.js";import"./Form-BSq0XxHe.js";import"./check-0spXETxS.js";import"./useToggleState-CwM9nHpJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
