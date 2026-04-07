import{j as e}from"./iframe-CpD0sz2e.js";import{C as m}from"./CheckboxGroup-CD97LcJi.js";import{C as p}from"./Checkbox-BIJ67Ixh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DwX7T7Dy.js";import"./utils-ojEvGYm9.js";import"./clsx-B-dksMZM.js";import"./Text-eC571-Sp.js";import"./useFocusRing-CBhF1Pep.js";import"./index-2osu5sAu.js";import"./index-C5xpIHaH.js";import"./clsx-Ciqy0D92.js";import"./Text-BdNXNsJY.js";import"./Label-C0eyx21t.js";import"./Button-TIyC3aNe.js";import"./Hidden-CJYkSVxl.js";import"./useLabel-BcpaW40H.js";import"./useLabels-DFOTVMl_.js";import"./useButton-ku5NYICY.js";import"./Dialog-C9Iit8M9.js";import"./RSPContexts-C3ByxqzR.js";import"./OverlayArrow-v1h8ybWe.js";import"./useResizeObserver-DVRfh8yT.js";import"./useControlledState-DBG5XgRx.js";import"./Collection-BfwYAR2I.js";import"./index-DDxHk1Dv.js";import"./Separator-DLxpPfl4.js";import"./SelectionManager-BRGCZ5vw.js";import"./useEvent-ZFJxjcoT.js";import"./scrollIntoView-Dc3aCiHD.js";import"./SelectionIndicator-D6jFdMfo.js";import"./useDescription-BlE-AVuu.js";import"./ListKeyboardDelegate-D7_f1PQY.js";import"./PressResponder-P3r-OniJ.js";import"./useLocalizedStringFormatter-CO2jAPcS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Comx9zlQ.js";import"./getScrollParent-DH_QPoUW.js";import"./VisuallyHidden-BXLSQV9r.js";import"./x-CZaGtiyi.js";import"./createLucideIcon-DFkdkqMu.js";import"./useLocalizedStringFormatter-BvEEsuGU.js";import"./Heading-DbFG1U6V.js";import"./Button-BEQpNkHS.js";import"./Button.module-BB7N-cLd.js";import"./info-CGnKrqY9.js";import"./Popover-Bz9dV85l.js";import"./Form-DxMz1J6H.js";import"./useField-rnQHL0Me.js";import"./check-ChkgyOre.js";import"./useToggleState-VpQQOtze.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
