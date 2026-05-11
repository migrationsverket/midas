import{j as e,l}from"./iframe-BJvdaX8k.js";import{S as t}from"./Skeleton-Jh3uF7zi.js";import{T as p}from"./TextField-DyGeZ0D6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B4uZZuye.js";import"./utils-ZkRQ_pis.js";import"./FieldError-Dsj3zxX_.js";import"./Text-BNMtUmCk.js";import"./useFocusRing-DK9g2iem.js";import"./index-BdUbB4sv.js";import"./index-Do7MdBuV.js";import"./Text-C0JJvFIL.js";import"./RSPContexts-CoTdr7hf.js";import"./Form-BV7WK4aN.js";import"./Group-cyVCmGVY.js";import"./Input-Cu4qY4tm.js";import"./Hidden-1TQ91tjS.js";import"./Button-2rxKwo5b.js";import"./useLabel-C0O3ak7w.js";import"./useLabels-RexyVJCn.js";import"./useButton-5dWGjBz6.js";import"./useTextField-CrwnAK80.js";import"./useControlledState-CFLNrtf2.js";import"./useField-Bt0bpF0c.js";import"./TextField.module-DdivwlC8.js";import"./Label-BNy-7g9N.js";import"./Dialog-BBCV9lvL.js";import"./OverlayArrow-IEf8n93h.js";import"./useResizeObserver-CBFsdDoH.js";import"./Collection-61HWRNq1.js";import"./index-Cr3DY1hz.js";import"./Separator-CyKiX4fv.js";import"./SelectionManager-Dspabaik.js";import"./useEvent-CFX03mzz.js";import"./scrollIntoView-B05vA7IT.js";import"./SelectionIndicator-R-DvunUm.js";import"./useDescription-BybqaC--.js";import"./ListKeyboardDelegate-COto3r9Q.js";import"./PressResponder-CitJZjU6.js";import"./useLocalizedStringFormatter-DTwaBSs6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B67iHdv-.js";import"./getScrollParent-DAFKwCNH.js";import"./VisuallyHidden-PAT-EUPY.js";import"./ModalOverlay-CsOU3q1M.js";import"./x-DbFWgsIq.js";import"./createLucideIcon-CeO-jkh6.js";import"./useLocalizedStringFormatter-BZU7-x_x.js";import"./Heading-U99AeCxa.js";import"./Button-Bns6iq4v.js";import"./Button.module-BB7N-cLd.js";import"./info-DBh1-lZ5.js";import"./Popover-r-3xr7us.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
