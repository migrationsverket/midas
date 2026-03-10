import{j as e}from"./iframe-D-p6dryC.js";import{C as m}from"./CheckboxGroup-BbfW60tD.js";import{C as p}from"./Checkbox-xRs-jxDl.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CmYJRG-e.js";import"./utils-B-poXB9P.js";import"./clsx-B-dksMZM.js";import"./Text-D7fRftcI.js";import"./useFocusRing-1dArzfdN.js";import"./index-DIakIQqk.js";import"./index-DkL1JqyI.js";import"./clsx-Ciqy0D92.js";import"./Text-CMUqHi1g.js";import"./Label-CspfoamS.js";import"./Button-BU7RNZRB.js";import"./Hidden-BoY54D8z.js";import"./useLabels-Djww4bwV.js";import"./useButton-BYxg0DiE.js";import"./Dialog-Chkq-rA4.js";import"./RSPContexts-i063sbcf.js";import"./OverlayArrow-CBEPUFcA.js";import"./useResizeObserver-CmPeViZY.js";import"./useControlledState-BBjtOFIE.js";import"./Collection-BXpaJA4N.js";import"./index-BnT7g8Eo.js";import"./Separator-DkjgByAW.js";import"./SelectionManager-B2o_x42c.js";import"./useEvent-0pnQ-670.js";import"./scrollIntoView-CkrWhIra.js";import"./SelectionIndicator-wEHTqjRA.js";import"./useDescription-DAt4X-Ie.js";import"./ListKeyboardDelegate-CRMYwzxR.js";import"./PressResponder-Cy8aKvfU.js";import"./useLocalizedStringFormatter-qTNGciRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQUZ3feY.js";import"./getScrollParent-D3Nh5GEm.js";import"./VisuallyHidden-jfhHFvLB.js";import"./Button-W-Uz8qez.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DBvUnH6s.js";import"./createLucideIcon-DPKqS8th.js";import"./x-DTawh0wA.js";import"./Heading-DWeNJ0wl.js";import"./info-Ceoj3OW9.js";import"./Popover-2y-vFCFH.js";import"./useFormValidation-DdWh0zdu.js";import"./useField-CgSVtjeX.js";import"./Form-Hzjw-i4A.js";import"./check-BSDBGN_A.js";import"./useToggleState-C0iQawls.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
