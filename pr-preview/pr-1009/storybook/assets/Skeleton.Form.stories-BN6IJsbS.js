import{j as e,l}from"./iframe-DCfJfaw9.js";import{S as t}from"./Skeleton-CVQEgvXC.js";import{T as p}from"./TextField-7tbdW8Mu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ymh18E-z.js";import"./utils-CqvO6KXE.js";import"./TextField-B8eJ5SaO.js";import"./FieldError-nGE6oTAK.js";import"./Text-VXJMN6tP.js";import"./useFocusRing-7l2a3qeL.js";import"./index-DpFfOAB-.js";import"./index-CXk62c72.js";import"./Text-Bpd7w9CS.js";import"./RSPContexts-CJm8Gl1M.js";import"./Form-Bf8QUsQ0.js";import"./useFormValidation-BaNJ2jR_.js";import"./Group-DQktKOlu.js";import"./Input-Cp_sO_y3.js";import"./Hidden-BCNvKZUC.js";import"./Button-Dkr17r5b.js";import"./useLabels-DoN94B0X.js";import"./useButton-CwqsyX1R.js";import"./useTextField-CJaawfmA.js";import"./useControlledState-CUvbN5NM.js";import"./useField-CiSkahL8.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DpWFLNNu.js";import"./Dialog-C3UZe5Hi.js";import"./OverlayArrow-nZsAlrCE.js";import"./useResizeObserver-CuIqHVZp.js";import"./Collection-BBAyIAje.js";import"./index-DCcrf7Bi.js";import"./Separator-Dkjm1-Me.js";import"./SelectionManager-BDoopCov.js";import"./useEvent-DAfX2Xqj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BXCFDIjJ.js";import"./useDescription-DOUWC27Q.js";import"./ListKeyboardDelegate-CkR7oaGc.js";import"./PressResponder-BHP22pdz.js";import"./useLocalizedStringFormatter-D4155cJ9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CooP9AAC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bc10YnsJ.js";import"./Button-V9Ueln0f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9mdIa23.js";import"./createLucideIcon-Bs2c2aOV.js";import"./x-BohAPrtb.js";import"./Heading-BIRhNi1H.js";import"./info-COeBVPIr.js";import"./Popover-BRS5FIeW.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
