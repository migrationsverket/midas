import{j as e}from"./iframe-Co8ouiR0.js";import{C as m}from"./CheckboxGroup-BklrAAei.js";import{C as p}from"./Checkbox-BG0A2kn9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CEGfntdp.js";import"./utils-CaTFkK5X.js";import"./clsx-B-dksMZM.js";import"./Text-DtfYRBf1.js";import"./useFocusRing-Dxdgl-gF.js";import"./index-2SWVDjSK.js";import"./index-Cebtxf6H.js";import"./clsx-Ciqy0D92.js";import"./Text-B5_C6N3n.js";import"./Label-hXq40l1q.js";import"./Button-BP9TK4Xh.js";import"./Hidden-TJ2PhhZw.js";import"./useLabel-CFh1kjGP.js";import"./useLabels-BI3YgoCG.js";import"./useButton-D1lFKu5A.js";import"./Dialog-CvlWZS6m.js";import"./RSPContexts-DtYDmIKY.js";import"./OverlayArrow-C6d9GNbe.js";import"./useResizeObserver-B51hn-QD.js";import"./useControlledState-CaplsX9m.js";import"./Collection-DINZb8zb.js";import"./index-B_luancG.js";import"./Separator-BapWEfbs.js";import"./SelectionManager-BWBhr4BK.js";import"./useEvent-Cm1cXmjt.js";import"./scrollIntoView-DvPgTXx8.js";import"./SelectionIndicator-DWiIapfM.js";import"./useDescription-HAOJ4Hrg.js";import"./ListKeyboardDelegate-CsIF4ql5.js";import"./PressResponder-D7LEbecv.js";import"./useLocalizedStringFormatter-DQmIYKST.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CnViS2qk.js";import"./getScrollParent-BedhNeW7.js";import"./VisuallyHidden-DHiWfcqJ.js";import"./ModalOverlay-CCKnw6s9.js";import"./x-BzzbKOkA.js";import"./createLucideIcon-CuuVQ0Rb.js";import"./useLocalizedStringFormatter-BlJUxnvu.js";import"./Heading-BCJk9rok.js";import"./Button-BOgReN_Q.js";import"./Button.module-BB7N-cLd.js";import"./info-SKV308y7.js";import"./Popover-0v0Nff7R.js";import"./Form-Ckl-USsE.js";import"./useField-CC0WBTcL.js";import"./check-DdO9ttZ6.js";import"./useToggleState-ClTs80al.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
