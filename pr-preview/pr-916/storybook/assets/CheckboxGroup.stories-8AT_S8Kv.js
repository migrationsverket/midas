import{j as e}from"./iframe-BjoitsA_.js";import{C as m}from"./CheckboxGroup-CjBZNM7o.js";import{C as p}from"./Checkbox-6vR4S_O1.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-CQa2IgQG.js";import"./utils-CqffejwQ.js";import"./clsx-B-dksMZM.js";import"./Text-D2_Dqxb_.js";import"./useFocusRing-CcZ79Pjo.js";import"./index-DIj_Fm1N.js";import"./index-IOKqJsz7.js";import"./clsx-Ciqy0D92.js";import"./Text-C1C2cp8Y.js";import"./Label-D7FZdfTS.js";import"./Button-dCjcK3xZ.js";import"./Hidden-Dlma28aT.js";import"./useLabels-BvRWHbBu.js";import"./useButton-BHN-E1Nk.js";import"./Dialog-BD84FJkQ.js";import"./RSPContexts-BM0YpPTx.js";import"./OverlayArrow-Cf8gP1Ii.js";import"./useResizeObserver-C8jp6HQ3.js";import"./useControlledState-mjBa_ctK.js";import"./Collection-MECz3tYb.js";import"./index-BRHjuUYx.js";import"./Separator-DFJi1lOr.js";import"./SelectionManager-BhFeTdO8.js";import"./useEvent-DyYZuFIh.js";import"./scrollIntoView-Bgf_9KZM.js";import"./SelectionIndicator-DocZ94Ga.js";import"./useDescription-CZo8T5nr.js";import"./ListKeyboardDelegate-DZdFiNXQ.js";import"./PressResponder-8O6ZKXkc.js";import"./useLocalizedStringFormatter-VaXQjYCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B0dWRzBe.js";import"./VisuallyHidden-NXDdaJHH.js";import"./useLocalizedStringFormatter-CADBOpY1.js";import"./Button-CcGX5Wmo.js";import"./Button.module-CtQ1deO8.js";import"./x-CMNarlDj.js";import"./createLucideIcon-CNrUrsyr.js";import"./Heading-Ch4W9UFX.js";import"./info-C54KhoV0.js";import"./Popover-DAOuvXb1.js";import"./useFormValidation-DO-tUN-i.js";import"./useField-6Y1j__MT.js";import"./Form-DhFbmwQ7.js";import"./check-dX91o2fG.js";import"./useToggleState-B9u1I4kW.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
