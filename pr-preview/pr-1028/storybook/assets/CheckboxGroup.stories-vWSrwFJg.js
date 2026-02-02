import{j as e}from"./iframe-Ct1ppXcO.js";import{C as m}from"./CheckboxGroup-CeKQelEQ.js";import{C as p}from"./Checkbox-BT6bQpzV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-MCWN8uVd.js";import"./utils-C-gSI02s.js";import"./clsx-B-dksMZM.js";import"./Text-bA96Aj1V.js";import"./useFocusRing-D22KqsH2.js";import"./index-BZ4GCs5a.js";import"./index-D7mK5nsc.js";import"./clsx-Ciqy0D92.js";import"./Text-BLnUO4XT.js";import"./Label-CYtVDj30.js";import"./Button-Co_Oqhu6.js";import"./Hidden-BnjpnQVL.js";import"./useLabels-BzsjX-uz.js";import"./useButton-BPFKgoal.js";import"./Dialog-cs7NWbrU.js";import"./RSPContexts-DiUMKu6B.js";import"./OverlayArrow-Cv6Hgff_.js";import"./useResizeObserver-CiFVHVXh.js";import"./useControlledState-BMKsiY2b.js";import"./Collection-BfE2ozAg.js";import"./index-SMovkzve.js";import"./Separator-Dk7hiyQq.js";import"./SelectionManager-CFIbccgx.js";import"./useEvent-CQqH1fQz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DQUn9HeB.js";import"./useDescription-D0KYtWwq.js";import"./ListKeyboardDelegate-DOcJQ6-3.js";import"./PressResponder-CMjUmock.js";import"./useLocalizedStringFormatter-ugzqn4XO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Be5ZenH1.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CPthcFHg.js";import"./Button-DGYQQhVQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-k4Ox2Lj6.js";import"./createLucideIcon-BuchYPst.js";import"./x-DhEC6HJx.js";import"./Heading-8Bvul9yl.js";import"./info-EPuz7-Fk.js";import"./Popover-NWW3-HoD.js";import"./useFormValidation-CbVk8cPB.js";import"./useField-C735bYz9.js";import"./Form-BEQJjWQu.js";import"./check-Bla-kzTw.js";import"./useToggleState-D7XxsBsL.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
