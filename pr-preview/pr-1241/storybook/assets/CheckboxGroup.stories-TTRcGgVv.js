import{j as e}from"./iframe-6VRTlOeH.js";import{C as m}from"./CheckboxGroup-BriEfS8u.js";import{C as p}from"./Checkbox-CRsNwclq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BjyVB-H9.js";import"./utils-0kxM0y8Y.js";import"./clsx-B-dksMZM.js";import"./Text-CpKvHOvq.js";import"./useFocusRing-DGxSfNEF.js";import"./index-DuM1IAo7.js";import"./index-BfAN20ZA.js";import"./clsx-Ciqy0D92.js";import"./Text-BxBOqGEA.js";import"./Label-yhzhs_sD.js";import"./Button-DLPX01E3.js";import"./Hidden-DlTpFa-B.js";import"./useLabel-BFBWLCR-.js";import"./useLabels-DISBRw-R.js";import"./useButton-Bjmveq-R.js";import"./Dialog-Dgx0n_Ye.js";import"./RSPContexts-DRe_RyK6.js";import"./OverlayArrow-DBlOlBI_.js";import"./useResizeObserver-rtx7MB9x.js";import"./useControlledState-pI_U9-IG.js";import"./Collection-TF1_6_sW.js";import"./index-M8MoRKxx.js";import"./Separator-Drv2w8La.js";import"./SelectionManager-CrHNXkN6.js";import"./useEvent-CA01mw1x.js";import"./scrollIntoView-BdAgwM8B.js";import"./SelectionIndicator-CCEQFu0T.js";import"./useDescription-VsZXCutT.js";import"./ListKeyboardDelegate-ZFjtCWQm.js";import"./PressResponder-NzJgLDPG.js";import"./useLocalizedStringFormatter-Tc4ujGE7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-8ekBFdXr.js";import"./getScrollParent-HQ76BiU1.js";import"./VisuallyHidden-BKsZ0nD0.js";import"./ModalOverlay-CXH0sLQA.js";import"./x-CG_c6zFF.js";import"./createLucideIcon-LiZfCQUd.js";import"./useLocalizedStringFormatter-BuRCkwwi.js";import"./Heading-OsMCcv5f.js";import"./Button-CQiZspsF.js";import"./Button.module-BB7N-cLd.js";import"./info-DRnlA33R.js";import"./Popover-DMTLs5MJ.js";import"./Form-3fhL1Dx2.js";import"./useField-2NJCbeT2.js";import"./check-GrQ7aBJH.js";import"./useToggleState-CJ8qU7CY.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
