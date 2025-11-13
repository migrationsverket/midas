import{j as e}from"./iframe-CyMjtGPK.js";import{C as m}from"./CheckboxGroup-Bce4lnsq.js";import{C as p}from"./Checkbox-c82oIZew.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bva2mD5K.js";import"./utils-DVuKvfbU.js";import"./clsx-B-dksMZM.js";import"./Text-DzIkDf4e.js";import"./useFocusRing-ChpYD699.js";import"./index-D_9YXFXE.js";import"./index-CEYNSK8w.js";import"./clsx-Ciqy0D92.js";import"./Text-Ugwvt_bi.js";import"./Label-CXE6cfAH.js";import"./Button-BXSdsNHC.js";import"./Hidden-IMfBhQ0L.js";import"./useLabels-DNtrS2Qm.js";import"./useButton-KGQDEH2-.js";import"./Dialog-BBciz3IO.js";import"./RSPContexts-B7a1EqUx.js";import"./OverlayArrow-CZT2_jrR.js";import"./useResizeObserver--QwmZnvn.js";import"./useControlledState-CTMqSIS3.js";import"./Collection-DFlPbA8P.js";import"./index-DZDfQsSu.js";import"./Separator-C3w7GKaJ.js";import"./SelectionManager-C6_z_HwH.js";import"./useEvent-DGFI6kX3.js";import"./scrollIntoView-DiSP5vc7.js";import"./SelectionIndicator-OP8igp-4.js";import"./useDescription-y7zAw2pV.js";import"./ListKeyboardDelegate-C5QdJqc9.js";import"./PressResponder-DFq-te7B.js";import"./useLocalizedStringFormatter-CLPnsWem.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Da9WjJ5R.js";import"./VisuallyHidden-BjRgoPVR.js";import"./useLocalizedStringFormatter-C4pjlO5j.js";import"./Button-B8uAn95p.js";import"./Button.module-CtQ1deO8.js";import"./x-E3pVvVHL.js";import"./createLucideIcon-D70ZsCEu.js";import"./Heading-Bo_fpOH0.js";import"./info-DtrsAcnO.js";import"./Popover-DcoGuDuo.js";import"./useFormValidation-DoI_l0NE.js";import"./useField-Bz927p2u.js";import"./Form-Bxd20bgC.js";import"./check-fLvfdGtX.js";import"./useToggleState-C8FbBy4i.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
