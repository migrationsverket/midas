import{j as e,l}from"./iframe-iIM7yFlw.js";import{S as t}from"./Skeleton-B04Pae_P.js";import{T as d}from"./TextField-CCjstu6X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Xmk6lbDN.js";import"./utils-DNy6buAm.js";import"./FieldError-BJhyn0Bc.js";import"./Text-CpJA3Ugt.js";import"./useFocusRing-CERt57Nt.js";import"./index-C-jrAZ8o.js";import"./index-DvWNh13S.js";import"./Text-GrSmyAjf.js";import"./RSPContexts-83tn9EqZ.js";import"./Form-BThFu9wJ.js";import"./Group--U88wz4S.js";import"./Input-B6Xwy6Dy.js";import"./Hidden-pJH8oqvO.js";import"./Button-XY1USx81.js";import"./useLabels-BYU3vliF.js";import"./useButton-BOKRtXXu.js";import"./useTextField-B2mgeuZL.js";import"./useControlledState-CjC15qhB.js";import"./useField-Df6YKAwX.js";import"./TextField.module-DdivwlC8.js";import"./Label-PJjgvv4y.js";import"./Dialog-1q0xNrQk.js";import"./OverlayArrow-Q_IgSl4E.js";import"./useResizeObserver-fmPui3nV.js";import"./Collection-CyxkDkja.js";import"./index-CZ1Ul0RJ.js";import"./Separator-CQflSBMB.js";import"./SelectionManager-bMjJz1Tm.js";import"./useEvent-D1Z-PedL.js";import"./scrollIntoView-DCsIsjsr.js";import"./SelectionIndicator-BVwb6FSQ.js";import"./useDescription-CJa9wdXg.js";import"./ListKeyboardDelegate-8Cq9jrW8.js";import"./PressResponder-NKgHKbm7.js";import"./useLocalizedStringFormatter-CVQ2svrB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGG11RQa.js";import"./getScrollParent-LhiTx7mo.js";import"./VisuallyHidden-BIQkIPH_.js";import"./x-BJvrnR5U.js";import"./createLucideIcon-BWICqhq6.js";import"./useLocalizedStringFormatter-CVsIIBgW.js";import"./Heading-CASTwqW7.js";import"./Button-D34JSMMc.js";import"./Button.module-BB7N-cLd.js";import"./info-DIhPkI6G.js";import"./Popover-BlQV_wkW.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
