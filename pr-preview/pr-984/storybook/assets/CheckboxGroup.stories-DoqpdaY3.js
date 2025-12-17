import{j as e}from"./iframe-CQ_fy_EY.js";import{C as m}from"./CheckboxGroup-DFLWGlsl.js";import{C as p}from"./Checkbox-CrFne-TJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DMdpyDE1.js";import"./utils-C7l7LqzK.js";import"./clsx-B-dksMZM.js";import"./Text-CW8LcNQ6.js";import"./useFocusRing-CBjwNCjA.js";import"./index-BJJvraYt.js";import"./index-DXn3pDe8.js";import"./clsx-Ciqy0D92.js";import"./Text-hjykNwCE.js";import"./Label-DgUZ9rTR.js";import"./Button-B89jYYjE.js";import"./Hidden-CzYLxqKr.js";import"./useLabels-DWjvmaBB.js";import"./useButton-BeUorQOe.js";import"./Dialog-CfxKv9MS.js";import"./RSPContexts-DAW1b0Sd.js";import"./OverlayArrow-9MzEcXEe.js";import"./useResizeObserver-BDNmCi4G.js";import"./useControlledState-CnAeDNgw.js";import"./Collection-BWjNYup_.js";import"./index-DXR6CGk_.js";import"./Separator-Cr1bOOHp.js";import"./SelectionManager-DQ4P_f_Z.js";import"./useEvent-gT9bYXp3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DE6Qn6Zk.js";import"./useDescription-Be4J1cHA.js";import"./ListKeyboardDelegate-BW52_6s5.js";import"./PressResponder-D2dq6e46.js";import"./useLocalizedStringFormatter-C29QY5VX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df-Y-aE1.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DxPMhaND.js";import"./Button-DtIQcLuH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BTlSi4nT.js";import"./createLucideIcon-mqgaB7OL.js";import"./x-2XBO8L6F.js";import"./Heading-jrsyU3L3.js";import"./info-qcmNe9XL.js";import"./Popover-wXoN8svd.js";import"./useFormValidation-BjmZbY_Y.js";import"./useField-D5CRbrEp.js";import"./Form-CtV0_kwz.js";import"./check-DJvkl7BT.js";import"./useToggleState-BJ7DbZKs.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
