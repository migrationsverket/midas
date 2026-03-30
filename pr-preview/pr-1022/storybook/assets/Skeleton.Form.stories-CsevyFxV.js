import{j as e,l}from"./iframe-BCVsy88N.js";import{S as t}from"./Skeleton-BsZkTqvf.js";import{T as p}from"./TextField-B2dWIrJj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BT13uGeZ.js";import"./utils-C-OmHNLm.js";import"./FieldError-DIexkAgJ.js";import"./Text-CJD2elUx.js";import"./useFocusRing-eWhXbche.js";import"./index-BwfJQ9F8.js";import"./index-cJVZ5RXC.js";import"./Text-C7Bb6ebF.js";import"./RSPContexts-BeHTEqOC.js";import"./Form-Dy6Ga4aj.js";import"./Group-DP4wot9I.js";import"./Input-CMX_k8Dp.js";import"./Hidden-CN3dXu03.js";import"./Button-Kvyi1RRX.js";import"./useLabel-BbZWMYwa.js";import"./useLabels-COZKzSvp.js";import"./useButton-DfNnGNTV.js";import"./useTextField-rssmsnsn.js";import"./useControlledState-jD-tqQdO.js";import"./useField-ClRCUqkF.js";import"./TextField.module-DdivwlC8.js";import"./Label-DBJKyZzi.js";import"./Dialog-BTlZm9xe.js";import"./OverlayArrow-CfsAUW8K.js";import"./useResizeObserver-Cju_kbVb.js";import"./Collection-D8dxrVCb.js";import"./index-ByIdwhbP.js";import"./Separator-DcMCi0QZ.js";import"./SelectionManager-DfTkzoNg.js";import"./useEvent-D0oKdA7w.js";import"./scrollIntoView-BpYW2Snh.js";import"./SelectionIndicator-Eo-pa4gg.js";import"./useDescription-BypmPDUq.js";import"./ListKeyboardDelegate-Bw34GQYt.js";import"./PressResponder-BJ_dW21L.js";import"./useLocalizedStringFormatter-atdiyxXD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzNdqX9T.js";import"./getScrollParent-0ANyO0oI.js";import"./VisuallyHidden-D6HKc_n0.js";import"./x-CDS6gFVI.js";import"./createLucideIcon-D1oE0F07.js";import"./useLocalizedStringFormatter-mDxu21Fd.js";import"./Heading-bh_ln7Ke.js";import"./Button-VV8KlKzK.js";import"./Button.module-BFenTVPP.js";import"./info-n556K2_x.js";import"./Popover-CaabIHGa.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
