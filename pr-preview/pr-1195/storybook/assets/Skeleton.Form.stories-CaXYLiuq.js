import{j as e,l}from"./iframe-BgSB-ePP.js";import{S as t}from"./Skeleton-CpkomVCq.js";import{T as p}from"./TextField-QkoSG9GO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CAr3_z4l.js";import"./utils-C5FyKCk8.js";import"./FieldError-6w5f847L.js";import"./Text-BdZEyiog.js";import"./useFocusRing-CEd5VvO1.js";import"./index-ByecJ60K.js";import"./index-DoB2i7js.js";import"./Text-Bp3gM7sB.js";import"./RSPContexts-Dgg5-u6I.js";import"./Form-Svy9eoUw.js";import"./Group-DDQgAvWO.js";import"./Input-B8QMzC7u.js";import"./Hidden-CuqOQBO_.js";import"./Button-Lo8sEzbF.js";import"./useLabel-BzarhHDS.js";import"./useLabels-DD4u-YLs.js";import"./useButton-DS4hbBUr.js";import"./useTextField-CexmqUaG.js";import"./useControlledState-DJPtRTJ6.js";import"./useField-C6hLFYbq.js";import"./TextField.module-DdivwlC8.js";import"./Label-CY7YqzCd.js";import"./Dialog-BSCnQNbw.js";import"./OverlayArrow-LFqYR0jf.js";import"./useResizeObserver-LO2zYuxY.js";import"./Collection-BFk0hYY1.js";import"./index-CIw37Vap.js";import"./Separator-C27PGBW-.js";import"./SelectionManager-ClgoC-jL.js";import"./useEvent-Dxq_2Jhl.js";import"./scrollIntoView-CjHtu3Nd.js";import"./SelectionIndicator-DsEab8pP.js";import"./useDescription-C2lPd98U.js";import"./ListKeyboardDelegate-DAJhFSXQ.js";import"./PressResponder-DgCc_tBW.js";import"./useLocalizedStringFormatter-DhW77Uj_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B-urWx1P.js";import"./getScrollParent-DmZ0CDlB.js";import"./VisuallyHidden-Bm0pqSKV.js";import"./x-CEx6wB1z.js";import"./createLucideIcon-B3pidq9m.js";import"./useLocalizedStringFormatter-CqnGehUR.js";import"./Heading-_oJ7EFQd.js";import"./Button-BXdJw4HN.js";import"./Button.module-BB7N-cLd.js";import"./info-Dypkbl_8.js";import"./Popover-YVA3dvw8.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
