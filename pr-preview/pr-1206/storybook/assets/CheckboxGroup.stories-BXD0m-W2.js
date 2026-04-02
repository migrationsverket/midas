import{j as e}from"./iframe-CPZ4_d2q.js";import{C as m}from"./CheckboxGroup-CVFFKc6j.js";import{C as p}from"./Checkbox-3NqGxmjj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-rOuvG30X.js";import"./utils-DWW_dCIy.js";import"./clsx-B-dksMZM.js";import"./Text-C-nhapA_.js";import"./useFocusRing-d1kY_X2y.js";import"./index-BFKhD2nT.js";import"./index-DgF8N3uU.js";import"./clsx-Ciqy0D92.js";import"./Text-CxhoFnBV.js";import"./Label-D2m2QNEU.js";import"./Button-CXhapsAk.js";import"./Hidden-ddHOLGj0.js";import"./useLabel-D74j4qSK.js";import"./useLabels-DBtqpm2S.js";import"./useButton-BXpF8VVF.js";import"./Dialog-DdHx8S2w.js";import"./RSPContexts-CNU_cvLJ.js";import"./OverlayArrow-DPVhU9-q.js";import"./useResizeObserver-CEyuuEs6.js";import"./useControlledState-DiN_YqvG.js";import"./Collection-Fsz5o6xJ.js";import"./index-DBpEcHx7.js";import"./Separator-Bsl6T3fj.js";import"./SelectionManager-Tb8iyxQ5.js";import"./useEvent-Bz5nfpns.js";import"./scrollIntoView-DakIikjX.js";import"./SelectionIndicator-Chd1drg3.js";import"./useDescription-DY6oOuRz.js";import"./ListKeyboardDelegate-BtHFCYxu.js";import"./PressResponder-DRQhv0a8.js";import"./useLocalizedStringFormatter-DLx3xcdn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RJHByoGu.js";import"./getScrollParent-B7yWW-nR.js";import"./VisuallyHidden-D_2Qiydl.js";import"./x-_8u0d44F.js";import"./createLucideIcon-CHHQY25e.js";import"./useLocalizedStringFormatter-7dRGsYY4.js";import"./Heading-CCkMK4RX.js";import"./Button-hn_7_4-p.js";import"./Button.module-BB7N-cLd.js";import"./info-CvqlYfZm.js";import"./Popover-DfB-JRIR.js";import"./Form-D49Ri7OX.js";import"./useField-DjwAKZ9N.js";import"./check-Dx2V9mk7.js";import"./useToggleState-BgzLiZaz.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
