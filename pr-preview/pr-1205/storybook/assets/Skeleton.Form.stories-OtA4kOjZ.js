import{j as e,l}from"./iframe-DJnBo8qx.js";import{S as t}from"./Skeleton-ag8so4FZ.js";import{T as p}from"./TextField-BQkT__sY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D0bb3DJN.js";import"./utils-gWiD0ns3.js";import"./FieldError-C3hrQaHN.js";import"./Text-C5-sBZVY.js";import"./useFocusRing-Bp7BshOu.js";import"./index-DrJKcisO.js";import"./index-BBWpXqfQ.js";import"./Text-CwlODUSS.js";import"./RSPContexts-QhaJtN54.js";import"./Form-Bm_BfevM.js";import"./Group-BQbxhg7e.js";import"./Input-CJ2SSYHL.js";import"./Hidden-DalgADPi.js";import"./Button-DeGMYH9f.js";import"./useLabel-CQ_H6yZ6.js";import"./useLabels-CCJcnJYo.js";import"./useButton-CF9JOIlT.js";import"./useTextField-COYMWqIJ.js";import"./useControlledState-DGw5Me1h.js";import"./useField-Qw0L00q1.js";import"./TextField.module-DdivwlC8.js";import"./Label-BS-6xxDi.js";import"./Dialog-CkKjDja5.js";import"./OverlayArrow-CW1sQvWA.js";import"./useResizeObserver-BJda_aia.js";import"./Collection-Cyi4sj4g.js";import"./index-CDN3X01D.js";import"./Separator-B_h55PTT.js";import"./SelectionManager-Cz5XDWSZ.js";import"./useEvent-BgibXCRa.js";import"./scrollIntoView-CmRBaB-g.js";import"./SelectionIndicator-bVow53O0.js";import"./useDescription-CfwfTgOd.js";import"./ListKeyboardDelegate-BScgO_Ta.js";import"./PressResponder-DesJJGWg.js";import"./useLocalizedStringFormatter-CZN4d7Nk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yCPDjLRE.js";import"./getScrollParent-BBgGqXJk.js";import"./VisuallyHidden-XMqtKg57.js";import"./x-DoHdhEkA.js";import"./createLucideIcon-mT6cpvLo.js";import"./useLocalizedStringFormatter-DDDranTe.js";import"./Heading-rY_Xr7Np.js";import"./Button-DxRtiFp7.js";import"./Button.module-BB7N-cLd.js";import"./info-BwG3xnJT.js";import"./Popover-Bc0rU4lY.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
