import{j as e}from"./iframe-DG7j_jog.js";import{C as m}from"./CheckboxGroup-PLwwZIV2.js";import{C as p}from"./Checkbox-fZLPiyq_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Jed7qGAw.js";import"./utils-DlqTy2YG.js";import"./clsx-B-dksMZM.js";import"./Text-qxRWFYP_.js";import"./useFocusRing-CVU8iu1p.js";import"./index-D_RAWMYY.js";import"./index-6UXGLZBQ.js";import"./clsx-Ciqy0D92.js";import"./Text-BYthEMg3.js";import"./Label-JaBUqnAH.js";import"./Button-BXZJnhMA.js";import"./Hidden-C_hvN9In.js";import"./useLabel-C_5Blhsu.js";import"./useLabels-DqxGA6IW.js";import"./useButton-CBCUfkJC.js";import"./Dialog-DkQl_2bT.js";import"./RSPContexts-Dpj1kihF.js";import"./OverlayArrow-CqUKnp_Z.js";import"./useResizeObserver-C92Nd9go.js";import"./useControlledState-D0o-1ht4.js";import"./Collection-BUv_wNfi.js";import"./index-DyWbixMj.js";import"./Separator-CJz_cOZy.js";import"./SelectionManager-DqpIm14G.js";import"./useEvent-DfWqyckn.js";import"./scrollIntoView-BjyHJlah.js";import"./SelectionIndicator-BfpTMdkJ.js";import"./useDescription-C3vr3r7Y.js";import"./ListKeyboardDelegate-CIjDbHgv.js";import"./PressResponder-Bk9-BZgU.js";import"./useLocalizedStringFormatter-Cy6w6_S0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGtZYYLT.js";import"./getScrollParent-BNyZCVqh.js";import"./VisuallyHidden-DFIbjjfa.js";import"./ModalOverlay-Cyy6m_E0.js";import"./x-XMY5sYEL.js";import"./createLucideIcon-DciogvgI.js";import"./useLocalizedStringFormatter-C5OlVKSb.js";import"./Heading-Vv9pEtkq.js";import"./Button-KUvfLJ-A.js";import"./Button.module-BB7N-cLd.js";import"./info-GQ5NDJzH.js";import"./Popover-cNXYhacS.js";import"./Form-D8vhhRij.js";import"./useField-NmEqGXbM.js";import"./check-Dj3ll4xw.js";import"./useToggleState-CzZ6s7RW.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
