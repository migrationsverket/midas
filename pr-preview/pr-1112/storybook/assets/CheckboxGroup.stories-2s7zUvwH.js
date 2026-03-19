import{j as e}from"./iframe-C9WX87J6.js";import{C as m}from"./CheckboxGroup-CFOfwHbh.js";import{C as p}from"./Checkbox-DVVoaF2s.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BMuqq62L.js";import"./utils-WPpV5jWl.js";import"./clsx-B-dksMZM.js";import"./Text-BCCgd_b8.js";import"./useFocusRing-CAXYS_HG.js";import"./index-CHnbLAYQ.js";import"./index-La7aNuBH.js";import"./clsx-Ciqy0D92.js";import"./Text-BtCJyYmU.js";import"./Label-3tTqA_lk.js";import"./Button-Bu5uxYhh.js";import"./Hidden-CEJtjfct.js";import"./useLabels-DgR_9Kxw.js";import"./useButton-CpsvKUvy.js";import"./Dialog-Be-YiFRp.js";import"./RSPContexts-DpKSKp3G.js";import"./OverlayArrow-BmejntqJ.js";import"./useResizeObserver-mHpqwk-P.js";import"./useControlledState-fvtCyn4a.js";import"./Collection-Bua-hp0H.js";import"./index-zTUZP3np.js";import"./Separator-2CJ-HnLM.js";import"./SelectionManager-DAfe-HwK.js";import"./useEvent-CwKYR3g8.js";import"./scrollIntoView-BvPcFHyF.js";import"./SelectionIndicator-DMa2A1w6.js";import"./useDescription-DSJqKme2.js";import"./ListKeyboardDelegate-BkqDl2Q0.js";import"./PressResponder-DsSkDH2D.js";import"./useLocalizedStringFormatter-D1_2bmqB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DghRP79b.js";import"./getScrollParent-CXN1jHN8.js";import"./VisuallyHidden-C27kR6LN.js";import"./x-BtWXvI6-.js";import"./createLucideIcon-LB-mxs_a.js";import"./useLocalizedStringFormatter-zypQ79BF.js";import"./Heading-DgSSmx57.js";import"./Button-CB3oN7z-.js";import"./Button.module-BB7N-cLd.js";import"./info-CjH_AYwV.js";import"./Popover-CjjrxHYD.js";import"./Form-CrDGPGDU.js";import"./useField-CaDFVgqd.js";import"./check-D-Kq0jqj.js";import"./useToggleState-Bxsu7LWD.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
