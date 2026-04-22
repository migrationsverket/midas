import{j as e}from"./iframe-DIPCj7z0.js";import{C as m}from"./CheckboxGroup-CKMDJ6ol.js";import{C as p}from"./Checkbox-2_hv9uib.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-XsW3k3ta.js";import"./utils-1Jw3myEp.js";import"./clsx-B-dksMZM.js";import"./Text-DfA3YTZF.js";import"./useFocusRing-CGC0Rs2i.js";import"./index-BMYuBTg8.js";import"./index-CLZ6wIud.js";import"./clsx-Ciqy0D92.js";import"./Text-CutZY7em.js";import"./Label-BTBJQ3TD.js";import"./Button-XWLhDASZ.js";import"./Hidden-DixPPjgd.js";import"./useLabel-BuVDKvpb.js";import"./useLabels-a5aS50Gu.js";import"./useButton-B6P9-uWq.js";import"./Dialog-BRQpSR1m.js";import"./RSPContexts-COR8iAs7.js";import"./OverlayArrow-BZA9xyhr.js";import"./useResizeObserver-6MYBTeZJ.js";import"./useControlledState-BD_nezFk.js";import"./Collection-DlaTgdHp.js";import"./index-BtYgIjFq.js";import"./Separator-D67jdWyC.js";import"./SelectionManager-C1peoY7k.js";import"./useEvent-C_MGKzuJ.js";import"./scrollIntoView-BoRCBfrM.js";import"./SelectionIndicator-BBRkAeK5.js";import"./useDescription-FuIsSDja.js";import"./ListKeyboardDelegate-DJcS2y8P.js";import"./PressResponder-CF389slw.js";import"./useLocalizedStringFormatter-CetMLESo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYTiBTJq.js";import"./getScrollParent-CrP1MxC4.js";import"./VisuallyHidden-B7PA1Ynv.js";import"./ModalOverlay-Cy-0_4Nk.js";import"./x-i9MPadT4.js";import"./createLucideIcon-BXzguI7t.js";import"./useLocalizedStringFormatter-CD9GRZFK.js";import"./Heading-BZjt7HWH.js";import"./Button-Dd5S0QsR.js";import"./Button.module-BB7N-cLd.js";import"./info-DREV89Uo.js";import"./Popover-CMPrkTUX.js";import"./Form-Dqy01Zmd.js";import"./useField-DyYmemdb.js";import"./check-BCpRvZtK.js";import"./useToggleState-D6UHqGoX.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
