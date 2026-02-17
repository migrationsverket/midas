import{j as e}from"./iframe-D4Gvrs9r.js";import{C as m}from"./CheckboxGroup-C_FLkNJB.js";import{C as p}from"./Checkbox-Dafw5WIf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BLkIz_DJ.js";import"./utils-DgLFYAtQ.js";import"./clsx-B-dksMZM.js";import"./Text-9OpdE2KE.js";import"./useFocusRing-Cb3CZ-aE.js";import"./index-6UveYWg_.js";import"./index-DkaKCeuE.js";import"./clsx-Ciqy0D92.js";import"./Text-DPs03w0L.js";import"./Label-L_cZKA3o.js";import"./Button-BokCFgRi.js";import"./Hidden-Fg0nOe1J.js";import"./useLabels-d4KXrv_2.js";import"./useButton-BedLEyIe.js";import"./Dialog-zW0zG9W3.js";import"./RSPContexts-Czq_pnVN.js";import"./OverlayArrow-BQwfwJwo.js";import"./useResizeObserver-D88_ukrT.js";import"./useControlledState-BxrHLQLL.js";import"./Collection-hZrEm5m1.js";import"./index-CmIIKAbh.js";import"./Separator-BNy66H1K.js";import"./SelectionManager-DFet17wD.js";import"./useEvent-BCx0YIxG.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BIxjpXf9.js";import"./useDescription-CaLH3whp.js";import"./ListKeyboardDelegate-DJnjR6Kz.js";import"./PressResponder-B5c3bIBx.js";import"./useLocalizedStringFormatter-C406VONV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mkPjdFLR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DsUdzhfv.js";import"./Button-CGGZxAPK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFXwxmG8.js";import"./createLucideIcon-BxZcqrlQ.js";import"./x-De-PNzK7.js";import"./Heading-DDPiogzv.js";import"./info-BqSFbJvi.js";import"./Popover-CGzaLVgW.js";import"./useFormValidation-CwQ_rSHp.js";import"./useField-BR9XxUx2.js";import"./Form-BfdGIWU_.js";import"./check-CDPJeYWc.js";import"./useToggleState-C6Car7gE.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
