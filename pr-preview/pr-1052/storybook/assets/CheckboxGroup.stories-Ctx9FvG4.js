import{j as e}from"./iframe-CVh3nSma.js";import{C as m}from"./CheckboxGroup-lZy2wLSi.js";import{C as p}from"./Checkbox-CCTVpwCJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DrvXZ_4S.js";import"./utils-DAl4r7ZI.js";import"./clsx-B-dksMZM.js";import"./Text-BmDZHzTH.js";import"./useFocusRing-DevKcWYf.js";import"./index-DZnEqQgx.js";import"./index-Cw_mWNji.js";import"./clsx-Ciqy0D92.js";import"./Text-D6VK4Tm3.js";import"./Label-CH1NNf6J.js";import"./Button-CjHZLp4M.js";import"./Hidden-CKFlO9gT.js";import"./useLabels-BlYxGBYn.js";import"./useButton-Cv89nSdu.js";import"./Dialog-bQn8xM8O.js";import"./RSPContexts-BTXC2TF-.js";import"./OverlayArrow-B3EZSU0Y.js";import"./useResizeObserver-hHhXNlSt.js";import"./useControlledState-Cgai1Xo4.js";import"./Collection-BJu2ybUs.js";import"./index-BwGuzPfC.js";import"./Separator-L_50hZrU.js";import"./SelectionManager-CKXVu5xB.js";import"./useEvent-BeLY2gpF.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CN5UGb_C.js";import"./useDescription-Lg2ymasT.js";import"./ListKeyboardDelegate-CCOJkWMX.js";import"./PressResponder-CowuREYc.js";import"./useLocalizedStringFormatter-CIu9Ev8Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbOE0HRn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-8g-Kxj9j.js";import"./Button-CBEr-IVd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DsUDPIO8.js";import"./createLucideIcon-DiDsoOCy.js";import"./x-B6y8n7rP.js";import"./Heading-CKWun0e5.js";import"./info-CrWSfsjz.js";import"./Popover-BLtMkNqW.js";import"./useFormValidation-B1wWlh02.js";import"./useField-2EgC1qtj.js";import"./Form-VdedL44P.js";import"./check-ZzSV_4jX.js";import"./useToggleState-Duj060PO.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
