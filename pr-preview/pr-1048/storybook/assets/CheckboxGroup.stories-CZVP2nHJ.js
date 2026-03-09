import{j as e}from"./iframe-ESF-r1hI.js";import{C as m}from"./CheckboxGroup-CiKusRmK.js";import{C as p}from"./Checkbox-BcrlF5SI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BCCALKVT.js";import"./utils-B0s5fgWj.js";import"./clsx-B-dksMZM.js";import"./Text-NxgWluAD.js";import"./useFocusRing-DWp5OAg6.js";import"./index-2wIi_N-m.js";import"./index-BL-qZJpS.js";import"./clsx-Ciqy0D92.js";import"./Text-BkzjukVf.js";import"./Label-DkQ50q0p.js";import"./Button-Cij6yxlb.js";import"./Hidden-8yjMqO1d.js";import"./useLabels-Bp-m2sF3.js";import"./useButton-Ct9_-x7Y.js";import"./Dialog-CqXXbQYh.js";import"./RSPContexts-DFpIO6wb.js";import"./OverlayArrow-DCABCl1_.js";import"./useResizeObserver-DL03td3f.js";import"./useControlledState-D0upRdKE.js";import"./Collection-DODwhPWl.js";import"./index-DJA38pYL.js";import"./Separator-BERCIyBX.js";import"./SelectionManager-DZ0w-lAX.js";import"./useEvent-FPTcD_7V.js";import"./scrollIntoView-CgwOiqxC.js";import"./SelectionIndicator-C-v19xF_.js";import"./useDescription-CmcHNEVN.js";import"./ListKeyboardDelegate-D_hL1lvP.js";import"./PressResponder-BbC8qYzR.js";import"./useLocalizedStringFormatter-DH7rPe2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CeIBVcHb.js";import"./getScrollParent-C9qHydg-.js";import"./VisuallyHidden-BGIl5X-2.js";import"./Button-DBeVImox.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-ymkSIqCa.js";import"./createLucideIcon-BJanraGz.js";import"./x-eQRUNgLt.js";import"./Heading-yeKYAPfd.js";import"./info-1IpNIitJ.js";import"./Popover-CZstqi2d.js";import"./useFormValidation-q6fwbQvy.js";import"./useField-D7_xKp9T.js";import"./Form-CgSXcs5h.js";import"./check-CPtGnB92.js";import"./useToggleState-Cw60xSpD.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
