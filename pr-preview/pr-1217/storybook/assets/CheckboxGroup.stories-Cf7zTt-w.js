import{j as e}from"./iframe-DG8sLAOy.js";import{C as m}from"./CheckboxGroup-CeY8j2UB.js";import{C as p}from"./Checkbox-B7G0NvAw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DWs4hNvn.js";import"./utils-DLAFhier.js";import"./clsx-B-dksMZM.js";import"./Text-BL7Sfi9Q.js";import"./useFocusRing-mNkvIRfY.js";import"./index-Bi8SYFrz.js";import"./index-3oKnAMqx.js";import"./clsx-Ciqy0D92.js";import"./Text-BnRQmBDY.js";import"./Label-DxHZz_sD.js";import"./Button-e9hh4zze.js";import"./Hidden-BYn-neub.js";import"./useLabel-BpCu8-Ci.js";import"./useLabels-DGk43mCP.js";import"./useButton-CwsfUSJL.js";import"./Dialog-Cjs26p5J.js";import"./RSPContexts-CMJFVu7E.js";import"./OverlayArrow-CBGpz9F8.js";import"./useResizeObserver-CsSuGL_W.js";import"./useControlledState-RiscT5mJ.js";import"./Collection-DfpZ8qtz.js";import"./index-Oda9nsrN.js";import"./Separator-CNus_F-X.js";import"./SelectionManager-BfKQiKi4.js";import"./useEvent-VtbUIOmB.js";import"./scrollIntoView-DA1Ufw7z.js";import"./SelectionIndicator-DS6X-NPe.js";import"./useDescription-CvEQI5cY.js";import"./ListKeyboardDelegate-CxhQww-5.js";import"./PressResponder-CHij106b.js";import"./useLocalizedStringFormatter-BhEtSmKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-X3MQfTqk.js";import"./getScrollParent-BX7WBRu0.js";import"./VisuallyHidden-CYqYwLo_.js";import"./Modal-BhNUo4lb.js";import"./x-BslDqAEV.js";import"./createLucideIcon-CiRaq98A.js";import"./useLocalizedStringFormatter-Bm9KZk9G.js";import"./Heading-DXcU2JCi.js";import"./Button-D1u3zQ32.js";import"./Button.module-BB7N-cLd.js";import"./info-CBmcZufD.js";import"./Popover-D3OJZ6Lc.js";import"./Form-DJ7nF5qY.js";import"./useField-FnGI4Iq2.js";import"./check-BcoezpGd.js";import"./useToggleState-DRNV_nZF.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
