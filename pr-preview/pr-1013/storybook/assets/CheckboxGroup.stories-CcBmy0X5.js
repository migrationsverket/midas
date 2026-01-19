import{j as e}from"./iframe-scLSUKLC.js";import{C as m}from"./CheckboxGroup-Ctynbccy.js";import{C as p}from"./Checkbox-CzVP-QxJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CFquMVDb.js";import"./utils-VusYSVV3.js";import"./clsx-B-dksMZM.js";import"./Text-DTyekGW6.js";import"./useFocusRing-_IjzIfKM.js";import"./index-mQxC8hvk.js";import"./index-DpJjKeec.js";import"./clsx-Ciqy0D92.js";import"./Text-Dt0v8fCv.js";import"./Label-DzNRkmH8.js";import"./Button-DV8mnRES.js";import"./Hidden-D_mDfWbG.js";import"./useLabels-CMKHi586.js";import"./useButton-Cj9v_jLE.js";import"./Dialog-BTLbqk4N.js";import"./RSPContexts-DuBR0pyr.js";import"./OverlayArrow-B4WRUgAO.js";import"./useResizeObserver-KYSZwn-M.js";import"./useControlledState-BLpi_x0u.js";import"./Collection-DN-3I-_7.js";import"./index-ChoGj1Ct.js";import"./Separator-inq0kH5q.js";import"./SelectionManager-BIc1t39b.js";import"./useEvent-DedY8LRC.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1uui7tH5.js";import"./useDescription-B0-u872d.js";import"./ListKeyboardDelegate-C5uHsGyp.js";import"./PressResponder-DFvDffbc.js";import"./useLocalizedStringFormatter-C0RBb53M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COXPLuj_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BH-0CD7g.js";import"./Button-Da7_Ionc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B1l7IBDm.js";import"./createLucideIcon-D5mqExBa.js";import"./x-D0Bj0XkU.js";import"./Heading-DJNjhrJN.js";import"./info-VLNYI4uz.js";import"./Popover-gy1ZOpM_.js";import"./useFormValidation-CSTJe35f.js";import"./useField-2RcysjcJ.js";import"./Form-DfsYFccC.js";import"./check-sQAcBH4J.js";import"./useToggleState-8_juN9Jd.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
