import{j as e}from"./iframe-zmdm5LWO.js";import{C as m}from"./CheckboxGroup-C5AJ-h3N.js";import{C as p}from"./Checkbox-lU6_6t15.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CnGNBTtl.js";import"./utils-BVXhqey2.js";import"./clsx-B-dksMZM.js";import"./Text-C_A67KfE.js";import"./useFocusRing-ChdwpxNy.js";import"./index-CR9Wusv4.js";import"./index-BM2_5E3m.js";import"./clsx-Ciqy0D92.js";import"./Text-BlbFrX8Z.js";import"./Label-DzCqChbE.js";import"./Button-CJHqtIe5.js";import"./Hidden-Da0JYuUZ.js";import"./useLabel-Di2CB_YG.js";import"./useLabels-Co4DVdbJ.js";import"./useButton-BIbblWcf.js";import"./Dialog-DBdMj1h1.js";import"./RSPContexts-CkA1USMd.js";import"./OverlayArrow-ZJg9Y93d.js";import"./useResizeObserver-M4b8JNbB.js";import"./useControlledState-CPsjL82m.js";import"./Collection-B_xTn3lN.js";import"./index-D_c3Fzu0.js";import"./Separator-CQQaiTiT.js";import"./SelectionManager-wVErokbN.js";import"./useEvent-xez8_YkI.js";import"./scrollIntoView-QLDgtXAW.js";import"./SelectionIndicator-32SJlHNX.js";import"./useDescription-rHa26S1A.js";import"./ListKeyboardDelegate-CRUYtTHH.js";import"./PressResponder-DQgjA9_y.js";import"./useLocalizedStringFormatter-LEYk1ZVN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTUHhIU3.js";import"./getScrollParent-YKNs88UL.js";import"./VisuallyHidden-DeZC0Ok1.js";import"./ModalOverlay-BhtOmyBA.js";import"./x-XVyRqWEu.js";import"./createLucideIcon-BWu7CyXu.js";import"./useLocalizedStringFormatter-Crt7pDpL.js";import"./Heading-vsfnRndb.js";import"./Button-BYmNnQBF.js";import"./Button.module-BB7N-cLd.js";import"./info-DeAVHKcj.js";import"./Popover-Dmb00BHz.js";import"./Form-B9squnXu.js";import"./useField-TGoSKSzA.js";import"./check-DIRwVHcA.js";import"./useToggleState-D8972mtX.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
