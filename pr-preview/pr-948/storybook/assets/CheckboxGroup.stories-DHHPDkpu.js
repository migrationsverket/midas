import{j as e}from"./iframe-Drq588aW.js";import{C as m}from"./CheckboxGroup-D5szGlw1.js";import{C as p}from"./Checkbox-xUy-q0eg.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BSCwEXCJ.js";import"./utils-aeymvuYI.js";import"./clsx-B-dksMZM.js";import"./Text-CKbWo8TX.js";import"./useFocusRing-mHQN6z3x.js";import"./index-hBCxN88b.js";import"./index-NNPaNoGh.js";import"./clsx-Ciqy0D92.js";import"./Text-C6r5Lex8.js";import"./Label-u1EOuFNC.js";import"./Button-C7gy-2EJ.js";import"./Hidden-Dnbbd5N5.js";import"./useLabels-JiIilPDr.js";import"./useButton-C7taEski.js";import"./Dialog-Ch9fc22v.js";import"./RSPContexts-Bw-iGnGu.js";import"./OverlayArrow-CWfV5VPx.js";import"./useResizeObserver-DDIL5TaJ.js";import"./useControlledState-COayyxOg.js";import"./Collection-DDxvWCWo.js";import"./index-PgDZ9KRZ.js";import"./Separator-C2I9C8yA.js";import"./SelectionManager-haA2Lgzs.js";import"./useEvent-CC-XZYLs.js";import"./scrollIntoView-Xka9BiDn.js";import"./SelectionIndicator-Dtz2skS5.js";import"./useDescription-CP6I73UT.js";import"./ListKeyboardDelegate-WfcHdrbg.js";import"./PressResponder-CZ3etc2a.js";import"./useLocalizedStringFormatter-CfbPsYEt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D2tSCSSO.js";import"./VisuallyHidden-BkTTj5Jf.js";import"./Button-Bby9lJBH.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B0Gzr_5r.js";import"./createLucideIcon-BnM-Ijqi.js";import"./x-C_YK2Sn_.js";import"./Heading-DD2--ACK.js";import"./info-DJNwubPi.js";import"./Popover-CFE09TNQ.js";import"./useFormValidation-Xn3ZHDpP.js";import"./useField-BVVZciIw.js";import"./Form-fzg9Y9vg.js";import"./check-COAIqTbO.js";import"./useToggleState-DWkf1rq9.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
