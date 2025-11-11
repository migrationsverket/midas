import{j as e}from"./iframe-C1S3UI0q.js";import{C as m}from"./CheckboxGroup-CKMPUI2A.js";import{C as p}from"./Checkbox-DKOYB9VG.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B79tkzHr.js";import"./utils-DDXHsTpT.js";import"./clsx-B-dksMZM.js";import"./Text-DHpcpzXZ.js";import"./useFocusRing-CyRIiSHy.js";import"./index-DtMwqg1W.js";import"./index-9q-9abAX.js";import"./clsx-Ciqy0D92.js";import"./Text-BWJL7Gm8.js";import"./Label-DgiH-mJ_.js";import"./Button-iogE4gXn.js";import"./Hidden-BJe1Vr5O.js";import"./useLabels-zIJcgfCF.js";import"./useButton-Ca4j2v7e.js";import"./Dialog-COxcRZFR.js";import"./RSPContexts-h2hygVuJ.js";import"./OverlayArrow-DbLci5Fj.js";import"./useResizeObserver-x6NIebEo.js";import"./useControlledState-BU5hH7Ch.js";import"./Collection-BJAHpYZy.js";import"./index-Me4f3IYf.js";import"./Separator-BbRp0x6a.js";import"./SelectionManager-BXBHYyud.js";import"./useEvent-ClTJe97m.js";import"./scrollIntoView-CJsMR2zp.js";import"./SelectionIndicator-BQpZ71Nu.js";import"./useDescription-D_-dPDWg.js";import"./ListKeyboardDelegate-CZ0dQ4_6.js";import"./PressResponder-B9bh3Uo3.js";import"./useLocalizedStringFormatter-CL1671By.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bjcd7mkO.js";import"./VisuallyHidden-DFD9-6eR.js";import"./useLocalizedStringFormatter-DAqU679A.js";import"./Button-BJgkfWbj.js";import"./Button.module-CtQ1deO8.js";import"./x-392Zn0gg.js";import"./createLucideIcon-B-9b73Xu.js";import"./Heading-BAtLrgM0.js";import"./info-CSzhu02k.js";import"./Popover-3J87KIzX.js";import"./useFormValidation-0n95bcz8.js";import"./useField-BDCXh-qT.js";import"./Form-DHk6j1fS.js";import"./check-CFXta5kO.js";import"./useToggleState-hsN7EKhN.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
