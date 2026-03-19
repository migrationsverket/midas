import{j as e}from"./iframe-DcNvp08h.js";import{C as m}from"./CheckboxGroup-TrEDX4rF.js";import{C as p}from"./Checkbox-BC3Hpb-O.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-EMbUKL48.js";import"./utils-BNNMLtuO.js";import"./clsx-B-dksMZM.js";import"./Text-B8dGyjgo.js";import"./useFocusRing-BPRwT2-e.js";import"./index-DSSiHOxL.js";import"./index-CP11QsuO.js";import"./clsx-Ciqy0D92.js";import"./Text-BTXvFjJ1.js";import"./Label-Bt_3yduz.js";import"./Button-BXO-nfgy.js";import"./Hidden-B1kRsClu.js";import"./useLabels-C5gPRZ5z.js";import"./useButton-BpzNPdXU.js";import"./Dialog-gkqiQjyQ.js";import"./RSPContexts-DrpcDSg9.js";import"./OverlayArrow-BQBIyzPG.js";import"./useResizeObserver-BZ80FUQk.js";import"./useControlledState-v-JghTjQ.js";import"./Collection-BkbIXtRB.js";import"./index-o14-3_5U.js";import"./Separator-DHhcHH-S.js";import"./SelectionManager-B_HjjirK.js";import"./useEvent-DdukWOBV.js";import"./scrollIntoView-BaDrcpSF.js";import"./SelectionIndicator-B51EA4Fv.js";import"./useDescription-CjIg25md.js";import"./ListKeyboardDelegate-BH2_PU2r.js";import"./PressResponder-D1QQQVMv.js";import"./useLocalizedStringFormatter-CfHv0oEA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CDBEinhV.js";import"./getScrollParent-qiJZOE97.js";import"./VisuallyHidden-BvqUxAVU.js";import"./x-DmMt4JWK.js";import"./createLucideIcon-CgIMhL8N.js";import"./useLocalizedStringFormatter-CwX-QJhh.js";import"./Heading-CbxVV3aG.js";import"./Button-Btc6I3Hp.js";import"./Button.module-BB7N-cLd.js";import"./info-BCdbkZey.js";import"./Popover-CyPWrpyb.js";import"./Form-BUw62znU.js";import"./useField-Cg2EtwLb.js";import"./check-D_1-L3Y-.js";import"./useToggleState-9ZfCrQJZ.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
