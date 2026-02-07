import{j as e}from"./iframe-CuWNjTRb.js";import{C as m}from"./CheckboxGroup-Dk_NE9Zk.js";import{C as p}from"./Checkbox-Pt4DIb0C.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DPMeHFzQ.js";import"./utils-bTshPwuy.js";import"./clsx-B-dksMZM.js";import"./Text-YALf1zl3.js";import"./useFocusRing-BOU0QdDc.js";import"./index-BVMh-c2E.js";import"./index-BG9E7EvN.js";import"./clsx-Ciqy0D92.js";import"./Text-nCheY5Fg.js";import"./Label-D33s1NFV.js";import"./Button-DcYqIknv.js";import"./Hidden-CC5A1H5b.js";import"./useLabels-Z2fhjGWT.js";import"./useButton-CheLbNvO.js";import"./Dialog-C1N1-NMW.js";import"./RSPContexts-BKEbUSq3.js";import"./OverlayArrow-DUDD-sla.js";import"./useResizeObserver-DBJKVC2-.js";import"./useControlledState-JaG_E2x3.js";import"./Collection-DcW90qW7.js";import"./index-BA03wPss.js";import"./Separator-Cra6whlh.js";import"./SelectionManager-D08BgZnb.js";import"./useEvent-MAJC2drM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BKZlEmjT.js";import"./useDescription-BnU31H3h.js";import"./ListKeyboardDelegate-2SqsKb6i.js";import"./PressResponder-BbRZjAYy.js";import"./useLocalizedStringFormatter-DE24hlzI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cd_h8R4s.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJty33Lz.js";import"./Button-xnDb1Lqn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDPSUyK3.js";import"./createLucideIcon-CyYJB5cI.js";import"./x-Br7Dc4zV.js";import"./Heading-5XGAzLHj.js";import"./info-DGHQsG-7.js";import"./Popover-CktEKB3B.js";import"./useFormValidation-D4Myy34u.js";import"./useField-BQlDoErg.js";import"./Form-BeXtLCxi.js";import"./check-B3WwXTK5.js";import"./useToggleState-DTKZhdod.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
