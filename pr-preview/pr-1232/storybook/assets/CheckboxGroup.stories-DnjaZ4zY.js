import{j as e}from"./iframe-b0nZhEJS.js";import{C as m}from"./CheckboxGroup-C6Yyan_x.js";import{C as p}from"./Checkbox-CbqlCbr8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CFDpOADY.js";import"./utils-Czy4cRiY.js";import"./clsx-B-dksMZM.js";import"./Text-CKTyuYl3.js";import"./useFocusRing-CFZ-IXl8.js";import"./index-DA1-9aBn.js";import"./index-DV7yp0R8.js";import"./clsx-Ciqy0D92.js";import"./Text-PpOivcva.js";import"./Label-Drh-gs1K.js";import"./Button-W8LmO0wX.js";import"./Hidden-CZ6waCzP.js";import"./useLabel-DnRB1mu0.js";import"./useLabels-D0XwDCFR.js";import"./useButton-CdJ6_dC8.js";import"./Dialog-Bgvt-Ohb.js";import"./RSPContexts-BwF7V3QB.js";import"./OverlayArrow-TISIefmd.js";import"./useResizeObserver-C9tbqStX.js";import"./useControlledState-s-wNeubv.js";import"./Collection-DnjoQvxt.js";import"./index-D6FvMNA4.js";import"./Separator-D-sB3bC9.js";import"./SelectionManager-_cFQFdJX.js";import"./useEvent-D9RmNfeT.js";import"./scrollIntoView-BA0MjwzP.js";import"./SelectionIndicator-B6azs_Wj.js";import"./useDescription-CGMez1fw.js";import"./ListKeyboardDelegate-Z109lLwT.js";import"./PressResponder-CFMuyrEs.js";import"./useLocalizedStringFormatter-C8ETTJnR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkbuoI5o.js";import"./getScrollParent-C1OYKDte.js";import"./VisuallyHidden-BU0juR5g.js";import"./ModalOverlay-CIKlr_28.js";import"./x-BKNFSSsH.js";import"./createLucideIcon-t4UVlQbW.js";import"./useLocalizedStringFormatter-B84UWKXC.js";import"./Heading-BHoXnOGe.js";import"./Button-BHZxE8mE.js";import"./Button.module-BB7N-cLd.js";import"./info-c9P-7NOY.js";import"./Popover-B5It236L.js";import"./Form-BYDskUyn.js";import"./useField-Bee8Za-k.js";import"./check-BG4OFa83.js";import"./useToggleState-DursVYwC.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
