import{j as e,l}from"./iframe-BANheT94.js";import{S as t}from"./Skeleton-D7HPtrde.js";import{T as d}from"./TextField-Zr2H-ouv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CHPlhosA.js";import"./utils-CpVmviXo.js";import"./TextField-Cqd0Kh-Z.js";import"./FieldError-nlVefKur.js";import"./Text-j3VcGK0a.js";import"./useFocusRing-D91tXV6i.js";import"./index-DKSwrre2.js";import"./index-Bc2dcr2L.js";import"./Text-l44IKoDc.js";import"./RSPContexts-B5A9Yjbf.js";import"./Form-D2W3dMdJ.js";import"./useFormValidation-EWuqX3DI.js";import"./Group-utoLrWlE.js";import"./Input-DT5Sg2pY.js";import"./Hidden-Dhs2zngV.js";import"./Button-AmvPyEDB.js";import"./useLabels-xUlPRGkJ.js";import"./useButton-Wxvat91D.js";import"./useTextField-Czr5yL6z.js";import"./useControlledState-8EHg840I.js";import"./useField-MGt8O-dm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BotGltCy.js";import"./Dialog-CWG7xjPJ.js";import"./OverlayArrow-C0DOesSE.js";import"./useResizeObserver-Do8ti1Jr.js";import"./Collection-BGGM3oD5.js";import"./index-Bte3b90o.js";import"./Separator-Be1a9jlQ.js";import"./SelectionManager-BOZlKdLa.js";import"./useEvent-DGxCvVlK.js";import"./scrollIntoView-DTKiP_3a.js";import"./SelectionIndicator-BNud7oaD.js";import"./useDescription-BuDIxU8F.js";import"./ListKeyboardDelegate-BW1OhyQR.js";import"./PressResponder-C98nU9CN.js";import"./useLocalizedStringFormatter-CRsSQwk5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BFtjZ2g0.js";import"./VisuallyHidden-obCayb53.js";import"./Button-CbAf7-Y_.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BO6RGHcC.js";import"./createLucideIcon-lHZWu_Mk.js";import"./x-B9bBhtd7.js";import"./Heading-B5-HR4K9.js";import"./info-C0Kt6ETu.js";import"./Popover-BDCQfCiI.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
