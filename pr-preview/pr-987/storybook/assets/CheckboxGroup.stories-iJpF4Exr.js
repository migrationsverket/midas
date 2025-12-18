import{j as e}from"./iframe-C6_-e7NK.js";import{C as m}from"./CheckboxGroup-CHR6bDQ7.js";import{C as p}from"./Checkbox-Cio8-adI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DV33LILC.js";import"./utils-Bbmqvbo3.js";import"./clsx-B-dksMZM.js";import"./Text-F1WQVY7m.js";import"./useFocusRing-BXSkyUM9.js";import"./index-DPxO6KUo.js";import"./index-Bwwn4N2G.js";import"./clsx-Ciqy0D92.js";import"./Text-DRnoGrtX.js";import"./Label-C_kXs5BT.js";import"./Button-CdXu0ILf.js";import"./Hidden-BPDqmKbL.js";import"./useLabels-JWkxwXER.js";import"./useButton-BMxkS-67.js";import"./Dialog-BwhCXn8z.js";import"./RSPContexts-Bh1Fxq0q.js";import"./OverlayArrow-8UZhrLZD.js";import"./useResizeObserver-DBBABA7S.js";import"./useControlledState--v8NGJnX.js";import"./Collection-BCEQyPRW.js";import"./index-BOUigGyV.js";import"./Separator-DpbotVHq.js";import"./SelectionManager-CMrFD8ch.js";import"./useEvent-CioOrUcI.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DrCpW3qH.js";import"./useDescription-fi3Mvgag.js";import"./ListKeyboardDelegate-BcVPg-Er.js";import"./PressResponder-BBEZd6RW.js";import"./useLocalizedStringFormatter-D7bjjg4_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yxJB0HZv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BCTu162M.js";import"./Button-DxcAJTpN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-FHnrTC9O.js";import"./createLucideIcon-D6PH1BXQ.js";import"./x-KVb9IDQ9.js";import"./Heading-B_mxpdS_.js";import"./info-BYbh7dqa.js";import"./Popover-wRopwrAm.js";import"./useFormValidation-CMpXllZv.js";import"./useField-DP5dlwby.js";import"./Form-V3kbBiWO.js";import"./check-DHWFXW4f.js";import"./useToggleState-DdUAb6sw.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
