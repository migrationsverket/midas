import{j as e}from"./iframe-e7dVJZ80.js";import{C as m}from"./CheckboxGroup-DxT_GtYT.js";import{C as p}from"./Checkbox-G5Htfr-v.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-9Gg6ZPlh.js";import"./utils-CEQ_Va0c.js";import"./clsx-B-dksMZM.js";import"./Text-CPsvfpaa.js";import"./useFocusRing-B9Rn1B2s.js";import"./index-5fHP5ATJ.js";import"./index-CaEVLjia.js";import"./clsx-Ciqy0D92.js";import"./Text-CQWMXX5Z.js";import"./Label-D4gVihti.js";import"./Button-HeijaR4V.js";import"./Hidden-DUO5PkD4.js";import"./useLabels-DJlzxkkZ.js";import"./useButton-DzyK9NH4.js";import"./Dialog-DD3oYIkL.js";import"./RSPContexts-CYNFOXtI.js";import"./OverlayArrow-C9B0vpMn.js";import"./useResizeObserver-VmwogLqB.js";import"./useControlledState-CbdyQTTS.js";import"./Collection-CUCHkADT.js";import"./index-BDQNA3nl.js";import"./Separator-UJFGSXNG.js";import"./SelectionManager-Bh3IPHon.js";import"./useEvent-gTSMTyTm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cc_8RdsI.js";import"./useDescription-DcKo4w2-.js";import"./ListKeyboardDelegate-LtZO_R9S.js";import"./PressResponder-BWvtNBff.js";import"./useLocalizedStringFormatter-Dy8GwP1X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-TB_kawwb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-VT-zoUNe.js";import"./Button-B2F6YuiM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Di1nCEID.js";import"./createLucideIcon-tRzhitig.js";import"./x-CxyJyYcT.js";import"./Heading-Bq0ZTA9f.js";import"./info-bXNc76H8.js";import"./Popover-DJnFnc6B.js";import"./useFormValidation-BY_IYQMh.js";import"./useField-BJBsJOF5.js";import"./Form-IYjIxsTE.js";import"./check-CTxG8rOo.js";import"./useToggleState-Bsdk-zaB.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
