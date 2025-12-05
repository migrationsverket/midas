import{j as e}from"./iframe-Duvzi_mO.js";import{C as m}from"./CheckboxGroup-CJPVH39B.js";import{C as p}from"./Checkbox-Bp9IYAA1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-KymSBWrt.js";import"./utils-DXbn0oqq.js";import"./clsx-B-dksMZM.js";import"./Text--15STIft.js";import"./useFocusRing--hZOMB0E.js";import"./index-D5Xrr1Vj.js";import"./index-C3jNp5eG.js";import"./clsx-Ciqy0D92.js";import"./Text-B2Au3uTF.js";import"./Label-B_j0zLgj.js";import"./Button-DEGU7aUv.js";import"./Hidden-Cj6eSEvr.js";import"./useLabels-D1kjihVB.js";import"./useButton-DiocC29F.js";import"./Dialog-yEDAbKl5.js";import"./RSPContexts-DD0p7Dx-.js";import"./OverlayArrow-DkyzPOpF.js";import"./useResizeObserver-CoTKjDz1.js";import"./useControlledState-DUm4m-rZ.js";import"./Collection-D7bZwKND.js";import"./index-QULG0cx_.js";import"./Separator-DwD2mKZu.js";import"./SelectionManager-CHE_IsgN.js";import"./useEvent-C1kRtpn3.js";import"./scrollIntoView-CoN4CEq9.js";import"./SelectionIndicator-BrZdy_PU.js";import"./useDescription-hfMxyp8f.js";import"./ListKeyboardDelegate-CxFnV7s1.js";import"./PressResponder-BvLGxz5i.js";import"./useLocalizedStringFormatter-BU47f0l0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dn_cR8X0.js";import"./VisuallyHidden-DFNT7U81.js";import"./Button-agFIfSf8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJvV6lOf.js";import"./createLucideIcon-Pkzd9K88.js";import"./x-BUjRGG1p.js";import"./Heading-DxyAYdrG.js";import"./info-DO9Ya7qW.js";import"./Popover-BRL_o9DX.js";import"./useFormValidation-Dyub27PJ.js";import"./useField-CXIum541.js";import"./Form-BNxCnv7m.js";import"./check-DKo4wzKZ.js";import"./useToggleState-zN1TdYqi.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
