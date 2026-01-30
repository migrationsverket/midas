import{j as e}from"./iframe-Ds-nK5jC.js";import{C as m}from"./CheckboxGroup-Bk_L613a.js";import{C as p}from"./Checkbox-DGTe3mNm.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CDeKUF86.js";import"./utils-BWcc9EPK.js";import"./clsx-B-dksMZM.js";import"./Text-D4nZVrIm.js";import"./useFocusRing-DSAS5gOz.js";import"./index-BWszMgV4.js";import"./index-uHsAuulk.js";import"./clsx-Ciqy0D92.js";import"./Text-cOJkqGeS.js";import"./Label-Dnkg1P-G.js";import"./Button-dHl8uENq.js";import"./Hidden-4dstmqQY.js";import"./useLabels-a2jSOYQl.js";import"./useButton-H43OBGIl.js";import"./Dialog-CgtvtU2F.js";import"./RSPContexts-CMueCVj4.js";import"./OverlayArrow-CI4gjp7u.js";import"./useResizeObserver-CtwwyWpt.js";import"./useControlledState-B9M6c-Zi.js";import"./Collection-C010Bm6D.js";import"./index-BBm7PgdT.js";import"./Separator-ChORmL44.js";import"./SelectionManager-DUDgU4NN.js";import"./useEvent-BAAt4FlS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B-qsNA4q.js";import"./useDescription-CfEhRarO.js";import"./ListKeyboardDelegate-ujXyInoy.js";import"./PressResponder-DyEMu65E.js";import"./useLocalizedStringFormatter-CXBhyWlF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Rm77TLpy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BeRc1dUa.js";import"./Button-CQLlpX_U.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpSHxtYR.js";import"./createLucideIcon-xY7bNo4d.js";import"./x-DNleDvIs.js";import"./Heading-BpINEwCz.js";import"./info-w0ic-h3w.js";import"./Popover-BBEs0hju.js";import"./useFormValidation-MJDJC9ZJ.js";import"./useField-CFPmWj_n.js";import"./Form-BBB5hpq1.js";import"./check-DdBWWYC9.js";import"./useToggleState-IL8jF9ip.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
