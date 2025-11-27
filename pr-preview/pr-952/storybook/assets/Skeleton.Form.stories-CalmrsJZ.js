import{j as e,l}from"./iframe-GJIV0jhi.js";import{S as t}from"./Skeleton-DU92Hva5.js";import{T as d}from"./TextField-tntRAC3z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DUY8HHd9.js";import"./utils-SjaA0yG3.js";import"./TextField-BpbfOeBY.js";import"./FieldError-B7rd3v3G.js";import"./Text-DrabhmgK.js";import"./useFocusRing-CK_C_BwU.js";import"./index-C4Uh3RJ4.js";import"./index-VoTlDwim.js";import"./Text-DdZm8tc2.js";import"./RSPContexts-Bm7yg8Mb.js";import"./Form-DWUCNCcZ.js";import"./useFormValidation-DbISqNTd.js";import"./Group-B9RdPjel.js";import"./Input-BNMkUxMk.js";import"./Hidden-BJsyoLBN.js";import"./Button-JyF5O3_f.js";import"./useLabels-vYy7nIsq.js";import"./useButton-DXeUeID3.js";import"./useTextField-CxJfi2FA.js";import"./useControlledState-Dv7dRxR4.js";import"./useField-CrgtcRqm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DhFr9Kg_.js";import"./Dialog-D6RrQG_I.js";import"./OverlayArrow--_yWJSqC.js";import"./useResizeObserver-C6JRZ4Ai.js";import"./Collection-ClprxEqD.js";import"./index-hjQnYhFX.js";import"./Separator-DAneCyaB.js";import"./SelectionManager-CB9fgW49.js";import"./useEvent-BAd3DddR.js";import"./scrollIntoView-o7LqwIpG.js";import"./SelectionIndicator-DOv89vEg.js";import"./useDescription-B5HoYkdy.js";import"./ListKeyboardDelegate-DUpPRxxA.js";import"./PressResponder-CakFfnSq.js";import"./useLocalizedStringFormatter-gn54IrKP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DeTBM43N.js";import"./VisuallyHidden-CRj1GIcN.js";import"./Button-CsYpEVDI.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-q-Ln1_vz.js";import"./createLucideIcon-Cn9h6HqS.js";import"./x-C8F5BlTd.js";import"./Heading-DefIucw1.js";import"./info-CPuUrAA2.js";import"./Popover-BaFlzyAz.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
