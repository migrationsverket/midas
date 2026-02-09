import{j as e}from"./iframe-CDlGoVBX.js";import{C as m}from"./CheckboxGroup-D9SXALvJ.js";import{C as p}from"./Checkbox-Cgaybv88.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BTnAzmQ0.js";import"./utils-DK0QJ5bq.js";import"./clsx-B-dksMZM.js";import"./Text-gvo1OKGS.js";import"./useFocusRing-GV8a7-dB.js";import"./index-CClkoolm.js";import"./index-D9EgTrn3.js";import"./clsx-Ciqy0D92.js";import"./Text-Cflgqxbo.js";import"./Label-DnbVg9hf.js";import"./Button-ChHi1CmX.js";import"./Hidden-D3g4_ydn.js";import"./useLabels-Bnvu_zoZ.js";import"./useButton-CEiQ-7P6.js";import"./Dialog-ChLjSgrj.js";import"./RSPContexts-omBJ6Sgu.js";import"./OverlayArrow-DodgMuZn.js";import"./useResizeObserver-D1875uj1.js";import"./useControlledState-CcD6TCI7.js";import"./Collection-C0k2ascB.js";import"./index-D25xMYNc.js";import"./Separator-Cbp4e2aL.js";import"./SelectionManager-Dgm03e0j.js";import"./useEvent-BCnLZYbk.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2Q5v_NP.js";import"./useDescription-DUfOP2Oy.js";import"./ListKeyboardDelegate-Cd18ptaN.js";import"./PressResponder-CwsbJqYe.js";import"./useLocalizedStringFormatter-FToakcQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RKI4vDG-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BoTcuaXb.js";import"./Button-bhz0d5b_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9wBWCji.js";import"./createLucideIcon-DnI-ftFI.js";import"./x-DzdEbKW-.js";import"./Heading-Z24TZx0I.js";import"./info-DDIYqxGr.js";import"./Popover-wobZ9HHk.js";import"./useFormValidation-C3JGr8K4.js";import"./useField-C4i4gm-f.js";import"./Form-DTFKHJWV.js";import"./check-D5ZdhC_y.js";import"./useToggleState-C4Fu6x2J.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
