import{j as e}from"./iframe-BP7DzUIh.js";import{C as m}from"./CheckboxGroup-DM8TDFYp.js";import{C as p}from"./Checkbox-B1lbJgkR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DwMEu-CZ.js";import"./utils-B9_czYqy.js";import"./clsx-B-dksMZM.js";import"./Text-C6QCLAD1.js";import"./useFocusRing-Apf-8Fr7.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./clsx-Ciqy0D92.js";import"./Text-C-lFPFDT.js";import"./Label-0yjB-E8z.js";import"./Button-yD28QKfx.js";import"./Hidden-DlKvXDgO.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./Dialog-B6ZEH6ru.js";import"./RSPContexts-C286y1L4.js";import"./OverlayArrow-DTP3iI7m.js";import"./useResizeObserver-_Mvg5rJV.js";import"./useControlledState-B7al1qBg.js";import"./Collection-CEHuK8QM.js";import"./index-CqTzYnk-.js";import"./Separator-Ci0cwtQM.js";import"./SelectionManager-CcZ5FS4I.js";import"./useEvent-boX-2EsT.js";import"./scrollIntoView-BqUk0Mej.js";import"./SelectionIndicator-3vIypJAh.js";import"./useDescription-B4UE-M1p.js";import"./ListKeyboardDelegate-D_F26l9l.js";import"./PressResponder-BxiRPNH8.js";import"./useLocalizedStringFormatter-Dp1Z2nGk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qcmAUM1D.js";import"./getScrollParent-CMfkxxdv.js";import"./VisuallyHidden-CFJkh_29.js";import"./x-BKCqd2ot.js";import"./createLucideIcon-zXtIRWL6.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";import"./Heading-C3r0aHk-.js";import"./Button-e7FuQA8u.js";import"./Button.module-BB7N-cLd.js";import"./info-CCcA_oOV.js";import"./Popover-DQuHdZGW.js";import"./Form-BAJVgpQE.js";import"./useField-p1IS5Xfo.js";import"./check-4FHh4X7_.js";import"./useToggleState-CdgQZ47W.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
