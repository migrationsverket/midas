import{j as e,l}from"./iframe-mq0SU6Z9.js";import{S as t}from"./Skeleton-DnTWcaTW.js";import{T as p}from"./TextField-Bh6qwu3w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ca0DRCPo.js";import"./utils-BJUm3EKx.js";import"./FieldError-f-MdB8SD.js";import"./Text-BbVeu3X7.js";import"./useFocusRing-D78q_c7L.js";import"./index-CiCCX6wU.js";import"./index-Cnhx9KUB.js";import"./Text-QATMG5Uj.js";import"./RSPContexts-4AWQzH5S.js";import"./Form-bcWZFPnj.js";import"./Group-DIGxo30w.js";import"./Input-DZnVlbOf.js";import"./Hidden-CNCyzMOi.js";import"./Button-D5Wvq1Pl.js";import"./useLabel-B5pFd3Xm.js";import"./useLabels-CIFPEs6o.js";import"./useButton-KkDhW6MW.js";import"./useTextField-5FwpDS0l.js";import"./useControlledState-CIPDjvWu.js";import"./useField-C7vU-KUe.js";import"./TextField.module-DdivwlC8.js";import"./Label-DLDyGZW-.js";import"./Dialog-Dc2cl8kT.js";import"./OverlayArrow-Dol7egh2.js";import"./useResizeObserver-CL3f_0H_.js";import"./Collection-CE2c4eRW.js";import"./index-TT9iBVBB.js";import"./Separator-4RsCReRD.js";import"./SelectionManager-DX8MhBW4.js";import"./useEvent-D25AVNy_.js";import"./scrollIntoView-B1GlEmmZ.js";import"./SelectionIndicator-D__HQavp.js";import"./useDescription-BIdqTDt5.js";import"./ListKeyboardDelegate-juKUR1xz.js";import"./PressResponder-DInmybET.js";import"./useLocalizedStringFormatter-6SvQMdyl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Pd6N4DBb.js";import"./getScrollParent-CQdctl5w.js";import"./VisuallyHidden-BbUhQySq.js";import"./x-yCiVd0iJ.js";import"./createLucideIcon-D9XqkqtN.js";import"./useLocalizedStringFormatter-Deu_fvUu.js";import"./Heading-Dxt_SHlA.js";import"./Button-Cvp14hiG.js";import"./Button.module-BB7N-cLd.js";import"./info-BSYptpDB.js";import"./Popover-Ce2GfJ2H.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
