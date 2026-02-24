import{j as e}from"./iframe-B46k8Jp-.js";import{C as m}from"./CheckboxGroup-CeO1jIzZ.js";import{C as p}from"./Checkbox-DjUEQ4wy.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-VsuqZb_G.js";import"./utils-D8o13i-0.js";import"./clsx-B-dksMZM.js";import"./Text-BkyBG04s.js";import"./useFocusRing-DkIdhDSx.js";import"./index-BNL-dXtG.js";import"./index-D8Bk77PH.js";import"./clsx-Ciqy0D92.js";import"./Text-BjNkUFcW.js";import"./Label-DhG94hQk.js";import"./Button-DeinXWVf.js";import"./Hidden-CFqGg0VD.js";import"./number-DfkVkf0F.js";import"./useLabels-DW9kmzSX.js";import"./useButton-B5s3hE2o.js";import"./Dialog-D7H4rQV8.js";import"./RSPContexts-BmEJNEMw.js";import"./OverlayArrow-Dl60MgVx.js";import"./useResizeObserver-Br_R3Qlm.js";import"./useControlledState-BtITM9-4.js";import"./Collection-CssY9qLp.js";import"./index-l8QBXIuE.js";import"./Separator-C84gbwpp.js";import"./SelectionManager-VtK9-ztp.js";import"./useEvent-BacgC5LG.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BgTrKU_H.js";import"./useDescription-BoBzwRVp.js";import"./ListKeyboardDelegate-DGcjUW6o.js";import"./PressResponder-D37iDMaO.js";import"./useLocalizedStringFormatter-DswGCIZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTLvTmjQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bnc_oVlh.js";import"./Button-CPDizGhA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_eLZdxP.js";import"./createLucideIcon-FljtlaXo.js";import"./x-BMIcm1JC.js";import"./Heading-D_Yq3rRt.js";import"./info-Be_yB4Cz.js";import"./Popover-9HCi7szZ.js";import"./useFormValidation-Bno76pJS.js";import"./useField-CXG2aLYx.js";import"./Form-k6tpHfuL.js";import"./check-tl7BUE2a.js";import"./useToggleState-5TtqvLKL.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
