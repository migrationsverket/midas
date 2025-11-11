import{j as e}from"./iframe-9CWn0dLe.js";import{C as m}from"./CheckboxGroup-CENLP8VT.js";import{C as p}from"./Checkbox-Dpxdt8IW.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Di2SbmV3.js";import"./utils-CuV_iOgg.js";import"./clsx-B-dksMZM.js";import"./Text-An75_Zxb.js";import"./useFocusRing-B85yjLqW.js";import"./index-ChHL_39O.js";import"./index-CgCHr7e4.js";import"./clsx-Ciqy0D92.js";import"./Text-6xl2iDhz.js";import"./Label-DGYWwJtJ.js";import"./Button-BJGIOWWr.js";import"./Hidden-CvOu_WHO.js";import"./useLabels-C0HlmxZK.js";import"./useButton-mlyjrjfq.js";import"./Dialog-BJ2MeQOQ.js";import"./RSPContexts-CQWVYSX6.js";import"./OverlayArrow-bxIZebWS.js";import"./useResizeObserver-PH-IxUTk.js";import"./useControlledState-By_9HlDg.js";import"./Collection-ePlYcQKq.js";import"./index-C-xxmmib.js";import"./Separator-KzObLJty.js";import"./SelectionManager-C8W5GKFX.js";import"./useEvent-DpugV3Z6.js";import"./scrollIntoView-DTq6YPeW.js";import"./SelectionIndicator-DpMBJUXd.js";import"./useDescription-CN24XJha.js";import"./ListKeyboardDelegate-Duo-3o3m.js";import"./PressResponder-BW7ag9Kf.js";import"./useLocalizedStringFormatter-CncNPno2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Tyo35a9C.js";import"./VisuallyHidden-D1VOR-Jq.js";import"./useLocalizedStringFormatter-B9S3QxzQ.js";import"./Button-CujSre3v.js";import"./Button.module-CtQ1deO8.js";import"./x-COAiMCC9.js";import"./createLucideIcon-B5h6e8RU.js";import"./Heading-C2p66HiZ.js";import"./info-DEJfDtn5.js";import"./Popover-DQb54w-o.js";import"./useFormValidation-BUlR97HX.js";import"./useField-PXa-6i87.js";import"./Form-Da9UzTs3.js";import"./check-7AjKvRVk.js";import"./useToggleState-fYbuG9iv.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
