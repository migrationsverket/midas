import{j as e,l}from"./iframe-qwwZM-tE.js";import{S as t}from"./Skeleton-DTFXgLfn.js";import{T as d}from"./TextField-BuiS97eA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DILqSKDe.js";import"./utils-CE0AWIm4.js";import"./TextField-BJ-Xt48z.js";import"./FieldError-C6s0Sgvs.js";import"./Text-CjDFFRcJ.js";import"./useFocusRing-DVEbG0UH.js";import"./index-CUgyb0mk.js";import"./index-B0QkTLut.js";import"./Text-C5yJLujA.js";import"./RSPContexts-DxRUGpXJ.js";import"./Form-34dXS4qq.js";import"./useFormValidation-Z7RuVEfw.js";import"./Group-D_AGNQqa.js";import"./Input-C6UR8_B7.js";import"./Hidden-nIEH3jLZ.js";import"./Button-LMtqtR6P.js";import"./useLabels-ygVPKbju.js";import"./useButton-BG0hBHNu.js";import"./useTextField-BSqkbYPh.js";import"./useControlledState-B1hjZKLN.js";import"./useField-CrXgM-h6.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CnT1N-ZH.js";import"./Dialog-Cwr08cpl.js";import"./OverlayArrow-DQ541iri.js";import"./useResizeObserver-Ksii_YAo.js";import"./Collection-BsSMrTsh.js";import"./index-gjAEOKfl.js";import"./Separator-Ch2diD89.js";import"./SelectionManager-D0h4RoSA.js";import"./useEvent-BKT-lAgU.js";import"./scrollIntoView-D6_LqhvJ.js";import"./SelectionIndicator-fFcChirv.js";import"./useDescription-txzcDlxe.js";import"./ListKeyboardDelegate-ZTI_j1GM.js";import"./PressResponder-DS5LOVuL.js";import"./useLocalizedStringFormatter-C0HEB4Rj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-vP69cu3n.js";import"./VisuallyHidden-DuWmqszT.js";import"./Button-D_l512WF.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BG4Ct8V8.js";import"./createLucideIcon-DdrXPP-v.js";import"./x-dLBUgrRX.js";import"./Heading-DtQJHb5j.js";import"./info-DSfQR85G.js";import"./Popover-R1R2hb2u.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
