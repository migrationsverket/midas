import{j as e}from"./iframe-dJ9N4Hwo.js";import{C as m}from"./CheckboxGroup-B9h_a_dc.js";import{C as p}from"./Checkbox-BCmUGYtS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-WztJl-_N.js";import"./utils-D-XK7wRt.js";import"./clsx-B-dksMZM.js";import"./Text-BxsbjcMl.js";import"./useFocusRing-DNc8UdyY.js";import"./index--Ro6Hv8b.js";import"./index-CtGu0Onf.js";import"./clsx-Ciqy0D92.js";import"./Text-CrKOi2mC.js";import"./Label-C1jxhSAi.js";import"./Button-BbXYBFSI.js";import"./Hidden-DOBdyTg3.js";import"./useLabel-Bu1777AN.js";import"./useLabels-CNniH7Tl.js";import"./useButton-3Dpu7dn4.js";import"./Dialog-DjhR36ln.js";import"./RSPContexts-QX7zRPGs.js";import"./OverlayArrow-DrR3snR6.js";import"./useResizeObserver-CGexg0uq.js";import"./useControlledState-BVn3AEak.js";import"./Collection-ChvYxMRy.js";import"./index-CU_ebUvQ.js";import"./Separator-DdPSSLdX.js";import"./SelectionManager-BgU6jwm0.js";import"./useEvent-CyTGIsHa.js";import"./scrollIntoView-jXOV1euP.js";import"./SelectionIndicator-C7XYESn_.js";import"./useDescription-B46QsQBZ.js";import"./ListKeyboardDelegate-DdJwbMfh.js";import"./PressResponder-Cflpwd5u.js";import"./useLocalizedStringFormatter-B71vqv89.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKCu8Pqt.js";import"./getScrollParent-C8aqS4T5.js";import"./VisuallyHidden-Dxq67aJu.js";import"./x-D6CWGX1J.js";import"./createLucideIcon-B0IDBM20.js";import"./useLocalizedStringFormatter-Br0ol2So.js";import"./Heading-DiUYIrgI.js";import"./Button-Cxxx7spL.js";import"./Button.module-BB7N-cLd.js";import"./info-Bi3c1eCS.js";import"./Popover-qFwkaLeU.js";import"./Form-9N9RpmGN.js";import"./useField-CiFrPq-j.js";import"./check-Cc3sPl4G.js";import"./useToggleState-CEqziUPl.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
