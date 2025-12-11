import{j as e}from"./iframe-y6AvU9pV.js";import{C as m}from"./CheckboxGroup-DfxhVrDo.js";import{C as p}from"./Checkbox-BI_Lda8d.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B_ZzXf74.js";import"./utils-VIxaLxO-.js";import"./clsx-B-dksMZM.js";import"./Text-DlhfRLNK.js";import"./useFocusRing-B9DSdUhj.js";import"./index-BwPUsMU4.js";import"./index-DrBZwNpv.js";import"./clsx-Ciqy0D92.js";import"./Text-B3Lob103.js";import"./Label-DO4YL6tP.js";import"./Button-4DuSgfee.js";import"./Hidden-CSfoPJVM.js";import"./useLabels-Bnd5CjV_.js";import"./useButton-DriAMg0B.js";import"./Dialog-BoKqdo0f.js";import"./RSPContexts-CI4AlZqi.js";import"./OverlayArrow-CSG2zuFf.js";import"./useResizeObserver-BWkC-VMD.js";import"./useControlledState-DShqKV-K.js";import"./Collection-CKzIMKbb.js";import"./index-DQOx1nQi.js";import"./Separator-BWaXgvHa.js";import"./SelectionManager-DZRPETSX.js";import"./useEvent-DulQh_3F.js";import"./scrollIntoView-C9aEwsLu.js";import"./SelectionIndicator-DX20ZWKG.js";import"./useDescription-BWXgWP7M.js";import"./ListKeyboardDelegate-CQJsI6L7.js";import"./PressResponder-YEHEJoVU.js";import"./useLocalizedStringFormatter-DqeEh2aJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CtO4xKrK.js";import"./VisuallyHidden-DF1AJIqt.js";import"./Button-4Ng5Qb5n.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BhHfTxwL.js";import"./createLucideIcon-D29kT7vp.js";import"./x-CilltRp-.js";import"./Heading-BDM_ieoG.js";import"./info-fBh3PomB.js";import"./Popover-L_Bg4L94.js";import"./useFormValidation-BBLW1j1l.js";import"./useField-BN-dX1j4.js";import"./Form-DVSjZpus.js";import"./check-Bb0tla1j.js";import"./useToggleState-BR5yW0zB.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
