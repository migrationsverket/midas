import{j as e,l}from"./iframe-KvMX5Axs.js";import{S as t}from"./Skeleton-XviMeNZf.js";import{T as p}from"./TextField-BVtbkOP8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cqv57iiG.js";import"./utils-DQB0ixZT.js";import"./FieldError-Dm-mWSrI.js";import"./Text-BvSzNFUh.js";import"./useFocusRing-vgvsKIAr.js";import"./index-DTZE8lUv.js";import"./index-Y9HTW2-l.js";import"./Text-xieIOj6u.js";import"./RSPContexts-C0J0N8cH.js";import"./Form-DU3OszFC.js";import"./Group-D54bSnbM.js";import"./Input-S3TQ-i_W.js";import"./Hidden-DgM1V2hb.js";import"./Button-Bo3Qklea.js";import"./useLabel-0b57TDxq.js";import"./useLabels-CR00I-nd.js";import"./useButton-DgCOwdob.js";import"./useTextField-D3gJUay8.js";import"./useControlledState-CT69c7wx.js";import"./useField-B9fS3fRz.js";import"./TextField.module-DdivwlC8.js";import"./Label-CDuq43bD.js";import"./Dialog-B71dWd4e.js";import"./OverlayArrow-Bj4KLNcx.js";import"./useResizeObserver-Bl8K5spt.js";import"./Collection-CuE_5Y0n.js";import"./index-Cd_h8BU-.js";import"./Separator-s2DCgON9.js";import"./SelectionManager-BkEXNsjd.js";import"./useEvent-CIdla-e8.js";import"./scrollIntoView-B4l7yvba.js";import"./SelectionIndicator-CnqLajoz.js";import"./useDescription-BxZn0zUe.js";import"./ListKeyboardDelegate-CeGxABxM.js";import"./PressResponder-7JA-RSVR.js";import"./useLocalizedStringFormatter-BUFrwSMc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BI7Uh8GK.js";import"./getScrollParent-BQUmQnum.js";import"./VisuallyHidden-BX39qD-v.js";import"./x-BXrTPOwi.js";import"./createLucideIcon-CKpEkAd-.js";import"./useLocalizedStringFormatter-NesSIbJ3.js";import"./Heading-CT2JNdOT.js";import"./Button-C1NVLp98.js";import"./Button.module-BB7N-cLd.js";import"./info-H8Rwce8n.js";import"./Popover-CPK1w-vm.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
