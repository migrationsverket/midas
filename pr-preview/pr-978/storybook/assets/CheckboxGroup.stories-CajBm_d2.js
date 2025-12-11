import{j as e}from"./iframe-Cr8ZG8qc.js";import{C as m}from"./CheckboxGroup-BJ9f4IRM.js";import{C as p}from"./Checkbox-DU5_129z.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-0m6zvZi0.js";import"./utils-1qB61-Q9.js";import"./clsx-B-dksMZM.js";import"./Text-BATGuSGj.js";import"./useFocusRing-Pn26Wr7i.js";import"./index-CK-mVwAb.js";import"./index-Cx2Cv-0i.js";import"./clsx-Ciqy0D92.js";import"./Text-CKb2n81p.js";import"./Label-y2T0S9BB.js";import"./Button-DtiX6Cf7.js";import"./Hidden-D4ZqPy51.js";import"./useLabels-JD4Ch7YH.js";import"./useButton-g037VBgg.js";import"./Dialog-Bf0tgj6F.js";import"./RSPContexts-CJfEBTxH.js";import"./OverlayArrow-DBmEBNBc.js";import"./useResizeObserver-BhLMEd_M.js";import"./useControlledState-Bq5QlAOQ.js";import"./Collection-BKkFvI9u.js";import"./index-DKcY2Hsy.js";import"./Separator-ClcmQ9Iw.js";import"./SelectionManager-B6vAPeUZ.js";import"./useEvent-BmxhW0Eo.js";import"./scrollIntoView-Dx_UjdcJ.js";import"./SelectionIndicator-DK1B8K9f.js";import"./useDescription-BVnW2p89.js";import"./ListKeyboardDelegate-BbfckbyY.js";import"./PressResponder-81tUL4W7.js";import"./useLocalizedStringFormatter-ClP7AtYj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DCoSIGQk.js";import"./VisuallyHidden-BNibYwT3.js";import"./Button-BxRBYVZ9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DoVeJ82i.js";import"./createLucideIcon-9WJw1iTO.js";import"./x-CfgPtn44.js";import"./Heading-DOVZhLqw.js";import"./info-Dp83SbWD.js";import"./Popover-B6LGvGQn.js";import"./useFormValidation-B-jEyMki.js";import"./useField-C5gOy8n5.js";import"./Form-CFccYjWI.js";import"./check-gC7ia_R6.js";import"./useToggleState-5A8kNUpG.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
