import{j as e}from"./iframe-DnZu7tjU.js";import{C as m}from"./CheckboxGroup-C8bmCuif.js";import{C as p}from"./Checkbox-CR7a47Qk.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DdNBbPKU.js";import"./utils-DvsDfxiZ.js";import"./clsx-B-dksMZM.js";import"./Text-DDckt_LF.js";import"./useFocusRing-BVLxtrwi.js";import"./index-pukpAhsd.js";import"./index-DuANshEl.js";import"./clsx-Ciqy0D92.js";import"./Text-ByAr067h.js";import"./Label-Beeav5Zm.js";import"./Button-hkOip--R.js";import"./Hidden-MVD45dNy.js";import"./useLabels-DTmMdRQq.js";import"./useButton-DmjUv8W1.js";import"./Dialog-Cgkr0_k2.js";import"./RSPContexts-DMIbGUsk.js";import"./OverlayArrow-DUX43FcK.js";import"./useResizeObserver-BeBIxiuQ.js";import"./useControlledState-6_8Dx77R.js";import"./Collection-Y1vigHBC.js";import"./index-BrOyUCPM.js";import"./Separator-YevnxX-J.js";import"./SelectionManager-n_YqC5G5.js";import"./useEvent-DaspnZHR.js";import"./scrollIntoView-CZyBJ9rq.js";import"./SelectionIndicator-C8qunJga.js";import"./useDescription-Carqnp7k.js";import"./ListKeyboardDelegate-BuYM8v3i.js";import"./PressResponder-IeH9tSv-.js";import"./useLocalizedStringFormatter-C_uLFRgN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-R00I75Jc.js";import"./VisuallyHidden-C4Nx-Lep.js";import"./Button-062FUKpn.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BX9jEi07.js";import"./createLucideIcon-3-UHYTi-.js";import"./x-BRIO2b_Q.js";import"./Heading-DPziEPRb.js";import"./info-wE6WxY0_.js";import"./Popover-CnBQas7M.js";import"./useFormValidation-DBeaMwp3.js";import"./useField-HB13P4sO.js";import"./Form-CxnVWZai.js";import"./check-B7oKe3jo.js";import"./useToggleState-BISzU-Vw.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
