import{j as e}from"./iframe-CFSsLpc3.js";import{C as m}from"./CheckboxGroup-CQK0ps38.js";import{C as p}from"./Checkbox-B2WI4JQZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D6ZDrv96.js";import"./utils-CgvAx7Eh.js";import"./clsx-B-dksMZM.js";import"./Text-CxyFIK0P.js";import"./useFocusRing-BscyqCba.js";import"./index-ov8VoHM9.js";import"./index-B-NeDNxk.js";import"./clsx-Ciqy0D92.js";import"./Text-DJekINTm.js";import"./Label-Bgvq3kDD.js";import"./Button-BA4ocZWH.js";import"./Hidden-CLuFLk7t.js";import"./useLabel-3d-jaeMs.js";import"./useLabels-CNE6UZfT.js";import"./useButton-ddrptB5P.js";import"./Dialog-CKK-WVHx.js";import"./RSPContexts-Dl7sCpzY.js";import"./OverlayArrow-CSP9UkYr.js";import"./useResizeObserver-CIJyvcl5.js";import"./useControlledState-CbBMw6Jg.js";import"./Collection-Cd7KKzRT.js";import"./index-OvV4dgoH.js";import"./Separator-rmfqRqKb.js";import"./SelectionManager-88QcvJjb.js";import"./useEvent-DS2KGNQU.js";import"./scrollIntoView-DIXoB_F8.js";import"./SelectionIndicator-8krNnwqX.js";import"./useDescription-DR9fGcHM.js";import"./ListKeyboardDelegate-DF2nCrcP.js";import"./PressResponder-Ce1RPxUw.js";import"./useLocalizedStringFormatter-kozoot1o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DG4f8YqV.js";import"./getScrollParent-meA_uFiD.js";import"./VisuallyHidden-CJUN9Oa8.js";import"./ModalOverlay-BVhnULLD.js";import"./x-BqPwmm8B.js";import"./createLucideIcon-DwZpSpKK.js";import"./useLocalizedStringFormatter-9a5YAOSR.js";import"./Heading-BC1iKRRv.js";import"./Button-BpZ-gEJa.js";import"./Button.module-BB7N-cLd.js";import"./info-Cko7SSA9.js";import"./Popover-rwzWFW5V.js";import"./Form-DqURqGCQ.js";import"./useField-CPTxJIMP.js";import"./check-BC0jy5p5.js";import"./useToggleState-DvUZEIsi.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
