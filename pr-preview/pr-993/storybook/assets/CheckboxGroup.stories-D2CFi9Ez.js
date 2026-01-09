import{j as e}from"./iframe-DSZ2fKvK.js";import{C as m}from"./CheckboxGroup-BVV3jwcO.js";import{C as p}from"./Checkbox-BygpU1wd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BMni7XFl.js";import"./utils-Cfkrut6D.js";import"./clsx-B-dksMZM.js";import"./Text-CgCYlfoO.js";import"./useFocusRing-DXadVZPZ.js";import"./index-DoXffT-S.js";import"./index-DWmwxavY.js";import"./clsx-Ciqy0D92.js";import"./Text-w9kcErxq.js";import"./Label-DpLOnecY.js";import"./Button-DA0aKT5l.js";import"./Hidden-ChZPyTdJ.js";import"./useLabels-CBr_pV_K.js";import"./useButton-BoGmqoO9.js";import"./Dialog-76dV7wm5.js";import"./RSPContexts-Dor0eJbl.js";import"./OverlayArrow-D0jjKAlM.js";import"./useResizeObserver-Bf_O2Yeh.js";import"./useControlledState-KoCGTRr1.js";import"./Collection-ChAdkSBy.js";import"./index--CzgAou0.js";import"./Separator-C5DpsQ8u.js";import"./SelectionManager-05692ccu.js";import"./useEvent-DbBN9uYZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cl5pLQxb.js";import"./useDescription-CWxL4hNe.js";import"./ListKeyboardDelegate-E7ClQiAa.js";import"./PressResponder-DeC2vrS8.js";import"./useLocalizedStringFormatter-BJCLTOit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRlXv4xO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-9r-CcUTk.js";import"./Button-wYRzLtLo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fLqKeFmr.js";import"./createLucideIcon-BZEE360n.js";import"./x-DPL0DItu.js";import"./Heading-CTO5IYsM.js";import"./info-C3zZX9Gl.js";import"./Popover-BAa_y_Lz.js";import"./useFormValidation-CqeQwe6N.js";import"./useField-CClsPm5e.js";import"./Form-DiZ-C_ny.js";import"./check-BsDK_EBf.js";import"./useToggleState-DjFVoi9D.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
