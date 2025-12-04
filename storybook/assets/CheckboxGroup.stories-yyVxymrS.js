import{j as e}from"./iframe-kcBhHuaH.js";import{C as m}from"./CheckboxGroup-CNt9V8U4.js";import{C as p}from"./Checkbox-BNH3UMpA.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DK3Y_c0y.js";import"./utils-DOkcVAYP.js";import"./clsx-B-dksMZM.js";import"./Text-DV1iqpLS.js";import"./useFocusRing-LSHA0Ws_.js";import"./index-CI0fxBEF.js";import"./index-c5G31wg9.js";import"./clsx-Ciqy0D92.js";import"./Text-B-hyuWsp.js";import"./Label-BImXWQgN.js";import"./Button-C0s49uwD.js";import"./Hidden-DMcBSm7p.js";import"./useLabels-DaJadwr0.js";import"./useButton-D1IFZ1te.js";import"./Dialog-Dh9JMf9d.js";import"./RSPContexts-BUNBwwJ3.js";import"./OverlayArrow-DH5Clq5N.js";import"./useResizeObserver--VwbIWdS.js";import"./useControlledState-DFRisE43.js";import"./Collection-B9GNZMME.js";import"./index-Dorx7YVm.js";import"./Separator-DwsHHZMX.js";import"./SelectionManager-CL7ASC5i.js";import"./useEvent-iOlAT4BQ.js";import"./scrollIntoView-C6lbNJbw.js";import"./SelectionIndicator-Be5O618m.js";import"./useDescription-daVdwGQJ.js";import"./ListKeyboardDelegate-CUwlA322.js";import"./PressResponder-CEfWacfb.js";import"./useLocalizedStringFormatter-CVmu0uNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CWGMakzZ.js";import"./VisuallyHidden-BNmglq9E.js";import"./Button-BSuH-ecX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMjkdAmu.js";import"./createLucideIcon-DghdNl6J.js";import"./x-CPLY_iaX.js";import"./Heading-DThKIFT8.js";import"./info-Ds0ezI-s.js";import"./Popover-DmceUy5M.js";import"./useFormValidation-8n81Ub6p.js";import"./useField-BsKXPwbo.js";import"./Form-BkCW8McU.js";import"./check-Hf-XE_kG.js";import"./useToggleState-CJ-PI_qA.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
