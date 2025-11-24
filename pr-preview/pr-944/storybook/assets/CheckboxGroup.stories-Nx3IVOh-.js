import{j as e}from"./iframe-DTmnx-OS.js";import{C as m}from"./CheckboxGroup-C9MsiFg0.js";import{C as p}from"./Checkbox-Ci8mdI3u.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BW0t1--z.js";import"./utils-BLrbyb-5.js";import"./clsx-B-dksMZM.js";import"./Text-CAzG3hrs.js";import"./useFocusRing-D7pmxvpH.js";import"./index-Dh5clyrJ.js";import"./index-ZMXHPIeh.js";import"./clsx-Ciqy0D92.js";import"./Text-Rd2kwoRq.js";import"./Label-D5tU1J5b.js";import"./Button-D84lT1wU.js";import"./Hidden-BtM1I5LI.js";import"./useLabels-BU6BY9ES.js";import"./useButton-BfYlvgAS.js";import"./Dialog-D7Xm6J16.js";import"./RSPContexts-C1Iyv0kP.js";import"./OverlayArrow-Mvs2w6w8.js";import"./useResizeObserver-B5MS2sn1.js";import"./useControlledState-B80F7Llz.js";import"./Collection-CSCL41v3.js";import"./index-CSjg3Rnn.js";import"./Separator-Cc0lRCB9.js";import"./SelectionManager-BfTO8Xj5.js";import"./useEvent-CONhqoCx.js";import"./scrollIntoView-C54iyz8_.js";import"./SelectionIndicator-LNrCvCoH.js";import"./useDescription-P3-GHz2i.js";import"./ListKeyboardDelegate-BaMH29P7.js";import"./PressResponder-DYsVoB2A.js";import"./useLocalizedStringFormatter-CZmcKBND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-rJ8oXYh7.js";import"./VisuallyHidden-DTo6UeCi.js";import"./Button-BR1AZgyV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DJL53Hew.js";import"./createLucideIcon-Q1IuAoPr.js";import"./x-BHyqnA-p.js";import"./Heading-CM3TnOvL.js";import"./info-DyFU30up.js";import"./Popover-B4ytbGoo.js";import"./useFormValidation-CS2KaDSt.js";import"./useField-C6pIHBN6.js";import"./Form-DHoA3APl.js";import"./check-CoBOhflq.js";import"./useToggleState-CVbQBmey.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
