import{j as e}from"./iframe-DRirf2Ys.js";import{C as m}from"./CheckboxGroup-BfYJvB4F.js";import{C as p}from"./Checkbox-CIn_PaKR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Ciz7MEhw.js";import"./utils-BC-9mfhg.js";import"./clsx-B-dksMZM.js";import"./Text-haWdKGMd.js";import"./useFocusRing-CJQJQ7PW.js";import"./index-hP6JGvby.js";import"./index-Drx8rBd8.js";import"./clsx-Ciqy0D92.js";import"./Text-Cz4JRdhg.js";import"./Label-BRVYtrrj.js";import"./Button-kU1Por_z.js";import"./Hidden-lhPivziv.js";import"./useLabels-Ppos1hYn.js";import"./useButton-Dy4vSFCX.js";import"./Dialog-BDYinEiU.js";import"./RSPContexts-BWwgVI6N.js";import"./OverlayArrow-B_yQtPZQ.js";import"./useResizeObserver-BxtaWTNE.js";import"./useControlledState-CQDYwQIF.js";import"./Collection-BCdofZC4.js";import"./index-D1bX05Ry.js";import"./Separator-BxU1rSEm.js";import"./SelectionManager-Ba3R1H4j.js";import"./useEvent-D0f8TLM5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3e4FMOUn.js";import"./useDescription-DxWGvbMR.js";import"./ListKeyboardDelegate-BniJMMCb.js";import"./PressResponder-DfALHT1f.js";import"./useLocalizedStringFormatter-Czvg_dgK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnmLPyae.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DEc4J7Zj.js";import"./Button-Bbxz1V1l.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C7yUVNG5.js";import"./createLucideIcon-pFgQkBEQ.js";import"./x-DfCsYV9b.js";import"./Heading-BFC8r0ji.js";import"./info-BCZkUAJk.js";import"./Popover-BDl5_dY2.js";import"./useFormValidation-Dl6NIxjf.js";import"./useField-CZKO8xFK.js";import"./Form-DDOtMx66.js";import"./check-CjdLraVn.js";import"./useToggleState-BBu3mmRL.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
