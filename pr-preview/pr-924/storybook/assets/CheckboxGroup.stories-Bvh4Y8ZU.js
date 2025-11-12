import{j as e}from"./iframe-CHZFuQnS.js";import{C as m}from"./CheckboxGroup-Dh24nPPV.js";import{C as p}from"./Checkbox-On7YbR87.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B-mi-Hc9.js";import"./utils-BMim5o3v.js";import"./clsx-B-dksMZM.js";import"./Text-Dd_mwADg.js";import"./useFocusRing-CavgNYvf.js";import"./index-w7Yupy6f.js";import"./index-CDEgt3K9.js";import"./clsx-Ciqy0D92.js";import"./Text-BMVuAeY2.js";import"./Label--3F23kmu.js";import"./Button-UHVq7cxV.js";import"./Hidden-cAwEj1a8.js";import"./useLabels-BBjpyqdS.js";import"./useButton-BIaKLlnn.js";import"./Dialog-B5gbDtYv.js";import"./RSPContexts-FGdyfODE.js";import"./OverlayArrow-CgOroshj.js";import"./useResizeObserver-DZ_wG9cu.js";import"./useControlledState-BUxHgcPu.js";import"./Collection-DTPuPpk_.js";import"./index-BB5Im9sI.js";import"./Separator-VLiv8MHU.js";import"./SelectionManager-BAMefgL1.js";import"./useEvent-dHHY_xOM.js";import"./scrollIntoView-DfjOOoWp.js";import"./SelectionIndicator-C9VCpTxV.js";import"./useDescription-Ciz68wQ_.js";import"./ListKeyboardDelegate-8dPyHFyK.js";import"./PressResponder--WgWPsMc.js";import"./useLocalizedStringFormatter-ByyIuzas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CIQKldLY.js";import"./VisuallyHidden-CfdiIqbk.js";import"./useLocalizedStringFormatter-J_3FYVXR.js";import"./Button-CKnin4O7.js";import"./Button.module-CtQ1deO8.js";import"./x-CLn_wROP.js";import"./createLucideIcon-EluUf1Sj.js";import"./Heading-CV0vaF0r.js";import"./info-DWTE3GrY.js";import"./Popover-BDGpN84n.js";import"./useFormValidation-BX4gxdZw.js";import"./useField-D6WqRLMl.js";import"./Form-BvdN8uKU.js";import"./check-Tt2ZWzpd.js";import"./useToggleState-BnMm2XrC.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
