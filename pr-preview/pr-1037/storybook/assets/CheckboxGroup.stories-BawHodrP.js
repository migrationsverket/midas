import{j as e}from"./iframe-B_SSSC13.js";import{C as m}from"./CheckboxGroup-CKSwzIgA.js";import{C as p}from"./Checkbox-Dg7OiCJn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D1TT9t70.js";import"./utils-DvDYbPsX.js";import"./clsx-B-dksMZM.js";import"./Text-WBWevH5_.js";import"./useFocusRing-DD9UXZoZ.js";import"./index-h5wgbRS0.js";import"./index-CUO7TZGi.js";import"./clsx-Ciqy0D92.js";import"./Text-zzyNhY3P.js";import"./Label-C6DEhGpe.js";import"./Button-BRuyYegt.js";import"./Hidden-1_dFGxWz.js";import"./useLabels-MYW5pJHL.js";import"./useButton-D3rl8s_R.js";import"./Dialog-BNNNvoc9.js";import"./RSPContexts-Bo6wL8nR.js";import"./OverlayArrow-CAsLYpF3.js";import"./useResizeObserver-7p9RzYhX.js";import"./useControlledState-7bOzaDvk.js";import"./Collection-Bc4Mkmlx.js";import"./index-DdHBG9m2.js";import"./Separator-Crb950pg.js";import"./SelectionManager-DsvtZaIh.js";import"./useEvent-CNY1qaAe.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C1ClyJxV.js";import"./useDescription-CXeCeKMo.js";import"./ListKeyboardDelegate-GR3jqGFe.js";import"./PressResponder-B0_TIU_P.js";import"./useLocalizedStringFormatter-8PuQ8rfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6L3jXhq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DBwHi6uI.js";import"./Button-DwlyzCZV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-2Krnf2lE.js";import"./createLucideIcon-BX44XqHc.js";import"./x-CjWkaJ06.js";import"./Heading-CNoL31sb.js";import"./info-BhBHDNKZ.js";import"./Popover-frimzjzU.js";import"./useFormValidation-DeX5ISQ4.js";import"./useField-D5ATrzWx.js";import"./Form-zRNHTqke.js";import"./check-CfoAM94Y.js";import"./useToggleState-BefAz5vn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
