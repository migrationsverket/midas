import{j as e}from"./iframe-BqDkGuh1.js";import{C as m}from"./CheckboxGroup-DyYVWHuY.js";import{C as p}from"./Checkbox-DgMPw_C2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-yw2UMk6d.js";import"./utils-W193K7jS.js";import"./clsx-B-dksMZM.js";import"./Text-P0Uog9HF.js";import"./useFocusRing-B0vg45rI.js";import"./index-B8hlXOwE.js";import"./index-Dzcfq3Tc.js";import"./clsx-Ciqy0D92.js";import"./Text-CGQubPUz.js";import"./Label-CXDiIvEe.js";import"./Button-BxGujilG.js";import"./Hidden-0zoVmhVR.js";import"./useLabels-Bl_SgAjf.js";import"./useButton-xcFgy60K.js";import"./Dialog-DJgKKran.js";import"./RSPContexts-BrQCiqr8.js";import"./OverlayArrow-DXfW_w3l.js";import"./useResizeObserver-B2POJnuI.js";import"./useControlledState-D87rnCnG.js";import"./Collection-BQrYRO22.js";import"./index-Cu4-BjcK.js";import"./Separator-D-IR-f5V.js";import"./SelectionManager-DFWgDQwt.js";import"./useEvent-XcVfxEor.js";import"./scrollIntoView-uYMCGnr-.js";import"./SelectionIndicator-CEQfdIGJ.js";import"./useDescription-Bm9qBg99.js";import"./ListKeyboardDelegate-COMlNfzx.js";import"./PressResponder-DbN2tmM9.js";import"./useLocalizedStringFormatter-B8mdMXCK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CUQivi4p.js";import"./VisuallyHidden-CQi-zQEF.js";import"./Button-DsUfXBsa.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v7TRxJsd.js";import"./createLucideIcon-DTrJOepx.js";import"./x-B-WsG3hV.js";import"./Heading-yrJTarcr.js";import"./info-BLQj5oE6.js";import"./Popover-_5yJ1RZ5.js";import"./useFormValidation-BUuh_lTo.js";import"./useField-Dapj1Pgq.js";import"./Form-D9GatxtB.js";import"./check-CpZdIL4g.js";import"./useToggleState-BJSMrSqE.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
