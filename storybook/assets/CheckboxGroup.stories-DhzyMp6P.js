import{j as e}from"./iframe-C8x-msxk.js";import{C as m}from"./CheckboxGroup-ePp26TVd.js";import{C as p}from"./Checkbox-Bo-SkR39.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-rBwuM1xB.js";import"./utils-x6RmcanB.js";import"./clsx-B-dksMZM.js";import"./Text-DgcFjB2j.js";import"./useFocusRing-pYs-dxV_.js";import"./index-esthriUJ.js";import"./index-Bvs38Ve9.js";import"./clsx-Ciqy0D92.js";import"./Text-DQO-SfK1.js";import"./Label-Cv5EMCUu.js";import"./Button-CUxxVM2V.js";import"./Hidden-BrrSlW-M.js";import"./useLabel-fGMhI5RW.js";import"./useLabels-CTHQc_bx.js";import"./useButton-DEMiZMSi.js";import"./Dialog-iRGMXlM7.js";import"./RSPContexts-Bq-VVGt_.js";import"./OverlayArrow-v4k5gM49.js";import"./useResizeObserver-BfKdqFSz.js";import"./useControlledState-DCAgeBJw.js";import"./Collection-BXTh5i1U.js";import"./index-BjTrqTsy.js";import"./Separator-RW0cf-lv.js";import"./SelectionManager-BnRAixSC.js";import"./useEvent-Cws_rkzS.js";import"./scrollIntoView-M59Z7YUm.js";import"./SelectionIndicator-D7TjMyr5.js";import"./useDescription-CnL7BH0S.js";import"./ListKeyboardDelegate-BQ1NNIIZ.js";import"./PressResponder-QWWNC3tH.js";import"./useLocalizedStringFormatter-DijUnHEf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-7A-xBO6J.js";import"./getScrollParent-Bc34TBH3.js";import"./VisuallyHidden-CQd7HXEj.js";import"./ModalOverlay-BZKbrFMg.js";import"./x-DXHCMQVs.js";import"./createLucideIcon-yUmnm7ht.js";import"./useLocalizedStringFormatter-DbnioywX.js";import"./Heading-C3GaqhQf.js";import"./Button-vkpw1trS.js";import"./Button.module-BB7N-cLd.js";import"./info-Umk0yDor.js";import"./Popover-DiNxb-K-.js";import"./Form-6ANOcz_Q.js";import"./useField-BqcO6B35.js";import"./check-Crya1BGn.js";import"./useToggleState-nhuC8Nm-.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
