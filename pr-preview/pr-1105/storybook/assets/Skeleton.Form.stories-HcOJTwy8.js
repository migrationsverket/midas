import{j as e,l}from"./iframe-BuuAXrXC.js";import{S as t}from"./Skeleton-BCRpJOSj.js";import{T as d}from"./TextField-BMGk1Anb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CxvPFUQf.js";import"./utils-CtsDHbZe.js";import"./FieldError-EC843UUw.js";import"./Text-6_usI8rI.js";import"./useFocusRing-CrOe_O8c.js";import"./index-BbfDc97u.js";import"./index-32pD7yrL.js";import"./Text-ri3V3kO7.js";import"./RSPContexts-GYXhZ2kG.js";import"./Form-Dh-jyLTL.js";import"./Group-Co9hcU3l.js";import"./Input-BPxgunFy.js";import"./Hidden-E4h0Oh4e.js";import"./Button-DvBK65Gf.js";import"./useLabels-CGKYF4iS.js";import"./useButton-BnwORE09.js";import"./useTextField-D6jbbMzu.js";import"./useControlledState-jhkXU9fd.js";import"./useField-DDR_miEa.js";import"./TextField.module-DdivwlC8.js";import"./Label-TdkeK-nZ.js";import"./Dialog-DASoqCTh.js";import"./OverlayArrow-B_qmHsh9.js";import"./useResizeObserver-CiFNlJHb.js";import"./Collection-B0Hs1IvJ.js";import"./index-a9F44m-_.js";import"./Separator-DwwXVBmJ.js";import"./SelectionManager-BdqnjQ-I.js";import"./useEvent-CPDI-Sn6.js";import"./scrollIntoView-BPvWn1k3.js";import"./SelectionIndicator-ClskVgwB.js";import"./useDescription-DdQEt6e5.js";import"./ListKeyboardDelegate-BYIOwBbd.js";import"./PressResponder-hUYrP0m_.js";import"./useLocalizedStringFormatter-BEGIzj17.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DFK_ASMv.js";import"./getScrollParent-CUa_lcZe.js";import"./VisuallyHidden-6El7FPtm.js";import"./x-Dbf8QEqu.js";import"./createLucideIcon-iyjQV_Z5.js";import"./useLocalizedStringFormatter-B4LAAnFe.js";import"./Heading-BY8SUnpc.js";import"./Button-DGWTIzH5.js";import"./Button.module-BB7N-cLd.js";import"./info-d7IdREtp.js";import"./Popover-DMlTalWb.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
