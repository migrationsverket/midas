import{j as e}from"./iframe-3hz77_Bw.js";import{C as m}from"./CheckboxGroup-BPfQwqLw.js";import{C as p}from"./Checkbox-BH7ZsWce.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CKc2TwCy.js";import"./utils-BKaZ30Q6.js";import"./clsx-B-dksMZM.js";import"./Text-DHFxKFv2.js";import"./useFocusRing-Bh-PYm_3.js";import"./index-552XOfHd.js";import"./index-CTmK-6Cc.js";import"./clsx-Ciqy0D92.js";import"./Text-BDBZNBDx.js";import"./Label-BlFAvb3O.js";import"./Button-Rs9y_WRS.js";import"./Hidden-CbefqEOU.js";import"./useLabels-_2fCXvXg.js";import"./useButton-COY7bHHb.js";import"./Dialog-B1bsT1gU.js";import"./RSPContexts-B04pKlss.js";import"./OverlayArrow-BXnV8co4.js";import"./useResizeObserver-D3GZDJQc.js";import"./useControlledState-CHC7NptC.js";import"./Collection-CXK_BmZu.js";import"./index-CTPtxmwT.js";import"./Separator-BwkOpac5.js";import"./SelectionManager-rNIL6Xs6.js";import"./useEvent-BqmLLXEW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BljGTP_D.js";import"./useDescription-lZYnuRxB.js";import"./ListKeyboardDelegate-CtDxpUtd.js";import"./PressResponder-HuKyHg2u.js";import"./useLocalizedStringFormatter-CyhZiFiB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoKBWbTA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bqRfvEGp.js";import"./Button-BMU_fnRD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BKe3uMYT.js";import"./createLucideIcon-CMpCdTEI.js";import"./x-BcOVh6Rz.js";import"./Heading-3CXTTgbz.js";import"./info-bRR4hJIs.js";import"./Popover-DnI9o38N.js";import"./useFormValidation-CPpL_rTl.js";import"./useField-Di7jkhAl.js";import"./Form-At2zupqa.js";import"./check-DaudtDEe.js";import"./useToggleState-D26q1zf3.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
