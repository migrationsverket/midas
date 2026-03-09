import{j as e}from"./iframe-CZ4pIpgM.js";import{C as m}from"./CheckboxGroup-6ov-cKb4.js";import{C as p}from"./Checkbox-DFXAtT4Q.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CAfz9m6m.js";import"./utils-BKAqyTPp.js";import"./clsx-B-dksMZM.js";import"./Text-BQl4iJz3.js";import"./useFocusRing-CC14X5Ag.js";import"./index--Vrw-Eoy.js";import"./index-DhnAxJyh.js";import"./clsx-Ciqy0D92.js";import"./Text-DIdbWBzS.js";import"./Label-WybzUyEy.js";import"./Button-Bzfpb552.js";import"./Hidden-eVbRi0Ga.js";import"./useLabels-Cqjt9RJx.js";import"./useButton-BLx5WIcY.js";import"./Dialog-C47mvOO0.js";import"./RSPContexts-D88SRWR9.js";import"./OverlayArrow-BIs3oxR8.js";import"./useResizeObserver-L2UfQ-0J.js";import"./useControlledState-DloD9_PZ.js";import"./Collection-D0DooXtn.js";import"./index-A8oFdD54.js";import"./Separator-Dpi82mqi.js";import"./SelectionManager-Bpvam3Hj.js";import"./useEvent-D9H4FF1-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-6cVNcxEy.js";import"./useDescription-DpS_jdsI.js";import"./ListKeyboardDelegate-Bwq3uVzn.js";import"./PressResponder-C53ru_xZ.js";import"./useLocalizedStringFormatter-BPfhaoOQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGmPg04v.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6O2-97V.js";import"./Button-BsOyBqD3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-2rZubXmi.js";import"./createLucideIcon-NleWcVUk.js";import"./x-DkZopY_b.js";import"./Heading-Dw6nkjUr.js";import"./info-CcpyDMJ0.js";import"./Popover-DYRZwff5.js";import"./useFormValidation-B2pDzUXQ.js";import"./useField-3e9SwQn9.js";import"./Form-Ds7umKf_.js";import"./check-DdDRsr95.js";import"./useToggleState-BYCRmu5b.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
