import{j as e}from"./iframe-BUzSQYPC.js";import{C as m}from"./CheckboxGroup-DbBI2J8g.js";import{C as p}from"./Checkbox-BKLJpkuR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bhel02KK.js";import"./utils-Btzcj3N0.js";import"./clsx-B-dksMZM.js";import"./Text-Bd7HxiMM.js";import"./useFocusRing-YU2uIjvV.js";import"./index-GFhdUWhY.js";import"./index-Co6p1tFH.js";import"./clsx-Ciqy0D92.js";import"./Text-Bj5T73Aj.js";import"./Label-DVAz7ns9.js";import"./Button-OR1vhKiL.js";import"./Hidden-BnEE9Gsk.js";import"./useLabels-cBc_DTaL.js";import"./useButton-DY9W__1v.js";import"./Dialog-9nXcosHR.js";import"./RSPContexts-Cz2k_HNM.js";import"./OverlayArrow-B544f2HB.js";import"./useResizeObserver-BauP1qVp.js";import"./useControlledState-DRPCclAj.js";import"./Collection-BdzN0GFu.js";import"./index-CLJhNb_Q.js";import"./Separator-Bb8iAwHX.js";import"./SelectionManager-Cysrbh2q.js";import"./useEvent-Bdun3CtA.js";import"./scrollIntoView-DVdSjfTj.js";import"./SelectionIndicator-BNE4DlHv.js";import"./useDescription-DUYplGlv.js";import"./ListKeyboardDelegate-BkEk9pDN.js";import"./PressResponder-DNmbnAh3.js";import"./useLocalizedStringFormatter-Df3fxnIS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BETkQzAi.js";import"./VisuallyHidden-DxzlT-nw.js";import"./Button-BNm8f_W9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DGyxLrTg.js";import"./createLucideIcon-DHyF6-IS.js";import"./x-m8OdfwS0.js";import"./Heading-BAJI1xjf.js";import"./info-CrIUTLUS.js";import"./Popover-BLQSaase.js";import"./useFormValidation-De4Eb6_6.js";import"./useField-DI1Z0UEr.js";import"./Form-CGQpIRs2.js";import"./check-krA3es4Q.js";import"./useToggleState-PMhKKL5h.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
