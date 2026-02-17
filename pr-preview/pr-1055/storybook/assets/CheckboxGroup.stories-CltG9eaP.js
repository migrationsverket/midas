import{j as e}from"./iframe-BpM72smZ.js";import{C as m}from"./CheckboxGroup-BohU2WRe.js";import{C as p}from"./Checkbox-8kNPtuLS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B0e9S7Wf.js";import"./utils-CSddBXAp.js";import"./clsx-B-dksMZM.js";import"./Text-DmFT7SRM.js";import"./useFocusRing-B6IWB5Bj.js";import"./index-B1wLjkVC.js";import"./index-D8NVrDNK.js";import"./clsx-Ciqy0D92.js";import"./Text-CSnhZWSM.js";import"./Label-DV9XF5g0.js";import"./Button-7Fdf0MuP.js";import"./Hidden-CTCJ1xpV.js";import"./useLabels-Ea9VM8la.js";import"./useButton--NSdMDnV.js";import"./Dialog-BSRGfE2e.js";import"./RSPContexts-D1rmZtkk.js";import"./OverlayArrow-BJ5HPsXX.js";import"./useResizeObserver-2BdCSdQg.js";import"./useControlledState-uArUOdKs.js";import"./Collection-ND38OKSz.js";import"./index-DKxQIn9a.js";import"./Separator-rmji4_VZ.js";import"./SelectionManager-BHK_Z65C.js";import"./useEvent-CMTJTOYm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DF3FxvI0.js";import"./useDescription-B07oMV39.js";import"./ListKeyboardDelegate-pLN-qXGz.js";import"./PressResponder-CZ5wDDKP.js";import"./useLocalizedStringFormatter-BjnJAUau.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkw_x4CV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DUZEOl0B.js";import"./Button-DN_yypM1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-tgvWDsgd.js";import"./createLucideIcon-CC1B6wl6.js";import"./x-Dk78go1P.js";import"./Heading-DVqoRldl.js";import"./info-BR8TOA7y.js";import"./Popover-DfM2ENbz.js";import"./useFormValidation-CSg5xMEa.js";import"./useField-BGaaNjBC.js";import"./Form-FPFt4zkx.js";import"./check-B9Yb0FMt.js";import"./useToggleState-CHiz6xLs.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
