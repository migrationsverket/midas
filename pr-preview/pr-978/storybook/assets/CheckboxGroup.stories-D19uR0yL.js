import{j as e}from"./iframe-BgZjYXda.js";import{C as m}from"./CheckboxGroup-QwL9DXTi.js";import{C as p}from"./Checkbox-jXTaPii8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B_6bKRLN.js";import"./utils-D0CD63H9.js";import"./clsx-B-dksMZM.js";import"./Text-BdUrBZw-.js";import"./useFocusRing-BCl8bI7q.js";import"./index-DsdCiTSh.js";import"./index-MXE8Cyql.js";import"./clsx-Ciqy0D92.js";import"./Text-CRywFydi.js";import"./Label-DEef3_3n.js";import"./Button-BEN3V4yN.js";import"./Hidden-CxgDdtDK.js";import"./useLabels-B7Wr4Ixw.js";import"./useButton-GZvAYJ-B.js";import"./Dialog-BUsOas3r.js";import"./RSPContexts-B3AEdr6z.js";import"./OverlayArrow-CHMhOczE.js";import"./useResizeObserver-nbkz3K4G.js";import"./useControlledState-BOn_mVp6.js";import"./Collection-urK1xMW0.js";import"./index-BafI-QEC.js";import"./Separator-CQGOAX64.js";import"./SelectionManager-DyAXS5mS.js";import"./useEvent-CHanbtbs.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DF72ZQHt.js";import"./useDescription-C0V2PFjt.js";import"./ListKeyboardDelegate-CLVO0QEy.js";import"./PressResponder-DAi97wRC.js";import"./useLocalizedStringFormatter-CBItuOna.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2QSIBSW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden--CMfLrKZ.js";import"./Button-C93M6E-Z.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-wqfGz20J.js";import"./createLucideIcon-BhiKWk6O.js";import"./x-CxMc9Wke.js";import"./Heading-DFgHxESE.js";import"./info-DL4VFBGx.js";import"./Popover-BMzBgMld.js";import"./useFormValidation-DTSDYxU2.js";import"./useField-CibIDzOa.js";import"./Form-CZdM7lDn.js";import"./check-DJrqgMNg.js";import"./useToggleState-PndR13_P.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
