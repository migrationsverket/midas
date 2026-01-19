import{j as e,l}from"./iframe-CutDFk5n.js";import{S as t}from"./Skeleton-dChr7klt.js";import{T as p}from"./TextField-D0KEDmJO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-UJJzmS30.js";import"./utils-CTW1dxkN.js";import"./TextField-ZsN7R5kI.js";import"./FieldError-DctkBoCn.js";import"./Text-DcyAgiDX.js";import"./useFocusRing-4WXHNlg7.js";import"./index-Vo5448Qj.js";import"./index-DJz0Sx_u.js";import"./Text-CgQQrWKF.js";import"./RSPContexts-DcYz2meL.js";import"./Form-BPYH9qYA.js";import"./useFormValidation-CdQWy_dH.js";import"./Group-C733-SSO.js";import"./Input-CvWQwxYC.js";import"./Hidden-CUK-mE4f.js";import"./Button-Dp5-D5M-.js";import"./useLabels-DY93YiY3.js";import"./useButton-Co8nMjNx.js";import"./useTextField-Cfya9ks1.js";import"./useControlledState-Cn8LkIR3.js";import"./useField-8cvfXJwd.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CuxiB2vu.js";import"./Dialog-DS8s0FRF.js";import"./OverlayArrow-DxCsWpOk.js";import"./useResizeObserver-DKgnP7cD.js";import"./Collection-C-hf73FU.js";import"./index-DiUBrakn.js";import"./Separator-00NY4bF5.js";import"./SelectionManager-Elmu4j6R.js";import"./useEvent-BeSsf5uU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY7DJ66L.js";import"./useDescription-CHhNdst8.js";import"./ListKeyboardDelegate-J1swqCL2.js";import"./PressResponder-D-tSAkZz.js";import"./useLocalizedStringFormatter-b3cE-jas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_W1sumT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPIRqvhu.js";import"./Button-DdqPt2Xq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ttEBQjzn.js";import"./createLucideIcon-B80-lQ4U.js";import"./x-DzdF7VVd.js";import"./Heading-TSmww82B.js";import"./info-BVVEa0Wk.js";import"./Popover-B1Ie_Pbs.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
