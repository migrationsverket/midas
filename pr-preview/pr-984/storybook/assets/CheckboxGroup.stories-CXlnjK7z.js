import{j as e}from"./iframe-D0_uqlPy.js";import{C as m}from"./CheckboxGroup-CyV3eOo8.js";import{C as p}from"./Checkbox-eubmKNFB.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DP3Y5PAe.js";import"./utils-DZkN7PAb.js";import"./clsx-B-dksMZM.js";import"./Text-DFiA7Wnk.js";import"./useFocusRing-Dfa_i0W6.js";import"./index-pB_UCRcv.js";import"./index-Ci7Mui0x.js";import"./clsx-Ciqy0D92.js";import"./Text-B1302s0A.js";import"./Label-D0Z4F8Ks.js";import"./Button-eXHb7oON.js";import"./Hidden-BjgfQNZ3.js";import"./useLabels-BQfi_YAD.js";import"./useButton-BfeAEr6h.js";import"./Dialog-DiBznbGW.js";import"./RSPContexts-BUqAcl8X.js";import"./OverlayArrow-B4wC0R2q.js";import"./useResizeObserver-RQWmM80L.js";import"./useControlledState-BFe0ETRm.js";import"./Collection-C_BTvHxS.js";import"./index-Coz5NjYT.js";import"./Separator-DLsyFjfX.js";import"./SelectionManager-ByuLsODz.js";import"./useEvent-Dv95vs0d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cm3iGR2n.js";import"./useDescription-DI1OzZGu.js";import"./ListKeyboardDelegate-BLIzedj1.js";import"./PressResponder-BQDDDopb.js";import"./useLocalizedStringFormatter-D3uc4cjF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CRLd56QW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D7lPxREE.js";import"./Button-DymjvzeZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgmTFAS9.js";import"./createLucideIcon-Ciz_2pai.js";import"./x-COQunIjs.js";import"./Heading-CoR4_Cl-.js";import"./info-Bj3iqnwS.js";import"./Popover-zIVlmckn.js";import"./useFormValidation-CyADXFmk.js";import"./useField-B5VgGyIk.js";import"./Form-CNx8SPR0.js";import"./check-_rKQLWQs.js";import"./useToggleState-BBnkHQkJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
