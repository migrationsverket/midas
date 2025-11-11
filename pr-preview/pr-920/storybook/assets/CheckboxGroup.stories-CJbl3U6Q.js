import{j as e}from"./iframe-DmzrtX3u.js";import{C as m}from"./CheckboxGroup-x6HMDkaO.js";import{C as p}from"./Checkbox-BYVmTfVB.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-8YrpNVDd.js";import"./utils-Oc8X9Dut.js";import"./clsx-B-dksMZM.js";import"./Text-CUUMtVou.js";import"./useFocusRing-DiXFM6IK.js";import"./index-DK6gMfte.js";import"./index-DRO8jrzk.js";import"./clsx-Ciqy0D92.js";import"./Text-4zuef1by.js";import"./Label-9R_eE0XF.js";import"./Button-D1_GOLvy.js";import"./Hidden-DYOxjREs.js";import"./useLabels-LOtlQFBi.js";import"./useButton-DTNBbrec.js";import"./Dialog-CRjHYzjN.js";import"./RSPContexts-CprwvviT.js";import"./OverlayArrow-C6XsSHkt.js";import"./useResizeObserver-Cr2A4NTB.js";import"./useControlledState-C4k0njb5.js";import"./Collection-bSGJMgl1.js";import"./index-Dyl1EEkC.js";import"./Separator-DiB9F3Vn.js";import"./SelectionManager-Brf4mELr.js";import"./useEvent-CSOa97Sz.js";import"./scrollIntoView-CddCsQNc.js";import"./SelectionIndicator-CSWiBIw2.js";import"./useDescription-C6boHjI1.js";import"./ListKeyboardDelegate-idfi318R.js";import"./PressResponder-Ds8b88LR.js";import"./useLocalizedStringFormatter-CNEzkPvm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DmfcLomM.js";import"./VisuallyHidden-BdOo9cjO.js";import"./useLocalizedStringFormatter-C4X_axr3.js";import"./Button-DBXHyq-A.js";import"./Button.module-CtQ1deO8.js";import"./x-h_g8GD-U.js";import"./createLucideIcon-d42gtct_.js";import"./Heading-Te6eeXsF.js";import"./info-erINa-3j.js";import"./Popover-Cuq4ur-n.js";import"./useFormValidation-BUBxaK0p.js";import"./useField-CDS7IwME.js";import"./Form-DfGv2lRJ.js";import"./check-Dg-wNwqh.js";import"./useToggleState-1htuRq4L.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
