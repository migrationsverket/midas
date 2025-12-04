import{j as e}from"./iframe-BnvIDWhX.js";import{C as m}from"./CheckboxGroup-CBSBcyp3.js";import{C as p}from"./Checkbox-BPMuA83K.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BXYDl_68.js";import"./utils-BvQhf5aw.js";import"./clsx-B-dksMZM.js";import"./Text-CcU36hjn.js";import"./useFocusRing-kt0fM5Eg.js";import"./index-DZ5e4qNw.js";import"./index-BBb9LXyW.js";import"./clsx-Ciqy0D92.js";import"./Text-C7YaW3xP.js";import"./Label-ASHlLgAC.js";import"./Button-2vHqoAit.js";import"./Hidden-SpBz5CyG.js";import"./useLabels-C7yBIXeo.js";import"./useButton-Dxyw1gnX.js";import"./Dialog-BT7KHO7D.js";import"./RSPContexts-p_3PQZMd.js";import"./OverlayArrow-gsPDqO15.js";import"./useResizeObserver-DtWdT9hl.js";import"./useControlledState-DHwPIbAN.js";import"./Collection-BJ4Qy3kN.js";import"./index-Bd26Brwk.js";import"./Separator-DoOZOSYN.js";import"./SelectionManager-DrNCUxIW.js";import"./useEvent-CctKA4oo.js";import"./scrollIntoView-DcjaWzfx.js";import"./SelectionIndicator-eOyvRYaz.js";import"./useDescription-BRbn5Aqy.js";import"./ListKeyboardDelegate-DDm69ZdR.js";import"./PressResponder-CsH5riWB.js";import"./useLocalizedStringFormatter-CQGgYv2z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CPzYdZ1O.js";import"./VisuallyHidden-BHMQPsJv.js";import"./Button-DqvzVHOE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCUIru9v.js";import"./createLucideIcon-CfqM0T4F.js";import"./x-tgwQ7WbQ.js";import"./Heading-bqih8IZA.js";import"./info-DOymIFIY.js";import"./Popover-CT_Naab_.js";import"./useFormValidation-DldjmbqA.js";import"./useField-D9ELBiEA.js";import"./Form-CksB7z6J.js";import"./check-w0i3Zam4.js";import"./useToggleState-CAdGn1wn.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
