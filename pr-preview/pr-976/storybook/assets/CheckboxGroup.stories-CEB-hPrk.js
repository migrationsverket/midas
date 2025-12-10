import{j as e}from"./iframe-vt6_0wvc.js";import{C as m}from"./CheckboxGroup-DWO70TyQ.js";import{C as p}from"./Checkbox-3m7n-BV6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-rI95JyM5.js";import"./utils-C50KWGJn.js";import"./clsx-B-dksMZM.js";import"./Text-vUv8LtJg.js";import"./useFocusRing-u1CE1zmZ.js";import"./index-DrKf0VEH.js";import"./index-BowZacW-.js";import"./clsx-Ciqy0D92.js";import"./Text-0bO177qh.js";import"./Label-hlcokpnw.js";import"./Button-BHz5qLC4.js";import"./Hidden-DeIa8qWF.js";import"./useLabels-CrmuBcKe.js";import"./useButton-BIS2iV2Y.js";import"./Dialog-CRL0gmQm.js";import"./RSPContexts-DzFGh60v.js";import"./OverlayArrow-Bqkfg2_K.js";import"./useResizeObserver-BBHzdZPi.js";import"./useControlledState-CoGrqUr-.js";import"./Collection-hg3bKVZ3.js";import"./index-DgzbGFH4.js";import"./Separator-Ds2k70rn.js";import"./SelectionManager-Bn46v6r6.js";import"./useEvent-DOuIdZBU.js";import"./scrollIntoView-CyHSHxm5.js";import"./SelectionIndicator-QXnJIiGl.js";import"./useDescription-DBldu5Od.js";import"./ListKeyboardDelegate-CyFOtZm3.js";import"./PressResponder-BaAB9t9S.js";import"./useLocalizedStringFormatter-B9noaZZg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-6cxbsgtt.js";import"./VisuallyHidden-BJCH1Yk0.js";import"./Button-BYpM6_0E.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-BykdjwWy.js";import"./createLucideIcon-CYjeYtY6.js";import"./x-2Ugz14oC.js";import"./Heading-ZFdyPK5S.js";import"./info-BefLRhVH.js";import"./Popover-BXszS6zB.js";import"./useFormValidation-tBiv9jXM.js";import"./useField-BxJjlG8P.js";import"./Form-BXHoTWxL.js";import"./check-CH7TsFaK.js";import"./useToggleState-DaCqJg4Z.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
