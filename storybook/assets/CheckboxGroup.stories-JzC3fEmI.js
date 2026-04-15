import{j as e}from"./iframe-th_azU5_.js";import{C as m}from"./CheckboxGroup-BV5DYf5Z.js";import{C as p}from"./Checkbox-DFLmqaLN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-AfpWYpbz.js";import"./utils-C4VuU2um.js";import"./clsx-B-dksMZM.js";import"./Text-hdNvr6U4.js";import"./useFocusRing-BDcpBQzO.js";import"./index-CzrHA3v-.js";import"./index-BbA8n6Hq.js";import"./clsx-Ciqy0D92.js";import"./Text-DELoTx3Q.js";import"./Label-C184Mq6Q.js";import"./Button-wk7uPRGE.js";import"./Hidden-BFds7gf1.js";import"./useLabel-CYIQyZrD.js";import"./useLabels-BxY9CSFr.js";import"./useButton-u6wZaZk_.js";import"./Dialog-qyQyO-xd.js";import"./RSPContexts-DcQ_ZJZT.js";import"./OverlayArrow-01IAR7vV.js";import"./useResizeObserver-BIwzzMqH.js";import"./useControlledState-kFNWgpP8.js";import"./Collection-DVMWuvit.js";import"./index-BidItgYC.js";import"./Separator-CNc79Mct.js";import"./SelectionManager-CpaghZcb.js";import"./useEvent-tLzXOHdh.js";import"./scrollIntoView-D5fKhQtx.js";import"./SelectionIndicator-6zlY6cYw.js";import"./useDescription-D59bYXVd.js";import"./ListKeyboardDelegate-BScei23V.js";import"./PressResponder-CX6J_bHp.js";import"./useLocalizedStringFormatter-C0jZ500X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BkV0DXQ5.js";import"./getScrollParent-BHVOeKIe.js";import"./VisuallyHidden-CkdA4sJp.js";import"./ModalOverlay-p-_z6rvK.js";import"./x-D7gAiSiz.js";import"./createLucideIcon-Bv08NMl0.js";import"./useLocalizedStringFormatter-Bei2ateM.js";import"./Heading-CzjIk2-X.js";import"./Button-CauCyY5i.js";import"./Button.module-BB7N-cLd.js";import"./info-Ch7dTvUX.js";import"./Popover-Dm3-gDL0.js";import"./Form-1MLn5vCf.js";import"./useField-Bo84Watr.js";import"./check-DuZ4pphq.js";import"./useToggleState-CVejDwO2.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
