import{j as e}from"./iframe-BDLZKJUa.js";import{C as m}from"./CheckboxGroup-DWMxGV01.js";import{C as p}from"./Checkbox-Baib1Xfr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CQnsXSuf.js";import"./utils-BN5a6ONf.js";import"./clsx-B-dksMZM.js";import"./Text-6K4677wX.js";import"./useFocusRing-B5FtCOQQ.js";import"./index-BCWLJOvr.js";import"./index-DfTmM_Vy.js";import"./clsx-Ciqy0D92.js";import"./Text-DDCBPVqL.js";import"./Label-BlaegGMT.js";import"./Button-C9Vdx1Sb.js";import"./Hidden-U_iFDsIn.js";import"./useLabels-BQwmeXXN.js";import"./useButton-BOuekyb0.js";import"./Dialog-D7Es1WGH.js";import"./RSPContexts-Da5lgWhk.js";import"./OverlayArrow-QNfjNgOu.js";import"./useResizeObserver-VvJt-x1H.js";import"./useControlledState-CBybevG0.js";import"./Collection-Ctbsu1Ee.js";import"./index-DDU-vaR7.js";import"./Separator-xkqDT2LV.js";import"./SelectionManager-BY3loXtx.js";import"./useEvent-uVAMedq9.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqeOPuev.js";import"./useDescription-C_6bjMde.js";import"./ListKeyboardDelegate-BkFW1SaD.js";import"./PressResponder-D5MifUCz.js";import"./useLocalizedStringFormatter-grQ0fku2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B63-4vFi.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C2Ytvwha.js";import"./Button-BBKL1eD8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-00J5Ylgv.js";import"./createLucideIcon-1UHjhtvK.js";import"./x--FAB3bcS.js";import"./Heading-Bk2nMs7M.js";import"./info-KDp5-baz.js";import"./Popover-XETSsvY6.js";import"./useFormValidation-DTB8faqq.js";import"./useField-CuQudl8J.js";import"./Form-DSI4EmM7.js";import"./check-CTP97BLe.js";import"./useToggleState-CtzwzmY4.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
