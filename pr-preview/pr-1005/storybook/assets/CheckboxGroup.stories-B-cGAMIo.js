import{j as e}from"./iframe-KzFLTGr0.js";import{C as m}from"./CheckboxGroup-CxanwUZK.js";import{C as p}from"./Checkbox-DFNnsow4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B1daGC65.js";import"./utils-CO2yYsr6.js";import"./clsx-B-dksMZM.js";import"./Text-Cmn4JyoG.js";import"./useFocusRing-C4wRgiR-.js";import"./index-hPDntuQZ.js";import"./index-BiyGu_5v.js";import"./clsx-Ciqy0D92.js";import"./Text-BH1PFH25.js";import"./Label-BZyjLgDi.js";import"./Button-BBRIbgdT.js";import"./Hidden-DzrKcQON.js";import"./useLabels-8Z9kmpB8.js";import"./useButton-BxP8bzWM.js";import"./Dialog-jqE6dH9h.js";import"./RSPContexts-sIRx7DsI.js";import"./OverlayArrow-CofwM2Qh.js";import"./useResizeObserver-C-PipfoT.js";import"./useControlledState-C-UjGiCO.js";import"./Collection-DVOI67sL.js";import"./index-CKRnJMQr.js";import"./Separator-As3w6HQx.js";import"./SelectionManager-DVLI_Hyy.js";import"./useEvent-BFDZwV-z.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BtQryPzY.js";import"./useDescription-BVYDnjYQ.js";import"./ListKeyboardDelegate-CksOf0SS.js";import"./PressResponder-CaBihIus.js";import"./useLocalizedStringFormatter-cXa5F6yq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D04kpmJ_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kcpL8sOO.js";import"./Button-BLxQJ6AW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cvui8YbN.js";import"./createLucideIcon-QW7mSHEY.js";import"./x-QPO1I7pH.js";import"./Heading-NeDBoCJT.js";import"./info-CMR4dw2l.js";import"./Popover-BFbr7TL5.js";import"./useFormValidation-DOWv8OTt.js";import"./useField-YY8zXIMp.js";import"./Form-CBvpL72C.js";import"./check-LadfRCBj.js";import"./useToggleState-BdEUfvgb.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
