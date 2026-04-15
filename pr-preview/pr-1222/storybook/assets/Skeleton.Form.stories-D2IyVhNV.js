import{j as e,l}from"./iframe-DjTiQbk5.js";import{S as t}from"./Skeleton-DoAYF3AO.js";import{T as p}from"./TextField-C7vbjUGT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DjphOGlJ.js";import"./utils-ionmxpx_.js";import"./FieldError-CUTcgzRi.js";import"./Text-C_ch0y44.js";import"./useFocusRing-DMf_tcM8.js";import"./index-zhJsHxyL.js";import"./index-D7ZGMXkv.js";import"./Text-Cem6pM3f.js";import"./RSPContexts-BQojnwjm.js";import"./Form-DuGe5VBy.js";import"./Group-Cbp4935P.js";import"./Input-CDNzlbFx.js";import"./Hidden-CDamOlST.js";import"./Button-DA9JAHIV.js";import"./useLabel-CLuSEdHo.js";import"./useLabels-BB0a4MRb.js";import"./useButton-CB170Mhz.js";import"./useTextField-DoHnYcWO.js";import"./useControlledState-DLtB8m1U.js";import"./useField-DuPle7CC.js";import"./TextField.module-DdivwlC8.js";import"./Label-BUGbDP7s.js";import"./Dialog-B9NbVbMu.js";import"./OverlayArrow-vh-4yc6Y.js";import"./useResizeObserver-IzOrHPod.js";import"./Collection-CI2wp3yd.js";import"./index-ByyGrUS2.js";import"./Separator-CLKONL4g.js";import"./SelectionManager-B0aIZvXy.js";import"./useEvent-DGEghV1n.js";import"./scrollIntoView-JFwGorYi.js";import"./SelectionIndicator-B-7ORbHv.js";import"./useDescription-DnMRFmWg.js";import"./ListKeyboardDelegate-uf4UQ6xb.js";import"./PressResponder-CWPEEGkL.js";import"./useLocalizedStringFormatter-b3SQCftA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-whHVtgH7.js";import"./getScrollParent-X2PToduC.js";import"./VisuallyHidden-CQ7IztLz.js";import"./ModalOverlay-DCv5gjfJ.js";import"./x-B1F8kTQk.js";import"./createLucideIcon-CJ41k5Dv.js";import"./useLocalizedStringFormatter-Bs_4plvK.js";import"./Heading-xT31pYvP.js";import"./Button-DB82qK_z.js";import"./Button.module-BB7N-cLd.js";import"./info-DfvZcCpI.js";import"./Popover-CB09FxHq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
