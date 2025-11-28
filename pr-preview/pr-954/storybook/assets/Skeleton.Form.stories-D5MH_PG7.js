import{j as e,l}from"./iframe-B_gFPxCX.js";import{S as t}from"./Skeleton-DCpIDNyK.js";import{T as d}from"./TextField-tI76vhpa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-w646sgPe.js";import"./utils-Du2m8pi6.js";import"./TextField-Clk-pP_g.js";import"./FieldError-BRP4YCh0.js";import"./Text-Cy6zixyL.js";import"./useFocusRing-B_f_9ZIB.js";import"./index-BmP6HVCy.js";import"./index-Bk1XN2WI.js";import"./Text-Ccf4bkuw.js";import"./RSPContexts-DOLdHzZj.js";import"./Form-EaBlFtq8.js";import"./useFormValidation-6JoG4g-D.js";import"./Group-8Xs049YL.js";import"./Input-BjHegih_.js";import"./Hidden-OS0LVvpv.js";import"./Button-Dh_N8FAk.js";import"./useLabels-CKCRW4zl.js";import"./useButton-CXzrlu1a.js";import"./useTextField-C5iNfsRz.js";import"./useControlledState-x6V7bWVY.js";import"./useField-DtPq_gCn.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BH4o83cx.js";import"./Dialog-DOPSq2FJ.js";import"./OverlayArrow-_O_zpamE.js";import"./useResizeObserver-BDLi-sOw.js";import"./Collection-B5g4Ji_P.js";import"./index-r0j0FupA.js";import"./Separator-CH6clOTP.js";import"./SelectionManager-DjNIWJ5d.js";import"./useEvent-C8IsYOHI.js";import"./scrollIntoView-vBXGo_Pf.js";import"./SelectionIndicator-arulDhFq.js";import"./useDescription-BgYJLdYq.js";import"./ListKeyboardDelegate-B7RsbFFa.js";import"./PressResponder-CpdHDAqB.js";import"./useLocalizedStringFormatter-DfaT6UQu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cy2bhqUS.js";import"./VisuallyHidden-Ds2FNi3l.js";import"./Button-CMmiPFF7.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DSk1S1l2.js";import"./createLucideIcon-C8OA8uCW.js";import"./x-BWZmfWmr.js";import"./Heading-CTpAMjcl.js";import"./info-B5JFIP-w.js";import"./Popover-Dpw8Pi7B.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
