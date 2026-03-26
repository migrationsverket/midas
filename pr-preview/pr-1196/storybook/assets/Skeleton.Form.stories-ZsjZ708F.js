import{j as e,l}from"./iframe-DUmnjMKN.js";import{S as t}from"./Skeleton-Dz92LixC.js";import{T as p}from"./TextField-Brcym12O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BnTyoSwc.js";import"./utils-0xSMeEGm.js";import"./FieldError-0rnN8Sj0.js";import"./Text-CeMQVnHe.js";import"./useFocusRing-CNLfoayx.js";import"./index-DqAa-ger.js";import"./index-B5i8x2Yv.js";import"./Text-CnbD-jnj.js";import"./RSPContexts-QZF1MtLT.js";import"./Form-CMYZ7XKZ.js";import"./Group-CKnMjZ9q.js";import"./Input-Dpw-0U33.js";import"./Hidden-Cfzmra0d.js";import"./Button-6X6Z2oCH.js";import"./useLabel-CcUgjBrh.js";import"./useLabels-DUPDduiv.js";import"./useButton-DCAwdvik.js";import"./useTextField-DCCVHlVZ.js";import"./useControlledState-D6z3aXVM.js";import"./useField-iVKXJziX.js";import"./TextField.module-DdivwlC8.js";import"./Label-CpgbjV-L.js";import"./Dialog-DhQU9Gp8.js";import"./OverlayArrow-CMtbCkYO.js";import"./useResizeObserver-DJBPn2hp.js";import"./Collection-BaHsUj9e.js";import"./index-fxnARNVi.js";import"./Separator-Bqn39AsS.js";import"./SelectionManager-CKBV8ory.js";import"./useEvent-CkK3gQjy.js";import"./scrollIntoView-Cg9djLSg.js";import"./SelectionIndicator-4GZjABHy.js";import"./useDescription-DXN7t0bP.js";import"./ListKeyboardDelegate-DHwJq8xV.js";import"./PressResponder-BWTo06XF.js";import"./useLocalizedStringFormatter-Brx_2IRC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D6XhKofk.js";import"./getScrollParent-BQDHCp3Y.js";import"./VisuallyHidden-Cb4icQhq.js";import"./x-54C-wf8A.js";import"./createLucideIcon-D1JpQBbc.js";import"./useLocalizedStringFormatter-DAICFjeC.js";import"./Heading-C1WgcKve.js";import"./Button-tmoOZgUj.js";import"./Button.module-BB7N-cLd.js";import"./info-BdTxmkNB.js";import"./Popover-B_m60QMD.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
