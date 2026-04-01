import{j as e,l}from"./iframe-C_2Po1qD.js";import{S as t}from"./Skeleton-DGz5T_pj.js";import{T as p}from"./TextField-D1JVIIIn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dnul8jDY.js";import"./utils-BoKSmqfj.js";import"./FieldError-g89TDsVb.js";import"./Text-CSVa2wh5.js";import"./useFocusRing-BUXHOBJT.js";import"./index-D4Zi599j.js";import"./index-CUY9Xica.js";import"./Text-DCF_RRxK.js";import"./RSPContexts-BAtJ9VDW.js";import"./Form-DF4m-Gx4.js";import"./Group-B6-48JTq.js";import"./Input-CXKYEgFS.js";import"./Hidden-JqaEh-jr.js";import"./Button-B4BJcFaK.js";import"./useLabel-ZZAqWazw.js";import"./useLabels-DTlsntHT.js";import"./useButton-C9tFcCTE.js";import"./useTextField-DA4h2RDb.js";import"./useControlledState-DD8Y7tdb.js";import"./useField-Q_sOPIFc.js";import"./TextField.module-DdivwlC8.js";import"./Label-tIEjKkLF.js";import"./Dialog-CidQnp22.js";import"./OverlayArrow-B29jE6J_.js";import"./useResizeObserver-DKj0F-0x.js";import"./Collection-sgi7VjZW.js";import"./index-YV5ItWK0.js";import"./Separator-Bl4TmVAK.js";import"./SelectionManager-ChdUGaRL.js";import"./useEvent-BbapqdAS.js";import"./scrollIntoView-BtZvMRNg.js";import"./SelectionIndicator-EiKEOgFF.js";import"./useDescription-01jD8vLc.js";import"./ListKeyboardDelegate-CjdNNn88.js";import"./PressResponder-wiZeBKEZ.js";import"./useLocalizedStringFormatter-DG7dszbR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6xlW7eQ.js";import"./getScrollParent-D4y-S3mv.js";import"./VisuallyHidden-BezuJMNy.js";import"./x-BojtU4Mi.js";import"./createLucideIcon-Cz_UZZWy.js";import"./useLocalizedStringFormatter-DvhmujFD.js";import"./Heading-C_lEIpy5.js";import"./Button-BV8yLb9D.js";import"./Button.module-BB7N-cLd.js";import"./info-DFb3MjHv.js";import"./Popover-BebLy8Sy.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
