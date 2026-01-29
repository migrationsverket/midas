import{j as e}from"./iframe-CCE7bbwH.js";import{C as m}from"./CheckboxGroup-BJPcHypR.js";import{C as p}from"./Checkbox-CwTOygTn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CyHhaVe9.js";import"./utils-BVaE8NLk.js";import"./clsx-B-dksMZM.js";import"./Text-DdG9vEac.js";import"./useFocusRing-COIr_sUJ.js";import"./index-Dp5GmYi7.js";import"./index-aGo1ZsQs.js";import"./clsx-Ciqy0D92.js";import"./Text-CRHS6IkK.js";import"./Label-DogWNTqP.js";import"./Button-lT9_7AJU.js";import"./Hidden-D5Jk713G.js";import"./useLabels-Dd7McQGF.js";import"./useButton-CI7aYhes.js";import"./Dialog-PtRmFe2T.js";import"./RSPContexts-Cc7Msy4D.js";import"./OverlayArrow-DOPldFRC.js";import"./useResizeObserver-CVA3a0jT.js";import"./useControlledState-DRIq_96A.js";import"./Collection-DLzY31xD.js";import"./index-DmIQK8yC.js";import"./Separator-DFseeV5i.js";import"./SelectionManager-CQ2i0OB5.js";import"./useEvent-O9CTpKHV.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C6rJyLIB.js";import"./useDescription-BMgwLMUv.js";import"./ListKeyboardDelegate-CNikrRlR.js";import"./PressResponder-DEnmPFca.js";import"./useLocalizedStringFormatter-r_KtojUx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BFXFhG36.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPHyXCRO.js";import"./Button-Dw3HUc-4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CRJLM8ja.js";import"./createLucideIcon-Dc7mzXcy.js";import"./x-5WBMPsQp.js";import"./Heading-B9UX25UO.js";import"./info-DulROV-1.js";import"./Popover-CjxbSaN4.js";import"./useFormValidation-Cqln8SK2.js";import"./useField-DXX-h2WN.js";import"./Form-DxWxZ3xE.js";import"./check-DO0Po3XC.js";import"./useToggleState-B9j3SHLq.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
