import{j as e}from"./iframe-CtFwdAsv.js";import{C as m}from"./CheckboxGroup-7nArACAe.js";import{C as p}from"./Checkbox-HMXMyHYV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-rC39neWl.js";import"./utils-v3QsXCFb.js";import"./clsx-B-dksMZM.js";import"./Text-DLLk5-WP.js";import"./useFocusRing-4dXyLk97.js";import"./index-CC8QKcxH.js";import"./index-B04nzdf1.js";import"./clsx-Ciqy0D92.js";import"./Text-CbKa99gG.js";import"./Label-D6FRgveb.js";import"./Button-Dsas9bQI.js";import"./Hidden-DVSOiNkA.js";import"./number-DfkVkf0F.js";import"./useLabels-Ot2JOOvi.js";import"./useButton-pKf2Kj0y.js";import"./Dialog-lO9NJCnF.js";import"./RSPContexts-0m4AhG_r.js";import"./OverlayArrow-D_3BhxPL.js";import"./useResizeObserver-DLhsAarq.js";import"./useControlledState-CWjJjGF9.js";import"./Collection-ClpHBUlT.js";import"./index-Cl36apJ0.js";import"./Separator-s5a5IZMN.js";import"./SelectionManager-BYG4l7zL.js";import"./useEvent-cGdcjq2p.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CGJoHFxL.js";import"./useDescription-ByveFpkP.js";import"./ListKeyboardDelegate-CIuyyYw2.js";import"./PressResponder-ukHD2BbP.js";import"./useLocalizedStringFormatter-BBunPQfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DV27w9Rl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-rVLj1Hba.js";import"./Modal-DMsjUhVx.js";import"./Button-zyqmdcUk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYNQKoGb.js";import"./createLucideIcon-DtbaAKiS.js";import"./x-CZS7rfMM.js";import"./Heading-D42QPCss.js";import"./info-Bd14-v8m.js";import"./Popover-BnsNwADp.js";import"./useFormValidation-B9JoZcd_.js";import"./useField-C2a_Lo9C.js";import"./Form-yWD9DB3c.js";import"./check-G9qeHkPt.js";import"./useToggleState-CFzrgmFZ.js";const mr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},t={args:{showSelectAll:!0}},a={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const cr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,a as SelectAllInteraction,t as ShowSelectAll,cr as __namedExportsOrder,mr as default};
