import{j as e,l}from"./iframe-CkvNFrYQ.js";import{S as t}from"./Skeleton-2L3YXDjX.js";import{T as p}from"./TextField-BRaHDKri.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B3HZVH9j.js";import"./utils-BgwUMJBy.js";import"./FieldError-BN50R8Gs.js";import"./Text-DIpvUzoX.js";import"./useFocusRing-DW5q3Sep.js";import"./index-yTWTeOs4.js";import"./index-exdkySs-.js";import"./Text-DsB1bVac.js";import"./RSPContexts-DGIABOWW.js";import"./Form-CWYzH3eB.js";import"./Group-C9L071lP.js";import"./Input-D72VaGU6.js";import"./Hidden-Bsx77DlA.js";import"./Button-vUvfAWls.js";import"./useLabel-MkwggAPL.js";import"./useLabels-CL_FLL5j.js";import"./useButton-CJQ9IXaE.js";import"./useTextField-B4kTnNrI.js";import"./useControlledState-Dmid9ay2.js";import"./useField-C89JW0cR.js";import"./TextField.module-DdivwlC8.js";import"./Label-D_35a4FG.js";import"./Dialog-Cwzi9hHL.js";import"./OverlayArrow-DXo6ErSR.js";import"./useResizeObserver-qcJ7l2JQ.js";import"./Collection-B_3MCUvb.js";import"./index-TiB-bmTE.js";import"./Separator-D9Pii1fS.js";import"./SelectionManager-BSCYUInq.js";import"./useEvent-DbWchgAK.js";import"./scrollIntoView-CCwmtkiF.js";import"./SelectionIndicator-U0aQAuvT.js";import"./useDescription-CapqPYkv.js";import"./ListKeyboardDelegate-BEgF-Rly.js";import"./PressResponder-Bvpu2RL6.js";import"./useLocalizedStringFormatter-DSoEqpDY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-By-NOSqI.js";import"./getScrollParent-Dj3KhtFY.js";import"./VisuallyHidden-DC7QTvoq.js";import"./ModalOverlay-DfM4Ks9W.js";import"./x-DsRbZUfb.js";import"./createLucideIcon-CeEwKqzx.js";import"./useLocalizedStringFormatter-V6FZSm6s.js";import"./Heading-Bxkil-M5.js";import"./Button-D17vaezS.js";import"./Button.module-BB7N-cLd.js";import"./info-IKa_d3Rd.js";import"./Popover-BtXLH4Y0.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
