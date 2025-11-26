import{j as e}from"./iframe-B0TsSvpN.js";import{C as m}from"./CheckboxGroup-ofaDCyMb.js";import{C as p}from"./Checkbox-BLj0swqS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B-MRedd_.js";import"./utils-Cr9q3b11.js";import"./clsx-B-dksMZM.js";import"./Text-BsgSxeOt.js";import"./useFocusRing-BgEJNMxL.js";import"./index-4peZajMB.js";import"./index-BlEvzA_t.js";import"./clsx-Ciqy0D92.js";import"./Text-NZFj7bgs.js";import"./Label-BGYbXh9Z.js";import"./Button-BNNDKrj3.js";import"./Hidden-DFn3CYqd.js";import"./useLabels-CcQRsMgV.js";import"./useButton-4YKnYTOK.js";import"./Dialog-tR-kdbi1.js";import"./RSPContexts-BWxM02pN.js";import"./OverlayArrow-CszOVKk2.js";import"./useResizeObserver-BA28wkO1.js";import"./useControlledState-JdOJEBqA.js";import"./Collection-BDsgwoiu.js";import"./index-ZEz0nyUJ.js";import"./Separator-CZYUiTJy.js";import"./SelectionManager-DrS7QM98.js";import"./useEvent-DNrIx6L7.js";import"./scrollIntoView-C6aLME3I.js";import"./SelectionIndicator-CHC8eP2Q.js";import"./useDescription-BogRrWOC.js";import"./ListKeyboardDelegate-TCOqdOXV.js";import"./PressResponder-k8-KWhje.js";import"./useLocalizedStringFormatter-DU6t-nF5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dh75CpyK.js";import"./VisuallyHidden-CzqEzZBD.js";import"./Button-CaiHz5_X.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-tisuuO7l.js";import"./createLucideIcon-CW9WyvOy.js";import"./x-BCupfa-l.js";import"./Heading-KuBDyk7R.js";import"./info-DODpZOlh.js";import"./Popover-B5dD5u2T.js";import"./useFormValidation-8-0qwwnz.js";import"./useField-DMkwO024.js";import"./Form-DUD00ZaB.js";import"./check-B9EHUqeL.js";import"./useToggleState-fo4GHL8O.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
