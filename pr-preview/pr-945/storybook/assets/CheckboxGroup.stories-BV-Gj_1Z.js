import{j as e}from"./iframe-DADKt-kQ.js";import{C as m}from"./CheckboxGroup-CoMeS6Pp.js";import{C as p}from"./Checkbox-kaA0XEfp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D8LV-R92.js";import"./utils-CKJqdrmj.js";import"./clsx-B-dksMZM.js";import"./Text-D8zsPiTt.js";import"./useFocusRing-Bv8Jxajo.js";import"./index-C7Jitojr.js";import"./index-Bq3agvIg.js";import"./clsx-Ciqy0D92.js";import"./Text-hz03lBtp.js";import"./Label-ADkLrKTF.js";import"./Button-CJT79hNC.js";import"./Hidden-kCpqRsBu.js";import"./useLabels-BkZNSNp-.js";import"./useButton-OTdhny-d.js";import"./Dialog-C3pDXusW.js";import"./RSPContexts-CgoyvJfI.js";import"./OverlayArrow-Dh6thg_b.js";import"./useResizeObserver-BmT7GrSG.js";import"./useControlledState-CgzivPoq.js";import"./Collection-CMsCYGr_.js";import"./index-BYuT3Uqr.js";import"./Separator-CfmMNXq5.js";import"./SelectionManager-M25ifrG1.js";import"./useEvent-DdvKetHq.js";import"./scrollIntoView-CgOaBmyz.js";import"./SelectionIndicator-DEc6LJbw.js";import"./useDescription-B1vRvU4Y.js";import"./ListKeyboardDelegate-CArrbG-v.js";import"./PressResponder-ClBGodo-.js";import"./useLocalizedStringFormatter-CP2_5yue.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BXEPCtkX.js";import"./VisuallyHidden-CsnTJoII.js";import"./Button-DnuKH5Gw.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BwsyMi25.js";import"./createLucideIcon-C_Dtelqq.js";import"./x-Fn4Q0OGq.js";import"./Heading-H3P6YjwC.js";import"./info-D9eb8G6m.js";import"./Popover-BLnlcE_p.js";import"./useFormValidation-GLqBpRvw.js";import"./useField-BGkGozFn.js";import"./Form-Dt33ryJQ.js";import"./check-CJ5js9bh.js";import"./useToggleState-BBQKKj-3.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
