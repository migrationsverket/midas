import{j as e}from"./iframe-Cjrlzh3H.js";import{C as m}from"./CheckboxGroup-D4_DN_Q5.js";import{C as p}from"./Checkbox-B05cZuP4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CX25NBUn.js";import"./utils-CuTptj1-.js";import"./clsx-B-dksMZM.js";import"./Text-BIGnKIDS.js";import"./useFocusRing-1xU_Qusa.js";import"./index-DXVX_pBX.js";import"./index-DF80V0P0.js";import"./clsx-Ciqy0D92.js";import"./Text-CEpVYdQN.js";import"./Label-Cz0gx62A.js";import"./Button-DMFEHXPJ.js";import"./Hidden-C0Y7LQUz.js";import"./useLabels-VB_Q-W40.js";import"./useButton-BTUGUDje.js";import"./Dialog-BANuhqWG.js";import"./RSPContexts-CXMSQIsh.js";import"./OverlayArrow-D2__XqTe.js";import"./useResizeObserver-B6vWCd_A.js";import"./useControlledState-D7BOsOAW.js";import"./Collection-CWa3-bgD.js";import"./index-DbEpgTaz.js";import"./Separator-C9vrPJuE.js";import"./SelectionManager-FfE84nRk.js";import"./useEvent-JWBWCRar.js";import"./scrollIntoView-DB_apnjb.js";import"./SelectionIndicator-D9vKUr7i.js";import"./useDescription-Cz0FZt-N.js";import"./ListKeyboardDelegate-NeDGGBOM.js";import"./PressResponder-rqGyn6Wb.js";import"./useLocalizedStringFormatter-BG0SYhYk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BJm2tcrQ.js";import"./VisuallyHidden-Cg1wAZAe.js";import"./useLocalizedStringFormatter-jDeIXcGB.js";import"./Button-Cenw66Ks.js";import"./Button.module-CtQ1deO8.js";import"./x-B2cnKvIo.js";import"./createLucideIcon-BkgNquZM.js";import"./Heading-4T_V5vUB.js";import"./info-DO_dZgRF.js";import"./Popover-6ahpux5K.js";import"./useFormValidation-ECz5jMJZ.js";import"./useField-DCRzP6ar.js";import"./Form-CExE1hJ5.js";import"./check-DeZ3XMWR.js";import"./useToggleState-HOi5T3u-.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
