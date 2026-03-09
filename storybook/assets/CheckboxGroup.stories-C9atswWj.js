import{j as e}from"./iframe-kd_AoAeF.js";import{C as m}from"./CheckboxGroup-ZUW5ch8I.js";import{C as p}from"./Checkbox-BNhg3aBv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-n3fvYIN_.js";import"./utils-rNhv6-p5.js";import"./clsx-B-dksMZM.js";import"./Text-0B35jr2S.js";import"./useFocusRing-DAtTESdQ.js";import"./index-Co1AZiIR.js";import"./index-C8QvYmrM.js";import"./clsx-Ciqy0D92.js";import"./Text-DhCHaZIC.js";import"./Label-C3P9q1tn.js";import"./Button-DeJMe7Hb.js";import"./Hidden-CVTUXncE.js";import"./useLabels-0qTjz8uQ.js";import"./useButton-CrwZeUwe.js";import"./Dialog-Kwpiy5Nc.js";import"./RSPContexts-Dduov18O.js";import"./OverlayArrow-Dhh-yQBJ.js";import"./useResizeObserver-7ofWCrPu.js";import"./useControlledState-BFxViZ9m.js";import"./Collection-CElgCNYt.js";import"./index-CR_QTErF.js";import"./Separator-CaBtwGDl.js";import"./SelectionManager-CXzDYAc2.js";import"./useEvent-ClTqOmjP.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BafoNrVj.js";import"./useDescription-XJhiBPR3.js";import"./ListKeyboardDelegate-DG2LI3S1.js";import"./PressResponder-DMUVf77S.js";import"./useLocalizedStringFormatter-B8gC_nki.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGf8eVWx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DSv4Z3AK.js";import"./Button-CGXac9yi.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DfD4_B_y.js";import"./createLucideIcon-DYqnFHX_.js";import"./x-BKJs55h2.js";import"./Heading-CDuh6Ueo.js";import"./info-DkhTFZjp.js";import"./Popover-B-YC75o1.js";import"./useFormValidation-CrHP7G67.js";import"./useField-D1DMzf98.js";import"./Form-B0g7hQdX.js";import"./check-DTDEobiG.js";import"./useToggleState-mjVjjFbJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
