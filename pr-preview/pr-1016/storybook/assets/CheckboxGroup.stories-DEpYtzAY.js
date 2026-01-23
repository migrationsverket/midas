import{j as e}from"./iframe-BAYQ7wPm.js";import{C as m}from"./CheckboxGroup-BqSDth3-.js";import{C as p}from"./Checkbox-JCeSn4--.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CfAJu8nC.js";import"./utils-B8pynThE.js";import"./clsx-B-dksMZM.js";import"./Text-C4XWfuMR.js";import"./useFocusRing-CL1JgRkg.js";import"./index-BzHN4zRj.js";import"./index-DgHNcNqv.js";import"./clsx-Ciqy0D92.js";import"./Text-CVc5K2oN.js";import"./Label-9AI5fQKa.js";import"./Button-DaxR4XlV.js";import"./Hidden-HP5fIGu5.js";import"./useLabels-DjtSinuU.js";import"./useButton-butUTOni.js";import"./Dialog-CshVP8sY.js";import"./RSPContexts-Csbt4o4l.js";import"./OverlayArrow-B1G0SbAo.js";import"./useResizeObserver-Cv5kPNnQ.js";import"./useControlledState-BcBrR0N6.js";import"./Collection-Cm8Ok7h2.js";import"./index-C7oLBNnx.js";import"./Separator-D9L1rOE7.js";import"./SelectionManager-T1TTTMx9.js";import"./useEvent-BhF9SPwq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-kj3v0dd8.js";import"./useDescription-Bv0l7l0W.js";import"./ListKeyboardDelegate-DI8WxP8c.js";import"./PressResponder-KdMpQCLt.js";import"./useLocalizedStringFormatter-Bcu9SfMx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DFx8PkgU.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bku1biRk.js";import"./Button-nEHC_YIx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BkiQvC4b.js";import"./createLucideIcon-BCpEwjBi.js";import"./x-Cnwr1QDl.js";import"./Heading-Bo28UVZ4.js";import"./info-CmsnbEXJ.js";import"./Popover-D1o_UEmt.js";import"./useFormValidation-CBGAQwe2.js";import"./useField-C6VONpWL.js";import"./Form-1EAQwkMT.js";import"./check-CFIFo5Zz.js";import"./useToggleState-BOR5P64J.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
