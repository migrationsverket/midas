import{j as e}from"./iframe-Ex-KEKbR.js";import{C as m}from"./CheckboxGroup-BGDRjIR-.js";import{C as p}from"./Checkbox-CiVn6ige.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CgmLooUG.js";import"./utils-Dq_8TIe4.js";import"./clsx-B-dksMZM.js";import"./Text-CeEAoIdH.js";import"./useFocusRing-H-1VYNNS.js";import"./index-DADZxfgg.js";import"./index-DTNdKqrN.js";import"./clsx-Ciqy0D92.js";import"./Text-DJaiOuNK.js";import"./Label-C9Jm7gW_.js";import"./Button-C8JSYTF8.js";import"./Hidden-CyDaCMoS.js";import"./useLabel-iQaKdHKt.js";import"./useLabels-PlDzf5VQ.js";import"./useButton-It03dpfb.js";import"./Dialog-CRxTXFHb.js";import"./RSPContexts-DxlwqgCa.js";import"./OverlayArrow-BEp85xx4.js";import"./useResizeObserver-EpcjSYJm.js";import"./useControlledState-OUr4VazD.js";import"./Collection-Bge0dQHT.js";import"./index-CJUwhwxK.js";import"./Separator-dkZZPlDE.js";import"./SelectionManager-XXgR8HaZ.js";import"./useEvent-B4t1a7CS.js";import"./scrollIntoView-D4kGYOib.js";import"./SelectionIndicator-DgoNvaWX.js";import"./useDescription-Bk4LSLU-.js";import"./ListKeyboardDelegate-Bg6ymlV0.js";import"./PressResponder-fPkhSkCj.js";import"./useLocalizedStringFormatter-C1SYv3sl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BtJRc29T.js";import"./getScrollParent-ClgoPRH9.js";import"./VisuallyHidden-B1UrQI4k.js";import"./ModalOverlay--BWN3whO.js";import"./x-D_4t1M2T.js";import"./createLucideIcon-CnalT5R6.js";import"./useLocalizedStringFormatter-CTOyl-7s.js";import"./Heading-Hwdatq5V.js";import"./Button-BAZVnFvD.js";import"./Button.module-BB7N-cLd.js";import"./info-1tlzplCu.js";import"./Popover-CPeSqkYI.js";import"./Form-CXAt5UpX.js";import"./useField-BOXq6rqV.js";import"./check-DuCLopxg.js";import"./useToggleState-DGdgrcBh.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
