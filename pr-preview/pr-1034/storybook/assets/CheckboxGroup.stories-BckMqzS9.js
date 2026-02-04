import{j as e}from"./iframe-CdQJjHUi.js";import{C as m}from"./CheckboxGroup-D0bA_jPb.js";import{C as p}from"./Checkbox-BB_w9lli.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CD4-cihP.js";import"./utils-DNRK4ZX5.js";import"./clsx-B-dksMZM.js";import"./Text-B0vmQyu5.js";import"./useFocusRing-CWhoHb0p.js";import"./index-DYV9Lioy.js";import"./index-C-32_yVP.js";import"./clsx-Ciqy0D92.js";import"./Text-Ch7iewHE.js";import"./Label-m3uD3yMU.js";import"./Button-BTABl2Ab.js";import"./Hidden-CC5jBV06.js";import"./useLabels-Dr4fNLVL.js";import"./useButton-BnY8ifF_.js";import"./Dialog-BrRUhIOH.js";import"./RSPContexts-AyfQfw_C.js";import"./OverlayArrow-BDeU8i3A.js";import"./useResizeObserver-xGHsMKmM.js";import"./useControlledState-C5Qq6LCr.js";import"./Collection-Cmou-_XN.js";import"./index-WM4OD6W8.js";import"./Separator-CGKunWAn.js";import"./SelectionManager-B-b6f446.js";import"./useEvent-B7b_rfbF.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CRnaVeBY.js";import"./useDescription-xXh2sHRV.js";import"./ListKeyboardDelegate-CpI5hNSW.js";import"./PressResponder-29gW07jg.js";import"./useLocalizedStringFormatter-5wGuy5gn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C31vhQl2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-TcZUaxvx.js";import"./Button-CglFoMow.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDtzg0FL.js";import"./createLucideIcon-DPIpdseQ.js";import"./x-Uh3xubMW.js";import"./Heading-C1LTQQVo.js";import"./info-BbudvsX4.js";import"./Popover-BmAgldfl.js";import"./useFormValidation-C90I0bWA.js";import"./useField-VCpATz6H.js";import"./Form-Bi6e02ke.js";import"./check--ZlW5qxK.js";import"./useToggleState-B17h3d_d.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
