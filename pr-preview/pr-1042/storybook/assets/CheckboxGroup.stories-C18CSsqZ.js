import{j as e}from"./iframe-C_0qThD6.js";import{C as m}from"./CheckboxGroup-BfKVuvLI.js";import{C as p}from"./Checkbox-Blc_OSni.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CqD9H87d.js";import"./utils-bnb8b6bb.js";import"./clsx-B-dksMZM.js";import"./Text-CKF9tCug.js";import"./useFocusRing-DfupDaWX.js";import"./index-BSnKqic_.js";import"./index-CPoNMQTv.js";import"./clsx-Ciqy0D92.js";import"./Text-Due48UAx.js";import"./Label-BI3kUMtC.js";import"./Button-B_Hp7nF_.js";import"./Hidden-Btf5vQwa.js";import"./useLabels-05vWhTwh.js";import"./useButton-DiIDLtaM.js";import"./Dialog-iHPmYWfL.js";import"./RSPContexts-CF-RUooF.js";import"./OverlayArrow-ABGG2CIh.js";import"./useResizeObserver-DKRF4YVY.js";import"./useControlledState-DErGdLYP.js";import"./Collection-8BQnlDdc.js";import"./index-LWMPJS4z.js";import"./Separator-DhQCajtR.js";import"./SelectionManager-DWtY7fd0.js";import"./useEvent-Bc3qbCgw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BD2rQtLe.js";import"./useDescription-DCtBRw9v.js";import"./ListKeyboardDelegate-BTX2vjTk.js";import"./PressResponder-C18Hdy5P.js";import"./useLocalizedStringFormatter-C4FXgmdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTSrpk2C.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-pXLJ5Ug_.js";import"./Button-DqbGeqrs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BQjkICgF.js";import"./createLucideIcon-CC2FZLZA.js";import"./x-BsH9rdWs.js";import"./Heading-CJSVZ5WU.js";import"./info-DiLFh1-W.js";import"./Popover-BDj1u3qP.js";import"./useFormValidation-_flSi_SL.js";import"./useField-NVSHVjO7.js";import"./Form-CP8dFFLN.js";import"./check-C3APs3wq.js";import"./useToggleState-CXK8mjZu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
