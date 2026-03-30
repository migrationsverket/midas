import{j as e,l}from"./iframe-B3vg1P6Y.js";import{S as t}from"./Skeleton-QlM7MUQy.js";import{T as p}from"./TextField-C9rs92LN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DwJRduUc.js";import"./utils-n5Tj6M7m.js";import"./FieldError-DFCvQgU7.js";import"./Text-DUOd7G_7.js";import"./useFocusRing-C6AjoB7d.js";import"./index-C-kva3F-.js";import"./index-BwBCavJo.js";import"./Text-BlzVF25n.js";import"./RSPContexts-CSreTt_o.js";import"./Form-CWiiR15h.js";import"./Group-CAI_apUh.js";import"./Input-WtolAofY.js";import"./Hidden-fGQAJpTQ.js";import"./Button-CnxNAqy1.js";import"./useLabel-DI7fi0Ro.js";import"./useLabels-DY9VFMmE.js";import"./useButton-BK-h-LZH.js";import"./useTextField-BU5ONFAO.js";import"./useControlledState-CZjhAhOw.js";import"./useField-CsXnP93Z.js";import"./TextField.module-DdivwlC8.js";import"./Label-CXhX_7LG.js";import"./Dialog-Ck0jNi_G.js";import"./OverlayArrow-CELSYf-a.js";import"./useResizeObserver-S4QQkevW.js";import"./Collection-DT7NMnAh.js";import"./index-CIxhDy0F.js";import"./Separator-p3gMGDdc.js";import"./SelectionManager-BMpZJpvj.js";import"./useEvent-BjWnd_Rp.js";import"./scrollIntoView-BP5DeFq1.js";import"./SelectionIndicator-DUR8eU9J.js";import"./useDescription-CNqQXY_p.js";import"./ListKeyboardDelegate-Dx_tUxi5.js";import"./PressResponder-DKn9mjlx.js";import"./useLocalizedStringFormatter-m57n-2t8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BnO3CeRR.js";import"./getScrollParent-BLZYM11o.js";import"./VisuallyHidden-BtPzLQ1W.js";import"./x-BD201NTP.js";import"./createLucideIcon-CB7DrpFH.js";import"./useLocalizedStringFormatter-Cy8EaEdn.js";import"./Heading--hjz4TQ0.js";import"./Button-Bihgy3ar.js";import"./Button.module-BB7N-cLd.js";import"./info-Df-oK5zf.js";import"./Popover-BI0fpvGT.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
