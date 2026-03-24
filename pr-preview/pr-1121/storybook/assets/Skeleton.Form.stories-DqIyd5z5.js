import{j as e,l}from"./iframe-CYMOtnaz.js";import{S as t}from"./Skeleton-DtXs1qnC.js";import{T as d}from"./TextField-B66fdPur.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BO-RWrWB.js";import"./utils-wUxoB9ir.js";import"./FieldError-D0kgyG-u.js";import"./Text-CTFGmnLZ.js";import"./useFocusRing-CwRM3IeC.js";import"./index-gQkc5_3S.js";import"./index-CgeMnncj.js";import"./Text-CNTYAXo6.js";import"./RSPContexts-DG-Na64u.js";import"./Form-Du2tCOQl.js";import"./Group-Bs_qGsPS.js";import"./Input-DcIGuH4w.js";import"./Hidden-Cz8fAyFr.js";import"./Button-BHjHxOR2.js";import"./useLabels-DGXXfaIh.js";import"./useButton-gRqqNsAA.js";import"./useTextField-DhV61DkG.js";import"./useControlledState-COdBOBxc.js";import"./useField-BwIVoBkH.js";import"./TextField.module-DdivwlC8.js";import"./Label-CoUTq8pc.js";import"./Dialog-CwihlSiU.js";import"./OverlayArrow-CHDEmlTw.js";import"./useResizeObserver-L1bDt560.js";import"./Collection-CVepbLUa.js";import"./index-xkVQ_Y_v.js";import"./Separator-BiL6I6i2.js";import"./SelectionManager-CvvpwXH3.js";import"./useEvent-B6jVjST-.js";import"./scrollIntoView-D8RJHNIW.js";import"./SelectionIndicator-B7-Xqz9K.js";import"./useDescription-C4GylzT5.js";import"./ListKeyboardDelegate-DuBC3LAP.js";import"./PressResponder-BBLPldD5.js";import"./useLocalizedStringFormatter-CScStZ9F.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNk_tqx5.js";import"./getScrollParent-CbXWzNsn.js";import"./VisuallyHidden-DOc_oGUX.js";import"./x-DHZ4jav5.js";import"./createLucideIcon-CzbXkqnk.js";import"./useLocalizedStringFormatter-Dv9n-TJG.js";import"./Heading-BW1tQAAy.js";import"./Button-e1fZ-j-W.js";import"./Button.module-BB7N-cLd.js";import"./info-ChVymxrm.js";import"./Popover-BlwMTkW5.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
