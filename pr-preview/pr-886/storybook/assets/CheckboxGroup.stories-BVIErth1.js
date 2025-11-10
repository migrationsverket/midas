import{j as e}from"./iframe-1jCyVKTR.js";import{C as m}from"./CheckboxGroup-BLaAXTmq.js";import{C as p}from"./Checkbox-Tw3i8u6D.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-D9fldg2V.js";import"./utils-DZdh9xsP.js";import"./clsx-B-dksMZM.js";import"./Text-FQYgckzw.js";import"./useFocusRing-B8WDFENw.js";import"./index-Cfj3l_Mf.js";import"./index-O3MJa0Qz.js";import"./clsx-Ciqy0D92.js";import"./Text-CLTLikYF.js";import"./Label-juRy4Jdl.js";import"./Button-BBbyz38O.js";import"./Hidden-BeQfraet.js";import"./useLabels-BVuAqKI_.js";import"./useButton-BuSAxlcg.js";import"./Dialog-vsRnTFlZ.js";import"./RSPContexts-C6SYwle_.js";import"./OverlayArrow-Dk1tBYpB.js";import"./useResizeObserver-BU8KgHnj.js";import"./useControlledState-RwIOrToL.js";import"./Collection-CqnWXiNw.js";import"./index-rUR-pArD.js";import"./Separator-BJtV4G8V.js";import"./SelectionManager-dMLD_94D.js";import"./useEvent-1SLLKsgm.js";import"./scrollIntoView-sIBFCGIW.js";import"./SelectionIndicator-CdXLlZAE.js";import"./useDescription-BaOnPnVQ.js";import"./ListKeyboardDelegate-ww872CJl.js";import"./PressResponder-BvX7ote1.js";import"./useLocalizedStringFormatter-C9x2tCAa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-OYNJJ5NF.js";import"./VisuallyHidden-ynQwwP3K.js";import"./useLocalizedStringFormatter-CWCUolMa.js";import"./Button-DaHqgoFJ.js";import"./Button.module-CtQ1deO8.js";import"./x-DMprJIeA.js";import"./createLucideIcon-D-FkpzSt.js";import"./Heading-xa_uGpIM.js";import"./info-BQ_yTRhG.js";import"./Popover-T9XSOZf8.js";import"./useFormValidation-CL9V_rGx.js";import"./useField-Aew03gCS.js";import"./Form-CX9yxveV.js";import"./check--vLYfjKI.js";import"./useToggleState-DbTNRR9X.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
