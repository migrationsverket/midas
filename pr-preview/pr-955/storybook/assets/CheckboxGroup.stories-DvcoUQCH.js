import{j as e}from"./iframe-DKD8Hhkt.js";import{C as m}from"./CheckboxGroup-7g0p3zrk.js";import{C as p}from"./Checkbox-OpsPN--v.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-bIrBWj8O.js";import"./utils-MI8bpwWe.js";import"./clsx-B-dksMZM.js";import"./Text-CAhqk-DI.js";import"./useFocusRing-DaRRNwj-.js";import"./index-BBc3oC3v.js";import"./index-CbSysqEM.js";import"./clsx-Ciqy0D92.js";import"./Text-CEobg6V0.js";import"./Label-XPeWtnKp.js";import"./Button-BwBVmhGW.js";import"./Hidden-DPLxNawq.js";import"./useLabels-C8mFIlFg.js";import"./useButton-sutBB3el.js";import"./Dialog-QBizddFr.js";import"./RSPContexts-BquRMNxt.js";import"./OverlayArrow-B2zB_EQ_.js";import"./useResizeObserver-BrhITzv6.js";import"./useControlledState-CoGFVVHL.js";import"./Collection-BcbboX9l.js";import"./index-DLK80OlA.js";import"./Separator-D8MGuuYM.js";import"./SelectionManager-DY8wLbQ9.js";import"./useEvent-GK6_gpuW.js";import"./scrollIntoView-BMVD6Opw.js";import"./SelectionIndicator-CuIiPtTA.js";import"./useDescription-qUz9Rnax.js";import"./ListKeyboardDelegate-TUi4wdGD.js";import"./PressResponder-BHocIs0H.js";import"./useLocalizedStringFormatter-tIc5njIq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DYmInOV2.js";import"./VisuallyHidden-9B-wHDrP.js";import"./Button-CPOu634C.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNj3ahoN.js";import"./createLucideIcon-BawZSGby.js";import"./x-BpPOBZFj.js";import"./Heading-BC4KM-ZJ.js";import"./info-VgSOpyKM.js";import"./Popover-h68upjjX.js";import"./useFormValidation-Btmt3NPi.js";import"./useField-C9ctWP7M.js";import"./Form-BD5mMvG6.js";import"./check-CJ0NjtmE.js";import"./useToggleState-BKkmfq33.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
