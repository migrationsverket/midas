import{j as e}from"./iframe-DHxMEyk6.js";import{C as m}from"./CheckboxGroup-BSGtHDnx.js";import{C as p}from"./Checkbox-Cz_vOQdI.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C2Sc9U8m.js";import"./utils-C_yGkqEQ.js";import"./clsx-B-dksMZM.js";import"./Text-C0s7dJ5a.js";import"./useFocusRing-BkOUJVy3.js";import"./index-BsabDiUe.js";import"./index-D8JeEhpq.js";import"./clsx-Ciqy0D92.js";import"./Text-CSs2JSPr.js";import"./Label-DQd7EZ-D.js";import"./Button-BpC7kCwC.js";import"./Hidden-CkZgcLGH.js";import"./useLabel-BTR3XuI0.js";import"./useLabels-Yo5aFm_3.js";import"./useButton-Br-Hv-S3.js";import"./Dialog-DHWoKmMp.js";import"./RSPContexts-xSY5mLjc.js";import"./OverlayArrow-DEbxoFZ7.js";import"./useResizeObserver-D7DQf7l-.js";import"./useControlledState-DToB7jqX.js";import"./Collection-BN9__hjp.js";import"./index-DG8_ZRly.js";import"./Separator-YeRgmhmU.js";import"./SelectionManager-zlWcTFKf.js";import"./useEvent-D9bVVAaY.js";import"./scrollIntoView-Cwf4WFKd.js";import"./SelectionIndicator-B1SEN247.js";import"./useDescription-BbVhVBC-.js";import"./ListKeyboardDelegate-hIKANMJz.js";import"./PressResponder-DIfR31-k.js";import"./useLocalizedStringFormatter-DWzf9Q6R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CVkPTCT8.js";import"./getScrollParent-Cb_GBxXJ.js";import"./VisuallyHidden-oG0E9KZu.js";import"./Modal-DRJAq7kg.js";import"./x-BasF0MYi.js";import"./createLucideIcon-uDhXojJY.js";import"./useLocalizedStringFormatter-C4FoF24Q.js";import"./Heading-Clo58xYm.js";import"./Button-DTaKScGa.js";import"./Button.module-BB7N-cLd.js";import"./info-BxNSSHO4.js";import"./Popover-Ju86AZEg.js";import"./Form-BSJcOZpD.js";import"./useField-C7HbmUXj.js";import"./check-BXgeEnwI.js";import"./useToggleState-BqO_TA_t.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
