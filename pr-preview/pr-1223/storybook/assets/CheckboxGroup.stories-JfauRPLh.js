import{j as e}from"./iframe-JYgA1KQi.js";import{C as m}from"./CheckboxGroup-C5Ml4roU.js";import{C as p}from"./Checkbox-BtwCHnb_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BlsJhfcN.js";import"./utils-ChLKnNJg.js";import"./clsx-B-dksMZM.js";import"./Text-D9TOgsmN.js";import"./useFocusRing-C06MErgQ.js";import"./index--lNTANJm.js";import"./index-L3mAy6mP.js";import"./clsx-Ciqy0D92.js";import"./Text-D50EAg-o.js";import"./Label-DSIP6ZhT.js";import"./Button-w7gIenY9.js";import"./Hidden-0YDp5zxo.js";import"./useLabel-DxtLEE3Y.js";import"./useLabels-DSacGDBd.js";import"./useButton-Beja3uNl.js";import"./Dialog-DLppZ60P.js";import"./RSPContexts-gejQyHLH.js";import"./OverlayArrow-B2TJrPfo.js";import"./useResizeObserver-BiImtN7c.js";import"./useControlledState-CXI3Yibh.js";import"./Collection-BNq3e9X1.js";import"./index-C7yQKzyG.js";import"./Separator-BItHUN8S.js";import"./SelectionManager-CiWhjYbj.js";import"./useEvent-BOB9fAnz.js";import"./scrollIntoView-D2aT1v_d.js";import"./SelectionIndicator-Cg3C4rFl.js";import"./useDescription-CE0NAOWk.js";import"./ListKeyboardDelegate-CImt9RlX.js";import"./PressResponder-B0xgXgFS.js";import"./useLocalizedStringFormatter-CVst0Jjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DS0nLW82.js";import"./getScrollParent-zw9jGmc3.js";import"./VisuallyHidden-Cov8ReYV.js";import"./ModalOverlay-D0_8i7ni.js";import"./x-C1kwUoON.js";import"./createLucideIcon-UApEV6S6.js";import"./useLocalizedStringFormatter-j9dnYAXL.js";import"./Heading-BHTxTGKK.js";import"./Button-MMPxX2Zb.js";import"./Button.module-BB7N-cLd.js";import"./info-D7hO4-PY.js";import"./Popover-CB-DEkvg.js";import"./Form-r6wIXJmO.js";import"./useField-QQnG48hk.js";import"./check-DCY3asdX.js";import"./useToggleState-BdiQ14jL.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
