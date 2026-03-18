import{j as e}from"./iframe-gH8ABtWn.js";import{C as m}from"./CheckboxGroup-Bj3bqFh9.js";import{C as p}from"./Checkbox-GCpPP2Kp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B2F_p8LM.js";import"./utils-Dr0NplXF.js";import"./clsx-B-dksMZM.js";import"./Text-CfaWjhbQ.js";import"./useFocusRing-BzsOph_O.js";import"./index-C3LVocIP.js";import"./index-BXReFhAr.js";import"./clsx-Ciqy0D92.js";import"./Text-CW1FG424.js";import"./Label-_2FF8Ntn.js";import"./Button-BNQc1T02.js";import"./Hidden-LWIlbl0l.js";import"./useLabels-7BQEP7LD.js";import"./useButton-BwMcnHkP.js";import"./Dialog-P_nglTkg.js";import"./RSPContexts-JH-s2nvd.js";import"./OverlayArrow-BV5hWtIb.js";import"./useResizeObserver-1Yyz1vcN.js";import"./useControlledState-CxcfWzqE.js";import"./Collection-D1QokVuM.js";import"./index-BGx-91uj.js";import"./Separator-Dg_qfe40.js";import"./SelectionManager-Iv778hvw.js";import"./useEvent-Bt_gQioX.js";import"./scrollIntoView-BqHSzV05.js";import"./SelectionIndicator-BjSkIjXo.js";import"./useDescription-Cs18I91_.js";import"./ListKeyboardDelegate-Chu4c7a7.js";import"./PressResponder-DaRhh1Jf.js";import"./useLocalizedStringFormatter-DY58p06X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BPJL1Vr1.js";import"./getScrollParent-CLH27qmc.js";import"./VisuallyHidden-CA2YzQGk.js";import"./x-Cw1h_T-8.js";import"./createLucideIcon-BESY5gGm.js";import"./useLocalizedStringFormatter-CwcPRwvH.js";import"./Heading-C0hTf1fg.js";import"./Button-BbxyNHP5.js";import"./Button.module-BB7N-cLd.js";import"./info-HQMy_Oa9.js";import"./Popover-DKtge3K9.js";import"./useFormValidation-CK0TKrXv.js";import"./useField-DPi7PJOQ.js";import"./Form-B6vf0-_o.js";import"./check-D7I0wIV2.js";import"./useToggleState-COXsesrJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
