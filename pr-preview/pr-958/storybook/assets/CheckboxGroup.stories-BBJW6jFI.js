import{j as e}from"./iframe-DjkzDfUJ.js";import{C as m}from"./CheckboxGroup-DbVrIuMb.js";import{C as p}from"./Checkbox-DV3A4wcZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-yYdtsfGD.js";import"./utils-vexqYITr.js";import"./clsx-B-dksMZM.js";import"./Text-C5izD3Og.js";import"./useFocusRing-CESrVCRK.js";import"./index-Ga__SQ6G.js";import"./index-6ad1L8SU.js";import"./clsx-Ciqy0D92.js";import"./Text-DYUCIzkR.js";import"./Label-O3OfycCV.js";import"./Button--BMsMuMT.js";import"./Hidden-XVXMf98p.js";import"./useLabels-B6BslA1N.js";import"./useButton-Db0mva43.js";import"./Dialog-DaO1aDj4.js";import"./RSPContexts-DZRurk6q.js";import"./OverlayArrow-DWQsyL7O.js";import"./useResizeObserver-pHY6Jo-g.js";import"./useControlledState-CN1_NNkw.js";import"./Collection-Br4wP53H.js";import"./index-D-96uQ6D.js";import"./Separator-CK-d6Myg.js";import"./SelectionManager-CM2Q0F0f.js";import"./useEvent-YZt64TSK.js";import"./scrollIntoView-I26RsPsF.js";import"./SelectionIndicator-B7oXjDtR.js";import"./useDescription-CU_RGk8G.js";import"./ListKeyboardDelegate-Bk3F2Cyw.js";import"./PressResponder-ChuOYj5J.js";import"./useLocalizedStringFormatter-BW-uk-lr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-g7ixsLHw.js";import"./VisuallyHidden-DkXgx9RF.js";import"./Button-BR2m8ec0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cc-I9I7t.js";import"./createLucideIcon-BK-M30E7.js";import"./x-D6S4l13V.js";import"./Heading-_2TmmWg6.js";import"./info-3U-aRSmI.js";import"./Popover-3GlOEdgY.js";import"./useFormValidation-Dd4D9ZVC.js";import"./useField-BPDKOCFg.js";import"./Form-CKvRRa6u.js";import"./check-Cm_sTZnx.js";import"./useToggleState-D6l91gJt.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
