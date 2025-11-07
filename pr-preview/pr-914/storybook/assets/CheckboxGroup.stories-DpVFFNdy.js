import{j as e}from"./iframe-CxZjhegp.js";import{C as m}from"./CheckboxGroup-yPyWm6yv.js";import{C as p}from"./Checkbox-CL5me0w0.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-BnSMhr-e.js";import"./utils-t_UvxsPo.js";import"./clsx-B-dksMZM.js";import"./Text-BxKbXzcf.js";import"./useFocusRing-CuAhJjMk.js";import"./index-Df8cI5Fd.js";import"./index-BpV2s7Sq.js";import"./clsx-Ciqy0D92.js";import"./Text-BO0XgLDT.js";import"./Label-DhCLB0Dv.js";import"./Button-DTaXrG8H.js";import"./Hidden-CwZ-5pz7.js";import"./useLabels-DYf1S3Mk.js";import"./useButton-D6P1u6Z6.js";import"./Dialog-CjYQPizy.js";import"./RSPContexts-DTcZWwa3.js";import"./OverlayArrow-DrSy-WII.js";import"./useResizeObserver-DZzFLSdN.js";import"./useControlledState-1MfuKuam.js";import"./Collection-CafIcahF.js";import"./index-B5N5Dt5p.js";import"./Separator-AuCHvk97.js";import"./SelectionManager-oMxquwju.js";import"./useEvent-DWA2S5R6.js";import"./scrollIntoView-RMCpJVNW.js";import"./SelectionIndicator-BXZJR1xI.js";import"./useDescription-B-louMJX.js";import"./ListKeyboardDelegate-DrR1Bcbc.js";import"./PressResponder-DpgLzDIs.js";import"./useLocalizedStringFormatter-CFCh-lbJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-VbWZMWd3.js";import"./VisuallyHidden-C8ai3rtG.js";import"./useLocalizedStringFormatter-Bd44m9N7.js";import"./Button-DmCxpU9a.js";import"./Button.module-CtQ1deO8.js";import"./x-DyUBUrN6.js";import"./createLucideIcon-Wfv3XnU7.js";import"./Heading-yIWuvTWW.js";import"./info-Cep2xzFo.js";import"./Popover-Dzf1c64m.js";import"./useFormValidation-DTcyk69g.js";import"./useField-B0rwbLOa.js";import"./Form-TS4hpq6u.js";import"./check-CRPpb1jH.js";import"./useToggleState-CxjWSHgk.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
