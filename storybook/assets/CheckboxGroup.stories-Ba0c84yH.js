import{j as e}from"./iframe-c0NZLqxB.js";import{C as m}from"./CheckboxGroup-DLv9UTvx.js";import{C as p}from"./Checkbox-QMnW5x9N.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DmTPwkC8.js";import"./utils-BKgH2Y_x.js";import"./clsx-B-dksMZM.js";import"./Text-INM5RJTT.js";import"./useFocusRing-Cj5nDXBG.js";import"./index-BMKVxsa8.js";import"./index-CyIR4htQ.js";import"./clsx-Ciqy0D92.js";import"./Text-CHKa0TSz.js";import"./Label-D8DcW-YG.js";import"./Button-C5Y3_RdN.js";import"./Hidden-W2Z4Qx3q.js";import"./useLabels-CZwsnZ3A.js";import"./useButton-Cfwxxq9B.js";import"./Dialog-C4-3I7SW.js";import"./RSPContexts-RKVSLPs0.js";import"./OverlayArrow-DgFHMrZW.js";import"./useResizeObserver-CvoDWgrg.js";import"./useControlledState-BjKcVj6X.js";import"./Collection-pg0lVI6R.js";import"./index-BCNfX8V_.js";import"./Separator-DYLbZp0J.js";import"./SelectionManager-BxRgTcFy.js";import"./useEvent-DhmWtasD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DCSorE7A.js";import"./useDescription-Db-kOIhF.js";import"./ListKeyboardDelegate-BFnCDYdf.js";import"./PressResponder-BPdxsn-v.js";import"./useLocalizedStringFormatter-Dj8f67Lw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzA2sUHz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-fZjjLnAV.js";import"./Button-DIihlZQ1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXAkg84e.js";import"./createLucideIcon-D4UmvVly.js";import"./x-dOsKZ8lh.js";import"./Heading-RVoXat7V.js";import"./info-B6zLByNN.js";import"./Popover-ChR2CB9A.js";import"./useFormValidation-ByN0j24V.js";import"./useField-DuMvas_e.js";import"./Form-CuG83Arz.js";import"./check-D-Wilsb4.js";import"./useToggleState-DOpAkxiL.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
