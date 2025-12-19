import{j as e}from"./iframe-1f3rxXdd.js";import{C as m}from"./CheckboxGroup-BBsym4ub.js";import{C as p}from"./Checkbox-C3CBknD1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D6PqbjM6.js";import"./utils-DTlh9C3r.js";import"./clsx-B-dksMZM.js";import"./Text-Bh_25_l1.js";import"./useFocusRing-DN9l4SO_.js";import"./index-DeUdjjir.js";import"./index-B6Uo-J4R.js";import"./clsx-Ciqy0D92.js";import"./Text-_zCkEVaW.js";import"./Label-GZhPP4ss.js";import"./Button-_mxlpwte.js";import"./Hidden-BXaTRR1s.js";import"./useLabels-DCQuJ-gm.js";import"./useButton-Dy6D2y1s.js";import"./Dialog-CRfoXNrK.js";import"./RSPContexts-Ddb_9nY5.js";import"./OverlayArrow-DtIa2RLz.js";import"./useResizeObserver-BOnRpl1D.js";import"./useControlledState-D9gyYFcQ.js";import"./Collection-C5NcOb0A.js";import"./index-DODnfsB8.js";import"./Separator-DsQf98fE.js";import"./SelectionManager-BNh6yg8V.js";import"./useEvent-C_xz6dVr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bj2W8LE4.js";import"./useDescription-TRy5yL60.js";import"./ListKeyboardDelegate-C_l-Vvl3.js";import"./PressResponder-I-8lHwTo.js";import"./useLocalizedStringFormatter-BAZ5Qp5C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DVZ1cASE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DMADwpeo.js";import"./Button-C8uwiZ4T.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dkjvqcq6.js";import"./createLucideIcon-R1tXtWjx.js";import"./x-J23rZ0Hf.js";import"./Heading-DqKKK-is.js";import"./info-B6B1e4QF.js";import"./Popover-C8leewlc.js";import"./useFormValidation-DX1vEigH.js";import"./useField-uMYBRc_O.js";import"./Form-DM8VMoOo.js";import"./check-DKg6aErY.js";import"./useToggleState-B2dRm8A8.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
