import{j as e}from"./iframe-D0l--c6C.js";import{C as m}from"./CheckboxGroup-mvb1064T.js";import{C as p}from"./Checkbox-Co0s2Za5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bk0AsuFn.js";import"./utils-VeCz3m0s.js";import"./clsx-B-dksMZM.js";import"./Text-BpMUK5iu.js";import"./useFocusRing-TJh2D1Hm.js";import"./index-DoExQatV.js";import"./index-RphitS5C.js";import"./clsx-Ciqy0D92.js";import"./Text-evSykvIm.js";import"./Label-8LkrEHlL.js";import"./Button-BerIw-Lw.js";import"./Hidden-BF6VB1MU.js";import"./useLabels-CSsYCRJ9.js";import"./useButton-Dk6hNhi1.js";import"./Dialog-lxRiuV_L.js";import"./RSPContexts-OtAouDzC.js";import"./OverlayArrow-CG4zEYYh.js";import"./useResizeObserver-DCvhUmSc.js";import"./useControlledState-DG9hXw45.js";import"./Collection-Fbt71xYE.js";import"./index-CAkoeHbW.js";import"./Separator-CSB41d5-.js";import"./SelectionManager-DneqIR5T.js";import"./useEvent-G9uvljhU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D_FwF8a6.js";import"./useDescription-Dv4NgNk6.js";import"./ListKeyboardDelegate-VEziE7E2.js";import"./PressResponder-f5Z6KAl0.js";import"./useLocalizedStringFormatter-DPchQlap.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeLJJodF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-EuNheofa.js";import"./Button-D47vYwiU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVxlra1v.js";import"./createLucideIcon-DBbK9uba.js";import"./x-CMJI3hQn.js";import"./Heading-h-TUqqkF.js";import"./info-EOV5rQvt.js";import"./Popover-CRr_QX5c.js";import"./useFormValidation-DKycCepU.js";import"./useField-CkNB1FqH.js";import"./Form-D7_1EBwv.js";import"./check-BiT50775.js";import"./useToggleState-DVw3E8e2.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
