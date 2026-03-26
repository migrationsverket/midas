import{j as e,l}from"./iframe-76Zbcpfm.js";import{S as t}from"./Skeleton-CXjX8cxv.js";import{T as p}from"./TextField-Di04R55-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bk40s6Uk.js";import"./utils-DKhtQhER.js";import"./FieldError-B3CXz0a8.js";import"./Text-BtsDHilU.js";import"./useFocusRing--jUHa30l.js";import"./index-CYYDks4G.js";import"./index-Bikl_74K.js";import"./Text-BvHKVa0m.js";import"./RSPContexts-CAiLW-Ic.js";import"./Form-CdmBZCXo.js";import"./Group-CR6mBLpN.js";import"./Input-BOXA6tbT.js";import"./Hidden-CtdbjR1M.js";import"./Button-CGIWV9qi.js";import"./useLabel-Dyg0KZIl.js";import"./useLabels-DGXzYi66.js";import"./useButton-FpSsaIPg.js";import"./useTextField-D3-x0MTG.js";import"./useControlledState-DdSN72zB.js";import"./useField-BshCWbMs.js";import"./TextField.module-DdivwlC8.js";import"./Label-BglLfJ-b.js";import"./Dialog-B6W4fmxL.js";import"./OverlayArrow-of6YWWCS.js";import"./useResizeObserver-CgzeIHJs.js";import"./Collection-Su8Sna0o.js";import"./index-BvVm8IC3.js";import"./Separator-Dhpk1ikZ.js";import"./SelectionManager-qL0EJH9N.js";import"./useEvent-DXqjRKfs.js";import"./scrollIntoView-B9jKnzlj.js";import"./SelectionIndicator-BrzQIpPF.js";import"./useDescription-Cz09nlnz.js";import"./ListKeyboardDelegate-B5lh8Oqz.js";import"./PressResponder-nmg0t9hH.js";import"./useLocalizedStringFormatter-CaBWWaJn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cvg5n42G.js";import"./getScrollParent-CNZhp6tM.js";import"./VisuallyHidden-r55FRtGJ.js";import"./x-Cpfzd3NA.js";import"./createLucideIcon-C-Fi2tn8.js";import"./useLocalizedStringFormatter-CyEIBYX2.js";import"./Heading-CFPreU3P.js";import"./Button-DDxQAl6w.js";import"./Button.module-BB7N-cLd.js";import"./info-CE74sDPO.js";import"./Popover-B6HqEk8P.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
