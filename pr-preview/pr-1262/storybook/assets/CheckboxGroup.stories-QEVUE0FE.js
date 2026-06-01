import{j as e}from"./iframe-CwW8sN4S.js";import{C as m}from"./CheckboxGroup-DEoKTkLh.js";import{C as p}from"./Checkbox-DpRJymp8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BlJWYskW.js";import"./utils-B_M889tP.js";import"./clsx-B-dksMZM.js";import"./Text-BE9Sihnv.js";import"./useFocusRing-cgdKMhcs.js";import"./index-Bf5NZhsL.js";import"./index-BaeC46Uu.js";import"./clsx-Ciqy0D92.js";import"./Text-C5uja355.js";import"./Label-BtXdhNCg.js";import"./Button-C3AuE87p.js";import"./Hidden-CVoubVAI.js";import"./useLabel-DoKdb579.js";import"./useLabels-CwIlq1fJ.js";import"./useButton-CZZnZ_mn.js";import"./Dialog-taGEIRz0.js";import"./RSPContexts-szw5AFHr.js";import"./OverlayArrow-Dhpegq9P.js";import"./useResizeObserver-DIXIeOSr.js";import"./useControlledState-CC34MHAe.js";import"./Collection-AVCAnE9e.js";import"./index-ZmllTkBI.js";import"./Separator-D1lrfBKJ.js";import"./SelectionManager-DjP27Hq6.js";import"./useEvent-CeuSem5l.js";import"./scrollIntoView-DJ_jtxbK.js";import"./SelectionIndicator-B23FeEQ3.js";import"./useDescription-UAInHKf4.js";import"./ListKeyboardDelegate-CQEvvxFH.js";import"./PressResponder-DDLeQnn7.js";import"./useLocalizedStringFormatter-DJpiZ4xv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsnOxs_W.js";import"./getScrollParent-DKE2Book.js";import"./VisuallyHidden-BudlR0yM.js";import"./ModalOverlay-K-4HGfJs.js";import"./x-DNLXf0Tv.js";import"./createLucideIcon-DzXM4i8f.js";import"./useLocalizedStringFormatter-eUY7Q8gu.js";import"./Heading-Bb8pQtsc.js";import"./Button-BNJwH1Cm.js";import"./Button.module-BB7N-cLd.js";import"./info-wfKsbo8I.js";import"./Popover-DbYbPZ55.js";import"./Form-CUc0WOwk.js";import"./useField-C2elZhF8.js";import"./check-BwJGBTLI.js";import"./useToggleState-CDbmgQBe.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
