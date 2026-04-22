import{j as e}from"./iframe-DQmFqJHS.js";import{C as m}from"./CheckboxGroup-eRWD7Gp2.js";import{C as p}from"./Checkbox-wIHWnxmd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CaxPGIch.js";import"./utils-BWrI25uH.js";import"./clsx-B-dksMZM.js";import"./Text-D7G5v1zt.js";import"./useFocusRing-DItV0gqG.js";import"./index-DbK-4WGE.js";import"./index-D4usGqcY.js";import"./clsx-Ciqy0D92.js";import"./Text-Dv2vHw0w.js";import"./Label-BuAIsOY6.js";import"./Button-CvJGdaRR.js";import"./Hidden-D-Me28_w.js";import"./useLabel-Chhaff-p.js";import"./useLabels-BqXx-hbX.js";import"./useButton-DialTVJ6.js";import"./Dialog-B1Ri3IBJ.js";import"./RSPContexts-DADBvuUA.js";import"./OverlayArrow-nTMlyTz5.js";import"./useResizeObserver-B5pvTcE0.js";import"./useControlledState-C5li1zvV.js";import"./Collection-PnuOJgDp.js";import"./index-C3OZM2iR.js";import"./Separator-BuFyYAhL.js";import"./SelectionManager-4dXQCzrP.js";import"./useEvent-CTB_6RyV.js";import"./scrollIntoView-5ZKvz8fx.js";import"./SelectionIndicator-BQPUdFWW.js";import"./useDescription-h9Po8Y0i.js";import"./ListKeyboardDelegate-BwQ5f0g5.js";import"./PressResponder-DntQbGBB.js";import"./useLocalizedStringFormatter-BqAD4sFO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpjnqEbo.js";import"./getScrollParent-DjSabJcp.js";import"./VisuallyHidden-CzKNKfXb.js";import"./ModalOverlay-B8F_0DDS.js";import"./x-Dm_VUSkk.js";import"./createLucideIcon-BG_KaWyL.js";import"./useLocalizedStringFormatter-pqjFMR5W.js";import"./Heading-GxnpDQb1.js";import"./Button-Cc39pfDx.js";import"./Button.module-BB7N-cLd.js";import"./info-DqqQK25k.js";import"./Popover-DDzYbG9A.js";import"./Form-icO7fyR0.js";import"./useField-BpO0DqgO.js";import"./check-nWUL1Qv6.js";import"./useToggleState-FFKo_5I2.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
