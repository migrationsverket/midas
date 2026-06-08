import{j as e}from"./iframe-_-I-4bmX.js";import{C as m}from"./CheckboxGroup-Y8diZD4e.js";import{C as p}from"./Checkbox-C1Bp9kIq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B-jtvqK5.js";import"./utils-DzcaSYTj.js";import"./clsx-B-dksMZM.js";import"./Text-Cm78CGL1.js";import"./useFocusRing-CMcqGwdV.js";import"./index-0H3AV5Mt.js";import"./index-BRnMJqMO.js";import"./clsx-Ciqy0D92.js";import"./Text-CY5kPrUO.js";import"./Label-qHS745gd.js";import"./Button-tRjJFBuJ.js";import"./Hidden-BeH_JIKl.js";import"./useLabel-B1uHly2S.js";import"./useLabels-DUwK_POH.js";import"./useButton-CyQYrR3g.js";import"./Dialog-CE24Vm4u.js";import"./RSPContexts-CMPH0wn8.js";import"./OverlayArrow-CdzLxPq_.js";import"./useResizeObserver-CWYs3QmI.js";import"./useControlledState-CitIWhQv.js";import"./Collection-CWOLxi88.js";import"./index-uCmAEo7z.js";import"./Separator-CK8hcPJB.js";import"./SelectionManager-CKx8RmD7.js";import"./useEvent-BT5AWThM.js";import"./scrollIntoView-CFKl5YUv.js";import"./SelectionIndicator-Civ_JKaJ.js";import"./useDescription-BdnU8zj8.js";import"./ListKeyboardDelegate-0iBGtitd.js";import"./PressResponder-De-KfKJN.js";import"./useLocalizedStringFormatter-CCGAROZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Db4Op6I0.js";import"./getScrollParent-BjhgnRjO.js";import"./VisuallyHidden-CK8kGowV.js";import"./ModalOverlay-DfmVS9JP.js";import"./x-D2ojVt-R.js";import"./createLucideIcon-0TA1baeh.js";import"./useLocalizedStringFormatter-Cf6u5T_L.js";import"./Heading-D9DO-Wov.js";import"./Button-Cur5alMr.js";import"./Button.module-BB7N-cLd.js";import"./info-B3fRpz2z.js";import"./Popover-DrgSr3ki.js";import"./Form-BKf2BDdV.js";import"./useField-D0ShrdTz.js";import"./check-20bRhoEa.js";import"./useToggleState-D57fRWNH.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
