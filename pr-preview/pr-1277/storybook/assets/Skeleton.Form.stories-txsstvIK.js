import{j as e,l}from"./iframe-BqNGaS3Q.js";import{S as t}from"./Skeleton-SRbUZ4G6.js";import{T as p}from"./TextField-D-oeg_oS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C2owCrBl.js";import"./utils-YRMroG4N.js";import"./FieldError-C9gz52yQ.js";import"./Text-1jSgyZAH.js";import"./useFocusRing-CGkrrHUz.js";import"./index-84uqcsRw.js";import"./index-Vj0nGHdt.js";import"./Text-CJgdTp0n.js";import"./RSPContexts-BStQ6TrK.js";import"./Form-BK4969P0.js";import"./Group-DDpWCvq1.js";import"./Input-DSv9zuHY.js";import"./Hidden-DSU9xJ9h.js";import"./Button-DSR7b1dw.js";import"./useLabel-EeiXtDoW.js";import"./useLabels-adoQ0dml.js";import"./useButton-DOhwhZT1.js";import"./useTextField-CAOKavmj.js";import"./useControlledState-CmrGw6Qp.js";import"./useField-DFaQy0Xo.js";import"./TextField.module-DdivwlC8.js";import"./Label-CI3rFEPo.js";import"./Dialog-B4koJbGS.js";import"./OverlayArrow-D4O3P2k_.js";import"./useResizeObserver-Xrkj96LM.js";import"./Collection-BR8w3g5X.js";import"./index-DYyYHmLM.js";import"./Separator-CIXTBnH2.js";import"./SelectionManager-Daec-eOD.js";import"./useEvent-CbShBTQB.js";import"./scrollIntoView-DqdmP0Ox.js";import"./SelectionIndicator-BTVq9xT9.js";import"./useDescription-qTJacu0G.js";import"./ListKeyboardDelegate-B0AvXnDg.js";import"./PressResponder-C41x452R.js";import"./useLocalizedStringFormatter-Dy-KyAJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3Omskkq.js";import"./getScrollParent-D3JQJWO2.js";import"./VisuallyHidden-Bp1KH-we.js";import"./ModalOverlay-DJsvZrI8.js";import"./x-CxJTxXmL.js";import"./createLucideIcon-DCKEqRJ8.js";import"./useLocalizedStringFormatter-Y9axLppZ.js";import"./Heading-fuBJDnNY.js";import"./Button-o-Kbu0N5.js";import"./Button.module-BB7N-cLd.js";import"./info-Blx3Y7En.js";import"./Popover-BiJ8XDPo.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
