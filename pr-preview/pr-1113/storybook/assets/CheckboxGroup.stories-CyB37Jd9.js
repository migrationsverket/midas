import{j as e}from"./iframe-Bv5ml16c.js";import{C as m}from"./CheckboxGroup-DngFqs_-.js";import{C as p}from"./Checkbox-BcympGye.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ikMxF9RT.js";import"./utils-CrzZ4zVW.js";import"./clsx-B-dksMZM.js";import"./Text-B5E6ljJT.js";import"./useFocusRing-Cq3qZjv_.js";import"./index-BOMnw_9i.js";import"./index-fzWvs2nE.js";import"./clsx-Ciqy0D92.js";import"./Text-AKHTrLSe.js";import"./Label-CVytCgXh.js";import"./Button-DLv8fZul.js";import"./Hidden-w_KhT5lQ.js";import"./useLabels-CDeKv3MG.js";import"./useButton-BFdfWCYJ.js";import"./Dialog-BXiKJeLw.js";import"./RSPContexts-WtmDll1S.js";import"./OverlayArrow-s_PFhCGi.js";import"./useResizeObserver-AFalClzs.js";import"./useControlledState-D6OB0qGK.js";import"./Collection-sUJ8wEdO.js";import"./index-koW_KEyU.js";import"./Separator-BRPlw3SR.js";import"./SelectionManager-qPLhk111.js";import"./useEvent-Bm-0c1SF.js";import"./scrollIntoView-BeG1fKYH.js";import"./SelectionIndicator-B-AzNisY.js";import"./useDescription-BqCWQXFE.js";import"./ListKeyboardDelegate-BMGxV2vJ.js";import"./PressResponder-Czmnea-t.js";import"./useLocalizedStringFormatter-CtTQzSvs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXw-D0yh.js";import"./getScrollParent-CUNZV9Gn.js";import"./VisuallyHidden-CVPJh_a3.js";import"./x-D6Yjzl3t.js";import"./createLucideIcon-CDmvOUsI.js";import"./useLocalizedStringFormatter-CsxePGHN.js";import"./Heading-B8xw2oF8.js";import"./Button-CLHYluxH.js";import"./Button.module-BB7N-cLd.js";import"./info-CISb09uM.js";import"./Popover-BCtEUoE0.js";import"./Form-COgYqSWW.js";import"./useField-DZJN0KJ3.js";import"./check-BoftruIi.js";import"./useToggleState-Cy_jROuq.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
