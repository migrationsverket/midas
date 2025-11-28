import{j as e}from"./iframe-Bu_0PVym.js";import{C as m}from"./CheckboxGroup-VLssgHmW.js";import{C as p}from"./Checkbox-JmGukXH3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D_EEMj73.js";import"./utils-BIbh9FXc.js";import"./clsx-B-dksMZM.js";import"./Text-BYC8Q8vx.js";import"./useFocusRing-Dpo6Rp6r.js";import"./index-CFkxhmdC.js";import"./index-DpdlitPn.js";import"./clsx-Ciqy0D92.js";import"./Text-CcT2CHdP.js";import"./Label-DXx8a84e.js";import"./Button-axDS0fX7.js";import"./Hidden-qOIDITa6.js";import"./useLabels-D-wdi6sm.js";import"./useButton-DnFz0C4G.js";import"./Dialog-DCDJBOxd.js";import"./RSPContexts-Dlhq9Mwl.js";import"./OverlayArrow-BCdGaPI4.js";import"./useResizeObserver-CTdgS_BL.js";import"./useControlledState-DhxqLuUq.js";import"./Collection-DyYagCuz.js";import"./index-B4MMZpXP.js";import"./Separator-C0vHjDka.js";import"./SelectionManager-CDRyyz4I.js";import"./useEvent-CkXPWDzi.js";import"./scrollIntoView-CmL5QW7o.js";import"./SelectionIndicator-CeBKB-1C.js";import"./useDescription-CzNL1T7g.js";import"./ListKeyboardDelegate-nj8dmpTs.js";import"./PressResponder-32R9ejHz.js";import"./useLocalizedStringFormatter-Drm1wbnq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DQAysRqG.js";import"./VisuallyHidden-BhEPxKK7.js";import"./Button-xsqQqkQ4.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Bso3J__i.js";import"./createLucideIcon-DsJW-Utu.js";import"./x-BodD-7oO.js";import"./Heading-DbU8QRcB.js";import"./info-CccpeiCo.js";import"./Popover-D93ecue1.js";import"./useFormValidation-Do08Woe8.js";import"./useField-whxRNlwi.js";import"./Form-BWtruAcl.js";import"./check-DpQ-LZPG.js";import"./useToggleState-CIlntcPQ.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
