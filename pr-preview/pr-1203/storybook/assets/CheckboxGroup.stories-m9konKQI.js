import{j as e}from"./iframe-Bn-EzP7D.js";import{C as m}from"./CheckboxGroup-BDT2zMGu.js";import{C as p}from"./Checkbox-B7sslHCs.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bmf4SDk8.js";import"./utils-CQaUuJEL.js";import"./clsx-B-dksMZM.js";import"./Text-Bqg57V95.js";import"./useFocusRing-vAuqzLMr.js";import"./index-C-alUKfN.js";import"./index-B6pc0358.js";import"./clsx-Ciqy0D92.js";import"./Text-6vmkm8mz.js";import"./Label-OqiXjoc3.js";import"./Button-Cc7PB3J4.js";import"./Hidden-CqBpBgFh.js";import"./useLabel-Bl9zNTe3.js";import"./useLabels-DUs2w_Mz.js";import"./useButton-9sNlXb4L.js";import"./Dialog-BVEQQY1_.js";import"./RSPContexts-_DVvg2ct.js";import"./OverlayArrow-CfxIsBtK.js";import"./useResizeObserver-BNWu4Pn9.js";import"./useControlledState-DvYkz0eX.js";import"./Collection-DgfdmHhP.js";import"./index-DA8HmDwz.js";import"./Separator-BYWPKcv5.js";import"./SelectionManager-DBUORL24.js";import"./useEvent-BUUS48jd.js";import"./scrollIntoView-D5GyckjK.js";import"./SelectionIndicator-DAsR-d__.js";import"./useDescription-DriieE3T.js";import"./ListKeyboardDelegate-C0tygrq9.js";import"./PressResponder-DdnV4kKa.js";import"./useLocalizedStringFormatter-C_da5e_o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Z5vcQ66U.js";import"./getScrollParent-CgJ84-Vu.js";import"./VisuallyHidden-CKLV3oRP.js";import"./x-CdpnhCRh.js";import"./createLucideIcon-DeptTAqN.js";import"./useLocalizedStringFormatter-Cu0XKz1n.js";import"./Heading-BKnq4xgM.js";import"./Button-CQePxhIL.js";import"./Button.module-BB7N-cLd.js";import"./info-BLHteW7_.js";import"./Popover-Dh9q7XZa.js";import"./Form-D8rPFjhB.js";import"./useField-Ccah-lq_.js";import"./check-BE5M54n4.js";import"./useToggleState-BSSl4jbm.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
