import{j as e,l}from"./iframe-C-K27eAl.js";import{S as t}from"./Skeleton-rRsagGW8.js";import{T as d}from"./TextField-BWirpmAA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CyCfFTLT.js";import"./utils-CJaZGGf7.js";import"./FieldError-BgyRuz1D.js";import"./Text-CDT_NlP5.js";import"./useFocusRing-DxSA2Sop.js";import"./index-BKKwvpcz.js";import"./index-DBCMJ7yJ.js";import"./Text-BSrzc_20.js";import"./RSPContexts-BEdbbOnm.js";import"./Form-CLe3G_DV.js";import"./Group-DrDuJs4p.js";import"./Input-DiKPnwSr.js";import"./Hidden-Vwjx6V0Q.js";import"./Button-BT6WGe3E.js";import"./useLabels-bQBwCpKg.js";import"./useButton-UoBuyatd.js";import"./useTextField-DA_Zh3yp.js";import"./useControlledState-BS7oDD3M.js";import"./useField-FtvPERgc.js";import"./TextField.module-DdivwlC8.js";import"./Label-CskIca_U.js";import"./Dialog-Ws6tUo5c.js";import"./OverlayArrow-DsVxBLVn.js";import"./useResizeObserver-dFxkq4bC.js";import"./Collection-BB-uLGwY.js";import"./index-Dm9DVMB2.js";import"./Separator-De9YM2Zt.js";import"./SelectionManager-Xw2EnXx2.js";import"./useEvent-BZmViZJ-.js";import"./scrollIntoView-DCPl_J-b.js";import"./SelectionIndicator-zsTHTAds.js";import"./useDescription-xQJDPJMa.js";import"./ListKeyboardDelegate-Dy1D5xdS.js";import"./PressResponder-7pDQ6t4z.js";import"./useLocalizedStringFormatter-Cnb01dil.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-2g1vnqBv.js";import"./getScrollParent-DeiG1Qzx.js";import"./VisuallyHidden-u6B1l6x2.js";import"./x-BOs9pbax.js";import"./createLucideIcon-3jo47RrT.js";import"./useLocalizedStringFormatter-CVaM3I0e.js";import"./Heading-Bop2F2Rg.js";import"./Button-BIatrZTr.js";import"./Button.module-BB7N-cLd.js";import"./info-83jj1lSj.js";import"./Popover-C9MSxNZ2.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
