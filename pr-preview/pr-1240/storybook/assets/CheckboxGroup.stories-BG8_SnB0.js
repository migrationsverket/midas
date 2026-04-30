import{j as e}from"./iframe-DpTmCcsu.js";import{C as m}from"./CheckboxGroup-1ZnoEE43.js";import{C as p}from"./Checkbox-pcFJFnEY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DZQ02WXe.js";import"./utils-BkAa9oCc.js";import"./clsx-B-dksMZM.js";import"./Text-C2ABOPKT.js";import"./useFocusRing-p-K2lh1y.js";import"./index-DCsIhNab.js";import"./index-n8gR98_1.js";import"./clsx-Ciqy0D92.js";import"./Text-DZjjFYeH.js";import"./Label-Cuy3kht_.js";import"./Button-BsQKBFvZ.js";import"./Hidden-pLTvcnD_.js";import"./useLabel-Bn7w8Ubf.js";import"./useLabels-DI-VIC2d.js";import"./useButton-yUVIJFB0.js";import"./Dialog-DqnNjaJi.js";import"./RSPContexts-CDes9nfa.js";import"./OverlayArrow-C3m7dJ5y.js";import"./useResizeObserver-CX6ENk_I.js";import"./useControlledState-Du11SrDH.js";import"./Collection-pS06VS6s.js";import"./index-BChFUTeo.js";import"./Separator-DQbe1b_J.js";import"./SelectionManager-EeeeUcvE.js";import"./useEvent-aGapLNe8.js";import"./scrollIntoView-D1143tc0.js";import"./SelectionIndicator-CoqMXBj6.js";import"./useDescription-ZwNvLjiW.js";import"./ListKeyboardDelegate-BqFXxQy7.js";import"./PressResponder-DnodVIaB.js";import"./useLocalizedStringFormatter-B3B7XcvV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUfhnEHD.js";import"./getScrollParent-BTKk9p6-.js";import"./VisuallyHidden-Dp3u6Svq.js";import"./ModalOverlay-DavhYSKE.js";import"./x-Ch6sGbPf.js";import"./createLucideIcon-BVEhdOTx.js";import"./useLocalizedStringFormatter-DzRBAxmk.js";import"./Heading-D1Oj7BSx.js";import"./Button-BML3brTK.js";import"./Button.module-BB7N-cLd.js";import"./info-CBNYmXvC.js";import"./Popover-DO1yXugR.js";import"./Form-ZmL5cGy_.js";import"./useField-BZUShFHQ.js";import"./check-XFxp686h.js";import"./useToggleState-8zRGcaxf.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
