import{j as e,l}from"./iframe-CKu8C240.js";import{S as t}from"./Skeleton-Bx1B6bk0.js";import{T as p}from"./TextField-BB-YVLo_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-vQOXekWz.js";import"./utils-CLX7J-q0.js";import"./FieldError-BcSOiHDV.js";import"./Text-BIK_Bqtk.js";import"./useFocusRing-IcTt8PE9.js";import"./index-CxrKtYp1.js";import"./index-psXWBm0q.js";import"./Text-B_i6Ec48.js";import"./RSPContexts-BYfsL_eH.js";import"./Form-2G0gdMs3.js";import"./Group-Bha_k1zj.js";import"./Input-DurQgjTr.js";import"./Hidden-C6ArxBUW.js";import"./Button-IlsrLhR8.js";import"./useLabel-MFPilgOm.js";import"./useLabels-CRoKZlxn.js";import"./useButton-g3DD9S56.js";import"./useTextField-BlKDdUv5.js";import"./useControlledState-DDnLcn-b.js";import"./useField-DqmtCAAT.js";import"./TextField.module-DdivwlC8.js";import"./Label-yhvRHLnp.js";import"./Dialog-BHEgxswy.js";import"./OverlayArrow-BcnWWkWt.js";import"./useResizeObserver-N3DCOZNY.js";import"./Collection-DIgITLLQ.js";import"./index-X6seohsz.js";import"./Separator-BxU8eOti.js";import"./SelectionManager-crKVw0Rp.js";import"./useEvent-yXAGKDbR.js";import"./scrollIntoView-BgJofm9P.js";import"./SelectionIndicator-BpVpDmUV.js";import"./useDescription-K8aGsr7r.js";import"./ListKeyboardDelegate-DLOXwcoE.js";import"./PressResponder-B9hl0S5Z.js";import"./useLocalizedStringFormatter-D8TEkIPn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjpYCp_W.js";import"./getScrollParent-BKhUwAVM.js";import"./VisuallyHidden-DpKSD7VN.js";import"./ModalOverlay-COgAxzfv.js";import"./x-BRw1fyzP.js";import"./createLucideIcon-B2wZBV1e.js";import"./useLocalizedStringFormatter-BcHgs7SS.js";import"./Heading-BdP2SFj1.js";import"./Button-OIliGZdS.js";import"./Button.module-BB7N-cLd.js";import"./info-Bbg8-3uQ.js";import"./Popover-1iTyE8xt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
