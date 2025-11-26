import{j as e,l}from"./iframe-B3cZlMLq.js";import{S as t}from"./Skeleton-CP_2nQ_W.js";import{T as d}from"./TextField-CQryCNuI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BsWNQpXF.js";import"./utils-C2IA6zAi.js";import"./TextField-230MxhOO.js";import"./FieldError-CwMfAejD.js";import"./Text-BDM3k8gp.js";import"./useFocusRing-Dkrn5RRD.js";import"./index-pKcy2ErU.js";import"./index-D2uszoET.js";import"./Text-DMP_bw7r.js";import"./RSPContexts-BGkD65I-.js";import"./Form-3lY06ROM.js";import"./useFormValidation-DpSJBzg9.js";import"./Group-BzjIJ_hC.js";import"./Input-u8QqEH5a.js";import"./Hidden-qU92wu5k.js";import"./Button-D5tqtILh.js";import"./useLabels-gayIneyO.js";import"./useButton-DYFBzz8O.js";import"./useTextField-c3tpRuHu.js";import"./useControlledState-BjN-icKh.js";import"./useField-bNv-bTy9.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B0e6JnY2.js";import"./Dialog-3HARhlaJ.js";import"./OverlayArrow-BYMu192H.js";import"./useResizeObserver-WzPTznhj.js";import"./Collection-CmdLX-Un.js";import"./index-D6dUN0sU.js";import"./Separator-DcOgo5Rp.js";import"./SelectionManager-p9LBYUuI.js";import"./useEvent-DoDjcMOQ.js";import"./scrollIntoView-3f3I6qXZ.js";import"./SelectionIndicator-vytaxVBf.js";import"./useDescription-Ca1I1_7m.js";import"./ListKeyboardDelegate-Br-FAoxl.js";import"./PressResponder-DUBLzW5W.js";import"./useLocalizedStringFormatter-BxBaRmG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DjWGnAkK.js";import"./VisuallyHidden-DFgNwsT9.js";import"./Button-D3BwvYvD.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-ChaREiKB.js";import"./createLucideIcon-cIeaTryR.js";import"./x-Bh2TZMn2.js";import"./Heading-DL-GOIro.js";import"./info-BOTcSQLe.js";import"./Popover-BjRfxx6m.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
