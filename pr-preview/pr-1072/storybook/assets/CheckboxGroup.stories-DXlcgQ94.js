import{j as e}from"./iframe-BbEdCWTo.js";import{C as m}from"./CheckboxGroup-CeSfNryZ.js";import{C as p}from"./Checkbox-DpJc7WIf.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ClDhUf0E.js";import"./utils-0gBzt-f2.js";import"./clsx-B-dksMZM.js";import"./Text-UryQGSay.js";import"./useFocusRing-B954SIvz.js";import"./index-th6eAN9q.js";import"./index-ObLB26ub.js";import"./clsx-Ciqy0D92.js";import"./Text-w6pc7bdl.js";import"./Label-BufTJc3L.js";import"./Button-D-EmDY8c.js";import"./Hidden-dhoH6OsW.js";import"./useLabels-CB9mJaEq.js";import"./useButton-Brl3oMd-.js";import"./Dialog-gZwbD-0m.js";import"./RSPContexts-C3UWmBTv.js";import"./OverlayArrow-295h3sys.js";import"./useResizeObserver-Cq6DlwQe.js";import"./useControlledState-DT2KBo_t.js";import"./Collection-SkhSxcSu.js";import"./index-A6hdIoEh.js";import"./Separator-BftrJMHR.js";import"./SelectionManager-3MK6y6kK.js";import"./useEvent-BtmHdsI2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DAOIAWPz.js";import"./useDescription-yyfT0KSm.js";import"./ListKeyboardDelegate-BF-2O97_.js";import"./PressResponder-Cw_0ixTk.js";import"./useLocalizedStringFormatter-Cfy9D9E4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7qB9KAP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ci4G53k_.js";import"./Button-FljdEIyw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHJJdt5x.js";import"./createLucideIcon-DVbOGhvF.js";import"./x-uEbSzWQI.js";import"./Heading-B0YRdNz0.js";import"./info-ua6V7aFL.js";import"./Popover-lIDp831D.js";import"./useFormValidation-BlLsmx8B.js";import"./useField-3HP9Ota5.js";import"./Form-Dmk665yv.js";import"./check-S2MF_jIZ.js";import"./useToggleState-BxwGerHr.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
