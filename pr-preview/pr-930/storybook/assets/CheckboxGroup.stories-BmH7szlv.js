import{j as e}from"./iframe-DzMIb7Ox.js";import{C as m}from"./CheckboxGroup-DkpozSJa.js";import{C as p}from"./Checkbox-Dh24LIbR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DbxKaZYC.js";import"./utils-Cdwe4BCh.js";import"./clsx-B-dksMZM.js";import"./Text-BBuKGEIS.js";import"./useFocusRing-BFU8EAFv.js";import"./index-DW-0uUM6.js";import"./index-Cl0FZxW_.js";import"./clsx-Ciqy0D92.js";import"./Text-CuzShXx2.js";import"./Label-BXWQeB_I.js";import"./Button-Crwjj3sD.js";import"./Hidden-DAvjwAnA.js";import"./useLabels-CeSEzTdd.js";import"./useButton-1toAChHK.js";import"./Dialog-B3GjjMvg.js";import"./RSPContexts-DJiMJ6Uh.js";import"./OverlayArrow-Bwr_osth.js";import"./useResizeObserver-Dmvy1v7R.js";import"./useControlledState-C6lxKGJg.js";import"./Collection-BJHhLXCJ.js";import"./index-qS7KxFYS.js";import"./Separator-_fjjPMXC.js";import"./SelectionManager-ChKt8TQX.js";import"./useEvent-ZscvBuYj.js";import"./scrollIntoView-C77nXoWt.js";import"./SelectionIndicator-ClB5sx6g.js";import"./useDescription-BHWqtBw9.js";import"./ListKeyboardDelegate-DZs0j5nu.js";import"./PressResponder-BeY7CEEu.js";import"./useLocalizedStringFormatter-Cm24wEWc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BMEE02Hx.js";import"./VisuallyHidden-BJydeYP9.js";import"./useLocalizedStringFormatter-zyVrsTaN.js";import"./Button-BHSCiAEx.js";import"./Button.module-CtQ1deO8.js";import"./x-tzBCnGcQ.js";import"./createLucideIcon-DxKoJQzX.js";import"./Heading-Br2mJzVB.js";import"./info-yWSDsxN-.js";import"./Popover-Y_gtzwk9.js";import"./useFormValidation-DiMAdNhw.js";import"./useField-ikIrFh80.js";import"./Form-BrMVOI4Z.js";import"./check-WEGvVXOW.js";import"./useToggleState-BWAiTVNX.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
