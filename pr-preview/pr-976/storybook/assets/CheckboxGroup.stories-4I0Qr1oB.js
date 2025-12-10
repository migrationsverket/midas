import{j as e}from"./iframe-BEnukkSz.js";import{C as m}from"./CheckboxGroup-BkljlF0k.js";import{C as p}from"./Checkbox-CT-ai9hD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bwl06kWX.js";import"./utils-BbU1CVYT.js";import"./clsx-B-dksMZM.js";import"./Text-DeqrOkdQ.js";import"./useFocusRing-CoFg4iIP.js";import"./index-CsvThf5c.js";import"./index-XX1rAQcD.js";import"./clsx-Ciqy0D92.js";import"./Text-t8HEv2as.js";import"./Label-C5yrJJU3.js";import"./Button-BqfWUXxO.js";import"./Hidden-B9TQXGL0.js";import"./useLabels-ugYGghQ_.js";import"./useButton-D_d4gnP9.js";import"./Dialog-DRuhD6ii.js";import"./RSPContexts-Dqt4Tvru.js";import"./OverlayArrow-Bt075tAw.js";import"./useResizeObserver-dVu7hdDW.js";import"./useControlledState-rz1_euMV.js";import"./Collection-B4DYHjSB.js";import"./index-SFb8YED0.js";import"./Separator-B5kuziys.js";import"./SelectionManager-etTWarXv.js";import"./useEvent-DAOaZ6v6.js";import"./scrollIntoView-BomYB8lz.js";import"./SelectionIndicator-CiUDKmaB.js";import"./useDescription-73K0p83_.js";import"./ListKeyboardDelegate-BLoDMx7u.js";import"./PressResponder-c074QkNe.js";import"./useLocalizedStringFormatter-BYVAgv0U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BLEprXuX.js";import"./VisuallyHidden-CJIG9rle.js";import"./Button-Dm5kz4rE.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-CMLQkYUH.js";import"./createLucideIcon-duiEOPcW.js";import"./x-CoXyzLMZ.js";import"./Heading-glCZ44Mw.js";import"./info-c0HBTqXD.js";import"./Popover-aDX4Z1ab.js";import"./useFormValidation-DeA6ARBW.js";import"./useField-DblSzxct.js";import"./Form-JA4VLDpe.js";import"./check-C5PO9Luo.js";import"./useToggleState-DE6oyBJR.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
