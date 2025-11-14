import{j as e,l}from"./iframe-Dnj0zt3A.js";import{S as t}from"./Skeleton-1z751N7z.js";import{T as d}from"./TextField-Do31TmTM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BaDdUQno.js";import"./utils-CZ7ujQb6.js";import"./TextField-BwjNd0hQ.js";import"./FieldError-Ds1rpN1P.js";import"./Text-BZcE4PZu.js";import"./useFocusRing-BJGbDr4g.js";import"./index-BZ5oXR7W.js";import"./index-w9N2b8_o.js";import"./Text-CUy2D1XG.js";import"./RSPContexts-CiYHqfM8.js";import"./Form-cFHO0f2E.js";import"./useFormValidation-D-Igx394.js";import"./Group-CIHVUO1c.js";import"./Input-U8DVOMOI.js";import"./Hidden-BdPJwGeM.js";import"./Button-BEMXi9hp.js";import"./useLabels-DPkdJjpB.js";import"./useButton-DXRKrxCT.js";import"./useTextField-CyCzrgJR.js";import"./useControlledState-BLnkZwm8.js";import"./useField-BagSvq-O.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-7diI1UcW.js";import"./Dialog-tO2RZT7d.js";import"./OverlayArrow-CFaynpEm.js";import"./useResizeObserver--nBot81v.js";import"./Collection-CG7PYTDM.js";import"./index-CLdXDaJ0.js";import"./Separator-CUD5gTMq.js";import"./SelectionManager-BjshcM7f.js";import"./useEvent-nNccmmdj.js";import"./scrollIntoView-D8GpqHqj.js";import"./SelectionIndicator-ZZ1g1Bvd.js";import"./useDescription-BuSTaiIN.js";import"./ListKeyboardDelegate-BhP_UMyo.js";import"./PressResponder-BMPDHw7_.js";import"./useLocalizedStringFormatter-B0e0Ob-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BUEVh28_.js";import"./VisuallyHidden-OA8MFr3H.js";import"./useLocalizedStringFormatter-7drUIReq.js";import"./Button-D037RcO0.js";import"./Button.module-CtQ1deO8.js";import"./x-DsZiGScE.js";import"./createLucideIcon-2omQZeFD.js";import"./Heading-B3Ef_nQn.js";import"./info-R0mXtk23.js";import"./Popover-DMYBnjwV.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
