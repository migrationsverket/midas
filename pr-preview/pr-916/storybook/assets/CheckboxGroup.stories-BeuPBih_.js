import{j as e}from"./iframe-2wgIB9ov.js";import{C as m}from"./CheckboxGroup-CihWuo8V.js";import{C as p}from"./Checkbox-DJEvsOLl.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-wYXk6SIy.js";import"./utils-DaRf50JR.js";import"./clsx-B-dksMZM.js";import"./Text-aNiv-eLR.js";import"./useFocusRing-525HP1g7.js";import"./index-CD0ir1m5.js";import"./index-lBQIxa3z.js";import"./clsx-Ciqy0D92.js";import"./Text-B1FXYo5G.js";import"./Label-B_QtUaAw.js";import"./Button-D4zAQrcJ.js";import"./Hidden-CBQkbk4i.js";import"./useLabels-DWZ8l6Oh.js";import"./useButton-C73Zvfrc.js";import"./Dialog-BuEuu2WP.js";import"./RSPContexts-BTDVWGny.js";import"./OverlayArrow-I_9yrpn_.js";import"./useResizeObserver-DO_sTP92.js";import"./useControlledState-DYBM3KFS.js";import"./Collection-CsszdkaH.js";import"./index-BQQVushq.js";import"./Separator-pnWZ37IZ.js";import"./SelectionManager-CYBIEHxh.js";import"./useEvent-I4eMPhOT.js";import"./scrollIntoView-wN9fvFrD.js";import"./SelectionIndicator-3Oq_YM91.js";import"./useDescription-DTDZRqpT.js";import"./ListKeyboardDelegate-4ytV36kV.js";import"./PressResponder-DN_iJoEU.js";import"./useLocalizedStringFormatter-Db4gfQ33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BCIlnNrp.js";import"./VisuallyHidden-BisFr-Je.js";import"./useLocalizedStringFormatter-BM6R8_tu.js";import"./Button-DFwCR_3-.js";import"./Button.module-CtQ1deO8.js";import"./x-Dpgehcgt.js";import"./createLucideIcon-DIWvrCmu.js";import"./Heading-CtnV3cTO.js";import"./info-6HJTUf-O.js";import"./Popover-DvacBDg5.js";import"./useFormValidation-Ccje1EM4.js";import"./useField-CuBOwm92.js";import"./Form-MuHaJLUD.js";import"./check-D7Gm_Afk.js";import"./useToggleState-DYjcEipm.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
