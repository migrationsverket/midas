import{j as e}from"./iframe-BmoSYdAA.js";import{C as m}from"./CheckboxGroup-qcBc6t3l.js";import{C as p}from"./Checkbox-DMyiMY7u.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BD5okbww.js";import"./utils-C-CBKXNz.js";import"./clsx-B-dksMZM.js";import"./Text-DaUdSSAr.js";import"./useFocusRing-DvskDHXD.js";import"./index-BdUd5uZZ.js";import"./index-0cr7ctwJ.js";import"./clsx-Ciqy0D92.js";import"./Text-tl12LCyE.js";import"./Label-XeIu9q9V.js";import"./Button-BKQTUCQ9.js";import"./Hidden-2CP7YcQc.js";import"./useLabels-CxCxcB2N.js";import"./useButton-Z7anNymb.js";import"./Dialog-DWb-ECes.js";import"./RSPContexts-D_jCzI74.js";import"./OverlayArrow-CDwZqS2q.js";import"./useResizeObserver-ORfsR1W_.js";import"./useControlledState-Dzoa7zU0.js";import"./Collection-DlymQ8vt.js";import"./index-FM1lrI3L.js";import"./Separator-Bso1CzNS.js";import"./SelectionManager-B0cVCThB.js";import"./useEvent-DrpJQgWB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Vt9L8OqV.js";import"./useDescription-CyzvknZ3.js";import"./ListKeyboardDelegate-Brmnx0qe.js";import"./PressResponder-1rkbxvho.js";import"./useLocalizedStringFormatter-DBGXY-0J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C937BOdE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-sKibH-Cd.js";import"./Button-Br3AxFcp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bc48yrq4.js";import"./createLucideIcon-B0lPyAXK.js";import"./x-B-e_Lia6.js";import"./Heading-Da3dL7Es.js";import"./info-DaiBcEhh.js";import"./Popover-Dtx8nB1p.js";import"./useFormValidation-UTtv_AD5.js";import"./useField-BpAP4iAL.js";import"./Form-8jdVhm3z.js";import"./check-BABKWCdC.js";import"./useToggleState-CCJ09dOn.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
