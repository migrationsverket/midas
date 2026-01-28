import{j as e}from"./iframe-CQYEjdz_.js";import{C as m}from"./CheckboxGroup-CUJhWmyW.js";import{C as p}from"./Checkbox-D35ahYK3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DI5FZj2R.js";import"./utils-CsTu9ikS.js";import"./clsx-B-dksMZM.js";import"./Text-D3mzemNj.js";import"./useFocusRing-DlWhQp2A.js";import"./index-Vqw8ZxGg.js";import"./index-COoMP5iC.js";import"./clsx-Ciqy0D92.js";import"./Text-C9HsrLdv.js";import"./Label-CwePbPJo.js";import"./Button-CvToZ011.js";import"./Hidden-4CIPvtTu.js";import"./useLabels-h4L6WHo6.js";import"./useButton-BvkZHVI6.js";import"./Dialog-DAlZfEPF.js";import"./RSPContexts-CSrO3WzH.js";import"./OverlayArrow-B4ro6Pni.js";import"./useResizeObserver-BD123XaL.js";import"./useControlledState-08K4jq70.js";import"./Collection-BAUdRdO0.js";import"./index-Ca1-4qPN.js";import"./Separator-B4Jqf19c.js";import"./SelectionManager-DPVZxLwg.js";import"./useEvent-BdUP91sh.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-kTOIYhGF.js";import"./useDescription-CR3C3alu.js";import"./ListKeyboardDelegate-C62sOce2.js";import"./PressResponder-CFUlCqbp.js";import"./useLocalizedStringFormatter-D_GTQ1_w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-nxFZqJiI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CRBj22op.js";import"./Button-Cg9zZZ7J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Nl9tDDDD.js";import"./createLucideIcon-B-IrTLpd.js";import"./x-BbpD6m52.js";import"./Heading-Bj5hgxJD.js";import"./info-DjSzIBk8.js";import"./Popover-Cigo6uiU.js";import"./useFormValidation-CFo8G_qj.js";import"./useField-6eaY4RPJ.js";import"./Form-C3zHxAYs.js";import"./check-CgmrGzBx.js";import"./useToggleState-J4GUc0sY.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
