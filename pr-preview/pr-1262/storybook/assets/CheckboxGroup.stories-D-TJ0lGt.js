import{j as e}from"./iframe-CDEaDO_F.js";import{C as m}from"./CheckboxGroup-BCOCsWFM.js";import{C as p}from"./Checkbox-DazsdxzI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-28bsvyp8.js";import"./utils-OMrxCTYB.js";import"./clsx-B-dksMZM.js";import"./Text-BM9CJ7ZD.js";import"./useFocusRing-D6D_N6j5.js";import"./index-HLg42q85.js";import"./index-BWuCcNre.js";import"./clsx-Ciqy0D92.js";import"./Text-I0yIqnfi.js";import"./Label-BBH0OudU.js";import"./Button-VtRoDegr.js";import"./Hidden-DV64-eP0.js";import"./useLabel-BWHpOmGl.js";import"./useLabels-BTwbSZKD.js";import"./useButton-mnoEnHil.js";import"./Dialog-CkXE7XRd.js";import"./RSPContexts-ByGtY0Qq.js";import"./OverlayArrow-BfqAbg3c.js";import"./useResizeObserver-BlflmIY_.js";import"./useControlledState-DL-5sHQJ.js";import"./Collection-DpglE9eU.js";import"./index-oXSIQico.js";import"./Separator-C1yvXGtZ.js";import"./SelectionManager-BONC5nvo.js";import"./useEvent-CWkInWDY.js";import"./scrollIntoView-Bi7y7USg.js";import"./SelectionIndicator-1032K0bl.js";import"./useDescription-DD-0CJF1.js";import"./ListKeyboardDelegate-DjIVihIp.js";import"./PressResponder-CemorAbx.js";import"./useLocalizedStringFormatter-BYvnlSsE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BPjnfsCI.js";import"./getScrollParent-DqH0lpOQ.js";import"./VisuallyHidden-D_heY0RE.js";import"./ModalOverlay-oqnbdp2F.js";import"./x-jshiSbcB.js";import"./createLucideIcon-B5m9rABL.js";import"./useLocalizedStringFormatter-1JfWbRYz.js";import"./Heading-CLMFJaeB.js";import"./Button-BRFWodMz.js";import"./Button.module-BB7N-cLd.js";import"./info-BZqraZA3.js";import"./Popover-Dn0J3jUe.js";import"./Form-CMCMqyJK.js";import"./useField-DLK70uIH.js";import"./check-D90t5UYS.js";import"./useToggleState-CoyhYIoY.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
