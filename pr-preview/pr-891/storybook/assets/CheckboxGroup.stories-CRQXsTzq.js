import{j as e}from"./iframe-CYLbMBt8.js";import{C as m}from"./CheckboxGroup-BIVio2j3.js";import{C as p}from"./Checkbox-H1i8VLgb.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-DJNlDTNE.js";import"./utils-CtYggOsK.js";import"./clsx-B-dksMZM.js";import"./Text-DZ37ixFx.js";import"./useFocusRing-sTPNQCE4.js";import"./index-71tlDv88.js";import"./index-Brb7X42m.js";import"./clsx-Ciqy0D92.js";import"./Text-DhjMuTd4.js";import"./Label-C92J_L72.js";import"./Button-CKpDaDrO.js";import"./Hidden-CCZJVzSx.js";import"./useLabels-3FTzkieI.js";import"./useButton-BztmJ2aQ.js";import"./Dialog-DkthveGe.js";import"./RSPContexts-D_FN0ARC.js";import"./OverlayArrow-B3H3CcIW.js";import"./useResizeObserver-BscoOqu3.js";import"./useControlledState-CH8LbPDY.js";import"./Collection-DJE8uqKG.js";import"./index-9eExQ8qy.js";import"./Separator-DPN-eo4d.js";import"./SelectionManager-CgY7Q1Vw.js";import"./useEvent-D0F19b6G.js";import"./scrollIntoView-BB2jjYaX.js";import"./SelectionIndicator-CgZ85TAI.js";import"./useDescription-BNrAS8PP.js";import"./ListKeyboardDelegate-Dtrg30Bx.js";import"./PressResponder-JVQh2cU2.js";import"./useLocalizedStringFormatter-BCspmRwR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CQS5bk9q.js";import"./VisuallyHidden-C1dzkIOy.js";import"./useLocalizedStringFormatter-YzHAow_9.js";import"./Button-CwJUY5Uh.js";import"./Button.module-CtQ1deO8.js";import"./x-eOP32S9V.js";import"./createLucideIcon-C_sXulXo.js";import"./Heading-CSUTgwbg.js";import"./info-DGQpYCQn.js";import"./Popover-CZBSLFot.js";import"./useFormValidation-D94GToUh.js";import"./useField-QIAbAcEq.js";import"./Form-eEMprkRe.js";import"./check-Cojj7xjO.js";import"./useToggleState-DcFVVpwp.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
