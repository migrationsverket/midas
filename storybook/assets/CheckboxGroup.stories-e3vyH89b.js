import{j as e}from"./iframe-SOAudsoD.js";import{C as m}from"./CheckboxGroup-BSd3teJg.js";import{C as p}from"./Checkbox-D4gO3QIr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DfImaZQ8.js";import"./utils-CIsr0dbb.js";import"./clsx-B-dksMZM.js";import"./Text-BaMrJhkm.js";import"./useFocusRing-BAXSXuvY.js";import"./index-BD7D_b6m.js";import"./index-TydVMVST.js";import"./clsx-Ciqy0D92.js";import"./Text-BA3To6tW.js";import"./Label-amsZBz5N.js";import"./Button-D067fNNN.js";import"./Hidden-B1WT_Vdg.js";import"./useLabel-CkEKqqdX.js";import"./useLabels-CF8dmUib.js";import"./useButton-BQJi0Bnf.js";import"./Dialog-D9YwlY8K.js";import"./RSPContexts-CnPW4VcT.js";import"./OverlayArrow-C7-MqnuN.js";import"./useResizeObserver-C-NQjgqc.js";import"./useControlledState-Bfp68Ksh.js";import"./Collection-BWp1xM7Q.js";import"./index-DVepOdd-.js";import"./Separator-IVA-fJoe.js";import"./SelectionManager-BpZx4ARm.js";import"./useEvent-BAC2xDQQ.js";import"./scrollIntoView-WOAjmpGz.js";import"./SelectionIndicator-BDBYhVTA.js";import"./useDescription-CvEN5z8s.js";import"./ListKeyboardDelegate-DSEu1shW.js";import"./PressResponder-DpVW2ngz.js";import"./useLocalizedStringFormatter-DhVS51M8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sSSQQuxs.js";import"./getScrollParent-Czn_DZgU.js";import"./VisuallyHidden-DchdFXfm.js";import"./x-MNLtDlkP.js";import"./createLucideIcon-C9pXYI_x.js";import"./useLocalizedStringFormatter-DNP-DOoF.js";import"./Heading-BUoYcFor.js";import"./Button-C52wufQI.js";import"./Button.module-BB7N-cLd.js";import"./info-G1oiUrUB.js";import"./Popover-BNvV_GSI.js";import"./Form-CDnZ42LZ.js";import"./useField-BBN_lIAz.js";import"./check-DP4-vz-E.js";import"./useToggleState-BTBZVItk.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
