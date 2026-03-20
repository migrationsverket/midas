import{j as e}from"./iframe-wk1uxL0R.js";import{C as m}from"./CheckboxGroup-zrScqZgV.js";import{C as p}from"./Checkbox-viZxf0Bs.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-5unwDnAP.js";import"./utils-BKmHeGDP.js";import"./clsx-B-dksMZM.js";import"./Text-D_aWqMlk.js";import"./useFocusRing-mtIFdSYG.js";import"./index-DpCKx4XG.js";import"./index-B9EV4M0O.js";import"./clsx-Ciqy0D92.js";import"./Text-BueF1im7.js";import"./Label-B32AxlJ3.js";import"./Button-BJm7MwiY.js";import"./Hidden-OSmil6gU.js";import"./useLabels-Z8jFtyR8.js";import"./useButton-CzrLl786.js";import"./Dialog-D5ldWWGq.js";import"./RSPContexts-CLBTCfJ3.js";import"./OverlayArrow-D8McxenL.js";import"./useResizeObserver-CtHAQdT8.js";import"./useControlledState-DQ_KGuHt.js";import"./Collection-BoTnuHoE.js";import"./index-0q5YrKOu.js";import"./Separator-5UYF_4or.js";import"./SelectionManager-C1ludoOD.js";import"./useEvent-CWBKex4u.js";import"./scrollIntoView-C5wBRPen.js";import"./SelectionIndicator-_2glPY4T.js";import"./useDescription-B-96JeUD.js";import"./ListKeyboardDelegate-CxBl8hgQ.js";import"./PressResponder-CQk_Q8Y_.js";import"./useLocalizedStringFormatter-Ceub4S3z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ByUaFRDd.js";import"./getScrollParent-CmjId40O.js";import"./VisuallyHidden-C2txOMCT.js";import"./x-DV0orzgr.js";import"./createLucideIcon-DGfTdO3_.js";import"./useLocalizedStringFormatter-KI7sGx_d.js";import"./Heading-BlwA6-bZ.js";import"./Button-DDyJ2oTu.js";import"./Button.module-BB7N-cLd.js";import"./info-BaCbSPdc.js";import"./Popover-DlH_VhBZ.js";import"./Form-CL-CASjO.js";import"./useField-cHCcHNn5.js";import"./check-KGi_FrXR.js";import"./useToggleState-BMmoDZPa.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
