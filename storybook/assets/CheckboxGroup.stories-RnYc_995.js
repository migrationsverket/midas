import{j as e}from"./iframe-BQlcbrgq.js";import{C as m}from"./CheckboxGroup-Bxt8ca_7.js";import{C as p}from"./Checkbox-BUo_qDB-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bsl-hkeP.js";import"./utils-zlU0QFfw.js";import"./clsx-B-dksMZM.js";import"./Text-9noXsIlr.js";import"./useFocusRing-vaJTuI4B.js";import"./index-9xcskC2r.js";import"./index-BwtwGZuI.js";import"./clsx-Ciqy0D92.js";import"./Text-VFn9yNax.js";import"./Label-B5SwdTYO.js";import"./Button-CDoUC3iq.js";import"./Hidden-BCstp6u_.js";import"./useLabel-Btcj4E6x.js";import"./useLabels-QRQ8ouBW.js";import"./useButton-oX55LUg2.js";import"./Dialog-BfMFzFGl.js";import"./RSPContexts-Bvy64kgY.js";import"./OverlayArrow-CfGpEGgB.js";import"./useResizeObserver-BxaWleb4.js";import"./useControlledState-8FQUmPf4.js";import"./Collection-DiPZ5oiq.js";import"./index-Cc7kdlmZ.js";import"./Separator-Bxvh_6_C.js";import"./SelectionManager-Bqi2DdnI.js";import"./useEvent-DZ7mJmfU.js";import"./scrollIntoView-qNB0-vvI.js";import"./SelectionIndicator-DTHAul58.js";import"./useDescription-WI-F6yLm.js";import"./ListKeyboardDelegate-ekvubGfM.js";import"./PressResponder-CsSdfsYB.js";import"./useLocalizedStringFormatter-DJDlUoLo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dja5saqP.js";import"./getScrollParent-CdT_EqNx.js";import"./VisuallyHidden-CKBFwX4P.js";import"./Dialog-DSo1x1fV.js";import"./x-CQzcLprN.js";import"./createLucideIcon-Dkmw8KOt.js";import"./useLocalizedStringFormatter-DdRSrN8_.js";import"./Heading-oxsWrt8S.js";import"./Button-CWx5j6of.js";import"./Button.module-BB7N-cLd.js";import"./info-CCdV7YtR.js";import"./Popover-CXYnS0Pt.js";import"./Form-BbiXVtoW.js";import"./useField-C6cnRVBt.js";import"./check-C2eaMYEO.js";import"./useToggleState-BFpfQh5w.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
