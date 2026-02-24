import{j as e}from"./iframe-ttA-941O.js";import{C as m}from"./CheckboxGroup-6cXEM_t1.js";import{C as p}from"./Checkbox-Clsa-t2h.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D8wLofnN.js";import"./utils-kMU7ki_G.js";import"./clsx-B-dksMZM.js";import"./Text-DDmMxJeL.js";import"./useFocusRing-JMNyCoET.js";import"./index-BGJa9tKv.js";import"./index-xTgHXqnF.js";import"./clsx-Ciqy0D92.js";import"./Text-BR3kbEzk.js";import"./Label-ENZ6Ft7h.js";import"./Button-C5RiUPk0.js";import"./Hidden-CwltMKmL.js";import"./useLabels-CKLykpFR.js";import"./useButton-Ufm4RpL_.js";import"./Dialog-CnTHFYME.js";import"./RSPContexts-CjxN8zVi.js";import"./OverlayArrow-B0GxO4SL.js";import"./useResizeObserver-DfKSDkbA.js";import"./useControlledState-BUy0YhYj.js";import"./Collection-D1-YSs2_.js";import"./index-CzlCb0WO.js";import"./Separator-alzxNplr.js";import"./SelectionManager-D4TP0W3E.js";import"./useEvent-DZVHWHFV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BGqMO6nd.js";import"./useDescription-BJ8hGUtQ.js";import"./ListKeyboardDelegate-BV_7VUVn.js";import"./PressResponder-pfLeyXuc.js";import"./useLocalizedStringFormatter-C2DhziCO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BToGeip5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BaeJBxqb.js";import"./Button-BhVMo4IX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CuS96Tce.js";import"./createLucideIcon-B1sYOOVA.js";import"./x-CVVENi3f.js";import"./Heading-DxYLh6qs.js";import"./info-P2mcC_30.js";import"./Popover-Bm6gXjcq.js";import"./useFormValidation-DQ_MUVoO.js";import"./useField-V9mNuMYQ.js";import"./Form-DAwJbB6_.js";import"./check-C137zzxH.js";import"./useToggleState-DpqqJbEn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
