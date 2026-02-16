import{j as e}from"./iframe-UW8vLm1f.js";import{C as m}from"./CheckboxGroup-CMVMUOpY.js";import{C as p}from"./Checkbox-BxzX1ex_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-2Or80766.js";import"./utils-CLOZA6Qr.js";import"./clsx-B-dksMZM.js";import"./Text-Dog5UxXw.js";import"./useFocusRing-CMx22NqV.js";import"./index-Cq0AMSqT.js";import"./index-TM4f8tXD.js";import"./clsx-Ciqy0D92.js";import"./Text-B07qXiJx.js";import"./Label-DDcH675p.js";import"./Button-7au76wYW.js";import"./Hidden-BxY2u9UP.js";import"./useLabels-DT0_oM0p.js";import"./useButton-DHMLeTON.js";import"./Dialog-DuyYu8CN.js";import"./RSPContexts-YZOHPwcP.js";import"./OverlayArrow-DPUo3fC4.js";import"./useResizeObserver-BcqkGcmz.js";import"./useControlledState-DrPYTGHy.js";import"./Collection-Cq3rGgRd.js";import"./index-Cs4cHTgU.js";import"./Separator-CYUS-T7f.js";import"./SelectionManager-DVFtTB8Q.js";import"./useEvent-Bfb0EIZl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CqMYmib_.js";import"./useDescription-Cf2Sv6pY.js";import"./ListKeyboardDelegate-LAGyR_aw.js";import"./PressResponder-ClYP-ws4.js";import"./useLocalizedStringFormatter-ILC68sUH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Celvu16M.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D55BsDJa.js";import"./Button-Bq-BzB1-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B2qxmHUY.js";import"./createLucideIcon-D1-wdHpr.js";import"./x-tk0MJ5Od.js";import"./Heading-C_hAtKHU.js";import"./info-BAzgAVug.js";import"./Popover-DKCElpqt.js";import"./useFormValidation-CCF-9150.js";import"./useField-C9XmYr2d.js";import"./Form-bRhU2Psn.js";import"./check-B4ze5XD5.js";import"./useToggleState-BsElWDIx.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
