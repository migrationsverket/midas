import{j as e}from"./iframe-B2hXki5s.js";import{C as m}from"./CheckboxGroup-BDrn7L-4.js";import{C as p}from"./Checkbox-DitZaTBo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-tZ4Rxwzl.js";import"./utils-D-cZNYk5.js";import"./clsx-B-dksMZM.js";import"./Text-CkCJ-ZN3.js";import"./useFocusRing-HF0eSiIK.js";import"./index-DvCY6ndx.js";import"./index-nI6qS4bb.js";import"./clsx-Ciqy0D92.js";import"./Text-zXbuoED7.js";import"./Label-CoP76uki.js";import"./Button-CCrDbf-3.js";import"./Hidden-CxUrxLhM.js";import"./useLabels-DD9ZOY8B.js";import"./useButton-DA4tSPb8.js";import"./Dialog-WGfNDMap.js";import"./RSPContexts-F7HE9ubk.js";import"./OverlayArrow-Bh5NOhbd.js";import"./useResizeObserver-Bi9af0bD.js";import"./useControlledState-77pcsCop.js";import"./Collection-Dp_lyYLW.js";import"./index-orpHTWTf.js";import"./Separator-B07anHP2.js";import"./SelectionManager--esGLOr8.js";import"./useEvent-CvQwc1qa.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D4YsfIeE.js";import"./useDescription-Co8q0X78.js";import"./ListKeyboardDelegate-y75oqEKX.js";import"./PressResponder-BWSaERrU.js";import"./useLocalizedStringFormatter-CgQtT4cY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUH2hfEw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-91aD8JD1.js";import"./Button-lNOPEuzW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DCY5sa9P.js";import"./createLucideIcon-CoTtBMM7.js";import"./x-B_8C5-wm.js";import"./Heading-BZJ9VZkt.js";import"./info-BFMwj_GW.js";import"./Popover-D2xy3UEV.js";import"./useFormValidation-CtQu6qK-.js";import"./useField-Ckjgyi8D.js";import"./Form-BsF31Wh3.js";import"./check-C794euLp.js";import"./useToggleState-DwzxwT7g.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
