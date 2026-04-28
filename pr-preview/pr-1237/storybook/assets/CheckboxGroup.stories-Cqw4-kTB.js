import{j as e}from"./iframe-4jp4gloH.js";import{C as m}from"./CheckboxGroup-kBBdUTU2.js";import{C as p}from"./Checkbox-pONn179C.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D-ucO46w.js";import"./utils-VVEWI3IK.js";import"./clsx-B-dksMZM.js";import"./Text-DKG8In0g.js";import"./useFocusRing-CHjnTN6p.js";import"./index-BZ8dxgHN.js";import"./index-Ba_IRaMO.js";import"./clsx-Ciqy0D92.js";import"./Text-CaWuTb4e.js";import"./Label-Bn89WDN5.js";import"./Button-BmPmOVkQ.js";import"./Hidden-uxp9aDmP.js";import"./useLabel-BAWcaNxa.js";import"./useLabels-BIxc1erV.js";import"./useButton-Cnbi6eSC.js";import"./Dialog-DRahsqTG.js";import"./RSPContexts-C_Tj-sgU.js";import"./OverlayArrow-DHc0EFKa.js";import"./useResizeObserver-C3Vw2coy.js";import"./useControlledState-C8OaseGF.js";import"./Collection-D6gGdmWj.js";import"./index-GU77QnNE.js";import"./Separator-C8wUcFi5.js";import"./SelectionManager-qtDdSSC6.js";import"./useEvent-BSjWwKyO.js";import"./scrollIntoView-LVymhG08.js";import"./SelectionIndicator-DERD32HY.js";import"./useDescription-Ca_N61mq.js";import"./ListKeyboardDelegate-BU755iyf.js";import"./PressResponder-BpN-lFO9.js";import"./useLocalizedStringFormatter-DPlQOnfn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZi5NauF.js";import"./getScrollParent-lyddzNLU.js";import"./VisuallyHidden-CwExooWt.js";import"./ModalOverlay-TllZkSy1.js";import"./x-C0TcUHvQ.js";import"./createLucideIcon-BGZ9Sagt.js";import"./useLocalizedStringFormatter-BH6_V3D9.js";import"./Heading-CE_cjqfz.js";import"./Button-CeMvvwss.js";import"./Button.module-BB7N-cLd.js";import"./info-Cg34k-x-.js";import"./Popover-BJTZb_ez.js";import"./Form-CIwvIR5N.js";import"./useField-C6NTEJ5-.js";import"./check--2MCwuKZ.js";import"./useToggleState-D7VvvSbM.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
