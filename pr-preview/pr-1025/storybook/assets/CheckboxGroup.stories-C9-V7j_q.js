import{j as e}from"./iframe-CTvpKBSK.js";import{C as m}from"./CheckboxGroup-D8deWAtb.js";import{C as p}from"./Checkbox-NVYJxCr8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BquSn9wl.js";import"./utils-BiLGnBBz.js";import"./clsx-B-dksMZM.js";import"./Text-DjtetnZp.js";import"./useFocusRing-DfvRkfqL.js";import"./index-g0pugt_v.js";import"./index-DVdtA1wK.js";import"./clsx-Ciqy0D92.js";import"./Text-BI68LSzD.js";import"./Label-DUbRtYDf.js";import"./Button-u0YKTc5k.js";import"./Hidden-DgXsqmZh.js";import"./useLabels-DvvCz1Di.js";import"./useButton-PqLQDpbO.js";import"./Dialog-sxwGEQjR.js";import"./RSPContexts-fL8CzLzf.js";import"./OverlayArrow-BFQFikzb.js";import"./useResizeObserver-dXzsevFb.js";import"./useControlledState-66bebSHu.js";import"./Collection-DJV5p488.js";import"./index-C-5LL5qr.js";import"./Separator-C3RxJYod.js";import"./SelectionManager-CPlVMwPw.js";import"./useEvent-6UK5uY3G.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8uATEmda.js";import"./useDescription-C76Kc7TT.js";import"./ListKeyboardDelegate-C-lNPHxi.js";import"./PressResponder-BRZ89O2D.js";import"./useLocalizedStringFormatter-g83VFJyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DcJkVBJ3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C1c0ClIs.js";import"./Button-BtfMoIh9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C25wyzL4.js";import"./createLucideIcon-BvYu-wbL.js";import"./x-CfmXATlG.js";import"./Heading-DQH8WAtT.js";import"./info-uV8rRHDT.js";import"./Popover-Dx--U7UT.js";import"./useFormValidation-Chpv9In5.js";import"./useField-BCLlGOHG.js";import"./Form-mfwEhoNh.js";import"./check-ldM4tW1_.js";import"./useToggleState-D7YYJc2E.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
