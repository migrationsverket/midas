import{j as e}from"./iframe-4MXvvXb4.js";import{C as m}from"./CheckboxGroup-EH5Agif-.js";import{C as p}from"./Checkbox-t541rLUa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B07U-Qv-.js";import"./utils-CKUJDRfd.js";import"./clsx-B-dksMZM.js";import"./Text-DEF8XyQD.js";import"./useFocusRing-CGRZ6TsU.js";import"./index-DNLPWJUA.js";import"./index-BNLaGBTn.js";import"./clsx-Ciqy0D92.js";import"./Text-CjfGH0e9.js";import"./Label-DpQTpgb8.js";import"./Button-D7OB0dKW.js";import"./Hidden-Bs6UcX7L.js";import"./useLabels-BcyACAXj.js";import"./useButton-ELwrz3PB.js";import"./Dialog-7Iq_rX5x.js";import"./RSPContexts-BC_6Dhn9.js";import"./OverlayArrow-CJxlX3_-.js";import"./useResizeObserver-DvvtWspO.js";import"./useControlledState-Yot6ptr4.js";import"./Collection-BmcvaKsn.js";import"./index-DmP-bg2h.js";import"./Separator-BGt4y3Xs.js";import"./SelectionManager-C7R0JqoP.js";import"./useEvent-B7HYYs6V.js";import"./scrollIntoView-wQ_uh2wm.js";import"./SelectionIndicator-CAnfLgtL.js";import"./useDescription-09Y_4eEe.js";import"./ListKeyboardDelegate-XDBkvJpT.js";import"./PressResponder-BTRow9R1.js";import"./useLocalizedStringFormatter-uwpQqsQ4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BeL4ndT4.js";import"./VisuallyHidden-Bltgpije.js";import"./Button-D6HZYVFH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-S9rOgstl.js";import"./createLucideIcon-DbyMZvJr.js";import"./x-DFJOvBpt.js";import"./Heading-CdN84TBh.js";import"./info-DpiIksJf.js";import"./Popover-9KPmg7Ej.js";import"./useFormValidation-C_E33eAj.js";import"./useField-FpwzJluE.js";import"./Form-Diwti7Bb.js";import"./check-CwGWG83r.js";import"./useToggleState-BUKLeqwy.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
