import{j as e}from"./iframe-CN8uU3WK.js";import{C as m}from"./CheckboxGroup-jFm13QKA.js";import{C as p}from"./Checkbox-CalyXtT4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CQyQ10Lj.js";import"./utils-CZdGWMo4.js";import"./clsx-B-dksMZM.js";import"./Text-DntZGJ-I.js";import"./useFocusRing-CUcvtRrG.js";import"./index-C0vdhhw7.js";import"./index-Cks_K4jE.js";import"./clsx-Ciqy0D92.js";import"./Text-DvVr5DU7.js";import"./Label-DH_a-MIE.js";import"./Button-BnmvhNcQ.js";import"./Hidden-i_4Qa2VQ.js";import"./useLabel-DgboamvD.js";import"./useLabels-Do1n23m3.js";import"./useButton-DjAvv2ab.js";import"./Dialog-Y4sieQzC.js";import"./RSPContexts-FWWfLY0V.js";import"./OverlayArrow-DY03tKAK.js";import"./useResizeObserver-PMRAu2PC.js";import"./useControlledState-n2go4XxZ.js";import"./Collection-ClFv3c_D.js";import"./index-hDLoztzN.js";import"./Separator-aXVDjkAu.js";import"./SelectionManager-DC7iicly.js";import"./useEvent-B3wdZg5O.js";import"./scrollIntoView-dW3ZURKy.js";import"./SelectionIndicator-CK6GDs9o.js";import"./useDescription-DVfq5zSO.js";import"./ListKeyboardDelegate-DTVdwrrg.js";import"./PressResponder-DKwZi8Z6.js";import"./useLocalizedStringFormatter-BM2-R2IO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoqKfwmY.js";import"./getScrollParent-g_sxJttE.js";import"./VisuallyHidden-D1gwq_r2.js";import"./ModalOverlay-CHz0Hb7j.js";import"./x-3fndBwRx.js";import"./createLucideIcon-D_RMlAle.js";import"./useLocalizedStringFormatter-C8jrJhCU.js";import"./Heading-uOARh3Em.js";import"./Button-BVfd33cu.js";import"./Button.module-BB7N-cLd.js";import"./info-BrWWqy7C.js";import"./Popover-BiyZzAmm.js";import"./Form-CYOLK2lS.js";import"./useField-BPezoI5_.js";import"./check-TK2Q9all.js";import"./useToggleState-XSN1NGZc.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
