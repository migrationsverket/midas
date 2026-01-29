import{j as e}from"./iframe-CPtuJ8HO.js";import{C as m}from"./CheckboxGroup-CZz1SjSA.js";import{C as p}from"./Checkbox-BBqiq1vC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DMwa18ms.js";import"./utils-Wu2XGcEF.js";import"./clsx-B-dksMZM.js";import"./Text-Xck8zNqM.js";import"./useFocusRing-B2VzlZnk.js";import"./index-BRWS9LDr.js";import"./index-BOHm-TSr.js";import"./clsx-Ciqy0D92.js";import"./Text-BHQtEdFP.js";import"./Label-C6BEtblS.js";import"./Button-ZJtGU8il.js";import"./Hidden-CqVIwIVB.js";import"./useLabels-BdTBLhcX.js";import"./useButton-Cj3FTjdJ.js";import"./Dialog-vu-r9Ph4.js";import"./RSPContexts-eb7b9mtr.js";import"./OverlayArrow-YAmE0xGm.js";import"./useResizeObserver-CTW49b7i.js";import"./useControlledState-CLvfzbin.js";import"./Collection-XbEL7V6x.js";import"./index-CIORga0m.js";import"./Separator-qWD69KoT.js";import"./SelectionManager-lQrsa-HY.js";import"./useEvent-Bq2H3CvS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSVB12IK.js";import"./useDescription-CMX7WFxi.js";import"./ListKeyboardDelegate-gAR5iSK6.js";import"./PressResponder-UxKT-oab.js";import"./useLocalizedStringFormatter-MASyzKxf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-c85R6HKb.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXwhVzS2.js";import"./Button-D3yQOAis.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BO2qvTML.js";import"./createLucideIcon-CZ8AHqP_.js";import"./x-59_pYRVt.js";import"./Heading-vaeBGNC5.js";import"./info-CEMP60Zu.js";import"./Popover-CrsEMzBT.js";import"./useFormValidation-Bpm9_0qx.js";import"./useField-Ds3Z5M45.js";import"./Form-C5zBMOIx.js";import"./check-P5a3i4Np.js";import"./useToggleState-CNIveLR5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
