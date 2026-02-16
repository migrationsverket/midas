import{j as e}from"./iframe-B1z-gzHE.js";import{C as m}from"./CheckboxGroup-Dgpd3U0-.js";import{C as p}from"./Checkbox-G956RdEt.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CT39iQs7.js";import"./utils-CEIeqKii.js";import"./clsx-B-dksMZM.js";import"./Text-BYCHxNL_.js";import"./useFocusRing-BvsKcShr.js";import"./index-Di8dd2eE.js";import"./index-BOkWMc0e.js";import"./clsx-Ciqy0D92.js";import"./Text-Dl9x0CG8.js";import"./Label-Dq2Bv3Sh.js";import"./Button-D77i-hon.js";import"./Hidden-Cs2MCe5s.js";import"./useLabels-Dmi7cw95.js";import"./useButton-fu8jG2Pq.js";import"./Dialog-1-j5Bo3M.js";import"./RSPContexts-BGkblzEm.js";import"./OverlayArrow-DEJNKPlL.js";import"./useResizeObserver-DZYX4SHr.js";import"./useControlledState-B3HQDcvg.js";import"./Collection-DOfSxpZ2.js";import"./index-Bb4iAelt.js";import"./Separator-CXlvbZzP.js";import"./SelectionManager-D7xh7jh3.js";import"./useEvent-EYVAMCj5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bo2ubr1N.js";import"./useDescription-DAgCVnlX.js";import"./ListKeyboardDelegate-CUzhUpcn.js";import"./PressResponder-C1X-ay40.js";import"./useLocalizedStringFormatter-DWVhSEJI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DJ05djJI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bj8GOm3o.js";import"./Button-pqjMbnpp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BEmp5YcF.js";import"./createLucideIcon-B5DI2OI0.js";import"./x-CglcQKFI.js";import"./Heading-BLB8Du94.js";import"./info-BWZR2OeP.js";import"./Popover-BhD_DRu-.js";import"./useFormValidation-w3v3W7gn.js";import"./useField-d_oeHlDs.js";import"./Form-CuLwN7xk.js";import"./check-DEZ28te5.js";import"./useToggleState-BBMcRgXS.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
