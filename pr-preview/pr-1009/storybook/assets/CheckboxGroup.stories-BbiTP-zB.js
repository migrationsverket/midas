import{j as e}from"./iframe-B_Y0DlqQ.js";import{C as m}from"./CheckboxGroup-BJS8yBrz.js";import{C as p}from"./Checkbox-Dr5LLXe2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-i5Ktr5xn.js";import"./utils-DksA0Tsa.js";import"./clsx-B-dksMZM.js";import"./Text-CYtRYcLc.js";import"./useFocusRing-Bri1p2OG.js";import"./index-DA90p7VR.js";import"./index-D4TvvLIK.js";import"./clsx-Ciqy0D92.js";import"./Text-CcUZk8IK.js";import"./Label-CzeIbsy3.js";import"./Button-Du8CgB5i.js";import"./Hidden-DECSsGSE.js";import"./useLabels-Ce9ZpRqc.js";import"./useButton-BkIr7UBR.js";import"./Dialog-ft7UPy6D.js";import"./RSPContexts-B5lGwhcJ.js";import"./OverlayArrow-auEgUC_S.js";import"./useResizeObserver-B7Qkibwd.js";import"./useControlledState-DNwepJua.js";import"./Collection-Cy_qBdK2.js";import"./index-yCQs7iDR.js";import"./Separator-DRsqODdx.js";import"./SelectionManager-DuHPqwUB.js";import"./useEvent-DpuzfOt5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DumeAD8r.js";import"./useDescription-B5DmuzQE.js";import"./ListKeyboardDelegate-Cyz7xoOF.js";import"./PressResponder-C7JgJDDb.js";import"./useLocalizedStringFormatter-jn3ikADD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSPULRBm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dfda1Uwj.js";import"./Button-DLuLiY2m.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQakQ_l-.js";import"./createLucideIcon-DXYmNs8l.js";import"./x-_e6csGZB.js";import"./Heading-BtF3xjBY.js";import"./info-BOmTufZ3.js";import"./Popover-DmbZwZtw.js";import"./useFormValidation-BbQ3XrbH.js";import"./useField-3oWVgLWz.js";import"./Form-BHJz0544.js";import"./check-9RvTG3H-.js";import"./useToggleState-DD3FQE9G.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
