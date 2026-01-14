import{j as e}from"./iframe-MGdNAUMz.js";import{C as m}from"./CheckboxGroup-BI2IK9VM.js";import{C as p}from"./Checkbox-GcOWnpGo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-zekZnl7-.js";import"./utils-yAZ9U3h-.js";import"./clsx-B-dksMZM.js";import"./Text-DFJny9No.js";import"./useFocusRing-9yuQWUp-.js";import"./index-CFMDqy5s.js";import"./index-DxYbJLyO.js";import"./clsx-Ciqy0D92.js";import"./Text-D8P4tHEb.js";import"./Label-YJ2AWegw.js";import"./Button-BGSDIYD6.js";import"./Hidden-DaKSv-Rd.js";import"./useLabels-CYaM2JW7.js";import"./useButton-CKkRVWTa.js";import"./Dialog-D-j4KZpo.js";import"./RSPContexts-DhTziygn.js";import"./OverlayArrow-BKt-WXKT.js";import"./useResizeObserver-DZuuQAtg.js";import"./useControlledState-piNu0BKM.js";import"./Collection-CSnOiKVp.js";import"./index-DeKZwJvt.js";import"./Separator-W8ef00fQ.js";import"./SelectionManager-Dn_uWwP9.js";import"./useEvent-h_n_ZdPT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8cUfzPMl.js";import"./useDescription-D7Bwelde.js";import"./ListKeyboardDelegate-Cw5ZXmnD.js";import"./PressResponder-FJ8ouTMy.js";import"./useLocalizedStringFormatter-CMEEk3KL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bn86Sij2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BK3tSjRA.js";import"./Button-f3B-7Wnz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcU_ael6.js";import"./createLucideIcon-CrP5_4Rr.js";import"./x-BWyXqCEY.js";import"./Heading-D--hORfB.js";import"./info-DX2nrYA-.js";import"./Popover-COiZ5hws.js";import"./useFormValidation-3gszShr7.js";import"./useField-BA29SgkZ.js";import"./Form-DYj9-0zO.js";import"./check-DbMubpZC.js";import"./useToggleState-BWzKJqZ3.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
