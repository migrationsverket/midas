import{j as e}from"./iframe-DZrsJ6b-.js";import{C as m}from"./CheckboxGroup-C8J3gO-F.js";import{C as p}from"./Checkbox-DDs5X3Jn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DWKhV9VC.js";import"./utils-Dj7V2bMs.js";import"./clsx-B-dksMZM.js";import"./Text-BS3cp343.js";import"./useFocusRing-BAHUxiR4.js";import"./index-fuZi8ECT.js";import"./index-DFt0fMY8.js";import"./clsx-Ciqy0D92.js";import"./Text-BkGWbYp3.js";import"./Label-B85Ga-jl.js";import"./Button-070y6CBf.js";import"./Hidden-cX5Qttkt.js";import"./useLabels-CGrX1VVn.js";import"./useButton-D7Y3-94U.js";import"./Dialog-DDR9sTvd.js";import"./RSPContexts-BzuDnhhk.js";import"./OverlayArrow-CfGAwh-B.js";import"./useResizeObserver-CDzZWKWX.js";import"./useControlledState-Cz4Rv-Q4.js";import"./Collection-B814snHy.js";import"./index-CZ68S7a7.js";import"./Separator-_kZ-5Zxb.js";import"./SelectionManager-DFWJnm8l.js";import"./useEvent-BDOSgNI1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BB5OSBJX.js";import"./useDescription-ByaruJF3.js";import"./ListKeyboardDelegate-B4vn44dM.js";import"./PressResponder-Bt1vcSZ0.js";import"./useLocalizedStringFormatter-COTKWZiP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BOTn-ddj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CK7v_0-7.js";import"./Button-LBa2vNHq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-sjnB8c4y.js";import"./createLucideIcon-Dbd2m_Uk.js";import"./x-B6Do5IYF.js";import"./Heading-DTEpKgOI.js";import"./info-ByB_3fnq.js";import"./Popover-rHp-3z4d.js";import"./useFormValidation-BrYcYbB9.js";import"./useField-DRxI2KW9.js";import"./Form-ChmaP7kS.js";import"./check-C_U2V_ZH.js";import"./useToggleState-DQfnTQom.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
