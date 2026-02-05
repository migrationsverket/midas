import{j as e}from"./iframe-BJhw2N0g.js";import{C as m}from"./CheckboxGroup-op2qSrdY.js";import{C as p}from"./Checkbox-Lm45NenJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C8pmpL6w.js";import"./utils-RbG-Aia_.js";import"./clsx-B-dksMZM.js";import"./Text-DyuufO01.js";import"./useFocusRing-BW39cesy.js";import"./index-EmEFlqRi.js";import"./index-Dqq__9iy.js";import"./clsx-Ciqy0D92.js";import"./Text-CXHx80oD.js";import"./Label-DratL8iu.js";import"./Button-BdMf96yr.js";import"./Hidden-BnfcrX-c.js";import"./useLabels-CV-btu-r.js";import"./useButton-C__A5Pf3.js";import"./Dialog-qP5GGgcy.js";import"./RSPContexts-BF5tUZC_.js";import"./OverlayArrow-Bh8ocjNM.js";import"./useResizeObserver-CJIXI4e9.js";import"./useControlledState-LSwz2R3F.js";import"./Collection-CX5nJlp4.js";import"./index-H1ZMf6bK.js";import"./Separator-JPLEng4f.js";import"./SelectionManager-CrUJtpFM.js";import"./useEvent-C-emn93v.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY1Vs4zO.js";import"./useDescription-AGbylvSE.js";import"./ListKeyboardDelegate-D2n4TjCs.js";import"./PressResponder-0v3TlHho.js";import"./useLocalizedStringFormatter-Cl7mz5Qk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ByC3znn_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-72ICTt_i.js";import"./Button-DiHVVB0y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-0P1BRXD7.js";import"./createLucideIcon-IeDQBETZ.js";import"./x-BxZ4QCx-.js";import"./Heading-uv8eZZPp.js";import"./info-B4dlDAXD.js";import"./Popover-Bd6VQejF.js";import"./useFormValidation-DbGg4kwf.js";import"./useField-Dv7DXL3_.js";import"./Form-DCLpShRY.js";import"./check-CEDiim9d.js";import"./useToggleState-CpYxY5Oo.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
