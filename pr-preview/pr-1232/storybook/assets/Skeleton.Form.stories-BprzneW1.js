import{j as e,l}from"./iframe-C1MoIoFQ.js";import{S as t}from"./Skeleton-tiRyNU5P.js";import{T as p}from"./TextField-BsFXH_m1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D5iP0a1A.js";import"./utils-Dd9KjGc9.js";import"./FieldError-xLLnQN0i.js";import"./Text-BxVOdM76.js";import"./useFocusRing-BDQMY-6N.js";import"./index-C81WqCTC.js";import"./index-CwePtk0Z.js";import"./Text-BZ5m3zwb.js";import"./RSPContexts-rTZVWH0H.js";import"./Form-BgY7Eb4J.js";import"./Group-jP0NGuCQ.js";import"./Input-ChqxD6Ro.js";import"./Hidden-CQA8_prX.js";import"./Button-Bt2VcdxR.js";import"./useLabel-BXOmRBqN.js";import"./useLabels-ONT18L0d.js";import"./useButton-kMH8ZZTp.js";import"./useTextField-DQqQ2u1P.js";import"./useControlledState-BDHCwT0f.js";import"./useField-rPcU4U3B.js";import"./TextField.module-DdivwlC8.js";import"./Label-BwhU61YZ.js";import"./Dialog-Dy1cg48O.js";import"./OverlayArrow-BKYPGnW-.js";import"./useResizeObserver-BSWda7aC.js";import"./Collection-C2HKqn-L.js";import"./index-rZNXYI3D.js";import"./Separator-Dsdpgh1T.js";import"./SelectionManager-GFTd_q9E.js";import"./useEvent-9VQOaFMz.js";import"./scrollIntoView-CV3jjMt7.js";import"./SelectionIndicator-TFXYChPQ.js";import"./useDescription-CWsbdymE.js";import"./ListKeyboardDelegate-CqDetXlF.js";import"./PressResponder-xfnIK1TV.js";import"./useLocalizedStringFormatter-DtXEU9jw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDX6-0zQ.js";import"./getScrollParent-MGDKI0Li.js";import"./VisuallyHidden-CrG6ZMtm.js";import"./ModalOverlay-CtGtkBRD.js";import"./x-CreL89JY.js";import"./createLucideIcon-CpvMiuWS.js";import"./useLocalizedStringFormatter-DN-WkxQL.js";import"./Heading-B4Dxk79k.js";import"./Button-Bh1vA6XB.js";import"./Button.module-BB7N-cLd.js";import"./info-C5RLEIh2.js";import"./Popover-BzTjj0gs.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
