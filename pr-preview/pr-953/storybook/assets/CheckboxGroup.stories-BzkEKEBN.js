import{j as e}from"./iframe-gVQjPewL.js";import{C as m}from"./CheckboxGroup-BvUB2mpJ.js";import{C as p}from"./Checkbox-DCwYLIXC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-vZRBOpgn.js";import"./utils-BAvziVQG.js";import"./clsx-B-dksMZM.js";import"./Text-D78Bknv4.js";import"./useFocusRing-0gBgE6N-.js";import"./index-ndXt9Dvv.js";import"./index-Dx6mXqSO.js";import"./clsx-Ciqy0D92.js";import"./Text-_RjAag-Y.js";import"./Label-BUHH8Ryl.js";import"./Button-omCgwxDS.js";import"./Hidden-B8SjbVEJ.js";import"./useLabels-BGa4lReX.js";import"./useButton-ChaUza1w.js";import"./Dialog-C0tGSwX3.js";import"./RSPContexts-Da-6GabZ.js";import"./OverlayArrow-BLQYyuMb.js";import"./useResizeObserver-DtDkwZpF.js";import"./useControlledState-CoTiLeJu.js";import"./Collection-Tbuv4AUC.js";import"./index-Co4Ynxvq.js";import"./Separator-wq4hVWRB.js";import"./SelectionManager-BOfgwwz1.js";import"./useEvent-BImc7z2-.js";import"./scrollIntoView-CxAjrn7U.js";import"./SelectionIndicator-UruU7uTK.js";import"./useDescription-C3xQRC9U.js";import"./ListKeyboardDelegate-DnXYb1bk.js";import"./PressResponder-DVQzaKkb.js";import"./useLocalizedStringFormatter-CGcpvzuT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BY51pk5z.js";import"./VisuallyHidden-DHQLCAYC.js";import"./Button-DzhpmtPX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgH8u-_G.js";import"./createLucideIcon-BtoTmTD-.js";import"./x-CTE2CY3u.js";import"./Heading-CxRtLCg3.js";import"./info-BqWam_su.js";import"./Popover-DPFzvXf6.js";import"./useFormValidation-DAmYnyK_.js";import"./useField-RqV4mzqX.js";import"./Form-DwiLB2NL.js";import"./check-BFD7ctPA.js";import"./useToggleState-BSxRch46.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
