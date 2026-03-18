import{j as e}from"./iframe-C--goO8e.js";import{C as m}from"./CheckboxGroup-CkEDzHBI.js";import{C as p}from"./Checkbox-EmttVRLa.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dwje_tcE.js";import"./utils-DSxiF1Cp.js";import"./clsx-B-dksMZM.js";import"./Text-DfLs60II.js";import"./useFocusRing-BcZJn3fC.js";import"./index-DvAhHsax.js";import"./index-DLC2Qh-Q.js";import"./clsx-Ciqy0D92.js";import"./Text-9OutCub2.js";import"./Label-QPXtgJsU.js";import"./Button-BI3Iq_aE.js";import"./Hidden-GH0AX83d.js";import"./useLabels-CvgKtUT-.js";import"./useButton-Xz1kmXFC.js";import"./Dialog-peyoAljX.js";import"./RSPContexts-DBlfftlT.js";import"./OverlayArrow-DjhTHSCV.js";import"./useResizeObserver-OFVIQs8l.js";import"./useControlledState-X-QYJxtN.js";import"./Collection-C5fmw-uG.js";import"./index-BuKZ05EQ.js";import"./Separator-BFK302df.js";import"./SelectionManager-QCyNYMjo.js";import"./useEvent-teLk4nYd.js";import"./scrollIntoView-Zj7kw8yy.js";import"./SelectionIndicator-DiVi5b4I.js";import"./useDescription-DPoM5gP_.js";import"./ListKeyboardDelegate-B2rGKOlU.js";import"./PressResponder-jLBzhJOQ.js";import"./useLocalizedStringFormatter-Ci2N_wM7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df7BSnEy.js";import"./getScrollParent-gKv46a13.js";import"./VisuallyHidden-C4dWGUSD.js";import"./x-xvoCsFgY.js";import"./createLucideIcon-pUc5o6Nr.js";import"./useLocalizedStringFormatter-L0RS7m21.js";import"./Heading-DorcuOCz.js";import"./Button-D9Z4rzGT.js";import"./Button.module-BB7N-cLd.js";import"./info-CJ3HCdpW.js";import"./Popover-BcKZVJBG.js";import"./useFormValidation--rHLyQTt.js";import"./useField-BxRSRWrc.js";import"./Form-BhOwk5Rh.js";import"./check-BkFvdX8A.js";import"./useToggleState-BzfcYAOS.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
