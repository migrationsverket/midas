import{j as e}from"./iframe-ChqJc2cw.js";import{C as m}from"./CheckboxGroup-jOjs72Rj.js";import{C as p}from"./Checkbox-DPFoKtVf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-neuSuNaT.js";import"./utils-C3PzQQRY.js";import"./clsx-B-dksMZM.js";import"./Text-ByZunG-k.js";import"./useFocusRing-Br7CSdIA.js";import"./index-XHTXcyLl.js";import"./index-BSxnvZZM.js";import"./clsx-Ciqy0D92.js";import"./Text-cWcAPzwL.js";import"./Label-sggOnSfM.js";import"./Button-BeubRGKE.js";import"./Hidden-CXc9jxUl.js";import"./useLabels-rs-x4V9J.js";import"./useButton-Cp-BrBn5.js";import"./Dialog-Ch0imCZY.js";import"./RSPContexts-Csr63BXU.js";import"./OverlayArrow-DDE9hO9J.js";import"./useResizeObserver-BcLmx9RX.js";import"./useControlledState-CR2AzEon.js";import"./Collection-CAfIo82p.js";import"./index-BfgufJ02.js";import"./Separator-BEpeu8T-.js";import"./SelectionManager-BSERiJGD.js";import"./useEvent-CDez9Lha.js";import"./scrollIntoView-DeODYBWe.js";import"./SelectionIndicator-DLEE3MHH.js";import"./useDescription-rnynDtnq.js";import"./ListKeyboardDelegate-DTsPBH1x.js";import"./PressResponder-DtD93DWh.js";import"./useLocalizedStringFormatter-u3-jiggt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTqqrlXz.js";import"./getScrollParent-CoX3TnbC.js";import"./VisuallyHidden-BU1LBnPa.js";import"./Button-DLoG7seu.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-DWAuUJ7k.js";import"./createLucideIcon-CuCvvgqY.js";import"./x-Qc81h6kE.js";import"./Heading-0izTS8KO.js";import"./info-C_xyrnPX.js";import"./Popover-v1FtuYMT.js";import"./useFormValidation-BaYQI757.js";import"./useField-BNA68SbK.js";import"./Form-DzCQHYD8.js";import"./check-UEbYmNwq.js";import"./useToggleState-Du67Fqb4.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
