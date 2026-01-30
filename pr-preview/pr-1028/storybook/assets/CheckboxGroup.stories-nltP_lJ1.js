import{j as e}from"./iframe-COBKNkIo.js";import{C as m}from"./CheckboxGroup-BEr4jh2I.js";import{C as p}from"./Checkbox-BJtMr-7e.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dc4PcQjT.js";import"./utils-Cawu88FS.js";import"./clsx-B-dksMZM.js";import"./Text-fShGFw3n.js";import"./useFocusRing-CvKJ5iP5.js";import"./index-C-3DmDn0.js";import"./index-BhECMZqo.js";import"./clsx-Ciqy0D92.js";import"./Text-CtIfC9h2.js";import"./Label-B6eBqJFb.js";import"./Button-DVN4emYY.js";import"./Hidden-DWdHgASM.js";import"./useLabels-DygN-rGJ.js";import"./useButton-B9wSSCM2.js";import"./Dialog-DB5rjtZZ.js";import"./RSPContexts-C70LcTh5.js";import"./OverlayArrow-DKSkdDqN.js";import"./useResizeObserver-Bqb8qtFK.js";import"./useControlledState-njDs9clp.js";import"./Collection-ORahdX2f.js";import"./index-CkZw-AsC.js";import"./Separator-D6JsExfa.js";import"./SelectionManager-c9AzP8-j.js";import"./useEvent-eTIvht7u.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Br11R8Lo.js";import"./useDescription-CxjHqdVd.js";import"./ListKeyboardDelegate-CCRA5f7Y.js";import"./PressResponder-DcbM8PZp.js";import"./useLocalizedStringFormatter-5TCmV2CR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8ZwlS_W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-vIshbz0f.js";import"./Button-COjdwtTG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CgpNX7X7.js";import"./createLucideIcon-CRw8Ded6.js";import"./x-Dj_xkDq5.js";import"./Heading-C1jl_BHV.js";import"./info-BqWnuKgo.js";import"./Popover-D6-r6tyV.js";import"./useFormValidation-UFN-ft0-.js";import"./useField-9hLn6ruD.js";import"./Form-CrqQ6pcU.js";import"./check-BpluVbWu.js";import"./useToggleState-BXn7YFUz.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
