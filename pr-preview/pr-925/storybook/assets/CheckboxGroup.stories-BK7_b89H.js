import{j as e}from"./iframe-BZebrEas.js";import{C as m}from"./CheckboxGroup-CLsHdl1D.js";import{C as p}from"./Checkbox-CLPNX6L9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-S8zlZ8Qt.js";import"./utils-Cv9uZo9K.js";import"./clsx-B-dksMZM.js";import"./Text-BLwI2igp.js";import"./useFocusRing-BUV9YV_S.js";import"./index-CMbZ6i8n.js";import"./index-CRcYGfdJ.js";import"./clsx-Ciqy0D92.js";import"./Text-PUTIA7Gc.js";import"./Label-Cw28LU9-.js";import"./Button-BNKoZpIx.js";import"./Hidden-Ca7SziLN.js";import"./useLabels-Bg0bSlQa.js";import"./useButton-DldPu05S.js";import"./Dialog-7fOpNb5L.js";import"./RSPContexts-CR_BySB8.js";import"./OverlayArrow-Bb6Wz-gE.js";import"./useResizeObserver-D0l1ejLy.js";import"./useControlledState-CdL0Vn8u.js";import"./Collection-lJ8s2yN3.js";import"./index-C4fSNA5g.js";import"./Separator-B4VXBxEh.js";import"./SelectionManager-gOKr_MBh.js";import"./useEvent-BvUmgLEr.js";import"./scrollIntoView-I6Vyn3AQ.js";import"./SelectionIndicator-TfXKW_yK.js";import"./useDescription-9b_SNdIF.js";import"./ListKeyboardDelegate-Dvn7sCAG.js";import"./PressResponder-C9_klJfI.js";import"./useLocalizedStringFormatter-C6EoZcm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DgDI8Mdk.js";import"./VisuallyHidden-DdwHvdeJ.js";import"./Button-rfuzx7LV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Cvv0O9w3.js";import"./createLucideIcon-BzZU7Nc4.js";import"./x-CwCP3jA6.js";import"./Heading-Ci0MqNsG.js";import"./info-B1DiDeFz.js";import"./Popover-CiN36iaZ.js";import"./useFormValidation-C-0LMZRV.js";import"./useField-58_UFhRk.js";import"./Form-Bxqwh6Ta.js";import"./check-CBw0D6g1.js";import"./useToggleState-CPMlpIsC.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
