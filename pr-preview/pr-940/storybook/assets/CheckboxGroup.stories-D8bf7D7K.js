import{j as e}from"./iframe-BAs73RPL.js";import{C as m}from"./CheckboxGroup-Bg1_UIV7.js";import{C as p}from"./Checkbox-JBQee4z0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CvqgXdke.js";import"./utils-BNvagvwB.js";import"./clsx-B-dksMZM.js";import"./Text-DfkU3vzw.js";import"./useFocusRing-B5MTwkWu.js";import"./index-mTKHe5Za.js";import"./index-CPUct8TH.js";import"./clsx-Ciqy0D92.js";import"./Text-s8L5UkWk.js";import"./Label--ILklwI8.js";import"./Button-DOsNf8Ag.js";import"./Hidden-ExRgjons.js";import"./useLabels-DIezZ8D1.js";import"./useButton-Dq9Jdi2X.js";import"./Dialog-kEZUTLX1.js";import"./RSPContexts-DtBvA3Cm.js";import"./OverlayArrow-BTSL5NzX.js";import"./useResizeObserver-DK1yqie0.js";import"./useControlledState-NZanUP6y.js";import"./Collection-BGWcOl6j.js";import"./index-BvK2kbM1.js";import"./Separator-DqPdO17M.js";import"./SelectionManager-g1bpR8-9.js";import"./useEvent-DWzVrgBg.js";import"./scrollIntoView-BRZESjne.js";import"./SelectionIndicator-Bne31ylu.js";import"./useDescription-p_4Zvj2G.js";import"./ListKeyboardDelegate-DD0AmbAY.js";import"./PressResponder-BOSkUlJT.js";import"./useLocalizedStringFormatter-zi0cj8Ji.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CJ1xMZJl.js";import"./VisuallyHidden-HHC4KR7u.js";import"./Button-DpzX3_Fu.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-lGSf489A.js";import"./createLucideIcon-D8g6b5V3.js";import"./x-DbOIoYEK.js";import"./Heading-B5FaUfwe.js";import"./info-BZ84f21k.js";import"./Popover-CVdbfnV8.js";import"./useFormValidation-B9dJiJfE.js";import"./useField-BGz-Myg2.js";import"./Form-BlMDUzBD.js";import"./check-CuuCqpz_.js";import"./useToggleState-BzgezMY0.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
