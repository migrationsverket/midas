import{j as e}from"./iframe-mw-3Wqs6.js";import{C as m}from"./CheckboxGroup-Ba3vWiSw.js";import{C as p}from"./Checkbox-CQHF9LJr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-9R24nCVk.js";import"./utils-CYxbFJyZ.js";import"./clsx-B-dksMZM.js";import"./Text-D7lmaY_E.js";import"./useFocusRing-89DUUa4N.js";import"./index-zd9D6jNJ.js";import"./index-DA11V2mi.js";import"./clsx-Ciqy0D92.js";import"./Text-DGTCcOxe.js";import"./Label-DtcEAkmW.js";import"./Button-Db-TTM-V.js";import"./Hidden-DYrMFcxf.js";import"./useLabels-DdJABAh2.js";import"./useButton-XGSOFvEQ.js";import"./Dialog-Ccjdhkv8.js";import"./RSPContexts-XN3T4dow.js";import"./OverlayArrow-BKSp9Jsk.js";import"./useResizeObserver-CH-Wqbzm.js";import"./useControlledState--wR3WwaU.js";import"./Collection-D6Asr0I3.js";import"./index-DKZkByRv.js";import"./Separator-DWgFLVGB.js";import"./SelectionManager-C7pFQbzQ.js";import"./useEvent-CRXVShig.js";import"./scrollIntoView-CXkXakFA.js";import"./SelectionIndicator-Do5clOAx.js";import"./useDescription-Blh6neaZ.js";import"./ListKeyboardDelegate-CSgQuyq8.js";import"./PressResponder-Bbu-ILI9.js";import"./useLocalizedStringFormatter-BCBlkbeT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CGAWy5Jf.js";import"./VisuallyHidden-D6wLmm0f.js";import"./Button-Ca1dkGu6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CNqwZTZL.js";import"./createLucideIcon-DugDWxFe.js";import"./x-LtoPVlfO.js";import"./Heading-Bl6Y-w-i.js";import"./info-BgaALT6m.js";import"./Popover-BRD9rdjK.js";import"./useFormValidation-yYLpoRhw.js";import"./useField-DomG1e7H.js";import"./Form-C2aIA_dy.js";import"./check-CMMOelx0.js";import"./useToggleState-DJ52qNm5.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
