import{j as e}from"./iframe-Bghha776.js";import{C as m}from"./CheckboxGroup-WDDvudnG.js";import{C as p}from"./Checkbox-8H9nLVyC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-9H5y-Lx7.js";import"./utils-CKwB2h75.js";import"./clsx-B-dksMZM.js";import"./Text-BLYY5elp.js";import"./useFocusRing-dHOAdoS9.js";import"./index-Ct8cyA18.js";import"./index-B_EeXN7u.js";import"./clsx-Ciqy0D92.js";import"./Text-Dwv0_3Nj.js";import"./Label-BnC5IPqR.js";import"./Button-CTIdFoEB.js";import"./Hidden-DkuxBDe3.js";import"./useLabels-CD1l8WQW.js";import"./useButton-Bo_828zl.js";import"./Dialog-WwilMS-z.js";import"./RSPContexts-CGn2RDsi.js";import"./OverlayArrow-CnKM_bCg.js";import"./useResizeObserver-BuMIH8Cw.js";import"./useControlledState-brBh_6bZ.js";import"./Collection-tfVMgqky.js";import"./index-o9rNCB5G.js";import"./Separator-rZF7BwT6.js";import"./SelectionManager-DyHkQ2Rb.js";import"./useEvent-DvjFxw-T.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1IcTZGQj.js";import"./useDescription-x32OOjmK.js";import"./ListKeyboardDelegate-C0dIApAx.js";import"./PressResponder-CjFDJQAA.js";import"./useLocalizedStringFormatter-BJIXw8SS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvAn1Lgd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CjLtMi-P.js";import"./Button-CZ61ZB9b.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-YOCDJcZs.js";import"./createLucideIcon-DZRbkVj-.js";import"./x-D3hyDxqQ.js";import"./Heading-BPloDmyB.js";import"./info-Dp-vQ1yg.js";import"./Popover-jV7ivyXa.js";import"./useFormValidation-CZv_sneF.js";import"./useField-BNabUhO6.js";import"./Form-hmbg8ZOW.js";import"./check-dNqRCIni.js";import"./useToggleState-D85sbZY_.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
