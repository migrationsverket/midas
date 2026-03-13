import{j as e}from"./iframe-MBbdolFR.js";import{C as m}from"./CheckboxGroup-CEPkifu8.js";import{C as p}from"./Checkbox-DdwoBCRi.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-WKF4owWT.js";import"./utils-Dg7ruvLQ.js";import"./clsx-B-dksMZM.js";import"./Text-BAnCasif.js";import"./useFocusRing-Cblmo_dI.js";import"./index-DPSmS7Ww.js";import"./index-Cat6omEG.js";import"./clsx-Ciqy0D92.js";import"./Text-CKOZXfI5.js";import"./Label-Q2xdwfa1.js";import"./Button-BeUFbs-K.js";import"./Hidden-BqEHZ0Ur.js";import"./useLabels-8moplH_Y.js";import"./useButton-Cdg81aej.js";import"./Dialog-BtHEWZQ3.js";import"./RSPContexts-DCBOH9RH.js";import"./OverlayArrow-DlVd4awp.js";import"./useResizeObserver-BS_0XZUV.js";import"./useControlledState-DA1YFynG.js";import"./Collection-Bi0gIBDQ.js";import"./index-CCHFRJrR.js";import"./Separator-BexriwZn.js";import"./SelectionManager-Cas3p51J.js";import"./useEvent-C6xw0YBs.js";import"./scrollIntoView-D3VE82Y3.js";import"./SelectionIndicator-NIeRPzO1.js";import"./useDescription-1itsOOAn.js";import"./ListKeyboardDelegate-DeoEHRa5.js";import"./PressResponder-B160teiR.js";import"./useLocalizedStringFormatter-BVS7UHEf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZ6U9CIE.js";import"./getScrollParent-BDKRolOu.js";import"./VisuallyHidden-DTLx9iH1.js";import"./x-DzqiEM-p.js";import"./createLucideIcon-DbXfeuCy.js";import"./useLocalizedStringFormatter-0WmapNTJ.js";import"./Heading-DNbI0Dcb.js";import"./Button-hlqL-z4t.js";import"./Button.module-D_C6WeTN.js";import"./info-DIp34tVu.js";import"./Popover-CX_HCApi.js";import"./useFormValidation-CsKOlYua.js";import"./useField-D_PnAzQa.js";import"./Form-BKAb1_yC.js";import"./check-kzHKIlXD.js";import"./useToggleState-D5S4jbsc.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
