import{j as e}from"./iframe-DE94JxKi.js";import{C as m}from"./CheckboxGroup-Sqx9MQdI.js";import{C as p}from"./Checkbox-ScVc9Gge.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BXtDsO41.js";import"./utils-BSOOAzhj.js";import"./clsx-B-dksMZM.js";import"./Text-DfN54vrW.js";import"./useFocusRing-DmvBk8aR.js";import"./index-BQx7fnJU.js";import"./index-hBdvredO.js";import"./clsx-Ciqy0D92.js";import"./Text-DHcXS7hp.js";import"./Label-CadFwBlo.js";import"./Button-Dg3ONjJw.js";import"./Hidden-BxoJfOoH.js";import"./useLabels-D7kdm8Gs.js";import"./useButton-BdK2-QNE.js";import"./Dialog-kpVHHP8R.js";import"./RSPContexts-B_fFGJM5.js";import"./OverlayArrow-C-PVuf_t.js";import"./useResizeObserver-xuVMWkyr.js";import"./useControlledState-DaJ4jGU6.js";import"./Collection-_6FJlRQd.js";import"./index-B_B9ITvM.js";import"./Separator-BhGklFKs.js";import"./SelectionManager-BIzWN-JW.js";import"./useEvent-DHt8qmHW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqGgoiG-.js";import"./useDescription-CR6YrqIA.js";import"./ListKeyboardDelegate-1nrdAhpB.js";import"./PressResponder-Dw3eCBzO.js";import"./useLocalizedStringFormatter-Cru1T8gU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DoTI_cXn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B9PXbOcp.js";import"./Button-DMOZPxBs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CqNL9jQY.js";import"./createLucideIcon-DBTUrtr9.js";import"./x-Gg2oVTGU.js";import"./Heading-DaFoQP0H.js";import"./info-CUtZ3Z-P.js";import"./Popover-BOrfsaYl.js";import"./useFormValidation-B28FtqGe.js";import"./useField-DbCKfJpx.js";import"./Form-BOsKgB3e.js";import"./check-DvFF8BuG.js";import"./useToggleState-F46J7mfp.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
