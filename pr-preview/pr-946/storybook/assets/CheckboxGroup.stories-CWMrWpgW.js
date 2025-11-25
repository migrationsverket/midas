import{j as e}from"./iframe-B_KOJ0G0.js";import{C as m}from"./CheckboxGroup-C3j_afJv.js";import{C as p}from"./Checkbox-BHxaR2NS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DUwoG9cu.js";import"./utils-BTtkoL8i.js";import"./clsx-B-dksMZM.js";import"./Text-D3GHA6gq.js";import"./useFocusRing-5nURZfN9.js";import"./index-CXgWkQzh.js";import"./index-CF3jB36m.js";import"./clsx-Ciqy0D92.js";import"./Text-ZOMm-Alb.js";import"./Label-BkPBTg7u.js";import"./Button-CnpoiceM.js";import"./Hidden-B9DtuNar.js";import"./useLabels-FMAmdZ1G.js";import"./useButton-DkRmfz4B.js";import"./Dialog-CJGg_q5A.js";import"./RSPContexts-CbVBvrS_.js";import"./OverlayArrow-DMFwF3Tj.js";import"./useResizeObserver-BCTsMvHc.js";import"./useControlledState-CTR0ps1O.js";import"./Collection-qBAPm5HX.js";import"./index-CKx1Vqp3.js";import"./Separator-awFrDq_W.js";import"./SelectionManager-D_LDUR9m.js";import"./useEvent-DxD1kQt5.js";import"./scrollIntoView-BwfxgBXt.js";import"./SelectionIndicator-GcCYW7bK.js";import"./useDescription-7M9C1DQ3.js";import"./ListKeyboardDelegate-BPFL0eMh.js";import"./PressResponder-Bk_mNxXq.js";import"./useLocalizedStringFormatter-DGPkZ-8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DfLYi2pS.js";import"./VisuallyHidden-C9mO_RkX.js";import"./Button-Drf_ZmSl.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v4d1yczo.js";import"./createLucideIcon-C0reiAmG.js";import"./x-t-f0L9zQ.js";import"./Heading-D-1uIkeo.js";import"./info-C3UuH5jm.js";import"./Popover-Br_CJh4y.js";import"./useFormValidation-CTGgOiwX.js";import"./useField-BD0VU8YG.js";import"./Form-WL1-LyKP.js";import"./check-DXkoIzHV.js";import"./useToggleState-Dnz_0DCm.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
