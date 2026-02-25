import{j as e}from"./iframe-B8csx-lQ.js";import{C as m}from"./CheckboxGroup-BTLFXgJz.js";import{C as p}from"./Checkbox-CE8YBMZS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-qCPIdUr6.js";import"./utils-CaD1t0h3.js";import"./clsx-B-dksMZM.js";import"./Text-Nk_W5AjM.js";import"./useFocusRing-CtLa9eaD.js";import"./index-CFvG_i59.js";import"./index-DswvhGAm.js";import"./clsx-Ciqy0D92.js";import"./Text-BdB7kbkm.js";import"./Label-BR3ISRbn.js";import"./Button-BMaw0M-e.js";import"./Hidden-rw470soy.js";import"./useLabels-BKsEn5mf.js";import"./useButton-BXjDl97D.js";import"./Dialog-DNnGQ-hP.js";import"./RSPContexts-D1g7Zz4R.js";import"./OverlayArrow-CaIIpklf.js";import"./useResizeObserver-BXQACy-a.js";import"./useControlledState-DXIS0caZ.js";import"./Collection-zter9-ZZ.js";import"./index-BNvBtkY9.js";import"./Separator-DkOqRr6B.js";import"./SelectionManager-BRaVJSqk.js";import"./useEvent-BfC5JKdk.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgvpTl4k.js";import"./useDescription-DSFLvKUh.js";import"./ListKeyboardDelegate-CKNg6H-q.js";import"./PressResponder-2rGBVuff.js";import"./useLocalizedStringFormatter-D4J2Tzs0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFZn14D1.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DLhvU9s0.js";import"./Button-CCTCnZfY.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CJcJ86Ob.js";import"./createLucideIcon-HRlJw9Ov.js";import"./x-CSxMNTqR.js";import"./Heading-hrmOO8gY.js";import"./info-DdeMKIXY.js";import"./Popover-CuAHLTOr.js";import"./useFormValidation-CRpLLkPo.js";import"./useField-DQ83cjwx.js";import"./Form-C6CeHvqz.js";import"./check-yzWMDONN.js";import"./useToggleState-Ds-aLMXH.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
