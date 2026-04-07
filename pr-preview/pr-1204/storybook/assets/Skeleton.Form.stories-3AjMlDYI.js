import{j as e,l}from"./iframe-Cnprf77l.js";import{S as t}from"./Skeleton-D_OGg4pS.js";import{T as p}from"./TextField-CvVvZxYz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CRHf8-jj.js";import"./utils-BAknv1n_.js";import"./FieldError-37LT6hKT.js";import"./Text-TETOR_cU.js";import"./useFocusRing-BbKkuYRW.js";import"./index-D131wgQu.js";import"./index-DinabbhG.js";import"./Text-xSTWmp3z.js";import"./RSPContexts-Cw9ibUso.js";import"./Form-BO6ek__5.js";import"./Group-D_hcMCy8.js";import"./Input-DYN-lYP3.js";import"./Hidden-CtzSMGYR.js";import"./Button-C9qpCnHp.js";import"./useLabel-VHxyrYwA.js";import"./useLabels-D2bRDv09.js";import"./useButton-Dj6JkoG-.js";import"./useTextField-Ciw4fb72.js";import"./useControlledState-bPVMsSoD.js";import"./useField-sgfdLoP0.js";import"./TextField.module-DdivwlC8.js";import"./Label-C8e4TVpD.js";import"./Dialog-wVgdM1D8.js";import"./OverlayArrow-Cs2wY2_M.js";import"./useResizeObserver-D5GP0DcY.js";import"./Collection-CHgzwYqU.js";import"./index-BQbG8Pt1.js";import"./Separator-Bzike5dI.js";import"./SelectionManager-DSTJ9RjU.js";import"./useEvent-CbxKKYwp.js";import"./scrollIntoView-DxnzOPwB.js";import"./SelectionIndicator-pvk1bIyk.js";import"./useDescription-1c_yFidr.js";import"./ListKeyboardDelegate-nnGUV4TF.js";import"./PressResponder-Cr0PcrMz.js";import"./useLocalizedStringFormatter-BM9Op5Of.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-vzqAmgyN.js";import"./getScrollParent-BJmogAva.js";import"./VisuallyHidden-O1yJF_LA.js";import"./x-Bh_dZ6M0.js";import"./createLucideIcon-BhAvpesv.js";import"./useLocalizedStringFormatter-TTFjkzUm.js";import"./Heading-BKZ1VG_K.js";import"./Button-CSDIchjo.js";import"./Button.module-BB7N-cLd.js";import"./info-BihsS57J.js";import"./Popover-7X5NAFrv.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
