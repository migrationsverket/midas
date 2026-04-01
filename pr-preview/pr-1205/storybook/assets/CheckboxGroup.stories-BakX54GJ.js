import{j as e}from"./iframe-BS-EqM9B.js";import{C as m}from"./CheckboxGroup-DEFAAVvc.js";import{C as p}from"./Checkbox-DuQ8iLF8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-1ihXnr04.js";import"./utils-B0k4XHwf.js";import"./clsx-B-dksMZM.js";import"./Text-WfzPelJM.js";import"./useFocusRing-f4Gv2bLP.js";import"./index-Ba_eFeFP.js";import"./index-CSZYNzON.js";import"./clsx-Ciqy0D92.js";import"./Text-BmYuY3ql.js";import"./Label-C83k-g09.js";import"./Button-Fd5Hg-6t.js";import"./Hidden-pMKT4yIR.js";import"./useLabel-CFg80amx.js";import"./useLabels-CtbB0U7H.js";import"./useButton-nlJA0m2t.js";import"./Dialog-DW6GCdEp.js";import"./RSPContexts-BvHJA1-S.js";import"./OverlayArrow-CCo1EhSd.js";import"./useResizeObserver-B2GkBPld.js";import"./useControlledState-B-FXHrTP.js";import"./Collection-Nf-nh6oz.js";import"./index-CN4WIh12.js";import"./Separator-BpmOu2Qf.js";import"./SelectionManager-DZYsh4u5.js";import"./useEvent-CtMwRKAA.js";import"./scrollIntoView-BkCdOWuT.js";import"./SelectionIndicator-BQxGlwbv.js";import"./useDescription-zN_kGT0f.js";import"./ListKeyboardDelegate-DOTDPdTz.js";import"./PressResponder-DD8FzT3J.js";import"./useLocalizedStringFormatter-stCrBMQ7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzIvLcs4.js";import"./getScrollParent-C8WafxuX.js";import"./VisuallyHidden-BPzz7Fut.js";import"./x-9X9TwUAj.js";import"./createLucideIcon-tz6Ei2qt.js";import"./useLocalizedStringFormatter-NiRgEpkW.js";import"./Heading-qHMH1efK.js";import"./Button-C36Rbpm6.js";import"./Button.module-BB7N-cLd.js";import"./info-DmD7c02b.js";import"./Popover-DQic4AOZ.js";import"./Form-WnuVLIo9.js";import"./useField-BO5BP60C.js";import"./check-D3-W0xZb.js";import"./useToggleState-D9MZj3M2.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
