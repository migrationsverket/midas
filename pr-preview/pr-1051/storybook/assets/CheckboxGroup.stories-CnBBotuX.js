import{j as e}from"./iframe-B5c7-TS8.js";import{C as m}from"./CheckboxGroup-CGo5B7o9.js";import{C as p}from"./Checkbox-C37WXJ92.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BUOTNQMM.js";import"./utils-OlD28Oco.js";import"./clsx-B-dksMZM.js";import"./Text-DYD59UTl.js";import"./useFocusRing-C18dDj3L.js";import"./index-ByEKdHjQ.js";import"./index-41iNjvFE.js";import"./clsx-Ciqy0D92.js";import"./Text-CXLpjGso.js";import"./Label-iOCuPFms.js";import"./Button-C5Qp8sRI.js";import"./Hidden-DgJfQ7aj.js";import"./useLabels-BKo_NQ3G.js";import"./useButton-Br7F04Rc.js";import"./Dialog-BEf9ZAnF.js";import"./RSPContexts-yBqgqokE.js";import"./OverlayArrow-Cl1qYup9.js";import"./useResizeObserver-15Bzp4gu.js";import"./useControlledState-DEZrae_z.js";import"./Collection-BNPzsOfb.js";import"./index-CoLrQld2.js";import"./Separator-BSZDTc6g.js";import"./SelectionManager-Bwh8qqDD.js";import"./useEvent-LUYrey9d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CA3Uq9OB.js";import"./useDescription-BhjMw0Jb.js";import"./ListKeyboardDelegate-GShWNoVd.js";import"./PressResponder-CBrq5ngO.js";import"./useLocalizedStringFormatter-Bu05u6GJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bh91Q0k3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ByTPJ2eV.js";import"./Button-MSp50WJ0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dhn_O0nj.js";import"./createLucideIcon-DHsWZlEk.js";import"./x-LkEAYfSs.js";import"./Heading-C6uCjmJK.js";import"./info-CZLFldIB.js";import"./Popover-BKydzdZ2.js";import"./useFormValidation-fe3exVFC.js";import"./useField-BXzSvw9G.js";import"./Form-Cv6_3fLN.js";import"./check-DF6IRbNH.js";import"./useToggleState-j3KQvAYo.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
