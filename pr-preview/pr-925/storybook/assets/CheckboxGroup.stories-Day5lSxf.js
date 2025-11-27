import{j as e}from"./iframe-8NxkOHC0.js";import{C as m}from"./CheckboxGroup-Bg8chElN.js";import{C as p}from"./Checkbox-Ca2KVCx8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CzI3oRhH.js";import"./utils-BjJTDc6K.js";import"./clsx-B-dksMZM.js";import"./Text-CAM644I6.js";import"./useFocusRing-Ai_dklgC.js";import"./index-Dp_nq2C7.js";import"./index-C0eAkoQ8.js";import"./clsx-Ciqy0D92.js";import"./Text-CFZh4J2g.js";import"./Label-BIUa3pJk.js";import"./Button-CBX6q1X7.js";import"./Hidden-ARem1YbJ.js";import"./useLabels-BwvuP5Nn.js";import"./useButton-gPG0D9SS.js";import"./Dialog-BmvzvLq-.js";import"./RSPContexts-COvuTsKM.js";import"./OverlayArrow-CwJldLCy.js";import"./useResizeObserver-BX0kdKzp.js";import"./useControlledState-xUvVHfPd.js";import"./Collection-3tcND9Ce.js";import"./index-BY16o8kY.js";import"./Separator-uLS3y2pl.js";import"./SelectionManager-QYSQsT4a.js";import"./useEvent-D0REUeSa.js";import"./scrollIntoView-jhVEGj5Z.js";import"./SelectionIndicator-B66G8jmF.js";import"./useDescription-CVSDalp1.js";import"./ListKeyboardDelegate-5WyxpSlG.js";import"./PressResponder-BqXDWtzG.js";import"./useLocalizedStringFormatter-Clupnulk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DeCDJb6-.js";import"./VisuallyHidden-nH3VdIbm.js";import"./Button-be8rRcw-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-SobQoFpC.js";import"./createLucideIcon-Zab4VPSU.js";import"./x-CizWcIUD.js";import"./Heading-NJOheOkw.js";import"./info-vZ96BD-5.js";import"./Popover-D8L-I8mB.js";import"./useFormValidation-DuZ8Mn8e.js";import"./useField-CH8AEZxT.js";import"./Form-DPLGVkx_.js";import"./check-B-cGDyei.js";import"./useToggleState-B8PTUtOo.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
