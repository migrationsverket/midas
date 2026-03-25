import{j as e,l}from"./iframe-XSOdna7V.js";import{S as t}from"./Skeleton-DRwaxNOb.js";import{T as d}from"./TextField-BAxytq_t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CXQenvqR.js";import"./utils-BQ1sxQ0q.js";import"./FieldError-DJsWyzRR.js";import"./Text-DyMLbB4z.js";import"./useFocusRing-BwnMuBvC.js";import"./index-Nnd_sr_d.js";import"./index-CkxN_ckL.js";import"./Text-BAQEtY4I.js";import"./RSPContexts-BflBX7gr.js";import"./Form-CTWBlxaD.js";import"./Group-B_XDYp0_.js";import"./Input-D6C9Havz.js";import"./Hidden-DgkiT7h9.js";import"./Button-Ds4pD6-3.js";import"./useLabels-W70u1liP.js";import"./useButton-CLu9KC4S.js";import"./useTextField-BeCoWKec.js";import"./useControlledState-BswRF_WI.js";import"./useField-C6pHhndQ.js";import"./TextField.module-DdivwlC8.js";import"./Label-vg4X5GDe.js";import"./Dialog-Cn6crBHN.js";import"./OverlayArrow-BxoWX5-h.js";import"./useResizeObserver-CWTeemm1.js";import"./Collection-C6_anv2_.js";import"./index-CXWXM-zz.js";import"./Separator-lmEXsnNB.js";import"./SelectionManager-BigimJCm.js";import"./useEvent-hkKHp_Kw.js";import"./scrollIntoView-CgGayU5o.js";import"./SelectionIndicator-C7LxRp4_.js";import"./useDescription-DahbeNS8.js";import"./ListKeyboardDelegate-CnCFrhkN.js";import"./PressResponder-CfGwkDyE.js";import"./useLocalizedStringFormatter-Pfz8vAph.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-vcscCbKj.js";import"./getScrollParent-C4lNdL8d.js";import"./VisuallyHidden-CsIt9SGg.js";import"./x-BLcWfDLX.js";import"./createLucideIcon-DBCz1Yzx.js";import"./useLocalizedStringFormatter-BcWjRhxv.js";import"./Heading-DOyw__IB.js";import"./Button-C9mugSTA.js";import"./Button.module-BB7N-cLd.js";import"./info-DHz4K9Le.js";import"./Popover-ChR9SvjI.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
