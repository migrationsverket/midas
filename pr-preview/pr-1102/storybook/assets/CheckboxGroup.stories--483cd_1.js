import{j as e}from"./iframe-BaJYC4hW.js";import{C as m}from"./CheckboxGroup-D46rWfYC.js";import{C as p}from"./Checkbox-D_DuZw6S.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-GCWNqEfA.js";import"./utils-CV_LYzzD.js";import"./clsx-B-dksMZM.js";import"./Text-Nc4TUeua.js";import"./useFocusRing-GVDVIwTN.js";import"./index-DOOXPPqc.js";import"./index-C6g9yftp.js";import"./clsx-Ciqy0D92.js";import"./Text-x8DptRje.js";import"./Label-DnUotgag.js";import"./Button-MJDkUy4E.js";import"./Hidden-DlyKOOC9.js";import"./useLabels-0RFifNrF.js";import"./useButton-CbZN5rLr.js";import"./Dialog-CWIpoAXJ.js";import"./RSPContexts-CIUsqnNZ.js";import"./OverlayArrow-CTMw4k8R.js";import"./useResizeObserver-Do18AYBG.js";import"./useControlledState-Du80Dryz.js";import"./Collection-BoKZxKVw.js";import"./index-D1wpFRTD.js";import"./Separator-BTXMi4mI.js";import"./SelectionManager-BASpGvsc.js";import"./useEvent-BWCZrvaR.js";import"./scrollIntoView-UyFo11w1.js";import"./SelectionIndicator-Cuj5Ukeh.js";import"./useDescription-DRlONNEs.js";import"./ListKeyboardDelegate-Du9U_2I9.js";import"./PressResponder-C74Ch0Px.js";import"./useLocalizedStringFormatter-D3VNkE2Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BBub105m.js";import"./getScrollParent-CQuJqaKr.js";import"./VisuallyHidden-D97yOK8y.js";import"./x-BqrUYLd-.js";import"./createLucideIcon-1N_QsJVR.js";import"./useLocalizedStringFormatter-BpY-3ExX.js";import"./Heading-BUeT4e7x.js";import"./Button-CGkZxjHk.js";import"./Button.module-D_C6WeTN.js";import"./info-DEzfTWv0.js";import"./Popover-D3YB1_OK.js";import"./useFormValidation-BMvqAl64.js";import"./useField-DXKisOI4.js";import"./Form-Boa4uwor.js";import"./check-CKzEDgaq.js";import"./useToggleState-YwOYGSdB.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
