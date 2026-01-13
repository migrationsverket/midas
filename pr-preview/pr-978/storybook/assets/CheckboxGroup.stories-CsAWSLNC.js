import{j as e}from"./iframe-Bu5WN3Ef.js";import{C as m}from"./CheckboxGroup-BHNeZtyv.js";import{C as p}from"./Checkbox-BcaYdpy6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DLBMclUE.js";import"./utils-BiJWA_3V.js";import"./clsx-B-dksMZM.js";import"./Text-D6NDkbQ-.js";import"./useFocusRing-MCCMWjEG.js";import"./index-DaK77TxT.js";import"./index-pKua8EdO.js";import"./clsx-Ciqy0D92.js";import"./Text-CSy2wCTo.js";import"./Label-BmoUrNGl.js";import"./Button-CHgLdR4q.js";import"./Hidden-D12ThQaa.js";import"./useLabels-B6cgoF5h.js";import"./useButton-CWrQWViA.js";import"./Dialog-Br_pB8XJ.js";import"./RSPContexts-DaEwdkBS.js";import"./OverlayArrow-CCMeLBLs.js";import"./useResizeObserver-iBP-rbkk.js";import"./useControlledState-1KPKbDQX.js";import"./Collection-D1vejPdr.js";import"./index-DXrJiyJL.js";import"./Separator-COKc5nQC.js";import"./SelectionManager-BfluCVju.js";import"./useEvent-xlEcSicO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BikYw6fj.js";import"./useDescription-DwXInZjk.js";import"./ListKeyboardDelegate-BUkeqVgS.js";import"./PressResponder-BYMECfUR.js";import"./useLocalizedStringFormatter-XgHPCMNy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dg2E1Ntk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B0tGfuXD.js";import"./Button-CsD82h12.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DyFvLZVg.js";import"./createLucideIcon-CT9OvTIw.js";import"./x-CpFc5-1x.js";import"./Heading-CP5wYQUY.js";import"./info-CC9rluUV.js";import"./Popover-baXZnlHo.js";import"./useFormValidation-Bml2n-Y0.js";import"./useField-Ceb9wNF7.js";import"./Form-DCuhHodC.js";import"./check-CRVDqKUQ.js";import"./useToggleState-Oxr_1iiw.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
