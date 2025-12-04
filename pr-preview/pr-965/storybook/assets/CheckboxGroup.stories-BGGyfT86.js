import{j as e}from"./iframe-DR3QLKnQ.js";import{C as m}from"./CheckboxGroup-C9cWnujL.js";import{C as p}from"./Checkbox-BcencqBl.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BU84FHsn.js";import"./utils-sts9k_ln.js";import"./clsx-B-dksMZM.js";import"./Text-qezIaGP8.js";import"./useFocusRing-D6abqPY3.js";import"./index-CC-McC1K.js";import"./index-BqyGOOW5.js";import"./clsx-Ciqy0D92.js";import"./Text-BHdhtKkP.js";import"./Label-C_YS3uK5.js";import"./Button-BtuQvaqs.js";import"./Hidden-BHCXc2iL.js";import"./useLabels-D53eucx8.js";import"./useButton-W28Zleer.js";import"./Dialog-81aAOfxg.js";import"./RSPContexts-D4lRqnql.js";import"./OverlayArrow-DbWF6hqK.js";import"./useResizeObserver-Csvcg689.js";import"./useControlledState-Bn_L3lPd.js";import"./Collection-DQEhpcLP.js";import"./index-ByqEr-oW.js";import"./Separator-05W059dV.js";import"./SelectionManager-wThLC8aC.js";import"./useEvent-Czk1Jm6Z.js";import"./scrollIntoView-DxAon2VW.js";import"./SelectionIndicator-0SpkfJAT.js";import"./useDescription-DlLT_YB0.js";import"./ListKeyboardDelegate-B0ElOSsJ.js";import"./PressResponder-CNyVq9f0.js";import"./useLocalizedStringFormatter-DkcHtNGS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C-oqUxNt.js";import"./VisuallyHidden-DAu2tE45.js";import"./Button-EZlh3IZI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CpsUAzKI.js";import"./createLucideIcon-CCTXZPbI.js";import"./x-DCThHRPI.js";import"./Heading-K3H-Nqnt.js";import"./info-DfAQTFqd.js";import"./Popover-BRascK70.js";import"./useFormValidation-B3Umt8OY.js";import"./useField-an-6XtBS.js";import"./Form-Bwg5b0AV.js";import"./check-CqIBhzCo.js";import"./useToggleState--8o5KBsu.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
