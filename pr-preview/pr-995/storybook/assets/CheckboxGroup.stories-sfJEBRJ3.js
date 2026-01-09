import{j as e}from"./iframe-BdIMh-mp.js";import{C as m}from"./CheckboxGroup-DFVa86zZ.js";import{C as p}from"./Checkbox-CSPHhWRD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DsymNm4A.js";import"./utils-DcDhyL9A.js";import"./clsx-B-dksMZM.js";import"./Text-C4WrRLPZ.js";import"./useFocusRing-BNwH8fuD.js";import"./index-hViR2ylZ.js";import"./index-DZNXlpZV.js";import"./clsx-Ciqy0D92.js";import"./Text-Bx_0lix_.js";import"./Label-ajdRWdF1.js";import"./Button-zJPbjdhx.js";import"./Hidden-Wyg5sLjl.js";import"./useLabels-C4ABAGya.js";import"./useButton-BS6Zvdtu.js";import"./Dialog-BbZHBJH-.js";import"./RSPContexts-heqwVcoc.js";import"./OverlayArrow-Bp8STe4J.js";import"./useResizeObserver-D7jrSUSa.js";import"./useControlledState-CajUkngI.js";import"./Collection-Cy4nxbfX.js";import"./index-BbBJBKCY.js";import"./Separator-B5-iJ2c-.js";import"./SelectionManager-4etEtUOS.js";import"./useEvent-DQNjJNfH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B1zBVXx_.js";import"./useDescription-BK2hXU45.js";import"./ListKeyboardDelegate-CNLQbBT3.js";import"./PressResponder-BPkqrdcy.js";import"./useLocalizedStringFormatter-BqgT-J0v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMlNB04R.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D8MfmHyq.js";import"./Button-CNVh9qH3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXrVuCTi.js";import"./createLucideIcon-DEobE2Q1.js";import"./x-C6Q4fVg_.js";import"./Heading-DtHnABte.js";import"./info-BDaUDc1X.js";import"./Popover-Vb2xxPW2.js";import"./useFormValidation-C6vbNqNO.js";import"./useField-BrWC9yz0.js";import"./Form-CaiSIrkQ.js";import"./check-DW0bbU_x.js";import"./useToggleState-Dr5YCEyB.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
