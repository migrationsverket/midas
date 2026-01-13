import{j as e}from"./iframe-CvVfZMju.js";import{C as m}from"./CheckboxGroup-C8HDqmIA.js";import{C as p}from"./Checkbox-C8mrH0Hx.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-AGivlbvG.js";import"./utils-DWYdFJkQ.js";import"./clsx-B-dksMZM.js";import"./Text-BvmLx5Jg.js";import"./useFocusRing-C0LhZ78-.js";import"./index-D7941otZ.js";import"./index-Pshk4pH4.js";import"./clsx-Ciqy0D92.js";import"./Text-Bu-h3aGF.js";import"./Label-CH95ECVi.js";import"./Button-KsvyKPrf.js";import"./Hidden-BEb8_Y6y.js";import"./useLabels-CsWyYT6N.js";import"./useButton-DjfUH4ri.js";import"./Dialog-CLJNDqU0.js";import"./RSPContexts-BqDomoxP.js";import"./OverlayArrow-DCWn89kD.js";import"./useResizeObserver-CPf7A2Ov.js";import"./useControlledState-CMGDh5hi.js";import"./Collection-BDO9FB8m.js";import"./index-Be3mLtxT.js";import"./Separator-J9VHNJ6_.js";import"./SelectionManager-CrGONw2O.js";import"./useEvent-BGpVX2rC.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgJevlzU.js";import"./useDescription-CKnbeb1h.js";import"./ListKeyboardDelegate-Cy2WhaSY.js";import"./PressResponder-DE_lcgFv.js";import"./useLocalizedStringFormatter-BRwLdyH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKu9FEZm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CuujIUMO.js";import"./Button-gfNGwmaI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-JqvndrtF.js";import"./createLucideIcon-CL0pNCrf.js";import"./x-B5IewCPb.js";import"./Heading-C9B0QyBV.js";import"./info-B9anievW.js";import"./Popover-BIZycej8.js";import"./useFormValidation-BwiqiVUx.js";import"./useField-D7GoXrYm.js";import"./Form-DfNI4Fyj.js";import"./check-CI-8h2dG.js";import"./useToggleState-CBr5iG_d.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
