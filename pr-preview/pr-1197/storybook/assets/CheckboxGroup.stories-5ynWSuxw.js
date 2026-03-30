import{j as e}from"./iframe-DOVonus9.js";import{C as m}from"./CheckboxGroup-Kz3la2Fk.js";import{C as p}from"./Checkbox-FuHuz0Dm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B2DyCZVK.js";import"./utils-DhPCiJLe.js";import"./clsx-B-dksMZM.js";import"./Text-DFd043ah.js";import"./useFocusRing-DFqQelvs.js";import"./index-BXLzhsHf.js";import"./index-DynpYPKw.js";import"./clsx-Ciqy0D92.js";import"./Text-DX6xJkbU.js";import"./Label-Cn6YwaPb.js";import"./Button-Cz99NuPN.js";import"./Hidden-DMUfuflC.js";import"./useLabel-CFmo7f_1.js";import"./useLabels-DhmD3WfL.js";import"./useButton-DPc7CUXt.js";import"./Dialog-BRBTPND3.js";import"./RSPContexts-D5KAyYge.js";import"./OverlayArrow-BMwt-_W_.js";import"./useResizeObserver-Dtt_9W_T.js";import"./useControlledState-BPaR75DG.js";import"./Collection-CVMDa6-Z.js";import"./index-sXvwZxO2.js";import"./Separator-DRnungOr.js";import"./SelectionManager-T2xaAnck.js";import"./useEvent-Cvp587Nb.js";import"./scrollIntoView-BxQ_AVGt.js";import"./SelectionIndicator-QWLR05h-.js";import"./useDescription-B5o5KaGQ.js";import"./ListKeyboardDelegate-B3Lsr7h9.js";import"./PressResponder-LBvTNPtN.js";import"./useLocalizedStringFormatter-MwIKQJtH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DHfUSsMm.js";import"./getScrollParent-UWeFGnXQ.js";import"./VisuallyHidden-BveXVc2Y.js";import"./x-BOgOzpuz.js";import"./createLucideIcon-CfE47YAu.js";import"./useLocalizedStringFormatter-zR7_kec3.js";import"./Heading-DhCif57Z.js";import"./Button-BMOShfgc.js";import"./Button.module-BB7N-cLd.js";import"./info-CVtoHCuf.js";import"./Popover-BoxV4OyD.js";import"./Form-BdbgD7B8.js";import"./useField-D5iM5mrG.js";import"./check-FHI0VX2u.js";import"./useToggleState-Dsyxbbo5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
