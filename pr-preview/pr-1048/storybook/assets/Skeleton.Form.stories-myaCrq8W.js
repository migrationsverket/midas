import{j as e,l}from"./iframe-AKYLQdCk.js";import{S as t}from"./Skeleton-OAU1XccP.js";import{T as p}from"./TextField-CkaoxqrC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CX0di7cp.js";import"./utils-CwZ2LlQC.js";import"./useObjectRef-C1ZIljv5.js";import"./FieldError-1z-h802J.js";import"./Text-Bn-0i142.js";import"./useFocusRing-DeUGGThd.js";import"./useFocusable-CTBL5lAM.js";import"./index-Bv5J06q2.js";import"./index-DH60KLGl.js";import"./Text-BwqwIWKs.js";import"./RSPContexts-DNK6gf8O.js";import"./Form-BMSgrWJv.js";import"./useFormValidation-Co9GPZZz.js";import"./Group-DAno6NEz.js";import"./Input-CBcpayOf.js";import"./Hidden-BaKtfQaU.js";import"./Button-DFNriVHD.js";import"./number-DfkVkf0F.js";import"./useLabels-DwGxuFNn.js";import"./useButton-I-1qHytb.js";import"./useTextField-D-NwfPmo.js";import"./useControlledState-CbVlXO0V.js";import"./useField-z_fBkLit.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-BtlAKR85.js";import"./Dialog-DnF6LW7B.js";import"./OverlayArrow-UNbNlQ7l.js";import"./useResizeObserver-BtktBhU6.js";import"./Collection-3ml14O5b.js";import"./CollectionBuilder-looNesjp.js";import"./index-Blg7ZGdj.js";import"./Separator-BiHOUpOh.js";import"./SelectionManager-BucojQKK.js";import"./useEvent-C0_2xWEm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DO0fqmNQ.js";import"./useDescription-CBo5mlE7.js";import"./ListKeyboardDelegate-CiGgAhDI.js";import"./PressResponder-CgZvu0Io.js";import"./useLocalizedStringFormatter-BLFXCP_p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3Ti8HS8f.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BjOFadh9.js";import"./Button-DI1yGBch.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAqHm93j.js";import"./createLucideIcon-DaHUv1OG.js";import"./x-D3UjfguG.js";import"./Heading-D6naq-Us.js";import"./info-BvEcYorg.js";import"./Popover-NjCRRiyO.js";const xe={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,fe as __namedExportsOrder,xe as default};
