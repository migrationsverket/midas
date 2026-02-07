import{j as e}from"./iframe-B7CA7zm9.js";import{C as m}from"./CheckboxGroup-BFDUKJlW.js";import{C as p}from"./Checkbox-Cb-A5nFR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C6l0vGmY.js";import"./utils-CQgVAoKd.js";import"./clsx-B-dksMZM.js";import"./Text-D03EwgzM.js";import"./useFocusRing-DlIVYC0Q.js";import"./index-Cwsun3ZN.js";import"./index-BocC1wQt.js";import"./clsx-Ciqy0D92.js";import"./Text-Cj80PO87.js";import"./Label-Ctepl0_M.js";import"./Button-DCb3Avtf.js";import"./Hidden-D1GMlL2H.js";import"./useLabels-COPc6DSg.js";import"./useButton-OekK3SSa.js";import"./Dialog-B8n15aSr.js";import"./RSPContexts-DllVX3bg.js";import"./OverlayArrow-BGpEZi_q.js";import"./useResizeObserver-BVLHTBcx.js";import"./useControlledState-C73mtcAA.js";import"./Collection-DxnCaOCK.js";import"./index-Dlarzz0C.js";import"./Separator-CFJ4eBpI.js";import"./SelectionManager--8uLHtnZ.js";import"./useEvent-D9DTZ6Bu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COP-JOsu.js";import"./useDescription-_20e8jer.js";import"./ListKeyboardDelegate-DCvaEldI.js";import"./PressResponder-DP9ZmtgD.js";import"./useLocalizedStringFormatter-jYoZNKU4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMWytpzV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6IbkCTP.js";import"./Button-D89KgD4F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dmi23tW0.js";import"./createLucideIcon-DrWysga5.js";import"./x-BMjxK86n.js";import"./Heading-BIbzDING.js";import"./info-DpfKa9Kg.js";import"./Popover-B8lVjLh6.js";import"./useFormValidation-CmLLFYfy.js";import"./useField-q_r02WmP.js";import"./Form-DfyY1zJA.js";import"./check-CkpRpT-x.js";import"./useToggleState-BVQK-K3f.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
