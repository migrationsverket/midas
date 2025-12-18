import{j as e}from"./iframe-BsLcG5dW.js";import{C as m}from"./CheckboxGroup-D9YnaiD-.js";import{C as p}from"./Checkbox-CTtEexIh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-5ugqjl9x.js";import"./utils-D4ybwJ5t.js";import"./clsx-B-dksMZM.js";import"./Text-BSyI915z.js";import"./useFocusRing-CRMF4aev.js";import"./index-CzmRrwoB.js";import"./index-FzS7-Zeo.js";import"./clsx-Ciqy0D92.js";import"./Text-DxPppo1m.js";import"./Label-sFF3U46M.js";import"./Button-BTB8VJIr.js";import"./Hidden-qLdjn3wv.js";import"./useLabels-BR2Qh3rY.js";import"./useButton-Ba6tOTsI.js";import"./Dialog-OV4kgN1K.js";import"./RSPContexts-hJUcswH1.js";import"./OverlayArrow-BE4lLXcC.js";import"./useResizeObserver-BJ3calFd.js";import"./useControlledState-C4DuSNuI.js";import"./Collection-Cx77u14n.js";import"./index-CIQSoHVc.js";import"./Separator-D_jOc6Zn.js";import"./SelectionManager-CvzC32Xt.js";import"./useEvent-aUuuXZGE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CguOllKQ.js";import"./useDescription-Bh7CB7XY.js";import"./ListKeyboardDelegate-BTIuYiNN.js";import"./PressResponder-BYT0Rh0_.js";import"./useLocalizedStringFormatter-gMpMxUKt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bb2V3bt4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-_HN--CTP.js";import"./Button-B2aniDfg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPMXn8cB.js";import"./createLucideIcon-18oN6ckY.js";import"./x-D-I5fcbM.js";import"./Heading-B-TWaQON.js";import"./info-YZ8kz2IS.js";import"./Popover-C-8wuYJQ.js";import"./useFormValidation-8zANhESY.js";import"./useField-BMLcCBUB.js";import"./Form-D4UvjssS.js";import"./check-BgstTH0W.js";import"./useToggleState-d3OdfnGf.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
