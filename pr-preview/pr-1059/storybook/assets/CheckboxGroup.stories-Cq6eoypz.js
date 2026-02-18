import{j as e}from"./iframe-C5a1BioU.js";import{C as m}from"./CheckboxGroup-CifmkBpV.js";import{C as p}from"./Checkbox-8IA93_Sp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BHjSBbDT.js";import"./utils-BKKhqGgZ.js";import"./clsx-B-dksMZM.js";import"./Text-Dsf7XnBX.js";import"./useFocusRing-CCvBuHoi.js";import"./index-DJjxifz8.js";import"./index-Cd0yh21x.js";import"./clsx-Ciqy0D92.js";import"./Text-CBM72llQ.js";import"./Label-C7kvwi34.js";import"./Button-BcpwI67Q.js";import"./Hidden-BkRTM2tY.js";import"./useLabels-aRHkw2YO.js";import"./useButton-DQmD9itb.js";import"./Dialog-Cqc9Ac0d.js";import"./RSPContexts-Z4ebeqL_.js";import"./OverlayArrow-KY3NB0gh.js";import"./useResizeObserver-DIa6rcSq.js";import"./useControlledState-Dc-egfuk.js";import"./Collection-CLv5EMAY.js";import"./index-c6WcVRzH.js";import"./Separator-D9aUuX5_.js";import"./SelectionManager-D_-IELdk.js";import"./useEvent-BljPOtQc.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DEZMMIsz.js";import"./useDescription-DdZRWQoe.js";import"./ListKeyboardDelegate-C1xkpV8e.js";import"./PressResponder-E-FKMbJJ.js";import"./useLocalizedStringFormatter-nY2oYBwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CSgJ3-WG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D-CrKNJu.js";import"./Button-BmzaM-yt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter--NJZCpI7.js";import"./createLucideIcon-C3B2EhYD.js";import"./x-CgGKRg4Y.js";import"./Heading-BWMBGDm5.js";import"./info-C9AVZRiE.js";import"./Popover-CqN5RK-E.js";import"./useFormValidation-cZ2U5Xpk.js";import"./useField-CmizDYFo.js";import"./Form-D6YdVmID.js";import"./check-Bjg92RUd.js";import"./useToggleState-Czq2ljtr.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
