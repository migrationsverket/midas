import{j as e}from"./iframe-D7Zuc-eZ.js";import{C as m}from"./CheckboxGroup-DMz0s3Zo.js";import{C as p}from"./Checkbox-27OmmSMm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CPRxs1lF.js";import"./utils-BiMXr0U2.js";import"./clsx-B-dksMZM.js";import"./Text-CwUj7ln9.js";import"./useFocusRing-B1DA-kmZ.js";import"./index-P0vLAtIQ.js";import"./index-Dzd6xkVH.js";import"./clsx-Ciqy0D92.js";import"./Text-D6rxf28L.js";import"./Label-DLxAcWAm.js";import"./Button-DK5fi9wQ.js";import"./Hidden-D0GIwlxM.js";import"./useLabels-cw0VgUfo.js";import"./useButton-UDg4Vaiu.js";import"./Dialog-DJJX7omV.js";import"./RSPContexts-CRpFKCLK.js";import"./OverlayArrow-Ix3BDB2F.js";import"./useResizeObserver-l-_q_PQ4.js";import"./useControlledState-DIhMi3rJ.js";import"./Collection-CceFFmqi.js";import"./index-EN3D0NR3.js";import"./Separator-D4nkVwFZ.js";import"./SelectionManager-CEOPFx8V.js";import"./useEvent-Dir0o8KD.js";import"./scrollIntoView-DySWJs71.js";import"./SelectionIndicator-D-bE468Y.js";import"./useDescription-BKQXPKmX.js";import"./ListKeyboardDelegate-BR80anMz.js";import"./PressResponder-Vt5v5mpO.js";import"./useLocalizedStringFormatter-DxUzIujy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CUIdUX5W.js";import"./VisuallyHidden-B63FC8rR.js";import"./useLocalizedStringFormatter-CI8X4Tw9.js";import"./Button-4Dy92-64.js";import"./Button.module-CtQ1deO8.js";import"./x-BKMZouJb.js";import"./createLucideIcon-BQQxESn4.js";import"./Heading-dPFitHZ6.js";import"./info-Bz3lQT5m.js";import"./Popover-C2iNmJM9.js";import"./useFormValidation-BWUsfsfP.js";import"./useField-CA4s6n78.js";import"./Form-Dva3W2SM.js";import"./check-DohPjGyK.js";import"./useToggleState-G6sx2Fbk.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
