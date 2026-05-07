import{j as e}from"./iframe-CARYWlMr.js";import{C as m}from"./CheckboxGroup-SMULMVFH.js";import{C as p}from"./Checkbox-CXTQFZGv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D96zTf6J.js";import"./utils-CpzDmsYi.js";import"./clsx-B-dksMZM.js";import"./Text-CYKeiFr8.js";import"./useFocusRing-eR43gCGN.js";import"./index-D4HHjk07.js";import"./index-DCEAqPJW.js";import"./clsx-Ciqy0D92.js";import"./Text-C6YZuIwj.js";import"./Label-CVgymkT7.js";import"./Button-Czff7WUO.js";import"./Hidden-eR-QFzh5.js";import"./useLabel-BqT-6tGp.js";import"./useLabels-D9vbRTn9.js";import"./useButton-pxShH704.js";import"./Dialog-BYI3YHJ7.js";import"./RSPContexts-DmmT8ORw.js";import"./OverlayArrow-BRXBK-bP.js";import"./useResizeObserver-pH4E-9SM.js";import"./useControlledState-PiJ1bWKV.js";import"./Collection-B-bw2hee.js";import"./index-Bf80HzPL.js";import"./Separator-B0PDkthk.js";import"./SelectionManager-swas-xle.js";import"./useEvent-CdMdGV8r.js";import"./scrollIntoView-BlJ4PC4n.js";import"./SelectionIndicator-yiNruNt6.js";import"./useDescription-1em3p3rE.js";import"./ListKeyboardDelegate-BXuWIdHq.js";import"./PressResponder-B7_gKcmh.js";import"./useLocalizedStringFormatter-BapB3aBW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ca9PT5uM.js";import"./getScrollParent-B2bQFjre.js";import"./VisuallyHidden-BdHdXLzS.js";import"./ModalOverlay-Beb4gk3H.js";import"./x-D6m6mvyo.js";import"./createLucideIcon-DMrxxS3N.js";import"./useLocalizedStringFormatter-iKS83_lA.js";import"./Heading-CdaYlD6X.js";import"./Button-CJO8gD-9.js";import"./Button.module-BB7N-cLd.js";import"./info-BDdSR_3i.js";import"./Popover-CCRPuZRL.js";import"./Form-MW-kx8SJ.js";import"./useField-DA0e3gVp.js";import"./check-CESeAlGN.js";import"./useToggleState-I2VmkKZ0.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
