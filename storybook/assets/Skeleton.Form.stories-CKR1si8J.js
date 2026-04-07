import{j as e,l}from"./iframe-oKPevWaY.js";import{S as t}from"./Skeleton-R1ZNaQ3B.js";import{T as p}from"./TextField-BTbFTfah.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CdqY5GMo.js";import"./utils-BqjuQA51.js";import"./FieldError-B9nT_kkA.js";import"./Text-NuhHAO3F.js";import"./useFocusRing-BNAmj3ga.js";import"./index-C5PKnBSq.js";import"./index-DgJJn68D.js";import"./Text-CEmixCfV.js";import"./RSPContexts-I8GuPoNW.js";import"./Form-D8hKIz8A.js";import"./Group-D4AR734E.js";import"./Input-CjDHzIIp.js";import"./Hidden-DpO7vPy1.js";import"./Button-UMnKvlHB.js";import"./useLabel-DD_tHSVp.js";import"./useLabels-Dudi4a5M.js";import"./useButton-BQzjyOJs.js";import"./useTextField-B-1OQ-Tr.js";import"./useControlledState-CyVhgPro.js";import"./useField-Bl_GZwWa.js";import"./TextField.module-DdivwlC8.js";import"./Label-Brw2JrKu.js";import"./Dialog-BzgqjoUu.js";import"./OverlayArrow-DvjZHb9S.js";import"./useResizeObserver-MEdL5GdH.js";import"./Collection-CkdTzR9R.js";import"./index-CzQfmgnt.js";import"./Separator-C-f_gDjQ.js";import"./SelectionManager-CDyUNFjs.js";import"./useEvent-IXAyeg2x.js";import"./scrollIntoView-B_u9uatn.js";import"./SelectionIndicator-lk-xC_bn.js";import"./useDescription-Ya8G2xdV.js";import"./ListKeyboardDelegate-i-dcu7Zi.js";import"./PressResponder-Cml_sTZq.js";import"./useLocalizedStringFormatter-Ds6Qg8Ar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rH8nux2W.js";import"./getScrollParent-B4qiDCOv.js";import"./VisuallyHidden-D5YwBUcA.js";import"./x-DIFCquM7.js";import"./createLucideIcon-D_CPhcXk.js";import"./useLocalizedStringFormatter-C0pOBFKJ.js";import"./Heading-CAvfyWoD.js";import"./Button-BPGT5-63.js";import"./Button.module-BB7N-cLd.js";import"./info-DiXhKcAi.js";import"./Popover-DUzKO22e.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
