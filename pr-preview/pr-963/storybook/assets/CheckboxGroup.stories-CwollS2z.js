import{j as e}from"./iframe-EvAXEFMI.js";import{C as m}from"./CheckboxGroup-BJ7xq3sn.js";import{C as p}from"./Checkbox-Djmg6A-0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BYwZNEs3.js";import"./utils-CxbI4lJ8.js";import"./clsx-B-dksMZM.js";import"./Text-C1bk4Rmu.js";import"./useFocusRing-DfVRu85N.js";import"./index-BERR-sy9.js";import"./index-5Nx_3vzb.js";import"./clsx-Ciqy0D92.js";import"./Text-CAHlbO0E.js";import"./Label-CXiIiWVS.js";import"./Button-CoUp-4SO.js";import"./Hidden-DF-gcxja.js";import"./useLabels-CcKLbZF9.js";import"./useButton-CyNHfsAf.js";import"./Dialog-BHgz53KV.js";import"./RSPContexts-79mGs6IV.js";import"./OverlayArrow-BP1WHt_0.js";import"./useResizeObserver-CwL_yq3H.js";import"./useControlledState-B-dx9B_p.js";import"./Collection-CG3_0aNM.js";import"./index-BN8sygBb.js";import"./Separator-B-NA5MJa.js";import"./SelectionManager-D5SH1Aqt.js";import"./useEvent-CwuJt_mK.js";import"./scrollIntoView-C9rzGjd3.js";import"./SelectionIndicator-BjsEM9O1.js";import"./useDescription-DBAUb1QW.js";import"./ListKeyboardDelegate-Cf2KZwiC.js";import"./PressResponder-BrgAiC1q.js";import"./useLocalizedStringFormatter-LpBXKpWQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C-4i_HdT.js";import"./VisuallyHidden-Bx2PPkoO.js";import"./Button-DNu20i5o.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BQT0Ev-t.js";import"./createLucideIcon-Dkm_kHZA.js";import"./x-DiiIVqZK.js";import"./Heading-BdUvKCq1.js";import"./info-DHknlrQR.js";import"./Popover-BIBXvtep.js";import"./useFormValidation-CNd9s6u-.js";import"./useField-Bz34INMU.js";import"./Form-C9aUt5Bh.js";import"./check-CL6i3-fr.js";import"./useToggleState-Rq4g4OyH.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
