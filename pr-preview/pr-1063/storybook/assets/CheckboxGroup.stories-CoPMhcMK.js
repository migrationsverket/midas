import{j as e}from"./iframe-Bt2IPdm_.js";import{C as m}from"./CheckboxGroup-MFzFjI7l.js";import{C as p}from"./Checkbox-DGEb-Nzu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DsVwS6sU.js";import"./utils-C3T3ztzp.js";import"./clsx-B-dksMZM.js";import"./Text-4gkk9B6S.js";import"./useFocusRing-DkE8kJUj.js";import"./index-BDiIIlI6.js";import"./index-CN1OBmgy.js";import"./clsx-Ciqy0D92.js";import"./Text-sG9oy4ZT.js";import"./Label-CVH1jf-x.js";import"./Button-C79FTkxg.js";import"./Hidden--XR3ujDb.js";import"./useLabels-CUKIRIlp.js";import"./useButton-CWjFkamK.js";import"./Dialog-B0PJn95G.js";import"./RSPContexts-D7GX16CF.js";import"./OverlayArrow-5ddhla-X.js";import"./useResizeObserver-BcS0osVM.js";import"./useControlledState-CHQWAa9G.js";import"./Collection-IHp_di3t.js";import"./index-yOO_3eVZ.js";import"./Separator-DqcgbAKb.js";import"./SelectionManager-CnZMajYP.js";import"./useEvent-DjOTsNLO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DJI9OpIi.js";import"./useDescription-COVCGZbr.js";import"./ListKeyboardDelegate-CK6HBViI.js";import"./PressResponder-BaEex6DO.js";import"./useLocalizedStringFormatter-Dq04GxHG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0ebx63S.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B4zsPLSx.js";import"./Button-CLF5zjXA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-yIeft2Rj.js";import"./createLucideIcon-CLpn3Yea.js";import"./x-BDjWDO9M.js";import"./Heading-DvDOH9KM.js";import"./info-DOfKscFP.js";import"./Popover-BfGWYSLO.js";import"./useFormValidation-EZHxDImy.js";import"./useField-CQxFKP7h.js";import"./Form-C_E-_4AJ.js";import"./check-C2NMiBIm.js";import"./useToggleState-CAhxU4d5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
