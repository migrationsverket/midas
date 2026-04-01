import{j as e}from"./iframe-D4usB9n2.js";import{C as m}from"./CheckboxGroup-B0tiHrCC.js";import{C as p}from"./Checkbox-CSKG9WQT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CPaCZkAy.js";import"./utils-Chiz1oN2.js";import"./clsx-B-dksMZM.js";import"./Text-DCjCSbNe.js";import"./useFocusRing-ihkH1nOS.js";import"./index-D_BiQ3CN.js";import"./index-D7VIiBEs.js";import"./clsx-Ciqy0D92.js";import"./Text-BPVUDIkV.js";import"./Label-DEX8qKlr.js";import"./Button-C0ozI8gk.js";import"./Hidden-Cn6dZTod.js";import"./useLabel-Bqb-L3h5.js";import"./useLabels-D2vaRbqn.js";import"./useButton-DDapGTCA.js";import"./Dialog-DRaaEhRM.js";import"./RSPContexts-D-vGj3gL.js";import"./OverlayArrow-5CMvmlfG.js";import"./useResizeObserver-yeujys0h.js";import"./useControlledState-DA5Xz2a0.js";import"./Collection-FpyIrNSE.js";import"./index-CTrbRtu6.js";import"./Separator-B07d46a7.js";import"./SelectionManager-BDWSM55Y.js";import"./useEvent-B_vV08nn.js";import"./scrollIntoView-DMee3u0y.js";import"./SelectionIndicator-D-N9NSP8.js";import"./useDescription-CP735cHb.js";import"./ListKeyboardDelegate-d00XesEb.js";import"./PressResponder-DrWZrEzB.js";import"./useLocalizedStringFormatter-_6pgVaCX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CAMo3Vmy.js";import"./getScrollParent-BPU2H25u.js";import"./VisuallyHidden-DISGYBiK.js";import"./x-B4mY3mrq.js";import"./createLucideIcon-DqajdqxS.js";import"./useLocalizedStringFormatter-C7hYA8xN.js";import"./Heading-BcqVgANH.js";import"./Button-DaUg4W92.js";import"./Button.module-BB7N-cLd.js";import"./info-8c3vUbvq.js";import"./Popover-i8CJBQC8.js";import"./Form-DzQgMoUt.js";import"./useField-Cgg__gMv.js";import"./check-g7xQiicO.js";import"./useToggleState-B1GIoGoL.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
