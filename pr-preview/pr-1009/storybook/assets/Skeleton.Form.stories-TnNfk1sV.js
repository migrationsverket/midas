import{j as e,l}from"./iframe-DnuCDSUx.js";import{S as t}from"./Skeleton-Cx4G-cY4.js";import{T as p}from"./TextField-C3mRjPxx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CAa1Ugvl.js";import"./utils-BCJeDJBm.js";import"./TextField-CasggVt6.js";import"./FieldError-BbMD8n1O.js";import"./Text-C7HsrZUC.js";import"./useFocusRing-CBqhz9c5.js";import"./index-BbskeeQH.js";import"./index-B7Z8Eyxh.js";import"./Text-B2abyLCt.js";import"./RSPContexts-DFV1IoMw.js";import"./Form-Cr6ZjpNe.js";import"./useFormValidation-DHcJOJz_.js";import"./Group-Bc3PhLh2.js";import"./Input-DXvrEQrT.js";import"./Hidden-WrzVtlNW.js";import"./Button-DlLq5SIo.js";import"./useLabels-vpNmVZYd.js";import"./useButton-rZTjLr54.js";import"./useTextField-H-8t7opC.js";import"./useControlledState-BTGs3Wlx.js";import"./useField-txGP6Hv2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BHWiYazT.js";import"./Dialog-CPh1_-84.js";import"./OverlayArrow-DblK16e6.js";import"./useResizeObserver-Bo3ReS7k.js";import"./Collection-Ae8TderM.js";import"./index-BXqSFUSP.js";import"./Separator-DplFeifn.js";import"./SelectionManager-DO-zfREl.js";import"./useEvent-ErL6pKub.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BN0Qylsh.js";import"./useDescription-CmeyrCHK.js";import"./ListKeyboardDelegate-BY9B8zni.js";import"./PressResponder-BgQopFxD.js";import"./useLocalizedStringFormatter-hTpHsBhz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3xKCcSC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-mqlBAgrk.js";import"./Button-dYVCYVgo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D6ETHzho.js";import"./createLucideIcon-DLtu9yR0.js";import"./x-CumWaLE8.js";import"./Heading-w25QJ7GD.js";import"./info-DLj81B5_.js";import"./Popover-CxYgoTUG.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
