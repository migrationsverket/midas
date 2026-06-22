import{j as e,l}from"./iframe-Cb8Pppl7.js";import{S as t}from"./Skeleton-B5cGRk7z.js";import{T as p}from"./TextField-Cx4kr-rt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D0RdRV_e.js";import"./utils-Dj888C4V.js";import"./FieldError-D0-fOVgu.js";import"./Text-D2Ko1ZUZ.js";import"./useFocusRing-hqoRcLtB.js";import"./index-pijaOdDz.js";import"./index-CskuVvb4.js";import"./Text-C5__ZA60.js";import"./RSPContexts-DHg3Hsl6.js";import"./Form-CFGWDFPn.js";import"./Group-NyRvfXLY.js";import"./Input-5LTcMgXu.js";import"./Hidden-COGS7kep.js";import"./Button-C8pMS1J_.js";import"./useLabel-LJmuk9-y.js";import"./useLabels-C5l5JCC7.js";import"./useButton-SLXd8nlE.js";import"./useTextField-DbdeBffJ.js";import"./useControlledState-ixH4fEDK.js";import"./useField-BqzVMgOW.js";import"./TextField.module-DdivwlC8.js";import"./Label-BiZqGHJK.js";import"./Dialog-DSEhXHOx.js";import"./OverlayArrow-2ni0My97.js";import"./useResizeObserver-eW0Ome2f.js";import"./Collection-Cj61-OWh.js";import"./index-BeGPmrD_.js";import"./Separator-4_d9jsWj.js";import"./SelectionManager-D6ID8zOu.js";import"./useEvent-BCOghSZ0.js";import"./scrollIntoView-Dz6AtUUb.js";import"./SelectionIndicator-DDopmB2O.js";import"./useDescription-Bk-WLmUt.js";import"./ListKeyboardDelegate-CpEPtBzp.js";import"./PressResponder-BchWjLfC.js";import"./useLocalizedStringFormatter-B0S083G5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-f55oaWaw.js";import"./getScrollParent-Dcxt-3Ql.js";import"./VisuallyHidden-DtKq5Gdo.js";import"./ModalOverlay-DFYUls3I.js";import"./x-BvWkyjfg.js";import"./createLucideIcon-D7UMDINh.js";import"./useLocalizedStringFormatter-BKjuu9LT.js";import"./Heading-Ds7jCsCM.js";import"./Button-D4LxrXr0.js";import"./Button.module-BB7N-cLd.js";import"./info-BVhMhOhK.js";import"./Popover-CcsI4h7o.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
