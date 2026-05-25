import{j as e,l}from"./iframe-BgrJi1dO.js";import{S as t}from"./Skeleton-Bs5B41ML.js";import{T as p}from"./TextField-DU6e5Iq8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DBzcXZKY.js";import"./utils-Dbe4V-IB.js";import"./FieldError-CK0qCQ53.js";import"./Text-BwTtjMDe.js";import"./useFocusRing-BS9YqB89.js";import"./index-CbWpRcM2.js";import"./index-JdhWXOmD.js";import"./Text-U40rqCZc.js";import"./RSPContexts-DvRO0UAG.js";import"./Form-BYQG3pHA.js";import"./Group-Cmswapzf.js";import"./Input-DXAbBT3f.js";import"./Hidden-B-ocAKFH.js";import"./Button-CzM4r0Q8.js";import"./useLabel-BAUK-y0z.js";import"./useLabels-AZv-RCl9.js";import"./useButton-CFZUz_m7.js";import"./useTextField-Bc0a0Wov.js";import"./useControlledState-D4OQ_QAh.js";import"./useField-DQisryMe.js";import"./TextField.module-DdivwlC8.js";import"./Label-BdWzYcgR.js";import"./Dialog-Dx5PGef6.js";import"./OverlayArrow-BxhCGC-N.js";import"./useResizeObserver-DsBe658C.js";import"./Collection-B928yBNj.js";import"./index-hMpkQrUO.js";import"./Separator-CFMUc0y5.js";import"./SelectionManager-ydqEliBd.js";import"./useEvent-MCxZUdsg.js";import"./scrollIntoView-BBkPTMW6.js";import"./SelectionIndicator--LpreWkm.js";import"./useDescription-jfs0LzVP.js";import"./ListKeyboardDelegate-TS4aAaQm.js";import"./PressResponder-oCaC_hiz.js";import"./useLocalizedStringFormatter-BqEVaK4W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoZL00eg.js";import"./getScrollParent-D_EmKFyf.js";import"./VisuallyHidden-BtrvhTUL.js";import"./ModalOverlay-ByFsZVVk.js";import"./x-DF1DvVFb.js";import"./createLucideIcon-Xa2G53WL.js";import"./useLocalizedStringFormatter-C5DL9Vvg.js";import"./Heading-Pcy6kdR-.js";import"./Button-B_tSlyMA.js";import"./Button.module-BB7N-cLd.js";import"./info-CKFRirRj.js";import"./Popover-ClRnZYFV.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
