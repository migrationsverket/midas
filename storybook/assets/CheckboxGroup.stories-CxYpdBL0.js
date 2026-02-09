import{j as e}from"./iframe-DOXdiU66.js";import{C as m}from"./CheckboxGroup-Bc5WCDNZ.js";import{C as p}from"./Checkbox-CeJuShb0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DkJbgax8.js";import"./utils-CmnmUlXv.js";import"./clsx-B-dksMZM.js";import"./Text-gQE2jOxd.js";import"./useFocusRing-DmwdXSTO.js";import"./index-ClfAcbiY.js";import"./index-BXbJVeS4.js";import"./clsx-Ciqy0D92.js";import"./Text-O51bLbCJ.js";import"./Label-BleqQC3f.js";import"./Button-DcU_sKA3.js";import"./Hidden-TB3BoZiq.js";import"./useLabels-j-fCOdoN.js";import"./useButton-BADRSzES.js";import"./Dialog-B_uYMmnU.js";import"./RSPContexts-DC30gU2X.js";import"./OverlayArrow-CO3pT8NC.js";import"./useResizeObserver-C-OFc9UL.js";import"./useControlledState-CJroEoWv.js";import"./Collection-BIazFUA_.js";import"./index-CXkiP9a7.js";import"./Separator-CJeQ8KyV.js";import"./SelectionManager-CXFNo1_J.js";import"./useEvent-D7Unhy1s.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ClV0_nCJ.js";import"./useDescription-Czop0qa_.js";import"./ListKeyboardDelegate-aan13HZ9.js";import"./PressResponder-DxkVbpjR.js";import"./useLocalizedStringFormatter-CWz_tyHY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-2rpEPmUy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-1ky1b9n5.js";import"./Button-CXH-q602.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DslrlAyz.js";import"./createLucideIcon-CTd9hGNC.js";import"./x-CAiuwumR.js";import"./Heading-BnPWYYa9.js";import"./info-CQsqc1Md.js";import"./Popover-a6QyB0iN.js";import"./useFormValidation-DEhwRD6x.js";import"./useField-ByAKI2BZ.js";import"./Form-B7uuhRnR.js";import"./check-D0x2IrBA.js";import"./useToggleState-BvGXKYbF.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
