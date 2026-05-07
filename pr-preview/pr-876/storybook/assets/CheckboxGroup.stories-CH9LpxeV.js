import{j as e}from"./iframe-Bb_VlPo9.js";import{C as m}from"./CheckboxGroup-D33eeXxc.js";import{C as p}from"./Checkbox-Dx_L8R-S.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CbhfVIv0.js";import"./utils-2r_62JIY.js";import"./clsx-B-dksMZM.js";import"./Text-D7Tr2OQH.js";import"./useFocusRing-DQRmwydT.js";import"./index-DAEy4VqV.js";import"./index-BxkaVGNc.js";import"./clsx-Ciqy0D92.js";import"./Text-DTJEuclf.js";import"./Label-SXJq_j2f.js";import"./Button-DwR9JkjB.js";import"./Hidden-Da5yr2Rv.js";import"./useLabel-gulxf9DU.js";import"./useLabels-CsGVZDGi.js";import"./useButton-yJmLtQfA.js";import"./Dialog-BbFJ936K.js";import"./RSPContexts-DMtGcFC9.js";import"./OverlayArrow-D4SjK86E.js";import"./useResizeObserver-CF_uyx7C.js";import"./useControlledState-CFQUuuzt.js";import"./Collection-BpAJZJBW.js";import"./index-Dfxk7_9d.js";import"./Separator-BHW9KYkP.js";import"./SelectionManager-DuW5VBfE.js";import"./useEvent-u95MDZQv.js";import"./scrollIntoView-BG7Sd968.js";import"./SelectionIndicator-DpvN-zjH.js";import"./useDescription-C9KC-F2o.js";import"./ListKeyboardDelegate-B5huwegM.js";import"./PressResponder-ByBWPOx9.js";import"./useLocalizedStringFormatter-BINmwfC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cmh4Rymz.js";import"./getScrollParent-BlCILjnb.js";import"./VisuallyHidden-7RIQbTv5.js";import"./ModalOverlay-B55a8-fo.js";import"./x-BdcCpJzo.js";import"./createLucideIcon-a3otmfa0.js";import"./useLocalizedStringFormatter-D3GzHYKP.js";import"./Heading-D41PspzV.js";import"./Button-BoP38GQz.js";import"./Button.module-BB7N-cLd.js";import"./info-2w65F5mm.js";import"./Popover-CUiN1Ojk.js";import"./Form-CPAndHnn.js";import"./useField-Be7ObOKH.js";import"./check-CBmtDDja.js";import"./useToggleState-4tm9_g3s.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
