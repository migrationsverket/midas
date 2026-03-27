import{j as e,l}from"./iframe-BwW6Fqvd.js";import{S as t}from"./Skeleton-4OD2ZIBi.js";import{T as p}from"./TextField-CnsP58rQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CWcZg5A6.js";import"./utils-Bghr1fcB.js";import"./FieldError-DG2mBVdw.js";import"./Text-CYDu8Dn_.js";import"./useFocusRing-B8ItjY_Y.js";import"./index-BtFqcAbs.js";import"./index-BBxAD_Mx.js";import"./Text-D0nO-HBI.js";import"./RSPContexts-Bh9oL_fS.js";import"./Form-C0ycgpGF.js";import"./Group-BXB9YxFU.js";import"./Input-p9o3LqS3.js";import"./Hidden-DOVwj0BP.js";import"./Button-zWxdU5Zd.js";import"./useLabel-BplFUPFd.js";import"./useLabels-CQajE6fa.js";import"./useButton-BEskBg1H.js";import"./useTextField-CrtQoaTV.js";import"./useControlledState-DGQCfKNy.js";import"./useField-Cv7gnOSH.js";import"./TextField.module-DdivwlC8.js";import"./Label-sxDBxkWi.js";import"./Dialog-BRz4jbex.js";import"./OverlayArrow-DWhc0KKE.js";import"./useResizeObserver-CgzeOzAv.js";import"./Collection-DDKAL2kq.js";import"./index-C1W8SJ9q.js";import"./Separator-cNZLL5LH.js";import"./SelectionManager-D0j-6TvJ.js";import"./useEvent-DMcK-jhf.js";import"./scrollIntoView-CvIpTomZ.js";import"./SelectionIndicator-Cf42c1mS.js";import"./useDescription-DDaxYDi5.js";import"./ListKeyboardDelegate-Mx-nXjyt.js";import"./PressResponder-8_a2ySpr.js";import"./useLocalizedStringFormatter-B_9ddfhq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQkHoCqk.js";import"./getScrollParent-C7W5J6K6.js";import"./VisuallyHidden-6rJm-kLH.js";import"./x-BceaA5bl.js";import"./createLucideIcon-baXbygoM.js";import"./useLocalizedStringFormatter-cARnU_EF.js";import"./Heading-B3fvxMc9.js";import"./Button-D29dOr6P.js";import"./Button.module-BB7N-cLd.js";import"./info-BwI5uWQ1.js";import"./Popover-CkfRqJc8.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
