import{j as e}from"./iframe-CMtsh5Eh.js";import{C as m}from"./CheckboxGroup-U337tofm.js";import{C as p}from"./Checkbox-BjrrbBNZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DMgiPkwy.js";import"./utils-VAsp_gKy.js";import"./clsx-B-dksMZM.js";import"./Text-BX-Y82iV.js";import"./useFocusRing-B6bGNFeQ.js";import"./index-39OB84OG.js";import"./index-DyOrKDpA.js";import"./clsx-Ciqy0D92.js";import"./Text-C7cHUgK0.js";import"./Label-S6cvsQhQ.js";import"./Button-Ci2iUJ0f.js";import"./Hidden-CV6VXQ7p.js";import"./useLabels-BTto6oES.js";import"./useButton-BNNKUFuH.js";import"./Dialog-AUSwWiaV.js";import"./RSPContexts-DR0SeAEq.js";import"./OverlayArrow-BUld-Zv5.js";import"./useResizeObserver-pQJQWZuR.js";import"./useControlledState-DLBojQJe.js";import"./Collection-S5-jVCcq.js";import"./index-DYE2Sbm4.js";import"./Separator-B1WORw9S.js";import"./SelectionManager-Dos85k94.js";import"./useEvent-riGGv9T-.js";import"./scrollIntoView-DOcHuZnj.js";import"./SelectionIndicator-Dexp5ffo.js";import"./useDescription-CUv_4czl.js";import"./ListKeyboardDelegate-B0YXW_In.js";import"./PressResponder-DlqolfDe.js";import"./useLocalizedStringFormatter-B1g8k-5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C1WRDsik.js";import"./VisuallyHidden-8XrnnDsa.js";import"./Button-DfH0lIm8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPQnGY0f.js";import"./createLucideIcon-DdaWlS2p.js";import"./x-BMUy26Qu.js";import"./Heading-BiVI9BS6.js";import"./info-CcCqB60J.js";import"./Popover-BhIdIv06.js";import"./useFormValidation-aqJVc9GJ.js";import"./useField-Dbi7iGb3.js";import"./Form-DDvLNjNe.js";import"./check-CpB3-XlD.js";import"./useToggleState-CS_7xmje.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
