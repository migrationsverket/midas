import{j as e,l}from"./iframe-DnruN8Hi.js";import{S as t}from"./Skeleton-DYpcp2w-.js";import{T as p}from"./TextField-C1vNKzQm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C131rnrh.js";import"./utils-BX8UrSvi.js";import"./FieldError-CR8f1e8f.js";import"./Text-DCNJHhrE.js";import"./useFocusRing-CIcdEl5_.js";import"./index-pkhbjMNc.js";import"./index-D9PIboWj.js";import"./Text-CtjP_E78.js";import"./RSPContexts-BxvIfT03.js";import"./Form-CdmVZ8o7.js";import"./useFormValidation-CDj0Szad.js";import"./Group-B1LMLlF9.js";import"./Input-CsA9KDzM.js";import"./Hidden-BPKBd4kU.js";import"./Button-DqyDElzI.js";import"./useLabels-CTW32vH1.js";import"./useButton-vQ4A074D.js";import"./useTextField-GVtC83pY.js";import"./useControlledState-BjH9byFR.js";import"./useField-pLHgFybq.js";import"./TextField.module-DdivwlC8.js";import"./Label-DVYppc8e.js";import"./Dialog-BWtCZrJw.js";import"./OverlayArrow-Cb9dHmex.js";import"./useResizeObserver-BPPmjVNZ.js";import"./Collection-DGrZmIuz.js";import"./index-DR5KhNk9.js";import"./Separator-BjG1YRRW.js";import"./SelectionManager-B7BjE4GX.js";import"./useEvent-YY42qbpM.js";import"./scrollIntoView-BcsYkCDN.js";import"./SelectionIndicator-_pZBO5h1.js";import"./useDescription-C5Ac6ktb.js";import"./ListKeyboardDelegate-BvW4EyKb.js";import"./PressResponder-WSTnp2SS.js";import"./useLocalizedStringFormatter-CClWoe23.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGaWSl1a.js";import"./getScrollParent-iZijDBuV.js";import"./VisuallyHidden-G4dK4wUP.js";import"./Button-DqZTSrsn.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-y9TFNf60.js";import"./createLucideIcon-Bmpp_QRu.js";import"./x-DJw_asIB.js";import"./Heading-CtJEqhzp.js";import"./info-DJH8vqDN.js";import"./Popover-BVVElmy_.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
