import{j as e}from"./iframe-CcS9-zHY.js";import{C as m}from"./CheckboxGroup-BPZf22f5.js";import{C as p}from"./Checkbox-BwT4xHY7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CbsUmaqP.js";import"./utils-BpPVMEC-.js";import"./clsx-B-dksMZM.js";import"./Text-Bk3CxDKX.js";import"./useFocusRing-DtQX9EVQ.js";import"./index-B__opsAk.js";import"./index-CTyP7lmf.js";import"./clsx-Ciqy0D92.js";import"./Text-BzFZDvz7.js";import"./Label-x-AGAuY-.js";import"./Button-CP1lY-X_.js";import"./Hidden-C5RVHIuY.js";import"./useLabel-CjpuKoQa.js";import"./useLabels-CEXOtBfV.js";import"./useButton-D8FkW36h.js";import"./Dialog-CFvfOaII.js";import"./RSPContexts-CbDTmKmT.js";import"./OverlayArrow-CJgvQAgw.js";import"./useResizeObserver-DEGSXQPw.js";import"./useControlledState-BouQOm1H.js";import"./Collection-B8BWG8uC.js";import"./index-BeFzaQ2_.js";import"./Separator-DyJc7VpD.js";import"./SelectionManager-B0z2jKGv.js";import"./useEvent-BvvSzZ47.js";import"./scrollIntoView-xMmmrx8y.js";import"./SelectionIndicator-XmQFTl1h.js";import"./useDescription-BvrFOMAt.js";import"./ListKeyboardDelegate-BKbak_DI.js";import"./PressResponder-D-DWvY-U.js";import"./useLocalizedStringFormatter-CayNuj83.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhvHnTYH.js";import"./getScrollParent-C09F78IA.js";import"./VisuallyHidden-hYYm2jyD.js";import"./ModalOverlay-BoWDw_P2.js";import"./x-I-qa-SpT.js";import"./createLucideIcon-C0GJ5EwW.js";import"./useLocalizedStringFormatter-CK-X1ruo.js";import"./Heading-BXnatuTy.js";import"./Button-D2itB7Px.js";import"./Button.module-BB7N-cLd.js";import"./info-g2NHuh4Z.js";import"./Popover-BkUVv2pi.js";import"./Form-B4Em8h3U.js";import"./useField-B-LqTpNQ.js";import"./check-C73J9HTj.js";import"./useToggleState-DCFGrPdd.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
