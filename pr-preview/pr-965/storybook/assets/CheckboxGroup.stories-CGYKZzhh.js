import{j as e}from"./iframe-DFv6IHfp.js";import{C as m}from"./CheckboxGroup-7wwvS_lL.js";import{C as p}from"./Checkbox-BIXhvlTc.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-lQrH4ZG6.js";import"./utils-CdweZ9b8.js";import"./clsx-B-dksMZM.js";import"./Text-DUn2-1vf.js";import"./useFocusRing-DHeKREWZ.js";import"./index-DQr9Z14G.js";import"./index-BeE2cmwc.js";import"./clsx-Ciqy0D92.js";import"./Text-3gfxnPvb.js";import"./Label-D6yULbQG.js";import"./Button-Dw6Cj4Ep.js";import"./Hidden-CEz7ZVFR.js";import"./useLabels-M6t6KXNG.js";import"./useButton-DauDJiKf.js";import"./Dialog-CeZGi9yM.js";import"./RSPContexts-VhiPY5ek.js";import"./OverlayArrow-B0Oxyhh1.js";import"./useResizeObserver-BIGMGxLN.js";import"./useControlledState-DjNdup5v.js";import"./Collection-DKTv4BFZ.js";import"./index-B0ddwGHD.js";import"./Separator-BxM7bzkQ.js";import"./SelectionManager-CKZquKcF.js";import"./useEvent-CcbF0N8H.js";import"./scrollIntoView-CW_qc0_A.js";import"./SelectionIndicator-CE2cPjaX.js";import"./useDescription-CVPZdUKx.js";import"./ListKeyboardDelegate-CSvuDe02.js";import"./PressResponder-DZiC3qqF.js";import"./useLocalizedStringFormatter-CRBwvr9e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BenZS4AC.js";import"./VisuallyHidden-Ddtdw3a8.js";import"./Button-CR2f2OCB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dap2ufNk.js";import"./createLucideIcon-DF7DR1uu.js";import"./x-ZchVGeng.js";import"./Heading-zhqqpJbx.js";import"./info-t8ZHpdYH.js";import"./Popover-Be-ct-gT.js";import"./useFormValidation-BKYaHahd.js";import"./useField-Dw1jR3Ho.js";import"./Form-B8TtzPYO.js";import"./check-BnpM76oq.js";import"./useToggleState-BAzJxOrt.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
