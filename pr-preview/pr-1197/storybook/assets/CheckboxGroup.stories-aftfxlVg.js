import{j as e}from"./iframe-XIh9uYhW.js";import{C as m}from"./CheckboxGroup-ByZztuy4.js";import{C as p}from"./Checkbox-Yk12GHn1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CImeX3LJ.js";import"./utils-QqHpIW-4.js";import"./clsx-B-dksMZM.js";import"./Text-DrkaIHH8.js";import"./useFocusRing-BdFa1UIk.js";import"./index-BudLXS22.js";import"./index-BA9v5sbd.js";import"./clsx-Ciqy0D92.js";import"./Text-FP4KMc3f.js";import"./Label-DeiUzq23.js";import"./Button-BsucxUz-.js";import"./Hidden-l3oUe_Z9.js";import"./useLabel-bPnROONS.js";import"./useLabels-BwsWDKVI.js";import"./useButton-DN2W_ujz.js";import"./Dialog-k33WoJ4y.js";import"./RSPContexts-Bn8Ylugu.js";import"./OverlayArrow-D8TWZqIj.js";import"./useResizeObserver-CUu-rCnr.js";import"./useControlledState-CqcNfIKv.js";import"./Collection-BQotuCBv.js";import"./index-B-OkyOMa.js";import"./Separator-B8a7V4yj.js";import"./SelectionManager-DXqANVb2.js";import"./useEvent-BJnJ7qkn.js";import"./scrollIntoView-CUZdJYQn.js";import"./SelectionIndicator-C8nA4_hf.js";import"./useDescription-DhJgGo4l.js";import"./ListKeyboardDelegate-9proyAMB.js";import"./PressResponder-CzgsD_Mk.js";import"./useLocalizedStringFormatter-C8j3kjHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dqh80AvR.js";import"./getScrollParent-COGKGPLi.js";import"./VisuallyHidden-C1E6EF0U.js";import"./x-Drs9DY4g.js";import"./createLucideIcon-C-gCmxMp.js";import"./useLocalizedStringFormatter-BC9Xw6Ar.js";import"./Heading-s6qNOUAW.js";import"./Button-D1gmeqQE.js";import"./Button.module-BB7N-cLd.js";import"./info-AeKS2IyO.js";import"./Popover-wrLcmYQ4.js";import"./Form-uKASpG5T.js";import"./useField-DZimw16l.js";import"./check-BJpX-BVw.js";import"./useToggleState-C9aK7DLl.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
