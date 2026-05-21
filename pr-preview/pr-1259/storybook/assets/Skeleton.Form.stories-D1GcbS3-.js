import{j as e,l}from"./iframe-BtoRqfbN.js";import{S as t}from"./Skeleton-C6fXM-lf.js";import{T as p}from"./TextField-B1xGogUn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BM3tcHCh.js";import"./utils-D3T2l2Oh.js";import"./FieldError-B4waYEQL.js";import"./Text-x1siHFmD.js";import"./useFocusRing-CPJmXdz2.js";import"./index-CLPTlYyH.js";import"./index-Wh2LXb7r.js";import"./Text-UZHsyA5K.js";import"./RSPContexts-DkTToRLK.js";import"./Form-TovplDMB.js";import"./Group-DGWr_ank.js";import"./Input-D3aAlazw.js";import"./Hidden-DmNqBwSB.js";import"./Button-D0NLyYor.js";import"./useLabel-BusboG5C.js";import"./useLabels-DkCdbV7o.js";import"./useButton-CAXNDaeV.js";import"./useTextField-Opkbo0Gs.js";import"./useControlledState-acke6wY8.js";import"./useField-BmyqTXhe.js";import"./TextField.module-DdivwlC8.js";import"./Label-DK3Co7m-.js";import"./Dialog-lusSOXwC.js";import"./OverlayArrow-Dxt346hx.js";import"./useResizeObserver-musF9ULC.js";import"./Collection-BxhFXTj7.js";import"./index-VivUuEmv.js";import"./Separator-C3z6jLVu.js";import"./SelectionManager-BhME_TyD.js";import"./useEvent-DfABwBS6.js";import"./scrollIntoView-DKC0Wlwj.js";import"./SelectionIndicator-DN-f_s8Q.js";import"./useDescription-Dme_kk-C.js";import"./ListKeyboardDelegate-CiLABnWW.js";import"./PressResponder-DYHSOAMr.js";import"./useLocalizedStringFormatter-CoozzIhe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CuqN4n3N.js";import"./getScrollParent-D4tvg9G7.js";import"./VisuallyHidden-DH8wexDg.js";import"./ModalOverlay-cbu2Qy_Z.js";import"./x-DBRu_Ryo.js";import"./createLucideIcon-BGwZIy7f.js";import"./useLocalizedStringFormatter-BRT64aav.js";import"./Heading-CYWasPPU.js";import"./Button-Dz0YcLF0.js";import"./Button.module-BB7N-cLd.js";import"./info-Bb57Bs3j.js";import"./Popover-382lm4tK.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
