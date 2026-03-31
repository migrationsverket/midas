import{j as e,l}from"./iframe-BBhwDnFO.js";import{S as t}from"./Skeleton-C_L_Qli9.js";import{T as p}from"./TextField-U-azIBB-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CJaYXG_3.js";import"./utils-Bd87UzLz.js";import"./FieldError-CYJ3UXof.js";import"./Text-CuEErEoe.js";import"./useFocusRing-B_sqHjIH.js";import"./index-BlvuKTGl.js";import"./index-_W7tIlCY.js";import"./Text-DjN1krRx.js";import"./RSPContexts-DMx7X0Ic.js";import"./Form-CqRiR74T.js";import"./Group-BlEQrDe0.js";import"./Input-Cp0H90Bq.js";import"./Hidden-QElrSbG6.js";import"./Button-CckDCqMW.js";import"./useLabel-cKvXwArV.js";import"./useLabels-Brd-Ii1p.js";import"./useButton-BBvNlSl7.js";import"./useTextField-DlY1kp4Q.js";import"./useControlledState-Kegn83S3.js";import"./useField-awkoEfr0.js";import"./TextField.module-DdivwlC8.js";import"./Label-CaJmjuJ5.js";import"./Dialog-GIzabknY.js";import"./OverlayArrow-B-qzSycV.js";import"./useResizeObserver-CewxdJh_.js";import"./Collection-C2tsxlnT.js";import"./index-DNxb9PD6.js";import"./Separator-1eoqrbWU.js";import"./SelectionManager-CUTXwG43.js";import"./useEvent-Cdz6o0we.js";import"./scrollIntoView-JBdO06P0.js";import"./SelectionIndicator-B6969qPK.js";import"./useDescription-eBvBmjGe.js";import"./ListKeyboardDelegate-0wBwb-w9.js";import"./PressResponder-BrERX3FG.js";import"./useLocalizedStringFormatter-BEHHwBjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D5xmnnHd.js";import"./getScrollParent-CyUBos4k.js";import"./VisuallyHidden-CeBruMUu.js";import"./x-CHXjKLnv.js";import"./createLucideIcon-DfX1ZOng.js";import"./useLocalizedStringFormatter-xYmRvro2.js";import"./Heading-CvaAxUO0.js";import"./Button-xHV73jzN.js";import"./Button.module-BB7N-cLd.js";import"./info-Bksr5BsN.js";import"./Popover-CtAVOKe7.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
