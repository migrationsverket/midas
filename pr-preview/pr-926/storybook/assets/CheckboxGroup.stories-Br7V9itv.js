import{j as e}from"./iframe-vV_WTh41.js";import{C as m}from"./CheckboxGroup-D_TCvR-7.js";import{C as p}from"./Checkbox-DdRqSSnR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DIXFUeQf.js";import"./utils-BLkbaUED.js";import"./clsx-B-dksMZM.js";import"./Text--4As8pE8.js";import"./useFocusRing-DjEgHD23.js";import"./index-8oChgm8L.js";import"./index-BBW3Edhr.js";import"./clsx-Ciqy0D92.js";import"./Text-D7liI3QI.js";import"./Label-BtxHxPpZ.js";import"./Button-DugNrTqg.js";import"./Hidden-DmUWzxob.js";import"./useLabels-D-vRNZ7C.js";import"./useButton-Bka7B6pp.js";import"./Dialog-DPe9SdXM.js";import"./RSPContexts-CB14fttw.js";import"./OverlayArrow-58gOGApE.js";import"./useResizeObserver-DOc--mls.js";import"./useControlledState-B5J2UdzZ.js";import"./Collection-Dq1TtdbX.js";import"./index-Bn-gunHH.js";import"./Separator-XTL_OjvY.js";import"./SelectionManager-Da_V-eeI.js";import"./useEvent-CpdQryxH.js";import"./scrollIntoView-B9se38xm.js";import"./SelectionIndicator-C21LbbOd.js";import"./useDescription-oNLjY4JI.js";import"./ListKeyboardDelegate-C7UnVmm1.js";import"./PressResponder-Bc9aSX2M.js";import"./useLocalizedStringFormatter-gFqboiC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bhot0QPs.js";import"./VisuallyHidden-BwHE0vuQ.js";import"./useLocalizedStringFormatter-Ctl0pcaH.js";import"./Button-DZf68tgE.js";import"./Button.module-CtQ1deO8.js";import"./x-CP63wXgR.js";import"./createLucideIcon-Bw-FFKAv.js";import"./Heading-Bew9Ky8a.js";import"./info-Pmibodcs.js";import"./Popover-BXgKhdxJ.js";import"./useFormValidation-CHHQL78Y.js";import"./useField-uOsQLLjz.js";import"./Form-DCQxjdRW.js";import"./check-BDKAIQka.js";import"./useToggleState-DJutHIym.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
