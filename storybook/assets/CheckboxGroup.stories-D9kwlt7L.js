import{j as e}from"./iframe-COikYHdP.js";import{C as m}from"./CheckboxGroup-5yxfKFVD.js";import{C as p}from"./Checkbox-CDPf7pnG.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DV7LrvHp.js";import"./utils-BMDm-KrN.js";import"./clsx-B-dksMZM.js";import"./Text-NJjQXwoJ.js";import"./useFocusRing-BWhmDfF8.js";import"./index-DaHyXhuy.js";import"./index-E3BpGcaE.js";import"./clsx-Ciqy0D92.js";import"./Text-B3B9omX-.js";import"./Label-BZ7S-urD.js";import"./Button-AP7Y4Mno.js";import"./Hidden-BkpCwkk8.js";import"./useLabels-M7dy5Zja.js";import"./useButton-CCmPBSSV.js";import"./Dialog-CLFuv6eo.js";import"./RSPContexts-BYXms5mf.js";import"./OverlayArrow-CuE0bO4i.js";import"./useResizeObserver-BBtOrrfN.js";import"./useControlledState-Cl3D1B3q.js";import"./Collection-9SssQ7g7.js";import"./index-C6l6_kf4.js";import"./Separator-72pt8j9u.js";import"./SelectionManager-BpR3qSNY.js";import"./useEvent-DLghMCOA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEa7QTXJ.js";import"./useDescription-BHrfYc6I.js";import"./ListKeyboardDelegate-D1f7Mx4w.js";import"./PressResponder-DT9HIJbT.js";import"./useLocalizedStringFormatter-Dt-u1m1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_I41jya.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-PvYD6Ub5.js";import"./Button-jvTkoE8j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fXUv9IGD.js";import"./createLucideIcon-Cfor4pko.js";import"./x-DsF834kI.js";import"./Heading-D5tI5UT-.js";import"./info--z7ZDhbZ.js";import"./Popover-BAgex6g3.js";import"./useFormValidation-B9TCmMh5.js";import"./useField-Cj2sp65a.js";import"./Form-DAtbnfCi.js";import"./check-BjeCz2Me.js";import"./useToggleState-CVocR7-M.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
