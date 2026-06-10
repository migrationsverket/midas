import{j as e}from"./iframe-CmeF7aiR.js";import{C as m}from"./CheckboxGroup-6Ty0Qzr-.js";import{C as p}from"./Checkbox-0X5AXbN7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BVrE0AIG.js";import"./utils-Z3-XoPsz.js";import"./clsx-B-dksMZM.js";import"./Text-C9HAfj-8.js";import"./useFocusRing-2QXJrqIt.js";import"./index-XXiSS7gB.js";import"./index-Cy7R6ehB.js";import"./clsx-Ciqy0D92.js";import"./Text-BssmR8ms.js";import"./Label-k1l0EY31.js";import"./Button-ClEeAqn6.js";import"./Hidden-BUn3MpC7.js";import"./useLabel-ZOG9CKkE.js";import"./useLabels-kUwjKE83.js";import"./useButton-B02vL_2_.js";import"./Dialog-DS-mfamb.js";import"./RSPContexts-BpcZ6nht.js";import"./OverlayArrow-DGTFW9dl.js";import"./useResizeObserver-BDV1aHG4.js";import"./useControlledState-hzD7JFD-.js";import"./Collection-Cw5azGBR.js";import"./index-Ctx5ZgNK.js";import"./Separator-B2-i3j6n.js";import"./SelectionManager-N_jg7Ktj.js";import"./useEvent-kH6-sJDb.js";import"./scrollIntoView-rNYRejP1.js";import"./SelectionIndicator-BC7L7-ox.js";import"./useDescription-DEWpOLKq.js";import"./ListKeyboardDelegate-C9ktpFr7.js";import"./PressResponder-FhDuQOeC.js";import"./useLocalizedStringFormatter-CWAX1pT5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bg2Y09vr.js";import"./getScrollParent-BlOOdjy0.js";import"./VisuallyHidden-B0_5kTh6.js";import"./ModalOverlay-UObFunht.js";import"./x-B7wEz93I.js";import"./createLucideIcon-DCW1PR-F.js";import"./useLocalizedStringFormatter-ACOccWph.js";import"./Heading-ggj7_bEi.js";import"./Button-xoJ9JlM1.js";import"./Button.module-BB7N-cLd.js";import"./info-B4T0OC2X.js";import"./Popover-CrJNx5RQ.js";import"./Form-DCycYtMR.js";import"./useField-DvTMSr8p.js";import"./check-BEQo7_-U.js";import"./useToggleState-DNIuJBzp.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
