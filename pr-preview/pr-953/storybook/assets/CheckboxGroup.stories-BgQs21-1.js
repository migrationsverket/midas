import{j as e}from"./iframe-ckMlOdqt.js";import{C as m}from"./CheckboxGroup--vkRGu7V.js";import{C as p}from"./Checkbox-D9k2Tnj2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-dYiQ5ceD.js";import"./utils-BEkamF-T.js";import"./clsx-B-dksMZM.js";import"./Text-AOi115Er.js";import"./useFocusRing-tPLOxKMi.js";import"./index-D88C6xys.js";import"./index-CnAoOEpY.js";import"./clsx-Ciqy0D92.js";import"./Text-CEwfXAsA.js";import"./Label-DsETeMM0.js";import"./Button-Dx6eyFNo.js";import"./Hidden-ByhuVBjJ.js";import"./useLabels-BZnB0y21.js";import"./useButton-DcNY2x9q.js";import"./Dialog-DsEwUyqt.js";import"./RSPContexts-5oeO9ebT.js";import"./OverlayArrow-BTsdjwYC.js";import"./useResizeObserver-yMsAuGaR.js";import"./useControlledState-B3FFsQAI.js";import"./Collection-D-OEq5Qi.js";import"./index-CnKdNEqF.js";import"./Separator-XyLBrGeL.js";import"./SelectionManager-lE_zLbHm.js";import"./useEvent-Bf69eK7o.js";import"./scrollIntoView-D-fTihUR.js";import"./SelectionIndicator-CaOa50L4.js";import"./useDescription-7A577X0U.js";import"./ListKeyboardDelegate-9K7elfes.js";import"./PressResponder-DlmWHrwE.js";import"./useLocalizedStringFormatter-v7dlyhTP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CpbzBao7.js";import"./VisuallyHidden-PSC2lnf9.js";import"./Button-Bu43okhr.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-taz3lryJ.js";import"./createLucideIcon-BKonS68S.js";import"./x-BOSQYS8s.js";import"./Heading-FfM7aRYe.js";import"./info-Bar-uwLW.js";import"./Popover-C24WQauw.js";import"./useFormValidation-Cn1CWmnI.js";import"./useField-CbtVBRto.js";import"./Form-B2iA-KIz.js";import"./check-DdeC7C5P.js";import"./useToggleState-DRr2gB0k.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
