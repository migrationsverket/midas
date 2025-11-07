import{j as e}from"./iframe-DzJ58csS.js";import{C as m}from"./CheckboxGroup-lG7oIw4p.js";import{C as p}from"./Checkbox-C8jE1Dxu.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-F5XRq1hW.js";import"./utils-kFG7V26A.js";import"./clsx-B-dksMZM.js";import"./Text-CcO9WK_c.js";import"./useFocusRing-s8d5RV5A.js";import"./index-CXUZjOMB.js";import"./index-8g-wmO3w.js";import"./clsx-Ciqy0D92.js";import"./Text-CF12HrJc.js";import"./Label-O0r8Nmxn.js";import"./Button-XpnQOI7L.js";import"./Hidden-DixvikVn.js";import"./useLabels-CqViVGd8.js";import"./useButton-Bq7QVwIk.js";import"./Dialog-BwvwdNwE.js";import"./RSPContexts-Bw7A04gx.js";import"./OverlayArrow-BpzZqzT2.js";import"./useResizeObserver-DOZ5a32s.js";import"./useControlledState-BddBMCaY.js";import"./Collection-BqTlgEej.js";import"./index-CXWhLhHy.js";import"./Separator-DSaNaPFI.js";import"./SelectionManager-D0Fz5nNs.js";import"./useEvent-Bp2Ufb0u.js";import"./scrollIntoView-y1tmZMLC.js";import"./SelectionIndicator-Chf0WN9P.js";import"./useDescription-CFNj517p.js";import"./ListKeyboardDelegate-BN17OQSZ.js";import"./PressResponder-napPBZaN.js";import"./useLocalizedStringFormatter-LbY2s3T4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DyLAwff4.js";import"./VisuallyHidden-bMdwBiLV.js";import"./useLocalizedStringFormatter-B8TFtJTY.js";import"./Button-DBLrduIN.js";import"./Button.module-CtQ1deO8.js";import"./x-DG_jh2y7.js";import"./createLucideIcon-DY2CvNkn.js";import"./Heading-Cp-haDdt.js";import"./info-UhZ3BMBW.js";import"./Popover-CiIQfHyY.js";import"./useFormValidation-B29-zsDb.js";import"./useField-BE4CK7tW.js";import"./Form-D7Y8lqvg.js";import"./check-BcqZtP3C.js";import"./useToggleState-CaLWxpC_.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
