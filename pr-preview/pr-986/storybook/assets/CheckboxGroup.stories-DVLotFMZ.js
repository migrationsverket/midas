import{j as e}from"./iframe-BkwZBgQB.js";import{C as m}from"./CheckboxGroup-eG2SCOYq.js";import{C as p}from"./Checkbox-DEc-QMgl.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CywfLTZm.js";import"./utils-DRDg4FYD.js";import"./clsx-B-dksMZM.js";import"./Text-CqraFZpH.js";import"./useFocusRing-yaIiikqm.js";import"./index-Dc04iqLv.js";import"./index-tLxIEPdH.js";import"./clsx-Ciqy0D92.js";import"./Text-BS5-w4Gk.js";import"./Label-B0ex03hS.js";import"./Button-DpNES8Mp.js";import"./Hidden-CjaNJwk3.js";import"./useLabels-CoCvP3vg.js";import"./useButton-f6mPFvlj.js";import"./Dialog-CwWk4o7K.js";import"./RSPContexts-DfwIAS8E.js";import"./OverlayArrow-D_E5Q14Q.js";import"./useResizeObserver-2zGeZJAK.js";import"./useControlledState-BBX4_4Sa.js";import"./Collection-70mOt9uf.js";import"./index-Did7KFZZ.js";import"./Separator-C0Djmryq.js";import"./SelectionManager-Dhwe5l0W.js";import"./useEvent-CsBEnloE.js";import"./scrollIntoView-DoC-WaXh.js";import"./SelectionIndicator-D0a4Qyly.js";import"./useDescription-DJivPjTX.js";import"./ListKeyboardDelegate-BIUOdfPa.js";import"./PressResponder-DO6GQeqd.js";import"./useLocalizedStringFormatter-DU0hnyiw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DRpoKEwA.js";import"./VisuallyHidden-CfZQE67O.js";import"./Button-BXuxybWM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BDvEu7Qr.js";import"./createLucideIcon-D32Zx4L2.js";import"./x-DQzFCr8_.js";import"./Heading-DTe6A-8I.js";import"./info-D0qnYVyr.js";import"./Popover-WXNltfzT.js";import"./useFormValidation-CLD-WUtI.js";import"./useField-DZPzH0zS.js";import"./Form-DgLgCzqI.js";import"./check-68rrh9X5.js";import"./useToggleState-MtTfM0en.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
