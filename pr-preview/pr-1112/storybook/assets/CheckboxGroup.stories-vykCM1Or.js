import{j as e}from"./iframe-Bj8DUbD9.js";import{C as m}from"./CheckboxGroup-BOaddgi1.js";import{C as p}from"./Checkbox-CLUV-Gfu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D0YXHKSR.js";import"./utils-ZO4yOhXK.js";import"./clsx-B-dksMZM.js";import"./Text-sbFHWdQM.js";import"./useFocusRing-JSDzquTf.js";import"./index-z9FA-6qc.js";import"./index-BheBXkbs.js";import"./clsx-Ciqy0D92.js";import"./Text-BT7-HsIw.js";import"./Label-BkaAnjNx.js";import"./Button-BF7jf_Ur.js";import"./Hidden-D5KISXrR.js";import"./useLabels-MzyfVlFc.js";import"./useButton-DViiPWBR.js";import"./Dialog-D8awK9VJ.js";import"./RSPContexts-DDd4UCxF.js";import"./OverlayArrow-D0j7aBB6.js";import"./useResizeObserver-Bd6XHY1K.js";import"./useControlledState-o6yOdn5X.js";import"./Collection-BPF05rQA.js";import"./index-CtLrQJlI.js";import"./Separator-3daChmw5.js";import"./SelectionManager-Csm6B-vw.js";import"./useEvent-CXLssXy0.js";import"./scrollIntoView-Cyg4d7Wf.js";import"./SelectionIndicator-C0jNY1hm.js";import"./useDescription-BprtaOQi.js";import"./ListKeyboardDelegate-G0c0-2Di.js";import"./PressResponder-CW-OlPRb.js";import"./useLocalizedStringFormatter-BYlnSABI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bs64OQR9.js";import"./getScrollParent-DD_GG-02.js";import"./VisuallyHidden-CHpwvWxj.js";import"./x-Dg59dYX4.js";import"./createLucideIcon-D8pz04BM.js";import"./useLocalizedStringFormatter-DH047og8.js";import"./Heading-Dh5hcPFl.js";import"./Button-Cmlv3L41.js";import"./Button.module-BB7N-cLd.js";import"./info-Qp74svrK.js";import"./Popover-BweEmV_e.js";import"./useFormValidation-D4KwHiGL.js";import"./useField-ag9vEqi7.js";import"./Form-D0Ugz0bB.js";import"./check-Df42ndD8.js";import"./useToggleState-DHAMQgUE.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
