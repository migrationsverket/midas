import{j as e}from"./iframe-BpREUp_n.js";import{C as m}from"./CheckboxGroup-CBHEYsCu.js";import{C as p}from"./Checkbox-DT0FCoE3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CiitnuL9.js";import"./utils-5mnyh4pq.js";import"./clsx-B-dksMZM.js";import"./Text-BIdbVrWu.js";import"./useFocusRing-Di2Wci7-.js";import"./index-CHND_S8B.js";import"./index-DHEjYkx-.js";import"./clsx-Ciqy0D92.js";import"./Text-C8nfs_6S.js";import"./Label-C9keyOg9.js";import"./Button-B1ymHcEs.js";import"./Hidden-C8ihGYRf.js";import"./useLabel-Wrhj3pEV.js";import"./useLabels-Bs18rTxZ.js";import"./useButton-BeSKsTxR.js";import"./Dialog-C1JeGyFD.js";import"./RSPContexts-sGTMeP-x.js";import"./OverlayArrow-CkQvxVKZ.js";import"./useResizeObserver-BFpnlExX.js";import"./useControlledState-DKT2uJC_.js";import"./Collection-BlAMVWTX.js";import"./index-CtCvV0Wr.js";import"./Separator-BMnvam5E.js";import"./SelectionManager-bqm_yQ00.js";import"./useEvent-CddQ6mLp.js";import"./scrollIntoView-BUWi5Scx.js";import"./SelectionIndicator-YXo9fFHY.js";import"./useDescription-CzljX0gb.js";import"./ListKeyboardDelegate-BeX9sJs6.js";import"./PressResponder-Cbo-8b87.js";import"./useLocalizedStringFormatter-DRmhaeY7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DxJps0mT.js";import"./getScrollParent-DtMjsZPo.js";import"./VisuallyHidden-BSeLhscq.js";import"./x-Dwm5AF8c.js";import"./createLucideIcon-Bp1NIHzV.js";import"./useLocalizedStringFormatter-BRvvA8cH.js";import"./Heading-D5qh5wa2.js";import"./Button-B5TSA_w8.js";import"./Button.module-BB7N-cLd.js";import"./info-BCDq_TZK.js";import"./Popover-6t0p2sMQ.js";import"./Form-B8iHgesv.js";import"./useField-CfVPzfjM.js";import"./check-BD_3RDK-.js";import"./useToggleState-CoFiCmCV.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
