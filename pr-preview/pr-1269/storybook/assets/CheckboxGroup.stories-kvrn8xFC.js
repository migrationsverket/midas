import{j as e}from"./iframe-Cc2x2NhL.js";import{C as m}from"./CheckboxGroup-BfGgLGjX.js";import{C as p}from"./Checkbox-q8bzzOFZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-l6QnCvwQ.js";import"./utils-4Igqbjf8.js";import"./clsx-B-dksMZM.js";import"./Text-D3p3B56u.js";import"./useFocusRing-WAjZqxaV.js";import"./index-B2z8J_iy.js";import"./index-BMFqcPHU.js";import"./clsx-Ciqy0D92.js";import"./Text-DcE_bHZ_.js";import"./Label-DYNh7RDv.js";import"./Button-ByJMIeTP.js";import"./Hidden-DXurTabA.js";import"./useLabel-C3c6HGiK.js";import"./useLabels-DlHfLFqT.js";import"./useButton-DbeNFfwU.js";import"./Dialog-BPf3IZOs.js";import"./RSPContexts-0YfvD9LK.js";import"./OverlayArrow-FlYvI0_Z.js";import"./useResizeObserver-DWx8oCEL.js";import"./useControlledState-B_OZWkkq.js";import"./Collection-DrMZK_17.js";import"./index-DXdtOShX.js";import"./Separator-7WC-UZS3.js";import"./SelectionManager-DEIbJdB3.js";import"./useEvent-BBH3oYjA.js";import"./scrollIntoView-BdS7fMnb.js";import"./SelectionIndicator-BhAuP5hr.js";import"./useDescription-Djm_rT5S.js";import"./ListKeyboardDelegate-BFNmsEvi.js";import"./PressResponder-C8VUQxtG.js";import"./useLocalizedStringFormatter-DvNtIm_P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dll6ZQaD.js";import"./getScrollParent-D5jUw6gC.js";import"./VisuallyHidden-CAnoPPmf.js";import"./ModalOverlay-BmUXt-jD.js";import"./x-BwuT2ktD.js";import"./createLucideIcon-DcmAEzc9.js";import"./useLocalizedStringFormatter-sXp9RPex.js";import"./Heading-Bd4wMQv_.js";import"./Button-ClCBSbVd.js";import"./Button.module-BB7N-cLd.js";import"./info-dC2Dc-R-.js";import"./Popover-BTHC1uhw.js";import"./Form-Dzl391B-.js";import"./useField-Dyc8N4z1.js";import"./check-C0FSLY3B.js";import"./useToggleState-Dsi2eB2f.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
