import{j as e}from"./iframe-Dynq-WfW.js";import{C as m}from"./CheckboxGroup-m712IQZD.js";import{C as p}from"./Checkbox-DWo4MN0J.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DMaQ57CQ.js";import"./utils-C5f3leNv.js";import"./clsx-B-dksMZM.js";import"./Text-Cnz-vVuh.js";import"./useFocusRing-BAuEJFrN.js";import"./index-YRe8YCfP.js";import"./index-S1WfcoeI.js";import"./clsx-Ciqy0D92.js";import"./Text-CyHTqQNs.js";import"./Label-9M32I9cl.js";import"./Button-CHr1GBYB.js";import"./Hidden-B_nMsfp6.js";import"./useLabels-C0xISSqM.js";import"./useButton-CO5VodBT.js";import"./Dialog-Dsv5S1w7.js";import"./RSPContexts-DYQoab7T.js";import"./OverlayArrow-DlUSCgdR.js";import"./useResizeObserver-BBvU3bav.js";import"./useControlledState-B4c64_YE.js";import"./Collection-BOVukDKR.js";import"./index-BiH5f6GO.js";import"./Separator-CMXv2l2s.js";import"./SelectionManager-tNGgxcmj.js";import"./useEvent-BUD_aeZx.js";import"./scrollIntoView-DH3xZtz3.js";import"./SelectionIndicator-BvWsaTyN.js";import"./useDescription-D_aj6rqo.js";import"./ListKeyboardDelegate-kRLBhSjx.js";import"./PressResponder-DLEOVX5D.js";import"./useLocalizedStringFormatter-iG9Zi8vK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BP74HWTE.js";import"./VisuallyHidden-DTGQFyag.js";import"./Button-CGVjpGMW.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-JxJiRHf8.js";import"./createLucideIcon-DfdNSkLt.js";import"./x-C7yqcza2.js";import"./Heading-D7RDPSXt.js";import"./info-_scF36JD.js";import"./Popover-DwZDh29s.js";import"./useFormValidation-C2_jfezl.js";import"./useField-CFMQ-uSy.js";import"./Form-EHRiKevF.js";import"./check-UHDVs5Wi.js";import"./useToggleState-BXEDAWD2.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
