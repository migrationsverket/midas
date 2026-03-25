import{j as e}from"./iframe-CvP1jW3H.js";import{C as m}from"./CheckboxGroup-C6i2AiDe.js";import{C as p}from"./Checkbox-BIu-LAJj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-nU5bP6xe.js";import"./utils-JtInM6A8.js";import"./clsx-B-dksMZM.js";import"./Text-vBZSXrPV.js";import"./useFocusRing-CbbdQhlq.js";import"./index-DfJv0pAU.js";import"./index-yjciiip6.js";import"./clsx-Ciqy0D92.js";import"./Text-DvtHA-H_.js";import"./Label-RRUO7qbv.js";import"./Button-DxNv6VEa.js";import"./Hidden-JUleaqc2.js";import"./useLabels-CkliYhxT.js";import"./useButton-B7hEU-Yu.js";import"./Dialog-BBXHog38.js";import"./RSPContexts-y85Y3Ar7.js";import"./OverlayArrow-BKgjbxIs.js";import"./useResizeObserver-BiaSXPKT.js";import"./useControlledState-JSgnBBPW.js";import"./Collection-ChyF6Ibn.js";import"./index-C3fTgA_v.js";import"./Separator-gECTzvov.js";import"./SelectionManager-DijnHxKd.js";import"./useEvent-D_9UE99K.js";import"./scrollIntoView-DRuWzNUG.js";import"./SelectionIndicator-9xjHaAPC.js";import"./useDescription-DcTuAIR2.js";import"./ListKeyboardDelegate-CHiB5u_C.js";import"./PressResponder-CwiTa36h.js";import"./useLocalizedStringFormatter-XI0I9Ge3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bak8Kcbf.js";import"./getScrollParent-Djq9HB-Y.js";import"./VisuallyHidden-DKHlsSRZ.js";import"./x-Cq96u2iw.js";import"./createLucideIcon-CmBW2oBj.js";import"./useLocalizedStringFormatter-DZiVR27P.js";import"./Heading-Bfi4jB_Y.js";import"./Button-DsV2n0cy.js";import"./Button.module-BB7N-cLd.js";import"./info-Cnl4ig7D.js";import"./Popover-Cpo8kF2O.js";import"./Form-l6bgYXBG.js";import"./useField-BwjqvGp1.js";import"./check-ozsrqIH3.js";import"./useToggleState-Bjt2nvdz.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
