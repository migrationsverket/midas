import{j as e}from"./iframe-DNIclJcr.js";import{C as m}from"./CheckboxGroup-FGa7usNo.js";import{C as p}from"./Checkbox-Cvc1EsKL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C44SiAvc.js";import"./utils-D_0gjjvk.js";import"./clsx-B-dksMZM.js";import"./Text-Ctfv3ntz.js";import"./useFocusRing-DzLjolkJ.js";import"./index-CUHvxg5U.js";import"./index-DNZxg9il.js";import"./clsx-Ciqy0D92.js";import"./Text-CeEH6Nc6.js";import"./Label-DKBQ5Z-N.js";import"./Button-BbtXrV7T.js";import"./Hidden-BEQ2WZ2g.js";import"./useLabel-D60xKodB.js";import"./useLabels-BYBeQKfq.js";import"./useButton-rBFOLHck.js";import"./Dialog-NX3aYLyN.js";import"./RSPContexts-j22KMFJy.js";import"./OverlayArrow-BqP7NhQp.js";import"./useResizeObserver-CcG7Wlaf.js";import"./useControlledState-DkjzWyRs.js";import"./Collection-BiyZZjBP.js";import"./index-B4nGpSPg.js";import"./Separator-_S30VGdy.js";import"./SelectionManager-DYMvGJ3J.js";import"./useEvent-CeBY1Vjl.js";import"./scrollIntoView-B-YTSEJ0.js";import"./SelectionIndicator-Bg06VdVn.js";import"./useDescription-D_58VzB0.js";import"./ListKeyboardDelegate-CYlLVH1W.js";import"./PressResponder-CTqAQGv3.js";import"./useLocalizedStringFormatter-DVD6HWHu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D4X84dz2.js";import"./getScrollParent-DqCvg1x9.js";import"./VisuallyHidden-BM29Dd_X.js";import"./ModalOverlay-ylbMTcCJ.js";import"./x-D-ccyFox.js";import"./createLucideIcon-DHdJRlte.js";import"./useLocalizedStringFormatter-D1mfHEq_.js";import"./Heading-DUw36RJn.js";import"./Button-CmNHemBb.js";import"./Button.module-BB7N-cLd.js";import"./info-CY2J8c5p.js";import"./Popover-Ch81ck7w.js";import"./Form-UMzwdMM5.js";import"./useField-DIAAtUKn.js";import"./check-BNyBFbpx.js";import"./useToggleState-CETorwZN.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
