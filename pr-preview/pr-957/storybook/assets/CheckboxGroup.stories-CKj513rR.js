import{j as e}from"./iframe-rItT_jfY.js";import{C as m}from"./CheckboxGroup-5tavuIYg.js";import{C as p}from"./Checkbox-BG2S3tlH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cvsb7is6.js";import"./utils-CPF4-yP8.js";import"./clsx-B-dksMZM.js";import"./Text-DDMiWQFi.js";import"./useFocusRing-DGFc7HbQ.js";import"./index-BnPbWBMv.js";import"./index-D8DgLnGQ.js";import"./clsx-Ciqy0D92.js";import"./Text-FNlrqDfC.js";import"./Label-CVA51VOr.js";import"./Button-B5QUqElW.js";import"./Hidden-n1HYXibJ.js";import"./useLabels-BtpKNtTB.js";import"./useButton-BqLzl4IJ.js";import"./Dialog-BZhjlrsa.js";import"./RSPContexts-DzXYmQki.js";import"./OverlayArrow-CHMM6Trm.js";import"./useResizeObserver-DHx_VHvt.js";import"./useControlledState-Bzf4gGGh.js";import"./Collection-QxkacQyP.js";import"./index-lTN4k8mO.js";import"./Separator-DP_B8qjA.js";import"./SelectionManager-ClX1YJNW.js";import"./useEvent-Dh1rWvm4.js";import"./scrollIntoView-f5b4LpVi.js";import"./SelectionIndicator-DzyDNqXF.js";import"./useDescription-CcHx15SB.js";import"./ListKeyboardDelegate-DIxIliT5.js";import"./PressResponder-Q0fo8lIs.js";import"./useLocalizedStringFormatter-CTRxJDJV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BSPxFyqb.js";import"./VisuallyHidden-BJd1ReHn.js";import"./Button-DrR1Xrnd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-MQKdyit4.js";import"./createLucideIcon-B9nFww81.js";import"./x-CzCgO8Qu.js";import"./Heading-B-doG5oq.js";import"./info-C9mgKuUL.js";import"./Popover-BungVBqP.js";import"./useFormValidation-C8P0UNS6.js";import"./useField-7Rs9hAAC.js";import"./Form-xZZMOzJK.js";import"./check-CdyXM58L.js";import"./useToggleState-BtTZk53P.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
