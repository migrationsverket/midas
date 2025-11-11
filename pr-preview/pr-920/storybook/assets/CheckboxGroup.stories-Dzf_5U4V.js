import{j as e}from"./iframe-C8ZRuzT6.js";import{C as m}from"./CheckboxGroup-DYmSlOk_.js";import{C as p}from"./Checkbox-Du2wNNAS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B5DpnWry.js";import"./utils-C84SkkdT.js";import"./clsx-B-dksMZM.js";import"./Text-BXfBqZ1f.js";import"./useFocusRing-CFhXuih-.js";import"./index-uCHJlnyo.js";import"./index-B6Y3uvN4.js";import"./clsx-Ciqy0D92.js";import"./Text-Dg-GiAXO.js";import"./Label-BezXOqZ1.js";import"./Button-DCD_n0HI.js";import"./Hidden-DgSXhjQ3.js";import"./useLabels-JokUTrF_.js";import"./useButton-cLFZH3Vu.js";import"./Dialog-ERSem-1O.js";import"./RSPContexts-V5ia4aqN.js";import"./OverlayArrow-CgPubBl4.js";import"./useResizeObserver-qceEyp_m.js";import"./useControlledState-CET-geoU.js";import"./Collection-CB8DaqQI.js";import"./index-DtUnRBZc.js";import"./Separator-OmW-OL1L.js";import"./SelectionManager-DdyA7425.js";import"./useEvent-B0eRtjXK.js";import"./scrollIntoView-C0RUUlHR.js";import"./SelectionIndicator-Z3xAFVmE.js";import"./useDescription-BNQ8ykdi.js";import"./ListKeyboardDelegate-Bo80azgE.js";import"./PressResponder-DzIV2NIL.js";import"./useLocalizedStringFormatter-a2xA8nMP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-fYAg6uM-.js";import"./VisuallyHidden-BvZrm0U-.js";import"./useLocalizedStringFormatter-BFisaavP.js";import"./Button-Cn5XNJYk.js";import"./Button.module-CtQ1deO8.js";import"./x-CW7tLaop.js";import"./createLucideIcon-BgwGjT-s.js";import"./Heading-C0_h2u0m.js";import"./info-Bj_zeA9w.js";import"./Popover-BlFJqfjD.js";import"./useFormValidation-B17lbehY.js";import"./useField-DsT-5LHV.js";import"./Form-C9lD8Kwy.js";import"./check-CmhOF1DB.js";import"./useToggleState-DI-k9d_r.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
