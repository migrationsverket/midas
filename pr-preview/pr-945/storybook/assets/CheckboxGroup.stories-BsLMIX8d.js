import{j as e}from"./iframe-no9CntvV.js";import{C as m}from"./CheckboxGroup-o7-B5Xrj.js";import{C as p}from"./Checkbox-BT0Nl2wW.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-sDyen7ng.js";import"./utils-B6AasQkX.js";import"./clsx-B-dksMZM.js";import"./Text-BpKcKBtM.js";import"./useFocusRing-pveG4jA-.js";import"./index-DvXDbTU2.js";import"./index-DEYREeZj.js";import"./clsx-Ciqy0D92.js";import"./Text-BGa0l0Rh.js";import"./Label-DCsjk68R.js";import"./Button-Deq-w1A_.js";import"./Hidden-CFcjd9Ye.js";import"./useLabels-BIymkZE6.js";import"./useButton-C4GsfKwP.js";import"./Dialog-YHzPU4Xt.js";import"./RSPContexts-Cef-5t5s.js";import"./OverlayArrow-Bbx4ZvUL.js";import"./useResizeObserver-CMciYl8W.js";import"./useControlledState-DxYknQDv.js";import"./Collection-CvCI3D99.js";import"./index-ngfcFwBD.js";import"./Separator-D6RPw9Yg.js";import"./SelectionManager-C4zMqpui.js";import"./useEvent-DgT1RkyW.js";import"./scrollIntoView-BVD0fCXS.js";import"./SelectionIndicator-CA-oSTYQ.js";import"./useDescription-Cspf3mhS.js";import"./ListKeyboardDelegate-DI0yyyLq.js";import"./PressResponder-mfl91F1s.js";import"./useLocalizedStringFormatter-BdwuPI9T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-5zfS10KG.js";import"./VisuallyHidden-BIFAjTF4.js";import"./Button-LFMtXpU7.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dz0tCMy5.js";import"./createLucideIcon-DGuN_Rm2.js";import"./x-BdQk_ya-.js";import"./Heading-Bbqsli7f.js";import"./info-DeGxmpr8.js";import"./Popover-C-OJvxMh.js";import"./useFormValidation-CFAIF2Ue.js";import"./useField-Cd0Sc82B.js";import"./Form-CF35t9b0.js";import"./check-BDIE8hTx.js";import"./useToggleState-BksnuBV4.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
