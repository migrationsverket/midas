import{j as e,l}from"./iframe-D4usB9n2.js";import{S as t}from"./Skeleton-6-i6L697.js";import{T as p}from"./TextField-DxT1sTzj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BSPcPMCD.js";import"./utils-Chiz1oN2.js";import"./FieldError-CPaCZkAy.js";import"./Text-DCjCSbNe.js";import"./useFocusRing-ihkH1nOS.js";import"./index-D_BiQ3CN.js";import"./index-D7VIiBEs.js";import"./Text-BPVUDIkV.js";import"./RSPContexts-D-vGj3gL.js";import"./Form-DzQgMoUt.js";import"./Group-CLbmpECC.js";import"./Input-DfrvXYgD.js";import"./Hidden-Cn6dZTod.js";import"./Button-C0ozI8gk.js";import"./useLabel-Bqb-L3h5.js";import"./useLabels-D2vaRbqn.js";import"./useButton-DDapGTCA.js";import"./useTextField-CANanKHX.js";import"./useControlledState-DA5Xz2a0.js";import"./useField-Cgg__gMv.js";import"./TextField.module-DdivwlC8.js";import"./Label-DEX8qKlr.js";import"./Dialog-DRaaEhRM.js";import"./OverlayArrow-5CMvmlfG.js";import"./useResizeObserver-yeujys0h.js";import"./Collection-FpyIrNSE.js";import"./index-CTrbRtu6.js";import"./Separator-B07d46a7.js";import"./SelectionManager-BDWSM55Y.js";import"./useEvent-B_vV08nn.js";import"./scrollIntoView-DMee3u0y.js";import"./SelectionIndicator-D-N9NSP8.js";import"./useDescription-CP735cHb.js";import"./ListKeyboardDelegate-d00XesEb.js";import"./PressResponder-DrWZrEzB.js";import"./useLocalizedStringFormatter-_6pgVaCX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CAMo3Vmy.js";import"./getScrollParent-BPU2H25u.js";import"./VisuallyHidden-DISGYBiK.js";import"./x-B4mY3mrq.js";import"./createLucideIcon-DqajdqxS.js";import"./useLocalizedStringFormatter-C7hYA8xN.js";import"./Heading-BcqVgANH.js";import"./Button-DaUg4W92.js";import"./Button.module-BB7N-cLd.js";import"./info-8c3vUbvq.js";import"./Popover-i8CJBQC8.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
