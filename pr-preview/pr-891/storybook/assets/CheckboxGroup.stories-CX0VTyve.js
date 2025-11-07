import{j as e}from"./iframe-C1qr5fJG.js";import{C as m}from"./CheckboxGroup-B6WClcFL.js";import{C as p}from"./Checkbox-Cg2RP-0_.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-PPsriwer.js";import"./utils-L5F-E5oa.js";import"./clsx-B-dksMZM.js";import"./Text-PiImN2rq.js";import"./useFocusRing-28aIZAqG.js";import"./index-Bx_ZZiUf.js";import"./index-D-qeXkn4.js";import"./clsx-Ciqy0D92.js";import"./Text-_yTTBlbq.js";import"./Label-BqBNw_VS.js";import"./Button-DQJfHdFy.js";import"./Hidden-C3GbSa9q.js";import"./useLabels-DysWQsGc.js";import"./useButton-C5lUgphC.js";import"./Dialog-BohRXdAD.js";import"./RSPContexts-Bj5Jx20Q.js";import"./OverlayArrow-DcaNHGHQ.js";import"./useResizeObserver-DE8NXtKE.js";import"./useControlledState-BInoKRkZ.js";import"./Collection-DChIski_.js";import"./index-CN4jt8oJ.js";import"./Separator-DeWBtMz-.js";import"./SelectionManager-DwIbmitB.js";import"./useEvent-E43Nzm_j.js";import"./scrollIntoView-Dd3Mp8Mp.js";import"./SelectionIndicator-BkYHe58b.js";import"./useDescription-CjUI-cVY.js";import"./ListKeyboardDelegate-CxihMaHJ.js";import"./PressResponder-DQywiW-9.js";import"./useLocalizedStringFormatter-CZNoWOT_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-uqqKq15_.js";import"./VisuallyHidden--9QY6UIZ.js";import"./useLocalizedStringFormatter-CFy_c-ke.js";import"./Button-DH_gl17G.js";import"./Button.module-CtQ1deO8.js";import"./x-Cg0vKU_m.js";import"./createLucideIcon-BC-6srKg.js";import"./Heading-DGreCZH6.js";import"./info-Cn6ba9kW.js";import"./Popover-DPB5a-Bc.js";import"./useFormValidation-DE7hGYXe.js";import"./useField-C8ENA_HS.js";import"./Form-C8WT_v02.js";import"./check-BWpoy01m.js";import"./useToggleState-DdiSVC-V.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
