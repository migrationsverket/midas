import{j as e}from"./iframe-CwO_vEig.js";import{C as m}from"./CheckboxGroup-COeuuHzS.js";import{C as p}from"./Checkbox-4a_gRNh_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DpHlxz7t.js";import"./utils-Dcyt8KFL.js";import"./clsx-B-dksMZM.js";import"./Text-D3llpeIz.js";import"./useFocusRing-DzT9pjjg.js";import"./index-flraatrJ.js";import"./index-Dn24hxdf.js";import"./clsx-Ciqy0D92.js";import"./Text-DSQgPK-U.js";import"./Label-C_dWFkaO.js";import"./Button-Y-0P3U6L.js";import"./Hidden-BSz-TAr8.js";import"./useLabels-BOtoWz6H.js";import"./useButton-8AyGm2ZJ.js";import"./Dialog-D3Frax7u.js";import"./RSPContexts-B5f3SCDX.js";import"./OverlayArrow-DyMHez5P.js";import"./useResizeObserver-qh0N3Zwh.js";import"./useControlledState-BRDDwNe3.js";import"./Collection-zNyuWi72.js";import"./index-DdnDhsmA.js";import"./Separator-DVSYi0EM.js";import"./SelectionManager-JKBef09K.js";import"./useEvent-hlHKtKnL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BMLV58w6.js";import"./useDescription-BeM__QPz.js";import"./ListKeyboardDelegate-DyxxzBwP.js";import"./PressResponder-VzzBAOpQ.js";import"./useLocalizedStringFormatter-BgGLDAJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-QDKHO_hI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-iIY1n2oT.js";import"./Button-DQNtSNmC.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5Wm0lTx.js";import"./createLucideIcon-2kw6RoTp.js";import"./x-ALfYQzAP.js";import"./Heading-ClTgLYnQ.js";import"./info-BTOdQ4g2.js";import"./Popover-DaTEMQEK.js";import"./useFormValidation-DHqzGwKI.js";import"./useField-BHh1ZKOn.js";import"./Form-BAyWeyjg.js";import"./check-C5UtBj9X.js";import"./useToggleState-DEVOoYAh.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
