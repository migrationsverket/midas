import{j as e,l}from"./iframe-DeJZYfs6.js";import{S as t}from"./Skeleton-lWMZgrtS.js";import{T as p}from"./TextField-gOwWVg1y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C7SAQ-dF.js";import"./utils-CVaTJ4pr.js";import"./FieldError-Bu4wLSzH.js";import"./Text-DiI9AjCa.js";import"./useFocusRing-EUZ5WM39.js";import"./index-DUC36L3p.js";import"./index-Dld1jC9-.js";import"./Text-BDvIHgKo.js";import"./RSPContexts-BW4hyt92.js";import"./Form-C-IA29jh.js";import"./Group-B-AmjHbU.js";import"./Input-7EHMCOwY.js";import"./Hidden-CpOEnTcU.js";import"./Button-TyrtoBf7.js";import"./useLabel-BTghzENV.js";import"./useLabels-DAGFp_YT.js";import"./useButton-B3BOjKYq.js";import"./useTextField-CNvSGf-Y.js";import"./useControlledState-e4htfzmn.js";import"./useField-DP3RVU73.js";import"./TextField.module-DdivwlC8.js";import"./Label-DGHbBSoZ.js";import"./Dialog-BKKPlMRz.js";import"./OverlayArrow-BX-XAuow.js";import"./useResizeObserver-BcdcrqhO.js";import"./Collection-BPBdLDAU.js";import"./index-X7ll_aVF.js";import"./Separator-DP8XjcFV.js";import"./SelectionManager-C1t4FTfK.js";import"./useEvent-Prn2T694.js";import"./scrollIntoView-CmHT6ElZ.js";import"./SelectionIndicator-CfLsX9sj.js";import"./useDescription-DM4YbjnM.js";import"./ListKeyboardDelegate-C4mFB7JL.js";import"./PressResponder-81Dm5uHE.js";import"./useLocalizedStringFormatter-D8Vo3ZTR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Drxg6nEc.js";import"./getScrollParent-cyrVl-ro.js";import"./VisuallyHidden-C7trIB5i.js";import"./Dialog-DImgXYM0.js";import"./x-QMdCwQzi.js";import"./createLucideIcon-BN41fbAL.js";import"./useLocalizedStringFormatter-Dswz4gW1.js";import"./Heading-OxyOCkj5.js";import"./Button-7AU2H28z.js";import"./Button.module-BB7N-cLd.js";import"./info-Bctd-Gpa.js";import"./Popover-BFExrSuc.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
