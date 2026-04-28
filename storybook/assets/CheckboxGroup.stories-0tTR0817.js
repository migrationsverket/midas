import{j as e}from"./iframe-Dl4LNfFt.js";import{C as m}from"./CheckboxGroup-CXDXeLNT.js";import{C as p}from"./Checkbox-3nmmTNzm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D8UkVWbY.js";import"./utils-zoe11Nhs.js";import"./clsx-B-dksMZM.js";import"./Text-P-m_usmt.js";import"./useFocusRing-DBInQ3ih.js";import"./index-B4dlJKhH.js";import"./index-DfhqQ-fy.js";import"./clsx-Ciqy0D92.js";import"./Text-htVbAu9h.js";import"./Label-CZ0JfQMw.js";import"./Button-1ORHN5ed.js";import"./Hidden-qMhe2ll1.js";import"./useLabel-BMyaEN82.js";import"./useLabels-D1nLqhyh.js";import"./useButton-B3ilWFtn.js";import"./Dialog-DPGx9omw.js";import"./RSPContexts-4lSoz9P-.js";import"./OverlayArrow-DLh9Tp41.js";import"./useResizeObserver-CvCvp2Tt.js";import"./useControlledState-CyH9azIX.js";import"./Collection-Bo8GIdVi.js";import"./index-CDp8Li4l.js";import"./Separator--rhMpA_n.js";import"./SelectionManager-Dd8kFD9H.js";import"./useEvent-BlUZThVq.js";import"./scrollIntoView-B7KTALk8.js";import"./SelectionIndicator-BOl6pKjd.js";import"./useDescription-ccYB2Tbm.js";import"./ListKeyboardDelegate-BwRHOVKV.js";import"./PressResponder-4D9BL6pn.js";import"./useLocalizedStringFormatter-BfzJ7Wkp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-InBdBZ0D.js";import"./getScrollParent-CRvNPk_3.js";import"./VisuallyHidden-CI441pyr.js";import"./ModalOverlay-DW1iRgTe.js";import"./x-BosK2Sg6.js";import"./createLucideIcon-1sQySh6M.js";import"./useLocalizedStringFormatter-BHmmo-Zt.js";import"./Heading-DMV6k00x.js";import"./Button-CE6ptzle.js";import"./Button.module-BB7N-cLd.js";import"./info-CCg9E48S.js";import"./Popover-CjC4abvw.js";import"./Form-BW3kbuFu.js";import"./useField-Bt07QuwG.js";import"./check-DbUEPk8b.js";import"./useToggleState-DrjK-n7i.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
