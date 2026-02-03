import{j as e}from"./iframe-Yd_3Uapz.js";import{C as m}from"./CheckboxGroup-bwc1uWNQ.js";import{C as p}from"./Checkbox-D9rM8NKQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-nG5jWdlR.js";import"./utils-6lRm6Tee.js";import"./clsx-B-dksMZM.js";import"./Text-Ppy1xlW_.js";import"./useFocusRing-BXLc5uur.js";import"./index-7qq0zYgX.js";import"./index-BOW1adYN.js";import"./clsx-Ciqy0D92.js";import"./Text-B4Lb8X2G.js";import"./Label-DwXN3gXX.js";import"./Button-CtSuRHbF.js";import"./Hidden-DV_FdnSF.js";import"./useLabels-CBAQ5XKc.js";import"./useButton-BBbRN2vI.js";import"./Dialog-DCxYnSBo.js";import"./RSPContexts-E-uPdC6l.js";import"./OverlayArrow-pz_JS7iH.js";import"./useResizeObserver-DQ0HlEBx.js";import"./useControlledState-CcJGCIAf.js";import"./Collection-DOCXhwSD.js";import"./index-CP2WQlQA.js";import"./Separator-C8Dl4hGC.js";import"./SelectionManager-pVgmciQy.js";import"./useEvent-DeXrWnv_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BrIFsEya.js";import"./useDescription-BugULMIn.js";import"./ListKeyboardDelegate-Cj2F-fBs.js";import"./PressResponder-BMmlZBha.js";import"./useLocalizedStringFormatter-I01atqXI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9aW9IZG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DlJI08Uo.js";import"./Button-r50ETdbi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-02LtWaa0.js";import"./createLucideIcon-BG79myAo.js";import"./x-CszsXm-U.js";import"./Heading-B7Kjgc7K.js";import"./info-BIlvkAIz.js";import"./Popover-DQNsucQI.js";import"./useFormValidation-BuYW0ODW.js";import"./useField-Cd_M8AeU.js";import"./Form-BaJRF_22.js";import"./check-B7cXIKOD.js";import"./useToggleState-J58ZR5dX.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
