import{j as e}from"./iframe-COAE3Z9t.js";import{C as m}from"./CheckboxGroup-byKIG8IV.js";import{C as p}from"./Checkbox-CQUrpe5K.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BUClrU9H.js";import"./utils-CJTCHx3j.js";import"./clsx-B-dksMZM.js";import"./Text-CHPBuoo7.js";import"./useFocusRing-DgA4QWCK.js";import"./index-B8ayM9Q4.js";import"./index-D6Rzgd1u.js";import"./clsx-Ciqy0D92.js";import"./Text-D5jwfrrb.js";import"./Label-CF0gTG6U.js";import"./Button-DkXMbdmz.js";import"./Hidden-DT0_4oHH.js";import"./useLabels-BGror0wH.js";import"./useButton-CNbG0xHv.js";import"./Dialog-ByRpqEAM.js";import"./RSPContexts-DDx5Z7r8.js";import"./OverlayArrow-RufaqvEt.js";import"./useResizeObserver-DORdwtk3.js";import"./useControlledState-CTgjAYDB.js";import"./Collection-ByMpo7I3.js";import"./index-CzqqtctD.js";import"./Separator-CvsTyE1s.js";import"./SelectionManager-BvBNk-rF.js";import"./useEvent-DxDv-_7a.js";import"./scrollIntoView-HBj0czqw.js";import"./SelectionIndicator-ChKBr26Q.js";import"./useDescription-CznxHAqb.js";import"./ListKeyboardDelegate-CiqA-C_A.js";import"./PressResponder-CTqg1NS1.js";import"./useLocalizedStringFormatter-DNGn7vgv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dq7kupw9.js";import"./getScrollParent-BVX3VPRd.js";import"./VisuallyHidden-Wni-KnVe.js";import"./Button-Bowambor.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-D1UulV0U.js";import"./createLucideIcon-DDrtG7WW.js";import"./x-3pGmhthR.js";import"./Heading-BQQ2Aro1.js";import"./info-lMvUFSo-.js";import"./Popover-Ch-U9TCE.js";import"./useFormValidation-Ci8Vocq6.js";import"./useField-DGHNroJj.js";import"./Form-DRlLMzfE.js";import"./check-ZG92iuFb.js";import"./useToggleState-CEG3EeA7.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
