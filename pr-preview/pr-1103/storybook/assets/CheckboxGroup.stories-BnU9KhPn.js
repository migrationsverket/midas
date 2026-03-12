import{j as e}from"./iframe-DZFoTsAP.js";import{C as m}from"./CheckboxGroup-CT3WUaRw.js";import{C as p}from"./Checkbox-MU9ii1Os.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CDqVsYjk.js";import"./utils-BgDH_W4s.js";import"./clsx-B-dksMZM.js";import"./Text-CDyd3dUQ.js";import"./useFocusRing-BOfY4fHs.js";import"./index-C0QzEn7-.js";import"./index-qTuN-RN1.js";import"./clsx-Ciqy0D92.js";import"./Text-BTLpICHy.js";import"./Label-BlTI54_L.js";import"./Button-DXuM91n-.js";import"./Hidden-CfeWKfQs.js";import"./useLabels-5V9A1z8O.js";import"./useButton-DlimN8Sl.js";import"./Dialog-K0HBlPWu.js";import"./RSPContexts-BEm_mhkG.js";import"./OverlayArrow-D_bcYX2Q.js";import"./useResizeObserver-DL4n-NVK.js";import"./useControlledState-DdgMtiiZ.js";import"./Collection-D92hNAQF.js";import"./index-JR0-rleW.js";import"./Separator-BtfYlAGj.js";import"./SelectionManager-BkDv12c8.js";import"./useEvent-BV0hRtep.js";import"./scrollIntoView-BWZteTWd.js";import"./SelectionIndicator-D0pzxM3X.js";import"./useDescription-DUddkFIG.js";import"./ListKeyboardDelegate-C20pHG0c.js";import"./PressResponder-DLlHUZ0n.js";import"./useLocalizedStringFormatter-DXt9zP7M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDKtzH8k.js";import"./getScrollParent-CVqyyLK3.js";import"./VisuallyHidden-CsEimcih.js";import"./x-CLiDVpMP.js";import"./createLucideIcon-D8OPAh1o.js";import"./useLocalizedStringFormatter-BFv7ZkAg.js";import"./Heading-DK6bxRLh.js";import"./Button-DrMZqG88.js";import"./Button.module-D_C6WeTN.js";import"./info-BS061rEP.js";import"./Popover-BmXNd6c7.js";import"./useFormValidation--RUuo-EK.js";import"./useField-Dc6XDZOx.js";import"./Form-CPx_ibCo.js";import"./check-BjK6xXCf.js";import"./useToggleState-DfUKPW7y.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
