import{j as e}from"./iframe-CNQjlvDm.js";import{C as m}from"./CheckboxGroup-C3X3_SZF.js";import{C as p}from"./Checkbox-95z-QO_l.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B77Pd3sF.js";import"./utils-gQ4yd-Ab.js";import"./clsx-B-dksMZM.js";import"./Text-CBKz5-Bc.js";import"./useFocusRing-6KaOFFld.js";import"./index-BAocd020.js";import"./index-Crk6Oovq.js";import"./clsx-Ciqy0D92.js";import"./Text-_2-H1EYs.js";import"./Label-D33bRIfp.js";import"./Button-Bq-mABfS.js";import"./Hidden-CKgMcecd.js";import"./useLabels-Bfeh6CAt.js";import"./useButton-C5sXC89g.js";import"./Dialog-B1H_-A6r.js";import"./RSPContexts-ZpwQ7nh7.js";import"./OverlayArrow-DtDPjsf5.js";import"./useResizeObserver-pDTrh_aR.js";import"./useControlledState-Cw34tQo_.js";import"./Collection-DIjDhtq1.js";import"./index-B3BEo6A6.js";import"./Separator--1fXuolt.js";import"./SelectionManager-CNUg_EDX.js";import"./useEvent-BVIAA-zB.js";import"./scrollIntoView-GpU6uT5D.js";import"./SelectionIndicator-9b2vx5r8.js";import"./useDescription-DhRtkqqX.js";import"./ListKeyboardDelegate-BpGS_WAt.js";import"./PressResponder-FiW4JgQ7.js";import"./useLocalizedStringFormatter-BAx4OKHg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CSope_Cn.js";import"./VisuallyHidden-CkZ7QXN2.js";import"./Button-DKj7SgkX.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CuiX0-xA.js";import"./createLucideIcon-CLo-1QQP.js";import"./x-gQKg2dFZ.js";import"./Heading-Cc7GuOtf.js";import"./info-BBo0T8LW.js";import"./Popover-CL60AxRn.js";import"./useFormValidation-D93gSj4q.js";import"./useField-1JlohsQ1.js";import"./Form-CowfI73D.js";import"./check-DG43t2KX.js";import"./useToggleState-CoWbcUyF.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
