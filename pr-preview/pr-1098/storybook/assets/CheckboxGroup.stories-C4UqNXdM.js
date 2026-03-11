import{j as e}from"./iframe-CvgTjsRI.js";import{C as m}from"./CheckboxGroup-CVDljCTp.js";import{C as p}from"./Checkbox-DMEXqFf4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BQ0145L6.js";import"./utils-DsGHCuDD.js";import"./clsx-B-dksMZM.js";import"./Text-Bxgne8zr.js";import"./useFocusRing-Bf69ssZP.js";import"./index-BUwV2pti.js";import"./index-CCCX_Q-4.js";import"./clsx-Ciqy0D92.js";import"./Text-CJZcBszR.js";import"./Label-kuHl6gIU.js";import"./Button-5hgjL52o.js";import"./Hidden-Bz8_ARKx.js";import"./useLabels-B-EK2xcM.js";import"./useButton-DTqgbWNm.js";import"./Dialog-JjSsiJTI.js";import"./RSPContexts-B-4MhJIC.js";import"./OverlayArrow-ckeNUSO8.js";import"./useResizeObserver-Cfj_2WY9.js";import"./useControlledState-DEiVg5eh.js";import"./Collection-Igz2z9uk.js";import"./index-C1zWBa74.js";import"./Separator-BSuRY4C-.js";import"./SelectionManager-D4VH4Dg8.js";import"./useEvent-ChWISaFS.js";import"./scrollIntoView-DKPA2TnM.js";import"./SelectionIndicator-Dk_tpTT1.js";import"./useDescription-QrPMwBKV.js";import"./ListKeyboardDelegate-BqROKGdH.js";import"./PressResponder-DqQprbw6.js";import"./useLocalizedStringFormatter-CrfJ-HgW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmcOuIM-.js";import"./getScrollParent-3h6gjZ9W.js";import"./VisuallyHidden-DnWZa0YB.js";import"./x-CVjv4lq5.js";import"./createLucideIcon-Be0qHJux.js";import"./useLocalizedStringFormatter-COXV7AZN.js";import"./Heading-D5PrjMzm.js";import"./Button-CIHCm98a.js";import"./Button.module-D_C6WeTN.js";import"./info-BfzZRU5S.js";import"./Popover-DzQZFBBD.js";import"./useFormValidation-DdFzRzUV.js";import"./useField-CoGIDQmT.js";import"./Form-CRsJxvyn.js";import"./check-CsQeLH5G.js";import"./useToggleState-Bd11w3nk.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
