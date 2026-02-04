import{j as e}from"./iframe-BUlYeenf.js";import{C as m}from"./CheckboxGroup-CmDMFC6J.js";import{C as p}from"./Checkbox-DmdUMtGs.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BuLprRq1.js";import"./utils-lHsRwqJp.js";import"./clsx-B-dksMZM.js";import"./Text-BEqbNabF.js";import"./useFocusRing-CviEpoWZ.js";import"./index-DGEIcEWR.js";import"./index-DmdJ6ljJ.js";import"./clsx-Ciqy0D92.js";import"./Text-Bcb19OuN.js";import"./Label-C5yUH3T8.js";import"./Button-CAFxmTKU.js";import"./Hidden-xA7wwpGq.js";import"./useLabels-BwlyzcSz.js";import"./useButton-BwVzS7tb.js";import"./Dialog-sEw9lXyx.js";import"./RSPContexts-DyT-IAgl.js";import"./OverlayArrow-gd4hgrwL.js";import"./useResizeObserver-Dfpbi31M.js";import"./useControlledState-BQ1_hIib.js";import"./Collection-DXOyl8IL.js";import"./index-BFmyVk_-.js";import"./Separator-_jFFnUtm.js";import"./SelectionManager-BveSUUx6.js";import"./useEvent-qyTooRJj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cb7FhzC-.js";import"./useDescription-DtuYr6PG.js";import"./ListKeyboardDelegate-MnX_BZtB.js";import"./PressResponder-B7tqUOSP.js";import"./useLocalizedStringFormatter-CZUMuckE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvNegiz2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BE5YEdq7.js";import"./Button-atNiNEsO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B7ud72d9.js";import"./createLucideIcon-D-YObSxS.js";import"./x-DgqlYmTg.js";import"./Heading-X-PaujHH.js";import"./info-Bep_ZP7Z.js";import"./Popover-t757kgyT.js";import"./useFormValidation-CNOyznno.js";import"./useField-BhMTZZgY.js";import"./Form-B0C8SxTV.js";import"./check-DGU0oFUw.js";import"./useToggleState-j0MKMOtt.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
