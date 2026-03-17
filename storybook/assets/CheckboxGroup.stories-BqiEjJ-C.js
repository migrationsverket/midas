import{j as e}from"./iframe--IbK7uvL.js";import{C as m}from"./CheckboxGroup-BP0j7Jtq.js";import{C as p}from"./Checkbox-Blc3GeQn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C7TTOr5D.js";import"./utils-CA7lVtot.js";import"./clsx-B-dksMZM.js";import"./Text-fLskqfUb.js";import"./useFocusRing-D2xoM2VM.js";import"./index-BZz7yXlj.js";import"./index-CXKCK8P0.js";import"./clsx-Ciqy0D92.js";import"./Text-qvWOJ16d.js";import"./Label-DiAadJbE.js";import"./Button-Re0Yy6Pp.js";import"./Hidden-BExZVod8.js";import"./useLabels-rslA135_.js";import"./useButton-Cojk1q0i.js";import"./Dialog-BziSI5az.js";import"./RSPContexts-CuIQ88x9.js";import"./OverlayArrow-wQIpOgVU.js";import"./useResizeObserver-D4SKbTHF.js";import"./useControlledState-xHQ8O9W1.js";import"./Collection-DYP0TvTP.js";import"./index-DQ8CC9Ma.js";import"./Separator-CLdh5GVL.js";import"./SelectionManager-hB9sSLiJ.js";import"./useEvent-C2aKNcd9.js";import"./scrollIntoView-DpbtecG_.js";import"./SelectionIndicator-BVtUFBWh.js";import"./useDescription-C_IbgAiL.js";import"./ListKeyboardDelegate-CIOrWFjf.js";import"./PressResponder-Cu-sV0FT.js";import"./useLocalizedStringFormatter-Dg5HXGYt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6FfuHjp.js";import"./getScrollParent-BemRRphk.js";import"./VisuallyHidden-CYG4Jpuo.js";import"./x-CRmhj2OD.js";import"./createLucideIcon-CZI6jzSG.js";import"./useLocalizedStringFormatter-Dr2L-_6O.js";import"./Heading-SJsGu3yX.js";import"./Button-BYHfDOH9.js";import"./Button.module-BB7N-cLd.js";import"./info-CwquDcC_.js";import"./Popover-C_KG0Jqv.js";import"./useFormValidation-CKM46q2q.js";import"./useField-CsTm_RNd.js";import"./Form-SHW1w9sE.js";import"./check-Btzl49pF.js";import"./useToggleState-BSsCBfRe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
