import{j as e,l}from"./iframe-16U0iwY4.js";import{S as t}from"./Skeleton-28tiTTXI.js";import{T as p}from"./TextField-CrITWolX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CeFk-cJu.js";import"./utils-HzU6u-g_.js";import"./TextField-DA2qr_Qp.js";import"./FieldError-TXJxg1Qe.js";import"./Text-gxhRT_ue.js";import"./useFocusRing-D3YcX54s.js";import"./index-N6dO_YkP.js";import"./index-DC6p1BMI.js";import"./Text-CYPHINAD.js";import"./RSPContexts-DYoqEBBs.js";import"./Form-BIPhrBx-.js";import"./useFormValidation-DncO4Qc_.js";import"./Group-BrEfB2uA.js";import"./Input-DN9x7vIN.js";import"./Hidden-DvvsvPP1.js";import"./Button-DRn4Jt6C.js";import"./useLabels-bKWgMNMV.js";import"./useButton-CCTZIvr7.js";import"./useTextField-B26WDiH9.js";import"./useControlledState-BSv6ChRq.js";import"./useField-gNzwNE_P.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CL0bcSET.js";import"./Dialog-B_y-RP_i.js";import"./OverlayArrow-6VPV5x9S.js";import"./useResizeObserver-CTvfaXzs.js";import"./Collection-DJFn8yCo.js";import"./index-TSoekwih.js";import"./Separator-D2-qi8my.js";import"./SelectionManager-CDXgUY9U.js";import"./useEvent-Bm336BSb.js";import"./scrollIntoView-d806NCcg.js";import"./SelectionIndicator-BgT766U1.js";import"./useDescription-DPN5nlm8.js";import"./ListKeyboardDelegate-DSwISaKO.js";import"./PressResponder-D37m5O0U.js";import"./useLocalizedStringFormatter-GF3ngx--.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CgsvthDN.js";import"./VisuallyHidden-D6uRhZ1i.js";import"./Button-GEzK-q9q.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-Q-0QRf.js";import"./createLucideIcon-DgqIWnhM.js";import"./x-LZCMefA5.js";import"./Heading-C6Jk7UxJ.js";import"./info-7M6UIQwZ.js";import"./Popover-BZIsw1yB.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
