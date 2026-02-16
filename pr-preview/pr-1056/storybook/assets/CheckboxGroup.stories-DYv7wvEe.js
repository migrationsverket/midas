import{j as e}from"./iframe-CjsN2Sbl.js";import{C as m}from"./CheckboxGroup-B-8-YPF_.js";import{C as p}from"./Checkbox-CSviWfbN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CrPR-bnN.js";import"./utils-COI7mk-Z.js";import"./clsx-B-dksMZM.js";import"./Text-BQK0eZgF.js";import"./useFocusRing-DiEIFPwp.js";import"./index-CKo9uiwm.js";import"./index-B8NePwnw.js";import"./clsx-Ciqy0D92.js";import"./Text-CSqjNMss.js";import"./Label-B5jVEWx5.js";import"./Button-CJVqDdWG.js";import"./Hidden-B_kzivom.js";import"./useLabels-CwB4JwE6.js";import"./useButton-qnOMufHE.js";import"./Dialog-4ubmlTtR.js";import"./RSPContexts-DwL8agvn.js";import"./OverlayArrow-wTzyx3Y4.js";import"./useResizeObserver-DD03rVkz.js";import"./useControlledState-pLjBfoN3.js";import"./Collection-kM4C1fOf.js";import"./index-eAOazQnS.js";import"./Separator-BwxmNEHY.js";import"./SelectionManager-kGv9cFEb.js";import"./useEvent-BAcO_i_L.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dtxpd41E.js";import"./useDescription-1l4I4YYw.js";import"./ListKeyboardDelegate-BcdPtsBu.js";import"./PressResponder-DrkEnSpk.js";import"./useLocalizedStringFormatter-BbQDdHsq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DfFuG-Eb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CfSP2Ia7.js";import"./Button-BvGYLpp9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BnIikKMu.js";import"./createLucideIcon-CiVnvI1n.js";import"./x-DkVq0ORE.js";import"./Heading-2FBT4Xcv.js";import"./info-D1FV45cc.js";import"./Popover-D_bZvvuO.js";import"./useFormValidation-CraaeZ4V.js";import"./useField-B0YexPGJ.js";import"./Form-ZhegcCUs.js";import"./check-CSNsukEx.js";import"./useToggleState-CrtNWSV2.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
