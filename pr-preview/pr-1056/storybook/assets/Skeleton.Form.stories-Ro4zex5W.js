import{j as e,l}from"./iframe-BUyds97o.js";import{S as t}from"./Skeleton-n8E_bkeI.js";import{T as p}from"./TextField-DmS4MkIf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DzOnIBAx.js";import"./utils-BPu6xsrW.js";import"./TextField-DDF5Fehf.js";import"./FieldError-nzuM8Mkm.js";import"./Text-Dm1It-3G.js";import"./useFocusRing-Bm-8HNv9.js";import"./index-511sCdBp.js";import"./index-jhER429G.js";import"./Text-DYJP5A76.js";import"./RSPContexts-B3kcM3sq.js";import"./Form-DKSqMjyW.js";import"./useFormValidation-DsGu4ICd.js";import"./Group-C0KollZQ.js";import"./Input-B06m_n44.js";import"./Hidden-D-uqQF0z.js";import"./Button-HXR-7m9h.js";import"./useLabels-BK_yTQcU.js";import"./useButton-v3-Q6iUD.js";import"./useTextField-C9N0NVGh.js";import"./useControlledState-Dk1B153b.js";import"./useField-C5IKysth.js";import"./TextField.module-BE9Ip_bu.js";import"./Label-9z55oe_h.js";import"./Dialog-BruVrcEm.js";import"./OverlayArrow-Ba0W7a83.js";import"./useResizeObserver-Dk-yO2oS.js";import"./Collection-0h-PKilE.js";import"./index-CBtcg-XG.js";import"./Separator-nYCPhiEm.js";import"./SelectionManager-DAuT0Dm6.js";import"./useEvent-CIz6tOnB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BdhRxb3C.js";import"./useDescription-BQAUwCoM.js";import"./ListKeyboardDelegate-DMbdK5-n.js";import"./PressResponder-Cbz_cq3p.js";import"./useLocalizedStringFormatter-DVo_dtBE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BIC-pSZl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-bxnSUgOY.js";import"./Button-N-WvUv-N.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_jtq6xa.js";import"./createLucideIcon-iD7jktQ6.js";import"./x-D7YsntyJ.js";import"./Heading-eSq5c7xp.js";import"./info-BtAcpWtw.js";import"./Popover-BoQpzM8u.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
