import{j as e}from"./iframe-BvxrP4H_.js";import{C as m}from"./CheckboxGroup-ts89xeD4.js";import{C as p}from"./Checkbox-D0pa2blO.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D1Yw6ERp.js";import"./utils-DRwSYmkY.js";import"./clsx-B-dksMZM.js";import"./Text-BJUv6RK-.js";import"./useFocusRing-CJdHKEcp.js";import"./index-DZ-u2hu8.js";import"./index-D44wzwBB.js";import"./clsx-Ciqy0D92.js";import"./Text-DeMAVr2b.js";import"./Label-kaeiWxa8.js";import"./Button-BEiciYfb.js";import"./Hidden-D4jsxrLb.js";import"./useLabels-BMmbJ9_b.js";import"./useButton-uALjNSWo.js";import"./Dialog-BntEtIwp.js";import"./RSPContexts-DEykMfDO.js";import"./OverlayArrow-DUojjDUB.js";import"./useResizeObserver-BdXrzxcT.js";import"./useControlledState-D2EAi2j4.js";import"./Collection-BnA9gHIE.js";import"./index-DMqlofMa.js";import"./Separator-e71TDoZM.js";import"./SelectionManager-BH5HcElr.js";import"./useEvent-CgFksn0F.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-pSPS3JIv.js";import"./useDescription-CWz-Nrf1.js";import"./ListKeyboardDelegate-DbICXpzW.js";import"./PressResponder-D8B4OF2M.js";import"./useLocalizedStringFormatter-D4pCyGYe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQJawZVf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJsqer9T.js";import"./Button-A9AEz-p5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_Mu1zyu.js";import"./createLucideIcon-B5KIjSHM.js";import"./x-DSnh6kAd.js";import"./Heading-Gcv-n3NK.js";import"./info-C7XqbetH.js";import"./Popover-CXyOYptn.js";import"./useFormValidation-DHvoEVhR.js";import"./useField-BpVbfcEn.js";import"./Form-CWCyzf8u.js";import"./check-B34nOuLp.js";import"./useToggleState-D8g27Ds2.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
