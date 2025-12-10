import{j as e}from"./iframe--li1tHgy.js";import{C as m}from"./CheckboxGroup-ytiZM2Cf.js";import{C as p}from"./Checkbox-DnEuAieL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BS8UBwNs.js";import"./utils-d7pE4sht.js";import"./clsx-B-dksMZM.js";import"./Text-C6CT3M7i.js";import"./useFocusRing-Baa8Ke6W.js";import"./index-BMTXQDlD.js";import"./index-na2T25w4.js";import"./clsx-Ciqy0D92.js";import"./Text-CGSXZbqm.js";import"./Label-BDKq7zTU.js";import"./Button-DhqFImjK.js";import"./Hidden-DN3rilfW.js";import"./useLabels-CQth3QJU.js";import"./useButton-DI4U2DL6.js";import"./Dialog-F6BzOy3r.js";import"./RSPContexts-BSBhoFuS.js";import"./OverlayArrow-DzvRH9ri.js";import"./useResizeObserver-BNYgqIcY.js";import"./useControlledState-D6TeioUq.js";import"./Collection-Dukm3efG.js";import"./index-B0vlo7Qg.js";import"./Separator-6fUCvzl8.js";import"./SelectionManager-IXe-UntA.js";import"./useEvent-Cf26KrZD.js";import"./scrollIntoView-B8fKlZrL.js";import"./SelectionIndicator-Be0VyM_d.js";import"./useDescription-Dj35526z.js";import"./ListKeyboardDelegate-BcZ72jDP.js";import"./PressResponder-BhubM9J3.js";import"./useLocalizedStringFormatter-B9gNfdrG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DBJMcwbO.js";import"./VisuallyHidden-BrGVJhu4.js";import"./Button-nsixNk6A.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DjA8Yn1n.js";import"./createLucideIcon-DFHtXhgj.js";import"./x-CZtxyvPc.js";import"./Heading-B-DVUmM6.js";import"./info-k-ncB9uD.js";import"./Popover--kD49P2A.js";import"./useFormValidation-Dg7o7GpV.js";import"./useField-SbE2AaK3.js";import"./Form-dkSnjkdr.js";import"./check-SBpzUAJs.js";import"./useToggleState-CN8uWLYG.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
