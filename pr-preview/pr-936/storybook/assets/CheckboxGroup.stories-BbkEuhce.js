import{j as e}from"./iframe-DwmMgugL.js";import{C as m}from"./CheckboxGroup-SMPONQTr.js";import{C as p}from"./Checkbox--GesHV_f.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D5MBP0wB.js";import"./utils-DmBjYA7q.js";import"./clsx-B-dksMZM.js";import"./Text-BgheBiT-.js";import"./useFocusRing-CzZK1_to.js";import"./index-DjWT9C0a.js";import"./index-BRzIZAFy.js";import"./clsx-Ciqy0D92.js";import"./Text-uR4nWzwy.js";import"./Label-4-IwTmM5.js";import"./Button-Dle7h4uT.js";import"./Hidden-C52U5hS0.js";import"./useLabels-BFzRRTRc.js";import"./useButton-CUQ_mzTp.js";import"./Dialog-D1YNyvRd.js";import"./RSPContexts-Bu2Edo6o.js";import"./OverlayArrow-wbJ3ETWU.js";import"./useResizeObserver-BguVcYqf.js";import"./useControlledState-yWDFBEGR.js";import"./Collection-PdcqvvyM.js";import"./index-D54BHJvF.js";import"./Separator-Cnmu05dX.js";import"./SelectionManager-DgjfJV5o.js";import"./useEvent-Jcjvrjge.js";import"./scrollIntoView-CjjreEs4.js";import"./SelectionIndicator-DNV4kXHD.js";import"./useDescription-DUuO3-sD.js";import"./ListKeyboardDelegate-ar09duhk.js";import"./PressResponder-Djs9pyA3.js";import"./useLocalizedStringFormatter-BaxlK3Fj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BGXuVfZe.js";import"./VisuallyHidden-Bjv_fvAd.js";import"./useLocalizedStringFormatter-Bq9JIZi1.js";import"./Button-DoQx4OEV.js";import"./Button.module-CtQ1deO8.js";import"./x--Paj8wKV.js";import"./createLucideIcon-9R8XYZ6c.js";import"./Heading-L5Dj9Tzl.js";import"./info-CpsTd9QD.js";import"./Popover-CoUsr5oa.js";import"./useFormValidation-DZHIdgUq.js";import"./useField-DqouWQCD.js";import"./Form-DoiDaZg3.js";import"./check-s_cyicqK.js";import"./useToggleState-BozUAWZ4.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
