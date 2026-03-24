import{j as e,l}from"./iframe-B5fT8W8B.js";import{S as t}from"./Skeleton-B8uOz4cD.js";import{T as d}from"./TextField-C61RH83B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C-zXE4De.js";import"./utils-Bh7KGz6i.js";import"./FieldError-C1zhQcfr.js";import"./Text-DOeKj6x7.js";import"./useFocusRing-BgTsLm0m.js";import"./index-CkX7KbtT.js";import"./index-C5IsVOl0.js";import"./Text-DNRTdsIF.js";import"./RSPContexts-D1Lpp2lJ.js";import"./Form-g6SjH7Xy.js";import"./Group-DnN7o3-X.js";import"./Input-Be8NFDJ3.js";import"./Hidden-DB3eEGqq.js";import"./Button-DoDt4li8.js";import"./useLabels-D60PMjBU.js";import"./useButton-CPqG-nUq.js";import"./useTextField-CUd_Ep5z.js";import"./useControlledState-BGmHapEN.js";import"./useField-BJB193JT.js";import"./TextField.module-DdivwlC8.js";import"./Label-DFOzbAi-.js";import"./Dialog-DvKYvcjN.js";import"./OverlayArrow-BNkBoj7e.js";import"./useResizeObserver-BXLfxhXd.js";import"./Collection-D0ciEbnT.js";import"./index-XlgYwMjJ.js";import"./Separator-CaeDAGZa.js";import"./SelectionManager-EQR1HDvb.js";import"./useEvent-DJwUrGHD.js";import"./scrollIntoView-B84U33Mc.js";import"./SelectionIndicator-CF8GTE7k.js";import"./useDescription-_hkkBgKI.js";import"./ListKeyboardDelegate-BMePGJGy.js";import"./PressResponder-Bmoe4W4a.js";import"./useLocalizedStringFormatter-CcytJjyB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BxiC26xr.js";import"./getScrollParent-DN2Ny2rG.js";import"./VisuallyHidden-DiGmQZwe.js";import"./x-G9O7KDBX.js";import"./createLucideIcon-ChldPQr9.js";import"./useLocalizedStringFormatter-CVUeiCFD.js";import"./Heading-Lp6ZoSYc.js";import"./Button-Cbu0zB47.js";import"./Button.module-BB7N-cLd.js";import"./info-DIbkjynN.js";import"./Popover-DYl4vHjt.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
