import{j as e}from"./iframe-Cs23SNnM.js";import{C as m}from"./CheckboxGroup-Bcvir1jh.js";import{C as p}from"./Checkbox-ClujapYh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B4JZATSQ.js";import"./utils-C2_5pI3u.js";import"./clsx-B-dksMZM.js";import"./Text-BDa847Zj.js";import"./useFocusRing-DZKbXbQf.js";import"./index-B6ChyHFT.js";import"./index-lqer093p.js";import"./clsx-Ciqy0D92.js";import"./Text-CyM4GXds.js";import"./Label-DEw2-4Bz.js";import"./Button-CXOOs0ZW.js";import"./Hidden-lOkM-Rk2.js";import"./useLabels-RZtTtySY.js";import"./useButton-CSZehrgP.js";import"./Dialog-DnU-KzCJ.js";import"./RSPContexts-DaT_svkY.js";import"./OverlayArrow-BN9INqYv.js";import"./useResizeObserver-CqpeR5GJ.js";import"./useControlledState-BY7I6-dG.js";import"./Collection-BHf1D4jH.js";import"./index-BTAsETmW.js";import"./Separator-ChO5U5E4.js";import"./SelectionManager-kFiYZswY.js";import"./useEvent-DER49hg5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cc3mSVfG.js";import"./useDescription-DCoi52oS.js";import"./ListKeyboardDelegate-Cy4sz5Tt.js";import"./PressResponder-CnMFxEty.js";import"./useLocalizedStringFormatter-CzEFj0TX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DsrxlH0c.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BbktJI4p.js";import"./Button-BCDZMRqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BjD1Xbww.js";import"./createLucideIcon-Cm58SIEr.js";import"./x-DXozcBPC.js";import"./Heading-FizbWtiG.js";import"./info-Dw1Q7jRF.js";import"./Popover-Dove32Y-.js";import"./useFormValidation-jHVQBzvy.js";import"./useField-QHKuD7kq.js";import"./Form-CVu0dRDh.js";import"./check-CqMkfClo.js";import"./useToggleState-BliHoc2i.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
