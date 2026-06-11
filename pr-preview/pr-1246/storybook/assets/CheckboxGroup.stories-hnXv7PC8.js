import{j as e}from"./iframe-hven07mH.js";import{C as m}from"./CheckboxGroup-BzbjcCWo.js";import{C as p}from"./Checkbox-Dkyh5Cbn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CGNeiPVK.js";import"./utils-CP0dC5bD.js";import"./clsx-B-dksMZM.js";import"./Text-BAoIm1rg.js";import"./useFocusRing-6_qWLH8D.js";import"./index-CAaUGq6x.js";import"./index-VYEOm2qh.js";import"./clsx-Ciqy0D92.js";import"./Text-BkfOg5_y.js";import"./Label-DVeeIgYV.js";import"./Button-b_-88Jdv.js";import"./Hidden-bl0dyrpb.js";import"./useLabel-3fPS2DpE.js";import"./useLabels-8upbqgKW.js";import"./useButton-Bg6zMZft.js";import"./Dialog-CrXu0Iq4.js";import"./RSPContexts-BL3sWo_M.js";import"./OverlayArrow-Pyj2Sm6q.js";import"./useResizeObserver-C_bQTHpI.js";import"./useControlledState-_nq-pl6I.js";import"./Collection-CUMhwKNV.js";import"./index-OuXY1_jV.js";import"./Separator-PQI-1kJF.js";import"./SelectionManager-DwZcMojQ.js";import"./useEvent-BzIwcgMz.js";import"./scrollIntoView--hYGjISc.js";import"./SelectionIndicator-W2IT6oIH.js";import"./useDescription-DSRfQAcu.js";import"./ListKeyboardDelegate-9T6GEUhl.js";import"./PressResponder-DI_yOdFi.js";import"./useLocalizedStringFormatter-DAcMpTAF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzzI9YUs.js";import"./getScrollParent-vliVuo3m.js";import"./VisuallyHidden-B42_LAgy.js";import"./ModalOverlay-VX1_NYaR.js";import"./x-C-2CBxKx.js";import"./createLucideIcon-rLeAgfXY.js";import"./useLocalizedStringFormatter-SJXe37s8.js";import"./Heading-DK-Y_why.js";import"./Button-CsNSTQ8W.js";import"./Button.module-BB7N-cLd.js";import"./info-DzYItAFf.js";import"./Popover-B8afHds0.js";import"./Form-DEztDf84.js";import"./useField-BkZnRozU.js";import"./check-gq51SZYJ.js";import"./useToggleState-DZOjdegs.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
