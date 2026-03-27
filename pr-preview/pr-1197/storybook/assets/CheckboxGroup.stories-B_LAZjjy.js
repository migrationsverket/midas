import{j as e}from"./iframe-BwW6Fqvd.js";import{C as m}from"./CheckboxGroup-DbiU-cYt.js";import{C as p}from"./Checkbox-DiRdmrc2.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DG2mBVdw.js";import"./utils-Bghr1fcB.js";import"./clsx-B-dksMZM.js";import"./Text-CYDu8Dn_.js";import"./useFocusRing-B8ItjY_Y.js";import"./index-BtFqcAbs.js";import"./index-BBxAD_Mx.js";import"./clsx-Ciqy0D92.js";import"./Text-D0nO-HBI.js";import"./Label-sxDBxkWi.js";import"./Button-zWxdU5Zd.js";import"./Hidden-DOVwj0BP.js";import"./useLabel-BplFUPFd.js";import"./useLabels-CQajE6fa.js";import"./useButton-BEskBg1H.js";import"./Dialog-BRz4jbex.js";import"./RSPContexts-Bh9oL_fS.js";import"./OverlayArrow-DWhc0KKE.js";import"./useResizeObserver-CgzeOzAv.js";import"./useControlledState-DGQCfKNy.js";import"./Collection-DDKAL2kq.js";import"./index-C1W8SJ9q.js";import"./Separator-cNZLL5LH.js";import"./SelectionManager-D0j-6TvJ.js";import"./useEvent-DMcK-jhf.js";import"./scrollIntoView-CvIpTomZ.js";import"./SelectionIndicator-Cf42c1mS.js";import"./useDescription-DDaxYDi5.js";import"./ListKeyboardDelegate-Mx-nXjyt.js";import"./PressResponder-8_a2ySpr.js";import"./useLocalizedStringFormatter-B_9ddfhq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQkHoCqk.js";import"./getScrollParent-C7W5J6K6.js";import"./VisuallyHidden-6rJm-kLH.js";import"./x-BceaA5bl.js";import"./createLucideIcon-baXbygoM.js";import"./useLocalizedStringFormatter-cARnU_EF.js";import"./Heading-B3fvxMc9.js";import"./Button-D29dOr6P.js";import"./Button.module-BB7N-cLd.js";import"./info-BwI5uWQ1.js";import"./Popover-CkfRqJc8.js";import"./Form-C0ycgpGF.js";import"./useField-Cv7gnOSH.js";import"./check-BPKRsxYA.js";import"./useToggleState-QdsEKVSL.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
