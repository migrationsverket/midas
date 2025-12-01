import{j as e}from"./iframe-CjAeaDoj.js";import{C as m}from"./CheckboxGroup-BnbNp5Jw.js";import{C as p}from"./Checkbox-BSeykAbm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DlpJtGZw.js";import"./utils-jc2ODT2b.js";import"./clsx-B-dksMZM.js";import"./Text-ak_HQ3cz.js";import"./useFocusRing-DcmUcrOG.js";import"./index--UrAPuIg.js";import"./index-DGfG4UBj.js";import"./clsx-Ciqy0D92.js";import"./Text-DvSGG28f.js";import"./Label-FXNXBjjq.js";import"./Button-wONZVWX8.js";import"./Hidden-D9d7GvOT.js";import"./useLabels-DDebeywZ.js";import"./useButton-Du61CN-D.js";import"./Dialog-DT8uvRIQ.js";import"./RSPContexts-CO7jt-tM.js";import"./OverlayArrow-DCJzpcgK.js";import"./useResizeObserver-D_NW3bOb.js";import"./useControlledState-CAI5Jvzm.js";import"./Collection-BymyC_39.js";import"./index-VxGtioaS.js";import"./Separator-BRKNrcuP.js";import"./SelectionManager-HJCSiRY6.js";import"./useEvent-DT9xauXj.js";import"./scrollIntoView-HODBzjwx.js";import"./SelectionIndicator-DHKtaqI_.js";import"./useDescription-hq0ZkSSN.js";import"./ListKeyboardDelegate-CdOH7B6-.js";import"./PressResponder-wMnIygId.js";import"./useLocalizedStringFormatter-NLU3I9ax.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bjp-RnFa.js";import"./VisuallyHidden-BjFsTXF_.js";import"./Button-ghJL-v_J.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dnn0n8g2.js";import"./createLucideIcon-DHEkehRI.js";import"./x-DmFfo8FI.js";import"./Heading-nl13gRrR.js";import"./info-BnTR3nyH.js";import"./Popover-JreuGCCi.js";import"./useFormValidation-BTbVcgsZ.js";import"./useField-B0n2WZ8X.js";import"./Form-DmPdhnXz.js";import"./check-keDgW5jD.js";import"./useToggleState-BffAeBw4.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
