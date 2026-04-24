import{j as e,l}from"./iframe-C2ifzLFW.js";import{S as t}from"./Skeleton-CJJhy5SY.js";import{T as p}from"./TextField-6H30ciD8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DbfxfWpD.js";import"./utils-73qIUJkS.js";import"./FieldError-CG9ZMBd0.js";import"./Text-CD2yXDFK.js";import"./useFocusRing-D5sowTP0.js";import"./index-D40BKMj1.js";import"./index-Cku3_zST.js";import"./Text-BHGhTSao.js";import"./RSPContexts-D7FudQaj.js";import"./Form-DaC6-Hhf.js";import"./Group-DTqfokrf.js";import"./Input-BI0h4qhc.js";import"./Hidden-arruSKBU.js";import"./Button-DrEkBHNm.js";import"./useLabel-BkkkauYh.js";import"./useLabels-BURtxaJp.js";import"./useButton-BQcZ3c2T.js";import"./useTextField-6rn5EayW.js";import"./useControlledState-DIVk5_t_.js";import"./useField-DcFwBOo5.js";import"./TextField.module-DdivwlC8.js";import"./Label-DH4DjrXM.js";import"./Dialog-C0FA6Tsu.js";import"./OverlayArrow-B9UHKrkA.js";import"./useResizeObserver-BNAtunnU.js";import"./Collection-ChbGXkT5.js";import"./index-BueJca3e.js";import"./Separator-Dq4MbYrB.js";import"./SelectionManager-Blx_W2he.js";import"./useEvent-DOTctoG_.js";import"./scrollIntoView-Ch2TMXIT.js";import"./SelectionIndicator-BLMObCuw.js";import"./useDescription-CmVv1Pv8.js";import"./ListKeyboardDelegate-DyBYuJfv.js";import"./PressResponder-D9Jdrd3Y.js";import"./useLocalizedStringFormatter-Bfe8f42t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXuqJHQy.js";import"./getScrollParent-DnkUn25f.js";import"./VisuallyHidden-B1aqafDE.js";import"./ModalOverlay-BbpR61PI.js";import"./x-Dn6Rxjbp.js";import"./createLucideIcon-BoPfjMKr.js";import"./useLocalizedStringFormatter-BkkLiQpX.js";import"./Heading-C-leph9A.js";import"./Button-DtzYCx6b.js";import"./Button.module-BB7N-cLd.js";import"./info-Bm2CyIt9.js";import"./Popover-CTysr9eA.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
