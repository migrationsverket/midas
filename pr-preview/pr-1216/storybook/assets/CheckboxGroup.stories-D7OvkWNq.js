import{j as e}from"./iframe-CYSKzr0I.js";import{C as m}from"./CheckboxGroup-XnCPmp4P.js";import{C as p}from"./Checkbox-D_0m9l_n.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-pBIr7GBS.js";import"./utils-ByZ0CNGg.js";import"./clsx-B-dksMZM.js";import"./Text-D-FhadIY.js";import"./useFocusRing-BOmMevWO.js";import"./index-DJnpB-SU.js";import"./index-BKF9VLNz.js";import"./clsx-Ciqy0D92.js";import"./Text-BV0i2D1f.js";import"./Label-xDSIMgsM.js";import"./Button-DDpb5IsZ.js";import"./Hidden-nUwUlPG8.js";import"./useLabel-BSP_KiPN.js";import"./useLabels-CU1dbJnt.js";import"./useButton-DFwA3R9x.js";import"./Dialog-Dc-vgPKm.js";import"./RSPContexts-aAwDc8x5.js";import"./OverlayArrow-CZqpaMw3.js";import"./useResizeObserver-GOJdH5Bl.js";import"./useControlledState-YbLesBTN.js";import"./Collection-CfkoZBPn.js";import"./index-HmT-HBiW.js";import"./Separator-ByUTidnJ.js";import"./SelectionManager-OX1LghzF.js";import"./useEvent-F_BKG7Ay.js";import"./scrollIntoView-DNouCeg5.js";import"./SelectionIndicator-DSerCQMG.js";import"./useDescription-BdJNmK5T.js";import"./ListKeyboardDelegate-Bm3ugmfh.js";import"./PressResponder-f2ebe0dD.js";import"./useLocalizedStringFormatter-ClZt7a0N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5VRkCog.js";import"./getScrollParent-DyjFmHbi.js";import"./VisuallyHidden-D5I2qOtz.js";import"./Modal-CtIGn-SM.js";import"./x-BEC-7ATt.js";import"./createLucideIcon-DLSGmePH.js";import"./useLocalizedStringFormatter-D5bMO4Zi.js";import"./Heading-BesTY9gY.js";import"./Button-BBfM7fHR.js";import"./Button.module-BB7N-cLd.js";import"./info-CpSsyVDg.js";import"./Popover-BmAbyCcG.js";import"./Form-DeTa1GGT.js";import"./useField-9poXgOx8.js";import"./check-BMBbR8fJ.js";import"./useToggleState-BR0m-ieM.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
