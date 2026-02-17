import{j as e}from"./iframe-eQfj5TyR.js";import{C as m}from"./CheckboxGroup-JJcAK7WK.js";import{C as p}from"./Checkbox-Dq9YHRW8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Banutwb4.js";import"./utils-B1fyRi3f.js";import"./clsx-B-dksMZM.js";import"./Text-Adt_UDUW.js";import"./useFocusRing-FgnAwrg-.js";import"./index-BXO00OuG.js";import"./index-CIA7hP3J.js";import"./clsx-Ciqy0D92.js";import"./Text-D1gBRjyS.js";import"./Label-DnLKZArJ.js";import"./Button-Bl9G2J9w.js";import"./Hidden-DKvQ0UCo.js";import"./useLabels-D68jkqrd.js";import"./useButton-Bt3yaOy2.js";import"./Dialog-BdOZRepl.js";import"./RSPContexts-Ds5n5rrC.js";import"./OverlayArrow-AQ1O_GLb.js";import"./useResizeObserver-CL5hCH-U.js";import"./useControlledState-BQkMHVAJ.js";import"./Collection-C_EJZkl4.js";import"./index-B9-vxnY5.js";import"./Separator-B13PBXpT.js";import"./SelectionManager-BSPVAL4T.js";import"./useEvent-gQ4dcrYq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTrHW9Yg.js";import"./useDescription-BaMN0osh.js";import"./ListKeyboardDelegate-HsGsFezV.js";import"./PressResponder-B-WzlAfD.js";import"./useLocalizedStringFormatter-CGYFFa5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DOTj5QaS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wNpkr7eA.js";import"./Button-D4E-mWNd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-V6SfCR6T.js";import"./createLucideIcon-BnydqwKc.js";import"./x-CCJfjDcD.js";import"./Heading-BZN5YGPJ.js";import"./info-V1oAvwTF.js";import"./Popover-XnePCbGS.js";import"./useFormValidation-Ccm2Lj-G.js";import"./useField-CfpZE-ZJ.js";import"./Form-DlhcELXP.js";import"./check-jhzSZYdH.js";import"./useToggleState-C-9PkayM.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
