import{j as e}from"./iframe-izS6BN6y.js";import{C as m}from"./CheckboxGroup-qbYKLxYS.js";import{C as p}from"./Checkbox-C16FtuC4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CJZEulkW.js";import"./utils-Bas1Ofad.js";import"./clsx-B-dksMZM.js";import"./Text-B6_RlQWu.js";import"./useFocusRing-B6uM1GPB.js";import"./index-Clqx6h6T.js";import"./index-2wZtggJW.js";import"./clsx-Ciqy0D92.js";import"./Text-CJepktCx.js";import"./Label-DoKPYWfy.js";import"./Button-DjOmw-p7.js";import"./Hidden-DxoOFtw1.js";import"./useLabels-CepOd2Z4.js";import"./useButton-nZ9At_c5.js";import"./Dialog-BaMaQg7g.js";import"./RSPContexts-CPQUc-c6.js";import"./OverlayArrow-BtdwFnbw.js";import"./useResizeObserver-BXwipBXo.js";import"./useControlledState-ComdA_qm.js";import"./Collection-BZZPf5u-.js";import"./index-D0u9tUkp.js";import"./Separator-CU3gB0Xv.js";import"./SelectionManager-BuiluRNF.js";import"./useEvent-CrtcwO7U.js";import"./scrollIntoView-geoDnyCX.js";import"./SelectionIndicator-DQamjTsW.js";import"./useDescription-9nup2ndP.js";import"./ListKeyboardDelegate-MJ3MficC.js";import"./PressResponder-B1IaQiT6.js";import"./useLocalizedStringFormatter-DFQ1l-q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lkKclEGH.js";import"./getScrollParent-Dt0r2HDa.js";import"./VisuallyHidden-C7bQWUTs.js";import"./Button-BJYTdbg5.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiJzgYQ0.js";import"./createLucideIcon-lSEbjSVl.js";import"./x-CSJ_lR3e.js";import"./Heading-CURgxsXa.js";import"./info-BMOr6wXB.js";import"./Popover-Bblv0dIQ.js";import"./useFormValidation-DUyqthVL.js";import"./useField-BtyYT5I6.js";import"./Form-pZC3lHBv.js";import"./check-DZU9CKV0.js";import"./useToggleState-DcBtXzgJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
