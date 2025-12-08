import{j as e}from"./iframe-Cmcg9luQ.js";import{C as m}from"./CheckboxGroup-GDd7HMV2.js";import{C as p}from"./Checkbox-C3Mf6OE5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BaL3LJ5r.js";import"./utils-DkJuHdm3.js";import"./clsx-B-dksMZM.js";import"./Text-hbQ-WDrk.js";import"./useFocusRing-DDfGAqyv.js";import"./index-CGA0FNtf.js";import"./index-DVbC1Dtd.js";import"./clsx-Ciqy0D92.js";import"./Text-BAN3IH2j.js";import"./Label-B5Cwv84Z.js";import"./Button-CHShYw1t.js";import"./Hidden-zwF0tAvB.js";import"./useLabels-Cu1LcQOl.js";import"./useButton-DKMZ0sMp.js";import"./Dialog-BwxH-cxz.js";import"./RSPContexts-XO60EeIg.js";import"./OverlayArrow-DJYA6_W8.js";import"./useResizeObserver-CFsR_YAg.js";import"./useControlledState-CQt4n5kP.js";import"./Collection-VusCcygG.js";import"./index-B1BPqnSZ.js";import"./Separator-yeVdyden.js";import"./SelectionManager-C3JyXz3B.js";import"./useEvent-yxaIvS7j.js";import"./scrollIntoView-GW3hjUpk.js";import"./SelectionIndicator-JaC0r7eS.js";import"./useDescription-DVpoVzOH.js";import"./ListKeyboardDelegate-JZyz8SsL.js";import"./PressResponder-nkroryU4.js";import"./useLocalizedStringFormatter-DlNfiCCT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dj2mCMcV.js";import"./VisuallyHidden-DrDA4vjy.js";import"./Button-2Trrvjfa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdGC_wlX.js";import"./createLucideIcon-BL352A7A.js";import"./x-BZHozVPt.js";import"./Heading-DqvvOFdk.js";import"./info-zkz18lyW.js";import"./Popover-CUkqD4Xx.js";import"./useFormValidation-CGNYzqPR.js";import"./useField-CJ_MOfrF.js";import"./Form-DD6Ez8Rg.js";import"./check-D3sAvMe-.js";import"./useToggleState-GIcaVRxH.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
