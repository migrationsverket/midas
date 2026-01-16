import{j as e}from"./iframe-DwI68eck.js";import{C as m}from"./CheckboxGroup-DWwzJsbB.js";import{C as p}from"./Checkbox-ERa32A4i.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CtXLLrVt.js";import"./utils-Dw1S_uWj.js";import"./clsx-B-dksMZM.js";import"./Text-llkKnBOG.js";import"./useFocusRing-DB0Vn7oI.js";import"./index-DyjIQlNW.js";import"./index-DBi3ohRe.js";import"./clsx-Ciqy0D92.js";import"./Text-CkP7VZx0.js";import"./Label-Dj_J8W1G.js";import"./Button-Dq8sGMaF.js";import"./Hidden-DPNZSM4r.js";import"./useLabels-DRJ0S-DI.js";import"./useButton-C5XtJKU4.js";import"./Dialog-DBgR96yC.js";import"./RSPContexts-CBTI3P45.js";import"./OverlayArrow-hpFbAA22.js";import"./useResizeObserver-NyppaQoy.js";import"./useControlledState-B4AMrZHZ.js";import"./Collection-DRikJRb9.js";import"./index-aa6DVWL6.js";import"./Separator-DHHHnuYV.js";import"./SelectionManager--Ldx6ANV.js";import"./useEvent-De40iJ4U.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CKXp1bx9.js";import"./useDescription-B56we0Bc.js";import"./ListKeyboardDelegate-eGB28Zrm.js";import"./PressResponder-B9gPpccx.js";import"./useLocalizedStringFormatter-C-X_uo4l.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BlYtIW2E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DzFRqZJO.js";import"./Button-CTJhina1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-K9SYCEaj.js";import"./createLucideIcon-DGN0UqC4.js";import"./x-mpCuSzBg.js";import"./Heading-iMcIu53o.js";import"./info-BEwUiiBp.js";import"./Popover-DwF0j103.js";import"./useFormValidation-C8z9LNZS.js";import"./useField-CmRL5QBJ.js";import"./Form-B97yB_J0.js";import"./check-KJ0NidZs.js";import"./useToggleState-CJMPhIoj.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
