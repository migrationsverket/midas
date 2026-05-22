import{j as e}from"./iframe-DdBf1SRL.js";import{C as m}from"./CheckboxGroup-BPLPnNMl.js";import{C as p}from"./Checkbox-BxNoQrsX.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CxsQvr-l.js";import"./utils-DMchxVzX.js";import"./clsx-B-dksMZM.js";import"./Text-BubyCo8k.js";import"./useFocusRing-B7kbWjnk.js";import"./index-CkQqcEDO.js";import"./index-Dx_kN6Ou.js";import"./clsx-Ciqy0D92.js";import"./Text-Crsqw0eJ.js";import"./Label-B60R5RDz.js";import"./Button-DfVfuE86.js";import"./Hidden-DnCBwxQo.js";import"./useLabel-Cmr2t4Vn.js";import"./useLabels-BTBbAQZZ.js";import"./useButton-Bi1rLOkK.js";import"./Dialog-BZoFiE8g.js";import"./RSPContexts-DeLkFkii.js";import"./OverlayArrow-BVMBp9Sx.js";import"./useResizeObserver-Vt9UesdB.js";import"./useControlledState-aSEVnCiN.js";import"./Collection-iaZXBrxK.js";import"./index-DpcT8N6d.js";import"./Separator-Cuqf8mp-.js";import"./SelectionManager-DWXdlFy8.js";import"./useEvent-DSMuUAnY.js";import"./scrollIntoView-BZzoMKS8.js";import"./SelectionIndicator-CuhYxI4d.js";import"./useDescription-zrMNjBsf.js";import"./ListKeyboardDelegate-B9CnOcQ4.js";import"./PressResponder-Dw1Tvwi2.js";import"./useLocalizedStringFormatter-B5aKiSMw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C5_-IwUt.js";import"./getScrollParent-FpAGmNqP.js";import"./VisuallyHidden-TAipgByj.js";import"./ModalOverlay-TV_D2hAq.js";import"./x-DQUfmUsq.js";import"./createLucideIcon-DMjdayIV.js";import"./useLocalizedStringFormatter-D9iDsPFm.js";import"./Heading-0gJfGgeH.js";import"./Button-BcNKuXh9.js";import"./Button.module-BB7N-cLd.js";import"./info-mMeset4C.js";import"./Popover-wLY7u0qX.js";import"./Form-BnkXR6RV.js";import"./useField-B-UKPEcq.js";import"./check-D7j61AyI.js";import"./useToggleState-CmagXPQ9.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
