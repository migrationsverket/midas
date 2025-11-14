import{j as e}from"./iframe-D4pYWxLo.js";import{C as m}from"./CheckboxGroup-DCERC0Bx.js";import{C as p}from"./Checkbox-DKkh65rZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B2349xR_.js";import"./utils-CNWAI1YN.js";import"./clsx-B-dksMZM.js";import"./Text-C4ycuvF6.js";import"./useFocusRing-Cd1zlkVw.js";import"./index-ffkNdVXt.js";import"./index-QMn_Li5K.js";import"./clsx-Ciqy0D92.js";import"./Text-3Lu4u5rC.js";import"./Label-BIxAip9Z.js";import"./Button-BBLXtQE-.js";import"./Hidden-BmxxaD5V.js";import"./useLabels-D6wiLGoB.js";import"./useButton-DUM2jYvh.js";import"./Dialog-CB0yU7_I.js";import"./RSPContexts-BJJYI1Rc.js";import"./OverlayArrow-ilA3ezr0.js";import"./useResizeObserver-DbtxEBSN.js";import"./useControlledState-DRikiJpI.js";import"./Collection-Dr_DRN_G.js";import"./index-Fd-1KiMK.js";import"./Separator-B6D9XBFd.js";import"./SelectionManager-BTWpsEmz.js";import"./useEvent-BYGse6l2.js";import"./scrollIntoView-Df3KPf7G.js";import"./SelectionIndicator-BhFaSh08.js";import"./useDescription-QhEUd527.js";import"./ListKeyboardDelegate-r3YzLK8b.js";import"./PressResponder-DdPUnbRK.js";import"./useLocalizedStringFormatter-DeN0CJTC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D7VHFumo.js";import"./VisuallyHidden-CkFGnntu.js";import"./useLocalizedStringFormatter-CPBieKrW.js";import"./Button-BwuPit9L.js";import"./Button.module-CtQ1deO8.js";import"./x-DG8Jfz18.js";import"./createLucideIcon-EKjaxrON.js";import"./Heading-Db99DRto.js";import"./info-Bc6odoPJ.js";import"./Popover-BGJMgOza.js";import"./useFormValidation-D8zZucp-.js";import"./useField-aOfXQooy.js";import"./Form-B2U_6q63.js";import"./check-BGwJcyT1.js";import"./useToggleState-BnDaQoA_.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
