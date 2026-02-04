import{j as e,l}from"./iframe-upcgl7eM.js";import{S as t}from"./Skeleton-Dpogua-B.js";import{T as p}from"./TextField-CCr5OUWd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BDmIFEbe.js";import"./utils-DIx1IamT.js";import"./TextField-CwTKWCmR.js";import"./FieldError-_edkh_FM.js";import"./Text-4DZ9uLvx.js";import"./useFocusRing-BqsA1vx-.js";import"./index-BuYUjQXP.js";import"./index-SbvGQsJp.js";import"./Text-vUmVOUpM.js";import"./RSPContexts-B8fjskTn.js";import"./Form-D19yNL9c.js";import"./useFormValidation-Cwb3rUYJ.js";import"./Group-rRuLZDs-.js";import"./Input-jLib92a1.js";import"./Hidden-BVPjc43X.js";import"./Button-Bm_96dJ2.js";import"./useLabels-CZlpXa7M.js";import"./useButton-DXi2-Ij4.js";import"./useTextField-C0go8Gbu.js";import"./useControlledState-DxbIPEYQ.js";import"./useField-Vj9LyZT-.js";import"./TextField.module-DpzeWGpt.js";import"./Label-B1SiNrFI.js";import"./Dialog-DirbhgUz.js";import"./OverlayArrow-DxvCU2Fz.js";import"./useResizeObserver-_n1lKi44.js";import"./Collection-CR_ONP3f.js";import"./index-DClodtP5.js";import"./Separator-BO1A8x86.js";import"./SelectionManager-CjhZccZY.js";import"./useEvent-oippFPIE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BL7yS6W5.js";import"./useDescription-B7RZGwxx.js";import"./ListKeyboardDelegate-CIBYFWRq.js";import"./PressResponder-BoZqndGc.js";import"./useLocalizedStringFormatter-B_89sXt0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ngvn7jp2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CruDu4Gn.js";import"./Button-D6mILSsj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-XLs9F4JA.js";import"./createLucideIcon-NdGz0Ptw.js";import"./x-CWmj5Rac.js";import"./Heading-BkDIPQhc.js";import"./info-CouqQb4i.js";import"./Popover-Cot2bbrT.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
