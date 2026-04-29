import{j as e}from"./iframe-D2jWlRbY.js";import{C as m}from"./CheckboxGroup-N6cvd26e.js";import{C as p}from"./Checkbox-Cmvmc15Q.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BlwhWSc6.js";import"./utils-BgILje6T.js";import"./clsx-B-dksMZM.js";import"./Text-BlnXWmBt.js";import"./useFocusRing-DCfgz9z-.js";import"./index-BIIWHLUG.js";import"./index-CZEA3OWg.js";import"./clsx-Ciqy0D92.js";import"./Text-dwHB4N6Q.js";import"./Label-Qo-mTOaY.js";import"./Button-C20mW5cN.js";import"./Hidden-BQ9eCogI.js";import"./useLabel-Dsg-DSz8.js";import"./useLabels-GFu7dakN.js";import"./useButton-Z6COahNx.js";import"./Dialog-BB7LJBGw.js";import"./RSPContexts-DBHxiWWN.js";import"./OverlayArrow-C3g-jDCJ.js";import"./useResizeObserver-BkJ1iT0c.js";import"./useControlledState-TsNhVwVg.js";import"./Collection-CDPRulZI.js";import"./index-ClO5XkG8.js";import"./Separator-ChK8l3B3.js";import"./SelectionManager-GdUQ0_3g.js";import"./useEvent-CcxES9pj.js";import"./scrollIntoView-ZO2UpkDZ.js";import"./SelectionIndicator-De0BlSZX.js";import"./useDescription-CJaXbPeA.js";import"./ListKeyboardDelegate-fCGrHL_b.js";import"./PressResponder-8J5GFZ_B.js";import"./useLocalizedStringFormatter-Bbt0gUnN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dbg56SLM.js";import"./getScrollParent-Bttan2TX.js";import"./VisuallyHidden-DcHq__qP.js";import"./ModalOverlay-TKpdu6VL.js";import"./x-CXavF2G1.js";import"./createLucideIcon-3nESSKIe.js";import"./useLocalizedStringFormatter-BadNQPEc.js";import"./Heading-15Bg67se.js";import"./Button-Cx6hm3Pz.js";import"./Button.module-BB7N-cLd.js";import"./info-C44TV-1j.js";import"./Popover-COKgRpeE.js";import"./Form-CrsOPGrC.js";import"./useField-DthL3lsX.js";import"./check-BaXb2ZAW.js";import"./useToggleState-BbzWPpkt.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
