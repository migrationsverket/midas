import{j as e}from"./iframe-Di032A-a.js";import{C as m}from"./CheckboxGroup-CGwVcHDP.js";import{C as p}from"./Checkbox-hU-MqbE3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CxIoYGIw.js";import"./utils-BJxOcxIc.js";import"./clsx-B-dksMZM.js";import"./Text-DkJdkbXM.js";import"./useFocusRing-BEKzggJ1.js";import"./index-CCl7obIv.js";import"./index-FnGCBODv.js";import"./clsx-Ciqy0D92.js";import"./Text-BDBd8d6g.js";import"./Label-cNDXDGyu.js";import"./Button-BX9DRAn2.js";import"./Hidden-DxXb6fAE.js";import"./useLabels-CfOSYcsl.js";import"./useButton-DKb25YL9.js";import"./Dialog-Bbzzq5Se.js";import"./RSPContexts-xlTisE2o.js";import"./OverlayArrow-B37EEZ8F.js";import"./useResizeObserver-CeHxDXST.js";import"./useControlledState-DwpgrxVp.js";import"./Collection-B6gFlhPH.js";import"./index-C9UOh0Ls.js";import"./Separator-BUMKOiG4.js";import"./SelectionManager-Ds7id3qV.js";import"./useEvent-BbrDk_On.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CAXpIAXj.js";import"./useDescription-DRp0FeRZ.js";import"./ListKeyboardDelegate-DgtNekkt.js";import"./PressResponder-D9mOH36W.js";import"./useLocalizedStringFormatter-BzuFEIom.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CtUyykXV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D_sjnnJP.js";import"./Button-Cil7mUi6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-tbWfEf8y.js";import"./createLucideIcon-CaCVZ628.js";import"./x-DaCt_Qe9.js";import"./Heading-LPSg21Yg.js";import"./info-BC2X28AA.js";import"./Popover-C0a_I_4H.js";import"./useFormValidation-Bz8g9pwD.js";import"./useField-BIsrXDBc.js";import"./Form-DPkgKMWI.js";import"./check-BXz_ifp2.js";import"./useToggleState-BL9ia5CW.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
