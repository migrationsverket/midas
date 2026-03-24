import{j as e}from"./iframe-DRF618FK.js";import{C as m}from"./CheckboxGroup-CaatXcBW.js";import{C as p}from"./Checkbox-DQWCfxOO.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D4ZV87iq.js";import"./utils-CHqxZhUB.js";import"./clsx-B-dksMZM.js";import"./Text-DzrFOIN-.js";import"./useFocusRing-fA7oZfLd.js";import"./index-Cjz8zzHP.js";import"./index-BaUCNhoE.js";import"./clsx-Ciqy0D92.js";import"./Text-B70hZHmJ.js";import"./Label-BIO1YihC.js";import"./Button-D1u5VWPv.js";import"./Hidden-Dr-og7MG.js";import"./useLabels-C9Po0DaQ.js";import"./useButton-DiQ0m4E1.js";import"./Dialog-C-JGT57i.js";import"./RSPContexts-D-Mj00TC.js";import"./OverlayArrow-BAcCMvYG.js";import"./useResizeObserver-CbD8FbDi.js";import"./useControlledState-2qvD9fXu.js";import"./Collection-D9IGT1mQ.js";import"./index-4E03tZY9.js";import"./Separator-jM6Nw-h1.js";import"./SelectionManager-Dn6WZ7i6.js";import"./useEvent-7_b0iMeF.js";import"./scrollIntoView-NDoO0M_I.js";import"./SelectionIndicator-DjfnhSQR.js";import"./useDescription-BYobcx8b.js";import"./ListKeyboardDelegate-C0cDa1dw.js";import"./PressResponder-DIYKYWRc.js";import"./useLocalizedStringFormatter-DdYi2mM1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZo6R1_0.js";import"./getScrollParent-E0P1bmgx.js";import"./VisuallyHidden-fImUcePD.js";import"./x-C1n_E1v7.js";import"./createLucideIcon-B6lUMAq7.js";import"./useLocalizedStringFormatter-CsD_6hYo.js";import"./Heading-DQ6b2Ur-.js";import"./Button-BUqgdpCe.js";import"./Button.module-BB7N-cLd.js";import"./info-D25gzQeR.js";import"./Popover-5iM4d1SC.js";import"./Form-DM0uwM-A.js";import"./useField-BALZisil.js";import"./check-CVrAzfNW.js";import"./useToggleState-D3aRqPPt.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
