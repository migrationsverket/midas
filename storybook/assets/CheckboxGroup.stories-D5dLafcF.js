import{j as e}from"./iframe-f7w4ng_k.js";import{C as m}from"./CheckboxGroup-wmN1f4Ut.js";import{C as p}from"./Checkbox-V_0Hk-ks.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CSW0NKF8.js";import"./utils-CsngUmKh.js";import"./clsx-B-dksMZM.js";import"./Text-DxL6Rji7.js";import"./useFocusRing-D2_28YrY.js";import"./index-BPHMLxna.js";import"./index-AUNQREmD.js";import"./clsx-Ciqy0D92.js";import"./Text-KyyKZpMF.js";import"./Label-7RGnAXjp.js";import"./Button-Cc-TNn9L.js";import"./Hidden-CTte53jM.js";import"./useLabels-C80eq718.js";import"./useButton-D4PZb1F-.js";import"./Dialog-BRU9u9Wh.js";import"./RSPContexts-B8g52CrK.js";import"./OverlayArrow-D1HxMZWG.js";import"./useResizeObserver-CFNpAzLe.js";import"./useControlledState-HdtZioBu.js";import"./Collection-DrdDzDeL.js";import"./index-gUPZ6ud7.js";import"./Separator-ZDxrAl7P.js";import"./SelectionManager-CKpI-EM2.js";import"./useEvent-CYtWltky.js";import"./scrollIntoView-BbkBiiSm.js";import"./SelectionIndicator-CJWR_V4T.js";import"./useDescription-s0qvynA_.js";import"./ListKeyboardDelegate-B3ktNGKK.js";import"./PressResponder-B-imVtyL.js";import"./useLocalizedStringFormatter-Cul2dCid.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQeprfcc.js";import"./getScrollParent-RY3Tj0rv.js";import"./VisuallyHidden-C0OILqoq.js";import"./x--g3_ok1a.js";import"./createLucideIcon-BKDiJvQY.js";import"./useLocalizedStringFormatter-BW0f4aMp.js";import"./Heading-Dw8tjQVL.js";import"./Button-DjmPZJ5Y.js";import"./Button.module-BB7N-cLd.js";import"./info-B49eaUag.js";import"./Popover-DEjwl-hQ.js";import"./Form-B1Ks0hwY.js";import"./useField-BdJOpr4_.js";import"./check-S7h6HYsC.js";import"./useToggleState-CXuL6Xj-.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
