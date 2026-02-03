import{j as e}from"./iframe-DLQn-qTm.js";import{C as m}from"./CheckboxGroup-BG5kwzQJ.js";import{C as p}from"./Checkbox-OEkjjwjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DhgEtkJ4.js";import"./utils-BseBzJWz.js";import"./clsx-B-dksMZM.js";import"./Text-CuFotw1d.js";import"./useFocusRing-Do74QKH1.js";import"./index-BkZE1OTB.js";import"./index-C8Zl_Tv7.js";import"./clsx-Ciqy0D92.js";import"./Text-CjwNLSIP.js";import"./Label-D_G7ZzJH.js";import"./Button-DYd3H_n-.js";import"./Hidden-CNhpunQg.js";import"./useLabels-DyMy7daN.js";import"./useButton-C2eCHCKv.js";import"./Dialog-CfhFEXao.js";import"./RSPContexts-DvPIEXFn.js";import"./OverlayArrow-CEvcWVl8.js";import"./useResizeObserver-B2vjaTis.js";import"./useControlledState-BZ3KbGsu.js";import"./Collection-Bw773ohV.js";import"./index-B9SqyPko.js";import"./Separator-BZ1LFOFr.js";import"./SelectionManager-p-9hdccP.js";import"./useEvent-dNq17Ah7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C3jZ9U8m.js";import"./useDescription-Cc6Zbq_g.js";import"./ListKeyboardDelegate-Czj8i91Y.js";import"./PressResponder-d1IPJyDZ.js";import"./useLocalizedStringFormatter-BJIt3lYB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTbeUDHO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden--4vyVQ1_.js";import"./Button-ChhODU99.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJPUWmDD.js";import"./createLucideIcon-Dlil2oPf.js";import"./x-BhU4g9X0.js";import"./Heading-DIsi2CKj.js";import"./info-BmYw3wes.js";import"./Popover-CUCE5Hwx.js";import"./useFormValidation--qOyb23-.js";import"./useField-BOmmNrOA.js";import"./Form-FnL5AQKn.js";import"./check-CDl5l8qX.js";import"./useToggleState-BoongdFE.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
