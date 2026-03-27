import{j as e,l}from"./iframe-DDkxC9AE.js";import{S as t}from"./Skeleton-yPXzM39y.js";import{T as p}from"./TextField-hMGTf-zE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bzm0TjtS.js";import"./utils-Bv-3ie4X.js";import"./FieldError-B9fj7azt.js";import"./Text-BtXc1lRV.js";import"./useFocusRing-C43-8fCQ.js";import"./index-BLH1qvEF.js";import"./index-C98fnEDe.js";import"./Text-1G0eP0RO.js";import"./RSPContexts-C5FShT2F.js";import"./Form-CGJqMPHB.js";import"./Group-COxqjzKt.js";import"./Input-DkmOOcYX.js";import"./Hidden-BdbLRp3U.js";import"./Button-CUTFiFAp.js";import"./useLabel-LlSNGQxT.js";import"./useLabels-ClPbn0aQ.js";import"./useButton-B95KM6rf.js";import"./useTextField-ViwtlI3S.js";import"./useControlledState-DDBKKIZJ.js";import"./useField-DdUlwoVZ.js";import"./TextField.module-DdivwlC8.js";import"./Label-WgVKNVE6.js";import"./Dialog-BNgGAs-b.js";import"./OverlayArrow-Cb2dLaVx.js";import"./useResizeObserver-DgRhHGeT.js";import"./Collection-CMDg-C_S.js";import"./index-B-3MKQwG.js";import"./Separator-BGQS8scE.js";import"./SelectionManager-CbRDXdwz.js";import"./useEvent-DM9NFQXa.js";import"./scrollIntoView-BuO0Q3pl.js";import"./SelectionIndicator-D-EQnl1p.js";import"./useDescription-B6KDpjFY.js";import"./ListKeyboardDelegate-BtZE-5Nj.js";import"./PressResponder-BoK0S5_s.js";import"./useLocalizedStringFormatter-em54CWSv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BcDCZZOC.js";import"./getScrollParent-XviTZluJ.js";import"./VisuallyHidden-ZtpMBoq6.js";import"./x-zjzglfs-.js";import"./createLucideIcon-tquE4JOn.js";import"./useLocalizedStringFormatter-DdWGKtAM.js";import"./Heading-Bh678V32.js";import"./Button-nixYBadL.js";import"./Button.module-BB7N-cLd.js";import"./info-Cn5IroR_.js";import"./Popover-ukrCm8JI.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
