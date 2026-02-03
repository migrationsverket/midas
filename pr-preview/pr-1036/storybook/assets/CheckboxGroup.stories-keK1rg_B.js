import{j as e}from"./iframe-CidOCZHB.js";import{C as m}from"./CheckboxGroup-BHcLCT7Q.js";import{C as p}from"./Checkbox-Dm0SbFSb.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DXanqLob.js";import"./utils-8aJjhqNc.js";import"./clsx-B-dksMZM.js";import"./Text-FUR3GSSr.js";import"./useFocusRing-B8BRQkLp.js";import"./index-BBVZX2NF.js";import"./index--plQHcpZ.js";import"./clsx-Ciqy0D92.js";import"./Text-DVNzE23j.js";import"./Label-CirEEOWV.js";import"./Button-DuriNJcC.js";import"./Hidden-CVjT_yJa.js";import"./useLabels-CL1SuhzR.js";import"./useButton-Bq1zX9NI.js";import"./Dialog-DTyPOrTy.js";import"./RSPContexts-BO4m8Pb5.js";import"./OverlayArrow-IvZGarNn.js";import"./useResizeObserver-C8P5Ug0h.js";import"./useControlledState-D0gzrqio.js";import"./Collection-wA-FRPUr.js";import"./index-BUoRUjYH.js";import"./Separator-BiE3Niqg.js";import"./SelectionManager-CtD_R6y9.js";import"./useEvent-BYzozCP5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BUwiPRdS.js";import"./useDescription-D7W5dV4U.js";import"./ListKeyboardDelegate-DhfROc2n.js";import"./PressResponder-CTaGb7d5.js";import"./useLocalizedStringFormatter-DaU6bXbA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Db94hMQW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-jV2krERt.js";import"./Button-DvQa6ahi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B0fC8SpF.js";import"./createLucideIcon-bGF3Re28.js";import"./x-CszgniqU.js";import"./Heading-Bqp8Sl6A.js";import"./info-DdnsDx3C.js";import"./Popover-WhtbtwZk.js";import"./useFormValidation-ndTLYSbE.js";import"./useField-BWNPjLgU.js";import"./Form-Bvf6FYQl.js";import"./check-DUZ_uE6E.js";import"./useToggleState-DU7xp9Jl.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
