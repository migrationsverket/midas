import{j as e}from"./iframe-6vocyBZR.js";import{C as m}from"./CheckboxGroup-D6zzXDdl.js";import{C as p}from"./Checkbox-DiOSawZg.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-B_UMAHWG.js";import"./utils-BBfZu9kz.js";import"./clsx-B-dksMZM.js";import"./Text-D-Z22iAA.js";import"./useFocusRing-B50ygi4K.js";import"./index-B3IiVLzz.js";import"./index-BLXYeBoF.js";import"./clsx-Ciqy0D92.js";import"./Text-fxXJjlwh.js";import"./Label-DjGxdlXp.js";import"./Button-BhGf2H3u.js";import"./Hidden-BuJvOqEn.js";import"./useLabels-7KDepcIy.js";import"./useButton-CJoNFuGt.js";import"./Dialog-DqQMkHxn.js";import"./RSPContexts-D4oWSe-H.js";import"./OverlayArrow-CPemihyd.js";import"./useResizeObserver-5tgyVsav.js";import"./useControlledState-DmeySdaI.js";import"./Collection-D4jWNWjc.js";import"./index-4MgwAo17.js";import"./Separator-DI6oJU0_.js";import"./SelectionManager-CLE8E8tc.js";import"./useEvent-ZYUzuaQ4.js";import"./scrollIntoView-_NUEia3r.js";import"./SelectionIndicator-DNloq70Y.js";import"./useDescription-Co639SVw.js";import"./ListKeyboardDelegate-CtN3kGMu.js";import"./PressResponder-CIePIazq.js";import"./useLocalizedStringFormatter-Df5C4zQW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D9OqJMJq.js";import"./VisuallyHidden-7XC-BKhD.js";import"./useLocalizedStringFormatter-D-5i6O8E.js";import"./Button-CpfHjZxO.js";import"./Button.module-CtQ1deO8.js";import"./x-TU0qh2BB.js";import"./createLucideIcon-C6fwsjaL.js";import"./Heading-ula2A9Gq.js";import"./info-kH2uwpW1.js";import"./Popover-BOyTgVV5.js";import"./useFormValidation-DdpbHF2n.js";import"./useField-DE_0prIV.js";import"./Form-C5_6FEkg.js";import"./check-DeuZdFCp.js";import"./useToggleState-CctU7RvD.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
