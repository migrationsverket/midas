import{j as e}from"./iframe-CGCgjv9i.js";import{C as m}from"./CheckboxGroup-DgndU_9C.js";import{C as p}from"./Checkbox-B3sjhyEc.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CYmT_Yg6.js";import"./utils-Bt4ULn4D.js";import"./clsx-B-dksMZM.js";import"./Text-B5CcvPLj.js";import"./useFocusRing-D80GeW3r.js";import"./index-C0YjKPb6.js";import"./index-Dk2Lms7e.js";import"./clsx-Ciqy0D92.js";import"./Text-D5VsxdHk.js";import"./Label-pZ0erGgL.js";import"./Button-DDw9f5Fw.js";import"./Hidden-FwR3hI3q.js";import"./useLabels-C5YCHpdk.js";import"./useButton-CcaDOEc-.js";import"./Dialog-w6fyAZYs.js";import"./RSPContexts-C8DbGMi8.js";import"./OverlayArrow-C1mYbCIQ.js";import"./useResizeObserver-D2p3HPEZ.js";import"./useControlledState-A_vx62at.js";import"./Collection-CbC4cqU2.js";import"./index-Bq5okO3u.js";import"./Separator-C28i74qJ.js";import"./SelectionManager-7gEgdiXz.js";import"./useEvent-CdkR1s3U.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcUdI5Qy.js";import"./useDescription-CSIGPEAb.js";import"./ListKeyboardDelegate-BWF_OYPr.js";import"./PressResponder-eqCzhHuh.js";import"./useLocalizedStringFormatter-Bxh_j9iW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lvx0w_LZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DbgfyS61.js";import"./Button-Bq4ZJtTu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9GGJqnK.js";import"./createLucideIcon-BDDJ7gBf.js";import"./x-D7cLG3R_.js";import"./Heading-wlIfGA30.js";import"./info-xzYdJSzV.js";import"./Popover-B6DtiT0c.js";import"./useFormValidation-DOK9HYJ-.js";import"./useField-CDL7KZ6F.js";import"./Form-C7bp-BQR.js";import"./check-9Ov9HVK9.js";import"./useToggleState-B_EWRY0J.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
