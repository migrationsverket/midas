import{j as e}from"./iframe-DEp2oG17.js";import{C as m}from"./CheckboxGroup-CpU70OUd.js";import{C as p}from"./Checkbox-l05fczhW.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DN8iUwVl.js";import"./utils-BdDw9a3H.js";import"./clsx-B-dksMZM.js";import"./Text-CI29p5RE.js";import"./useFocusRing-Mb90B-sd.js";import"./index-DjxIfj_1.js";import"./index-bV2pO4CY.js";import"./clsx-Ciqy0D92.js";import"./Text-DdOwJXNS.js";import"./Label-RLPspCnC.js";import"./Button-C_5E3NeR.js";import"./Hidden-CABjF7lx.js";import"./useLabels-Cyk4YZSQ.js";import"./useButton-tx-eN_jr.js";import"./Dialog-DRkN8dn6.js";import"./RSPContexts-BpY8Nizo.js";import"./OverlayArrow-B0MMMRPL.js";import"./useResizeObserver--ydgpBRu.js";import"./useControlledState-B8G_0Le1.js";import"./Collection-DBUct1uX.js";import"./index-9hY5KZHS.js";import"./Separator-CYopJuEZ.js";import"./SelectionManager-D-dREuN-.js";import"./useEvent-CKG_1VwL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cn2yDPPG.js";import"./useDescription-8UxhvEwk.js";import"./ListKeyboardDelegate-Cyujz9V4.js";import"./PressResponder-Bzc01V_U.js";import"./useLocalizedStringFormatter-BceleSe3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQQrHCuS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CS5LSF1P.js";import"./Button-DbApqNlR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCi1uvX3.js";import"./createLucideIcon-CCWrt2pH.js";import"./x-BSkDXoR2.js";import"./Heading-DumaOAFC.js";import"./info-B2RUqdbH.js";import"./Popover-yb3Et5A6.js";import"./useFormValidation-DUv_C9aQ.js";import"./useField-DUJQ4FTk.js";import"./Form-D1N3FAIh.js";import"./check-B2Z0mvU0.js";import"./useToggleState-TxPhaChj.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
