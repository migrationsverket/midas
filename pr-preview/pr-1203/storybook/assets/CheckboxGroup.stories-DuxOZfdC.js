import{j as e}from"./iframe-AjHIFKYL.js";import{C as m}from"./CheckboxGroup-CTMM6dr2.js";import{C as p}from"./Checkbox-CBfxYLj6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-7pShLjHw.js";import"./utils-BQ53D7f7.js";import"./clsx-B-dksMZM.js";import"./Text-CCR6G686.js";import"./useFocusRing-CvHv-Osy.js";import"./index-Cfk7mVij.js";import"./index-BxE46KD8.js";import"./clsx-Ciqy0D92.js";import"./Text-pxITg1r8.js";import"./Label-CE7cd0fN.js";import"./Button-C1DU2kQ0.js";import"./Hidden-Ciub7nFQ.js";import"./useLabel-BXU14ybb.js";import"./useLabels-D5qCWeBL.js";import"./useButton-C5zGgHMm.js";import"./Dialog-C6auVIhw.js";import"./RSPContexts-CcA2FC2H.js";import"./OverlayArrow-BBErFv0z.js";import"./useResizeObserver-CtHhqdT_.js";import"./useControlledState-DTh410_S.js";import"./Collection-POb6Sqt7.js";import"./index-2OLboCXY.js";import"./Separator-B8blZCo-.js";import"./SelectionManager-Bf5HZs2x.js";import"./useEvent-CBOR4nAM.js";import"./scrollIntoView-DoE9Z2_0.js";import"./SelectionIndicator-Bi2cmx6m.js";import"./useDescription-CjzV_vAG.js";import"./ListKeyboardDelegate-BS7k2kA_.js";import"./PressResponder-CC8WqMSK.js";import"./useLocalizedStringFormatter-BzByLjfh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCihiTe5.js";import"./getScrollParent-DezySAXs.js";import"./VisuallyHidden-iv4jmUvN.js";import"./x-DuRIyyoz.js";import"./createLucideIcon-D_tC-MWH.js";import"./useLocalizedStringFormatter-Can2UqR3.js";import"./Heading-2dDi2FmH.js";import"./Button-BEq-_IjI.js";import"./Button.module-BB7N-cLd.js";import"./info-CJ7GMEom.js";import"./Popover-CSWwnxQK.js";import"./Form-Bb5IqlHO.js";import"./useField-agvh2JV_.js";import"./check-mCX9aWKL.js";import"./useToggleState-DgZBM1pe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
