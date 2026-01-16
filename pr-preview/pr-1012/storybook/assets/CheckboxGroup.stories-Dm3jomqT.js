import{j as e}from"./iframe-BqxXwJvW.js";import{C as m}from"./CheckboxGroup-CMskkkVb.js";import{C as p}from"./Checkbox-D16svwRh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BJ23uTJc.js";import"./utils-B-LUwfNM.js";import"./clsx-B-dksMZM.js";import"./Text-POKFtH9S.js";import"./useFocusRing-DRB9GHUu.js";import"./index-DaPmNw3z.js";import"./index-DnASvcrD.js";import"./clsx-Ciqy0D92.js";import"./Text-CN0Rba2k.js";import"./Label-U4M1Zv0j.js";import"./Button-C0pllIm8.js";import"./Hidden-Bzkr_wjp.js";import"./useLabels-DQzS7WhL.js";import"./useButton-Cj_RDJUs.js";import"./Dialog-bORBCgW2.js";import"./RSPContexts-B2PTEsUQ.js";import"./OverlayArrow-CCvd9rNx.js";import"./useResizeObserver-CEFin7z6.js";import"./useControlledState-DGI1N2va.js";import"./Collection-WRVPAV2J.js";import"./index-DSlMsjV2.js";import"./Separator-C0uBNAbQ.js";import"./SelectionManager-B8Rp-4Hs.js";import"./useEvent-BnnUnxNN.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-815jzngV.js";import"./useDescription-BoAi9bEV.js";import"./ListKeyboardDelegate-m7or5xuQ.js";import"./PressResponder-BMuPjytM.js";import"./useLocalizedStringFormatter-CfrYnOvZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_avnMiF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DQls1uVt.js";import"./Button-CY_lcceX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C4Z7JSsl.js";import"./createLucideIcon-DAQszgUd.js";import"./x-BelE39Lb.js";import"./Heading-DX1KZl86.js";import"./info-BGDq0Gmh.js";import"./Popover-Cq1Xp21Q.js";import"./useFormValidation-B5-yItUz.js";import"./useField-DwRopjyw.js";import"./Form-8dObOJRH.js";import"./check-BRqTaETN.js";import"./useToggleState-BkYrVx-b.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
