import{j as e,l}from"./iframe-CNQjlvDm.js";import{S as t}from"./Skeleton-CnlwJIl5.js";import{T as d}from"./TextField-hJa_yvQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-SnFG2NBe.js";import"./utils-gQ4yd-Ab.js";import"./TextField-BKwfXOe2.js";import"./FieldError-B77Pd3sF.js";import"./Text-CBKz5-Bc.js";import"./useFocusRing-6KaOFFld.js";import"./index-BAocd020.js";import"./index-Crk6Oovq.js";import"./Text-_2-H1EYs.js";import"./RSPContexts-ZpwQ7nh7.js";import"./Form-CowfI73D.js";import"./useFormValidation-D93gSj4q.js";import"./Group-DH-2Df9_.js";import"./Input-3C5XDWXg.js";import"./Hidden-CKgMcecd.js";import"./Button-Bq-mABfS.js";import"./useLabels-Bfeh6CAt.js";import"./useButton-C5sXC89g.js";import"./useTextField-CyQke-mJ.js";import"./useControlledState-Cw34tQo_.js";import"./useField-1JlohsQ1.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-D33bRIfp.js";import"./Dialog-B1H_-A6r.js";import"./OverlayArrow-DtDPjsf5.js";import"./useResizeObserver-pDTrh_aR.js";import"./Collection-DIjDhtq1.js";import"./index-B3BEo6A6.js";import"./Separator--1fXuolt.js";import"./SelectionManager-CNUg_EDX.js";import"./useEvent-BVIAA-zB.js";import"./scrollIntoView-GpU6uT5D.js";import"./SelectionIndicator-9b2vx5r8.js";import"./useDescription-DhRtkqqX.js";import"./ListKeyboardDelegate-BpGS_WAt.js";import"./PressResponder-FiW4JgQ7.js";import"./useLocalizedStringFormatter-BAx4OKHg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CSope_Cn.js";import"./VisuallyHidden-CkZ7QXN2.js";import"./Button-DKj7SgkX.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CuiX0-xA.js";import"./createLucideIcon-CLo-1QQP.js";import"./x-gQKg2dFZ.js";import"./Heading-Cc7GuOtf.js";import"./info-BBo0T8LW.js";import"./Popover-CL60AxRn.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
