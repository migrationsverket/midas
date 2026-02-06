import{j as e}from"./iframe-Bu2zzzE-.js";import{C as m}from"./CheckboxGroup-mWN-gfqY.js";import{C as p}from"./Checkbox-CTviHg7C.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C-kLbmfj.js";import"./utils-D4qoxq6V.js";import"./clsx-B-dksMZM.js";import"./Text-CyZW-0MA.js";import"./useFocusRing-YWhjqEgC.js";import"./index-B4VLM8wj.js";import"./index-CLepp-yy.js";import"./clsx-Ciqy0D92.js";import"./Text-CbpLUl1P.js";import"./Label-DrW1IDND.js";import"./Button-S1cZ3oDo.js";import"./Hidden-B80qSbZA.js";import"./useLabels-CBl0gRZS.js";import"./useButton-D1KNfoAL.js";import"./Dialog-BEckTAmw.js";import"./RSPContexts-DghJNKta.js";import"./OverlayArrow-BDsNbTge.js";import"./useResizeObserver-d3X9sJcN.js";import"./useControlledState-DGpDrNxO.js";import"./Collection-CZk8itpW.js";import"./index-lgmsj2SM.js";import"./Separator-rJNtfHwJ.js";import"./SelectionManager-B1dioWQj.js";import"./useEvent-BM4aK4KA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DiW9jQwU.js";import"./useDescription-DN9USHD9.js";import"./ListKeyboardDelegate-2Wzj6kBl.js";import"./PressResponder-Ck7XRF-Q.js";import"./useLocalizedStringFormatter-Bgu754vE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CIZ16NRu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DvEZM9Lw.js";import"./Button-q_TKGLf8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dt6zB3aB.js";import"./createLucideIcon-DOjvHL5l.js";import"./x-dhS2SloF.js";import"./Heading-DmmunIUe.js";import"./info-D6UN05sj.js";import"./Popover-MYxmXvPm.js";import"./useFormValidation-CYLG9fgC.js";import"./useField-wWbyNm1N.js";import"./Form-BrEUFrti.js";import"./check-DZppye7Z.js";import"./useToggleState-D3W7VI4z.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
