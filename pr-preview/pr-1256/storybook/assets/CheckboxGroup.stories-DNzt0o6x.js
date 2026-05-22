import{j as e}from"./iframe-BjXy11IP.js";import{C as m}from"./CheckboxGroup-UKCt6EjD.js";import{C as p}from"./Checkbox-C0FazZCi.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bj299096.js";import"./utils-Dj8sQgIn.js";import"./clsx-B-dksMZM.js";import"./Text-DM8Ihy_8.js";import"./useFocusRing-D20u5I3y.js";import"./index-BXFUTcBh.js";import"./index-BLEH-ht0.js";import"./clsx-Ciqy0D92.js";import"./Text-CXAF5biH.js";import"./Label-3Owq8FvS.js";import"./Button-CwQmoSQG.js";import"./Hidden-B_bNI1dK.js";import"./useLabel-1ZP1GF7v.js";import"./useLabels-ipnyo4k3.js";import"./useButton-CDDhm8mD.js";import"./Dialog-B6fuA9-4.js";import"./RSPContexts-Dc6ISs8u.js";import"./OverlayArrow-Bo6JBAss.js";import"./useResizeObserver-nRmR3_D9.js";import"./useControlledState-BFdO-Aas.js";import"./Collection-Bmvuh_aD.js";import"./index-svh7ED_h.js";import"./Separator-CbpAxHaB.js";import"./SelectionManager-MUVk0-Jq.js";import"./useEvent-BvN2BQGn.js";import"./scrollIntoView-e8j4Q6hS.js";import"./SelectionIndicator-DnJhxFrg.js";import"./useDescription-BaUF5NM6.js";import"./ListKeyboardDelegate-Dlc0U7io.js";import"./PressResponder-DoU1gB1A.js";import"./useLocalizedStringFormatter-2-idTql7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-wH-jenxE.js";import"./getScrollParent-Cwho8gKu.js";import"./VisuallyHidden-B8YjGTUD.js";import"./ModalOverlay-ki2j3uM5.js";import"./x-CBMTJOuE.js";import"./createLucideIcon-BrUYswYS.js";import"./useLocalizedStringFormatter-DylN3B8r.js";import"./Heading-BDcENu1i.js";import"./Button-CaR7So5F.js";import"./Button.module-BB7N-cLd.js";import"./info-CVrM1csg.js";import"./Popover-BeI0kvvq.js";import"./Form-DuPSWePz.js";import"./useField-C2clUNbs.js";import"./check-BHRcK2Fr.js";import"./useToggleState-CVBbsaXY.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
