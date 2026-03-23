import{j as e,l}from"./iframe-BDBC-eBH.js";import{S as t}from"./Skeleton-KUtzmcaS.js";import{T as d}from"./TextField-CAqqK5Fn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BLcZNrnJ.js";import"./utils-BF3dZFMw.js";import"./FieldError-ATBv1U6u.js";import"./Text-DO7PXPW2.js";import"./useFocusRing-CgfezvW6.js";import"./index-BWNKyBGD.js";import"./index-C54ey478.js";import"./Text-B8jtlyCQ.js";import"./RSPContexts-BqLHknP6.js";import"./Form-DtNN1KWP.js";import"./Group-AOmzFapS.js";import"./Input-DtQ_nr1F.js";import"./Hidden-BOnSBQrS.js";import"./Button-C0bwvCnL.js";import"./useLabels-C2GA6JVF.js";import"./useButton-CdFak1iR.js";import"./useTextField-DIKuKkhg.js";import"./useControlledState-BUM3bHka.js";import"./useField-BV9_GpNs.js";import"./TextField.module-DdivwlC8.js";import"./Label-QGoDMz15.js";import"./Dialog-C57uVoNZ.js";import"./OverlayArrow-YEz0fSIa.js";import"./useResizeObserver-pxKKxM_5.js";import"./Collection-D9GufsRS.js";import"./index-DacEL6WZ.js";import"./Separator-D_PZVkuw.js";import"./SelectionManager-BcCkiuN_.js";import"./useEvent-DajtHI1Q.js";import"./scrollIntoView-DiugVx5R.js";import"./SelectionIndicator-wn9XV9Cs.js";import"./useDescription-BjmAj66h.js";import"./ListKeyboardDelegate-B2SKj4TS.js";import"./PressResponder-Drf7ODE0.js";import"./useLocalizedStringFormatter-DJ0cN-Xn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BNCIq6SV.js";import"./getScrollParent-CCOLkLjE.js";import"./VisuallyHidden-Cj48UhMD.js";import"./x-k_b3OfRX.js";import"./createLucideIcon-B9PoiMSr.js";import"./useLocalizedStringFormatter-C0PyQwpA.js";import"./Heading-Z8tR6iFR.js";import"./Button-z3f5m6Cn.js";import"./Button.module-BB7N-cLd.js";import"./info-DqX_b7pM.js";import"./Popover-al7ioVi7.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
