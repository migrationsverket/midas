import{j as e}from"./iframe-CSArLD6f.js";import{C as m}from"./CheckboxGroup-CEh7iOdl.js";import{C as p}from"./Checkbox-DRisM9-k.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B5M3gUUv.js";import"./utils-CCBKoGgU.js";import"./clsx-B-dksMZM.js";import"./Text-BU71TyQs.js";import"./useFocusRing-IWQ1hWag.js";import"./index-DIECvqes.js";import"./index-ywIekiaj.js";import"./clsx-Ciqy0D92.js";import"./Text-DYmfOSM7.js";import"./Label-rJx_BLP5.js";import"./Button-CVc2L7QK.js";import"./Hidden-C3bxkDXx.js";import"./useLabel-6yPvvDeu.js";import"./useLabels-y6WFRAzY.js";import"./useButton-Ivv3_IdO.js";import"./Dialog-DVaGRSMs.js";import"./RSPContexts-gcUc6sbV.js";import"./OverlayArrow-B0Tz0TsE.js";import"./useResizeObserver-8e9XeeUW.js";import"./useControlledState-DaW5OxR1.js";import"./Collection-x3RjRwuY.js";import"./index-BHal24tP.js";import"./Separator-BN9Hb4ee.js";import"./SelectionManager-C7RrhPzl.js";import"./useEvent-DjZuF2Xg.js";import"./scrollIntoView-C_WrJeuk.js";import"./SelectionIndicator-zOWLD5tv.js";import"./useDescription-dWdsonds.js";import"./ListKeyboardDelegate-0NCQPax5.js";import"./PressResponder-CMu9Ri_4.js";import"./useLocalizedStringFormatter-WHf9z393.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7Vb3PF9.js";import"./getScrollParent-7cis0Mb7.js";import"./VisuallyHidden-46ezc1h_.js";import"./ModalOverlay-DcVc98oa.js";import"./x-C6uKjybT.js";import"./createLucideIcon-DROqj45j.js";import"./useLocalizedStringFormatter-BBjTg30D.js";import"./Heading-CljZzBPJ.js";import"./Button-CWyJ-riM.js";import"./Button.module-BB7N-cLd.js";import"./info-ZtStK7ES.js";import"./Popover-CiVftmhn.js";import"./Form-BIzjWTDH.js";import"./useField-BAs0XYJF.js";import"./check-B3qrLCx3.js";import"./useToggleState-CgeZQWEh.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
