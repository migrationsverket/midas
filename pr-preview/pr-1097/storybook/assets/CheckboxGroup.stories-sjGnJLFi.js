import{j as e}from"./iframe-BwuZ39Vz.js";import{C as m}from"./CheckboxGroup-ET-xlDzy.js";import{C as p}from"./Checkbox-CG9DOk7n.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-6yyVufrl.js";import"./utils-Dazgo93a.js";import"./clsx-B-dksMZM.js";import"./Text-zo_PZ5oe.js";import"./useFocusRing-DWqwuqDQ.js";import"./index-BYlaNIkZ.js";import"./index-Db__52FI.js";import"./clsx-Ciqy0D92.js";import"./Text-D0CV2pqO.js";import"./Label-CC-UjKbp.js";import"./Button-Cn77Lxgi.js";import"./Hidden-C8O8FPO6.js";import"./useLabels-D0VSRyAt.js";import"./useButton-C25K8Bao.js";import"./Dialog-BYx-mVK7.js";import"./RSPContexts-BQCBl8jV.js";import"./OverlayArrow-Ci_xIG7u.js";import"./useResizeObserver-joLoiGkT.js";import"./useControlledState-CNRISZnR.js";import"./Collection-BBh9BIJ-.js";import"./index-QD538Rki.js";import"./Separator-CwTLyBh0.js";import"./SelectionManager-D5lKj6m4.js";import"./useEvent-BNfr9VP-.js";import"./scrollIntoView-B2yrEsZZ.js";import"./SelectionIndicator-CkdMDAOI.js";import"./useDescription-DmBSG3eh.js";import"./ListKeyboardDelegate-B3XWqZCP.js";import"./PressResponder-CFre3py6.js";import"./useLocalizedStringFormatter-Dlk9HRO-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2RDviOH.js";import"./getScrollParent-BDOGEtvC.js";import"./VisuallyHidden-3B0Aqf7R.js";import"./Button-BINP1rbK.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Ni97qJq4.js";import"./createLucideIcon-B-TCaGAA.js";import"./x-CW77mceo.js";import"./Heading-DygGRZtp.js";import"./info-LM1DX_Sr.js";import"./Popover-SUVue6vh.js";import"./useFormValidation-uPUxiMCI.js";import"./useField-Dq1pou23.js";import"./Form-Bozi1n90.js";import"./check-Bnfp9U30.js";import"./useToggleState-CkyvC_ow.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
