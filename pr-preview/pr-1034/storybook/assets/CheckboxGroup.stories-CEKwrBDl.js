import{j as e}from"./iframe-KIBzDUfV.js";import{C as m}from"./CheckboxGroup-C4oEnKex.js";import{C as p}from"./Checkbox-BSdZBiOO.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CQia8U4U.js";import"./utils-B3s11CxX.js";import"./clsx-B-dksMZM.js";import"./Text-BcfqcDG4.js";import"./useFocusRing-DIi5rye2.js";import"./index-B7quJzXG.js";import"./index-CZhNCbuO.js";import"./clsx-Ciqy0D92.js";import"./Text-D2dj_Y_G.js";import"./Label-C8zDX718.js";import"./Button-B74IQIIY.js";import"./Hidden-_s5Kzwns.js";import"./useLabels-CsvdAiYC.js";import"./useButton-CQ4Hdmts.js";import"./Dialog-w_4ICCSl.js";import"./RSPContexts-BKpto4kw.js";import"./OverlayArrow-BKZa25OL.js";import"./useResizeObserver-Cno1zDdz.js";import"./useControlledState-gvhGp19W.js";import"./Collection-DoIqkMu3.js";import"./index-Bm9XISKF.js";import"./Separator-X9dAFN0X.js";import"./SelectionManager-BOhA1hAm.js";import"./useEvent-DlPvFlnY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D-2tbCkj.js";import"./useDescription-Cc1bnlw8.js";import"./ListKeyboardDelegate-uR_8vA3x.js";import"./PressResponder-DBvYC6yD.js";import"./useLocalizedStringFormatter-BDrDCZSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZGwHcL3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BM7AOnhj.js";import"./Button-D_6pE22y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpqnENkr.js";import"./createLucideIcon-DYfbqy8w.js";import"./x-CdrWRsxx.js";import"./Heading-DAzo48yH.js";import"./info-D9i0MW6u.js";import"./Popover-CtEjwxEi.js";import"./useFormValidation-2ZDFF5_3.js";import"./useField-ttnFMQCX.js";import"./Form-DwKNPYWJ.js";import"./check-R8312xx5.js";import"./useToggleState-Di-HErA6.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
