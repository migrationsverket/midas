import{j as e}from"./iframe-BBLpafwf.js";import{C as m}from"./CheckboxGroup-BqkGkHuz.js";import{C as p}from"./Checkbox-lfXlDdhN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D1_ZzpXP.js";import"./utils-BRp6xYAP.js";import"./clsx-B-dksMZM.js";import"./Text-BYn86eAe.js";import"./useFocusRing-BBkgX1wP.js";import"./index-e8OPjBDY.js";import"./index-DI-_kXwT.js";import"./clsx-Ciqy0D92.js";import"./Text-BnZA8JI4.js";import"./Label-flO3u-dF.js";import"./Button-Dw_yAd9_.js";import"./Hidden-DOfZA5Lu.js";import"./useLabels-Qhz8Dm5U.js";import"./useButton-DPuerBPE.js";import"./Dialog-DFWrA9LR.js";import"./RSPContexts-D3LkOCyV.js";import"./OverlayArrow-mqJEzkN3.js";import"./useResizeObserver-CdAyETvE.js";import"./useControlledState-CsxbOKlZ.js";import"./Collection-B093dmnl.js";import"./index-BADtiS-W.js";import"./Separator-CnkSVuVF.js";import"./SelectionManager-DcemNVOz.js";import"./useEvent-yqTNqBe0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CKAjyGv9.js";import"./useDescription-DYWxkH0Q.js";import"./ListKeyboardDelegate-gZx99BPY.js";import"./PressResponder-C0bADhVL.js";import"./useLocalizedStringFormatter-B9BHTFqE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DV-9S-lF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DuPFMQS_.js";import"./Button-BN6Xx9p1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6NC92a7V.js";import"./createLucideIcon-_MMWm-eO.js";import"./x-DuCwogba.js";import"./Heading-B2r7xaTF.js";import"./info-CyajlpHb.js";import"./Popover-Yimf-Fr0.js";import"./useFormValidation-5FNa8kHq.js";import"./useField-CjE2cDRc.js";import"./Form-yQ_OW8mU.js";import"./check-BsM42v1t.js";import"./useToggleState-R6ANs8Ob.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
