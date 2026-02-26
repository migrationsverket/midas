import{j as e}from"./iframe-BjXHvzLV.js";import{C as m}from"./CheckboxGroup-CbpFdy89.js";import{C as p}from"./Checkbox-Cv1TdB5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BRuLTmCO.js";import"./utils-C7TofeRY.js";import"./clsx-B-dksMZM.js";import"./Text-G6RzhBRh.js";import"./useFocusRing-ChtlY4t2.js";import"./index-c1mE3GS_.js";import"./index-fRYLtIJx.js";import"./clsx-Ciqy0D92.js";import"./Text-B60LJh84.js";import"./Label-C5hySkMJ.js";import"./Button-D655U3jT.js";import"./Hidden-CwrmmuBw.js";import"./useLabels-CBgCNECm.js";import"./useButton-DTsHOwZn.js";import"./Dialog-DTI6aEob.js";import"./RSPContexts-By0c3k33.js";import"./OverlayArrow-mevRuBe1.js";import"./useResizeObserver-BJ2shdez.js";import"./useControlledState-5N7ivM8O.js";import"./Collection-eZGfFs1q.js";import"./index-Dd1fS_zB.js";import"./Separator-C1_9vz8Y.js";import"./SelectionManager-_yI7h9H0.js";import"./useEvent-bA9CQz3i.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BpO8vjo0.js";import"./useDescription-69qIWb5l.js";import"./ListKeyboardDelegate-Cr_75rG2.js";import"./PressResponder-B0oaoAR6.js";import"./useLocalizedStringFormatter-B09DX6oS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpslxbCs.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DEnBWTBz.js";import"./Button-Ck6rrEvj.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DGt-YCd6.js";import"./createLucideIcon-BMYiFBuo.js";import"./x-B15mToM9.js";import"./Heading-tCV9TyHz.js";import"./info-CBRy23Sl.js";import"./Popover-BAeWkly-.js";import"./useFormValidation-Y1s-UN3t.js";import"./useField-D1LWWz2e.js";import"./Form-DkVw-cHI.js";import"./check-yZX-Nib_.js";import"./useToggleState-DsoT0mbF.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
