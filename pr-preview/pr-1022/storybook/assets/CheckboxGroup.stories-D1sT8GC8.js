import{j as e}from"./iframe-DMnXhvY8.js";import{C as m}from"./CheckboxGroup-tZMZ9h_d.js";import{C as p}from"./Checkbox-D38BTEYG.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-iahkZMae.js";import"./utils-Cr6fPQeE.js";import"./clsx-B-dksMZM.js";import"./Text-DMCoF6zG.js";import"./useFocusRing-8otf3cSz.js";import"./index-DAqnwmB7.js";import"./index-DIi78pwy.js";import"./clsx-Ciqy0D92.js";import"./Text-CFJ7Rv8f.js";import"./Label-DveEX_ua.js";import"./Button-D4fHUSQK.js";import"./Hidden-DPa8I1Gp.js";import"./useLabels-B1zcB8t6.js";import"./useButton-DHyzBCn2.js";import"./Dialog-C9ObGWO4.js";import"./RSPContexts-KhvNbaiD.js";import"./OverlayArrow-DT_Vt4aE.js";import"./useResizeObserver-DR7N0dFs.js";import"./useControlledState-4XYSNIgm.js";import"./Collection-CLg-pTOV.js";import"./index-DPCanXGU.js";import"./Separator-BeNXkxBh.js";import"./SelectionManager-GiV4_WOF.js";import"./useEvent-hoUK_fBs.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CLOiqyn5.js";import"./useDescription-UUruAZG-.js";import"./ListKeyboardDelegate-BdgHwj63.js";import"./PressResponder-Dg9oXRH4.js";import"./useLocalizedStringFormatter-BVxr3gfN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfdoS3FP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C2H7BXVT.js";import"./Button-E5A4z9FY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxRi-Ufl.js";import"./createLucideIcon-DykDHhyw.js";import"./x-CRcPQVxQ.js";import"./Heading-skeK9R6X.js";import"./info-C0-TzniS.js";import"./Popover-DWL3uBQh.js";import"./useFormValidation-ByGzq6xW.js";import"./useField-DY-_TNf0.js";import"./Form-BFZEhpvQ.js";import"./check-CYLHI8GM.js";import"./useToggleState-31AcSgWL.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
