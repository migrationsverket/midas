import{j as e}from"./iframe-Cnprf77l.js";import{C as m}from"./CheckboxGroup-Bq30pSsZ.js";import{C as p}from"./Checkbox-BxdtSAI-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-37LT6hKT.js";import"./utils-BAknv1n_.js";import"./clsx-B-dksMZM.js";import"./Text-TETOR_cU.js";import"./useFocusRing-BbKkuYRW.js";import"./index-D131wgQu.js";import"./index-DinabbhG.js";import"./clsx-Ciqy0D92.js";import"./Text-xSTWmp3z.js";import"./Label-C8e4TVpD.js";import"./Button-C9qpCnHp.js";import"./Hidden-CtzSMGYR.js";import"./useLabel-VHxyrYwA.js";import"./useLabels-D2bRDv09.js";import"./useButton-Dj6JkoG-.js";import"./Dialog-wVgdM1D8.js";import"./RSPContexts-Cw9ibUso.js";import"./OverlayArrow-Cs2wY2_M.js";import"./useResizeObserver-D5GP0DcY.js";import"./useControlledState-bPVMsSoD.js";import"./Collection-CHgzwYqU.js";import"./index-BQbG8Pt1.js";import"./Separator-Bzike5dI.js";import"./SelectionManager-DSTJ9RjU.js";import"./useEvent-CbxKKYwp.js";import"./scrollIntoView-DxnzOPwB.js";import"./SelectionIndicator-pvk1bIyk.js";import"./useDescription-1c_yFidr.js";import"./ListKeyboardDelegate-nnGUV4TF.js";import"./PressResponder-Cr0PcrMz.js";import"./useLocalizedStringFormatter-BM9Op5Of.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-vzqAmgyN.js";import"./getScrollParent-BJmogAva.js";import"./VisuallyHidden-O1yJF_LA.js";import"./x-Bh_dZ6M0.js";import"./createLucideIcon-BhAvpesv.js";import"./useLocalizedStringFormatter-TTFjkzUm.js";import"./Heading-BKZ1VG_K.js";import"./Button-CSDIchjo.js";import"./Button.module-BB7N-cLd.js";import"./info-BihsS57J.js";import"./Popover-7X5NAFrv.js";import"./Form-BO6ek__5.js";import"./useField-sgfdLoP0.js";import"./check-Bkw_KF2J.js";import"./useToggleState-CAstmiCJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
