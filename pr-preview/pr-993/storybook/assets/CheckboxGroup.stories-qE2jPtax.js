import{j as e}from"./iframe-Dme4yjiu.js";import{C as m}from"./CheckboxGroup-CKR5CLlW.js";import{C as p}from"./Checkbox-CvjHnY4P.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CkJz2AaO.js";import"./utils-C0ovVE6C.js";import"./clsx-B-dksMZM.js";import"./Text-DXZYfMN_.js";import"./useFocusRing-BH-f8hm3.js";import"./index-BUbNZ358.js";import"./index-DKLwjLX-.js";import"./clsx-Ciqy0D92.js";import"./Text-DD713WO-.js";import"./Label-BBkilVP7.js";import"./Button-Bc7NjFRN.js";import"./Hidden-BfVEj4RM.js";import"./useLabels-DXCBowKy.js";import"./useButton-lWQWllBE.js";import"./Dialog-B_6NYUa7.js";import"./RSPContexts-BQOpdmbl.js";import"./OverlayArrow-B7KMxShS.js";import"./useResizeObserver-C4nvYGQB.js";import"./useControlledState-b57QaJLr.js";import"./Collection-CZI7j0K3.js";import"./index-CQtilxVo.js";import"./Separator-DPZyK2SN.js";import"./SelectionManager-DuN7DYtr.js";import"./useEvent-CHM24ifL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-IEEWCpsi.js";import"./useDescription-egMW7gsS.js";import"./ListKeyboardDelegate-DxAL8Vyz.js";import"./PressResponder-wu7pC01l.js";import"./useLocalizedStringFormatter-Cww_SUFY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-z6kZ4VOT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BChFqUzE.js";import"./Button-4EvhTNdZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8mUr0ZZo.js";import"./createLucideIcon-DWbFj2V-.js";import"./x-DTC-oJ1p.js";import"./Heading-BL3c0JYi.js";import"./info-CsBGPV4J.js";import"./Popover--6lby_-v.js";import"./useFormValidation-DZ5-pBFL.js";import"./useField-Dd5lDbx0.js";import"./Form-DoobLXNm.js";import"./check-5hAfWmN3.js";import"./useToggleState-h1mlKmvq.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
