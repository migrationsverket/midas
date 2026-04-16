import{j as e}from"./iframe-_pn10Gh5.js";import{C as m}from"./CheckboxGroup-DoxeTjLR.js";import{C as p}from"./Checkbox-DOew_XhB.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DNAaC6mi.js";import"./utils-Dxs9pDcB.js";import"./clsx-B-dksMZM.js";import"./Text-CTGKw8zC.js";import"./useFocusRing-Du-3sSFw.js";import"./index-Cw5lWwtj.js";import"./index-8X9ryZUF.js";import"./clsx-Ciqy0D92.js";import"./Text-B6_JfJRz.js";import"./Label-DBLS2Zm1.js";import"./Button-BbTH0gim.js";import"./Hidden-B59_1jQa.js";import"./useLabel-G0kMe1Tv.js";import"./useLabels-D2T-Rr0V.js";import"./useButton-C6hhINuJ.js";import"./Dialog-Cyw3U-z-.js";import"./RSPContexts-qi1qSqWJ.js";import"./OverlayArrow-mp8JD48b.js";import"./useResizeObserver-BWojxgN3.js";import"./useControlledState-B3g2_X4G.js";import"./Collection-D2dsY8lM.js";import"./index-Bo66yhSK.js";import"./Separator-Ba8TtDCF.js";import"./SelectionManager-4whR5RAS.js";import"./useEvent-DjkDRboI.js";import"./scrollIntoView-PAGe5JTT.js";import"./SelectionIndicator-qNnmvrpX.js";import"./useDescription-BKvd-nfd.js";import"./ListKeyboardDelegate-CQ6Tj1SL.js";import"./PressResponder-E6QiKd1a.js";import"./useLocalizedStringFormatter-BPfMaHdV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXMfGWlf.js";import"./getScrollParent-0TLzMWVN.js";import"./VisuallyHidden-DrcSE3si.js";import"./ModalOverlay-R5dlB-Nl.js";import"./x-LrHo8mCt.js";import"./createLucideIcon-B0iC-DBv.js";import"./useLocalizedStringFormatter-CE2BIbZN.js";import"./Heading-KCFO_xOa.js";import"./Button-D11fELwQ.js";import"./Button.module-BB7N-cLd.js";import"./info-Dq8wNctB.js";import"./Popover-Cd47ZjX9.js";import"./Form-DbnAgaD0.js";import"./useField-BidYdbaA.js";import"./check-BtHqvQ2w.js";import"./useToggleState-DJq0HyD1.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
