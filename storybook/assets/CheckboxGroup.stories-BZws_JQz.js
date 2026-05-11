import{j as e}from"./iframe-BFuflVuT.js";import{C as m}from"./CheckboxGroup-CLLZMZMm.js";import{C as p}from"./Checkbox-Bwt0JxhH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B21E2xEp.js";import"./utils-CVETsxUB.js";import"./clsx-B-dksMZM.js";import"./Text-50232H9V.js";import"./useFocusRing-BGj7TLCb.js";import"./index-Brk4EwLy.js";import"./index-CJP4tsNo.js";import"./clsx-Ciqy0D92.js";import"./Text-Cd7qZGor.js";import"./Label-Btf5roma.js";import"./Button-Bvi4kTfB.js";import"./Hidden-CWAGeXUM.js";import"./useLabel-CfkHNsqd.js";import"./useLabels-Df7U7HeX.js";import"./useButton-BUsqQPGJ.js";import"./Dialog-HGbVhZh3.js";import"./RSPContexts-BKJ_hWyQ.js";import"./OverlayArrow-BO59qnCj.js";import"./useResizeObserver-D2vfYUms.js";import"./useControlledState-D_V-QnC2.js";import"./Collection-DwqB045i.js";import"./index-Cx84pKcq.js";import"./Separator-CJ6jYql_.js";import"./SelectionManager-CDDOpm3X.js";import"./useEvent-qDpnqejC.js";import"./scrollIntoView-DyJWvoJg.js";import"./SelectionIndicator-C0jG9iBd.js";import"./useDescription-CL478hBZ.js";import"./ListKeyboardDelegate-DG5oTXvP.js";import"./PressResponder-BUvOU1QA.js";import"./useLocalizedStringFormatter-BAc9MzAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDwZiepJ.js";import"./getScrollParent-CJmvDIbp.js";import"./VisuallyHidden-ChouFcZQ.js";import"./ModalOverlay-Cs4VCEIj.js";import"./x-Dlq0AP5X.js";import"./createLucideIcon-CY2uueIZ.js";import"./useLocalizedStringFormatter-Cm1acgw7.js";import"./Heading-DSRT_WaZ.js";import"./Button-B_e2-Iv-.js";import"./Button.module-BB7N-cLd.js";import"./info-DR2nXUtE.js";import"./Popover-BQXWP18I.js";import"./Form-_O7owz9U.js";import"./useField-CmfWuk6-.js";import"./check-B3FQB7GR.js";import"./useToggleState-CL-w4iAH.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
