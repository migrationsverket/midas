import{j as e}from"./iframe-Bh3VWgCW.js";import{C as m}from"./CheckboxGroup-DxeI5CB3.js";import{C as p}from"./Checkbox-vkj7DVEs.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DE6lH482.js";import"./utils-BIL3a6ib.js";import"./clsx-B-dksMZM.js";import"./Text-GPAWAUKl.js";import"./useFocusRing-0AZg0skd.js";import"./index-N6QzfeSJ.js";import"./index-CqYODit3.js";import"./clsx-Ciqy0D92.js";import"./Text-rR-9MpjH.js";import"./Label-DsvDFsCJ.js";import"./Button-DwNgNAHT.js";import"./Hidden-471kEs7D.js";import"./useLabels-db71Wl0y.js";import"./useButton-DQTLzfh-.js";import"./Dialog-CXXpvEEU.js";import"./RSPContexts-eTOZoUex.js";import"./OverlayArrow-t8hYx5es.js";import"./useResizeObserver-E4_XZ6ad.js";import"./useControlledState-CEpZVo0k.js";import"./Collection-DR-2fi6L.js";import"./index-DwcmB1sB.js";import"./Separator-DfpjYphJ.js";import"./SelectionManager-Np_WmImU.js";import"./useEvent-C3iLfYya.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BCO4Ph4I.js";import"./useDescription-B6uYpxUN.js";import"./ListKeyboardDelegate-eTZICZ-y.js";import"./PressResponder-DnYcsN93.js";import"./useLocalizedStringFormatter-Ca1HzZqp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dat9OfKK.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BYkApvtM.js";import"./Button-DI241M-e.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DRrSbQCy.js";import"./createLucideIcon-_2yVZkpy.js";import"./x-pBvU2hIn.js";import"./Heading-Cv2bIYwC.js";import"./info-BDxcNZLg.js";import"./Popover-qcn40ZrY.js";import"./useFormValidation-Cv_mqAb6.js";import"./useField-Bsmsq1ab.js";import"./Form-UctQMwsb.js";import"./check-BZABxoNJ.js";import"./useToggleState-DtaZKCgt.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
