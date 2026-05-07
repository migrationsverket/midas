import{j as e}from"./iframe-CkvNFrYQ.js";import{C as m}from"./CheckboxGroup-BmvuInDE.js";import{C as p}from"./Checkbox-BjDCCwZt.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BN50R8Gs.js";import"./utils-BgwUMJBy.js";import"./clsx-B-dksMZM.js";import"./Text-DIpvUzoX.js";import"./useFocusRing-DW5q3Sep.js";import"./index-yTWTeOs4.js";import"./index-exdkySs-.js";import"./clsx-Ciqy0D92.js";import"./Text-DsB1bVac.js";import"./Label-D_35a4FG.js";import"./Button-vUvfAWls.js";import"./Hidden-Bsx77DlA.js";import"./useLabel-MkwggAPL.js";import"./useLabels-CL_FLL5j.js";import"./useButton-CJQ9IXaE.js";import"./Dialog-Cwzi9hHL.js";import"./RSPContexts-DGIABOWW.js";import"./OverlayArrow-DXo6ErSR.js";import"./useResizeObserver-qcJ7l2JQ.js";import"./useControlledState-Dmid9ay2.js";import"./Collection-B_3MCUvb.js";import"./index-TiB-bmTE.js";import"./Separator-D9Pii1fS.js";import"./SelectionManager-BSCYUInq.js";import"./useEvent-DbWchgAK.js";import"./scrollIntoView-CCwmtkiF.js";import"./SelectionIndicator-U0aQAuvT.js";import"./useDescription-CapqPYkv.js";import"./ListKeyboardDelegate-BEgF-Rly.js";import"./PressResponder-Bvpu2RL6.js";import"./useLocalizedStringFormatter-DSoEqpDY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-By-NOSqI.js";import"./getScrollParent-Dj3KhtFY.js";import"./VisuallyHidden-DC7QTvoq.js";import"./ModalOverlay-DfM4Ks9W.js";import"./x-DsRbZUfb.js";import"./createLucideIcon-CeEwKqzx.js";import"./useLocalizedStringFormatter-V6FZSm6s.js";import"./Heading-Bxkil-M5.js";import"./Button-D17vaezS.js";import"./Button.module-BB7N-cLd.js";import"./info-IKa_d3Rd.js";import"./Popover-BtXLH4Y0.js";import"./Form-CWYzH3eB.js";import"./useField-C89JW0cR.js";import"./check-CejbZSkD.js";import"./useToggleState-8XREYqB5.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
