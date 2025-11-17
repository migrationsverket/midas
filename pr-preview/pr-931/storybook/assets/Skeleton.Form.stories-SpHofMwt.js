import{j as e,l}from"./iframe-DAe8TR3I.js";import{S as t}from"./Skeleton-DKmEDjZB.js";import{T as d}from"./TextField-DwCe85ub.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CB9eNbUz.js";import"./utils-BjJkJaoq.js";import"./TextField-CrhNo6xo.js";import"./FieldError-FomvQXyZ.js";import"./Text-C4Ukkj8G.js";import"./useFocusRing-COEuw-4k.js";import"./index-DERiSa9g.js";import"./index-CZrxflW1.js";import"./Text-lURboruh.js";import"./RSPContexts-BT4NOdPg.js";import"./Form-DQrpxsNZ.js";import"./useFormValidation-DKizzSmj.js";import"./Group-CzLS4G1j.js";import"./Input-D_waSoMP.js";import"./Hidden-CuVt48UU.js";import"./Button-Bap4iZb1.js";import"./useLabels-BQ0JFana.js";import"./useButton-Ds14CM6t.js";import"./useTextField-b5n4bgXL.js";import"./useControlledState-C7zn0ZYV.js";import"./useField-CUL872KJ.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-C-YlO0GT.js";import"./Dialog-DaXh7qKp.js";import"./OverlayArrow-CudUoVWb.js";import"./useResizeObserver-BspGrk0j.js";import"./Collection-DdfKSgUR.js";import"./index-CM89hdJV.js";import"./Separator-C503tOgc.js";import"./SelectionManager-CLMXmqkv.js";import"./useEvent-BoiLyQt3.js";import"./scrollIntoView-4cLwSIyR.js";import"./SelectionIndicator-4hvPECne.js";import"./useDescription-B02KBJwN.js";import"./ListKeyboardDelegate-0ISlHZAc.js";import"./PressResponder-BrygAvvx.js";import"./useLocalizedStringFormatter-B3jEwN9p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DlZ57Qi8.js";import"./VisuallyHidden-Cxmbdpe5.js";import"./Button-WqYefckK.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DpMm3nXz.js";import"./createLucideIcon-BbUVc_oI.js";import"./x-U00XHhO5.js";import"./Heading-Driein0P.js";import"./info-XA-NykUB.js";import"./Popover-DtXC2AXP.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
