import{j as e}from"./iframe-CQoEt6MY.js";import{C as m}from"./CheckboxGroup-D695LoAF.js";import{C as p}from"./Checkbox-BGaGb_bV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CzIfU6LM.js";import"./utils-BZjNqm_v.js";import"./clsx-B-dksMZM.js";import"./Text-C06qrCLM.js";import"./useFocusRing-Ce_-RKSK.js";import"./index-JqVMY84I.js";import"./index-sURv3l0A.js";import"./clsx-Ciqy0D92.js";import"./Text-BNSF2d27.js";import"./Label-BzLdfOp9.js";import"./Button-DZ49MCyb.js";import"./Hidden-CSuNuGGR.js";import"./useLabels-CdhJZ8bI.js";import"./useButton-BFtrRDJL.js";import"./Dialog-picov1_h.js";import"./RSPContexts-Cc8CKiY2.js";import"./OverlayArrow-DvmBJbAR.js";import"./useResizeObserver-Dxgqw-Q0.js";import"./useControlledState-CwbmZD-T.js";import"./Collection-CfTFXM1w.js";import"./index-DmPQh8PL.js";import"./Separator-DDDvukDu.js";import"./SelectionManager-DPZ52PR0.js";import"./useEvent-D--WxKnf.js";import"./scrollIntoView-WXRUBV4V.js";import"./SelectionIndicator-DKpd8Sse.js";import"./useDescription-CHD7aq73.js";import"./ListKeyboardDelegate-DZP6cvPb.js";import"./PressResponder-Cqi4nYA5.js";import"./useLocalizedStringFormatter-CXbNOCH2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CoxL4gof.js";import"./VisuallyHidden-Bi8YNO_N.js";import"./useLocalizedStringFormatter-DWHjwkEi.js";import"./Button-CzvKWfD1.js";import"./Button.module-CtQ1deO8.js";import"./x-DEghRdqs.js";import"./createLucideIcon-C6kI0Pt5.js";import"./Heading-CH7cVlF3.js";import"./info-DaFRC9af.js";import"./Popover-DinxALOR.js";import"./useFormValidation-CBhhwGfy.js";import"./useField-CzzztK0W.js";import"./Form-BM87cVOp.js";import"./check-cBfOOvZR.js";import"./useToggleState-BgPFxR5z.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
