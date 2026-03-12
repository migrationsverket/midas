import{j as e}from"./iframe-BKt9EFfY.js";import{C as m}from"./CheckboxGroup-CP_EyWPa.js";import{C as p}from"./Checkbox-DG48q2BP.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-x-AT8pl1.js";import"./utils-UHPC9nWZ.js";import"./clsx-B-dksMZM.js";import"./Text-Cx5eezfb.js";import"./useFocusRing-cxIDuQxL.js";import"./index--2FdksYv.js";import"./index-YDrS01VO.js";import"./clsx-Ciqy0D92.js";import"./Text-QG4NB2hl.js";import"./Label-Ccv4NXgC.js";import"./Button-54WAdtvn.js";import"./Hidden-BIzqGf_Y.js";import"./useLabels-Dg5v2BlI.js";import"./useButton-DZMjZ0Xn.js";import"./Dialog-Cwu02sHs.js";import"./RSPContexts-C1Y2t1uV.js";import"./OverlayArrow-CKG8ikC0.js";import"./useResizeObserver-D-YYA0Ni.js";import"./useControlledState-BZs3lQsK.js";import"./Collection-BuYk4Gk5.js";import"./index-CcGrGtPC.js";import"./Separator-CtVyKUJH.js";import"./SelectionManager-D3YQtbVB.js";import"./useEvent-BsotznEQ.js";import"./scrollIntoView-D7dRqv7d.js";import"./SelectionIndicator-fUDz65K_.js";import"./useDescription-ClLBcdJg.js";import"./ListKeyboardDelegate-BEZyuz-l.js";import"./PressResponder-CJbEg2ds.js";import"./useLocalizedStringFormatter-CEsxsRDH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-Skfg5M.js";import"./getScrollParent-JoXPjCTV.js";import"./VisuallyHidden-oXJqa0w4.js";import"./x-DbaGL1T9.js";import"./createLucideIcon-CwzpYKvj.js";import"./useLocalizedStringFormatter-C4CK9KxZ.js";import"./Heading-C48sIEiR.js";import"./Button-BP3_jhUy.js";import"./Button.module-D_C6WeTN.js";import"./info-D-668lkH.js";import"./Popover-CL7jeCE7.js";import"./useFormValidation-Dsa57_F2.js";import"./useField-DoDrCpUl.js";import"./Form-BIn8UGe1.js";import"./check-DntiIOxH.js";import"./useToggleState-4kt2hSTJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
