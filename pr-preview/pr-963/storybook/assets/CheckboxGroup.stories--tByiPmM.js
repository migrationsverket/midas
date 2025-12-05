import{j as e}from"./iframe-DuaKi7xD.js";import{C as m}from"./CheckboxGroup-BfA5K0Ch.js";import{C as p}from"./Checkbox-Jkj3fpq2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-H771sQdp.js";import"./utils-BCB57b2F.js";import"./clsx-B-dksMZM.js";import"./Text-CQdB-g-f.js";import"./useFocusRing-CQC8CYmg.js";import"./index-D03P8HqJ.js";import"./index-Ch7u2l1l.js";import"./clsx-Ciqy0D92.js";import"./Text-BSDD80o3.js";import"./Label-BZBLIiUE.js";import"./Button-C2VTZsyg.js";import"./Hidden-DKSH1Rie.js";import"./useLabels-CpVDs9CP.js";import"./useButton-DBitaRdE.js";import"./Dialog-CXAViKrp.js";import"./RSPContexts-Dp-lO0G2.js";import"./OverlayArrow-Csf7zr_A.js";import"./useResizeObserver-CYs8NOIf.js";import"./useControlledState-DAMN56Mb.js";import"./Collection-BrbeAAJJ.js";import"./index-uZ48yn5V.js";import"./Separator-CddXaqSa.js";import"./SelectionManager-Dfyyw9Ox.js";import"./useEvent-BT4STeC0.js";import"./scrollIntoView-CssqY3lX.js";import"./SelectionIndicator-_Z4rczi7.js";import"./useDescription-h7oYQVdW.js";import"./ListKeyboardDelegate-DrqN3Bz_.js";import"./PressResponder-CzqIdO87.js";import"./useLocalizedStringFormatter-j_Zj2lr5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bl2sq5hu.js";import"./VisuallyHidden-DOdw6P18.js";import"./Button-B9O2nQjc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CH44G-u9.js";import"./createLucideIcon-BniL5whM.js";import"./x-BaABe5aY.js";import"./Heading-uceAp6q4.js";import"./info-uyk6d1fQ.js";import"./Popover-Sb6B6YNt.js";import"./useFormValidation-B8lCzVVQ.js";import"./useField-Cu-a3CrC.js";import"./Form-DibndPIs.js";import"./check-B0RW2aVw.js";import"./useToggleState-Dxo55OsM.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
