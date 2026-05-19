import{j as e,l}from"./iframe-TmYtQgnY.js";import{S as t}from"./Skeleton-DNLhEQcT.js";import{T as p}from"./TextField-CQ1XgI94.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ob1ODovh.js";import"./utils-DvgYso-7.js";import"./FieldError-7FPxvhrU.js";import"./Text-Buf9POGu.js";import"./useFocusRing-DS5bIIsk.js";import"./index-DGnVoJP5.js";import"./index-OGPoH8qw.js";import"./Text-T0trnrKS.js";import"./RSPContexts-DD-NCnvs.js";import"./Form-DALGR-BM.js";import"./Group-DFvqsGLM.js";import"./Input-evjaDaYE.js";import"./Hidden-Curp_cq_.js";import"./Button-ChpfMuYO.js";import"./useLabel-DGzhZIfH.js";import"./useLabels-CrE4xl9O.js";import"./useButton-Lm3tezld.js";import"./useTextField-BH15xdHg.js";import"./useControlledState-D8j9ZCcX.js";import"./useField-T1pIVFYf.js";import"./TextField.module-DdivwlC8.js";import"./Label-BBfjtBEW.js";import"./Dialog-QnE-F5Xe.js";import"./OverlayArrow-CqmAZ1KM.js";import"./useResizeObserver-BD2CW4iy.js";import"./Collection-DjRJ2-_Y.js";import"./index-DD5CoGXe.js";import"./Separator-gcPVMQlL.js";import"./SelectionManager-BpEOlw03.js";import"./useEvent-znuN9vlN.js";import"./scrollIntoView-BMboN7jH.js";import"./SelectionIndicator-QUvO_-7Z.js";import"./useDescription-BlLDYGFU.js";import"./ListKeyboardDelegate-DtDZKLW9.js";import"./PressResponder-BzyRnliG.js";import"./useLocalizedStringFormatter-BDPcye4t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DoKEYHsK.js";import"./getScrollParent-D0szpDfO.js";import"./VisuallyHidden-Bad1FF8A.js";import"./ModalOverlay-C2Wvuo36.js";import"./x-WIEiNIRj.js";import"./createLucideIcon-DeoFDGGs.js";import"./useLocalizedStringFormatter-C2tRJrok.js";import"./Heading-DQC2lV1W.js";import"./Button-CPisJxWJ.js";import"./Button.module-BB7N-cLd.js";import"./info-CJKU0Z6E.js";import"./Popover-BysjIYp5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
