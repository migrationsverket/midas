import{j as e}from"./iframe-MVim3oui.js";import{C as m}from"./CheckboxGroup-D6mHKXOF.js";import{C as p}from"./Checkbox-7rs4uo9F.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BDvc8nCv.js";import"./utils-GfAQeq6-.js";import"./clsx-B-dksMZM.js";import"./Text-CK8mjed6.js";import"./useFocusRing-DsxBFZ5w.js";import"./index-DV_xb9Te.js";import"./index-BgBUqlNN.js";import"./clsx-Ciqy0D92.js";import"./Text-BRJKcgIb.js";import"./Label-CPUrc3w5.js";import"./Button-gb006erw.js";import"./Hidden-BnPFK6GE.js";import"./number-DfkVkf0F.js";import"./useLabels-CDhm4meR.js";import"./useButton-BYX1uAmK.js";import"./Dialog-BM6h7Qhq.js";import"./RSPContexts-CtooKiU1.js";import"./OverlayArrow-hTWNmnYT.js";import"./useResizeObserver-C5DKMkSY.js";import"./useControlledState-BAKDmaF6.js";import"./Collection-D1rnK3KC.js";import"./index-CoAcmiIB.js";import"./Separator-CZ8vG12I.js";import"./SelectionManager-o82G2AiP.js";import"./useEvent-BkJEM1S7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgPVTL_o.js";import"./useDescription-DDMJG_rN.js";import"./ListKeyboardDelegate-CQxknM_9.js";import"./PressResponder-BdCrncWf.js";import"./useLocalizedStringFormatter-BVBlcDTw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dvt4J9QX.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D4ii-ukQ.js";import"./Modal-DpvYgo_g.js";import"./Button-DXLRWKWN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQ2i-Pxa.js";import"./createLucideIcon-DbJYazUv.js";import"./x-5DuCkJ-_.js";import"./Heading-CRtmBqrr.js";import"./info-D_g0N3QK.js";import"./Popover-D0YU1Odv.js";import"./useFormValidation-I8DYeMuj.js";import"./useField-DBjxyUYg.js";import"./Form-BvWBeI3H.js";import"./check-DaMhjUgo.js";import"./useToggleState-CFMIZmUC.js";const mr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},t={args:{showSelectAll:!0}},a={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const cr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,a as SelectAllInteraction,t as ShowSelectAll,cr as __namedExportsOrder,mr as default};
