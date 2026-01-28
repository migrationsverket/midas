import{j as e}from"./iframe-Dw6ThTAb.js";import{C as m}from"./CheckboxGroup-CA1r0-b0.js";import{C as p}from"./Checkbox-BtPrFU3S.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DXxOP3rc.js";import"./utils-Cc21G09W.js";import"./clsx-B-dksMZM.js";import"./Text-CUe8uG9W.js";import"./useFocusRing-xc1II4Ss.js";import"./index-CYKqCDi7.js";import"./index-MEMx4wU2.js";import"./clsx-Ciqy0D92.js";import"./Text-COf0hmuO.js";import"./Label-CzKfUXQk.js";import"./Button-0Xunpr60.js";import"./Hidden-SnJFNY5a.js";import"./useLabels-DkWQHrpu.js";import"./useButton-Au9jFQG2.js";import"./Dialog-rVuOUoSU.js";import"./RSPContexts-tvXcEv4V.js";import"./OverlayArrow-p_rObb7K.js";import"./useResizeObserver-_DN6Irs7.js";import"./useControlledState-CUSHFPNB.js";import"./Collection-BBo2i_f0.js";import"./index-BOINZ4le.js";import"./Separator-CYAzFREs.js";import"./SelectionManager-DkglZCtx.js";import"./useEvent-DasM2UJj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DKG-qAuu.js";import"./useDescription-D06z1dS-.js";import"./ListKeyboardDelegate-BP400_Lu.js";import"./PressResponder-CZxiG_Gi.js";import"./useLocalizedStringFormatter-BY0kdCm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dq0qz9Ho.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CdWjTb8h.js";import"./Button-B1ILUDpZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-n073QgDi.js";import"./createLucideIcon-B3ctXaYi.js";import"./x-B_wX4fA-.js";import"./Heading-CxtLSvtP.js";import"./info-BvHn66Gl.js";import"./Popover-Bl0TCAnK.js";import"./useFormValidation-CRMkN8GB.js";import"./useField-VxKjSK4Y.js";import"./Form-XKsvFydX.js";import"./check-BCXwpl9Y.js";import"./useToggleState-Dx8W6wIq.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
