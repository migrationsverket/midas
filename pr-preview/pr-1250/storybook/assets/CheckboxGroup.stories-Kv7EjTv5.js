import{j as e}from"./iframe-ZWFuO3rS.js";import{C as m}from"./CheckboxGroup-CFvJIs31.js";import{C as p}from"./Checkbox-icgjHYAV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BqdH46Wm.js";import"./utils-CXJrMo2L.js";import"./clsx-B-dksMZM.js";import"./Text-CW08t5T_.js";import"./useFocusRing-CF4sVLCG.js";import"./index-BuEPxCUb.js";import"./index-CW1b9fzZ.js";import"./clsx-Ciqy0D92.js";import"./Text-uwKeqPz3.js";import"./Label-C8dYgMga.js";import"./Button-CuvBXfLT.js";import"./Hidden-DlAqJEIp.js";import"./useLabel-s0mfMDbD.js";import"./useLabels-BdKRxhZh.js";import"./useButton-otN3sW9Y.js";import"./Dialog-D5pdNRVZ.js";import"./RSPContexts-Dt_P8EmM.js";import"./OverlayArrow-C6DoMgcq.js";import"./useResizeObserver-CqncRxwe.js";import"./useControlledState-CaSPfHyR.js";import"./Collection-BWOiDNzU.js";import"./index-D3vqNWyO.js";import"./Separator-DRfwBEBl.js";import"./SelectionManager-UM6kyFyM.js";import"./useEvent-D0Q6FxQg.js";import"./scrollIntoView-CxB-7RAS.js";import"./SelectionIndicator-BD5ZlguQ.js";import"./useDescription-BZozsu8w.js";import"./ListKeyboardDelegate-06m2HPXH.js";import"./PressResponder-BGak0TH8.js";import"./useLocalizedStringFormatter-w6fCSWeH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C8wgjS_2.js";import"./getScrollParent-CnRw05DR.js";import"./VisuallyHidden-5iCcQboa.js";import"./ModalOverlay-Dxkf-sWd.js";import"./x-C7_Ecf5k.js";import"./createLucideIcon-BJpb_u0I.js";import"./useLocalizedStringFormatter-3X8tf49V.js";import"./Heading-7px2xDz0.js";import"./Button-DoVlW0aQ.js";import"./Button.module-BB7N-cLd.js";import"./info-bT8T8goN.js";import"./Popover-DZO6Osg5.js";import"./Form-QTqY28Eg.js";import"./useField-DLnhlBC6.js";import"./check-PZkhBkOP.js";import"./useToggleState-s5zCmzHy.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
