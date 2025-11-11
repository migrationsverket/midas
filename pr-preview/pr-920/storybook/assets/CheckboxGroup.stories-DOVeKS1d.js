import{j as e}from"./iframe-Da_9xyu_.js";import{C as m}from"./CheckboxGroup-BQJy-ism.js";import{C as p}from"./Checkbox-Bpnnmvag.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DZB4_8Mx.js";import"./utils-ClY4JNQR.js";import"./clsx-B-dksMZM.js";import"./Text-Etr2qgQp.js";import"./useFocusRing-rtksAyVi.js";import"./index-MfarlIzn.js";import"./index-DCiPdHXY.js";import"./clsx-Ciqy0D92.js";import"./Text-Bpadz2Uk.js";import"./Label-Cj7VglaV.js";import"./Button-Dv74RsAx.js";import"./Hidden-DT7cFiAL.js";import"./useLabels-D-XK_IKO.js";import"./useButton-DKgQBPu0.js";import"./Dialog-BXeBqqwi.js";import"./RSPContexts-aKhEJDC9.js";import"./OverlayArrow-DPQF2w6A.js";import"./useResizeObserver-Dbx4ZK2I.js";import"./useControlledState-sFCHxnJW.js";import"./Collection-DGcFDdpZ.js";import"./index-B5OSadzL.js";import"./Separator-lJMxapZL.js";import"./SelectionManager-ClHU_lpz.js";import"./useEvent-BIZdtvwm.js";import"./scrollIntoView-qmn4W8AT.js";import"./SelectionIndicator-UANf4695.js";import"./useDescription-_3ZepyIS.js";import"./ListKeyboardDelegate-L3G4BzOm.js";import"./PressResponder-DTFWPjXm.js";import"./useLocalizedStringFormatter-BgiQH0tm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CWjPalW2.js";import"./VisuallyHidden-BhEjSkfL.js";import"./useLocalizedStringFormatter-BjaGVHL_.js";import"./Button-BEWcUzao.js";import"./Button.module-CtQ1deO8.js";import"./x-C9jcFJpy.js";import"./createLucideIcon-CErKZ7dc.js";import"./Heading-DKIPWLCz.js";import"./info-BXMi9Nhn.js";import"./Popover-BjxGbg7_.js";import"./useFormValidation-CGVkY3Su.js";import"./useField-BVslVsTX.js";import"./Form-BWOt4BoA.js";import"./check-XRBT51R1.js";import"./useToggleState-D-GuuLzV.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
