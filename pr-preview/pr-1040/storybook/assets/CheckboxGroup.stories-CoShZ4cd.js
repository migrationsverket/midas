import{j as e}from"./iframe-4ccXjq77.js";import{C as m}from"./CheckboxGroup-BwXRmXiX.js";import{C as p}from"./Checkbox-B7WNrEd0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C5onB_PA.js";import"./utils-DzCHUaRu.js";import"./clsx-B-dksMZM.js";import"./Text-CrNaDmnw.js";import"./useFocusRing-CDKSPNwB.js";import"./index-BwwLwywv.js";import"./index-sBShM5Ej.js";import"./clsx-Ciqy0D92.js";import"./Text-uQy3wyWh.js";import"./Label-CaJC1djb.js";import"./Button-BAGANk7J.js";import"./Hidden-DAE9e0zC.js";import"./useLabels-BHOH4TdR.js";import"./useButton-DZhhLg_c.js";import"./Dialog-DWvVX6bX.js";import"./RSPContexts-BT9OTJNE.js";import"./OverlayArrow-B_P_ltuq.js";import"./useResizeObserver-CfK3O3xT.js";import"./useControlledState-DeDHhxt6.js";import"./Collection-1S5RkBco.js";import"./index-Cb5HXPR1.js";import"./Separator-Dx6F7DMv.js";import"./SelectionManager-BJfw3kJb.js";import"./useEvent-CqBhJabH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CFzc82jB.js";import"./useDescription-BqLnkJqr.js";import"./ListKeyboardDelegate-ClfSms08.js";import"./PressResponder-_w6EUsLm.js";import"./useLocalizedStringFormatter-B9UWcyjq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7rxwsfS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D208qjgw.js";import"./Button-vy5h-HEb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BZCTuKsH.js";import"./createLucideIcon-DXb3Bj9J.js";import"./x-KN0xw9Pv.js";import"./Heading-D3rDIGej.js";import"./info-CJt2CkFw.js";import"./Popover-DYqU5Q_m.js";import"./useFormValidation-BWYLQkYp.js";import"./useField-CcBjpygh.js";import"./Form-C9Psf8dn.js";import"./check-Caq3Vcqg.js";import"./useToggleState-GKwqYl59.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
