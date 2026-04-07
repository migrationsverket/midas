import{j as e}from"./iframe-CFJCKKvO.js";import{C as m}from"./CheckboxGroup-C4575A-A.js";import{C as p}from"./Checkbox-BACYcD1x.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cwblg-Fg.js";import"./utils-GebBTRfX.js";import"./clsx-B-dksMZM.js";import"./Text-3-m5yiWA.js";import"./useFocusRing-BNbcqK1m.js";import"./index-D3I_2kbv.js";import"./index-DmhLxtfg.js";import"./clsx-Ciqy0D92.js";import"./Text-Ch1K88hl.js";import"./Label-CDHIpKOH.js";import"./Button-BT7UBoWJ.js";import"./Hidden-DcC3hzXb.js";import"./useLabel-Byk-C4h5.js";import"./useLabels-BTsH0KFj.js";import"./useButton-DAHkBXtl.js";import"./Dialog-Dsqn7n_R.js";import"./RSPContexts-DYC9qzTU.js";import"./OverlayArrow-BqZFl2kw.js";import"./useResizeObserver-DYYCtKev.js";import"./useControlledState-BfOHS3qu.js";import"./Collection-yIcWgyNm.js";import"./index-CAr9uyju.js";import"./Separator-Qw6ftWGS.js";import"./SelectionManager-x1Quu5h-.js";import"./useEvent-voCcxRjk.js";import"./scrollIntoView-Co7GAAYl.js";import"./SelectionIndicator-DgmnjBYR.js";import"./useDescription-C4PJeRJw.js";import"./ListKeyboardDelegate-9mmgmB2G.js";import"./PressResponder-jZ1aCSmN.js";import"./useLocalizedStringFormatter-KBkMSAGg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CemwV6aI.js";import"./getScrollParent-B9G2XCiT.js";import"./VisuallyHidden-Y2lOv2IN.js";import"./x-C7yXQpYD.js";import"./createLucideIcon-DogT9pAN.js";import"./useLocalizedStringFormatter-BHn-ZNo3.js";import"./Heading-DqtgDd1x.js";import"./Button-xnJUq7xJ.js";import"./Button.module-BB7N-cLd.js";import"./info-CQDEOprS.js";import"./Popover-BCRLoLZr.js";import"./Form-CHs7kAFH.js";import"./useField-BeHiy9Ck.js";import"./check-DjnLPOJp.js";import"./useToggleState-BSVptSgt.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
