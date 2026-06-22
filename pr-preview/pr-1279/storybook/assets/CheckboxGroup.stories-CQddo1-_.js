import{j as e}from"./iframe-BdqauXPx.js";import{C as m}from"./CheckboxGroup-YU4b02BH.js";import{C as p}from"./Checkbox-D_TaEQOj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DGaJEWvC.js";import"./utils-TjQiWSfv.js";import"./clsx-B-dksMZM.js";import"./Text-BL07whN_.js";import"./useFocusRing-Djhyctp1.js";import"./index-D26i6JtP.js";import"./index-Ce5gVXXA.js";import"./clsx-Ciqy0D92.js";import"./Text-Cb3R__HW.js";import"./Label-DCSqFwNN.js";import"./Button-BdENfSlN.js";import"./Hidden-D68chLs-.js";import"./useLabel-MUMZQ-th.js";import"./useLabels-BB2v9ziq.js";import"./useButton-C2K4Azrm.js";import"./Dialog-Cb0whWoD.js";import"./RSPContexts-DWJwZTPK.js";import"./OverlayArrow-FJZRRUyJ.js";import"./useResizeObserver-RW1CuN27.js";import"./useControlledState-BqbfbBFv.js";import"./Collection-JvjnwjmG.js";import"./index-BS8HcPx6.js";import"./Separator-DFeV47hE.js";import"./SelectionManager-C6Y-w3s-.js";import"./useEvent-DExcb2G1.js";import"./scrollIntoView-jrzWWzlM.js";import"./SelectionIndicator-DT1mAUJL.js";import"./useDescription-t_eySs42.js";import"./ListKeyboardDelegate-BhDiJ6PN.js";import"./PressResponder-TOh589vR.js";import"./useLocalizedStringFormatter-BItpsgj9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3uQY02MS.js";import"./getScrollParent-H79fyDJz.js";import"./VisuallyHidden-d4YRXwAI.js";import"./ModalOverlay-BxhYsu4X.js";import"./x-CmpCUEVG.js";import"./createLucideIcon-BaaLPnxs.js";import"./useLocalizedStringFormatter-D8pBRmub.js";import"./Heading-KnoXvYNa.js";import"./Button-lQ7FTiYx.js";import"./Button.module-BB7N-cLd.js";import"./info-C_WL5t3o.js";import"./Popover-Cn8zo7bE.js";import"./Form-Bsw9pKS8.js";import"./useField-C7HioUHP.js";import"./check-DX4_yozZ.js";import"./useToggleState-BjvLjD6y.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
