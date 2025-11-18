import{j as e}from"./iframe-BJVWIAI0.js";import{C as m}from"./CheckboxGroup-DGEXNy5O.js";import{C as p}from"./Checkbox-B0O6T93a.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DfZxug9i.js";import"./utils-BgvIVkCn.js";import"./clsx-B-dksMZM.js";import"./Text-DsWM3atI.js";import"./useFocusRing-qe9665FA.js";import"./index-YXp4qXd9.js";import"./index-Dkok9qcg.js";import"./clsx-Ciqy0D92.js";import"./Text-BPEOSvMa.js";import"./Label-DSUhOyZv.js";import"./Button-Iro3jgs4.js";import"./Hidden-BopJK65L.js";import"./useLabels-DPwT7URN.js";import"./useButton-ByxRcK80.js";import"./Dialog-CKmh6uA6.js";import"./RSPContexts-rjHquLyv.js";import"./OverlayArrow-BlqdjP7k.js";import"./useResizeObserver-BZ7H1e8v.js";import"./useControlledState-elJiOlaP.js";import"./Collection-C-C5KaR3.js";import"./index-0L5I_mRV.js";import"./Separator-LnRo_iyr.js";import"./SelectionManager-BmZOrW2o.js";import"./useEvent-WDK2xHev.js";import"./scrollIntoView-wRowNge2.js";import"./SelectionIndicator-DOw6UanC.js";import"./useDescription-BffrbCpK.js";import"./ListKeyboardDelegate-BjpzDs_-.js";import"./PressResponder-DM4sz-NC.js";import"./useLocalizedStringFormatter-CLFDyX6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D7slfMbs.js";import"./VisuallyHidden-DemlhoEG.js";import"./useLocalizedStringFormatter-BJeLafFZ.js";import"./Button-BsXqtviW.js";import"./Button.module-CtQ1deO8.js";import"./x-DROWsTsK.js";import"./createLucideIcon-DVKYReIg.js";import"./Heading-CSPWmQYQ.js";import"./info-DN9JoJ2X.js";import"./Popover-Jn8dfkSm.js";import"./useFormValidation-BI-HDx1u.js";import"./useField-BLXTxzPM.js";import"./Form-DKmb3nnx.js";import"./check-DI6Ps7NP.js";import"./useToggleState-5JFztYe8.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
