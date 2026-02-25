import{j as e}from"./iframe-BIYycVtF.js";import{C as m}from"./CheckboxGroup-C-lLE7QG.js";import{C as n}from"./Checkbox-tgrDSnbu.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BsWqYage.js";import"./utils-CQyQJNz7.js";import"./useObjectRef-Dnttuos9.js";import"./clsx-B-dksMZM.js";import"./Text-A1nWhzuO.js";import"./useFocusRing-_u8e-JUw.js";import"./useFocusable-DRoMEDqQ.js";import"./index-CH0u5tNJ.js";import"./index-Dx5ixs9i.js";import"./clsx-Ciqy0D92.js";import"./Text-B1YyVTq1.js";import"./Label-DYI4Hi0v.js";import"./Button-xCxR0kSd.js";import"./Hidden-AGqSstUV.js";import"./useLabels-DC_FEenW.js";import"./useButton-BNdOFr74.js";import"./Dialog-7czyXmUB.js";import"./RSPContexts-B6TKKvZV.js";import"./OverlayArrow-DFDW9jlO.js";import"./useResizeObserver-eM6IJa4E.js";import"./useControlledState-C6aaDo-s.js";import"./Collection-emX73nrZ.js";import"./CollectionBuilder-5cVLOiMR.js";import"./index-2x7kCp5n.js";import"./Separator-CalRW1Eu.js";import"./SelectionManager-EfHU5LpS.js";import"./useEvent-B9CnIbJl.js";import"./scrollIntoView-Bo1Xab6M.js";import"./SelectionIndicator-qZAjNlSO.js";import"./useDescription-DVfA0GtU.js";import"./ListKeyboardDelegate-C3gxtFmw.js";import"./PressResponder-B9WZc19F.js";import"./useLocalizedStringFormatter-BW8yoNsi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bwz2spCR.js";import"./getScrollParent-BVUiVP-B.js";import"./VisuallyHidden-CK9a4W9O.js";import"./Button-D9Any6-B.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKDdPfco.js";import"./createLucideIcon-S6aGlHi1.js";import"./x-CohE59zs.js";import"./Heading-BG47WcTa.js";import"./info-CPdajoQQ.js";import"./Popover-DvmrTdrb.js";import"./useFormValidation-CJX6c1NG.js";import"./useField-BJy-oEwD.js";import"./Form-CvaXZ-x_.js";import"./check-CRNy0lPB.js";import"./useToggleState-BNEroOSs.js";const cr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(n,{value:r,children:r},r))},tags:["autodocs"]},o={},t={args:{showSelectAll:!0}},a={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(n,{value:"banana",children:"Banana"}),e.jsx(n,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},p={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...p.parameters?.docs?.source}}};const lr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,p as Invalid,o as Primary,i as ReadOnly,a as SelectAllInteraction,t as ShowSelectAll,lr as __namedExportsOrder,cr as default};
