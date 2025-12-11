import{j as e}from"./iframe-BgVJ8X44.js";import{C as m}from"./CheckboxGroup-Caw_o-Pj.js";import{C as p}from"./Checkbox-CITZZSRY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-gCUQmcQk.js";import"./utils-D-I24J34.js";import"./clsx-B-dksMZM.js";import"./Text-FAJBtBOA.js";import"./useFocusRing-CTvPExP9.js";import"./index-mSUBts4J.js";import"./index-r-q8-w1E.js";import"./clsx-Ciqy0D92.js";import"./Text-Ur40Kxtz.js";import"./Label-D_R-DFPW.js";import"./Button-Co07siwL.js";import"./Hidden-2A-J6V47.js";import"./useLabels-Cc5uE-EY.js";import"./useButton-B_FWwj3N.js";import"./Dialog-Cb-Snr-X.js";import"./RSPContexts-BLdliVAA.js";import"./OverlayArrow-5UhAPIBu.js";import"./useResizeObserver-DPcD_kfV.js";import"./useControlledState-CIZ5X_Vt.js";import"./Collection-4zR0JaNM.js";import"./index-CVChpcMA.js";import"./Separator-au6IV1Kn.js";import"./SelectionManager-B1SpsTaz.js";import"./useEvent-BJMzsLl5.js";import"./scrollIntoView-DecpEwb6.js";import"./SelectionIndicator-0oQqj6CB.js";import"./useDescription-HPM-2TK6.js";import"./ListKeyboardDelegate-QFOBKGo4.js";import"./PressResponder-68RBjuef.js";import"./useLocalizedStringFormatter-D6OWhLn8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-iPCQ6IZJ.js";import"./VisuallyHidden-Cge0FuXr.js";import"./Button-DPgPRHM0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxZR6OYe.js";import"./createLucideIcon-DpkHLMCU.js";import"./x-DaOaleql.js";import"./Heading-CVDh0LRI.js";import"./info-DD1R_IDL.js";import"./Popover-Cmbrc3Cr.js";import"./useFormValidation-l60rYMEP.js";import"./useField-DKjF-YG-.js";import"./Form-CbUobMl-.js";import"./check-EbFZ0jcY.js";import"./useToggleState-Dew-Ph-b.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
