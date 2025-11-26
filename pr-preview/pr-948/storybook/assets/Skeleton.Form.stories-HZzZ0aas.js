import{j as e,l}from"./iframe-C2syMjcx.js";import{S as t}from"./Skeleton-XMdtB-lU.js";import{T as d}from"./TextField-Bbzha-nV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C-N3YQ7D.js";import"./utils-NPw_IpSj.js";import"./TextField-BMyTOyE1.js";import"./FieldError-M6Mt7RYl.js";import"./Text-BzSdjjAy.js";import"./useFocusRing-BTCdOLkE.js";import"./index-kesApnNk.js";import"./index-D9WKceHM.js";import"./Text-CW1-kOgu.js";import"./RSPContexts-Ci-D1ZHy.js";import"./Form-CWekTbEA.js";import"./useFormValidation-C0k6ZwBy.js";import"./Group-Bivfh974.js";import"./Input-C8oiVkpX.js";import"./Hidden-D_ZXlJ-E.js";import"./Button-q8T4B1eY.js";import"./useLabels-CxTL3OJE.js";import"./useButton-Cq9o22NE.js";import"./useTextField-DggaPNad.js";import"./useControlledState-DcPxF_iu.js";import"./useField-BbLW6q43.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Cm9jRdUG.js";import"./Dialog-Ck2U7GRd.js";import"./OverlayArrow-Bw2G0Yv9.js";import"./useResizeObserver-B6Yj14gw.js";import"./Collection-CRHEXIAy.js";import"./index-DNcKrBMu.js";import"./Separator-LhPpHbL9.js";import"./SelectionManager-CknCKKPC.js";import"./useEvent-Bb-UgqSL.js";import"./scrollIntoView-CVizm6Yx.js";import"./SelectionIndicator-BLcGl7NH.js";import"./useDescription-DWsDzmTc.js";import"./ListKeyboardDelegate-CMdcFZGB.js";import"./PressResponder-B1kwZgn8.js";import"./useLocalizedStringFormatter-BaZve-XC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BnB7GHRj.js";import"./VisuallyHidden-CT7-H4Xi.js";import"./Button-DFdezlA2.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CVow8Wj7.js";import"./createLucideIcon-Cx2M3zR4.js";import"./x-CNQ7hU2a.js";import"./Heading-ClhHBRuV.js";import"./info-Radp0Nb7.js";import"./Popover-1V19CavY.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
