import{j as e}from"./iframe-CgL5jpdX.js";import{C as m}from"./CheckboxGroup-CCjbp7lp.js";import{C as p}from"./Checkbox-B6sG3j2A.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BH_BPKHD.js";import"./utils-BwYOvAb8.js";import"./clsx-B-dksMZM.js";import"./Text-C7o90fsQ.js";import"./useFocusRing-CzWgPPi5.js";import"./index-IcQzFznC.js";import"./index-BLmwPxgC.js";import"./clsx-Ciqy0D92.js";import"./Text-MhlqGevy.js";import"./Label-dskcD2CD.js";import"./Button-Z-LnhU8E.js";import"./Hidden-C2oIje6j.js";import"./useLabels-B9veE0Tg.js";import"./useButton-CzcDwR1N.js";import"./Dialog-DSbqG3ZJ.js";import"./RSPContexts-TxIrKy65.js";import"./OverlayArrow-Dxv48tTs.js";import"./useResizeObserver-NI893z-o.js";import"./useControlledState-CyaCWJoJ.js";import"./Collection-9AeLgQUg.js";import"./index-CO57A9Dx.js";import"./Separator-CbbfB2UR.js";import"./SelectionManager-o0XZ8hoX.js";import"./useEvent-DWxTDEgS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DqnlVpg0.js";import"./useDescription-B8kyRAqY.js";import"./ListKeyboardDelegate-BZdKy9GG.js";import"./PressResponder-CuXLg06j.js";import"./useLocalizedStringFormatter-sPHgE0bP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bik81p2q.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BsEPRBBE.js";import"./Button-DSLJU119.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D5fFi2pk.js";import"./createLucideIcon-CxmWxSan.js";import"./x-Cp-TOvNz.js";import"./Heading-YDvkZKr1.js";import"./info-CRsRYZJj.js";import"./Popover-CwlylJ2g.js";import"./useFormValidation-YoD1TmSM.js";import"./useField-BsmAT2vs.js";import"./Form-CeL7g4an.js";import"./check-BaESR95y.js";import"./useToggleState-B2e4_1YM.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
