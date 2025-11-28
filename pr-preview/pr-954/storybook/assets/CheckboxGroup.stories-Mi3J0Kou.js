import{j as e}from"./iframe-Bb5Ll2Q_.js";import{C as m}from"./CheckboxGroup-BjMmhVmv.js";import{C as p}from"./Checkbox-CcTGHZJn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DHSOLBGK.js";import"./utils-DUu2sqhX.js";import"./clsx-B-dksMZM.js";import"./Text-ATBrkPw2.js";import"./useFocusRing-Che-PLf9.js";import"./index-hJZDNH39.js";import"./index-DaWpECPB.js";import"./clsx-Ciqy0D92.js";import"./Text-DGL_pGNa.js";import"./Label-BfGjPsAJ.js";import"./Button-CLgs0RHO.js";import"./Hidden-CIkUgucj.js";import"./useLabels-B4ytSInX.js";import"./useButton-Drix0Soe.js";import"./Dialog-CsqxZxHZ.js";import"./RSPContexts-BF108fh5.js";import"./OverlayArrow-DIocl6xa.js";import"./useResizeObserver-DQ_T9M9d.js";import"./useControlledState-CQTokbDY.js";import"./Collection-DcqfTVLD.js";import"./index-DIszDctj.js";import"./Separator-CDZt8W4n.js";import"./SelectionManager-CNhGT5Rw.js";import"./useEvent-DFeGPwZo.js";import"./scrollIntoView-xcKTDZvX.js";import"./SelectionIndicator-v0XOazhO.js";import"./useDescription-C_IELAs0.js";import"./ListKeyboardDelegate-B6kaB3YJ.js";import"./PressResponder-CFEyG_-H.js";import"./useLocalizedStringFormatter-BmXF49Fn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dwp_thdi.js";import"./VisuallyHidden-BT0heQ-H.js";import"./Button-DcMiNBaO.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-r0kj4Pje.js";import"./createLucideIcon-BTIRr7kd.js";import"./x-na7-pW2Y.js";import"./Heading-nnfuclA9.js";import"./info-DpzzwP6m.js";import"./Popover-Bf4yOUJ_.js";import"./useFormValidation-CmG_kr67.js";import"./useField-SUENPtea.js";import"./Form-DMk9kVb1.js";import"./check-RuETopJR.js";import"./useToggleState-CI7SSzxa.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
