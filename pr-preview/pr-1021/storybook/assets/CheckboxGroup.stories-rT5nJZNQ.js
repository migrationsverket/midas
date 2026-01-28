import{j as e}from"./iframe-BUyS91gW.js";import{C as m}from"./CheckboxGroup-rd4T549M.js";import{C as p}from"./Checkbox-BTPM0ImD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CFfhbF8H.js";import"./utils-DtC5DJlv.js";import"./clsx-B-dksMZM.js";import"./Text-BPqpCryx.js";import"./useFocusRing-BaIAxEeU.js";import"./index-fSOK1slO.js";import"./index-BdrDW8xm.js";import"./clsx-Ciqy0D92.js";import"./Text-COkIx5pS.js";import"./Label-C6A868Z3.js";import"./Button-BFrQimfv.js";import"./Hidden-DgRACCJZ.js";import"./useLabels-Tbmfxorq.js";import"./useButton-CnjpyvMJ.js";import"./Dialog-Z0MjxCmS.js";import"./RSPContexts--MjZDMmy.js";import"./OverlayArrow-Y6hr8waV.js";import"./useResizeObserver-t9_jvW0e.js";import"./useControlledState-pY5KefEA.js";import"./Collection-Dh_MMJJ4.js";import"./index-C4j6v36i.js";import"./Separator-Czy8J2sA.js";import"./SelectionManager-BcWkh7qF.js";import"./useEvent-Cv6pNzgP.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CxkyDs28.js";import"./useDescription-BGG01yMW.js";import"./ListKeyboardDelegate-CP2zV0zS.js";import"./PressResponder-CZlPqYD0.js";import"./useLocalizedStringFormatter-DVHPDbxU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COGeTY64.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DWShOfIn.js";import"./Button-Fgf1rOG6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-p_nb56wi.js";import"./createLucideIcon-B-WbV5NM.js";import"./x-DZYUY6bl.js";import"./Heading-BY0o0N8u.js";import"./info-DXkoRLXy.js";import"./Popover-0CHRPJuo.js";import"./useFormValidation-C60WEHmq.js";import"./useField-DOrPhly4.js";import"./Form-CRbbeAt1.js";import"./check-BAipwjYf.js";import"./useToggleState-DlVTDabw.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
