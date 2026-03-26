import{j as e}from"./iframe-CRmifMxk.js";import{C as m}from"./CheckboxGroup-DqniBrFI.js";import{C as p}from"./Checkbox-B4ZmW57T.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-4mX3m-58.js";import"./utils-Dhemezbc.js";import"./clsx-B-dksMZM.js";import"./Text-7kJBKZyv.js";import"./useFocusRing-C63zC52P.js";import"./index-DsJY3sZz.js";import"./index-C2oL4zj2.js";import"./clsx-Ciqy0D92.js";import"./Text-Cw5AWujN.js";import"./Label-DpfANppt.js";import"./Button-Xq9T9zNn.js";import"./Hidden-D_jN673M.js";import"./useLabel-CMUsO_ec.js";import"./useLabels-DRk006Lw.js";import"./useButton-BpHW9Z05.js";import"./Dialog-DNb1Uoko.js";import"./RSPContexts-Ch-opsTz.js";import"./OverlayArrow-BDQxE5Aw.js";import"./useResizeObserver-Czi0T6ep.js";import"./useControlledState-DeYyUgKl.js";import"./Collection-BhxLxQcu.js";import"./index-DwLMWdc1.js";import"./Separator-CUTS7byi.js";import"./SelectionManager-DztN3z26.js";import"./useEvent-CCz8s320.js";import"./scrollIntoView-D0gLy9uc.js";import"./SelectionIndicator-kZ0Ry9SW.js";import"./useDescription-Tao1j2gm.js";import"./ListKeyboardDelegate-BPJcXB6C.js";import"./PressResponder-BT7TY4ez.js";import"./useLocalizedStringFormatter-D-hwM5Wx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CJnMoTai.js";import"./getScrollParent-DxnI4PpA.js";import"./VisuallyHidden-C9jbNlKJ.js";import"./x-COiF7Ld4.js";import"./createLucideIcon-DkATSQ6x.js";import"./useLocalizedStringFormatter-CHY6Cxq_.js";import"./Heading-B2jvBi9y.js";import"./Button-C1SdrETN.js";import"./Button.module-BB7N-cLd.js";import"./info-C89V329i.js";import"./Popover-6X5Oeaj7.js";import"./Form-BdfTmg9K.js";import"./useField-CAyp5oSJ.js";import"./check-PWESK8WL.js";import"./useToggleState-DdZ2lj-a.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
