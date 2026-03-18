import{j as e}from"./iframe-TiTRU3BL.js";import{C as m}from"./CheckboxGroup-RX1saDCZ.js";import{C as p}from"./Checkbox-7c0thlDP.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Db_dX9Wa.js";import"./utils-C9MqlSp2.js";import"./clsx-B-dksMZM.js";import"./Text-BHbOdxoE.js";import"./useFocusRing-dtBjt7J0.js";import"./index-B_qfMS5p.js";import"./index-B3QYGaBR.js";import"./clsx-Ciqy0D92.js";import"./Text-CNXxeonm.js";import"./Label-B4kBtHZY.js";import"./Button-D1pF9L05.js";import"./Hidden-oj9BLOe9.js";import"./useLabels-CfZHg_n5.js";import"./useButton-P0duEZAc.js";import"./Dialog-D_HeaERm.js";import"./RSPContexts-ByDZeKU9.js";import"./OverlayArrow-D38NPX59.js";import"./useResizeObserver-_n0TiEZH.js";import"./useControlledState-L72g7_5f.js";import"./Collection-CS7C6DmN.js";import"./index-nhPrKmvq.js";import"./Separator-dwDOr2kY.js";import"./SelectionManager-CY4JiqN1.js";import"./useEvent-YyEIKRGW.js";import"./scrollIntoView-DVlMW1h6.js";import"./SelectionIndicator-BB0oS2TY.js";import"./useDescription-C6zFetVQ.js";import"./ListKeyboardDelegate-C2tXzQP2.js";import"./PressResponder-CJQejyfg.js";import"./useLocalizedStringFormatter-BNlFtQ2R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3SZqYUGV.js";import"./getScrollParent-Lft_6uIw.js";import"./VisuallyHidden-BpqMk6oy.js";import"./x-Bakj2uHV.js";import"./createLucideIcon-BH4SiISs.js";import"./useLocalizedStringFormatter-BuTIbiUS.js";import"./Heading-CKFwtyMM.js";import"./Button-uSTshioy.js";import"./Button.module-BB7N-cLd.js";import"./info-C5UQHz59.js";import"./Popover-BjUckbNv.js";import"./useFormValidation-IRKpcm5-.js";import"./useField-Dlg194Hm.js";import"./Form-B7tgjL8C.js";import"./check-BJgeEJtf.js";import"./useToggleState-e3bRLyOO.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
