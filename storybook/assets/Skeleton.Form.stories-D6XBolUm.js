import{j as e,l}from"./iframe-CSArLD6f.js";import{S as t}from"./Skeleton-Hi4QxMne.js";import{T as p}from"./TextField-CfX_BXsl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DII0oipf.js";import"./utils-CCBKoGgU.js";import"./FieldError-B5M3gUUv.js";import"./Text-BU71TyQs.js";import"./useFocusRing-IWQ1hWag.js";import"./index-DIECvqes.js";import"./index-ywIekiaj.js";import"./Text-DYmfOSM7.js";import"./RSPContexts-gcUc6sbV.js";import"./Form-BIzjWTDH.js";import"./Group-kgmteNLn.js";import"./Input-CvOxm1Hc.js";import"./Hidden-C3bxkDXx.js";import"./Button-CVc2L7QK.js";import"./useLabel-6yPvvDeu.js";import"./useLabels-y6WFRAzY.js";import"./useButton-Ivv3_IdO.js";import"./useTextField-yjLoMu7B.js";import"./useControlledState-DaW5OxR1.js";import"./useField-BAs0XYJF.js";import"./TextField.module-DdivwlC8.js";import"./Label-rJx_BLP5.js";import"./Dialog-DVaGRSMs.js";import"./OverlayArrow-B0Tz0TsE.js";import"./useResizeObserver-8e9XeeUW.js";import"./Collection-x3RjRwuY.js";import"./index-BHal24tP.js";import"./Separator-BN9Hb4ee.js";import"./SelectionManager-C7RrhPzl.js";import"./useEvent-DjZuF2Xg.js";import"./scrollIntoView-C_WrJeuk.js";import"./SelectionIndicator-zOWLD5tv.js";import"./useDescription-dWdsonds.js";import"./ListKeyboardDelegate-0NCQPax5.js";import"./PressResponder-CMu9Ri_4.js";import"./useLocalizedStringFormatter-WHf9z393.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7Vb3PF9.js";import"./getScrollParent-7cis0Mb7.js";import"./VisuallyHidden-46ezc1h_.js";import"./ModalOverlay-DcVc98oa.js";import"./x-C6uKjybT.js";import"./createLucideIcon-DROqj45j.js";import"./useLocalizedStringFormatter-BBjTg30D.js";import"./Heading-CljZzBPJ.js";import"./Button-CWyJ-riM.js";import"./Button.module-BB7N-cLd.js";import"./info-ZtStK7ES.js";import"./Popover-CiVftmhn.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
