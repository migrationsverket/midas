import{j as e}from"./iframe-CM9gzC_-.js";import{C as m}from"./CheckboxGroup-BTBhz0Z3.js";import{C as p}from"./Checkbox-DU66hm4C.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Br-BXIw9.js";import"./utils-CXcBw8mX.js";import"./clsx-B-dksMZM.js";import"./Text-Bft1iTTC.js";import"./useFocusRing-Bz17EpSW.js";import"./index-CVH0l-Rs.js";import"./index-Bg9NulRa.js";import"./clsx-Ciqy0D92.js";import"./Text-DvQTbzsU.js";import"./Label-DEaMeTX8.js";import"./Button-4PfHMxFE.js";import"./Hidden-D0XxjEDh.js";import"./useLabel-DNzyNjQ0.js";import"./useLabels-_1rwYSL1.js";import"./useButton-BDzD217S.js";import"./Dialog-D2hci_5_.js";import"./RSPContexts-BGBhlXAt.js";import"./OverlayArrow-DDdq8LLH.js";import"./useResizeObserver-ChNZACRA.js";import"./useControlledState-D7RofSAB.js";import"./Collection-BtQP2I1Q.js";import"./index-BDQxevPm.js";import"./Separator-Cz6RPDpT.js";import"./SelectionManager-CoSHJlpm.js";import"./useEvent-CmguT4Gg.js";import"./scrollIntoView-3rRtgk00.js";import"./SelectionIndicator-CXNqpn4L.js";import"./useDescription-BQW7Zq6D.js";import"./ListKeyboardDelegate-DZJ2K8C0.js";import"./PressResponder-CMByKJLe.js";import"./useLocalizedStringFormatter-DGUVN_Wt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-chQcOBj7.js";import"./getScrollParent-B7Te1-pw.js";import"./VisuallyHidden-CyPA52id.js";import"./ModalOverlay-CDYj_QTs.js";import"./x-CRr9CCYv.js";import"./createLucideIcon-gLaeDi4P.js";import"./useLocalizedStringFormatter-DuVOZRpg.js";import"./Heading-DcYuxKBt.js";import"./Button-DVDe5XTB.js";import"./Button.module-BB7N-cLd.js";import"./info-DSV1pWOH.js";import"./Popover-CpRqXlTL.js";import"./Form-C7eTyKCv.js";import"./useField-DZeEaImT.js";import"./check-BFOc9BMq.js";import"./useToggleState-DzOz3edW.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
