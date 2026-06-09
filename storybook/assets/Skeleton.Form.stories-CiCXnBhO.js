import{j as e,l}from"./iframe-BKRZxWBZ.js";import{S as t}from"./Skeleton-7-F65Y2G.js";import{T as p}from"./TextField-BgiYSQwT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D_7tL4Fk.js";import"./utils-Y4JGSljl.js";import"./FieldError-DG-tonkS.js";import"./Text-DGzS_SrA.js";import"./useFocusRing-CbgDMaVp.js";import"./index-2JeAuUPI.js";import"./index-B0HfdUG8.js";import"./Text-8xjuYN6y.js";import"./RSPContexts-BLR_J2o2.js";import"./Form-fTlquUmi.js";import"./Group-B955Gz_D.js";import"./Input-By6lc-FN.js";import"./Hidden-D261fXZx.js";import"./Button-Bag6HyT1.js";import"./useLabel-BieDJ9AW.js";import"./useLabels-BXP993UL.js";import"./useButton-SiXTvTV2.js";import"./useTextField-CBLab7Xb.js";import"./useControlledState-C2ay6qCb.js";import"./useField-CPhZds7-.js";import"./TextField.module-DdivwlC8.js";import"./Label-IMJYRpEG.js";import"./Dialog-C7WdF5zb.js";import"./OverlayArrow-CvFYChOZ.js";import"./useResizeObserver-BVT5-EIf.js";import"./Collection-Dp6UAv6j.js";import"./index-Kq-8Ist-.js";import"./Separator-C7yLVvrB.js";import"./SelectionManager-DBzFzXpy.js";import"./useEvent-CJgh-wfk.js";import"./scrollIntoView-9DVoBKAT.js";import"./SelectionIndicator-DfHJkRwt.js";import"./useDescription-BeUx0Y0j.js";import"./ListKeyboardDelegate-rL3nlI98.js";import"./PressResponder-BNXMCjL5.js";import"./useLocalizedStringFormatter-CGG1SsZP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sv7RN9Kz.js";import"./getScrollParent-5vt1eUdP.js";import"./VisuallyHidden-DbkQs6Cg.js";import"./ModalOverlay-DEAZgSQq.js";import"./x-BTizcETx.js";import"./createLucideIcon-B2GxFjYG.js";import"./useLocalizedStringFormatter-gzrdZE98.js";import"./Heading-CtngZd_I.js";import"./Button-D0aetTqs.js";import"./Button.module-BB7N-cLd.js";import"./info-Dk1VuCco.js";import"./Popover-DSUknNwg.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
