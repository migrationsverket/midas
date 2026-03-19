import{j as e}from"./iframe-BMuIqf2U.js";import{C as m}from"./CheckboxGroup-CLJkkSc9.js";import{C as p}from"./Checkbox-pZklRRRF.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BYsndT3-.js";import"./utils-CzLgQND9.js";import"./clsx-B-dksMZM.js";import"./Text-CDpvKUAe.js";import"./useFocusRing-DrTSxcZR.js";import"./index-DrkjSw_E.js";import"./index-BzHeAC17.js";import"./clsx-Ciqy0D92.js";import"./Text-Yadq2hZ1.js";import"./Label-B-nvuAvF.js";import"./Button-DOK0QqgZ.js";import"./Hidden-D30GFtt0.js";import"./useLabels-DL2LM1pj.js";import"./useButton-BIdZHsA8.js";import"./Dialog-BaFMT-Vg.js";import"./RSPContexts-g3J5QWBf.js";import"./OverlayArrow-BNhHQiLo.js";import"./useResizeObserver-BGa8LNoM.js";import"./useControlledState-DRATP7Vg.js";import"./Collection-CiDwrQ8E.js";import"./index-BRC2iNSA.js";import"./Separator-9V7Ki1SC.js";import"./SelectionManager-C_GaywSa.js";import"./useEvent-Dau9qK9n.js";import"./scrollIntoView-CjK1TPSG.js";import"./SelectionIndicator-CGmI1Kc3.js";import"./useDescription-C7IYof9s.js";import"./ListKeyboardDelegate-0qm8FZcz.js";import"./PressResponder-BlYZm5Zf.js";import"./useLocalizedStringFormatter-hZHAja5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFDVl9Vw.js";import"./getScrollParent-DjDKJ7cH.js";import"./VisuallyHidden-BPe22ZQU.js";import"./x-BI9V4c-g.js";import"./createLucideIcon-CEUfukBy.js";import"./useLocalizedStringFormatter-W3lFtewy.js";import"./Heading-BRWOlel1.js";import"./Button-BsMPKC4Q.js";import"./Button.module-BB7N-cLd.js";import"./info-CgmjHY1k.js";import"./Popover-BmTw-2-L.js";import"./Form-AZXoGIRv.js";import"./useField-BVB_nZx5.js";import"./check-CUqhNvMn.js";import"./useToggleState-xiSYYfWE.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
