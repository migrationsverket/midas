import{j as e}from"./iframe-BHGbmSoX.js";import{C as m}from"./CheckboxGroup-CpUv_H4W.js";import{C as p}from"./Checkbox-C5Vm59CL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BbuZpPii.js";import"./utils-u6nfEu2d.js";import"./clsx-B-dksMZM.js";import"./Text-DR-y75op.js";import"./useFocusRing-C-fWWvCQ.js";import"./index-DHRUWqon.js";import"./index-BlWlHcen.js";import"./clsx-Ciqy0D92.js";import"./Text-Co-Ig638.js";import"./Label-BCn-pGoc.js";import"./Button-DBP2ABnj.js";import"./Hidden-HuY8qCdY.js";import"./useLabels-jG-RMIhn.js";import"./useButton-DyLMe38J.js";import"./Dialog-CSAQrJFe.js";import"./RSPContexts-DxDwxdvK.js";import"./OverlayArrow-D70C4uGL.js";import"./useResizeObserver-DNsdgQR9.js";import"./useControlledState-BRSDM5kG.js";import"./Collection-WK4i6Gww.js";import"./index-DqvNs5ao.js";import"./Separator-D1MFmn8z.js";import"./SelectionManager-B4SuEaEN.js";import"./useEvent-Dz6duQ_C.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D5zgZXgJ.js";import"./useDescription-CztadFVS.js";import"./ListKeyboardDelegate-CeRSS6c8.js";import"./PressResponder-Dw1OdbxQ.js";import"./useLocalizedStringFormatter-CKK1hwYD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CyuRnS8g.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BSU9NXEn.js";import"./Button-Dt4Dz_uA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DYD_fmTs.js";import"./createLucideIcon-Pf4v_yLg.js";import"./x-CaOaLzID.js";import"./Heading-qIrSr_bu.js";import"./info-6j5tkDmW.js";import"./Popover-C4EEoVIv.js";import"./useFormValidation-Djr0e9BL.js";import"./useField-B4LIi9WL.js";import"./Form-C7P4m3f5.js";import"./check-D00-lapz.js";import"./useToggleState-BrWrhnuc.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
