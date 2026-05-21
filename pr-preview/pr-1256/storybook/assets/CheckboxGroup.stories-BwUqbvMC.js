import{j as e}from"./iframe-CdIQ5N7i.js";import{C as m}from"./CheckboxGroup-kBsRGRCf.js";import{C as p}from"./Checkbox-DXLs4G_e.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DJ-HR3RU.js";import"./utils-BvbfqFty.js";import"./clsx-B-dksMZM.js";import"./Text-s2Qhe30V.js";import"./useFocusRing-CAL8UmMI.js";import"./index-QXcgcGVQ.js";import"./index-azuTNlQK.js";import"./clsx-Ciqy0D92.js";import"./Text-uW2g-Rij.js";import"./Label-C5yvvB9E.js";import"./Button-UiktFLbJ.js";import"./Hidden-BNc7AwrM.js";import"./useLabel-BNWj_Gss.js";import"./useLabels-BEQABj6w.js";import"./useButton-iVPzxrJK.js";import"./Dialog-DvB2HcO3.js";import"./RSPContexts-CLmzGhES.js";import"./OverlayArrow-BzOb33Ml.js";import"./useResizeObserver-fQDQHxcX.js";import"./useControlledState-BRvuk5rm.js";import"./Collection-BNNDqxaK.js";import"./index-CAdlUQcW.js";import"./Separator-DISlP-zV.js";import"./SelectionManager-DUIeCRl1.js";import"./useEvent-CJQiJoWr.js";import"./scrollIntoView-DQzQ-CtO.js";import"./SelectionIndicator-C8xnssq6.js";import"./useDescription--y6wfX3r.js";import"./ListKeyboardDelegate-BRa5xE-n.js";import"./PressResponder-W6JnnhzP.js";import"./useLocalizedStringFormatter-Thbc0p-z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwnKHfBJ.js";import"./getScrollParent-B0hpSf3_.js";import"./VisuallyHidden-BhdIXlKy.js";import"./ModalOverlay-D3doyH6r.js";import"./x-CLOMyykU.js";import"./createLucideIcon-D9zj-qmC.js";import"./useLocalizedStringFormatter-YNJ9gtMz.js";import"./Heading-CYqOGIzN.js";import"./Button-kx69_fzD.js";import"./Button.module-BB7N-cLd.js";import"./info-BkSnkljK.js";import"./Popover-Bi_1XBV1.js";import"./Form-B0G4WvdU.js";import"./useField-FRI832V4.js";import"./check-BXs7CmDq.js";import"./useToggleState-B1x7r90V.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
