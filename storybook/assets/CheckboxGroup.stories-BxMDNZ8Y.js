import{j as e}from"./iframe-Dv5oy3ex.js";import{C as m}from"./CheckboxGroup-DVIJ0aC4.js";import{C as p}from"./Checkbox-07-wDHzH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CoMYK3IV.js";import"./utils-DqE5PILI.js";import"./clsx-B-dksMZM.js";import"./Text-D7P0gU-S.js";import"./useFocusRing-DFkj2PJJ.js";import"./index-COb2Vy-7.js";import"./index-IcK2KPt1.js";import"./clsx-Ciqy0D92.js";import"./Text-BnCHL2hB.js";import"./Label-thI0xqCw.js";import"./Button-BH4eeu0k.js";import"./Hidden-CxtegDl0.js";import"./useLabels-Dt8q9qYY.js";import"./useButton-B42S7nFw.js";import"./Dialog-Bk8rq18R.js";import"./RSPContexts-Bum2SDPF.js";import"./OverlayArrow-Bu-qbdnc.js";import"./useResizeObserver-2uNCjIkJ.js";import"./useControlledState-CnplxgpR.js";import"./Collection-Dzh3Awwz.js";import"./index-5xno2gQO.js";import"./Separator-CaS-v3a9.js";import"./SelectionManager-DSzDDqTJ.js";import"./useEvent-6NaHNc9j.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cc32OT_a.js";import"./useDescription-R2YOgaZ4.js";import"./ListKeyboardDelegate-DbvsQKFt.js";import"./PressResponder-B8nhnZOL.js";import"./useLocalizedStringFormatter-Ci5_pA40.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-pEGSvzdu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ziZ6pEVt.js";import"./Button-DFKGQSYP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BSci6oqP.js";import"./createLucideIcon-BqwtoRoR.js";import"./x-Uek5wc5v.js";import"./Heading-DF2Wpc2f.js";import"./info-DWVeCGy3.js";import"./Popover-DqyP9DKX.js";import"./useFormValidation-DtuLUvaq.js";import"./useField-Be9MSkin.js";import"./Form-CgY4wC_i.js";import"./check-lpzam653.js";import"./useToggleState-CvV8wTIt.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
