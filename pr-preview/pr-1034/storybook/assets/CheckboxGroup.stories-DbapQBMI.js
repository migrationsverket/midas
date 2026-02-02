import{j as e}from"./iframe-CROn2D2x.js";import{C as m}from"./CheckboxGroup-DcLZMYMr.js";import{C as p}from"./Checkbox-BgOaTELp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DOqGfxSh.js";import"./utils-BmCdB7DC.js";import"./clsx-B-dksMZM.js";import"./Text-m0OBBvo5.js";import"./useFocusRing-DbrQCD6u.js";import"./index-BApTSzNb.js";import"./index-CojDe_Mf.js";import"./clsx-Ciqy0D92.js";import"./Text-p_fXYEUj.js";import"./Label-CJT1-Uy_.js";import"./Button-rTy-r-bM.js";import"./Hidden-B4kaJ98v.js";import"./useLabels-B2-lRjdq.js";import"./useButton-CtKtHL67.js";import"./Dialog-Cw1fKDHF.js";import"./RSPContexts-BXOPS_Ee.js";import"./OverlayArrow-Deu2MDQU.js";import"./useResizeObserver-B6ynseLj.js";import"./useControlledState-Bvh10bMV.js";import"./Collection-DxKKFJjX.js";import"./index-BoGcMoi7.js";import"./Separator-ytKG-vz9.js";import"./SelectionManager-D69MLAoG.js";import"./useEvent-CCZ-8-DW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeR5295T.js";import"./useDescription-D384wrOJ.js";import"./ListKeyboardDelegate-DOS933sq.js";import"./PressResponder-GNhMtVyH.js";import"./useLocalizedStringFormatter-B4be551O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DInQMJQJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BHGp5XeR.js";import"./Button-tcUqF5wD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDmjJZHt.js";import"./createLucideIcon-BBVnxcWo.js";import"./x-BxhX1Y1g.js";import"./Heading-BOPgGtk2.js";import"./info-oXYOsiXz.js";import"./Popover-jYqU0WYI.js";import"./useFormValidation-CuSVA-Sh.js";import"./useField-BAp4yqKh.js";import"./Form--WL6IsSv.js";import"./check-CRwQC0VZ.js";import"./useToggleState-BN7j948d.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
