import{j as e}from"./iframe-BmAdb1PA.js";import{C as m}from"./CheckboxGroup-D8fB3OQJ.js";import{C as p}from"./Checkbox-K6lm5hfX.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BFmjoeTz.js";import"./utils-CCClzR0P.js";import"./clsx-B-dksMZM.js";import"./Text-CWRsvaQ5.js";import"./useFocusRing-DjzcYn69.js";import"./index-DmkiqM0D.js";import"./index-YmFjrc3B.js";import"./clsx-Ciqy0D92.js";import"./Text-GqXtxiSt.js";import"./Label-DFIRf3yh.js";import"./Button-MRSjvKjG.js";import"./Hidden-B3pD7GY2.js";import"./useLabel-DyZBKx42.js";import"./useLabels-ChZyghoP.js";import"./useButton-CgLkstip.js";import"./Dialog-yx5dXLdt.js";import"./RSPContexts-C9Yi9HqJ.js";import"./OverlayArrow-BsSGgpI2.js";import"./useResizeObserver-BVaU9idB.js";import"./useControlledState-Dv2Kshwg.js";import"./Collection-YyAEhVk9.js";import"./index-BlhtBE4W.js";import"./Separator-BH67y9r3.js";import"./SelectionManager-DiqOcHkc.js";import"./useEvent-CnZp3rBE.js";import"./scrollIntoView-BvBTMwmY.js";import"./SelectionIndicator-D0ZbJgrH.js";import"./useDescription-Dk0a0Fsb.js";import"./ListKeyboardDelegate-DxdtfhPW.js";import"./PressResponder-C7yYm5Yb.js";import"./useLocalizedStringFormatter-DY8Y5mpq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-U_IkXvLC.js";import"./getScrollParent-7DjJo_eW.js";import"./VisuallyHidden-DDq5yWsw.js";import"./x-BgO40Plk.js";import"./createLucideIcon-CbxvyYW-.js";import"./useLocalizedStringFormatter-1TllYdpt.js";import"./Heading-863fHQRC.js";import"./Button-Cxe1PoSr.js";import"./Button.module-BB7N-cLd.js";import"./info-D0UtNGvd.js";import"./Popover-C_HFXddi.js";import"./Form-DuBFRND4.js";import"./useField-CiSiXV_i.js";import"./check-Dd0URqZZ.js";import"./useToggleState-rPcyEIuy.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
