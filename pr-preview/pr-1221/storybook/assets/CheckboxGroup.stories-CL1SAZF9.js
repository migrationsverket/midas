import{j as e}from"./iframe-CJ-60Efo.js";import{C as m}from"./CheckboxGroup-ciPau-2r.js";import{C as p}from"./Checkbox-qm68wH4Y.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DwTCOkZc.js";import"./utils-CZH6ruXT.js";import"./clsx-B-dksMZM.js";import"./Text-Bn5fWWC4.js";import"./useFocusRing-CupJGFR5.js";import"./index-vOXKIAHi.js";import"./index-BwPxUj6U.js";import"./clsx-Ciqy0D92.js";import"./Text-duXz9LRx.js";import"./Label-D5dnWAG6.js";import"./Button-DEbA7b2J.js";import"./Hidden-DsEAHCyp.js";import"./useLabel-VhNYVAU_.js";import"./useLabels-BF24WIl1.js";import"./useButton-C626U6QZ.js";import"./Dialog-BuqhW9nz.js";import"./RSPContexts-DWc37NkB.js";import"./OverlayArrow-BGutNkw1.js";import"./useResizeObserver-gGq7gavv.js";import"./useControlledState-xfItMrqO.js";import"./Collection-BwmddpCk.js";import"./index-DIQ2MoDm.js";import"./Separator-Cuh0wpt8.js";import"./SelectionManager-CUThgWMG.js";import"./useEvent-D57KiGSv.js";import"./scrollIntoView-B5Nn40hc.js";import"./SelectionIndicator-556dOdx1.js";import"./useDescription-QSvqFumA.js";import"./ListKeyboardDelegate-CBv4K7BP.js";import"./PressResponder-D0JRcaJn.js";import"./useLocalizedStringFormatter-CVaGGIuq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkl1YJvl.js";import"./getScrollParent-iQ5uL2tb.js";import"./VisuallyHidden-DhklY17S.js";import"./Modal-NwGj3306.js";import"./x-CqpjZLya.js";import"./createLucideIcon-n1hD9M9W.js";import"./useLocalizedStringFormatter-CNLs5A0B.js";import"./Heading-CcbElr9K.js";import"./Button-DePLT0p9.js";import"./Button.module-BB7N-cLd.js";import"./info-DwxNtEuT.js";import"./Popover-D6TSIqYq.js";import"./Form-CC7WfIHq.js";import"./useField-avb_z8h9.js";import"./check-DvTlej2b.js";import"./useToggleState-lJOlRy8F.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
