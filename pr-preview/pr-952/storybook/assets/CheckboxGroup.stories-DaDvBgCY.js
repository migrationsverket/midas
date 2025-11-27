import{j as e}from"./iframe-WZjYUZug.js";import{C as m}from"./CheckboxGroup-BVJfQtlc.js";import{C as p}from"./Checkbox-BInWxc2X.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-8QYALo9Q.js";import"./utils-41IgFTt3.js";import"./clsx-B-dksMZM.js";import"./Text-CD5L3NGu.js";import"./useFocusRing-BhLet_pE.js";import"./index-DE2S3xCs.js";import"./index-bZw2_QEe.js";import"./clsx-Ciqy0D92.js";import"./Text-CbC6PGTn.js";import"./Label-B8z2bN0U.js";import"./Button-ELQey9_7.js";import"./Hidden-DM5r5VXO.js";import"./useLabels-Db4OJvCS.js";import"./useButton-DnSOK5iD.js";import"./Dialog-CO7lnnxU.js";import"./RSPContexts-BeSw2lJx.js";import"./OverlayArrow-KtlUpSfm.js";import"./useResizeObserver-Cb48ibZ7.js";import"./useControlledState-Dmj__v8P.js";import"./Collection-DogVQ-m1.js";import"./index-Brnm5fDl.js";import"./Separator-Z1h7D3F8.js";import"./SelectionManager-CmoSNFsK.js";import"./useEvent-zWCVMw-y.js";import"./scrollIntoView-CfUOfy0t.js";import"./SelectionIndicator-C6Cfr3z4.js";import"./useDescription-DmU-x1Sy.js";import"./ListKeyboardDelegate-BJUOpd50.js";import"./PressResponder-BAsdqq2D.js";import"./useLocalizedStringFormatter-BzhYOgrj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BrRm6VkK.js";import"./VisuallyHidden-y2k8W_sW.js";import"./Button-CADr4mbo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BxtrdjQp.js";import"./createLucideIcon-7p7juL6_.js";import"./x-Cv2ylPsy.js";import"./Heading-DM4-bJBc.js";import"./info-tyKdpEBP.js";import"./Popover--Ji-kmTf.js";import"./useFormValidation-DSN2a0x4.js";import"./useField-ChkA15T1.js";import"./Form-58Avexl9.js";import"./check-Bo4Jcwdf.js";import"./useToggleState-DYoF7EmK.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
