import{j as e}from"./iframe-CCMGVGRR.js";import{C as m}from"./CheckboxGroup-BVzEGVK3.js";import{C as p}from"./Checkbox-CndZBIjQ.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-Badiw3DZ.js";import"./utils-CwTBQPYQ.js";import"./clsx-B-dksMZM.js";import"./Text-DiHmm5Pv.js";import"./useFocusRing-4nh_xN_C.js";import"./index-BpVA6GFa.js";import"./index-DuUWKZbo.js";import"./clsx-Ciqy0D92.js";import"./Text-Cca6IUbd.js";import"./Label-CC8vxu_R.js";import"./Button-BTioCIMN.js";import"./Hidden-eOXH6NuV.js";import"./useLabels-DwvJ4AsJ.js";import"./useButton-DXzhQe-S.js";import"./Dialog-DFS2zTQx.js";import"./RSPContexts-D6gxgGOj.js";import"./OverlayArrow-lYKfDaAq.js";import"./useResizeObserver-CwRgjzZm.js";import"./useControlledState-BSOETMpm.js";import"./Collection-BRprm1Ce.js";import"./index-DH0Sfgaw.js";import"./Separator-B2qpKCcC.js";import"./SelectionManager-DrUqtnB-.js";import"./useEvent-z_NHm0bM.js";import"./scrollIntoView-Ccnc1JTb.js";import"./SelectionIndicator-US_sY-3Y.js";import"./useDescription-CYVlcFrO.js";import"./ListKeyboardDelegate-C8kLx-MG.js";import"./PressResponder-DKpcpJtb.js";import"./useLocalizedStringFormatter-DNuEa-zK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CGFvIYjM.js";import"./VisuallyHidden-BaceOK9t.js";import"./useLocalizedStringFormatter-_In-1XII.js";import"./Button-BWDJLAAo.js";import"./Button.module-CtQ1deO8.js";import"./x-C3rWcS5D.js";import"./createLucideIcon-eJfvaVUR.js";import"./Heading-3-vD8cVw.js";import"./info-BUhRljNa.js";import"./Popover-DeUtyauC.js";import"./useFormValidation-C4vxnw1-.js";import"./useField-Bew1AqZA.js";import"./Form-DqFaWl9v.js";import"./check-DrBpqMTL.js";import"./useToggleState-CGDXvblj.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
