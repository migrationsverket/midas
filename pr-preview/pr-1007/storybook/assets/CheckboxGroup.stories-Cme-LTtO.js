import{j as e}from"./iframe-JacAhoxH.js";import{C as m}from"./CheckboxGroup-CPjLwk9s.js";import{C as p}from"./Checkbox-twXhb24h.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B7rWxW-L.js";import"./utils-CzU_JO7s.js";import"./clsx-B-dksMZM.js";import"./Text-Edn7JPzd.js";import"./useFocusRing-spbXnPSy.js";import"./index-GcjV-LxB.js";import"./index-YZL0u5uz.js";import"./clsx-Ciqy0D92.js";import"./Text-MKVpmyfV.js";import"./Label-poos_zJX.js";import"./Button-8pJehvb2.js";import"./Hidden-TGIGvYu7.js";import"./useLabels-7kgjtqhP.js";import"./useButton-BIrYoUZu.js";import"./Dialog-CiOrT5e8.js";import"./RSPContexts-9Rf4wLRU.js";import"./OverlayArrow-DRAhygSP.js";import"./useResizeObserver-Buog1A5Y.js";import"./useControlledState-p5pbSUwu.js";import"./Collection--Knj5lbP.js";import"./index-DkwG0OeZ.js";import"./Separator-BERTsdg-.js";import"./SelectionManager-35kh4I0S.js";import"./useEvent-Dax9vfKX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C0R_2rsV.js";import"./useDescription-OQy-vlPi.js";import"./ListKeyboardDelegate-B_SUvSkL.js";import"./PressResponder-B63eX99g.js";import"./useLocalizedStringFormatter-CwYPGFUg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-I0gpbv_D.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-TrlJd0AM.js";import"./Button-BzRYHKPq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BG_WIZXv.js";import"./createLucideIcon-DGoL-s5C.js";import"./x-nQG_nTms.js";import"./Heading-C046WmVv.js";import"./info-BOq2dC_7.js";import"./Popover-Bl_YCtHe.js";import"./useFormValidation-BoVDv6Cp.js";import"./useField-DEF7di_w.js";import"./Form-C4wPVDJ-.js";import"./check-2AeKoN78.js";import"./useToggleState-DBmUKe5N.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
