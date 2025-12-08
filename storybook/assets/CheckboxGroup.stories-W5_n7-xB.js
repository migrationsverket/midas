import{j as e}from"./iframe-BY2_3lFS.js";import{C as m}from"./CheckboxGroup-adfB7rP6.js";import{C as p}from"./Checkbox-B_JAgkDS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D-UB8LkT.js";import"./utils-DnCax-D0.js";import"./clsx-B-dksMZM.js";import"./Text-C1EVzu2w.js";import"./useFocusRing-DaJYhCLu.js";import"./index-Cd6P2FPg.js";import"./index-DsAQLNj2.js";import"./clsx-Ciqy0D92.js";import"./Text-BuRtAqu6.js";import"./Label-Bcvo22e7.js";import"./Button-_0WHvwFf.js";import"./Hidden-V6emqDRH.js";import"./useLabels-teOrTThM.js";import"./useButton-M1sf-acB.js";import"./Dialog-CLdltRnt.js";import"./RSPContexts-CGAbcc-X.js";import"./OverlayArrow-C7UAfav1.js";import"./useResizeObserver-aSHBb5Eo.js";import"./useControlledState-D242PxvH.js";import"./Collection-797iNAcV.js";import"./index-B-vljZWJ.js";import"./Separator-9ebvfEIo.js";import"./SelectionManager-CvMauzBi.js";import"./useEvent-DJjZV-7J.js";import"./scrollIntoView-1xelqv_Y.js";import"./SelectionIndicator-D8VjqtV-.js";import"./useDescription-Cxu1pppP.js";import"./ListKeyboardDelegate-DypTNek_.js";import"./PressResponder-BwFeTy3P.js";import"./useLocalizedStringFormatter-DXd1hwbc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BxMLCvFI.js";import"./VisuallyHidden-Dt3RoQzb.js";import"./Button-B_p_1c42.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzVUglTs.js";import"./createLucideIcon-CKXpjIL3.js";import"./x-CWEDxy9Z.js";import"./Heading-CBfqP5Qn.js";import"./info-XIC91irT.js";import"./Popover-PQ2bLCU9.js";import"./useFormValidation-CjxHFLWd.js";import"./useField-pVqBo1SF.js";import"./Form-DHM8uRnr.js";import"./check-C70dedus.js";import"./useToggleState-CXFQVYdi.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
