import{j as e}from"./iframe-DDGhSUPH.js";import{C as m}from"./CheckboxGroup-DnbjiB5K.js";import{C as p}from"./Checkbox-Ce0B7sVb.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B2snDo_I.js";import"./utils-DkSk5Fpi.js";import"./clsx-B-dksMZM.js";import"./Text-BJg9Wjq2.js";import"./useFocusRing-Cp9EtA1A.js";import"./index-BxxJ1gtc.js";import"./index-LwRNPsNd.js";import"./clsx-Ciqy0D92.js";import"./Text-BWNYfE2D.js";import"./Label-CRQCXL-o.js";import"./Button-DoGvud4r.js";import"./Hidden-CVyjnzAi.js";import"./useLabels-rropAply.js";import"./useButton-BDswbpVc.js";import"./Dialog-BhZp17LH.js";import"./RSPContexts-FtlrlkMu.js";import"./OverlayArrow-Bvxjbbqo.js";import"./useResizeObserver-DRd9bCYq.js";import"./useControlledState-DUR86Gn9.js";import"./Collection-CIBeIq1W.js";import"./index-GMEkWNu-.js";import"./Separator-DZkffLye.js";import"./SelectionManager-BgF8caGQ.js";import"./useEvent-shFS8DT5.js";import"./scrollIntoView-cvGLPaS2.js";import"./SelectionIndicator-8ByGf7t5.js";import"./useDescription-DEKDhtSX.js";import"./ListKeyboardDelegate-CBJWcIUN.js";import"./PressResponder-C7DDSvFC.js";import"./useLocalizedStringFormatter-DCfAOUk8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BMuJYkOi.js";import"./VisuallyHidden-44FJARoa.js";import"./Button-CXmfUOo7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BChb16bJ.js";import"./createLucideIcon-KTBaycPF.js";import"./x-5VQdn16L.js";import"./Heading-Cq1LxtAA.js";import"./info-C8eGkilz.js";import"./Popover-BHFYxrAR.js";import"./useFormValidation-CaDXXURK.js";import"./useField-BDo5h1AO.js";import"./Form-B9IEcsSr.js";import"./check-Bxx5kN_m.js";import"./useToggleState-DBT-8jlg.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
