import{j as e}from"./iframe-k-zAH7Ef.js";import{C as m}from"./CheckboxGroup-idSqqxea.js";import{C as p}from"./Checkbox-1SOi8gx7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CNbb8asv.js";import"./utils-BSpJY3Um.js";import"./clsx-B-dksMZM.js";import"./Text-BGMRpBYZ.js";import"./useFocusRing-DVpNpWCG.js";import"./index-B_jnwY6D.js";import"./index-BhzajAhd.js";import"./clsx-Ciqy0D92.js";import"./Text-BOoeMNrs.js";import"./Label-CloKO9cx.js";import"./Button-BdULP_1i.js";import"./Hidden-DHgR79MS.js";import"./useLabels-CYnXYQCZ.js";import"./useButton-HRso9Wou.js";import"./Dialog-B0hNAeSx.js";import"./RSPContexts-DGsEwDeK.js";import"./OverlayArrow-CvdGKYEz.js";import"./useResizeObserver-DoIK5Zf8.js";import"./useControlledState-CWQoOU6w.js";import"./Collection-D44rOmaq.js";import"./index-Cv8hS9vc.js";import"./Separator-IjEHfEYR.js";import"./SelectionManager-H8uXbQRA.js";import"./useEvent-BG9GMXpu.js";import"./scrollIntoView-MFUOiOkG.js";import"./SelectionIndicator-B7O4Zl4E.js";import"./useDescription-ScrL-_TA.js";import"./ListKeyboardDelegate-CMpffdDC.js";import"./PressResponder-C31hFz2h.js";import"./useLocalizedStringFormatter-CxFXRTv0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-a6tJLPyA.js";import"./VisuallyHidden-DbtIx9ZK.js";import"./useLocalizedStringFormatter-Dx6dpw-4.js";import"./Button-DmW_TZqr.js";import"./Button.module-CtQ1deO8.js";import"./x-DPoFmvs4.js";import"./createLucideIcon-b2tMwHkv.js";import"./Heading-BgVylgI-.js";import"./info-C40hproG.js";import"./Popover-D7zgKGQS.js";import"./useFormValidation-Dtr7JyRD.js";import"./useField-DvhmVMli.js";import"./Form-B-UX-Uqn.js";import"./check-DA1NoRgn.js";import"./useToggleState-Bob7dpGA.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
