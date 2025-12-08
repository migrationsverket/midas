import{j as e}from"./iframe-BNcdEUXj.js";import{C as m}from"./CheckboxGroup-Cx7bTuzM.js";import{C as p}from"./Checkbox-52rt0Hfy.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BtZ0TnQj.js";import"./utils-Bxcv5MPT.js";import"./clsx-B-dksMZM.js";import"./Text-B53mvpty.js";import"./useFocusRing-C6YM28qN.js";import"./index-TMTY01Ep.js";import"./index-DSdXJGSi.js";import"./clsx-Ciqy0D92.js";import"./Text-DR0_UwJ4.js";import"./Label-Cf8xiPUh.js";import"./Button-CaKLSY2s.js";import"./Hidden-B0zthcPy.js";import"./useLabels-Cq9B0I-L.js";import"./useButton-DEu1-L8J.js";import"./Dialog-rf362-90.js";import"./RSPContexts-Bi-J2mqx.js";import"./OverlayArrow-WKc1anHT.js";import"./useResizeObserver-DbfjkM1E.js";import"./useControlledState-DGlddZrL.js";import"./Collection-Bh0FLaqb.js";import"./index-CPL2LM8Z.js";import"./Separator-Cvljqg2w.js";import"./SelectionManager-B7rIaUrL.js";import"./useEvent-SGz4Axl2.js";import"./scrollIntoView-BYkZm8rI.js";import"./SelectionIndicator-C0ddJV60.js";import"./useDescription-BasjIu_5.js";import"./ListKeyboardDelegate-BWVHPwUZ.js";import"./PressResponder-DgW9No9g.js";import"./useLocalizedStringFormatter-QBa3_aSW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BR4s5BG-.js";import"./VisuallyHidden-C4uEYBAI.js";import"./Button-BL-fsXV7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfXz0OFm.js";import"./createLucideIcon-E9DumC9p.js";import"./x-BEnNVYyo.js";import"./Heading-CVL2vkZG.js";import"./info-BmwtRc_D.js";import"./Popover-DrXUutE7.js";import"./useFormValidation-BlNQ6Bf-.js";import"./useField-CjdfMRgy.js";import"./Form-BDqzKtt_.js";import"./check-DFOFn8bs.js";import"./useToggleState-jPPQvaQ4.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
