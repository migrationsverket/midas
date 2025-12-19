import{j as e}from"./iframe-C7QVanE1.js";import{C as m}from"./CheckboxGroup-CDFdMPf7.js";import{C as p}from"./Checkbox-B-hfOU4U.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bc8wiCVr.js";import"./utils-DryWrSsO.js";import"./clsx-B-dksMZM.js";import"./Text-Caxmjr4k.js";import"./useFocusRing-CUPRYPTR.js";import"./index-CZH-gIg2.js";import"./index-CQdr9i86.js";import"./clsx-Ciqy0D92.js";import"./Text-DDFZmojY.js";import"./Label-DFC4Ayxj.js";import"./Button-B0ygehGU.js";import"./Hidden-DWveG1to.js";import"./useLabels-CDWq4CCD.js";import"./useButton-Bgb6cmzM.js";import"./Dialog-DnW7z-lO.js";import"./RSPContexts-B6-3qImG.js";import"./OverlayArrow-C493vImD.js";import"./useResizeObserver-CeLtm5-b.js";import"./useControlledState-wg0wExfo.js";import"./Collection-CfvVOKcU.js";import"./index-CN6QiRf-.js";import"./Separator-gW8aqniL.js";import"./SelectionManager-CN43C4SR.js";import"./useEvent-Bn3ja8Lv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BP1jOhS7.js";import"./useDescription-Bd9LwgFX.js";import"./ListKeyboardDelegate-Byqn4HKE.js";import"./PressResponder-BeST1YwG.js";import"./useLocalizedStringFormatter-CpMZdteZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BbdnziW9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-6jSDaJWd.js";import"./Button-CCRsXMgo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DHWurjhu.js";import"./createLucideIcon-Ci9lC38R.js";import"./x-BoziCGps.js";import"./Heading-DLpZtmIA.js";import"./info-NvV6yIu1.js";import"./Popover-CrAgRj2O.js";import"./useFormValidation-DgNcLFsP.js";import"./useField-BkcLQ7gE.js";import"./Form-z3vPy4HV.js";import"./check-CYFHui6x.js";import"./useToggleState-COAyCMP5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
