import{j as e}from"./iframe-B5sjefct.js";import{C as m}from"./CheckboxGroup-2Y3nZmJR.js";import{C as p}from"./Checkbox-q3pdT5vv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DnuLUqIw.js";import"./utils-fPAwABKa.js";import"./clsx-B-dksMZM.js";import"./Text-EO7MNkCF.js";import"./useFocusRing-sOnwHe33.js";import"./index-DtgNuOCD.js";import"./index-Czs7kpwC.js";import"./clsx-Ciqy0D92.js";import"./Text-BTlYwDV5.js";import"./Label-_eZnKwmp.js";import"./Button-cTz3Pef6.js";import"./Hidden-B2p0iUh8.js";import"./useLabel-CW7f36mN.js";import"./useLabels-Dbnz0AcO.js";import"./useButton-k5p-sniw.js";import"./Dialog-CdPrQ35O.js";import"./RSPContexts-BkqIbQHr.js";import"./OverlayArrow-BKy8Iwss.js";import"./useResizeObserver-T2cvKclw.js";import"./useControlledState-C9npmvg7.js";import"./Collection-BTfOZg7O.js";import"./index-D3nQBSt7.js";import"./Separator-20uN-O-v.js";import"./SelectionManager-BuBT_k-U.js";import"./useEvent-NpEIZShQ.js";import"./scrollIntoView-CGmA7IW7.js";import"./SelectionIndicator-CNVo6PE4.js";import"./useDescription-ByFyhYps.js";import"./ListKeyboardDelegate-CEeU1U1a.js";import"./PressResponder-DbY1Mocw.js";import"./useLocalizedStringFormatter-BDTDudxH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-0ozVzaNX.js";import"./getScrollParent-CARLrFAt.js";import"./VisuallyHidden-C9CixXME.js";import"./ModalOverlay-B_SYnXNp.js";import"./x-ypr4Mk8U.js";import"./createLucideIcon-CQqZaZFl.js";import"./useLocalizedStringFormatter-DrEfy0xs.js";import"./Heading-562Cstc0.js";import"./Button-B7RHQDq3.js";import"./Button.module-BB7N-cLd.js";import"./info-QQfJEfDA.js";import"./Popover-DMGrBaL7.js";import"./Form-DV6cj1j8.js";import"./useField-rQs3eruV.js";import"./check-BehJ-9hW.js";import"./useToggleState-CaVnP84R.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
