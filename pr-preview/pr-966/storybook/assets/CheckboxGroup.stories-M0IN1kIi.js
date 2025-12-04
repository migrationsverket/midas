import{j as e}from"./iframe-DfJuQE8m.js";import{C as m}from"./CheckboxGroup-Dqh2veb7.js";import{C as p}from"./Checkbox-UCFQPjmp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C1ud7pvY.js";import"./utils-DhOIe8g4.js";import"./clsx-B-dksMZM.js";import"./Text-BE6FOv1W.js";import"./useFocusRing-DEOWgYwB.js";import"./index-CQALj8IV.js";import"./index-BkqquRj0.js";import"./clsx-Ciqy0D92.js";import"./Text-C0meLp2u.js";import"./Label-nnQpJCiu.js";import"./Button-C1h3qiWM.js";import"./Hidden-L0FDO2bN.js";import"./useLabels-ukq135hJ.js";import"./useButton-D5urjP3V.js";import"./Dialog-CZsdvfkm.js";import"./RSPContexts-Bl-t2YWe.js";import"./OverlayArrow-Bov2DMmm.js";import"./useResizeObserver-BSNTYhDh.js";import"./useControlledState-eRrBZcf1.js";import"./Collection-zRDc75Sn.js";import"./index-CFUygh5x.js";import"./Separator-a1OeMPZ9.js";import"./SelectionManager-381fJsVV.js";import"./useEvent-sIyE_x4m.js";import"./scrollIntoView-BOxlOCOK.js";import"./SelectionIndicator-BMh5Wja0.js";import"./useDescription-Cvwf_bWB.js";import"./ListKeyboardDelegate-DxvgtmVa.js";import"./PressResponder-BJHsACuL.js";import"./useLocalizedStringFormatter-DiGWatbI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-irao4iUV.js";import"./VisuallyHidden-Cs6c7lY9.js";import"./Button-DUMkSbLt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAe3Ejvu.js";import"./createLucideIcon-Bek8kOw5.js";import"./x-CHMzvCCf.js";import"./Heading-BJwMHQcl.js";import"./info-D5FDZ8xJ.js";import"./Popover-LFcU3rXq.js";import"./useFormValidation-jGn96_h-.js";import"./useField-BJyW5WxN.js";import"./Form-CIJEaiBn.js";import"./check-BbP_fO06.js";import"./useToggleState-BKKDkizK.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
