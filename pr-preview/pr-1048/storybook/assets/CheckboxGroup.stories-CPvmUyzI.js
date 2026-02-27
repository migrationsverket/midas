import{j as e}from"./iframe-6hgGCLw8.js";import{C as m}from"./CheckboxGroup-BAiyyO93.js";import{C as p}from"./Checkbox-oGdFJudG.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-i2DV-PmA.js";import"./utils-CX_zB5aR.js";import"./clsx-B-dksMZM.js";import"./Text-iSCx5bjD.js";import"./useFocusRing-Cuwdf14T.js";import"./index-0RlmGZ9W.js";import"./index-I7rnJuI0.js";import"./clsx-Ciqy0D92.js";import"./Text-CFTnJ3zF.js";import"./Label-DjDWcUVK.js";import"./Button-Brt9OyKK.js";import"./Hidden-z4IjskhB.js";import"./useLabels-CgnqeCaq.js";import"./useButton-DGyELYzD.js";import"./Dialog-kpa7IVkr.js";import"./RSPContexts-Bcn_vAUn.js";import"./OverlayArrow-CUpIA52P.js";import"./useResizeObserver-pBs7fgAl.js";import"./useControlledState-yzEE9xtq.js";import"./Collection-BPb9_hiS.js";import"./index-Cu6VjWUj.js";import"./Separator-50bt915P.js";import"./SelectionManager-DzswR_cU.js";import"./useEvent-BJk0ykSO.js";import"./scrollIntoView-Ckk0jegU.js";import"./SelectionIndicator-Csfh2Tbk.js";import"./useDescription-ltz1Kv2E.js";import"./ListKeyboardDelegate-XGMUHETx.js";import"./PressResponder-C9-_L3qb.js";import"./useLocalizedStringFormatter-DMNGX3Z_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BucskLti.js";import"./getScrollParent-B0JbJ1bW.js";import"./VisuallyHidden-CWb-I5WH.js";import"./Button-C-MJs-8h.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-mYRlTdsp.js";import"./createLucideIcon-CMqrOtBY.js";import"./x-DgeoVxQW.js";import"./Heading-Cnm7AISj.js";import"./info-COThjvjL.js";import"./Popover-DhlGCU0D.js";import"./useFormValidation-D27bsKed.js";import"./useField-DGwoxVi1.js";import"./Form-DVYOmAio.js";import"./check-BH8onhzi.js";import"./useToggleState-B_iAp99o.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
