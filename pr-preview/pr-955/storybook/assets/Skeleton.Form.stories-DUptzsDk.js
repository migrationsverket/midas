import{j as e,l}from"./iframe-DOTz5vLQ.js";import{S as t}from"./Skeleton-SG538Ael.js";import{T as d}from"./TextField-cLmCNHlj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-c1z6WX1s.js";import"./utils-DXAj4U2V.js";import"./TextField-DqQnaK8-.js";import"./FieldError-ja_Ote2y.js";import"./Text-CjdyZ5QW.js";import"./useFocusRing-q_YwuAcy.js";import"./index-nlddG7ZQ.js";import"./index-owQEYkmE.js";import"./Text-DrWNBvy9.js";import"./RSPContexts-yjaANf4K.js";import"./Form-7pjFp-vR.js";import"./useFormValidation-DHmiRRIw.js";import"./Group-C3MlQRxR.js";import"./Input-CGGCTRsv.js";import"./Hidden-BGFB1vfR.js";import"./Button-DIeU5GkG.js";import"./useLabels-884FkDRT.js";import"./useButton-DTRH3a68.js";import"./useTextField-CqcVDXje.js";import"./useControlledState-_AKX2YUw.js";import"./useField-UT8FVghx.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Cog6QTTi.js";import"./Dialog-C78GsjfW.js";import"./OverlayArrow-DkSvYScg.js";import"./useResizeObserver-e8Z3Dgzx.js";import"./Collection-CtXmJOQn.js";import"./index-DiTbGSG6.js";import"./Separator-C_ECwe9c.js";import"./SelectionManager-CUeLG0jH.js";import"./useEvent-CPymZ_91.js";import"./scrollIntoView-DX3Zfy83.js";import"./SelectionIndicator-B2UAVmil.js";import"./useDescription-CIj0AxHV.js";import"./ListKeyboardDelegate-Cg1KrN-g.js";import"./PressResponder-Dl2zQSi2.js";import"./useLocalizedStringFormatter-Bhl8mpnd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C__SYK6q.js";import"./VisuallyHidden-CKFFXczS.js";import"./Button-BI9bImZc.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DemG_s2c.js";import"./createLucideIcon-0SbUiGqR.js";import"./x-DEYmj3es.js";import"./Heading-NV9ut5Xx.js";import"./info-DyVhyr_S.js";import"./Popover-DRG_lf-T.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
