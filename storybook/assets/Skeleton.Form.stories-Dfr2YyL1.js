import{j as e,l}from"./iframe-BgTJCWOi.js";import{S as t}from"./Skeleton-BS8Ppxnk.js";import{T as p}from"./TextField-C6sZb3Cz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-6plt3GGl.js";import"./utils-bx0JNicM.js";import"./FieldError-D1yKmAxB.js";import"./Text-BPwtGfCt.js";import"./useFocusRing-CQGFmCQM.js";import"./index-Di0LCwPl.js";import"./index-nvK8JwcD.js";import"./Text-D9p-rhNz.js";import"./RSPContexts-CeugRKEP.js";import"./Form-xMoO26Fm.js";import"./useFormValidation-DdQ-XZ_w.js";import"./Group-QKcT2QBF.js";import"./Input-DLHMJ80i.js";import"./Hidden-1E0jU_sg.js";import"./Button-DFN5fdXi.js";import"./useLabels-C6Pff7p0.js";import"./useButton-RwbbtEdP.js";import"./useTextField-BC76DPou.js";import"./useControlledState-7UzvBFe4.js";import"./useField-G_6qpuwG.js";import"./TextField.module-DdivwlC8.js";import"./Label-BKtz0i7g.js";import"./Dialog-ChCejqlU.js";import"./OverlayArrow-CS62BfpZ.js";import"./useResizeObserver-C19I1BKZ.js";import"./Collection-e6P1B0pt.js";import"./index-CZO_OfAH.js";import"./Separator-CSQpK9sj.js";import"./SelectionManager-COcNurEV.js";import"./useEvent-fLqVt5ZT.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-De-3IWB8.js";import"./useDescription-DauRvPVC.js";import"./ListKeyboardDelegate-CW6N_7fN.js";import"./PressResponder-CQi07TY3.js";import"./useLocalizedStringFormatter-DzvgYJWh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-J00qItTT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-COxax3nI.js";import"./Button-CUni_Rhy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DmYhpSJF.js";import"./createLucideIcon-BMuWalIG.js";import"./x-seHATWdx.js";import"./Heading-CCbZjm_P.js";import"./info-q_YmVZHy.js";import"./Popover-DSVDBGmM.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
