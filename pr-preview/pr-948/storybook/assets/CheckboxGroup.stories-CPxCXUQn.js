import{j as e}from"./iframe-B_9EF7Dq.js";import{C as m}from"./CheckboxGroup-DrB99c7u.js";import{C as p}from"./Checkbox-BsWEvxSa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BJK3SH0A.js";import"./utils-Nc7aiA8g.js";import"./clsx-B-dksMZM.js";import"./Text-2PCYJ-aQ.js";import"./useFocusRing-DIePChSt.js";import"./index-BjkNl2Dq.js";import"./index-D8NvM82z.js";import"./clsx-Ciqy0D92.js";import"./Text-DKz7R1Y9.js";import"./Label-3ouPmmU0.js";import"./Button-D9HkwZ_O.js";import"./Hidden-xunvFULB.js";import"./useLabels-61rfT5yO.js";import"./useButton-GH9EGPk7.js";import"./Dialog-BLmPJOmf.js";import"./RSPContexts-Cr6NzFFP.js";import"./OverlayArrow-DmLjrALr.js";import"./useResizeObserver-DqX4n_M1.js";import"./useControlledState-DTUVTQNc.js";import"./Collection-XFQhUqFv.js";import"./index-QEbMiZIk.js";import"./Separator-CSOEmDmg.js";import"./SelectionManager-CHNFCfk4.js";import"./useEvent--ga3OshJ.js";import"./scrollIntoView-D3JBtAbF.js";import"./SelectionIndicator-D0yV6iR9.js";import"./useDescription-BXSheREr.js";import"./ListKeyboardDelegate-CIb2tA2q.js";import"./PressResponder-DddJyp0w.js";import"./useLocalizedStringFormatter-DogZXGw9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-0FPuTBqt.js";import"./VisuallyHidden-kz0xmvpU.js";import"./Button-v7hW0srN.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DICAckaY.js";import"./createLucideIcon-CTuVUGjm.js";import"./x-BJiEp__p.js";import"./Heading-cGcChm89.js";import"./info-2jLzoUfU.js";import"./Popover-DrLVhOkq.js";import"./useFormValidation-hqHE3Pmc.js";import"./useField-m_z2K0p_.js";import"./Form-BlK5Rz4M.js";import"./check-BRZ7p0ta.js";import"./useToggleState-0KF8Qio8.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
