import{j as e}from"./iframe--mmKoKlF.js";import{C as m}from"./CheckboxGroup-B-hfjFaS.js";import{C as p}from"./Checkbox-B1S8Gb0G.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DWqeJHep.js";import"./utils-Co0PR--s.js";import"./clsx-B-dksMZM.js";import"./Text-CHGY53Du.js";import"./useFocusRing-ElKf8bcK.js";import"./index-DlIPfWxH.js";import"./index-xyOEGRTy.js";import"./clsx-Ciqy0D92.js";import"./Text-CcHRZ_Ad.js";import"./Label-BvdJ_PVT.js";import"./Button-K9IUFIHc.js";import"./Hidden-DQTVfJps.js";import"./useLabels-C4a0JBZG.js";import"./useButton-DQXgnmsH.js";import"./Dialog-DsuLDIhD.js";import"./RSPContexts-DKKk_j71.js";import"./OverlayArrow-DYFMpSyG.js";import"./useResizeObserver-DQFCRLRb.js";import"./useControlledState-CQsF2XT8.js";import"./Collection-ClKUL4Xc.js";import"./index-DQVTQaJh.js";import"./Separator-Cbh_hhQM.js";import"./SelectionManager-BAuPHQF0.js";import"./useEvent-B3elpXMT.js";import"./scrollIntoView-CpXiwoWy.js";import"./SelectionIndicator-9X03VIX3.js";import"./useDescription-C1dzGSna.js";import"./ListKeyboardDelegate-CsPGxZ-G.js";import"./PressResponder-DVMy69UW.js";import"./useLocalizedStringFormatter-CvAW3YIB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-wkXY2yUz.js";import"./VisuallyHidden-7b4qEDFn.js";import"./Button-DFSRLbW3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C1Y7m_4-.js";import"./createLucideIcon-LTD4_Te-.js";import"./x-BUgJA5vH.js";import"./Heading-CYGpAeti.js";import"./info-D2Sb3MzX.js";import"./Popover-Kg3awBSz.js";import"./useFormValidation-onPnYTY4.js";import"./useField-cCn2FxJC.js";import"./Form-B-jKSIj2.js";import"./check-DPzdq8YJ.js";import"./useToggleState-BoeXAX2L.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
