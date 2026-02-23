import{j as e}from"./iframe-BUDtIrHl.js";import{C as m}from"./CheckboxGroup-CPfQM4Fl.js";import{C as p}from"./Checkbox-BuwT8nC3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B6xJ2_09.js";import"./utils-AGwlrZ_4.js";import"./clsx-B-dksMZM.js";import"./Text-CbEfxdsU.js";import"./useFocusRing-CjCkUQdP.js";import"./index-DONLKseB.js";import"./index-CGdvhCdV.js";import"./clsx-Ciqy0D92.js";import"./Text-Bdd1tqPS.js";import"./Label-BmPbpS5w.js";import"./Button-IDkkm_2W.js";import"./Hidden-BlaUoiVl.js";import"./useLabels-B8ED9S2U.js";import"./useButton-Dcc_HHbb.js";import"./Dialog-CsREFjSl.js";import"./RSPContexts-Cdws8AZx.js";import"./OverlayArrow-BueyShwC.js";import"./useResizeObserver-D_OG9Iyx.js";import"./useControlledState-D9bcyMir.js";import"./Collection-BboK_RTQ.js";import"./index-CnFeaVjs.js";import"./Separator-CPIGN1lb.js";import"./SelectionManager-uiFozjTp.js";import"./useEvent-BeMeyqUJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmWfpYdB.js";import"./useDescription-C-xHEeiw.js";import"./ListKeyboardDelegate-CKEXMxD7.js";import"./PressResponder-CnWFRWXt.js";import"./useLocalizedStringFormatter-BWOiSsrR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CK3uOwmj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dvn9bM_l.js";import"./Button-DLSCCVY_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9NIs4hG.js";import"./createLucideIcon-BWsYPG1T.js";import"./x-CJxbdHUR.js";import"./Heading-BMB407cu.js";import"./info-LPOaS6Og.js";import"./Popover-CGo5h5lw.js";import"./useFormValidation-BQSdPv_b.js";import"./useField-CcXXxyKb.js";import"./Form-DAq52jw6.js";import"./check-ChcTEj4m.js";import"./useToggleState-CR6cmAet.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
