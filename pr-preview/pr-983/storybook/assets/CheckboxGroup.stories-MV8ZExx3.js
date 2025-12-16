import{j as e}from"./iframe-DfEAdNVs.js";import{C as m}from"./CheckboxGroup-CINDg6Sd.js";import{C as p}from"./Checkbox-DKuH6FaM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CAId1xXE.js";import"./utils--wYGBqGD.js";import"./clsx-B-dksMZM.js";import"./Text-DuPzytE6.js";import"./useFocusRing-Bzp-C8p6.js";import"./index-CtqVMxj3.js";import"./index-SEkB6HYi.js";import"./clsx-Ciqy0D92.js";import"./Text-DpvNcKrC.js";import"./Label-hRjdpc8o.js";import"./Button-BdvjUnuo.js";import"./Hidden-BEs-n291.js";import"./useLabels-Cu5mk1YJ.js";import"./useButton-DrZxE4--.js";import"./Dialog-CFVpeWib.js";import"./RSPContexts-DhsCvUzP.js";import"./OverlayArrow-Cr7E5qeY.js";import"./useResizeObserver-CPp6mll5.js";import"./useControlledState-BAEcE39B.js";import"./Collection-C7VFDuOa.js";import"./index-DbAd4bBs.js";import"./Separator-4U33ToD_.js";import"./SelectionManager-XIcBhoKr.js";import"./useEvent-MCyBQRS6.js";import"./scrollIntoView-DuSKKvBp.js";import"./SelectionIndicator-DhNoYZyp.js";import"./useDescription-DBgTN9Qp.js";import"./ListKeyboardDelegate-jNBEcwRO.js";import"./PressResponder-DaxMlHv_.js";import"./useLocalizedStringFormatter-8MmEPB2N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-560_08lX.js";import"./VisuallyHidden-alWOUvdL.js";import"./Button-He3J7woG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCX7Zdi0.js";import"./createLucideIcon-Caura_NC.js";import"./x-Cc5QfUhK.js";import"./Heading-R00i0ykR.js";import"./info-DST0GV0b.js";import"./Popover-BkWjVVkU.js";import"./useFormValidation-BUhsxUna.js";import"./useField-BRFh-PYl.js";import"./Form-CSqKcCG3.js";import"./check-C0LKoGqr.js";import"./useToggleState-mj1-HuUA.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
