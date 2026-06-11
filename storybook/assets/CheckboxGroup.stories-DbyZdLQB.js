import{j as e}from"./iframe-BpYPS4gm.js";import{C as m}from"./CheckboxGroup-B_7URPFj.js";import{C as p}from"./Checkbox-Bkrt5zYr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-zyWIi-nv.js";import"./utils-BkzBTegZ.js";import"./clsx-B-dksMZM.js";import"./Text-CFeigIHC.js";import"./useFocusRing-Pq1S8Nkx.js";import"./index-C8EDYR9x.js";import"./index-CpQ1o8lj.js";import"./clsx-Ciqy0D92.js";import"./Text-DftiSqWN.js";import"./Label-C71z01wx.js";import"./Button-DUppCSnI.js";import"./Hidden-CTNCg_YB.js";import"./useLabel-DRewtayt.js";import"./useLabels-OrklnJZf.js";import"./useButton-BrYERvfl.js";import"./Dialog-CH-PgKEx.js";import"./RSPContexts-Dy5rD26Q.js";import"./OverlayArrow-CZrmaX8b.js";import"./useResizeObserver-o8UhDnAb.js";import"./useControlledState-I9JlEHBp.js";import"./Collection-nGuo6sVM.js";import"./index-B941AFyx.js";import"./Separator-uATXX7iM.js";import"./SelectionManager-mrLC95FY.js";import"./useEvent-DFWay8hB.js";import"./scrollIntoView-CExkIFba.js";import"./SelectionIndicator-00bJR3jm.js";import"./useDescription-DQt5_MYb.js";import"./ListKeyboardDelegate-DyuD9bVA.js";import"./PressResponder-DtFCU97c.js";import"./useLocalizedStringFormatter-QtzCwA5z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGYNXkdx.js";import"./getScrollParent-DWwoSmAy.js";import"./VisuallyHidden-DHzGM297.js";import"./ModalOverlay-Be1ZuAix.js";import"./x-CV7Jhp5u.js";import"./createLucideIcon-Crq6vW28.js";import"./useLocalizedStringFormatter-Bf3e6727.js";import"./Heading-Chz2Xcdl.js";import"./Button-BN_pdcuF.js";import"./Button.module-BB7N-cLd.js";import"./info-DNRoJyV4.js";import"./Popover-f1uZ6345.js";import"./Form-WJVKf5wp.js";import"./useField-BW6eOBuw.js";import"./check-C_KiUWRH.js";import"./useToggleState-tTlu0OdN.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
