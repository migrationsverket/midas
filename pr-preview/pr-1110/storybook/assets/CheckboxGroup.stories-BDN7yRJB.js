import{j as e}from"./iframe-T-9iVXG3.js";import{C as m}from"./CheckboxGroup-ONZJ35MK.js";import{C as p}from"./Checkbox-3rG8fIkx.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B3mWOyJN.js";import"./utils-B3genDNz.js";import"./clsx-B-dksMZM.js";import"./Text-B_uJS0BB.js";import"./useFocusRing-BDfuXA1K.js";import"./index-B-KcomW3.js";import"./index-DLcbmtBd.js";import"./clsx-Ciqy0D92.js";import"./Text-DqB5EYwf.js";import"./Label-C3q5OkxP.js";import"./Button-C-dW1ric.js";import"./Hidden-gSpfVWl-.js";import"./useLabels-CRqI88gG.js";import"./useButton-D49MhIWL.js";import"./Dialog-CVucMybP.js";import"./RSPContexts-BPLMbvFf.js";import"./OverlayArrow-DctUXpS3.js";import"./useResizeObserver-D_SfmWZp.js";import"./useControlledState-BoI1WaNw.js";import"./Collection-MsEGC5KJ.js";import"./index-18etiPbY.js";import"./Separator-3WMd_667.js";import"./SelectionManager-CA4lF0s6.js";import"./useEvent-D56kyFzf.js";import"./scrollIntoView-iro7z2eq.js";import"./SelectionIndicator-mJeJ2J_z.js";import"./useDescription-DqYEfudQ.js";import"./ListKeyboardDelegate-DHb2U1Ph.js";import"./PressResponder-Dhq0PlGY.js";import"./useLocalizedStringFormatter-xdS-2W0d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df9qqeiA.js";import"./getScrollParent-CRP0whSm.js";import"./VisuallyHidden-CO4c4_3Y.js";import"./x-Cs-J8gEx.js";import"./createLucideIcon-qLu_u4fs.js";import"./useLocalizedStringFormatter-WowMA0AY.js";import"./Heading-ChYvpQts.js";import"./Button-LHNpYI0v.js";import"./Button.module-BB7N-cLd.js";import"./info-BF2lLuAC.js";import"./Popover-Csz6eImH.js";import"./useFormValidation-Dv3Ujp-e.js";import"./useField-CtRZfu8w.js";import"./Form-DQl3-hlb.js";import"./check-D56MuOhO.js";import"./useToggleState-DB0Wpnkv.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
