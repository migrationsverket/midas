import{j as e,l}from"./iframe-CcR8w04L.js";import{S as t}from"./Skeleton-C8Mf6SmW.js";import{T as p}from"./TextField-BOMYyexq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CRHQQSxx.js";import"./utils-af0tYTw3.js";import"./FieldError-htExcrgg.js";import"./Text-aSsPMv-x.js";import"./useFocusRing-D1A2CEDA.js";import"./index-DRTGbyk6.js";import"./index-cXkWMWCH.js";import"./Text-BOLbzqGN.js";import"./RSPContexts-D6Nmnt3c.js";import"./Form-dCKfEOqU.js";import"./Group-COYcyvYX.js";import"./Input-CbOBMUTC.js";import"./Hidden-DwthtQe9.js";import"./Button-DiPSkE8a.js";import"./useLabel-D1-RwtiE.js";import"./useLabels-B6AFz8zN.js";import"./useButton-BOkIyd3s.js";import"./useTextField-DW_FOim-.js";import"./useControlledState-CEdHUrMX.js";import"./useField-CK1CEvDx.js";import"./TextField.module-DdivwlC8.js";import"./Label-BY6wMyZU.js";import"./Dialog-Bp10XtkF.js";import"./OverlayArrow-BmW3qC41.js";import"./useResizeObserver-IuRGgK6H.js";import"./Collection-Bkz2Ue8x.js";import"./index-B2xZ7LZU.js";import"./Separator-_mbxiYym.js";import"./SelectionManager-Ig_Qb5vq.js";import"./useEvent-CEJe_3LM.js";import"./scrollIntoView-B7qNvkQR.js";import"./SelectionIndicator-c_eTMs6v.js";import"./useDescription-Cu4rveQh.js";import"./ListKeyboardDelegate-D0dJW87p.js";import"./PressResponder-DKy8oIBc.js";import"./useLocalizedStringFormatter-CgjdUKuv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BoZfarRE.js";import"./getScrollParent-C12n-Bvt.js";import"./VisuallyHidden-BpOhFVs3.js";import"./x-DuzdHKBG.js";import"./createLucideIcon-Bth_BE09.js";import"./useLocalizedStringFormatter-DATZ4L6m.js";import"./Heading-o1owZdV3.js";import"./Button-BiOwK_dU.js";import"./Button.module-BB7N-cLd.js";import"./info-DIlxICcx.js";import"./Popover-Cyqr_Bop.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
