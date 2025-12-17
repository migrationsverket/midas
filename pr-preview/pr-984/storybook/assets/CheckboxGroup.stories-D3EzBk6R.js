import{j as e}from"./iframe-9863yx6x.js";import{C as m}from"./CheckboxGroup-C0MALCIs.js";import{C as p}from"./Checkbox-DPmMryR8.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BVSywb3B.js";import"./utils-BhQ3vlj8.js";import"./clsx-B-dksMZM.js";import"./Text-DtjOYwSN.js";import"./useFocusRing-Ce48MUY0.js";import"./index-DLd0rQU9.js";import"./index-hIuVGS0q.js";import"./clsx-Ciqy0D92.js";import"./Text-xbHrSl7O.js";import"./Label-yLVuVWyr.js";import"./Button-teT3EZQp.js";import"./Hidden-Cu3qX2yN.js";import"./useLabels-CYasyUGC.js";import"./useButton-CsKKQAqC.js";import"./Dialog-B5SyWMQm.js";import"./RSPContexts-BzM22-AV.js";import"./OverlayArrow-C7pCsMzu.js";import"./useResizeObserver-BxPL0cwk.js";import"./useControlledState-Dbpms77R.js";import"./Collection-Di3OkD0q.js";import"./index-CKTGGerH.js";import"./Separator-CDggTgNt.js";import"./SelectionManager-C0j3TdpS.js";import"./useEvent-D-937SH4.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-eewfSWHW.js";import"./useDescription-CYKtSczo.js";import"./ListKeyboardDelegate-DJGCS9dk.js";import"./PressResponder-CukyNEYP.js";import"./useLocalizedStringFormatter-B_pYp1kt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-6NiNjFQ3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wlBhk09R.js";import"./Button-CX3flpTi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DKcIukCd.js";import"./createLucideIcon-DoFpQJ8A.js";import"./x-DcJaNkiM.js";import"./Heading-DHbz02dp.js";import"./info-Ci8FgCFx.js";import"./Popover-CVyUoliT.js";import"./useFormValidation-eTAg9DIf.js";import"./useField-BIJ2mXP4.js";import"./Form-DTt4sDiQ.js";import"./check-DfSoaJvf.js";import"./useToggleState-CP77wEPO.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
