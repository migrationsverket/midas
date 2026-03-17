import{j as e}from"./iframe-BLfzYH9C.js";import{C as m}from"./CheckboxGroup-D_T8gFFr.js";import{C as p}from"./Checkbox-BQElW8sL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BSEuC_KV.js";import"./utils-D0dfH4vr.js";import"./clsx-B-dksMZM.js";import"./Text-Cc2e18q6.js";import"./useFocusRing-F01J-ZUp.js";import"./index-BEL0ZsXZ.js";import"./index-DhCXTl7z.js";import"./clsx-Ciqy0D92.js";import"./Text-56NGX4CE.js";import"./Label-CRlv_YQO.js";import"./Button-CMX4o17j.js";import"./Hidden-N269CFB0.js";import"./useLabels-Wx4YnUYv.js";import"./useButton-Bx_5EIaY.js";import"./Dialog-K2Yv4GS0.js";import"./RSPContexts-BNbJSQvo.js";import"./OverlayArrow-BP2ncnR4.js";import"./useResizeObserver-CDZGr-1Y.js";import"./useControlledState-BRpuf71A.js";import"./Collection-DFEsajZM.js";import"./index-DtV-80Z9.js";import"./Separator-DO8MgAw5.js";import"./SelectionManager-qSVT5I_Q.js";import"./useEvent-xhNamUK9.js";import"./scrollIntoView-B8nL968g.js";import"./SelectionIndicator-BfekULxp.js";import"./useDescription-Dwgsbzew.js";import"./ListKeyboardDelegate-CaluARbj.js";import"./PressResponder-CBpc36_T.js";import"./useLocalizedStringFormatter-Cc04N7q5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUuqGRqk.js";import"./getScrollParent-pMGfvvbY.js";import"./VisuallyHidden-_5qjtK7j.js";import"./x-C-j_grLj.js";import"./createLucideIcon-CD_jUR-R.js";import"./useLocalizedStringFormatter-mYyUkQYg.js";import"./Heading-tqTcM_ey.js";import"./Button-sSCuqLNu.js";import"./Button.module-BB7N-cLd.js";import"./info-DRpzurts.js";import"./Popover-DElGLT-y.js";import"./useFormValidation-YSQ6LHA7.js";import"./useField-DKtJjQd8.js";import"./Form-cxB3ur0K.js";import"./check-J-IiiAqD.js";import"./useToggleState-DMIXjiMK.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
