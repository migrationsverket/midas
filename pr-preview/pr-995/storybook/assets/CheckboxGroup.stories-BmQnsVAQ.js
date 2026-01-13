import{j as e}from"./iframe-C-ZgYTLd.js";import{C as m}from"./CheckboxGroup-DgtK5yPK.js";import{C as p}from"./Checkbox-Cw2212c-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BgIsxqD2.js";import"./utils-5FE85UMg.js";import"./clsx-B-dksMZM.js";import"./Text-ZgpLFqnp.js";import"./useFocusRing-Bc0MHDjd.js";import"./index-ChPkoH3I.js";import"./index-CXE28Dj1.js";import"./clsx-Ciqy0D92.js";import"./Text-BR0bAKi6.js";import"./Label-BDL6PMm2.js";import"./Button-B6pX2OWD.js";import"./Hidden-DYGqIVaB.js";import"./useLabels-2zRZ-jjd.js";import"./useButton-qcLY0iFO.js";import"./Dialog-BM8_A6Uk.js";import"./RSPContexts-CNZ1zMeG.js";import"./OverlayArrow-3mRbgVn_.js";import"./useResizeObserver-LfOLoz3K.js";import"./useControlledState-j9N21RQd.js";import"./Collection-D-w0--MV.js";import"./index-ihfxEqj8.js";import"./Separator-BJayw3EZ.js";import"./SelectionManager-DoS21RMw.js";import"./useEvent-BNx8FKA0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CkFFauei.js";import"./useDescription-BsSbnagY.js";import"./ListKeyboardDelegate-8j2oF_gg.js";import"./PressResponder-C3BZlgw1.js";import"./useLocalizedStringFormatter-D5GDJFPJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYWptF-D.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BOVmsq2q.js";import"./Button-h5IDA3ie.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVNEhNrj.js";import"./createLucideIcon-DhqApzLs.js";import"./x-CGX4TCwo.js";import"./Heading-DgAAR0AT.js";import"./info-BGcn7pqn.js";import"./Popover-Bn-wUiwq.js";import"./useFormValidation-DFhaQe1w.js";import"./useField-D678ic1M.js";import"./Form-CwWoFJfE.js";import"./check-BOHYC_7m.js";import"./useToggleState-BbEXHIwT.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
