import{j as e}from"./iframe-CWutqfKR.js";import{C as m}from"./CheckboxGroup-Be9A4DA3.js";import{C as p}from"./Checkbox-B8GoQqYk.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ClytNfPk.js";import"./utils-qZdmNmO1.js";import"./clsx-B-dksMZM.js";import"./Text-CJlC6srz.js";import"./useFocusRing-BuUfrlQY.js";import"./index-B_sF5hyi.js";import"./index-CvMFxXqB.js";import"./clsx-Ciqy0D92.js";import"./Text-BwTFzJBU.js";import"./Label-11xtnvnT.js";import"./Button-BnWrQLFg.js";import"./Hidden-MRIgxKO_.js";import"./useLabels-CV5H4iTO.js";import"./useButton-_SFucHjZ.js";import"./Dialog-trGi10Xe.js";import"./RSPContexts-BHcnN_pC.js";import"./OverlayArrow-yUix7CLZ.js";import"./useResizeObserver-DgcakaNv.js";import"./useControlledState-BVGmSD4F.js";import"./Collection-BPl_BKTc.js";import"./index-DAg4bfWV.js";import"./Separator-DPcn-Y4d.js";import"./SelectionManager-BkT6stK1.js";import"./useEvent-2mXEMkLk.js";import"./scrollIntoView-CxEfx6Cs.js";import"./SelectionIndicator-E3cIqDFo.js";import"./useDescription-B-mxcc0_.js";import"./ListKeyboardDelegate-_yjJx8ut.js";import"./PressResponder-B01988vb.js";import"./useLocalizedStringFormatter-TUhhiYru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeoBHGOs.js";import"./getScrollParent-DpRlBU94.js";import"./VisuallyHidden-D9EFy6-j.js";import"./Button-CRDZmgjm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-7pnUr10b.js";import"./createLucideIcon-CEH_8uo-.js";import"./x-DIkHBrE3.js";import"./Heading-CNCisP1S.js";import"./info-CMr84NBJ.js";import"./Popover-Cd9NSi0K.js";import"./useFormValidation-Db_RhjoB.js";import"./useField-BwhXtUtI.js";import"./Form-DTiAf4kb.js";import"./check-DB3wqhMC.js";import"./useToggleState-fwi-Qtj5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
