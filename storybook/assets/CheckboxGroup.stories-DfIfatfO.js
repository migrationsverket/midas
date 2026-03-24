import{j as e}from"./iframe-ClA4Jp0w.js";import{C as m}from"./CheckboxGroup-C5eu00v4.js";import{C as p}from"./Checkbox-CIleHH8E.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CCOnpqUO.js";import"./utils-D0z16UKm.js";import"./clsx-B-dksMZM.js";import"./Text-BOHdvQkr.js";import"./useFocusRing-CH7YMdaA.js";import"./index-bNRMcRC-.js";import"./index-B9CA3Byf.js";import"./clsx-Ciqy0D92.js";import"./Text-BtZnFY82.js";import"./Label-DFO3sP3S.js";import"./Button-lxcybUX-.js";import"./Hidden-BjxHpkJU.js";import"./useLabels-l7dZfeia.js";import"./useButton-Dq5YitBv.js";import"./Dialog-CWWwzV4t.js";import"./RSPContexts-iTkphylR.js";import"./OverlayArrow-Dp2DeXjc.js";import"./useResizeObserver-B1FMgZAv.js";import"./useControlledState-BVmLEOQ4.js";import"./Collection-zeuyxdbY.js";import"./index-BxB41E7R.js";import"./Separator-CRabFa1m.js";import"./SelectionManager-C8mEc_pZ.js";import"./useEvent-YydGr1-7.js";import"./scrollIntoView-pB7m18ZN.js";import"./SelectionIndicator-ODji40oL.js";import"./useDescription-iMciGuDR.js";import"./ListKeyboardDelegate-CmGxp_4O.js";import"./PressResponder-DTWDZ3RF.js";import"./useLocalizedStringFormatter-LKr8XwmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BJUvqJXO.js";import"./getScrollParent-DQC80py1.js";import"./VisuallyHidden-Dka0OyWW.js";import"./x-DBneEqd2.js";import"./createLucideIcon-nVFpiFPl.js";import"./useLocalizedStringFormatter-f9qOXevm.js";import"./Heading-BDTZomZp.js";import"./Button-D3i3Yqak.js";import"./Button.module-BB7N-cLd.js";import"./info-DJyukONb.js";import"./Popover-mTWFaAPG.js";import"./Form-p39JobxH.js";import"./useField-AXva_Uzh.js";import"./check-DXe4Zrii.js";import"./useToggleState-DfOXrnMn.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
