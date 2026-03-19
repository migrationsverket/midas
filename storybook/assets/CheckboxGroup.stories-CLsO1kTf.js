import{j as e}from"./iframe-D_5POFLP.js";import{C as m}from"./CheckboxGroup-JWaPTGHd.js";import{C as p}from"./Checkbox-Bs6GXNOt.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-EOiA5P3C.js";import"./utils-DO_vjv71.js";import"./clsx-B-dksMZM.js";import"./Text-BKb3b_9z.js";import"./useFocusRing--g4Wtvt8.js";import"./index-DqO0WD41.js";import"./index-cRMo-pfK.js";import"./clsx-Ciqy0D92.js";import"./Text-yMJxKm-c.js";import"./Label-BGPPlbzH.js";import"./Button-fdQqDZ1U.js";import"./Hidden-CviAMZFs.js";import"./useLabels-BXPD6Dkt.js";import"./useButton-BcNImXbv.js";import"./Dialog-DWwIunRn.js";import"./RSPContexts-xL2uHiKx.js";import"./OverlayArrow-BDczvdQt.js";import"./useResizeObserver--81SFe_d.js";import"./useControlledState-BKs1wQOh.js";import"./Collection-8INC1-Qf.js";import"./index-DNi2n4sA.js";import"./Separator-CH0TdZ20.js";import"./SelectionManager-DGZeOopH.js";import"./useEvent-BsKV9JIv.js";import"./scrollIntoView-Dkbfokvi.js";import"./SelectionIndicator-DHJ7VJ-g.js";import"./useDescription-RX7Ggrwn.js";import"./ListKeyboardDelegate-B-2PJQ8L.js";import"./PressResponder-NZG0R7Hi.js";import"./useLocalizedStringFormatter-zQAwDCu6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKegmkvE.js";import"./getScrollParent-BYXaL0zG.js";import"./VisuallyHidden-2Q1B73xw.js";import"./x-CkDzpDVd.js";import"./createLucideIcon-DU05kscE.js";import"./useLocalizedStringFormatter-DWsBg7K0.js";import"./Heading-D2gKtbL6.js";import"./Button-C961Ae12.js";import"./Button.module-BB7N-cLd.js";import"./info-CTMbj2Td.js";import"./Popover-31q4NbSZ.js";import"./Form-C_lLIp1i.js";import"./useField-BuH4E1_r.js";import"./check-Do8tflLN.js";import"./useToggleState-CC8Ivf0_.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
