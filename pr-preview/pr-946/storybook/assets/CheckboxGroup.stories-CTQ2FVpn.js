import{j as e}from"./iframe-Bgec6LZ9.js";import{C as m}from"./CheckboxGroup-mOwzCRr-.js";import{C as p}from"./Checkbox-CWXAJucv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-6CR-SQTz.js";import"./utils-DIIQIBM-.js";import"./clsx-B-dksMZM.js";import"./Text-VdO0wtcg.js";import"./useFocusRing-B1D5indB.js";import"./index-Ceczni1n.js";import"./index-BeLA2EJf.js";import"./clsx-Ciqy0D92.js";import"./Text-ChsjEId-.js";import"./Label-Cm8NfiqY.js";import"./Button-_JSPr_Qd.js";import"./Hidden-ClpDugI3.js";import"./useLabels-DcdCSdhe.js";import"./useButton-CXyVv40K.js";import"./Dialog-D73xWdeY.js";import"./RSPContexts-CbK1ypjQ.js";import"./OverlayArrow-NbZRbyhy.js";import"./useResizeObserver-C6bRkG_3.js";import"./useControlledState-DnXTl3Pc.js";import"./Collection-BMEFeSSi.js";import"./index-ZnG6Kjgr.js";import"./Separator-Dd9gmY95.js";import"./SelectionManager-DCQUpw9o.js";import"./useEvent-Ccc7jkrB.js";import"./scrollIntoView-BCNTH4IC.js";import"./SelectionIndicator-apNAViKq.js";import"./useDescription-ASwlOTW0.js";import"./ListKeyboardDelegate-BIlV6YAL.js";import"./PressResponder-Bp5TG3KD.js";import"./useLocalizedStringFormatter-BWOfcfGM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ch1KfHwI.js";import"./VisuallyHidden-U53ARRrF.js";import"./Button-DzNsYof3.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DBY3ly5_.js";import"./createLucideIcon-D_CGqgCc.js";import"./x-k0_8W05y.js";import"./Heading-6_8Tm-Cn.js";import"./info-D9doPbsO.js";import"./Popover-BwTeHDII.js";import"./useFormValidation-CnB0lgVV.js";import"./useField-DLcs6KVB.js";import"./Form-BAzLDja7.js";import"./check-BeAUB0ns.js";import"./useToggleState-BrhBEMkr.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
