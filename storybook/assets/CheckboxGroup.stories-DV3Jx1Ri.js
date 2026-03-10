import{j as e}from"./iframe-bMlrIVqx.js";import{C as m}from"./CheckboxGroup-tn2JD2OP.js";import{C as p}from"./Checkbox-CEB4VWfr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BuQ4lPqn.js";import"./utils-CiQjpS3V.js";import"./clsx-B-dksMZM.js";import"./Text-Bx2VBQkS.js";import"./useFocusRing-D8WCTnIg.js";import"./index-bHuBvRtH.js";import"./index-RO-R4BZE.js";import"./clsx-Ciqy0D92.js";import"./Text-Bdt-QSsh.js";import"./Label-Cx9CnG1X.js";import"./Button-v8dNK1Nl.js";import"./Hidden-hGkg45bv.js";import"./useLabels-1BtgXQl_.js";import"./useButton-d-Sb4YVS.js";import"./Dialog-a4vPDuZX.js";import"./RSPContexts-DoPn5P63.js";import"./OverlayArrow-BjZWg3G8.js";import"./useResizeObserver-B1YiBwxG.js";import"./useControlledState-B1Wdr8nI.js";import"./Collection-CMNy8xwo.js";import"./index-fcuKGEAb.js";import"./Separator-Dld-2_Ml.js";import"./SelectionManager-VLtppM1E.js";import"./useEvent-DP6lgkls.js";import"./scrollIntoView-CDYKtDZ7.js";import"./SelectionIndicator-D_gtTXsF.js";import"./useDescription-DpC2r11h.js";import"./ListKeyboardDelegate-D5YpQ5fx.js";import"./PressResponder-DOm5aFeu.js";import"./useLocalizedStringFormatter-CMgAZYok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfMBG2tT.js";import"./getScrollParent-CjAAh5mb.js";import"./VisuallyHidden-3-YJbPrh.js";import"./Button-BN-gP6-P.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CTQktmvu.js";import"./createLucideIcon-BpTSGys0.js";import"./x-CcCCRFo_.js";import"./Heading-CVhmOHIJ.js";import"./info-Bq9rumUI.js";import"./Popover-CpW1xD15.js";import"./useFormValidation-eHx-WVAV.js";import"./useField-DVMTtL6M.js";import"./Form-CHbmSbh0.js";import"./check-D0aLA1fr.js";import"./useToggleState-vqeMXzFJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
