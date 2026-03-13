import{j as e}from"./iframe-Bj3rykqq.js";import{C as m}from"./CheckboxGroup-DsPta_SF.js";import{C as p}from"./Checkbox-Dhwmk9Ee.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CGmgGZmu.js";import"./utils-BPR6QYXC.js";import"./clsx-B-dksMZM.js";import"./Text-D5Hv1XGK.js";import"./useFocusRing-C7uadSDO.js";import"./index-Cayhktc8.js";import"./index-CnCGQqbA.js";import"./clsx-Ciqy0D92.js";import"./Text-DPxIPb0k.js";import"./Label-bvwpiHl9.js";import"./Button-BY6aKs9R.js";import"./Hidden-H2J0AFM4.js";import"./useLabels-C9jhOE8d.js";import"./useButton-5QuuU98A.js";import"./Dialog-CDz5q8XN.js";import"./RSPContexts-Cy2kM2_o.js";import"./OverlayArrow-BPwbOk4G.js";import"./useResizeObserver-D9o13XW_.js";import"./useControlledState-RfhzWKsJ.js";import"./Collection-Cj9-B7W9.js";import"./index-BC12g_-D.js";import"./Separator-myLEeVCT.js";import"./SelectionManager-BkdSTgS9.js";import"./useEvent-Z7oo2rlc.js";import"./scrollIntoView-GIX096WN.js";import"./SelectionIndicator-DW_78Rrm.js";import"./useDescription-DOgLYOne.js";import"./ListKeyboardDelegate-CIZwYtIR.js";import"./PressResponder-CBnYRDYm.js";import"./useLocalizedStringFormatter-B6y89RBX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzEmLsjx.js";import"./getScrollParent-B0dYpp2l.js";import"./VisuallyHidden-DZrJwb84.js";import"./x-BjCQEpYP.js";import"./createLucideIcon-CZGOASFZ.js";import"./useLocalizedStringFormatter-B96CwRWL.js";import"./Heading-SaNHDBgy.js";import"./Button-DJUV-Oif.js";import"./Button.module-D_C6WeTN.js";import"./info-B6mPVH9Q.js";import"./Popover-BybWTMpG.js";import"./useFormValidation-CYMzGIyK.js";import"./useField-BMzGe7LS.js";import"./Form-Dizw0pBP.js";import"./check-EsYXMsMj.js";import"./useToggleState-CaoOixly.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
