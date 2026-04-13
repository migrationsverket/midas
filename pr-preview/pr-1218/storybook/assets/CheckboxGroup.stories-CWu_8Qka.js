import{j as e}from"./iframe-CNCYpet-.js";import{C as m}from"./CheckboxGroup-B3qRzslI.js";import{C as p}from"./Checkbox-BL1GjiM4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-pGosIpkp.js";import"./utils-DbCir_Jt.js";import"./clsx-B-dksMZM.js";import"./Text-BSDJ27Oc.js";import"./useFocusRing-CRxTmkRw.js";import"./index-BUDe2ZxC.js";import"./index-DWOJOWmI.js";import"./clsx-Ciqy0D92.js";import"./Text-ORzvfqKL.js";import"./Label-C4uC668Z.js";import"./Button-DJ63q7tI.js";import"./Hidden-hGcy4cT5.js";import"./useLabel-CzS_jyTD.js";import"./useLabels-vAecHqWn.js";import"./useButton-DXHtHs2n.js";import"./Dialog-CDdgriEt.js";import"./RSPContexts-BaURGsym.js";import"./OverlayArrow-Btkpe0Jw.js";import"./useResizeObserver-DeSWJ0R6.js";import"./useControlledState-CeXWXac4.js";import"./Collection-fvaKWVec.js";import"./index-wiJ-pny3.js";import"./Separator-DIcboP8V.js";import"./SelectionManager-Dsrgsk_Q.js";import"./useEvent-SGyVQ3yM.js";import"./scrollIntoView-DKoFSOfZ.js";import"./SelectionIndicator-By9ghNhJ.js";import"./useDescription-CgiS5IZ6.js";import"./ListKeyboardDelegate-BT-CoH93.js";import"./PressResponder-fGbMc-Ku.js";import"./useLocalizedStringFormatter-D4gZ00xG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-g4fSyKjs.js";import"./getScrollParent-C5eE57Do.js";import"./VisuallyHidden-BD8822Hp.js";import"./Modal-UNMxYX9_.js";import"./x-BNWluiEV.js";import"./createLucideIcon-Clh8USVg.js";import"./useLocalizedStringFormatter-BnKVjVFL.js";import"./Heading-BKsUShCt.js";import"./Button-FEtIFAuh.js";import"./Button.module-BB7N-cLd.js";import"./info-C6YoZ-0l.js";import"./Popover-Bl3xU1tF.js";import"./Form-BY3Nnasj.js";import"./useField-CS2Ek9vr.js";import"./check-COyRFE5A.js";import"./useToggleState-WsKbSdAi.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
