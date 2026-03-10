import{j as e,l}from"./iframe-BMeVz6y-.js";import{S as t}from"./Skeleton-DAP1KHLX.js";import{T as p}from"./TextField-DA2gLM8t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BxkpWg4K.js";import"./utils-gLrvz57I.js";import"./FieldError-B9b-doZT.js";import"./Text-BobX77Rp.js";import"./useFocusRing-B3A74r94.js";import"./index-C78FzeUG.js";import"./index-DuQDy4Im.js";import"./Text-D9ERza-j.js";import"./RSPContexts-CcyIB1J1.js";import"./Form-Bfg6c9lw.js";import"./useFormValidation-B6ysVh97.js";import"./Group-B51iaWmf.js";import"./Input-DV93on-B.js";import"./Hidden-BtcHHrEj.js";import"./Button-YuHrdvqU.js";import"./useLabels-DU1760XI.js";import"./useButton-BfWVW3lI.js";import"./useTextField-CO-xMpuL.js";import"./useControlledState-Mz74w--R.js";import"./useField-9rt5-gOQ.js";import"./TextField.module-DdivwlC8.js";import"./Label-vtL9TIlw.js";import"./Dialog-KWaqysSJ.js";import"./OverlayArrow-BHYP-nw2.js";import"./useResizeObserver-CkJy-d8S.js";import"./Collection-Bheqxq41.js";import"./index-BPu_xHQW.js";import"./Separator-DruktKNL.js";import"./SelectionManager-D27pdCve.js";import"./useEvent-BuIlv2vt.js";import"./scrollIntoView-xPfDbdJG.js";import"./SelectionIndicator-Boxf7bWG.js";import"./useDescription-BIdxB60Q.js";import"./ListKeyboardDelegate-DGVlHrIu.js";import"./PressResponder-CUPqxTwQ.js";import"./useLocalizedStringFormatter-B6BaJT_D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkkeSDjz.js";import"./getScrollParent-olEr1uYA.js";import"./VisuallyHidden-DGyUcRul.js";import"./Button-DkV7wLYz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BThYc7xn.js";import"./createLucideIcon-DWjVVpun.js";import"./x-Bqp_P532.js";import"./Heading-CYpAETgL.js";import"./info-CSrZSnjJ.js";import"./Popover-D0SMKZhw.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
