import{j as e}from"./iframe-DXZswXcd.js";import{C as m}from"./CheckboxGroup-BFI4gs7L.js";import{C as p}from"./Checkbox-CGGM-DG8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BvKOTYSn.js";import"./utils-Cf0-1u65.js";import"./clsx-B-dksMZM.js";import"./Text-nnXd3bBi.js";import"./useFocusRing-BG9tZgKA.js";import"./index-Crv0Q4vS.js";import"./index-C1YRI8qY.js";import"./clsx-Ciqy0D92.js";import"./Text-BGzfgZXL.js";import"./Label-DnNKyVfe.js";import"./Button-D1-arsKK.js";import"./Hidden-DHOmIzAb.js";import"./useLabels-DwvLFUwE.js";import"./useButton-C6Wl-MUd.js";import"./Dialog-BX9QTNQj.js";import"./RSPContexts-C5Z6RhjK.js";import"./OverlayArrow-BOFP6ttP.js";import"./useResizeObserver-DpIMhh4t.js";import"./useControlledState-CJ_efx1W.js";import"./Collection-BiqV7mQf.js";import"./index-CNK238hP.js";import"./Separator-D1aHTNAV.js";import"./SelectionManager-OME_ZJYN.js";import"./useEvent-BUY7bp5p.js";import"./scrollIntoView-CaLNI_wC.js";import"./SelectionIndicator-AcToMlzz.js";import"./useDescription-IwVOs4ub.js";import"./ListKeyboardDelegate-DwfO7Ojx.js";import"./PressResponder-BbLBRR3U.js";import"./useLocalizedStringFormatter-LFtnKqVA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D9uKd0qs.js";import"./VisuallyHidden-BQhZj104.js";import"./Button-AcRXejUz.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BQ5mUNua.js";import"./createLucideIcon-Jyt4-ntd.js";import"./x-B9aDcILT.js";import"./Heading-Dqbz5JVQ.js";import"./info-Cn_srCiM.js";import"./Popover-TW0uy02k.js";import"./useFormValidation-BEgmi4Gj.js";import"./useField-DOslAXN9.js";import"./Form-BjvnKEQe.js";import"./check-f5NT52XC.js";import"./useToggleState-Bcu6ejiQ.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
