import{j as e}from"./iframe-D7Ymg_mK.js";import{C as m}from"./CheckboxGroup-DGouyceq.js";import{C as p}from"./Checkbox-4JFiPAWC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CsP61a2L.js";import"./utils-kIFV34ck.js";import"./clsx-B-dksMZM.js";import"./Text-9YYjoimb.js";import"./useFocusRing-Bl9_YbgB.js";import"./index-vaQrj-3c.js";import"./index-B0QmpyiM.js";import"./clsx-Ciqy0D92.js";import"./Text-DAtUy53c.js";import"./Label-DEdXHCfc.js";import"./Button-C0Ip64qm.js";import"./Hidden-BCS-fde6.js";import"./useLabels-BTNuMlRw.js";import"./useButton-BwjaRMSI.js";import"./Dialog-BgTvyp6J.js";import"./RSPContexts-BZleg50n.js";import"./OverlayArrow-CezQPCx0.js";import"./useResizeObserver-W476ZHv4.js";import"./useControlledState-B4Qeg9Wh.js";import"./Collection-CGTtR3LJ.js";import"./index-DQPYp39o.js";import"./Separator-BqqUrY7Q.js";import"./SelectionManager-Eaoc1XY4.js";import"./useEvent-X_lfAaQd.js";import"./scrollIntoView-7Dx5Mga0.js";import"./SelectionIndicator-CrsNcvet.js";import"./useDescription-4mWfG2Nh.js";import"./ListKeyboardDelegate-DkQMjMf1.js";import"./PressResponder-JpvvyYD2.js";import"./useLocalizedStringFormatter-C60pseOF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-4xXul_sF.js";import"./VisuallyHidden-DIX_96la.js";import"./Button-C9Sv5uf1.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DfS2oHAS.js";import"./createLucideIcon-BztK-xjn.js";import"./x-BokWoqhe.js";import"./Heading-DefGGl1T.js";import"./info-h8TSkkUQ.js";import"./Popover-0GSzDp5n.js";import"./useFormValidation-C-qAShxs.js";import"./useField-Cr8xxzOP.js";import"./Form-NoSEts35.js";import"./check-Dgt9ffSo.js";import"./useToggleState-BDQtN217.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
