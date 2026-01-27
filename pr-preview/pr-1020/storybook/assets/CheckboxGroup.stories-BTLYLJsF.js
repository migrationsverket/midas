import{j as e}from"./iframe-D6iOFlNk.js";import{C as m}from"./CheckboxGroup-CP_ipDPU.js";import{C as p}from"./Checkbox-CVVGYfV7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BlY0sckk.js";import"./utils-CD1tK_62.js";import"./clsx-B-dksMZM.js";import"./Text-aL4nWdoT.js";import"./useFocusRing-upgm9Lvd.js";import"./index-cK5OqLVZ.js";import"./index-BOUWd1Up.js";import"./clsx-Ciqy0D92.js";import"./Text-D5zoqrMb.js";import"./Label-ByJL_z4L.js";import"./Button-B4EeNfOQ.js";import"./Hidden-Cd_aaCcf.js";import"./useLabels-CZQ88t08.js";import"./useButton-84WMXec5.js";import"./Dialog-D2nUFJ93.js";import"./RSPContexts-BvwPJGsb.js";import"./OverlayArrow-DGiQBfyt.js";import"./useResizeObserver-0neNMj4N.js";import"./useControlledState-DejCxbfT.js";import"./Collection-BkN69H6H.js";import"./index-zGMbwrwu.js";import"./Separator-i4x5yLEI.js";import"./SelectionManager-C73wsRfe.js";import"./useEvent-ClK_-pLi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgEE-HPU.js";import"./useDescription-CuOT9qT9.js";import"./ListKeyboardDelegate-BuJFcrKe.js";import"./PressResponder-dFieFUDI.js";import"./useLocalizedStringFormatter-BIP2SAND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaI16aPT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CIEzbUDk.js";import"./Button-CjctI97I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BAscfSQt.js";import"./createLucideIcon-Gwq4fNDs.js";import"./x-CmRgogil.js";import"./Heading-Dk1N_l44.js";import"./info-BWts4tgg.js";import"./Popover-Dvcj7Ba1.js";import"./useFormValidation-Cs82m8dT.js";import"./useField-BS28cROS.js";import"./Form-CPEZg61n.js";import"./check-DLCuJ73v.js";import"./useToggleState-BcMORZC_.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
