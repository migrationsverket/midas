import{j as e}from"./iframe-Di5CTR8T.js";import{C as m}from"./CheckboxGroup-B5cScyDr.js";import{C as p}from"./Checkbox-CcIjHzw7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bv2rXWOC.js";import"./utils-CtBItuGe.js";import"./clsx-B-dksMZM.js";import"./Text-ZJfVqn-h.js";import"./useFocusRing-DrwftOie.js";import"./index-DitNwB70.js";import"./index-DBHfn5s_.js";import"./clsx-Ciqy0D92.js";import"./Text-n28vbpm4.js";import"./Label-mKPoFVPk.js";import"./Button-2OtSDF-S.js";import"./Hidden-sHhuPHwe.js";import"./useLabel-B2_1exfs.js";import"./useLabels-B1J-T3xq.js";import"./useButton-C1jCWvmO.js";import"./Dialog-BJdR-I1-.js";import"./RSPContexts-DB30PmIp.js";import"./OverlayArrow-BgFIeVyY.js";import"./useResizeObserver-C6VfgOTj.js";import"./useControlledState-I_KBwW67.js";import"./Collection-Cd6bQLAa.js";import"./index-C8zKGD88.js";import"./Separator-BnzzmdtP.js";import"./SelectionManager-C1q1HFOS.js";import"./useEvent-Crt2nr6j.js";import"./scrollIntoView-NTyBe7BV.js";import"./SelectionIndicator-BD3Jo9O3.js";import"./useDescription-XOfwguuv.js";import"./ListKeyboardDelegate-B_UfOpVg.js";import"./PressResponder-DW7M4-_e.js";import"./useLocalizedStringFormatter-WF6y2aSl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1_x5jAl.js";import"./getScrollParent-2xlS7fKj.js";import"./VisuallyHidden-DD_4lyF0.js";import"./ModalOverlay-PDQHlzPO.js";import"./x-B82Stdu9.js";import"./createLucideIcon-BtcOznK7.js";import"./useLocalizedStringFormatter-CoQGZsFN.js";import"./Heading-BZrlUYHo.js";import"./Button-zPsJWo_p.js";import"./Button.module-BB7N-cLd.js";import"./info-DOmqevh8.js";import"./Popover-Hfz6gWUK.js";import"./Form-q1oODmDm.js";import"./useField-BrrjMWLY.js";import"./check-DZeaiyU5.js";import"./useToggleState-Do2ssiVe.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
