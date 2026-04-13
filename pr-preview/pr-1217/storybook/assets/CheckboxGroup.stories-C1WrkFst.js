import{j as e}from"./iframe-DDrwZSUr.js";import{C as m}from"./CheckboxGroup-DzFzvJsp.js";import{C as p}from"./Checkbox-r_4UI1fM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dwx20Li1.js";import"./utils-fZpJvyFO.js";import"./clsx-B-dksMZM.js";import"./Text-C8zREkr5.js";import"./useFocusRing-Co7KnI-2.js";import"./index-BDdESxF6.js";import"./index-2ekyzgHz.js";import"./clsx-Ciqy0D92.js";import"./Text-CsbHuTMa.js";import"./Label-zFg_rysu.js";import"./Button-BBtH1XqU.js";import"./Hidden-BbxqZPAf.js";import"./useLabel-B-iHNEQ-.js";import"./useLabels-C-XwBesu.js";import"./useButton-DTzMuBwj.js";import"./Dialog-B_fIIImm.js";import"./RSPContexts-DBeOTN7L.js";import"./OverlayArrow-DdmkYdL-.js";import"./useResizeObserver-CAKse5q8.js";import"./useControlledState-CoaU-25M.js";import"./Collection-DdrG0jfe.js";import"./index-D2JzpI49.js";import"./Separator-CyG8sSw9.js";import"./SelectionManager-Pdt05C2-.js";import"./useEvent-v--lpn9l.js";import"./scrollIntoView-Dk5DfXO6.js";import"./SelectionIndicator-BA7AxvgT.js";import"./useDescription-Bqe-Zf64.js";import"./ListKeyboardDelegate-TygQEIe6.js";import"./PressResponder-D59WGRsi.js";import"./useLocalizedStringFormatter--0SdXCip.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RS1PcHRn.js";import"./getScrollParent-DB8NtD2D.js";import"./VisuallyHidden-Dfp2PUpV.js";import"./Modal-DKVo_TS5.js";import"./x-CGnJ7BA1.js";import"./createLucideIcon-YccigzIq.js";import"./useLocalizedStringFormatter-CaCMCUjI.js";import"./Heading-D6s1WcTy.js";import"./Button-B7DQCmWQ.js";import"./Button.module-BB7N-cLd.js";import"./info-IOZI_zMf.js";import"./Popover-BKmRYmCQ.js";import"./Form-CrG6ievP.js";import"./useField-CG9QcYio.js";import"./check-Dnl8T4ia.js";import"./useToggleState-x7Sen6KP.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
