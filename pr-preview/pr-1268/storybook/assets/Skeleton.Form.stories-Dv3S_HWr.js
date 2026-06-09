import{j as e,l}from"./iframe-usp88RXh.js";import{S as t}from"./Skeleton-Dfgutypp.js";import{T as p}from"./TextField-CkIrl8FN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DPYGFOvG.js";import"./utils-BXqK3GQS.js";import"./FieldError-DqHkKxnT.js";import"./Text-nB3EVkcg.js";import"./useFocusRing-BnVcW9EZ.js";import"./index-BaVleoZK.js";import"./index-B6kb6Xt1.js";import"./Text-BRG4rOQY.js";import"./RSPContexts-D2RkbuPx.js";import"./Form-DUUm_saO.js";import"./Group-CnsB5Sjn.js";import"./Input-DaBhAxAY.js";import"./Hidden-BTFNJ6XH.js";import"./Button-B-TKlEdD.js";import"./useLabel-Rz3gMjr1.js";import"./useLabels-BlUIkC-Y.js";import"./useButton-Dr8gKvJs.js";import"./useTextField-DBqYH0v-.js";import"./useControlledState-Bk0Ug2PQ.js";import"./useField-CCIeI78y.js";import"./TextField.module-DdivwlC8.js";import"./Label-ywji7JJ9.js";import"./Dialog-BSHWqXy6.js";import"./OverlayArrow-L2PLXjE1.js";import"./useResizeObserver-cQajaf1D.js";import"./Collection-BUmyaGSs.js";import"./index-tOgqOeDj.js";import"./Separator-CtHn-ijp.js";import"./SelectionManager-UhU7cBz3.js";import"./useEvent-DwdxgGhf.js";import"./scrollIntoView-CDzWWEyI.js";import"./SelectionIndicator-Bd8Rqh60.js";import"./useDescription-aGifrTIo.js";import"./ListKeyboardDelegate-B6XtyFtu.js";import"./PressResponder-Btnj_Ryu.js";import"./useLocalizedStringFormatter-zmPeK12I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tTrc6B4i.js";import"./getScrollParent-C_HcNQWA.js";import"./VisuallyHidden-CVXdiwcx.js";import"./ModalOverlay-kzwwZkbS.js";import"./x-BTd5rXGN.js";import"./createLucideIcon-DHgdMN24.js";import"./useLocalizedStringFormatter-JvTntPif.js";import"./Heading-Ce7-DSoc.js";import"./Button-DOBuF016.js";import"./Button.module-BB7N-cLd.js";import"./info-DyG7EEjV.js";import"./Popover-Bz5iSXFX.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
