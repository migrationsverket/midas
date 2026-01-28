import{j as e}from"./iframe-B78wn1WG.js";import{C as m}from"./CheckboxGroup-BACANkyG.js";import{C as p}from"./Checkbox-OlOqem2t.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BWFa-LBr.js";import"./utils-RTE5txou.js";import"./clsx-B-dksMZM.js";import"./Text-DhYauZPs.js";import"./useFocusRing-C06DFN8b.js";import"./index-2xn9MPia.js";import"./index-oZtTg3tM.js";import"./clsx-Ciqy0D92.js";import"./Text-CI45cqHe.js";import"./Label-D8wejGKf.js";import"./Button-Dj90Y4Eb.js";import"./Hidden-Dmy_tbtO.js";import"./useLabels-eN7I3lmh.js";import"./useButton-D0ftkHxr.js";import"./Dialog-D35lAKZM.js";import"./RSPContexts-gOljqF4f.js";import"./OverlayArrow-D68Em3aM.js";import"./useResizeObserver-CGa1W_IZ.js";import"./useControlledState-hc0v7KHB.js";import"./Collection-DsNNavxH.js";import"./index-Bgt_Qwum.js";import"./Separator-CY7oQJq7.js";import"./SelectionManager-Bp1Fa3PG.js";import"./useEvent-C5Pl_19e.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-0X1b94tQ.js";import"./useDescription-DCMvsgkK.js";import"./ListKeyboardDelegate-BCvRBiIP.js";import"./PressResponder-C4_7qtDK.js";import"./useLocalizedStringFormatter-Da4CZSyZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmbCRhya.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-nx3fwYPE.js";import"./Button-C_05nidj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DLBhvH3W.js";import"./createLucideIcon-De6jokFF.js";import"./x-E1o5LEs9.js";import"./Heading-ztzP_aN9.js";import"./info-BUpIPp0t.js";import"./Popover-qZ1lc34E.js";import"./useFormValidation-DjwK84Yp.js";import"./useField-BZ6Bn88N.js";import"./Form-BPVKSKvY.js";import"./check-DB--x2og.js";import"./useToggleState-BRrxB5sU.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
