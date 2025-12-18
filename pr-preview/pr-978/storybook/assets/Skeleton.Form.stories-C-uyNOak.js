import{j as e,l}from"./iframe-BQVZAmhX.js";import{S as t}from"./Skeleton-BmXrCmQT.js";import{T as p}from"./TextField-Cco1shPo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C5RK2Qlg.js";import"./utils-DBGKxhvy.js";import"./TextField-DNDD1KLL.js";import"./FieldError-Dvo9z3NV.js";import"./Text-Cl7VN2WD.js";import"./useFocusRing-CZ1ppHUm.js";import"./index-DhVWvG0v.js";import"./index-jPah0Wh4.js";import"./Text-BDOgt3-X.js";import"./RSPContexts-cGmYjQmV.js";import"./Form-B41ZDlT2.js";import"./useFormValidation-DdOFiruI.js";import"./Group-DfSjgxD6.js";import"./Input-B1Y3I32M.js";import"./Hidden-uNYSXgwc.js";import"./Button-DaQviGRz.js";import"./useLabels-C7gSAdoi.js";import"./useButton-BLpyZZ6H.js";import"./useTextField-Bwcqt1wj.js";import"./useControlledState-BzTnjfw8.js";import"./useField-CXEJuOSd.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CF2NRSGZ.js";import"./Dialog-BDiy--GU.js";import"./OverlayArrow-4ksf4kwc.js";import"./useResizeObserver-DsSDP_Tb.js";import"./Collection-diItfcvf.js";import"./index-N78jcChP.js";import"./Separator-BVGvLdtd.js";import"./SelectionManager-BPdPsoew.js";import"./useEvent-BA49tokg.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DiiBswTs.js";import"./useDescription-BP2VHTY6.js";import"./ListKeyboardDelegate-BuF3a5u0.js";import"./PressResponder-BLPZ0Rie.js";import"./useLocalizedStringFormatter-D1gRfOcs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-v-Lvarn9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKyjCtbn.js";import"./Button-CFZ90YqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-sLwEt4tr.js";import"./createLucideIcon-BEZFPsZb.js";import"./x-B89X9bd_.js";import"./Heading-CExc05Da.js";import"./info-BRRNj8dv.js";import"./Popover--ysAXKcV.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
