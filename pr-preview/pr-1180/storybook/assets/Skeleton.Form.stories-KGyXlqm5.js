import{j as e,l}from"./iframe-CH21sBFo.js";import{S as t}from"./Skeleton-C3K1HqaK.js";import{T as d}from"./TextField-BjFHvrwx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-rYs0i8Pt.js";import"./utils-BTsYysht.js";import"./FieldError-27wmxIep.js";import"./Text-BvEBpsjb.js";import"./useFocusRing-DLE_Hwk5.js";import"./index-BSkkjiWB.js";import"./index-BSEruQCs.js";import"./Text-irla2VTm.js";import"./RSPContexts-kvxCI0gF.js";import"./Form-CVljI_fE.js";import"./Group-BkO6iFKp.js";import"./Input-C0xGllCq.js";import"./Hidden-BZUBqXYz.js";import"./Button-Cyld21y_.js";import"./useLabels-dAMIXjYB.js";import"./useButton-B_byaW6S.js";import"./useTextField-RMARdNiJ.js";import"./useControlledState-BSIuYOQP.js";import"./useField-D98AzuON.js";import"./TextField.module-DdivwlC8.js";import"./Label-B6l4E3Qb.js";import"./Dialog-CQ7FpZ0p.js";import"./OverlayArrow-DXDnGS1w.js";import"./useResizeObserver-BYnbHVpd.js";import"./Collection-Cv8r9qAi.js";import"./index-CqPeTyvA.js";import"./Separator-BknOFeGR.js";import"./SelectionManager-DqQLiQaF.js";import"./useEvent-B6n2-V8U.js";import"./scrollIntoView-By99Ab3d.js";import"./SelectionIndicator-DQXVG8Dk.js";import"./useDescription-B4sJiGX5.js";import"./ListKeyboardDelegate-DkHv3-VU.js";import"./PressResponder-Bo1gKqy7.js";import"./useLocalizedStringFormatter-DawUslhI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMXONQ0x.js";import"./getScrollParent-DE7toX-r.js";import"./VisuallyHidden-BbJs2R-u.js";import"./x-BvM5og85.js";import"./createLucideIcon-BCbaEzrv.js";import"./useLocalizedStringFormatter-CoUJdwyc.js";import"./Heading-BUbmqlpx.js";import"./Button-DAqWGZgG.js";import"./Button.module-BB7N-cLd.js";import"./info-DBi6sA9C.js";import"./Popover-CWx6x2q9.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
