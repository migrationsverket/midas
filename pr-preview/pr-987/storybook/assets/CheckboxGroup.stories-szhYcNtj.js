import{j as e}from"./iframe-BXluW0qw.js";import{C as m}from"./CheckboxGroup-BWna1Ls4.js";import{C as p}from"./Checkbox-BBeyfh0w.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DkGWPtYI.js";import"./utils-qhqCas48.js";import"./clsx-B-dksMZM.js";import"./Text-D4saPv-u.js";import"./useFocusRing-hYKFtLyc.js";import"./index-Cz-tQ20r.js";import"./index-Czak5Xsp.js";import"./clsx-Ciqy0D92.js";import"./Text-jsh445C9.js";import"./Label-Dz5nrdFW.js";import"./Button-D751rG_Q.js";import"./Hidden-Dj90_01P.js";import"./useLabels-D-uykTL3.js";import"./useButton-sK7GQKK3.js";import"./Dialog-D--hf2tk.js";import"./RSPContexts-CiUO47lm.js";import"./OverlayArrow-CI_PcWVK.js";import"./useResizeObserver-CJSlKTuU.js";import"./useControlledState-DQw7CMNY.js";import"./Collection-LFwfl5_M.js";import"./index-jBsa-1DK.js";import"./Separator-BGxX7Hvs.js";import"./SelectionManager-JTF8g9_5.js";import"./useEvent-BA_ZQV4c.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ci8YD20B.js";import"./useDescription-BXiuV7mk.js";import"./ListKeyboardDelegate-CHFQe9A5.js";import"./PressResponder-BWX5znY8.js";import"./useLocalizedStringFormatter-D2jEh7gz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cz6zEb9E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRFl4D4u.js";import"./Button-BBVzxyIb.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-C8r3sehO.js";import"./createLucideIcon-CuvupPzO.js";import"./x-CRtOwHXc.js";import"./Heading-DLg79cXd.js";import"./info-ekQ0lT2T.js";import"./Popover-Bo_8rdx6.js";import"./useFormValidation-DbID4Z4G.js";import"./useField-DWbyryzg.js";import"./Form-l6KsTUw2.js";import"./check-DxXsh-ly.js";import"./useToggleState-2N-q0n2B.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
