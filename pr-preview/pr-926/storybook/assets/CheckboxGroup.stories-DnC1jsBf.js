import{j as e}from"./iframe-DsvQYhcC.js";import{C as m}from"./CheckboxGroup-lIF08MVm.js";import{C as p}from"./Checkbox-D8Sg3-hh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DLaiVMtb.js";import"./utils-ywWYrjb7.js";import"./clsx-B-dksMZM.js";import"./Text-CP8B1hu_.js";import"./useFocusRing-DKFJXZq3.js";import"./index-p-5mA69d.js";import"./index-lWE3LdPA.js";import"./clsx-Ciqy0D92.js";import"./Text-459A5tOX.js";import"./Label-Ct3s0ZEV.js";import"./Button-Btfg7XlR.js";import"./Hidden-B3O_gp6m.js";import"./useLabels-DkA2Lq0I.js";import"./useButton-DqkMJO2v.js";import"./Dialog-CQOnSuHh.js";import"./RSPContexts-WMzRS-8a.js";import"./OverlayArrow-p4IEUD2v.js";import"./useResizeObserver-C2khB6tD.js";import"./useControlledState-Wd1IkDYb.js";import"./Collection-Dnsun6FV.js";import"./index-BMZui9EA.js";import"./Separator-Bn4Q9b9u.js";import"./SelectionManager-DuoCT_wL.js";import"./useEvent-J3uC9IEt.js";import"./scrollIntoView-Be8AA3u2.js";import"./SelectionIndicator-CaHad9jV.js";import"./useDescription-DjLBrBt_.js";import"./ListKeyboardDelegate-DY9Uc2al.js";import"./PressResponder-Co6fNP2S.js";import"./useLocalizedStringFormatter-CzBDZOTF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CxiqfrM9.js";import"./VisuallyHidden-DAnD-YJl.js";import"./useLocalizedStringFormatter-BeNGXtO2.js";import"./Button-DiEGm4BJ.js";import"./Button.module-CtQ1deO8.js";import"./x-HSDG5LTS.js";import"./createLucideIcon-BGno6_ea.js";import"./Heading-C59R7gqX.js";import"./info-CFCKcNDE.js";import"./Popover-DDYLGiE6.js";import"./useFormValidation-DyleTNHg.js";import"./useField-DJ2N2jIH.js";import"./Form-FKCC86QD.js";import"./check-CziFztdm.js";import"./useToggleState-Cd_GIFi6.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
