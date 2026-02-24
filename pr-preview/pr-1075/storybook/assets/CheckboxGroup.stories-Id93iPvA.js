import{j as e}from"./iframe-DNgg1FE8.js";import{C as m}from"./CheckboxGroup-qhs9c5cT.js";import{C as p}from"./Checkbox-BUMBkfI6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DQujyZQl.js";import"./utils-lRZrmkjH.js";import"./clsx-B-dksMZM.js";import"./Text-DyjqY5so.js";import"./useFocusRing-CtOEjHAH.js";import"./index-Cg_stJjE.js";import"./index-cpnsubof.js";import"./clsx-Ciqy0D92.js";import"./Text-CIh1-RrY.js";import"./Label-C8t048cZ.js";import"./Button-Bmthtb1S.js";import"./Hidden-Or6zpinA.js";import"./useLabels-CUObwPbj.js";import"./useButton-CnjVfFKX.js";import"./Dialog-DnyqDBCt.js";import"./RSPContexts-Cby8FxwW.js";import"./OverlayArrow-BiuXZ36T.js";import"./useResizeObserver-Cm2JSgqk.js";import"./useControlledState-ExeGoWkK.js";import"./Collection-AKYFosX_.js";import"./index-97TM62yl.js";import"./Separator-Cmtj-FNi.js";import"./SelectionManager-BZftP1pO.js";import"./useEvent-Ci6J29Lf.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BZRVe7I8.js";import"./useDescription-BqooZyuI.js";import"./ListKeyboardDelegate-D_doHbCR.js";import"./PressResponder-BUbGQvAC.js";import"./useLocalizedStringFormatter-EtebeTvl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Co0aJutM.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-a7cFrZVC.js";import"./Button-CbrDss5c.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Tx6NcEdu.js";import"./createLucideIcon-DUJhs-7-.js";import"./x-Hdk-5QGi.js";import"./Heading-IU6YGRB6.js";import"./info-CgyYRf93.js";import"./Popover-bt4LtKq8.js";import"./useFormValidation-cbENDbea.js";import"./useField-BxBjhEaP.js";import"./Form-CKvs0swB.js";import"./check-CmIAEeKl.js";import"./useToggleState-CuCszEub.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
