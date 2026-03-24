import{j as e}from"./iframe-CPefQOMB.js";import{C as m}from"./CheckboxGroup-BYqG4XtA.js";import{C as p}from"./Checkbox-Cz18Su8p.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-HmUKiVb0.js";import"./utils-DEaTr3Fo.js";import"./clsx-B-dksMZM.js";import"./Text-DYVOn2Uj.js";import"./useFocusRing-C-wxtkDE.js";import"./index-DzMaIh1E.js";import"./index-iwjKZAtl.js";import"./clsx-Ciqy0D92.js";import"./Text-CxFNT2uR.js";import"./Label-BiC2qn7L.js";import"./Button-CZP9j9FA.js";import"./Hidden-CMfLv80K.js";import"./useLabels-CyIDVwdt.js";import"./useButton-h3Du59Bt.js";import"./Dialog-jsJXy4uT.js";import"./RSPContexts-BAtoVYGO.js";import"./OverlayArrow-CS9fCMXG.js";import"./useResizeObserver-ChhirTSn.js";import"./useControlledState-D3MUrnpH.js";import"./Collection-DDNjRncz.js";import"./index-CF4t0_Q1.js";import"./Separator-BdNCc4Jn.js";import"./SelectionManager-D2GrdEi7.js";import"./useEvent-DReQVrX4.js";import"./scrollIntoView-SfcehlMa.js";import"./SelectionIndicator-Bo5GGMOT.js";import"./useDescription-Cd_q-cvg.js";import"./ListKeyboardDelegate-B7f2bhga.js";import"./PressResponder-8GylUK33.js";import"./useLocalizedStringFormatter-2aSusuIC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTyWSrAF.js";import"./getScrollParent-Dax8D36d.js";import"./VisuallyHidden-En7Y8aD0.js";import"./x-BnYSOvfM.js";import"./createLucideIcon-CMS1EKmC.js";import"./useLocalizedStringFormatter-D3LPWJw0.js";import"./Heading-BSJNcz6Y.js";import"./Button-BiVXJ2cY.js";import"./Button.module-BB7N-cLd.js";import"./info-BB-Sp21-.js";import"./Popover-DvBVFfgk.js";import"./Form-CpmcMTFY.js";import"./useField-BdgyFtJ7.js";import"./check-CDWB4bmg.js";import"./useToggleState-DujT4ywD.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
