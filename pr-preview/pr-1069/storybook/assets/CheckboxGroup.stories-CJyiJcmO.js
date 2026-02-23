import{j as e}from"./iframe-NgsVAIE_.js";import{C as m}from"./CheckboxGroup-dXdalln_.js";import{C as p}from"./Checkbox-CeV25LnB.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BYJgixQA.js";import"./utils-BMRDwiWU.js";import"./clsx-B-dksMZM.js";import"./Text-nv-IhAMW.js";import"./useFocusRing-B3_Fq29Y.js";import"./index-DYQAdzyg.js";import"./index-DXaepPOW.js";import"./clsx-Ciqy0D92.js";import"./Text-CLMs0khC.js";import"./Label-CI3AgLhv.js";import"./Button-DTzo6E9X.js";import"./Hidden-CQtKkbQ1.js";import"./useLabels-DCVajOwk.js";import"./useButton-Br4NZV8a.js";import"./Dialog-BvlF9nTc.js";import"./RSPContexts-DHoIcnKb.js";import"./OverlayArrow-Bw8IApUR.js";import"./useResizeObserver-D356BpUm.js";import"./useControlledState-C2hVvUOR.js";import"./Collection-aQtQkema.js";import"./index-BWLTw_OP.js";import"./Separator-Dcmf0abl.js";import"./SelectionManager-3sJFQUFt.js";import"./useEvent-DX4MF0J2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cerm8eE2.js";import"./useDescription-CtpSjBNK.js";import"./ListKeyboardDelegate-DVMZRk3M.js";import"./PressResponder-xLJ_I-Dd.js";import"./useLocalizedStringFormatter-CJOjjMB1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-iTAQqecx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CrY5FCAN.js";import"./Button-CsUdCrvJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_7PwgqK.js";import"./createLucideIcon-DNjUyKXr.js";import"./x-DXvbv7Kd.js";import"./Heading-BBzGGpCy.js";import"./info-nEFu3Z4D.js";import"./Popover-XdEz2vSS.js";import"./useFormValidation-C3jZc8Ny.js";import"./useField-C4md05ju.js";import"./Form-B0wb-2L5.js";import"./check-DebFqx5P.js";import"./useToggleState-BgMF6YHP.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
