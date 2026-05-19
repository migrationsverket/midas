import{j as e}from"./iframe-B1G803WZ.js";import{C as m}from"./CheckboxGroup-COar7_QV.js";import{C as p}from"./Checkbox-CPlYulaq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BgDbsvpf.js";import"./utils-ZnrybaQS.js";import"./clsx-B-dksMZM.js";import"./Text-CAOAbmad.js";import"./useFocusRing-BRG6MU6i.js";import"./index-QTGoW66r.js";import"./index-DlLvDP-d.js";import"./clsx-Ciqy0D92.js";import"./Text-B-AGxk9K.js";import"./Label-DXBeXx8q.js";import"./Button-BLDI2QQO.js";import"./Hidden-DDSSvdX3.js";import"./useLabel-lJyU4eyr.js";import"./useLabels-CNGc6RPU.js";import"./useButton-BMGmM7Rg.js";import"./Dialog-Ch1EbeUc.js";import"./RSPContexts-CUgMF8uD.js";import"./OverlayArrow-Cc1DaLcZ.js";import"./useResizeObserver-C-4yQLxN.js";import"./useControlledState-BlM9LERq.js";import"./Collection-DabhM5jB.js";import"./index-2DG0SJGy.js";import"./Separator-CO6vWGxM.js";import"./SelectionManager-D1bQmGXg.js";import"./useEvent-AANzrBKs.js";import"./scrollIntoView-D6LN4GJ6.js";import"./SelectionIndicator-BsObSX7g.js";import"./useDescription-CwTth-CD.js";import"./ListKeyboardDelegate-CauOf7DY.js";import"./PressResponder-Dy-yCG68.js";import"./useLocalizedStringFormatter-BMaygKaE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C54_hIOs.js";import"./getScrollParent-CigfJhrW.js";import"./VisuallyHidden-B__tRjGj.js";import"./ModalOverlay-BO3lRZyj.js";import"./x-C-I1ixf_.js";import"./createLucideIcon-_Uu-7Yuy.js";import"./useLocalizedStringFormatter-D7GfR7l1.js";import"./Heading-D9vzlIYK.js";import"./Button-DU4dwGZ1.js";import"./Button.module-BB7N-cLd.js";import"./info-DauHfwG7.js";import"./Popover-DdKXcdAo.js";import"./Form-B7gF1kuZ.js";import"./useField-BpNxarce.js";import"./check-B9s8MbEq.js";import"./useToggleState-DXPbF6uR.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
