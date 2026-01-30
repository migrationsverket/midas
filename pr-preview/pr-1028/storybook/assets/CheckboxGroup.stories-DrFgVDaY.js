import{j as e}from"./iframe-QCvgx_6y.js";import{C as m}from"./CheckboxGroup-BDa4u9DA.js";import{C as p}from"./Checkbox-BJMMBcw3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-8Gyb2PkQ.js";import"./utils-C1Mk8uEB.js";import"./clsx-B-dksMZM.js";import"./Text-BvPJ8hQK.js";import"./useFocusRing-B0xXDhD6.js";import"./index-B-XgGbbB.js";import"./index-DWf5Hj5q.js";import"./clsx-Ciqy0D92.js";import"./Text-DMQOF3Hl.js";import"./Label-6IgSZlU3.js";import"./Button-BpIMXVxv.js";import"./Hidden-DMidg2Il.js";import"./useLabels-BOXfhA_k.js";import"./useButton-Ciq0-AOg.js";import"./Dialog-CrRitACG.js";import"./RSPContexts-DXnSMn-5.js";import"./OverlayArrow-Ci467ZI8.js";import"./useResizeObserver-CYYCihTH.js";import"./useControlledState-DePuPBqi.js";import"./Collection-C0k5FBtb.js";import"./index-Bvu9lRJ-.js";import"./Separator-BWnHs4uj.js";import"./SelectionManager-zHjCt-B6.js";import"./useEvent-Cxfz3n5z.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DnuZvxPK.js";import"./useDescription-Cvonpwl1.js";import"./ListKeyboardDelegate-BNBe2yba.js";import"./PressResponder-DJOTPI-4.js";import"./useLocalizedStringFormatter-uw_CdbjJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-HY4MpFOo.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-stmDuLKZ.js";import"./Button-ttDsw6E6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-OgryoDOo.js";import"./createLucideIcon-CpnVUy3d.js";import"./x-36BuEWll.js";import"./Heading-CwLsWtxP.js";import"./info-BGfsj2za.js";import"./Popover-Cu6zpQa_.js";import"./useFormValidation-C1cEITOq.js";import"./useField-CbKewwmP.js";import"./Form-IEYrlIsD.js";import"./check-GLCaymJB.js";import"./useToggleState-DpwcKeWW.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
