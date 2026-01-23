import{j as e}from"./iframe-CAxX8b8z.js";import{C as m}from"./CheckboxGroup-C3gkGLkF.js";import{C as p}from"./Checkbox-DcvZFmA4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D4Sp8V1Y.js";import"./utils-DCHF2L9h.js";import"./clsx-B-dksMZM.js";import"./Text-BLQTNCsN.js";import"./useFocusRing-CJGxaojv.js";import"./index-BFL8txhV.js";import"./index-BsUamICG.js";import"./clsx-Ciqy0D92.js";import"./Text-D4pRrquR.js";import"./Label-D0-ZtA9y.js";import"./Button-4YWHHaEC.js";import"./Hidden-BhCMtZNx.js";import"./useLabels-DOCuV8eN.js";import"./useButton-pswNsnH0.js";import"./Dialog-v-8j5ffk.js";import"./RSPContexts-DSQBOyK1.js";import"./OverlayArrow-ChU4HsBS.js";import"./useResizeObserver-Bv8Dp1M7.js";import"./useControlledState-CrLblIfK.js";import"./Collection-CHE2qNUL.js";import"./index-hoFEFN5M.js";import"./Separator-iD-1dxU-.js";import"./SelectionManager-BNvdJXY_.js";import"./useEvent-Be56k_0k.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cned-ECi.js";import"./useDescription-DlwMEBen.js";import"./ListKeyboardDelegate-DzMoo9Rf.js";import"./PressResponder-NTZTd40v.js";import"./useLocalizedStringFormatter-CTDPvKwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjThJUmE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BxgXzkUT.js";import"./Button-hIWv77LG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ck8_EjzN.js";import"./createLucideIcon-Btl_k1Dg.js";import"./x-DFKddAaY.js";import"./Heading-BB8-Gqoe.js";import"./info-CIX-ujr0.js";import"./Popover-DmLQWAeN.js";import"./useFormValidation-ORBzuIse.js";import"./useField-BJlVD6tn.js";import"./Form-DdIW8y_X.js";import"./check-97dXLU_3.js";import"./useToggleState-Cnp3jxxW.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
