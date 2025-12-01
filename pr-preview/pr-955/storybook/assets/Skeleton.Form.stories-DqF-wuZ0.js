import{j as e,l}from"./iframe-DnZu7tjU.js";import{S as t}from"./Skeleton-CkOprkTI.js";import{T as d}from"./TextField-CVC2urxN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DJZ_4535.js";import"./utils-DvsDfxiZ.js";import"./TextField-3pfCB-Dn.js";import"./FieldError-DdNBbPKU.js";import"./Text-DDckt_LF.js";import"./useFocusRing-BVLxtrwi.js";import"./index-pukpAhsd.js";import"./index-DuANshEl.js";import"./Text-ByAr067h.js";import"./RSPContexts-DMIbGUsk.js";import"./Form-CxnVWZai.js";import"./useFormValidation-DBeaMwp3.js";import"./Group-C_Ztsyyo.js";import"./Input-BIxJfrk1.js";import"./Hidden-MVD45dNy.js";import"./Button-hkOip--R.js";import"./useLabels-DTmMdRQq.js";import"./useButton-DmjUv8W1.js";import"./useTextField-qkYZTzcL.js";import"./useControlledState-6_8Dx77R.js";import"./useField-HB13P4sO.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Beeav5Zm.js";import"./Dialog-Cgkr0_k2.js";import"./OverlayArrow-DUX43FcK.js";import"./useResizeObserver-BeBIxiuQ.js";import"./Collection-Y1vigHBC.js";import"./index-BrOyUCPM.js";import"./Separator-YevnxX-J.js";import"./SelectionManager-n_YqC5G5.js";import"./useEvent-DaspnZHR.js";import"./scrollIntoView-CZyBJ9rq.js";import"./SelectionIndicator-C8qunJga.js";import"./useDescription-Carqnp7k.js";import"./ListKeyboardDelegate-BuYM8v3i.js";import"./PressResponder-IeH9tSv-.js";import"./useLocalizedStringFormatter-C_uLFRgN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-R00I75Jc.js";import"./VisuallyHidden-C4Nx-Lep.js";import"./Button-062FUKpn.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BX9jEi07.js";import"./createLucideIcon-3-UHYTi-.js";import"./x-BRIO2b_Q.js";import"./Heading-DPziEPRb.js";import"./info-wE6WxY0_.js";import"./Popover-CnBQas7M.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
