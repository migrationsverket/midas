import{j as e}from"./iframe-Cod1JNFG.js";import{C as m}from"./CheckboxGroup-GIY2RiC7.js";import{C as p}from"./Checkbox-BGJTD6a-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-y5my5p3j.js";import"./utils-RnFRVAvs.js";import"./clsx-B-dksMZM.js";import"./Text-Dho6KfK4.js";import"./useFocusRing-BTBrbXYF.js";import"./index-B6aKl88f.js";import"./index-CYSTLAu0.js";import"./clsx-Ciqy0D92.js";import"./Text-DYp5dFw4.js";import"./Label-BrnzOcVz.js";import"./Button-DShIviGh.js";import"./Hidden-DSAoUHUZ.js";import"./useLabel-BYcG1Feb.js";import"./useLabels-Bj-Yy0gt.js";import"./useButton-CewAlskq.js";import"./Dialog-Nc4IiW3G.js";import"./RSPContexts-CGf9i1Cx.js";import"./OverlayArrow-bqNE3J8v.js";import"./useResizeObserver-DcWPmTVh.js";import"./useControlledState-7bsBW9ME.js";import"./Collection-BfmwTdnM.js";import"./index-RfRuf2QY.js";import"./Separator-BMWlUUWn.js";import"./SelectionManager-9t0DIfr5.js";import"./useEvent-BoihJK-v.js";import"./scrollIntoView-BPV88qUk.js";import"./SelectionIndicator-BUB2tGdl.js";import"./useDescription-BW-G7pZE.js";import"./ListKeyboardDelegate-QCwOMow_.js";import"./PressResponder-BBsSKN2P.js";import"./useLocalizedStringFormatter-BGVJ3s-K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Fwdv0CMl.js";import"./getScrollParent-4D2uxju0.js";import"./VisuallyHidden-B_oZwuHi.js";import"./x-A2fBJB1S.js";import"./createLucideIcon-iT6Y2Uaa.js";import"./useLocalizedStringFormatter-BASSYTlJ.js";import"./Heading-CGn3WAQ2.js";import"./Button-Bv7kxC8o.js";import"./Button.module-BB7N-cLd.js";import"./info-xUXU52lg.js";import"./Popover-CDeGAW_D.js";import"./Form-BAeHCcmu.js";import"./useField-CWDFgyK4.js";import"./check-CmaQK6Ty.js";import"./useToggleState-x_3l2NUN.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
