import{j as e}from"./iframe-BsATTn7S.js";import{C as m}from"./CheckboxGroup-CurNU4ez.js";import{C as p}from"./Checkbox-DU9n5iCZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ZIUt4nLn.js";import"./utils-CqHUKh2_.js";import"./clsx-B-dksMZM.js";import"./Text-BZiG-sAM.js";import"./useFocusRing-Bv0lKuNU.js";import"./index-B8jfesk_.js";import"./index-DrKA0vjB.js";import"./clsx-Ciqy0D92.js";import"./Text-DWxVSOOD.js";import"./Label-BG3TQjch.js";import"./Button-B8-_2jR7.js";import"./Hidden-STEvN2Ch.js";import"./useLabels-Cy5smjs4.js";import"./useButton-BO5H5m2x.js";import"./Dialog-BFsd_N7N.js";import"./RSPContexts-DlIxtbr4.js";import"./OverlayArrow-Gv4R4ifv.js";import"./useResizeObserver-iwfSAtcH.js";import"./useControlledState-BRGghZoO.js";import"./Collection-D-2V9vr-.js";import"./index--aMWt0R4.js";import"./Separator-DhgRJKP2.js";import"./SelectionManager-DS5LU99Q.js";import"./useEvent-BZDrSNpr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BYimUhfR.js";import"./useDescription-BNPvHP4K.js";import"./ListKeyboardDelegate-CZH46TN4.js";import"./PressResponder-BSf7vw9s.js";import"./useLocalizedStringFormatter-D0E7DUZe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3tNLTy4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CD5_Pn7B.js";import"./Button-Bupwh-3M.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dy_8RTcF.js";import"./createLucideIcon-CgjvvVBG.js";import"./x-CQFRpNWa.js";import"./Heading-Wcta6dzy.js";import"./info-CWmVrqQc.js";import"./Popover-djP-khse.js";import"./useFormValidation-DbSiGsSK.js";import"./useField-faGGhaPE.js";import"./Form-BdI37ukR.js";import"./check-DRY2f3p1.js";import"./useToggleState-BHdoq7ed.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
