import{j as e}from"./iframe-Br4UFWDA.js";import{C as m}from"./CheckboxGroup-C8YypAXq.js";import{C as p}from"./Checkbox-BOzD4MTa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ClRId_ZV.js";import"./utils-Bfs2iwu7.js";import"./clsx-B-dksMZM.js";import"./Text-DBKCtpuc.js";import"./useFocusRing-DmF-1uRF.js";import"./index-B5OjJHm8.js";import"./index-BLvyQ4Zy.js";import"./clsx-Ciqy0D92.js";import"./Text-C3N7Tmxi.js";import"./Label-CedpPifA.js";import"./Button-DiwUVhQg.js";import"./Hidden-B2UqZyG9.js";import"./useLabel-PuL03Jmv.js";import"./useLabels-CD31_qda.js";import"./useButton-BuJxASXi.js";import"./Dialog-CyNnC-Ka.js";import"./RSPContexts-BSDVlP-T.js";import"./OverlayArrow-DZzInc2T.js";import"./useResizeObserver-DGStbqjM.js";import"./useControlledState-t0OgLn8n.js";import"./Collection-CwrKcnQr.js";import"./index-ZbV3ddxo.js";import"./Separator-B8ymp20-.js";import"./SelectionManager-cYfE24op.js";import"./useEvent-CVcdG4ON.js";import"./scrollIntoView-Imy71PHr.js";import"./SelectionIndicator-0Hsw6Cjh.js";import"./useDescription-DN-UTWji.js";import"./ListKeyboardDelegate-D2VxwZ3S.js";import"./PressResponder-CTUBZtBX.js";import"./useLocalizedStringFormatter-BYNBY8Ij.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-UMCMv2aH.js";import"./getScrollParent-BvBLI2ok.js";import"./VisuallyHidden-BnWQuQpu.js";import"./x-BCbyNW7r.js";import"./createLucideIcon-CSxAjQ3c.js";import"./useLocalizedStringFormatter-B9cG3ozx.js";import"./Heading-BDXKjMa8.js";import"./Button-B62uNfEE.js";import"./Button.module-BB7N-cLd.js";import"./info-CxKxuQ2z.js";import"./Popover-C-gxxcw5.js";import"./Form-CWMb433o.js";import"./useField-CFxXU3Kh.js";import"./check-C3oTWyCe.js";import"./useToggleState-D53W-noN.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
