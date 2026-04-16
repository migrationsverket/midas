import{j as e}from"./iframe-Bv6YAP-H.js";import{C as m}from"./CheckboxGroup-eWxrmEpi.js";import{C as p}from"./Checkbox-BujbONta.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-aQet2mym.js";import"./utils-aKxnkjqL.js";import"./clsx-B-dksMZM.js";import"./Text-CrHwImJG.js";import"./useFocusRing-vLQdNIKu.js";import"./index-wSw7Ttva.js";import"./index-B4SFKLec.js";import"./clsx-Ciqy0D92.js";import"./Text-DPW0E3tR.js";import"./Label-Vbhk7I9y.js";import"./Button-1f9Yc7Mz.js";import"./Hidden-DhnPUChE.js";import"./useLabel-D6pTBZvb.js";import"./useLabels-DAH0at8A.js";import"./useButton-B6E3_51_.js";import"./Dialog-DF3beP_F.js";import"./RSPContexts-Cmel4BHs.js";import"./OverlayArrow-CwvX6o9-.js";import"./useResizeObserver-R4IL46zg.js";import"./useControlledState-CcT1w6-I.js";import"./Collection-B4VcNlct.js";import"./index-K7IduVvo.js";import"./Separator-CKQgzynH.js";import"./SelectionManager-BHNfLphX.js";import"./useEvent-BaPHHBlD.js";import"./scrollIntoView-CfOu5aQk.js";import"./SelectionIndicator-BxOQVkwD.js";import"./useDescription-y5DJBmVT.js";import"./ListKeyboardDelegate-BCkVVRiL.js";import"./PressResponder-izydr2CK.js";import"./useLocalizedStringFormatter-BTXjr0WF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGnHuomg.js";import"./getScrollParent-CmM-5YOM.js";import"./VisuallyHidden-DEiD2GQe.js";import"./ModalOverlay-CVZkVZIz.js";import"./x-BdrId5d4.js";import"./createLucideIcon-DlyUrHS2.js";import"./useLocalizedStringFormatter-Bn39dXyI.js";import"./Heading-oW__33Cy.js";import"./Button-BH5A087H.js";import"./Button.module-BB7N-cLd.js";import"./info-BaL1Nyrh.js";import"./Popover-C_tDEwHr.js";import"./Form-Ch32kDXo.js";import"./useField-BF1xuw3-.js";import"./check-CfnZqAf7.js";import"./useToggleState-B31EMyL7.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
