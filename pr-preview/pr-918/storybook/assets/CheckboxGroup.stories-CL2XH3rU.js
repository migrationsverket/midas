import{j as e}from"./iframe-D2cP6F3a.js";import{C as m}from"./CheckboxGroup-YDw7tVDq.js";import{C as p}from"./Checkbox-BLzkPHM-.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-C0d-xSA7.js";import"./utils-CYJ56a8d.js";import"./clsx-B-dksMZM.js";import"./Text-uTyTF2xO.js";import"./useFocusRing-CsKyeFC3.js";import"./index-A2jXSN8N.js";import"./index-D5U9Enu4.js";import"./clsx-Ciqy0D92.js";import"./Text-7-ZoUH1T.js";import"./Label-COgvVd-V.js";import"./Button-BdbvQjYI.js";import"./Hidden-CdI2XBpM.js";import"./useLabels-Ml9cK1SD.js";import"./useButton-BE931KVW.js";import"./Dialog-BLYP9nHp.js";import"./RSPContexts-Co62-7vH.js";import"./OverlayArrow-Dqc0wu9j.js";import"./useResizeObserver-DKrU4_Wt.js";import"./useControlledState-DiQVtu_9.js";import"./Collection-yGE-N3HK.js";import"./index-CbTEfJUs.js";import"./Separator-BFsXAbgl.js";import"./SelectionManager-N7w2jTX2.js";import"./useEvent-Dm4LZbUZ.js";import"./scrollIntoView-BeG40psR.js";import"./SelectionIndicator-BZTqv2eA.js";import"./useDescription-BDGHoqAG.js";import"./ListKeyboardDelegate-289C1zFS.js";import"./PressResponder-DOEYw3D_.js";import"./useLocalizedStringFormatter-p6d-BWaj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-rg9cwoxD.js";import"./VisuallyHidden-BXXBJOHA.js";import"./useLocalizedStringFormatter-BVfbfq2Q.js";import"./Button-C8E-6QCz.js";import"./Button.module-CtQ1deO8.js";import"./x-PLqZwYbr.js";import"./createLucideIcon-_SNHOGNJ.js";import"./Heading-D99uGahk.js";import"./info-CEdkyOSZ.js";import"./Popover-BEpETgBc.js";import"./useFormValidation-DIv14Bs9.js";import"./useField-DcPBr2th.js";import"./Form-BuM32l60.js";import"./check-DhHgtwM7.js";import"./useToggleState-CrfFcw2W.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
