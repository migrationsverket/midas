import{j as e}from"./iframe-B_PHmpba.js";import{C as m}from"./CheckboxGroup-DMTfAnNQ.js";import{C as p}from"./Checkbox-DGkhpH_a.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BXXDRXhV.js";import"./utils-BLTu9tyH.js";import"./clsx-B-dksMZM.js";import"./Text-De6EL-yD.js";import"./useFocusRing-pLoaDniN.js";import"./index-BnBRJ5Vs.js";import"./index-CohS7fjA.js";import"./clsx-Ciqy0D92.js";import"./Text-CtWvGN0y.js";import"./Label-PU7v2H1Q.js";import"./Button-BH_CQ35-.js";import"./Hidden-Dyk48KDQ.js";import"./useLabel-um5sn7L2.js";import"./useLabels-CuRAxugE.js";import"./useButton-Bt5iDQO5.js";import"./Dialog-G_WAZi7N.js";import"./RSPContexts-OmKNYCMF.js";import"./OverlayArrow-BjarYFOb.js";import"./useResizeObserver-DHAsNRYl.js";import"./useControlledState-Dbw9fj5d.js";import"./Collection-BKVVAs3j.js";import"./index-DOWGX5s9.js";import"./Separator-CxT5zDCP.js";import"./SelectionManager-DS0VawDx.js";import"./useEvent-CJsDiKXk.js";import"./scrollIntoView-DSAWaCcr.js";import"./SelectionIndicator-B_mzrc3_.js";import"./useDescription-DqrvnjB2.js";import"./ListKeyboardDelegate-BPjl3m2i.js";import"./PressResponder-CZAv_m3s.js";import"./useLocalizedStringFormatter-BGDlAUue.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CfhZQOiv.js";import"./getScrollParent-CcwRz91U.js";import"./VisuallyHidden-_6q0RJ_b.js";import"./x-Cqzwa68L.js";import"./createLucideIcon-Dp1bKuvD.js";import"./useLocalizedStringFormatter-B5yN6xVU.js";import"./Heading-hcI3iOWv.js";import"./Button-Bu0PoYIz.js";import"./Button.module-BB7N-cLd.js";import"./info-C-N2GHIj.js";import"./Popover-UnA4gNpX.js";import"./Form-BtnSLaxH.js";import"./useField-CIqjGijQ.js";import"./check-DgDscPoG.js";import"./useToggleState-CZo2MsPH.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
