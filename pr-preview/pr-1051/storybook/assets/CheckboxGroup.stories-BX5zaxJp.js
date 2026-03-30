import{j as e}from"./iframe-B8dODSM7.js";import{C as m}from"./CheckboxGroup-CDZYvaCW.js";import{C as p}from"./Checkbox-BQIEVqMG.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cs03i1ku.js";import"./utils-DKhPm4Nt.js";import"./clsx-B-dksMZM.js";import"./Text-CIOHcKum.js";import"./useFocusRing-DKQkST-P.js";import"./index-pILuv3eo.js";import"./index-DvxVvxvs.js";import"./clsx-Ciqy0D92.js";import"./Text-DyDE_nMf.js";import"./Label-CcSiKov5.js";import"./Button-CEvb2_wi.js";import"./Hidden-DILkQdFQ.js";import"./useLabel-CeFvsTDB.js";import"./useLabels-Cr6sIa7x.js";import"./useButton-C2UEY7aL.js";import"./Dialog-B_IPHI25.js";import"./RSPContexts-CqliKkX6.js";import"./OverlayArrow-iZilqROL.js";import"./useResizeObserver-lFGlU8Zd.js";import"./useControlledState-DhH3lMF6.js";import"./Collection-DI0lZ1-t.js";import"./index-Fa2TZhX8.js";import"./Separator-DyZDnAPD.js";import"./SelectionManager-DJWKkXrJ.js";import"./useEvent-DkI1NEZn.js";import"./scrollIntoView-Dkn0W1jL.js";import"./SelectionIndicator-CEBIgYAc.js";import"./useDescription-BO0eKfud.js";import"./ListKeyboardDelegate-HodYo91a.js";import"./PressResponder-CrVRS0fT.js";import"./useLocalizedStringFormatter-ByMwlETP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ci6NBJrq.js";import"./getScrollParent-aaxOorIB.js";import"./VisuallyHidden-Csntf2Wj.js";import"./x-DX19Ur0q.js";import"./createLucideIcon-7ECh1RW_.js";import"./useLocalizedStringFormatter-BpbsYO7v.js";import"./Heading-CE4rG5va.js";import"./Button-BGOYT3gN.js";import"./Button.module-BB7N-cLd.js";import"./info-Ew5PV_dG.js";import"./Popover-Y7mRhi7q.js";import"./Form-fEW4gPte.js";import"./useField-BdHAuGxs.js";import"./check-DqTzPJ7e.js";import"./useToggleState-ip32yeQs.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
