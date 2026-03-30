import{j as e}from"./iframe-BaglzexA.js";import{C as m}from"./CheckboxGroup-CfT6I7qn.js";import{C as p}from"./Checkbox-UJeHRblU.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cz0FB3Ou.js";import"./utils-BRuvLXhr.js";import"./clsx-B-dksMZM.js";import"./Text-BjRotHGw.js";import"./useFocusRing-o2chUIJx.js";import"./index-BDFHFH_G.js";import"./index-B5KTxMw4.js";import"./clsx-Ciqy0D92.js";import"./Text-BUo0m_vR.js";import"./Label-BwgB2hF2.js";import"./Button-4C6qbeHh.js";import"./Hidden-DtQ8Bocl.js";import"./useLabel-DPVf23Bi.js";import"./useLabels-BQSacZGu.js";import"./useButton-CAOCdVrC.js";import"./Dialog-BFiPtzBQ.js";import"./RSPContexts-DSk9wo8I.js";import"./OverlayArrow-BwahUPd-.js";import"./useResizeObserver-BSs5ZcWP.js";import"./useControlledState-j7ZeGh6U.js";import"./Collection-BIZjTEAj.js";import"./index-Bz3DfuhG.js";import"./Separator-BvcQ88ZL.js";import"./SelectionManager-CTXZtEtC.js";import"./useEvent-DiuOeyiB.js";import"./scrollIntoView-CZ_G2l1H.js";import"./SelectionIndicator-BQq5n1jJ.js";import"./useDescription-DGnmrtwz.js";import"./ListKeyboardDelegate-CYhD2eFx.js";import"./PressResponder-BPdNUnDb.js";import"./useLocalizedStringFormatter-CA4tuOSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BiW8wGFg.js";import"./getScrollParent-VIhewieb.js";import"./VisuallyHidden--A_wY8k-.js";import"./x-B7iLIw8y.js";import"./createLucideIcon-B0HwbXf8.js";import"./useLocalizedStringFormatter-DzzpmN-7.js";import"./Heading-CgwcTn9c.js";import"./Button-DEzldRuR.js";import"./Button.module-BB7N-cLd.js";import"./info-LMX08hMO.js";import"./Popover-dFMyhuRz.js";import"./Form-CwjgsrTS.js";import"./useField-DapuPCPx.js";import"./check-DGOkSsc2.js";import"./useToggleState-41hw5vO5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
