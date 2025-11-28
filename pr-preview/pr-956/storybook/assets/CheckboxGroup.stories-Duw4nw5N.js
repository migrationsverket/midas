import{j as e}from"./iframe-B7hDXu73.js";import{C as m}from"./CheckboxGroup-EKm0Q23Y.js";import{C as p}from"./Checkbox-3fmbVWmi.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D2xIq2H5.js";import"./utils-s99TFDuF.js";import"./clsx-B-dksMZM.js";import"./Text-DttWi8Qf.js";import"./useFocusRing-Dv3iYYgG.js";import"./index-jtS56rqd.js";import"./index-MHJ3wPjc.js";import"./clsx-Ciqy0D92.js";import"./Text-5DcUl_uA.js";import"./Label-BVpi5evz.js";import"./Button-Cy0FA1OU.js";import"./Hidden-DGzhCWQ1.js";import"./useLabels-CckQevmM.js";import"./useButton-DUq9O1mu.js";import"./Dialog-D7WVmW3D.js";import"./RSPContexts-D-pV6XVu.js";import"./OverlayArrow-BPyw9L3V.js";import"./useResizeObserver-BlbhWwzq.js";import"./useControlledState-BSmwjkMx.js";import"./Collection-D1kRXIX7.js";import"./index-Cq3kstT8.js";import"./Separator-BAEFzls3.js";import"./SelectionManager-DbQQVh2M.js";import"./useEvent-mDoXMvId.js";import"./scrollIntoView-CtdKJbJH.js";import"./SelectionIndicator-CZyV3WOQ.js";import"./useDescription-CA2-cW-Y.js";import"./ListKeyboardDelegate-If2PEUdT.js";import"./PressResponder-Mw50seMG.js";import"./useLocalizedStringFormatter-CvfchuRE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DC3qewbQ.js";import"./VisuallyHidden-v1Q3RFjC.js";import"./Button-BsMsUWps.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dp6ByE82.js";import"./createLucideIcon-DGjDO6gh.js";import"./x-BbN9cWvI.js";import"./Heading-Xp0eoec4.js";import"./info-4j0bTFmg.js";import"./Popover-D5FRB7OC.js";import"./useFormValidation-Cn0cVSSL.js";import"./useField-x2fx2wbQ.js";import"./Form-x_Q-7jN5.js";import"./check-BMiTIE34.js";import"./useToggleState-Cn-DVgaB.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
