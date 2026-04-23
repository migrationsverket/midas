import{j as e}from"./iframe-C-mFL-y5.js";import{C as m}from"./CheckboxGroup-C6bt2Zo_.js";import{C as p}from"./Checkbox-BdLxQNgg.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-5__MdH0k.js";import"./utils-D1nXJARU.js";import"./clsx-B-dksMZM.js";import"./Text-BMqghmwo.js";import"./useFocusRing-BcE_QfPF.js";import"./index-BdrHlOMt.js";import"./index-D51JQnab.js";import"./clsx-Ciqy0D92.js";import"./Text-CCSjYwix.js";import"./Label-BxMrMk0X.js";import"./Button-muDgoa96.js";import"./Hidden-9ao8Y1ps.js";import"./useLabel-CZgom9Hr.js";import"./useLabels-Ch3SsTuY.js";import"./useButton-DAL_GXyF.js";import"./Dialog-WebbvSm0.js";import"./RSPContexts-D19sCzde.js";import"./OverlayArrow-nWr6c9HG.js";import"./useResizeObserver-DrASn_A-.js";import"./useControlledState-CYklShRN.js";import"./Collection-DRq2lVha.js";import"./index-Bcf3xR78.js";import"./Separator-DJqe26Xu.js";import"./SelectionManager-CaouC3k9.js";import"./useEvent-B7aauAUS.js";import"./scrollIntoView-CtFeL4L4.js";import"./SelectionIndicator-Bw_ZnN4X.js";import"./useDescription-BVglMPey.js";import"./ListKeyboardDelegate-f6Ccs6WJ.js";import"./PressResponder-BWzfoJUd.js";import"./useLocalizedStringFormatter-DwJHjI96.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DcLd249e.js";import"./getScrollParent-doaue_Gl.js";import"./VisuallyHidden-CO1695QU.js";import"./ModalOverlay-Clj-aakT.js";import"./x-CfBPXENx.js";import"./createLucideIcon-B54AhZJE.js";import"./useLocalizedStringFormatter-BY-aq0y_.js";import"./Heading-DaXl97NH.js";import"./Button-DbyCtJuo.js";import"./Button.module-BB7N-cLd.js";import"./info-DjTbkYaz.js";import"./Popover-i66B81cw.js";import"./Form-BnpClDkZ.js";import"./useField-CphlyUa3.js";import"./check-DxswyXaQ.js";import"./useToggleState-Eus11q0X.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
