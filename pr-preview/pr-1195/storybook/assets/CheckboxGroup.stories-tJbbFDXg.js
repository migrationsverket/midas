import{j as e}from"./iframe-BgSB-ePP.js";import{C as m}from"./CheckboxGroup-BeY8FZUE.js";import{C as p}from"./Checkbox-C_30dcTQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-6w5f847L.js";import"./utils-C5FyKCk8.js";import"./clsx-B-dksMZM.js";import"./Text-BdZEyiog.js";import"./useFocusRing-CEd5VvO1.js";import"./index-ByecJ60K.js";import"./index-DoB2i7js.js";import"./clsx-Ciqy0D92.js";import"./Text-Bp3gM7sB.js";import"./Label-CY7YqzCd.js";import"./Button-Lo8sEzbF.js";import"./Hidden-CuqOQBO_.js";import"./useLabel-BzarhHDS.js";import"./useLabels-DD4u-YLs.js";import"./useButton-DS4hbBUr.js";import"./Dialog-BSCnQNbw.js";import"./RSPContexts-Dgg5-u6I.js";import"./OverlayArrow-LFqYR0jf.js";import"./useResizeObserver-LO2zYuxY.js";import"./useControlledState-DJPtRTJ6.js";import"./Collection-BFk0hYY1.js";import"./index-CIw37Vap.js";import"./Separator-C27PGBW-.js";import"./SelectionManager-ClgoC-jL.js";import"./useEvent-Dxq_2Jhl.js";import"./scrollIntoView-CjHtu3Nd.js";import"./SelectionIndicator-DsEab8pP.js";import"./useDescription-C2lPd98U.js";import"./ListKeyboardDelegate-DAJhFSXQ.js";import"./PressResponder-DgCc_tBW.js";import"./useLocalizedStringFormatter-DhW77Uj_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B-urWx1P.js";import"./getScrollParent-DmZ0CDlB.js";import"./VisuallyHidden-Bm0pqSKV.js";import"./x-CEx6wB1z.js";import"./createLucideIcon-B3pidq9m.js";import"./useLocalizedStringFormatter-CqnGehUR.js";import"./Heading-_oJ7EFQd.js";import"./Button-BXdJw4HN.js";import"./Button.module-BB7N-cLd.js";import"./info-Dypkbl_8.js";import"./Popover-YVA3dvw8.js";import"./Form-Svy9eoUw.js";import"./useField-C6hLFYbq.js";import"./check-U7BqNtsc.js";import"./useToggleState-BBn1NjxW.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
