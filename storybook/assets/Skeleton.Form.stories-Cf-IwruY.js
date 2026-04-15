import{j as e,l}from"./iframe-th_azU5_.js";import{S as t}from"./Skeleton-DtA806PM.js";import{T as p}from"./TextField-DFTjWMIM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DwVGMppW.js";import"./utils-C4VuU2um.js";import"./FieldError-AfpWYpbz.js";import"./Text-hdNvr6U4.js";import"./useFocusRing-BDcpBQzO.js";import"./index-CzrHA3v-.js";import"./index-BbA8n6Hq.js";import"./Text-DELoTx3Q.js";import"./RSPContexts-DcQ_ZJZT.js";import"./Form-1MLn5vCf.js";import"./Group-D0UGm2Gt.js";import"./Input-CFo7PPij.js";import"./Hidden-BFds7gf1.js";import"./Button-wk7uPRGE.js";import"./useLabel-CYIQyZrD.js";import"./useLabels-BxY9CSFr.js";import"./useButton-u6wZaZk_.js";import"./useTextField-DPUSE9Dm.js";import"./useControlledState-kFNWgpP8.js";import"./useField-Bo84Watr.js";import"./TextField.module-DdivwlC8.js";import"./Label-C184Mq6Q.js";import"./Dialog-qyQyO-xd.js";import"./OverlayArrow-01IAR7vV.js";import"./useResizeObserver-BIwzzMqH.js";import"./Collection-DVMWuvit.js";import"./index-BidItgYC.js";import"./Separator-CNc79Mct.js";import"./SelectionManager-CpaghZcb.js";import"./useEvent-tLzXOHdh.js";import"./scrollIntoView-D5fKhQtx.js";import"./SelectionIndicator-6zlY6cYw.js";import"./useDescription-D59bYXVd.js";import"./ListKeyboardDelegate-BScei23V.js";import"./PressResponder-CX6J_bHp.js";import"./useLocalizedStringFormatter-C0jZ500X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BkV0DXQ5.js";import"./getScrollParent-BHVOeKIe.js";import"./VisuallyHidden-CkdA4sJp.js";import"./ModalOverlay-p-_z6rvK.js";import"./x-D7gAiSiz.js";import"./createLucideIcon-Bv08NMl0.js";import"./useLocalizedStringFormatter-Bei2ateM.js";import"./Heading-CzjIk2-X.js";import"./Button-CauCyY5i.js";import"./Button.module-BB7N-cLd.js";import"./info-Ch7dTvUX.js";import"./Popover-Dm3-gDL0.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
