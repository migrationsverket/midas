import{j as e}from"./iframe-h2rc799w.js";import{C as m}from"./CheckboxGroup-B0kRLwHn.js";import{C as p}from"./Checkbox-BiSnR8fT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CfA1E9Cr.js";import"./utils-BB9uagM0.js";import"./clsx-B-dksMZM.js";import"./Text-27Q9b70a.js";import"./useFocusRing-DRX1lRuz.js";import"./index-3OTH1Fm_.js";import"./index-G1IiyRC6.js";import"./clsx-Ciqy0D92.js";import"./Text-DsxDpOP5.js";import"./Label-C1wWsQ0d.js";import"./Button-aEgurUrk.js";import"./Hidden-BntBCqP1.js";import"./useLabels-Cl8l3w4c.js";import"./useButton-B6xkXiLt.js";import"./Dialog-CswqvEyv.js";import"./RSPContexts-BnV9B0rn.js";import"./OverlayArrow-CQsJ102Z.js";import"./useResizeObserver-DCz3NH35.js";import"./useControlledState-Ct_TMVrN.js";import"./Collection-DlcQIz-5.js";import"./index-CEjXMnWE.js";import"./Separator-B_RiQERZ.js";import"./SelectionManager-5hW9T5Ct.js";import"./useEvent-CdaZAnXg.js";import"./scrollIntoView-DTpX4Jlf.js";import"./SelectionIndicator-BZAhdg1J.js";import"./useDescription-EraDlspF.js";import"./ListKeyboardDelegate-DjvKI5jM.js";import"./PressResponder-CE9nmrbW.js";import"./useLocalizedStringFormatter-jfgdaXR-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CKkHc3h5.js";import"./VisuallyHidden-D7CzkyTI.js";import"./Button-Do-smi34.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ckdz1WVj.js";import"./createLucideIcon-9cYvQa7e.js";import"./x-D0r1H_Zm.js";import"./Heading-yRrz7Ihh.js";import"./info-D-Dgif4_.js";import"./Popover-kXAtl7Nh.js";import"./useFormValidation-BdPzBVxm.js";import"./useField-C9cVhCtn.js";import"./Form-qPwhvMcL.js";import"./check-CDUSPiS7.js";import"./useToggleState-XEXvD1q3.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
