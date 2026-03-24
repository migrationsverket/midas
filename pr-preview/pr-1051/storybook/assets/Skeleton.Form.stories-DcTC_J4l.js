import{j as e,l}from"./iframe-CdQtBTvN.js";import{S as t}from"./Skeleton-GoL1hJsi.js";import{T as d}from"./TextField-B1Gf52S5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-COjj40BA.js";import"./utils-hCPuu9ww.js";import"./FieldError-Ds80xhU5.js";import"./Text-BlVIijGN.js";import"./useFocusRing-Dx5ENljC.js";import"./index-BqBvBc_L.js";import"./index-CBjbBfBt.js";import"./Text-DG4x08uA.js";import"./RSPContexts-GhAFq0Kb.js";import"./Form-BVXAN9pd.js";import"./Group-233jJZbh.js";import"./Input-BVDlt9KU.js";import"./Hidden-VZvKjJAN.js";import"./Button-C9FUZnpG.js";import"./useLabels-DmlxY5xa.js";import"./useButton-BMciKW0o.js";import"./useTextField-GzIj8dQh.js";import"./useControlledState-CDyRnnpP.js";import"./useField-Cl9d5qMs.js";import"./TextField.module-DdivwlC8.js";import"./Label-D42qgx4n.js";import"./Dialog-Bb1qFCY4.js";import"./OverlayArrow-DbhGeY2H.js";import"./useResizeObserver-DgjerLpp.js";import"./Collection-D73FRwXS.js";import"./index-Bj3FFH3o.js";import"./Separator-CZ-OXpps.js";import"./SelectionManager-BDRFpfbc.js";import"./useEvent-DC4JEHXI.js";import"./scrollIntoView-BM5ZBaG8.js";import"./SelectionIndicator-CK_97_IP.js";import"./useDescription-WCfTXBDc.js";import"./ListKeyboardDelegate-HOWkR3EC.js";import"./PressResponder-CSYeiWSa.js";import"./useLocalizedStringFormatter-CAvIyCZj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dvo86yv9.js";import"./getScrollParent-EH2M_cTQ.js";import"./VisuallyHidden-C2L8poid.js";import"./x-D3W8hHwK.js";import"./createLucideIcon-TCf9LglA.js";import"./useLocalizedStringFormatter-BjshCCmP.js";import"./Heading-R-ZLjnfx.js";import"./Button-NsfQzJOD.js";import"./Button.module-BB7N-cLd.js";import"./info-BNarahPM.js";import"./Popover-D3rKDLZ3.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
