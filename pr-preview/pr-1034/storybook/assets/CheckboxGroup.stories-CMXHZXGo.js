import{j as e}from"./iframe-CRW892uF.js";import{C as m}from"./CheckboxGroup-CuBLcDeN.js";import{C as p}from"./Checkbox-CdOtnuPF.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BQcQWUaq.js";import"./utils-Cy5rPxYn.js";import"./clsx-B-dksMZM.js";import"./Text-BMcxzv8r.js";import"./useFocusRing-DYPhP7ff.js";import"./index-CuPhnfQx.js";import"./index-C-PwSL9X.js";import"./clsx-Ciqy0D92.js";import"./Text-Bllz5--I.js";import"./Label-BDRgF3oC.js";import"./Button-73ueEsI0.js";import"./Hidden-DVd7J3jb.js";import"./useLabels-ChrJAk9N.js";import"./useButton-DDquVdTc.js";import"./Dialog-BaWrtAXg.js";import"./RSPContexts-CZWpHYRK.js";import"./OverlayArrow-DVfS8oid.js";import"./useResizeObserver-BL-wr9du.js";import"./useControlledState-C1CLjRGB.js";import"./Collection-CpPeNV26.js";import"./index-Ci8Rgwt0.js";import"./Separator-DtafUiO6.js";import"./SelectionManager-BXP3sBpC.js";import"./useEvent-QBqF7ml7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CSS8pmUq.js";import"./useDescription-CMI78JnW.js";import"./ListKeyboardDelegate-CcvovjzQ.js";import"./PressResponder-CiN1UJyc.js";import"./useLocalizedStringFormatter-yyiVnhi3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ci5wZznZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DX9a97Gh.js";import"./Button-zEqn1U6h.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-zR_q9Jv_.js";import"./createLucideIcon-B-cKx2d-.js";import"./x-3lOLVs8k.js";import"./Heading-Cf-yUcGM.js";import"./info-DCVCOli9.js";import"./Popover-DrtoZ3oB.js";import"./useFormValidation-CkXNtAlg.js";import"./useField-Dsdw6Dxh.js";import"./Form-sLRR6eNh.js";import"./check-kEkOiMfE.js";import"./useToggleState-D1hdVkrs.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
