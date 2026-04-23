import{j as e}from"./iframe-9FvbyuW0.js";import{C as m}from"./CheckboxGroup-vmsZcozq.js";import{C as p}from"./Checkbox-oDxWrAhJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DXeE9aRb.js";import"./utils-DbV0Y6c3.js";import"./clsx-B-dksMZM.js";import"./Text-DiUsHtEy.js";import"./useFocusRing-Vad-IAyW.js";import"./index-C9gp0U3l.js";import"./index-D8SBrWSp.js";import"./clsx-Ciqy0D92.js";import"./Text-rctLJTJW.js";import"./Label-BCnHYHUz.js";import"./Button-C6F5UViI.js";import"./Hidden-DVuO0yGr.js";import"./useLabel-CJC3f4ic.js";import"./useLabels-oVESIWAy.js";import"./useButton-DveN6vhz.js";import"./Dialog-DpcokjtD.js";import"./RSPContexts--6FiGTU6.js";import"./OverlayArrow-DLBSeoRI.js";import"./useResizeObserver-BPk5j--a.js";import"./useControlledState-DTpS52De.js";import"./Collection-jHqWKKLK.js";import"./index-CygLUfk4.js";import"./Separator-BjFOZDkA.js";import"./SelectionManager-Bi6U6zzO.js";import"./useEvent-CbyPD6wK.js";import"./scrollIntoView-Cg5eRwi4.js";import"./SelectionIndicator-CSw75rQk.js";import"./useDescription-BGTuXDEN.js";import"./ListKeyboardDelegate-CMUv_TXp.js";import"./PressResponder-DGAC22GT.js";import"./useLocalizedStringFormatter-4mf_lvzF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPdj6FLI.js";import"./getScrollParent-L3WWZsSI.js";import"./VisuallyHidden-C2w5ZOiK.js";import"./ModalOverlay-DGTRQLvx.js";import"./x-DkE65F2h.js";import"./createLucideIcon-BM_MsqvO.js";import"./useLocalizedStringFormatter-V_sqhmlZ.js";import"./Heading-CQ5wBLPw.js";import"./Button-2CN5Xnme.js";import"./Button.module-BB7N-cLd.js";import"./info-BgeEpHk4.js";import"./Popover-DvoNYVBo.js";import"./Form-CxEXbquf.js";import"./useField-BA20b1Lr.js";import"./check-DX3HpAMu.js";import"./useToggleState-D7efnJJC.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
