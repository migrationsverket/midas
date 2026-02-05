import{j as e}from"./iframe-BtNJMoHI.js";import{C as m}from"./CheckboxGroup-UopAq6Ys.js";import{C as p}from"./Checkbox-CAM6orQM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Xit4Yszo.js";import"./utils-BTcjIN4e.js";import"./clsx-B-dksMZM.js";import"./Text-BGME6aJP.js";import"./useFocusRing-B5Ii0CSA.js";import"./index-mJuBdKXF.js";import"./index-DwYe5WTW.js";import"./clsx-Ciqy0D92.js";import"./Text-OgZoRIHX.js";import"./Label-BpPP-xLI.js";import"./Button-DhLs1vMJ.js";import"./Hidden-Ceg14RrY.js";import"./useLabels-CxeRtDFx.js";import"./useButton-Ddodp3Ah.js";import"./Dialog-BI-xb8xk.js";import"./RSPContexts-BF7VHJM2.js";import"./OverlayArrow-CpViwBIJ.js";import"./useResizeObserver-B77Do0ki.js";import"./useControlledState-CgZyRzUC.js";import"./Collection-B0yDbE1N.js";import"./index-CX_QFml9.js";import"./Separator-CQjZYdjD.js";import"./SelectionManager-CTH9w17B.js";import"./useEvent-lAZ0Ls88.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CkTj0W0H.js";import"./useDescription-aGP4GkA6.js";import"./ListKeyboardDelegate-CVsR5zae.js";import"./PressResponder-qbdNgXuz.js";import"./useLocalizedStringFormatter-DhOOgyIy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DsVHz756.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BkS4_cE1.js";import"./Button-BhgL-jXP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DSEZ_sfA.js";import"./createLucideIcon-D27Pl-Vx.js";import"./x-BFzEcC91.js";import"./Heading-CVpkZosN.js";import"./info-DgS0ck7k.js";import"./Popover-CH9TZeps.js";import"./useFormValidation-CY8g3EHX.js";import"./useField-D54wfcNo.js";import"./Form-D6rhWoht.js";import"./check-DJ8MbCIO.js";import"./useToggleState-HAOam8d2.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
