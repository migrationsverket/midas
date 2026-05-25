import{j as e}from"./iframe-BgrJi1dO.js";import{C as m}from"./CheckboxGroup-DLpmTXqG.js";import{C as p}from"./Checkbox-l9jmAejL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CK0qCQ53.js";import"./utils-Dbe4V-IB.js";import"./clsx-B-dksMZM.js";import"./Text-BwTtjMDe.js";import"./useFocusRing-BS9YqB89.js";import"./index-CbWpRcM2.js";import"./index-JdhWXOmD.js";import"./clsx-Ciqy0D92.js";import"./Text-U40rqCZc.js";import"./Label-BdWzYcgR.js";import"./Button-CzM4r0Q8.js";import"./Hidden-B-ocAKFH.js";import"./useLabel-BAUK-y0z.js";import"./useLabels-AZv-RCl9.js";import"./useButton-CFZUz_m7.js";import"./Dialog-Dx5PGef6.js";import"./RSPContexts-DvRO0UAG.js";import"./OverlayArrow-BxhCGC-N.js";import"./useResizeObserver-DsBe658C.js";import"./useControlledState-D4OQ_QAh.js";import"./Collection-B928yBNj.js";import"./index-hMpkQrUO.js";import"./Separator-CFMUc0y5.js";import"./SelectionManager-ydqEliBd.js";import"./useEvent-MCxZUdsg.js";import"./scrollIntoView-BBkPTMW6.js";import"./SelectionIndicator--LpreWkm.js";import"./useDescription-jfs0LzVP.js";import"./ListKeyboardDelegate-TS4aAaQm.js";import"./PressResponder-oCaC_hiz.js";import"./useLocalizedStringFormatter-BqEVaK4W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoZL00eg.js";import"./getScrollParent-D_EmKFyf.js";import"./VisuallyHidden-BtrvhTUL.js";import"./ModalOverlay-ByFsZVVk.js";import"./x-DF1DvVFb.js";import"./createLucideIcon-Xa2G53WL.js";import"./useLocalizedStringFormatter-C5DL9Vvg.js";import"./Heading-Pcy6kdR-.js";import"./Button-B_tSlyMA.js";import"./Button.module-BB7N-cLd.js";import"./info-CKFRirRj.js";import"./Popover-ClRnZYFV.js";import"./Form-BYQG3pHA.js";import"./useField-DQisryMe.js";import"./check-BaBKIaX1.js";import"./useToggleState-Ct7i5QmH.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
