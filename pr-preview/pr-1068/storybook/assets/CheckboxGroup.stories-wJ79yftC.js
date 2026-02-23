import{j as e}from"./iframe-C_UZb0UH.js";import{C as m}from"./CheckboxGroup-CA1sz0HK.js";import{C as p}from"./Checkbox-BXr5A0pE.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D3J2lHbG.js";import"./utils-Dtmguja_.js";import"./clsx-B-dksMZM.js";import"./Text-AP-S6Ty1.js";import"./useFocusRing-wq3XW6c-.js";import"./index-wR3qBpGD.js";import"./index-Fx4upXIZ.js";import"./clsx-Ciqy0D92.js";import"./Text-CjhPc_0v.js";import"./Label-CkNt0W_g.js";import"./Button-eLbcham7.js";import"./Hidden-BKqaL7Fi.js";import"./useLabels-BiEGdf9t.js";import"./useButton-WC7GcBqe.js";import"./Dialog-BmWKRA9T.js";import"./RSPContexts-B5lp79pf.js";import"./OverlayArrow-DRDTdGBd.js";import"./useResizeObserver-R3UE-3dT.js";import"./useControlledState-BekthKbk.js";import"./Collection-00eAIKUn.js";import"./index-cLCQ2pnu.js";import"./Separator-C4nS5Ig_.js";import"./SelectionManager-DJjA2lCL.js";import"./useEvent-CZxhJAPd.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DOZU75KG.js";import"./useDescription-D2LaqLM1.js";import"./ListKeyboardDelegate-BI-VV3g9.js";import"./PressResponder-Dw94lZ8y.js";import"./useLocalizedStringFormatter-DsjdFjoX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhGadu9e.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden--mkN2Z69.js";import"./Button-BjJn1zqZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZJYQAWH.js";import"./createLucideIcon-BfmkpqwG.js";import"./x-BVuIxQT0.js";import"./Heading-BTY4QTZO.js";import"./info-CEzWrBrG.js";import"./Popover-CYNzPQ3Q.js";import"./useFormValidation-CTOGsIgy.js";import"./useField-5YztNEa7.js";import"./Form-CYUJIrdr.js";import"./check-BlRCIA6u.js";import"./useToggleState-DHkGuPLe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
