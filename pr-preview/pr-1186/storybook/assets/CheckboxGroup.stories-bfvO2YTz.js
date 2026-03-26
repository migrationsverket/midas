import{j as e}from"./iframe-Cd0-ZcsP.js";import{C as m}from"./CheckboxGroup-DjW9GfEr.js";import{C as p}from"./Checkbox-fSIDsRSp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-1WFTuS_h.js";import"./utils-DhqpUTpA.js";import"./clsx-B-dksMZM.js";import"./Text-DyAmcS7z.js";import"./useFocusRing-Dfp5Gp4o.js";import"./index-XNSo-VEo.js";import"./index-BlnPzFGx.js";import"./clsx-Ciqy0D92.js";import"./Text-Cw2Ugvgy.js";import"./Label-y34cB3S2.js";import"./Button-7ELWuSQK.js";import"./Hidden-CPmKijlW.js";import"./useLabel-CHdvqMmQ.js";import"./useLabels-CPU9M7Hc.js";import"./useButton-DbIDawdA.js";import"./Dialog-Dm_HNmSp.js";import"./RSPContexts-Co104av2.js";import"./OverlayArrow-DbA-HCij.js";import"./useResizeObserver-nwglBFgU.js";import"./useControlledState-d4JhcqA_.js";import"./Collection-5Ew_XIc7.js";import"./index-D_ztscsY.js";import"./Separator-DLASD0-O.js";import"./SelectionManager-B0xhOmDq.js";import"./useEvent-sNCkpNtj.js";import"./scrollIntoView-CK4U69Q7.js";import"./SelectionIndicator-CllVl-sk.js";import"./useDescription-D_MdrsUa.js";import"./ListKeyboardDelegate-D6mn5I9l.js";import"./PressResponder-wi7FpCNV.js";import"./useLocalizedStringFormatter-eRJpNzx7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CqfiVXdi.js";import"./getScrollParent-CsyNiD_a.js";import"./VisuallyHidden-DUU_0XCx.js";import"./x-DC2j07Yv.js";import"./createLucideIcon-BVwfSxcn.js";import"./useLocalizedStringFormatter-DOvNyG8w.js";import"./Heading-BHM2v0MZ.js";import"./Button-pofFgtnZ.js";import"./Button.module-BB7N-cLd.js";import"./info-CbLEtK7R.js";import"./Popover-LBwUyR0J.js";import"./Form-CVMbYt33.js";import"./useField-DAxwXtOh.js";import"./check-p29FIlB4.js";import"./useToggleState-Dzx0_ers.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
