import{j as e}from"./iframe-DLM7OJJC.js";import{C as m}from"./CheckboxGroup-Ff-xas8z.js";import{C as p}from"./Checkbox-CDIe08bK.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CwZhaUl8.js";import"./utils-Cg8VeQnF.js";import"./clsx-B-dksMZM.js";import"./Text-Dr_1HWjJ.js";import"./useFocusRing-BfFb_8Xs.js";import"./index-C6cGHGyr.js";import"./index-VUDeKwzR.js";import"./clsx-Ciqy0D92.js";import"./Text-DWcHOJVH.js";import"./Label-CPsclgEs.js";import"./Button-CBWZM7hn.js";import"./Hidden-sRnIF3aJ.js";import"./useLabels-vojnNhU5.js";import"./useButton-CFLlN0xE.js";import"./Dialog-BlN1z6y9.js";import"./RSPContexts-BjmElr_9.js";import"./OverlayArrow-D70KZkbQ.js";import"./useResizeObserver-DpEoFmLb.js";import"./useControlledState-B4ZGdE6T.js";import"./Collection-BwFjuWWy.js";import"./index-Dluxzn8c.js";import"./Separator-D2iQC7Vu.js";import"./SelectionManager-B96WbDoz.js";import"./useEvent-CsCU74as.js";import"./scrollIntoView-DcUPLUcg.js";import"./SelectionIndicator-C5yvm9jm.js";import"./useDescription-BJBYRQLH.js";import"./ListKeyboardDelegate-xtVCS6J0.js";import"./PressResponder-C-bnnjQE.js";import"./useLocalizedStringFormatter-De_gwEZD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DonKrAv1.js";import"./VisuallyHidden-CvL4kn3L.js";import"./Button-D3MIvMYJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZBSwjU5.js";import"./createLucideIcon-5PLI4glS.js";import"./x-BrX8Cp6W.js";import"./Heading-CDL9YwFd.js";import"./info-RHSRw1L2.js";import"./Popover-CHu-QnWJ.js";import"./useFormValidation-A4eZ-XSk.js";import"./useField-BqYJVQFT.js";import"./Form-CYp4zRoP.js";import"./check-DLCSAxgi.js";import"./useToggleState-DHclQ8z3.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
