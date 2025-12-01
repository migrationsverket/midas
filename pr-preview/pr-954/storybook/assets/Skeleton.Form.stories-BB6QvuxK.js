import{j as e,l}from"./iframe-D3BUIA8t.js";import{S as t}from"./Skeleton-4i_etCHP.js";import{T as d}from"./TextField-BKSsBH8t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-9dhJQCHe.js";import"./utils-BRlrr6bM.js";import"./TextField-BwAg4uob.js";import"./FieldError-SCOyZSTv.js";import"./Text-C-eelpHs.js";import"./useFocusRing-Dmx1Rf0M.js";import"./index-BNf-lxYJ.js";import"./index-CUuStiOA.js";import"./Text-Dp3wKR2d.js";import"./RSPContexts-CV4RKUwg.js";import"./Form-_eb6GcJE.js";import"./useFormValidation-CBZTCHh6.js";import"./Group-BIOUjxBC.js";import"./Input-CQoX55Gl.js";import"./Hidden-CYJ4paUC.js";import"./Button-DFQM0Ftj.js";import"./useLabels-BWXlsqMn.js";import"./useButton-BbUvFvwo.js";import"./useTextField-Dvicwip1.js";import"./useControlledState-BvkD_Bv4.js";import"./useField-B4KHEMc0.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BzFsMCKr.js";import"./Dialog-DK1pCcrx.js";import"./OverlayArrow-C_xbk_-s.js";import"./useResizeObserver-Bhk7bTxr.js";import"./Collection-BNvj67Xa.js";import"./index-nLNMctm3.js";import"./Separator-BiXN7KA2.js";import"./SelectionManager-DN-RiP15.js";import"./useEvent-jFLDziUE.js";import"./scrollIntoView-DdyGbssD.js";import"./SelectionIndicator-B4PXXzQd.js";import"./useDescription-D6Hwdm3g.js";import"./ListKeyboardDelegate-CBk0xvUq.js";import"./PressResponder-8d8b5_sP.js";import"./useLocalizedStringFormatter-BBFFW8CZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C8d6w8zj.js";import"./VisuallyHidden-ib62HETz.js";import"./Button-B4PrgER1.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dt6krr6e.js";import"./createLucideIcon-hvTt_6n0.js";import"./x-CXeE-P16.js";import"./Heading-BK0YGBVE.js";import"./info-DTFn8z1t.js";import"./Popover-9b7GRJkW.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
