import{j as e}from"./iframe-D4qwi5aS.js";import{C as m}from"./CheckboxGroup-jKyWusQN.js";import{C as p}from"./Checkbox-CbxDz-_L.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-COTYRssi.js";import"./utils-B-Nz338F.js";import"./clsx-B-dksMZM.js";import"./Text-0C5O0r7x.js";import"./useFocusRing-6dU2HUqL.js";import"./index-BCxIJmj3.js";import"./index-CRmVn8Hv.js";import"./clsx-Ciqy0D92.js";import"./Text-C5mfap0J.js";import"./Label-UddvlPk9.js";import"./Button-Da-DtFCd.js";import"./Hidden-CM9pZ1fW.js";import"./useLabels-Cj7LPX5i.js";import"./useButton-7Tej6Dr7.js";import"./Dialog-DglFMp0k.js";import"./RSPContexts-CXXJq7xx.js";import"./OverlayArrow-CNo4ecrH.js";import"./useResizeObserver-CEDVDmEs.js";import"./useControlledState-BpYdNZzj.js";import"./Collection-CuVUb6O2.js";import"./index-BSSxLsJ3.js";import"./Separator-CzylDj9v.js";import"./SelectionManager-32JLFw_J.js";import"./useEvent-uU1Q1mcZ.js";import"./scrollIntoView-Dwx5yIaq.js";import"./SelectionIndicator-B1z3YSxs.js";import"./useDescription-1CMda98v.js";import"./ListKeyboardDelegate-D0Gtj1tU.js";import"./PressResponder-BU5iSFLt.js";import"./useLocalizedStringFormatter-BblBLaNa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2lfJXjh.js";import"./getScrollParent-Cwbjb50l.js";import"./VisuallyHidden-bcnkwpD1.js";import"./Button-BtMm2W3M.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-9LC131sM.js";import"./createLucideIcon-hD68kNPm.js";import"./x-CiO824Qj.js";import"./Heading-8tKoHdkE.js";import"./info-C0SVif4L.js";import"./Popover-B0dCiXtz.js";import"./useFormValidation-VS44UaCw.js";import"./useField-CemwzZhq.js";import"./Form-C7dsP6GN.js";import"./check-DLPH1g2y.js";import"./useToggleState-BER363bn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
