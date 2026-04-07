import{j as e}from"./iframe-BObKWO8P.js";import{C as m}from"./CheckboxGroup-D3x3VxDD.js";import{C as p}from"./Checkbox-DCNOX01K.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C85eAV5x.js";import"./utils-L1ZXEAM0.js";import"./clsx-B-dksMZM.js";import"./Text-B0SIJ0ar.js";import"./useFocusRing-CEJP2sKk.js";import"./index-DZLGwHwk.js";import"./index-w-ZTYn4u.js";import"./clsx-Ciqy0D92.js";import"./Text-BL0-OeDh.js";import"./Label-hCroOn6u.js";import"./Button-Bj1Gx374.js";import"./Hidden-pBI9L9bQ.js";import"./useLabel-CCF_4gB4.js";import"./useLabels-CPcqYQYg.js";import"./useButton-0-s8uA0b.js";import"./Dialog-Ja_3xXAy.js";import"./RSPContexts--YEt9orp.js";import"./OverlayArrow-BMD8KIF5.js";import"./useResizeObserver-3VgU2Mfv.js";import"./useControlledState-2AKkTK1v.js";import"./Collection-BvFqWJhU.js";import"./index-Bvyw-qy_.js";import"./Separator-DNK48uvM.js";import"./SelectionManager-CHzFMA0s.js";import"./useEvent-BEm0Eqbv.js";import"./scrollIntoView-CMGg4YQW.js";import"./SelectionIndicator-BgMQIXdK.js";import"./useDescription-CgE9sFBH.js";import"./ListKeyboardDelegate-BWCuCnFj.js";import"./PressResponder-E3b5fKgd.js";import"./useLocalizedStringFormatter-DdHSxoKc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DfesOHlA.js";import"./getScrollParent-BEOCR9gy.js";import"./VisuallyHidden-C2-WAH_L.js";import"./x-Ci83I339.js";import"./createLucideIcon-Bq0_1Yjp.js";import"./useLocalizedStringFormatter-Bt1-Aj9O.js";import"./Heading-xn6cGSx1.js";import"./Button-CF3n8BCq.js";import"./Button.module-BB7N-cLd.js";import"./info-C3U6dhG6.js";import"./Popover-C2N9jWDY.js";import"./Form-DVIWY3z8.js";import"./useField-B2ENXugf.js";import"./check-03ofgQbS.js";import"./useToggleState-CiNoaRur.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
