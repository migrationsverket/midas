import{j as e}from"./iframe-RTTcOKWo.js";import{C as m}from"./CheckboxGroup-CIQsTGx5.js";import{C as p}from"./Checkbox-JmwrOs_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CpMxr9c5.js";import"./utils-D1hKCylV.js";import"./clsx-B-dksMZM.js";import"./Text-C6b-YPN0.js";import"./useFocusRing-BPdF-1cC.js";import"./index-DLoD3cgP.js";import"./index-DFgDWFo1.js";import"./clsx-Ciqy0D92.js";import"./Text-DuBji0m4.js";import"./Label-WLINeu_G.js";import"./Button-By1VqlsU.js";import"./Hidden-8U697ZOC.js";import"./useLabels-CVDdXQg_.js";import"./useButton-BYzzGwzi.js";import"./Dialog-VkPc-IAP.js";import"./RSPContexts-CSsrJs75.js";import"./OverlayArrow-BdWd3P2S.js";import"./useResizeObserver-rY1Lercj.js";import"./useControlledState-BfNYqLEH.js";import"./Collection-CnbLTdv5.js";import"./index-Cdog32Ud.js";import"./Separator-CrdCkp7o.js";import"./SelectionManager-BNMg56MX.js";import"./useEvent-BaOlqYrM.js";import"./scrollIntoView-D_w-QXDr.js";import"./SelectionIndicator-FD9ae3ZA.js";import"./useDescription-0Cssm7i0.js";import"./ListKeyboardDelegate-DzEePOMZ.js";import"./PressResponder-CmOYH4Zl.js";import"./useLocalizedStringFormatter-Dp6tEqIr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DO67mrk6.js";import"./getScrollParent-CH4E63H1.js";import"./VisuallyHidden-Dmb8KXLU.js";import"./x-BEn0c19g.js";import"./createLucideIcon-D2PeHOHn.js";import"./useLocalizedStringFormatter-Cqxl6r8R.js";import"./Heading-TYrACDki.js";import"./Button-EZmHrLhm.js";import"./Button.module-BB7N-cLd.js";import"./info-Ds4if5px.js";import"./Popover-DbdINDdm.js";import"./Form-CAZPrwu9.js";import"./useField-SLaCYCL4.js";import"./check-DTkIp44P.js";import"./useToggleState-CGfcUHCA.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
