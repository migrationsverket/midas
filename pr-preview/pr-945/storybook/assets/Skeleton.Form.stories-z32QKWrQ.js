import{j as e,l}from"./iframe-CTbPuyiZ.js";import{S as t}from"./Skeleton-BDM343yV.js";import{T as d}from"./TextField-BwVU9ZgN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Acmi1WgV.js";import"./utils-C6hfgLvT.js";import"./TextField-Be84hmA1.js";import"./FieldError-K-Xe6uTG.js";import"./Text-mSNC73zz.js";import"./useFocusRing-n3eJMlTT.js";import"./index-Bgxm6v1H.js";import"./index-Cu3zMLv9.js";import"./Text-vMxsj9yI.js";import"./RSPContexts-ClJnUPs5.js";import"./Form-BydZV5WJ.js";import"./useFormValidation-B9-OiVJw.js";import"./Group-CkmgWoPJ.js";import"./Input-SD8NZUmF.js";import"./Hidden-DaJx6vxq.js";import"./Button-CNOgGNQG.js";import"./useLabels-gUEAKYDn.js";import"./useButton-IIBwAU4K.js";import"./useTextField-Cd_ogaIw.js";import"./useControlledState-Dm0v7F1R.js";import"./useField-B_Z_BFtL.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-C1NU5p3-.js";import"./Dialog-DPFX4MCs.js";import"./OverlayArrow-DJ0mPePA.js";import"./useResizeObserver-BUobZ2m6.js";import"./Collection-BBEOqT8K.js";import"./index-BMmayFd4.js";import"./Separator-BguzASD7.js";import"./SelectionManager-rdq46V5Z.js";import"./useEvent-5NbWc272.js";import"./scrollIntoView-r8-_icar.js";import"./SelectionIndicator-qNrhRmYv.js";import"./useDescription-Bz8Mdm6f.js";import"./ListKeyboardDelegate-A_4yUQtO.js";import"./PressResponder-BJ8UD5wa.js";import"./useLocalizedStringFormatter-Dq6DvKsR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Boh-5e6O.js";import"./VisuallyHidden-sLTk1Jd1.js";import"./Button-CYxRok4a.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B364Tmw0.js";import"./createLucideIcon-DcaVUwzg.js";import"./x-C-6TIg3t.js";import"./Heading-BRqMFDd5.js";import"./info-DPeGZwiZ.js";import"./Popover-BwbIdq-q.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
