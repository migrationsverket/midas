import{j as e,l}from"./iframe-DsyUTAcE.js";import{S as t}from"./Skeleton-C60ChvZj.js";import{T as p}from"./TextField-n_sH--NI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BuuQ3mmm.js";import"./utils-BnWDXxML.js";import"./FieldError-CUL53TAh.js";import"./Text-BcSWoPTn.js";import"./useFocusRing-Cx6ToNCy.js";import"./index-Cm0emSOI.js";import"./index-DUe59CJc.js";import"./Text-BbelKnYK.js";import"./RSPContexts-Bq3W9l8U.js";import"./Form-CGaVeMLz.js";import"./Group-fE0kJLiO.js";import"./Input-Cmaom0ys.js";import"./Hidden-C6TlAeVz.js";import"./Button-CyvfdMVt.js";import"./useLabel-BZ281jnk.js";import"./useLabels-B-uO_ouR.js";import"./useButton-zhU8f6Q9.js";import"./useTextField-CXj02fYa.js";import"./useControlledState-CUD0SDj1.js";import"./useField-CZQg1P7z.js";import"./TextField.module-DdivwlC8.js";import"./Label-Crq51tct.js";import"./Dialog-DohYhUFQ.js";import"./OverlayArrow-Bt8y4fvo.js";import"./useResizeObserver-eQ6f-ciW.js";import"./Collection-BkFaDfpb.js";import"./index-DKebHK_B.js";import"./Separator-DiYSAA9a.js";import"./SelectionManager-DWstKPeT.js";import"./useEvent-CSHJ_TNr.js";import"./scrollIntoView-C7SZHVqe.js";import"./SelectionIndicator-jhAgBAsJ.js";import"./useDescription-umLegZgN.js";import"./ListKeyboardDelegate-Cof7SJue.js";import"./PressResponder-k6I_4WI-.js";import"./useLocalizedStringFormatter-Bt27mnVB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CB6ugAJk.js";import"./getScrollParent-dZX6mtkV.js";import"./VisuallyHidden-hue3FDJw.js";import"./ModalOverlay-DY-j-A4y.js";import"./x-zGwK5Qc9.js";import"./createLucideIcon-BXEX14cZ.js";import"./useLocalizedStringFormatter-d708RcER.js";import"./Heading-D4DQoq2I.js";import"./Button-D3VEHZPU.js";import"./Button.module-BB7N-cLd.js";import"./info-DGX3oTFd.js";import"./Popover-H2lXawV4.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
