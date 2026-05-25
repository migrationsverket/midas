import{j as e}from"./iframe-CDA_ildW.js";import{C as m}from"./CheckboxGroup-BR2ylCAB.js";import{C as p}from"./Checkbox-BuC-Sg7w.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-6T9sq_yG.js";import"./utils-DYwc33gT.js";import"./clsx-B-dksMZM.js";import"./Text-K4BkD2rQ.js";import"./useFocusRing-3NNdwvus.js";import"./index-CSSYRJw_.js";import"./index-BBLevZqB.js";import"./clsx-Ciqy0D92.js";import"./Text-ThZYXmAV.js";import"./Label-CtbMCTte.js";import"./Button-Djyjt8oy.js";import"./Hidden-DPevkO8m.js";import"./useLabel-B0vXNp9W.js";import"./useLabels-CI-l0tvd.js";import"./useButton-BoIayeTx.js";import"./Dialog-BQv3YqZW.js";import"./RSPContexts-txMKpHrt.js";import"./OverlayArrow-C2FN7BXZ.js";import"./useResizeObserver-rW2TM9K1.js";import"./useControlledState-K9GQEKN-.js";import"./Collection-SRMBzawM.js";import"./index-CXnan05L.js";import"./Separator-CduiM4Yn.js";import"./SelectionManager-DvdfVsnr.js";import"./useEvent-H41NhmUB.js";import"./scrollIntoView-CDtwkdUZ.js";import"./SelectionIndicator-Mz0JAxcc.js";import"./useDescription-_BnwWcQ8.js";import"./ListKeyboardDelegate-B31G3H95.js";import"./PressResponder-ymxt6aWP.js";import"./useLocalizedStringFormatter-Bx9Y73Mw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CrDB_43n.js";import"./getScrollParent-BOHsqMJ6.js";import"./VisuallyHidden-D1KRANLi.js";import"./ModalOverlay-DEUulthf.js";import"./x-BUsqX4F1.js";import"./createLucideIcon-HvfaTVWX.js";import"./useLocalizedStringFormatter-D0XL9qnD.js";import"./Heading-BuYaNJ4e.js";import"./Button-ByHOpWo0.js";import"./Button.module-BB7N-cLd.js";import"./info-mC3AECCs.js";import"./Popover-DuqRbdii.js";import"./Form-DdFGDuZ4.js";import"./useField-DXzrxJwr.js";import"./check-CNy05Esb.js";import"./useToggleState-orlbBJVk.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
