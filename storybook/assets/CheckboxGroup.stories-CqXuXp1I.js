import{j as e}from"./iframe-DjEq5KJs.js";import{C as m}from"./CheckboxGroup-DkSIWdyb.js";import{C as p}from"./Checkbox-B4zrwJwB.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bb0J40Lw.js";import"./utils-CCFqI4vB.js";import"./clsx-B-dksMZM.js";import"./Text-C9cSyz4C.js";import"./useFocusRing-BC0wMAce.js";import"./index-DCW76Eph.js";import"./index-BjqDN30t.js";import"./clsx-Ciqy0D92.js";import"./Text-D1_j7g2y.js";import"./Label-FLVg4dLw.js";import"./Button-B8049aKJ.js";import"./Hidden-DnGBJvOz.js";import"./useLabels-DmAHK44v.js";import"./useButton-hAhYDtFG.js";import"./Dialog-CIBWG67Y.js";import"./RSPContexts-BkrQi2MA.js";import"./OverlayArrow-BsM7kaUD.js";import"./useResizeObserver-CkV9At_F.js";import"./useControlledState-DHOlhB6J.js";import"./Collection-PdxGb2NC.js";import"./index-D7jnqUHI.js";import"./Separator-BAF98QNY.js";import"./SelectionManager-Do5OCu1G.js";import"./useEvent-DG6NBjU6.js";import"./scrollIntoView-CvJ6INea.js";import"./SelectionIndicator-BkY-dFot.js";import"./useDescription-BknCMZIc.js";import"./ListKeyboardDelegate-BeAcTZuj.js";import"./PressResponder-DOqMpMmg.js";import"./useLocalizedStringFormatter-BAjOeHv7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B8SMXqH0.js";import"./VisuallyHidden-F00Kn1rT.js";import"./useLocalizedStringFormatter-DEEl06YP.js";import"./Button-BV-3OGoZ.js";import"./Button.module-CtQ1deO8.js";import"./x-C-gP-JHv.js";import"./createLucideIcon-C_34UrfF.js";import"./Heading-B_wqikp6.js";import"./info-BxMowamg.js";import"./Popover-CyTAYxEc.js";import"./useFormValidation--ayf3cXk.js";import"./useField-WceNKHCP.js";import"./Form-Drod-QMb.js";import"./check-C6Ktnais.js";import"./useToggleState-huAnxkKb.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
