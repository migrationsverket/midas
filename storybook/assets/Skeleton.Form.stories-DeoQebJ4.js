import{j as e,l}from"./iframe-Bau-Vb-U.js";import{S as t}from"./Skeleton-wpa-674Y.js";import{T as d}from"./TextField-DzsFjB-i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-g1gp1Uax.js";import"./utils-DzohMAvG.js";import"./FieldError-C4-I9rBv.js";import"./Text-CCFXQNDk.js";import"./useFocusRing-DBI5s8iT.js";import"./index-BwaX680v.js";import"./index-dRKp6bPQ.js";import"./Text-CnUTPFtZ.js";import"./RSPContexts-Ci7lzjgK.js";import"./Form-Ci16kZpr.js";import"./Group-DoN2xJaD.js";import"./Input-DLVIJ28g.js";import"./Hidden-ygOXplTE.js";import"./Button-nyoR5AiN.js";import"./useLabels-DfW1moGm.js";import"./useButton-QnWp_Okq.js";import"./useTextField-Dxtjgl1W.js";import"./useControlledState-B-7lzpTq.js";import"./useField-CoKhaZ76.js";import"./TextField.module-DdivwlC8.js";import"./Label-D8PnmA3G.js";import"./Dialog-DiJkuoOJ.js";import"./OverlayArrow-Cfo-rVtX.js";import"./useResizeObserver-kloavf3_.js";import"./Collection-zEnqGodL.js";import"./index-OEhMN9pE.js";import"./Separator-C5e4qUB-.js";import"./SelectionManager-fg2ccwC3.js";import"./useEvent-CVCmvDjB.js";import"./scrollIntoView-DtuGpqr3.js";import"./SelectionIndicator-9wEoKMBQ.js";import"./useDescription-kPv3UG3t.js";import"./ListKeyboardDelegate-qWSthOhk.js";import"./PressResponder-n2bcd3qr.js";import"./useLocalizedStringFormatter-D2MeKTbB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaN3JYX9.js";import"./getScrollParent-CNAv_Fjp.js";import"./VisuallyHidden-HpJjECW7.js";import"./x-Bn5zNUwZ.js";import"./createLucideIcon-Di4Tit0m.js";import"./useLocalizedStringFormatter-CNmU83eC.js";import"./Heading-BIPTKynB.js";import"./Button-BCWlvYFn.js";import"./Button.module-BB7N-cLd.js";import"./info-B811M17s.js";import"./Popover-DZhOWdrR.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
