import{j as e}from"./iframe-DF-gckEl.js";import{C as m}from"./CheckboxGroup-EZe_NhCH.js";import{C as p}from"./Checkbox-DC-nANEX.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-nZ-6NevE.js";import"./utils-xE_2EOTS.js";import"./clsx-B-dksMZM.js";import"./Text-CD93M0aA.js";import"./useFocusRing-DVmaifLp.js";import"./index-BB1CKHGL.js";import"./index-B-8oVGre.js";import"./clsx-Ciqy0D92.js";import"./Text-mrdWRvrC.js";import"./Label-Cw7CnjjN.js";import"./Button-DfFeWMER.js";import"./Hidden-CnADKIpW.js";import"./useLabels-DYYbGYck.js";import"./useButton-D5_aypw0.js";import"./Dialog-Dp3Ryqzc.js";import"./RSPContexts-CRcRJYcx.js";import"./OverlayArrow-fvY2aP3t.js";import"./useResizeObserver-toiQEKaZ.js";import"./useControlledState-BozieDQw.js";import"./Collection-B0md0RaS.js";import"./index-CQSyT-Ss.js";import"./Separator-DT4h2oOV.js";import"./SelectionManager--p2EeLu6.js";import"./useEvent-BG4kCyp-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C2_foj_8.js";import"./useDescription-BrazaQD9.js";import"./ListKeyboardDelegate-CBJAAlnU.js";import"./PressResponder-BdVYCRiG.js";import"./useLocalizedStringFormatter-B49X21jk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-r1pRCCBf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-WVzpTwv1.js";import"./Button-xgruqnpI.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CPX24HR9.js";import"./createLucideIcon-DlP1PWjK.js";import"./x-D5acHrs_.js";import"./Heading-CDJzqsYL.js";import"./info-CyicB_nd.js";import"./Popover-CJEHa82s.js";import"./useFormValidation-kF6lMwdG.js";import"./useField-BJ4J1Su9.js";import"./Form-CzwbKObq.js";import"./check-DAnsi3Zu.js";import"./useToggleState-BsjLAOmR.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
