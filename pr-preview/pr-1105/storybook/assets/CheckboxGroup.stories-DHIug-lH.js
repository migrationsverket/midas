import{j as e}from"./iframe-B5zOBWL8.js";import{C as m}from"./CheckboxGroup-CvclrhS3.js";import{C as p}from"./Checkbox-DHxmTUsF.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C872MoeY.js";import"./utils-eNYL6jem.js";import"./clsx-B-dksMZM.js";import"./Text-CneoSpSV.js";import"./useFocusRing-BLNWzzDa.js";import"./index-BUSmP6HV.js";import"./index-DCfNYjYD.js";import"./clsx-Ciqy0D92.js";import"./Text-2qPPhaNY.js";import"./Label-Diy86N3f.js";import"./Button-Cr4v4jCk.js";import"./Hidden-BfTCrLpu.js";import"./useLabels-BojerJy7.js";import"./useButton-BuCB7CsM.js";import"./Dialog-5htlTT34.js";import"./RSPContexts-DY0llAGa.js";import"./OverlayArrow-BOk6b71y.js";import"./useResizeObserver-DqNUo1ux.js";import"./useControlledState-GuUpKA2D.js";import"./Collection-CPa-JUly.js";import"./index-DTZHqRxA.js";import"./Separator-BGsqUNXh.js";import"./SelectionManager-Bb4M-VHn.js";import"./useEvent-CkQwjY1M.js";import"./scrollIntoView-DWtQnOyb.js";import"./SelectionIndicator-CSf-4huf.js";import"./useDescription-Cf4XGtE7.js";import"./ListKeyboardDelegate-CyqzOeGx.js";import"./PressResponder-DPU8izkm.js";import"./useLocalizedStringFormatter-Cgkn5RBi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-wL6M68rN.js";import"./getScrollParent-DhsKx92u.js";import"./VisuallyHidden-BwEmyPT5.js";import"./x-BaI04LZc.js";import"./createLucideIcon-BVioREcM.js";import"./useLocalizedStringFormatter-C9omsTZd.js";import"./Heading-B4kZX7AI.js";import"./Button-Ctf6p_Bv.js";import"./Button.module-D_C6WeTN.js";import"./info-D3pWUryL.js";import"./Popover-DmbJR2Aw.js";import"./Form-IH-oloZ9.js";import"./useField-RVLo8JgM.js";import"./check-CymmT4RF.js";import"./useToggleState-xJt6SaQb.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
