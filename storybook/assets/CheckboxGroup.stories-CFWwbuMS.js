import{j as e}from"./iframe-CWkvuWTT.js";import{C as m}from"./CheckboxGroup-CuqXoeZE.js";import{C as p}from"./Checkbox-aU0ROrL5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cc11gFwP.js";import"./utils-DyJgWfbB.js";import"./clsx-B-dksMZM.js";import"./Text-CWck0lXA.js";import"./useFocusRing-BH2MioRm.js";import"./index-BqsuNAQb.js";import"./index-BFnZ93le.js";import"./clsx-Ciqy0D92.js";import"./Text-wpzgiqlm.js";import"./Label-Dp8iZ7qT.js";import"./Button-CENR_dMZ.js";import"./Hidden-BVluWMB8.js";import"./useLabels-jLhadwWQ.js";import"./useButton-3lWcEg9J.js";import"./Dialog-D_bj_oZl.js";import"./RSPContexts-CIYffl3s.js";import"./OverlayArrow-PT6wNzDY.js";import"./useResizeObserver-h2xQ_Ex7.js";import"./useControlledState-iyG7ALqN.js";import"./Collection-DIo67PKg.js";import"./index-4YJTRRmu.js";import"./Separator-BkM_OCOB.js";import"./SelectionManager-BKOtOz1J.js";import"./useEvent-BRuRWZXg.js";import"./scrollIntoView-Ca_THshf.js";import"./SelectionIndicator-C6PBn6_W.js";import"./useDescription-x0L1qKYy.js";import"./ListKeyboardDelegate-BkLJXRXi.js";import"./PressResponder-C3i0cSUD.js";import"./useLocalizedStringFormatter-DWk1Wejp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cis5offQ.js";import"./getScrollParent-nBJbQA_k.js";import"./VisuallyHidden-mePKQ-Q7.js";import"./Button-zWAgsDfI.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bt6bRdGE.js";import"./createLucideIcon-CVtV5ZX2.js";import"./x-qMOEwESg.js";import"./Heading-LkG1oM-b.js";import"./info-DCdVfwlr.js";import"./Popover-Dpya094d.js";import"./useFormValidation-CEtdWlS3.js";import"./useField-hL8cI8qW.js";import"./Form-wzSlB-uy.js";import"./check-BX_7vycp.js";import"./useToggleState-Bu3_HISK.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
