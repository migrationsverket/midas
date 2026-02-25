import{j as e}from"./iframe-BemYTmI0.js";import{C as m}from"./CheckboxGroup-DQVV6Hml.js";import{C as p}from"./Checkbox-CET8pLBG.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cmx8qBX6.js";import"./utils-BFE3Bu5p.js";import"./clsx-B-dksMZM.js";import"./Text-BdKoRU3R.js";import"./useFocusRing-DZNPQtTp.js";import"./index-ClgbtUC1.js";import"./index-BYexVBob.js";import"./clsx-Ciqy0D92.js";import"./Text-C_3jh_f2.js";import"./Label-Co7s0eKC.js";import"./Button-BIUCE2_i.js";import"./Hidden-BgieuMJL.js";import"./useLabels-B0oUE5fB.js";import"./useButton-BFMyhuBV.js";import"./Dialog-zjIWTz44.js";import"./RSPContexts-Bpi28sKY.js";import"./OverlayArrow-szcx6Hif.js";import"./useResizeObserver-BYTLaHDK.js";import"./useControlledState-CpK-5b_b.js";import"./Collection-CVw2CSpD.js";import"./index-BwX8aiOo.js";import"./Separator-BFJnq1WA.js";import"./SelectionManager-CETzm5H2.js";import"./useEvent-BjqKnd5t.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DBlRDH-v.js";import"./useDescription-DhkrqMYF.js";import"./ListKeyboardDelegate-CUrp1wRU.js";import"./PressResponder-BlFiJnok.js";import"./useLocalizedStringFormatter-dRW-fgCh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DkEgdanO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BYKpW6eG.js";import"./Button-BvlrAquf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CsgibMpR.js";import"./createLucideIcon-CvZzPSN7.js";import"./x-DusiX_N1.js";import"./Heading-DoAu3hzM.js";import"./info-C77x0O1Y.js";import"./Popover-C-8PUIjr.js";import"./useFormValidation-Hprlhq0d.js";import"./useField-BByJZkIc.js";import"./Form-Cl-wZTVf.js";import"./check-C0jOVUR7.js";import"./useToggleState-ijvHJaa3.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
