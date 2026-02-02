import{j as e}from"./iframe-BXi2DpH_.js";import{C as m}from"./CheckboxGroup-WZ_qXl0z.js";import{C as p}from"./Checkbox-KDrz_lgJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DAoi_8t4.js";import"./utils-UrQDo-WA.js";import"./clsx-B-dksMZM.js";import"./Text-DIwVLx6b.js";import"./useFocusRing-Bp5DTDVQ.js";import"./index-17Nv7B4H.js";import"./index-D7HPdSS2.js";import"./clsx-Ciqy0D92.js";import"./Text-BFe5T1zy.js";import"./Label-CF2DY3e2.js";import"./Button-8PW_0Mpf.js";import"./Hidden-D0eHPLgG.js";import"./useLabels-CzvTrbyR.js";import"./useButton-Dhmm4yPW.js";import"./Dialog-DmEdrapt.js";import"./RSPContexts-DF_vtBl9.js";import"./OverlayArrow-Dz5mBhZ3.js";import"./useResizeObserver-CixoyZVD.js";import"./useControlledState-DQtA95JU.js";import"./Collection-_V21lTNJ.js";import"./index-CoSyIhxP.js";import"./Separator-CtGHVuQj.js";import"./SelectionManager-DQXRLc7X.js";import"./useEvent-Ct55YmLp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DlNvi_i_.js";import"./useDescription-CvRpVEPx.js";import"./ListKeyboardDelegate-d2r8cszs.js";import"./PressResponder-CsT0V5Ov.js";import"./useLocalizedStringFormatter-CsL1ogvc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DSjretDM.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cw60I5mf.js";import"./Button-kzBXQJaB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D1ci79sH.js";import"./createLucideIcon-tldxpU3K.js";import"./x-mQO-tW53.js";import"./Heading-BbyFkAv1.js";import"./info-B_599L4_.js";import"./Popover-D4tPeF9_.js";import"./useFormValidation-Dc7GaW6e.js";import"./useField-DeikWbC4.js";import"./Form-D8qdwCWa.js";import"./check-Bk4SvjEK.js";import"./useToggleState-Btry2CtA.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
