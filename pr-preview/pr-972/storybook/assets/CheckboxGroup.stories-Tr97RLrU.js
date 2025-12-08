import{j as e}from"./iframe-CcqIJJ9I.js";import{C as m}from"./CheckboxGroup-DbTw8Zks.js";import{C as p}from"./Checkbox-BpOI6RPf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DCWhyVe8.js";import"./utils-CY4Fu9XG.js";import"./clsx-B-dksMZM.js";import"./Text-BeMrApc1.js";import"./useFocusRing-C6yLInR-.js";import"./index-BZYrye5E.js";import"./index-Dk_EVKVa.js";import"./clsx-Ciqy0D92.js";import"./Text-B2y69JCA.js";import"./Label-Bn_G3knm.js";import"./Button-g0SRrwOY.js";import"./Hidden-DoPVqW9a.js";import"./useLabels-BilCN1NI.js";import"./useButton-DY6rqluc.js";import"./Dialog-6IaWqWsz.js";import"./RSPContexts-DAOG_PEF.js";import"./OverlayArrow-7jeERZda.js";import"./useResizeObserver-CInyPDqE.js";import"./useControlledState-DFeihBKm.js";import"./Collection-DptOGsU8.js";import"./index-CdKsVf5O.js";import"./Separator-aU5CSZY5.js";import"./SelectionManager-CuK7wIFL.js";import"./useEvent-C1dfxzp6.js";import"./scrollIntoView-BY6i16iw.js";import"./SelectionIndicator-DxGLI-9G.js";import"./useDescription-Bm_U4g4C.js";import"./ListKeyboardDelegate-DUBgQ1Yz.js";import"./PressResponder-gIDAusRx.js";import"./useLocalizedStringFormatter-C2Q5ZqZK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B2_RuOXm.js";import"./VisuallyHidden-BbrVFRLR.js";import"./Button-Y2MdeHyb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dvdqua-f.js";import"./createLucideIcon-Ba6CVsaC.js";import"./x-CLF4Fkuz.js";import"./Heading-_hPmccnH.js";import"./info-wmRn54vg.js";import"./Popover-CTjC1vhw.js";import"./useFormValidation-DfdnZYhb.js";import"./useField-Dtd65B1y.js";import"./Form-vl_Yipqa.js";import"./check-CcGc5TGs.js";import"./useToggleState-h0opYNOu.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
