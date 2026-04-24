import{j as e,l}from"./iframe-Cpv3N_Z7.js";import{S as t}from"./Skeleton-ViBYJ-29.js";import{T as p}from"./TextField-BKVHEzWQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CnCPEd4J.js";import"./utils-Ds8IarQh.js";import"./FieldError-DDdPNrDK.js";import"./Text-CBaNxGOV.js";import"./useFocusRing-ypjCw1vR.js";import"./index-wkqyPuv6.js";import"./index-DfwSWRjw.js";import"./Text-CywvhZI_.js";import"./RSPContexts-B7j5fLyU.js";import"./Form-N1eN9l9p.js";import"./Group-DtMaHiC2.js";import"./Input-DZ9x1R94.js";import"./Hidden-CRjjTzwz.js";import"./Button-yYifVGdg.js";import"./useLabel-DY4t24dq.js";import"./useLabels-Cb5TS_nA.js";import"./useButton-D1nJ6Ar2.js";import"./useTextField-BGLj0zfE.js";import"./useControlledState-BJT8QsD-.js";import"./useField-D1U1wsM_.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dx3VCdGV.js";import"./Dialog-Bb2YMCi0.js";import"./OverlayArrow-sE3WTDMd.js";import"./useResizeObserver-DVNf1EMT.js";import"./Collection-CQWma8za.js";import"./index-zYi_m5tq.js";import"./Separator-Be3iiyzN.js";import"./SelectionManager-BKEpkWWf.js";import"./useEvent-ryaXYS60.js";import"./scrollIntoView-CvDQ6PuP.js";import"./SelectionIndicator-DNA7WQpC.js";import"./useDescription-zO_rmDkP.js";import"./ListKeyboardDelegate--0GCoeKZ.js";import"./PressResponder-DGGSGX2J.js";import"./useLocalizedStringFormatter-Cxhkiabf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DhQs2maB.js";import"./getScrollParent-DFT_DoLJ.js";import"./VisuallyHidden-UFh7Pb-i.js";import"./ModalOverlay-58Zq4NHN.js";import"./x-F7c5yWaB.js";import"./createLucideIcon-CPN07aPY.js";import"./useLocalizedStringFormatter-DBqNCzPo.js";import"./Heading-DYvz3_Q8.js";import"./Button-DMMScCvt.js";import"./Button.module-BB7N-cLd.js";import"./info-Dl1Xxg5G.js";import"./Popover-Bc1Ybz7d.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
