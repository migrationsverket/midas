import{j as e}from"./iframe-CUSvXe23.js";import{C as m}from"./CheckboxGroup-22jo3xRy.js";import{C as p}from"./Checkbox-CTbW8ApC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-t8sTtSNx.js";import"./utils-CkRXDuX-.js";import"./clsx-B-dksMZM.js";import"./Text-DLWDclOW.js";import"./useFocusRing-BuJn1tRD.js";import"./index-BjoHnV1_.js";import"./index-CdztG2Xx.js";import"./clsx-Ciqy0D92.js";import"./Text-NxTN73uc.js";import"./Label-P4rLu63J.js";import"./Button-C1-Re332.js";import"./Hidden-Dhsax2Cn.js";import"./useLabel-ulwKDPvJ.js";import"./useLabels-BPCgaUFa.js";import"./useButton-BO5Zhbxe.js";import"./Dialog-WiQnBmSv.js";import"./RSPContexts-BfFZIYKm.js";import"./OverlayArrow-B9pAfRtR.js";import"./useResizeObserver-YHez26s-.js";import"./useControlledState-BDwJH1MB.js";import"./Collection-DVKXIiRM.js";import"./index-BpgVI4Ey.js";import"./Separator-BI_16oCX.js";import"./SelectionManager-DsrNbEuz.js";import"./useEvent-DjixHLjK.js";import"./scrollIntoView-CjSFcs3B.js";import"./SelectionIndicator-BsHKQOI6.js";import"./useDescription-CSzbO1wx.js";import"./ListKeyboardDelegate--p1TIPpF.js";import"./PressResponder-ZnJokgKw.js";import"./useLocalizedStringFormatter-CQWvwsyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9OdcW6fl.js";import"./getScrollParent-DO1MdHqq.js";import"./VisuallyHidden-YrO2RMP0.js";import"./Modal-BSelldcL.js";import"./x-W7_jPxcF.js";import"./createLucideIcon-Ce9oZthD.js";import"./useLocalizedStringFormatter-DOZj6KI_.js";import"./Heading-CG9en55N.js";import"./Button-ricz7KuE.js";import"./Button.module-BB7N-cLd.js";import"./info-CwlJQaKh.js";import"./Popover-CUncdCgl.js";import"./Form-CKmcwWsP.js";import"./useField-Bd0xb1Jz.js";import"./check-CGrmEn2X.js";import"./useToggleState-BmGzd-Ie.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
