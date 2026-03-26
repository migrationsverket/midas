import{j as e,l}from"./iframe-Nwmt74ZK.js";import{S as t}from"./Skeleton-B3buJMvd.js";import{T as p}from"./TextField-DTMaorPB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-rKdzwrY1.js";import"./utils-C6s6aSRX.js";import"./FieldError-Br06WdKh.js";import"./Text-C173mZfn.js";import"./useFocusRing-CWypq6Zx.js";import"./index-ch-f0Bx3.js";import"./index-BhWzPHH5.js";import"./Text-BsCHJ-9I.js";import"./RSPContexts-DNNsF2wO.js";import"./Form-BUdIhl_c.js";import"./Group-CuITHOVp.js";import"./Input-BsAQh_8z.js";import"./Hidden-BPf52IcM.js";import"./Button-BFe_Cqcu.js";import"./useLabel-NM3EoEuU.js";import"./useLabels-BWJGA9gI.js";import"./useButton-DPlFKcS8.js";import"./useTextField-C4d_BV9u.js";import"./useControlledState-BkVOv_aE.js";import"./useField-B5-kLS0F.js";import"./TextField.module-DdivwlC8.js";import"./Label-OJ9nlz6U.js";import"./Dialog-BLTL2zVN.js";import"./OverlayArrow-N2Kt-7vw.js";import"./useResizeObserver-CVivOOg4.js";import"./Collection-04O837hB.js";import"./index-Di_k3Lqc.js";import"./Separator-CUvOzt4x.js";import"./SelectionManager-Bq1KI3CN.js";import"./useEvent-BjT0dJCf.js";import"./scrollIntoView-BcBxafTP.js";import"./SelectionIndicator-BR6m66Ye.js";import"./useDescription-NCT_P-H8.js";import"./ListKeyboardDelegate-Dyhz4T5l.js";import"./PressResponder-BlO6qK2G.js";import"./useLocalizedStringFormatter-BJ5VKpXB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DRZdtGyM.js";import"./getScrollParent-C5s_m2ho.js";import"./VisuallyHidden-CtXXaRnR.js";import"./x-CcBqmnVo.js";import"./createLucideIcon-BM-CznMN.js";import"./useLocalizedStringFormatter-C2TFJ0GM.js";import"./Heading-BhJocmar.js";import"./Button-BFrhdIAu.js";import"./Button.module-BB7N-cLd.js";import"./info-qgrcXFdE.js";import"./Popover-DWE94kjv.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
