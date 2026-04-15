import{j as e}from"./iframe-BQ0rH5Sa.js";import{C as m}from"./CheckboxGroup-zEZ2T1WJ.js";import{C as p}from"./Checkbox-q3i5cFms.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DF9g5RSV.js";import"./utils-BbCSG2Ds.js";import"./clsx-B-dksMZM.js";import"./Text-Uu1ScPl1.js";import"./useFocusRing-CUcWLsdz.js";import"./index-BRzOPMdu.js";import"./index-B9nWUi91.js";import"./clsx-Ciqy0D92.js";import"./Text-rQ7Pcap6.js";import"./Label-CEcwAWdk.js";import"./Button-BWU_U6pL.js";import"./Hidden-B903bi5e.js";import"./useLabel-G48bLjJ4.js";import"./useLabels-Btdu3CAb.js";import"./useButton-D_NyLkoF.js";import"./Dialog-DyTiNzWr.js";import"./RSPContexts-DXFVYlMo.js";import"./OverlayArrow-DmOeEDl-.js";import"./useResizeObserver-dQOF5v6o.js";import"./useControlledState-Bj7Wg3w8.js";import"./Collection-DElV5k5j.js";import"./index-BgWuFVSf.js";import"./Separator-CjgADAso.js";import"./SelectionManager-DgEIU_G2.js";import"./useEvent-CV3GCwBx.js";import"./scrollIntoView-BZLVH2bl.js";import"./SelectionIndicator-CR-oyooM.js";import"./useDescription-n70PdxFN.js";import"./ListKeyboardDelegate-NXm3dSJr.js";import"./PressResponder-DlymkY53.js";import"./useLocalizedStringFormatter-yem2oIc6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDQMmawh.js";import"./getScrollParent-DbuXa8OY.js";import"./VisuallyHidden-PaW3vCB4.js";import"./ModalOverlay-Dzl52ksE.js";import"./x-DW52Hs4o.js";import"./createLucideIcon-CmTdOvE9.js";import"./useLocalizedStringFormatter-87HHeiEB.js";import"./Heading-CLHofvwk.js";import"./Button-xgeMudhK.js";import"./Button.module-BB7N-cLd.js";import"./info-CVVa66bd.js";import"./Popover-DSfuVx7p.js";import"./Form-CmjcdI7v.js";import"./useField-CrN0JmcK.js";import"./check-CTVrwqq6.js";import"./useToggleState-BgKeYsOt.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
