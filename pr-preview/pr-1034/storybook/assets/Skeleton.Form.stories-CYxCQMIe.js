import{j as e,l}from"./iframe-CROn2D2x.js";import{S as t}from"./Skeleton-Ce3mjb2G.js";import{T as p}from"./TextField-DdID_EX0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Br27akGx.js";import"./utils-BmCdB7DC.js";import"./TextField-Ch5ijD3g.js";import"./FieldError-DOqGfxSh.js";import"./Text-m0OBBvo5.js";import"./useFocusRing-DbrQCD6u.js";import"./index-BApTSzNb.js";import"./index-CojDe_Mf.js";import"./Text-p_fXYEUj.js";import"./RSPContexts-BXOPS_Ee.js";import"./Form--WL6IsSv.js";import"./useFormValidation-CuSVA-Sh.js";import"./Group-Bfzbyhsx.js";import"./Input-C5egksKm.js";import"./Hidden-B4kaJ98v.js";import"./Button-rTy-r-bM.js";import"./useLabels-B2-lRjdq.js";import"./useButton-CtKtHL67.js";import"./useTextField-CSeCUWcb.js";import"./useControlledState-Bvh10bMV.js";import"./useField-BAp4yqKh.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CJT1-Uy_.js";import"./Dialog-Cw1fKDHF.js";import"./OverlayArrow-Deu2MDQU.js";import"./useResizeObserver-B6ynseLj.js";import"./Collection-DxKKFJjX.js";import"./index-BoGcMoi7.js";import"./Separator-ytKG-vz9.js";import"./SelectionManager-D69MLAoG.js";import"./useEvent-CCZ-8-DW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeR5295T.js";import"./useDescription-D384wrOJ.js";import"./ListKeyboardDelegate-DOS933sq.js";import"./PressResponder-GNhMtVyH.js";import"./useLocalizedStringFormatter-B4be551O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DInQMJQJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BHGp5XeR.js";import"./Button-tcUqF5wD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDmjJZHt.js";import"./createLucideIcon-BBVnxcWo.js";import"./x-BxhX1Y1g.js";import"./Heading-BOPgGtk2.js";import"./info-oXYOsiXz.js";import"./Popover-jYqU0WYI.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
