import{j as e}from"./iframe-Cb8Pppl7.js";import{C as m}from"./CheckboxGroup-wRxvk5m_.js";import{C as p}from"./Checkbox-BICj3T9I.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D0-fOVgu.js";import"./utils-Dj888C4V.js";import"./clsx-B-dksMZM.js";import"./Text-D2Ko1ZUZ.js";import"./useFocusRing-hqoRcLtB.js";import"./index-pijaOdDz.js";import"./index-CskuVvb4.js";import"./clsx-Ciqy0D92.js";import"./Text-C5__ZA60.js";import"./Label-BiZqGHJK.js";import"./Button-C8pMS1J_.js";import"./Hidden-COGS7kep.js";import"./useLabel-LJmuk9-y.js";import"./useLabels-C5l5JCC7.js";import"./useButton-SLXd8nlE.js";import"./Dialog-DSEhXHOx.js";import"./RSPContexts-DHg3Hsl6.js";import"./OverlayArrow-2ni0My97.js";import"./useResizeObserver-eW0Ome2f.js";import"./useControlledState-ixH4fEDK.js";import"./Collection-Cj61-OWh.js";import"./index-BeGPmrD_.js";import"./Separator-4_d9jsWj.js";import"./SelectionManager-D6ID8zOu.js";import"./useEvent-BCOghSZ0.js";import"./scrollIntoView-Dz6AtUUb.js";import"./SelectionIndicator-DDopmB2O.js";import"./useDescription-Bk-WLmUt.js";import"./ListKeyboardDelegate-CpEPtBzp.js";import"./PressResponder-BchWjLfC.js";import"./useLocalizedStringFormatter-B0S083G5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-f55oaWaw.js";import"./getScrollParent-Dcxt-3Ql.js";import"./VisuallyHidden-DtKq5Gdo.js";import"./ModalOverlay-DFYUls3I.js";import"./x-BvWkyjfg.js";import"./createLucideIcon-D7UMDINh.js";import"./useLocalizedStringFormatter-BKjuu9LT.js";import"./Heading-Ds7jCsCM.js";import"./Button-D4LxrXr0.js";import"./Button.module-BB7N-cLd.js";import"./info-BVhMhOhK.js";import"./Popover-CcsI4h7o.js";import"./Form-CFGWDFPn.js";import"./useField-BqzVMgOW.js";import"./check-CrRUF_fD.js";import"./useToggleState-_94WYYlb.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
