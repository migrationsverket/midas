import{j as e}from"./iframe-C_rSI28S.js";import{C as m}from"./CheckboxGroup-BSfwzR4q.js";import{C as p}from"./Checkbox-gG_L8GWH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B2EZQXDz.js";import"./utils-B9fitk-d.js";import"./clsx-B-dksMZM.js";import"./Text-C0Ky8cuO.js";import"./useFocusRing-1c7-b3IG.js";import"./index-D-oq6Wi4.js";import"./index-DhVgnvLi.js";import"./clsx-Ciqy0D92.js";import"./Text-D8Oj8wTT.js";import"./Label-c80iETpH.js";import"./Button-BZMldgT_.js";import"./Hidden-DkMo9DJh.js";import"./useLabels-BB_4cBjW.js";import"./useButton-BJxdkC7q.js";import"./Dialog-DMbz8tWh.js";import"./RSPContexts-CccBVtRj.js";import"./OverlayArrow-GDHlNZL-.js";import"./useResizeObserver-CLjwbffR.js";import"./useControlledState-Bu5qipFz.js";import"./Collection-DQPpNpIp.js";import"./index-CMNlANvy.js";import"./Separator-DseIPh_7.js";import"./SelectionManager-OOYxevrX.js";import"./useEvent-Bpac53ZB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C8GAWl4j.js";import"./useDescription-w-LKIPXs.js";import"./ListKeyboardDelegate-D1l7F5b-.js";import"./PressResponder-DbjOz25Q.js";import"./useLocalizedStringFormatter-CS1E0pV3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CALY2agj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DjxO6q8B.js";import"./Button-DfJo8lJp.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-iM29cO5J.js";import"./createLucideIcon-DJNcDtcF.js";import"./x-Bm_2sjYb.js";import"./Heading-BD3WCdNS.js";import"./info-o1XDVXkp.js";import"./Popover-BpG9x7Y0.js";import"./useFormValidation-JyWYvn9r.js";import"./useField-Be67gG5q.js";import"./Form-cbeWN56Y.js";import"./check-BgyUvS3Q.js";import"./useToggleState-CEdjZTYx.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
