import{j as e}from"./iframe-a-0QSjcf.js";import{C as m}from"./CheckboxGroup-1gK9-8HD.js";import{C as p}from"./Checkbox-sxI50tZB.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DsswgMzG.js";import"./utils-B_-tSBeZ.js";import"./clsx-B-dksMZM.js";import"./Text-BKQI6ihA.js";import"./useFocusRing-Czic3fia.js";import"./index-7-rgoRIg.js";import"./index-BW6KTqQa.js";import"./clsx-Ciqy0D92.js";import"./Text-B2LxCzJs.js";import"./Label-YgUgumpZ.js";import"./Button-C60PLABZ.js";import"./Hidden-B9ZA2jSe.js";import"./useLabels-BJ97I3JO.js";import"./useButton-CYqr7EFX.js";import"./Dialog-w2u3UMAw.js";import"./RSPContexts-D7vEIwAp.js";import"./OverlayArrow-b72sAqXS.js";import"./useResizeObserver-W2ayqQuc.js";import"./useControlledState-DQziIZ9T.js";import"./Collection-ErSyUHVz.js";import"./index-DWKJl1jK.js";import"./Separator-BxqIoaxC.js";import"./SelectionManager-Cos7Ara1.js";import"./useEvent-DG_5MX2s.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3aVRxCVz.js";import"./useDescription-DFv-da9o.js";import"./ListKeyboardDelegate-B5PjmmDN.js";import"./PressResponder-Cl2-_IoC.js";import"./useLocalizedStringFormatter-JU1_R9Z5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2sqxsit.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B518bO6H.js";import"./Button-D2oQUHVT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3fQfCDh.js";import"./createLucideIcon-Dsg6rjRC.js";import"./x-CIpaA31e.js";import"./Heading-D2oXPaON.js";import"./info-_GEbiMwg.js";import"./Popover-DY7AGX_k.js";import"./useFormValidation-Du4LTqk6.js";import"./useField-CGPrKXG5.js";import"./Form-BGTqQH8a.js";import"./check-aa384UvO.js";import"./useToggleState-Ch8vNtgH.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
