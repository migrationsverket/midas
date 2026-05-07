import{j as e}from"./iframe-aJfE6oy0.js";import{C as m}from"./CheckboxGroup-CYKIIi2p.js";import{C as p}from"./Checkbox-BYvS4zLx.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BZPifAC7.js";import"./utils-COacjnfx.js";import"./clsx-B-dksMZM.js";import"./Text-CBxYHQaa.js";import"./useFocusRing-ClTA_ULX.js";import"./index-B_9hsNIp.js";import"./index-Nx_fUc0r.js";import"./clsx-Ciqy0D92.js";import"./Text-CjkYZ3Fr.js";import"./Label-BYVk5NXm.js";import"./Button-gsjvyy6J.js";import"./Hidden-ijM5UvIg.js";import"./useLabel-BO6GqdSt.js";import"./useLabels-Jql3WVtl.js";import"./useButton-Bp12HEqD.js";import"./Dialog-DWeUjEts.js";import"./RSPContexts-9F0yhmI5.js";import"./OverlayArrow-CeyEtvfk.js";import"./useResizeObserver-iAKXnEML.js";import"./useControlledState-y9DEv0LS.js";import"./Collection-t5JwsPxx.js";import"./index-C4iPrJ7t.js";import"./Separator-pVDiBCsW.js";import"./SelectionManager-DbwSoSAB.js";import"./useEvent-BKCPZ-HL.js";import"./scrollIntoView-CNAiIIsG.js";import"./SelectionIndicator-2xUxav39.js";import"./useDescription-DS9x0_tx.js";import"./ListKeyboardDelegate-BJy3xEaG.js";import"./PressResponder-1-7J0-yf.js";import"./useLocalizedStringFormatter--tqgw_C7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B1lZ6cxA.js";import"./getScrollParent-C89CZMJK.js";import"./VisuallyHidden-D5b4EtUm.js";import"./ModalOverlay-qDW4V-mi.js";import"./x-a-leTFOM.js";import"./createLucideIcon-CHcVE9D4.js";import"./useLocalizedStringFormatter-CUSht9QP.js";import"./Heading-SNP1UP3U.js";import"./Button-DTBmOwE-.js";import"./Button.module-BB7N-cLd.js";import"./info-KcIhJiDz.js";import"./Popover-ChR_XA2B.js";import"./Form-DCHTbw_J.js";import"./useField-BuwSGg-D.js";import"./check-26zGa1yI.js";import"./useToggleState-BMrc-zSz.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
