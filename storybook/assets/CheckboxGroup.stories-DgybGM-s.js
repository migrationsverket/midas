import{j as e}from"./iframe-D2u6fcmC.js";import{C as m}from"./CheckboxGroup-CWWsT6Lg.js";import{C as p}from"./Checkbox-1IWndNX3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-yn2RLFgz.js";import"./utils-CiNycYhM.js";import"./clsx-B-dksMZM.js";import"./Text-BiuO3ebU.js";import"./useFocusRing-CavRUvhE.js";import"./index-1mTxR35t.js";import"./index-T3sg1FKY.js";import"./clsx-Ciqy0D92.js";import"./Text-D2yfXHQm.js";import"./Label-C1tUN1zf.js";import"./Button-CpbQDwOR.js";import"./Hidden-DwkU7rJe.js";import"./useLabels-BtEDdJzZ.js";import"./useButton-B2yDlT2I.js";import"./Dialog-WBDTRcb-.js";import"./RSPContexts-B_HQictA.js";import"./OverlayArrow-yzFTuuaK.js";import"./useResizeObserver-T_2pYgWM.js";import"./useControlledState-CPfd4NNf.js";import"./Collection-_v5SZyfe.js";import"./index-Ds4jLS63.js";import"./Separator-DuJ7wd14.js";import"./SelectionManager-YmOe1LDC.js";import"./useEvent-cO724lZb.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-WPXK57P0.js";import"./useDescription-OCo5BB3K.js";import"./ListKeyboardDelegate-PoRIzH4i.js";import"./PressResponder-D0nWQMZF.js";import"./useLocalizedStringFormatter-DFmOREZk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYBTfPKd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DOAfwi1g.js";import"./Button-D7MCEwkf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C7M_lV_b.js";import"./createLucideIcon-COpdxC33.js";import"./x-ByX5semR.js";import"./Heading-C9499rs9.js";import"./info-BrhmZH8m.js";import"./Popover-eLAmnGns.js";import"./useFormValidation-BmH9m2e6.js";import"./useField-BoDQD0-h.js";import"./Form-BkApyaNb.js";import"./check-BI2YJtZy.js";import"./useToggleState-CEVy1j9j.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
