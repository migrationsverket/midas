import{j as e}from"./iframe-D-ypYuwn.js";import{C as m}from"./CheckboxGroup-DvL_GnQ3.js";import{C as p}from"./Checkbox-CnMEmB1k.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C0J98PPl.js";import"./utils-DQGhytbb.js";import"./clsx-B-dksMZM.js";import"./Text-BuEv763R.js";import"./useFocusRing-ClaQwJdN.js";import"./index-DHSfPRsN.js";import"./index-DBHvdizX.js";import"./clsx-Ciqy0D92.js";import"./Text-DJIv6PG1.js";import"./Label-BepKlGCv.js";import"./Button-89RGHRHn.js";import"./Hidden-Dz6be0Sh.js";import"./useLabels-kssSLeVE.js";import"./useButton-DhjrBguy.js";import"./Dialog-di-kXyUH.js";import"./RSPContexts-CmOqvCB5.js";import"./OverlayArrow-DCCM0y5p.js";import"./useResizeObserver-B3IJoa9y.js";import"./useControlledState-C653rY7f.js";import"./Collection-BbnMthkp.js";import"./index-BvfrIAUP.js";import"./Separator-1xL4orhw.js";import"./SelectionManager-D3zkJviI.js";import"./useEvent-D3gR2SWY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dy8yIasa.js";import"./useDescription-BE4gCwvi.js";import"./ListKeyboardDelegate-rsQDn0w1.js";import"./PressResponder-Dq_MVEpe.js";import"./useLocalizedStringFormatter-qVUCbyvG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3dGmggM_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D4W03Dkt.js";import"./Button-U4O3N2IF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-rNpKh-Hw.js";import"./createLucideIcon-C4YzC_QF.js";import"./x-8_fCH_nT.js";import"./Heading-BkJ_tAnG.js";import"./info-BKKuJF_q.js";import"./Popover-Q9huNjjx.js";import"./useFormValidation-D6-jghXl.js";import"./useField-lmNM_fT4.js";import"./Form-C8Tr2sr6.js";import"./check-B9Uc6h0f.js";import"./useToggleState-DLHdDa6e.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
