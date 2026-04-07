import{j as e}from"./iframe-oKPevWaY.js";import{C as m}from"./CheckboxGroup-4Q0pi0C1.js";import{C as p}from"./Checkbox-D4TYbEoW.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B9nT_kkA.js";import"./utils-BqjuQA51.js";import"./clsx-B-dksMZM.js";import"./Text-NuhHAO3F.js";import"./useFocusRing-BNAmj3ga.js";import"./index-C5PKnBSq.js";import"./index-DgJJn68D.js";import"./clsx-Ciqy0D92.js";import"./Text-CEmixCfV.js";import"./Label-Brw2JrKu.js";import"./Button-UMnKvlHB.js";import"./Hidden-DpO7vPy1.js";import"./useLabel-DD_tHSVp.js";import"./useLabels-Dudi4a5M.js";import"./useButton-BQzjyOJs.js";import"./Dialog-BzgqjoUu.js";import"./RSPContexts-I8GuPoNW.js";import"./OverlayArrow-DvjZHb9S.js";import"./useResizeObserver-MEdL5GdH.js";import"./useControlledState-CyVhgPro.js";import"./Collection-CkdTzR9R.js";import"./index-CzQfmgnt.js";import"./Separator-C-f_gDjQ.js";import"./SelectionManager-CDyUNFjs.js";import"./useEvent-IXAyeg2x.js";import"./scrollIntoView-B_u9uatn.js";import"./SelectionIndicator-lk-xC_bn.js";import"./useDescription-Ya8G2xdV.js";import"./ListKeyboardDelegate-i-dcu7Zi.js";import"./PressResponder-Cml_sTZq.js";import"./useLocalizedStringFormatter-Ds6Qg8Ar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rH8nux2W.js";import"./getScrollParent-B4qiDCOv.js";import"./VisuallyHidden-D5YwBUcA.js";import"./x-DIFCquM7.js";import"./createLucideIcon-D_CPhcXk.js";import"./useLocalizedStringFormatter-C0pOBFKJ.js";import"./Heading-CAvfyWoD.js";import"./Button-BPGT5-63.js";import"./Button.module-BB7N-cLd.js";import"./info-DiXhKcAi.js";import"./Popover-DUzKO22e.js";import"./Form-D8hKIz8A.js";import"./useField-Bl_GZwWa.js";import"./check-BZoVZ7-0.js";import"./useToggleState-DcrfUPyt.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
