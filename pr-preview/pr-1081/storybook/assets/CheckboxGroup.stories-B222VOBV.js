import{j as e}from"./iframe-Ca9PeS4b.js";import{C as m}from"./CheckboxGroup-DLE7JNo3.js";import{C as p}from"./Checkbox-7mBji1OD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-3WYDLCHb.js";import"./utils-CUoV_pAF.js";import"./clsx-B-dksMZM.js";import"./Text-ZWT-9m7v.js";import"./useFocusRing-B56DIc1T.js";import"./index-n_MeXCZI.js";import"./index-CcFOlZnw.js";import"./clsx-Ciqy0D92.js";import"./Text-DlcQ59dF.js";import"./Label-DA-3gvj2.js";import"./Button-DLBOkC9W.js";import"./Hidden-ZKBw_h0J.js";import"./useLabels-5MQe5wH1.js";import"./useButton-jHPk0lvT.js";import"./Dialog-BODDtTyg.js";import"./RSPContexts-ByQqD1Vo.js";import"./OverlayArrow-DZRZONk7.js";import"./useResizeObserver-CzYlrVCr.js";import"./useControlledState-55nfPVrT.js";import"./Collection-JenPJx5t.js";import"./index-DsiYp3bc.js";import"./Separator-C2kBBs6l.js";import"./SelectionManager-BxeXuy6l.js";import"./useEvent-CTqepDA6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DLnP5b2N.js";import"./useDescription-BxWKVtdh.js";import"./ListKeyboardDelegate-QYpzlqB7.js";import"./PressResponder-wYW3y2Eq.js";import"./useLocalizedStringFormatter-CRS5dirU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dh0BKkJ-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJAuUKrr.js";import"./Button-DaI6b5l3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-fmn21mIk.js";import"./createLucideIcon-CT83y0Ua.js";import"./x-BHPi5tAp.js";import"./Heading-CVqJMxwo.js";import"./info-DAaxha7q.js";import"./Popover-DALRsSIr.js";import"./useFormValidation-0CkrV3-A.js";import"./useField-Bs-tUlaz.js";import"./Form-hfyf2anb.js";import"./check-BYrzzCqG.js";import"./useToggleState-ClshfQWe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
