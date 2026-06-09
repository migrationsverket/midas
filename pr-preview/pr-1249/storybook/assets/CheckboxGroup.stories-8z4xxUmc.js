import{j as e}from"./iframe-DwYJYgGb.js";import{C as m}from"./CheckboxGroup-D1pAFNUw.js";import{C as p}from"./Checkbox-CDMmWNO7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-8dF8Tbve.js";import"./utils-fIJ7LVq8.js";import"./clsx-B-dksMZM.js";import"./Text-B4syvpmZ.js";import"./useFocusRing-CXC08Tq5.js";import"./index-DfNt6tNa.js";import"./index-CHvQzPdc.js";import"./clsx-Ciqy0D92.js";import"./Text-CxhOo0fu.js";import"./Label-Q_Om9wzz.js";import"./Button-Ddo8eX0a.js";import"./Hidden-CwjkXMFO.js";import"./useLabel-BSyxEYuS.js";import"./useLabels-BjAn-6Ht.js";import"./useButton-CGX3_Nnb.js";import"./Dialog-eIQcg82T.js";import"./RSPContexts-DE3QJKMh.js";import"./OverlayArrow-CmYMGfKa.js";import"./useResizeObserver-Cfbnluet.js";import"./useControlledState-CxwoTKvB.js";import"./Collection-Du3GdM9A.js";import"./index-BXWU9W6R.js";import"./Separator-Ie15OD8n.js";import"./SelectionManager-Bzzdwe4i.js";import"./useEvent-exXZI4Sz.js";import"./scrollIntoView-BsKOETet.js";import"./SelectionIndicator-D5viv05a.js";import"./useDescription-DtI32Oaq.js";import"./ListKeyboardDelegate-Cm-sBpbt.js";import"./PressResponder-CtJMV9fG.js";import"./useLocalizedStringFormatter-LO9Tkb5c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DJwCaNaH.js";import"./getScrollParent-Dee46RGf.js";import"./VisuallyHidden-B0sEyNoY.js";import"./ModalOverlay-DiFMsDLM.js";import"./x-CX4TJhGN.js";import"./createLucideIcon-CCgdfoT7.js";import"./useLocalizedStringFormatter-CQladlVx.js";import"./Heading-Dhs8v48I.js";import"./Button-DpQdXJp1.js";import"./Button.module-BB7N-cLd.js";import"./info-Dn1DucMW.js";import"./Popover-DWnmGCyZ.js";import"./Form-CF6mtsDJ.js";import"./useField-mcTKDTGz.js";import"./check-pMJtBoxa.js";import"./useToggleState-UNbpMwQX.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
