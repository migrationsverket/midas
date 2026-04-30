import{j as e,l}from"./iframe-Bs-4Q0RS.js";import{S as t}from"./Skeleton-jvlhTcg-.js";import{T as p}from"./TextField-Ci_vnU6O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D99_kVpZ.js";import"./utils-D6H3fjwf.js";import"./FieldError-B2Y4IZts.js";import"./Text-DUhY8chK.js";import"./useFocusRing-BPypZ_tc.js";import"./index-6uY4yepA.js";import"./index-BgNIyxhc.js";import"./Text-CODpWWcU.js";import"./RSPContexts-B9ePokfA.js";import"./Form-Blxuo4OH.js";import"./Group-BGL_FGSG.js";import"./Input-DXT5PACK.js";import"./Hidden-DC5u3Uje.js";import"./Button-BRycn86x.js";import"./useLabel-BMAVjmg6.js";import"./useLabels-BCny178P.js";import"./useButton-Cy54odSV.js";import"./useTextField-DiHi25f0.js";import"./useControlledState-DOA-W8fE.js";import"./useField-Y_v01lD_.js";import"./TextField.module-DdivwlC8.js";import"./Label-CMPHbmbT.js";import"./Dialog-CiL_REM4.js";import"./OverlayArrow-9hlSjkZZ.js";import"./useResizeObserver-DGNRViMH.js";import"./Collection-Dq8lZjSa.js";import"./index-D7PC-cg1.js";import"./Separator-BoeZy9yM.js";import"./SelectionManager-P9mBPQZb.js";import"./useEvent-DlRuF4SX.js";import"./scrollIntoView-Dyrx4XX-.js";import"./SelectionIndicator-CJFP_0sY.js";import"./useDescription-uNFQQz6p.js";import"./ListKeyboardDelegate-Ts7Qfl9m.js";import"./PressResponder-BsD4klsq.js";import"./useLocalizedStringFormatter-BiyFB0Ck.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BKwuCbyw.js";import"./getScrollParent-DKOj2UCK.js";import"./VisuallyHidden-D2ZFd25y.js";import"./ModalOverlay-BypXRZox.js";import"./x-DCsDOoGU.js";import"./createLucideIcon-C-ocypBz.js";import"./useLocalizedStringFormatter-aDoo-4ef.js";import"./Heading-kjBpztUM.js";import"./Button-DTSBAwbm.js";import"./Button.module-BFenTVPP.js";import"./info-DjV0ZvUH.js";import"./Popover-arBciGLG.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
