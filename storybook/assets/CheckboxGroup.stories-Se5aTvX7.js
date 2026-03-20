import{j as e}from"./iframe-B_HV58Tx.js";import{C as m}from"./CheckboxGroup-DwA6R_i6.js";import{C as p}from"./Checkbox-DbUnr7tN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DqYkTsF9.js";import"./utils-D5bq7NR9.js";import"./clsx-B-dksMZM.js";import"./Text-BmPT9jx1.js";import"./useFocusRing-CQ6srqs1.js";import"./index-BV-Xu0hA.js";import"./index-BRioma8_.js";import"./clsx-Ciqy0D92.js";import"./Text-ErMtNt0N.js";import"./Label-C4iJOrlR.js";import"./Button-9JB-LEJf.js";import"./Hidden-CWUxqDD_.js";import"./useLabels-BLTcitxv.js";import"./useButton-86EcIjrD.js";import"./Dialog-DackonYK.js";import"./RSPContexts-BqT_UpmT.js";import"./OverlayArrow-DQeXSlBx.js";import"./useResizeObserver-D-F9gzd8.js";import"./useControlledState-BTwDuLxs.js";import"./Collection-CJbE9gxr.js";import"./index-D2CcjZE8.js";import"./Separator-B41-RXmK.js";import"./SelectionManager-CMOeEkUs.js";import"./useEvent-Pf1vK6cZ.js";import"./scrollIntoView-DDgM4B6N.js";import"./SelectionIndicator-BTlU4ApK.js";import"./useDescription-CFUiKXvj.js";import"./ListKeyboardDelegate-B6M7alvJ.js";import"./PressResponder-Dq28KyCy.js";import"./useLocalizedStringFormatter-BvV0axQt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DrUsjA5c.js";import"./getScrollParent-BVi9_iGw.js";import"./VisuallyHidden-D3wC15bS.js";import"./x-BovYJwPt.js";import"./createLucideIcon-BVARARz1.js";import"./useLocalizedStringFormatter-CoVb38JF.js";import"./Heading-Um23GnnF.js";import"./Button-Bso6HAwt.js";import"./Button.module-BB7N-cLd.js";import"./info-bkFqeJZs.js";import"./Popover-fk7fn8OC.js";import"./Form-Buk6T5M9.js";import"./useField-DMy_SaCN.js";import"./check-f8dUic-3.js";import"./useToggleState-D11g73XS.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
