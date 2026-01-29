import{j as e}from"./iframe-BCXCe90E.js";import{C as m}from"./CheckboxGroup-OSddVKil.js";import{C as p}from"./Checkbox-kjRtHD0F.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DNJHuSL6.js";import"./utils-B2hL7Xtf.js";import"./clsx-B-dksMZM.js";import"./Text-CYwVMw3N.js";import"./useFocusRing-Co2TT7uq.js";import"./index-76xwZrhG.js";import"./index-B-ZR8m7d.js";import"./clsx-Ciqy0D92.js";import"./Text-fzRhbvnE.js";import"./Label-PTgkZzgo.js";import"./Button-z4xgqBUc.js";import"./Hidden-D9V9PO0C.js";import"./useLabels-DbiDlhVN.js";import"./useButton-B4EsMdme.js";import"./Dialog-giQh8Zxm.js";import"./RSPContexts-CVV_Wn8t.js";import"./OverlayArrow-rvG0Eb8p.js";import"./useResizeObserver-iLvwzQL8.js";import"./useControlledState-BL0GCU23.js";import"./Collection-CgSxkCek.js";import"./index-vy3r0aE-.js";import"./Separator-usxipfbJ.js";import"./SelectionManager-DoV6tR3f.js";import"./useEvent-CwYHdveY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BG6RjwoQ.js";import"./useDescription-B6k3_lVu.js";import"./ListKeyboardDelegate-EBsbCgeV.js";import"./PressResponder-B-h0FrIV.js";import"./useLocalizedStringFormatter-CfJXxR3z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DPmfOGYn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DNi7GGMW.js";import"./Button-BS-I6Qwk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DS_myY-E.js";import"./createLucideIcon-D-C2mOoH.js";import"./x-7u9so2rQ.js";import"./Heading-DlCRUbGB.js";import"./info-YvDByK68.js";import"./Popover-0JZtF-Z2.js";import"./useFormValidation-CAH07Xla.js";import"./useField-CLuxjErM.js";import"./Form-CtVU-881.js";import"./check-czZCZMX1.js";import"./useToggleState-JJW-DLaI.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
