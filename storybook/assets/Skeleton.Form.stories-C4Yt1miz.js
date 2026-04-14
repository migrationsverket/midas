import{j as e,l}from"./iframe-6UVP4gzF.js";import{S as t}from"./Skeleton-DwDuDHDp.js";import{T as p}from"./TextField-D1YTUWdD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DxUIkEM0.js";import"./utils-DOxsvNuE.js";import"./FieldError-BpE-wczM.js";import"./Text-BTPWticG.js";import"./useFocusRing-C5gCUZ-8.js";import"./index-BBGJ7VjO.js";import"./index-BcvrcLrL.js";import"./Text-C9xgYxgE.js";import"./RSPContexts-Brux6LMo.js";import"./Form-BWiq1SRj.js";import"./Group-D2Uwocfd.js";import"./Input-u6Bt_Sng.js";import"./Hidden-CM-w2pmZ.js";import"./Button-Cexa-7Qi.js";import"./useLabel-CWCmiQI5.js";import"./useLabels-DW_gz9ei.js";import"./useButton-BvM28DdE.js";import"./useTextField-YMrNxEAy.js";import"./useControlledState-CSt56eyg.js";import"./useField-B43db6Ve.js";import"./TextField.module-DdivwlC8.js";import"./Label-C_R-DpnM.js";import"./Dialog-C8gq1IkO.js";import"./OverlayArrow-B2D5kJv1.js";import"./useResizeObserver-CEvY11qD.js";import"./Collection-CcmSdLgY.js";import"./index-BCEfaGHU.js";import"./Separator-C1KrL196.js";import"./SelectionManager-B7s-i6rh.js";import"./useEvent-BcFNSZ1q.js";import"./scrollIntoView-B9I7jkoL.js";import"./SelectionIndicator-CSFZ1qny.js";import"./useDescription-CDSI2B06.js";import"./ListKeyboardDelegate-D41sqi6s.js";import"./PressResponder-TlXEKdFN.js";import"./useLocalizedStringFormatter-CRr2CS_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BICxc7P5.js";import"./getScrollParent-Dm1SN3eh.js";import"./VisuallyHidden-Coo2bS_I.js";import"./Modal-yvxW3Sak.js";import"./x-DRrtJvVE.js";import"./createLucideIcon-CZM_qkx4.js";import"./useLocalizedStringFormatter-BHlCXMz2.js";import"./Heading-CW14flDD.js";import"./Button-Dank0oAc.js";import"./Button.module-BB7N-cLd.js";import"./info-CJ9zKhnh.js";import"./Popover-B7baZZ1J.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
