import{j as e}from"./iframe-Bm0DrSMO.js";import{C as m}from"./CheckboxGroup-CQS0Y3l4.js";import{C as p}from"./Checkbox-CKLqxTHU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CCe7rZes.js";import"./utils-CoM9YHiu.js";import"./clsx-B-dksMZM.js";import"./Text-CvUQuXzc.js";import"./useFocusRing-CkTqT8wc.js";import"./index-CFyUkJmM.js";import"./index-CuQSmexf.js";import"./clsx-Ciqy0D92.js";import"./Text-BLzt5HZQ.js";import"./Label-BGK8Rca9.js";import"./Button-BlmcdTpb.js";import"./Hidden-RcWRgJ8x.js";import"./useLabels-B81GYCN9.js";import"./useButton-BNEnbj2x.js";import"./Dialog-BbfilgdF.js";import"./RSPContexts-nAfEcYEJ.js";import"./OverlayArrow-D4l3ajFn.js";import"./useResizeObserver-OBobqjdZ.js";import"./useControlledState-_TpPhYBA.js";import"./Collection-BAnlV6Ln.js";import"./index-DQ_G-xOK.js";import"./Separator-BvxaLU5Z.js";import"./SelectionManager-BJ6XMe41.js";import"./useEvent-Bam-6ZDs.js";import"./scrollIntoView-ChcThMc9.js";import"./SelectionIndicator-bnleW8Zx.js";import"./useDescription-BgQlQb3M.js";import"./ListKeyboardDelegate-yZYnbXf1.js";import"./PressResponder-DLhCu5NC.js";import"./useLocalizedStringFormatter-DWI_FIzZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_4zRhOjD.js";import"./getScrollParent-D9CIxd-t.js";import"./VisuallyHidden-B5PU83U6.js";import"./x-Dbz_bc1H.js";import"./createLucideIcon-CUh6klxC.js";import"./useLocalizedStringFormatter-Ci4W8RSD.js";import"./Heading-BoQ-AyCY.js";import"./Button-CekYPC-I.js";import"./Button.module-D_C6WeTN.js";import"./info-CZx8COQR.js";import"./Popover-C8fWg4HG.js";import"./useFormValidation-CCMpRbRk.js";import"./useField-DBy0P2Fr.js";import"./Form-XMkLrXkW.js";import"./check-CtSyQMUn.js";import"./useToggleState-CGsF022p.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
