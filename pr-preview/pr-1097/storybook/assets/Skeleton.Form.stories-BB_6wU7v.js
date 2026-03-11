import{j as e,l}from"./iframe-BwuZ39Vz.js";import{S as t}from"./Skeleton-DB4OlrYW.js";import{T as p}from"./TextField-3QB6d0bz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CZYJCQ2v.js";import"./utils-Dazgo93a.js";import"./FieldError-6yyVufrl.js";import"./Text-zo_PZ5oe.js";import"./useFocusRing-DWqwuqDQ.js";import"./index-BYlaNIkZ.js";import"./index-Db__52FI.js";import"./Text-D0CV2pqO.js";import"./RSPContexts-BQCBl8jV.js";import"./Form-Bozi1n90.js";import"./useFormValidation-uPUxiMCI.js";import"./Group-C-BzGMvG.js";import"./Input-B40OFOb-.js";import"./Hidden-C8O8FPO6.js";import"./Button-Cn77Lxgi.js";import"./useLabels-D0VSRyAt.js";import"./useButton-C25K8Bao.js";import"./useTextField-SBNGNCLl.js";import"./useControlledState-CNRISZnR.js";import"./useField-Dq1pou23.js";import"./TextField.module-DdivwlC8.js";import"./Label-CC-UjKbp.js";import"./Dialog-BYx-mVK7.js";import"./OverlayArrow-Ci_xIG7u.js";import"./useResizeObserver-joLoiGkT.js";import"./Collection-BBh9BIJ-.js";import"./index-QD538Rki.js";import"./Separator-CwTLyBh0.js";import"./SelectionManager-D5lKj6m4.js";import"./useEvent-BNfr9VP-.js";import"./scrollIntoView-B2yrEsZZ.js";import"./SelectionIndicator-CkdMDAOI.js";import"./useDescription-DmBSG3eh.js";import"./ListKeyboardDelegate-B3XWqZCP.js";import"./PressResponder-CFre3py6.js";import"./useLocalizedStringFormatter-Dlk9HRO-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2RDviOH.js";import"./getScrollParent-BDOGEtvC.js";import"./VisuallyHidden-3B0Aqf7R.js";import"./Button-BINP1rbK.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Ni97qJq4.js";import"./createLucideIcon-B-TCaGAA.js";import"./x-CW77mceo.js";import"./Heading-DygGRZtp.js";import"./info-LM1DX_Sr.js";import"./Popover-SUVue6vh.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
