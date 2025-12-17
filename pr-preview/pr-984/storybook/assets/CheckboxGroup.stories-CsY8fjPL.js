import{j as e}from"./iframe-Dm1httYB.js";import{C as m}from"./CheckboxGroup-ROC7GXok.js";import{C as p}from"./Checkbox-CRk7sUCw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DPFfxwf1.js";import"./utils-DAcLM52Y.js";import"./clsx-B-dksMZM.js";import"./Text-C4WcM4sb.js";import"./useFocusRing-C0iZIFPr.js";import"./index-Cq_lPOA_.js";import"./index-2aXvH78J.js";import"./clsx-Ciqy0D92.js";import"./Text-BeOvwamM.js";import"./Label-B06rjkw6.js";import"./Button-D4Ys_IRP.js";import"./Hidden-BUN5HDam.js";import"./useLabels-Dn030z5M.js";import"./useButton-DaUM1Uk2.js";import"./Dialog-D-SGJ0S8.js";import"./RSPContexts-0sXFgJk0.js";import"./OverlayArrow-DGKuXn9b.js";import"./useResizeObserver-Ctdqq1yK.js";import"./useControlledState-XoQnkC5P.js";import"./Collection-JaQ0dDLU.js";import"./index-CL1GZ2-L.js";import"./Separator-CcrxgTQA.js";import"./SelectionManager-scOJ3zht.js";import"./useEvent-Bta9D14b.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Chwu4rrB.js";import"./useDescription-BmoRSyqj.js";import"./ListKeyboardDelegate-BSoZkleV.js";import"./PressResponder-DWlr7lOf.js";import"./useLocalizedStringFormatter-B-lsgELR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-HvSNPS4K.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CHSyJVG_.js";import"./Button-DcFMStX5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BA3OZleP.js";import"./createLucideIcon-Cua-ZzbR.js";import"./x-DwDd4qDw.js";import"./Heading-CX0JwD51.js";import"./info-D-td9-jM.js";import"./Popover-DzSKeTx8.js";import"./useFormValidation-Ykv_NSJS.js";import"./useField-DBfobrXT.js";import"./Form-B5p6DEVu.js";import"./check-BreGxah3.js";import"./useToggleState-BuZbTKiC.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
