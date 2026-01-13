import{j as e}from"./iframe-CLDUBT6H.js";import{C as m}from"./CheckboxGroup-b67xDQIJ.js";import{C as p}from"./Checkbox-BST3ZJyl.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Br1ud4c9.js";import"./utils-B2mKk8ds.js";import"./clsx-B-dksMZM.js";import"./Text-DVTsZrXV.js";import"./useFocusRing-Dyp-2U09.js";import"./index-CQqCc5kI.js";import"./index-CGFri1B6.js";import"./clsx-Ciqy0D92.js";import"./Text-t9fg8swz.js";import"./Label-BvK0x4Pk.js";import"./Button-CMos7Slo.js";import"./Hidden-DLcE0MmQ.js";import"./useLabels-BZXL5PjD.js";import"./useButton-CWWImr4k.js";import"./Dialog-COHi94a3.js";import"./RSPContexts-CLyyRvTx.js";import"./OverlayArrow-Dm-YbEON.js";import"./useResizeObserver-DnzBBkTW.js";import"./useControlledState-BGBJm32t.js";import"./Collection-ANcjFW6d.js";import"./index-1H4z90Fg.js";import"./Separator-pBtVDwQr.js";import"./SelectionManager-Bl_i3Nud.js";import"./useEvent-DGS4bHRi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CW52jf_h.js";import"./useDescription-Do_MXPnI.js";import"./ListKeyboardDelegate-iBff9PwI.js";import"./PressResponder-DvwsM6yL.js";import"./useLocalizedStringFormatter-BmkSBfS1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DF7YW4H8.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6ZRi5s4.js";import"./Button-B6mQ2Bq0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BaqAvC1h.js";import"./createLucideIcon-5ka4vtZl.js";import"./x-BXo-ziXi.js";import"./Heading-TRsTpXmi.js";import"./info-5aOyXpBP.js";import"./Popover-DGF2Rnvu.js";import"./useFormValidation-BoSETYwH.js";import"./useField-DYxJUrLm.js";import"./Form-CJ6D0tv0.js";import"./check-Bi2o20tP.js";import"./useToggleState-Cpc3HvLu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
