import{j as e}from"./iframe-CcR8w04L.js";import{C as m}from"./CheckboxGroup-QYrQgUHG.js";import{C as p}from"./Checkbox-BPgXq276.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-htExcrgg.js";import"./utils-af0tYTw3.js";import"./clsx-B-dksMZM.js";import"./Text-aSsPMv-x.js";import"./useFocusRing-D1A2CEDA.js";import"./index-DRTGbyk6.js";import"./index-cXkWMWCH.js";import"./clsx-Ciqy0D92.js";import"./Text-BOLbzqGN.js";import"./Label-BY6wMyZU.js";import"./Button-DiPSkE8a.js";import"./Hidden-DwthtQe9.js";import"./useLabel-D1-RwtiE.js";import"./useLabels-B6AFz8zN.js";import"./useButton-BOkIyd3s.js";import"./Dialog-Bp10XtkF.js";import"./RSPContexts-D6Nmnt3c.js";import"./OverlayArrow-BmW3qC41.js";import"./useResizeObserver-IuRGgK6H.js";import"./useControlledState-CEdHUrMX.js";import"./Collection-Bkz2Ue8x.js";import"./index-B2xZ7LZU.js";import"./Separator-_mbxiYym.js";import"./SelectionManager-Ig_Qb5vq.js";import"./useEvent-CEJe_3LM.js";import"./scrollIntoView-B7qNvkQR.js";import"./SelectionIndicator-c_eTMs6v.js";import"./useDescription-Cu4rveQh.js";import"./ListKeyboardDelegate-D0dJW87p.js";import"./PressResponder-DKy8oIBc.js";import"./useLocalizedStringFormatter-CgjdUKuv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BoZfarRE.js";import"./getScrollParent-C12n-Bvt.js";import"./VisuallyHidden-BpOhFVs3.js";import"./x-DuzdHKBG.js";import"./createLucideIcon-Bth_BE09.js";import"./useLocalizedStringFormatter-DATZ4L6m.js";import"./Heading-o1owZdV3.js";import"./Button-BiOwK_dU.js";import"./Button.module-BB7N-cLd.js";import"./info-DIlxICcx.js";import"./Popover-Cyqr_Bop.js";import"./Form-dCKfEOqU.js";import"./useField-CK1CEvDx.js";import"./check-e4v_QP_h.js";import"./useToggleState-CUbxCNJr.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
