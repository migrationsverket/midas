import{j as e}from"./iframe-COqMOSQZ.js";import{C as m}from"./CheckboxGroup-BCg--WTI.js";import{C as p}from"./Checkbox-CIdHGseX.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DnPw9jnQ.js";import"./utils-UGJ7-PFb.js";import"./clsx-B-dksMZM.js";import"./Text-Eq2bpnOV.js";import"./useFocusRing-J0hskc8K.js";import"./index-DAvvxpHq.js";import"./index-B56B2ZaE.js";import"./clsx-Ciqy0D92.js";import"./Text-Dxr2WYg8.js";import"./Label-CM3u3xy2.js";import"./Button-DsgoKRnG.js";import"./Hidden-C7_4vCTh.js";import"./useLabels-ClszDTN2.js";import"./useButton-Cs35Lthr.js";import"./Dialog-CbXjmLSY.js";import"./RSPContexts-Dj5PWvfk.js";import"./OverlayArrow--TSHaOdr.js";import"./useResizeObserver-BiLq-uV0.js";import"./useControlledState-D0vR2tZf.js";import"./Collection-C4Q7pTvT.js";import"./index-Q1n7-YMV.js";import"./Separator-BR1R69TH.js";import"./SelectionManager-CiYu_tiO.js";import"./useEvent-BuGTfmKx.js";import"./scrollIntoView-DQDJTohY.js";import"./SelectionIndicator-CnCbl57Q.js";import"./useDescription-OZCat0wf.js";import"./ListKeyboardDelegate-BphbFQlv.js";import"./PressResponder-DWurSds1.js";import"./useLocalizedStringFormatter-v3zQxbki.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BUiggGc1.js";import"./VisuallyHidden-D6ffzidu.js";import"./Button-WZo8m9qX.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-CXPg-yOg.js";import"./createLucideIcon-Duz8ZquI.js";import"./x-BOXIcHuP.js";import"./Heading-BsCY6yok.js";import"./info-CsEenOg0.js";import"./Popover-CjDw-FNZ.js";import"./useFormValidation-ZZTMqVsr.js";import"./useField-Bg2RgZz3.js";import"./Form-MmG3Q7sS.js";import"./check-CxzezkNI.js";import"./useToggleState-BXXRRmmu.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
