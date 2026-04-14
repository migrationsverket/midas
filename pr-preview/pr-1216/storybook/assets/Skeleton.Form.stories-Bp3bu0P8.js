import{j as e,l}from"./iframe-BgN3T3xs.js";import{S as t}from"./Skeleton-JKCQ8wYB.js";import{T as p}from"./TextField-DDQPt046.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DCeUlYkO.js";import"./utils-Cy9VbIrx.js";import"./FieldError-Cg97d-Xo.js";import"./Text-Cws1TLos.js";import"./useFocusRing-s6LcsVmw.js";import"./index-C8VIyOAM.js";import"./index-DDvZmCCm.js";import"./Text-Bm_qFAHe.js";import"./RSPContexts-Bpqk6zEL.js";import"./Form-D63x0QWC.js";import"./Group-FYdA3O0R.js";import"./Input-ZoQ5ytTk.js";import"./Hidden-BUpoh45I.js";import"./Button-BtxXkeGG.js";import"./useLabel-C7Safkp7.js";import"./useLabels-CtvG29M_.js";import"./useButton-CYBdLk3p.js";import"./useTextField-DMHLIgZ7.js";import"./useControlledState-DuMP6pst.js";import"./useField-oBOSJSDH.js";import"./TextField.module-DdivwlC8.js";import"./Label-D1gG2SbZ.js";import"./Dialog-VV4Th7nF.js";import"./OverlayArrow-YC9l2RCr.js";import"./useResizeObserver-D3y4OrMP.js";import"./Collection-B-iXDbz1.js";import"./index-DFoRH5SL.js";import"./Separator-7plsTytO.js";import"./SelectionManager-eGbG9yBw.js";import"./useEvent-Ca5NannD.js";import"./scrollIntoView-AzFj4YLb.js";import"./SelectionIndicator-BLCuA8ps.js";import"./useDescription-5FEPrfMM.js";import"./ListKeyboardDelegate-ClVPUkv2.js";import"./PressResponder-C1rE0JYs.js";import"./useLocalizedStringFormatter-B0LCJo7R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKbwhPfX.js";import"./getScrollParent-tQwdPnh6.js";import"./VisuallyHidden-DwUK2ATG.js";import"./Modal-ChminT0Z.js";import"./x-U-sIlJJn.js";import"./createLucideIcon-BePQROhA.js";import"./useLocalizedStringFormatter-B8VZY1gF.js";import"./Heading-zTI0ET9q.js";import"./Button-zGEEwAU5.js";import"./Button.module-BB7N-cLd.js";import"./info-BP6xMiLF.js";import"./Popover-BQH6Ulan.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
