import{j as e}from"./iframe-B6mQtHg_.js";import{C as m}from"./CheckboxGroup-DQ3uy9LK.js";import{C as p}from"./Checkbox-Wl7b2kJm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DsUm8Cjt.js";import"./utils-BRho1dRj.js";import"./clsx-B-dksMZM.js";import"./Text-P1kAvbTC.js";import"./useFocusRing-D8gmEGCC.js";import"./index-9ySVHYs0.js";import"./index-DwLN6Mmc.js";import"./clsx-Ciqy0D92.js";import"./Text-CC5_ooHx.js";import"./Label-C5lEjVRK.js";import"./Button-fYT3W3-R.js";import"./Hidden-Zr6f3d_F.js";import"./useLabels-BdOR7spR.js";import"./useButton-MzgnshF7.js";import"./Dialog-DWvUH0sc.js";import"./RSPContexts-BXQmSd5O.js";import"./OverlayArrow-D9hgR9BD.js";import"./useResizeObserver-CDTc09hL.js";import"./useControlledState-BRStpwCw.js";import"./Collection-Dh9iTOnN.js";import"./index-iGuCePgB.js";import"./Separator-CEDzVaUO.js";import"./SelectionManager-Cghfwki6.js";import"./useEvent-CRuitgb9.js";import"./scrollIntoView-5Pop8Kz8.js";import"./SelectionIndicator-DxHOx4Ux.js";import"./useDescription-D1JiDHG9.js";import"./ListKeyboardDelegate-l6tisyI0.js";import"./PressResponder-E-1FVKal.js";import"./useLocalizedStringFormatter-Bb8-ILz9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQO17Uvf.js";import"./getScrollParent-D1snmpn8.js";import"./VisuallyHidden-B9plZj9e.js";import"./x-CmYm4Ua_.js";import"./createLucideIcon-BZZ3uCZ8.js";import"./useLocalizedStringFormatter-C_-Wi8FC.js";import"./Heading-K2R40Ekj.js";import"./Button-CjEwSg5p.js";import"./Button.module-BB7N-cLd.js";import"./info-DbWSBnvm.js";import"./Popover-_YB3zJLu.js";import"./useFormValidation-Bzj4B0-M.js";import"./useField-DPGyVH2q.js";import"./Form-CsBpewWU.js";import"./check-Dhy-kqPN.js";import"./useToggleState-795f47NA.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
