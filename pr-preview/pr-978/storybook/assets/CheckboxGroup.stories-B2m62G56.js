import{j as e}from"./iframe-aZts9sTH.js";import{C as m}from"./CheckboxGroup-BulgVoW9.js";import{C as p}from"./Checkbox-BNCTqtJO.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-FbBCy-EM.js";import"./utils-CluU2ngc.js";import"./clsx-B-dksMZM.js";import"./Text-D3KoC4fT.js";import"./useFocusRing-BRQxC-Pn.js";import"./index-BtqyUEvJ.js";import"./index-BZUDR8KZ.js";import"./clsx-Ciqy0D92.js";import"./Text-BFEuyFsz.js";import"./Label-TKS2-_dq.js";import"./Button-DRPL95DZ.js";import"./Hidden-BI6nf7sE.js";import"./useLabels-Bi0kdcz9.js";import"./useButton-B4wgjHhf.js";import"./Dialog-FK6yk6Vq.js";import"./RSPContexts-DdRuYZUO.js";import"./OverlayArrow-CEmYMLLq.js";import"./useResizeObserver-kOtRAKS9.js";import"./useControlledState-BWJsClp4.js";import"./Collection-CgsiLLmy.js";import"./index-kL85HzZP.js";import"./Separator-CQL19c0s.js";import"./SelectionManager-4oSlNkuw.js";import"./useEvent-BhW_lhji.js";import"./scrollIntoView-BTTXyCtL.js";import"./SelectionIndicator-fRccRsDB.js";import"./useDescription-C2-ZDTdq.js";import"./ListKeyboardDelegate-DzCjeQwL.js";import"./PressResponder-C6-4xRmN.js";import"./useLocalizedStringFormatter-DQv6nStV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bg93bK7j.js";import"./VisuallyHidden-CjGgagJb.js";import"./Button-Ba0mnMwa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Buplq2VU.js";import"./createLucideIcon-BCtVQ7cW.js";import"./x-Br7_Za6u.js";import"./Heading-C_7cPedE.js";import"./info-BjJvxUhX.js";import"./Popover-B7MPMU68.js";import"./useFormValidation-qXr_qDHo.js";import"./useField-Vu3lS0Hp.js";import"./Form-CYa5jQnp.js";import"./check-CE3kUWf5.js";import"./useToggleState-CB3lO_cZ.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
