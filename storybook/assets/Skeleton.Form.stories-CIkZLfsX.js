import{j as e,l}from"./iframe-D0Ebfh30.js";import{S as t}from"./Skeleton-XfGbNFkE.js";import{T as p}from"./TextField-DrQZHeF6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CbCMniBi.js";import"./utils-HMZMjbfe.js";import"./FieldError-CVFSCD0p.js";import"./Text-QgdY8FFj.js";import"./useFocusRing-B7feqinX.js";import"./index-DEZ4pZ8U.js";import"./index-hoemp_fb.js";import"./Text-BdJ9wmlp.js";import"./RSPContexts-D-VgtPqq.js";import"./Form-C-RY8D45.js";import"./useFormValidation-DfON3Cpr.js";import"./Group-BazXkwj-.js";import"./Input-C1aTYETc.js";import"./Hidden-CZL81F2Z.js";import"./Button-C5q_bVXl.js";import"./useLabels-Dw4NTpgb.js";import"./useButton-RhvsfLc2.js";import"./useTextField-D52sJq39.js";import"./useControlledState-DnMbAmQG.js";import"./useField-mjK8xeaJ.js";import"./TextField.module-DpzeWGpt.js";import"./Label-B1ahQHZ_.js";import"./Dialog-bpUTgRB5.js";import"./OverlayArrow-BS4un-DW.js";import"./useResizeObserver--nr-KEZP.js";import"./Collection-BPcTJEg1.js";import"./index-DD4GNLTQ.js";import"./Separator-BGJ5dWKh.js";import"./SelectionManager-Dbwed4v0.js";import"./useEvent-C-0Xhkyy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cq-a500K.js";import"./useDescription-DMByz_uC.js";import"./ListKeyboardDelegate-CcCPHl5Y.js";import"./PressResponder-DXWAYBTU.js";import"./useLocalizedStringFormatter-D3idiCWs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7gq7ne6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-O6H9xmHX.js";import"./Button-DpyS-bWo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CtniQXCD.js";import"./createLucideIcon-CdE5-Po6.js";import"./x-BvLcmEC0.js";import"./Heading--s20R_Kf.js";import"./info-ClQLUXjQ.js";import"./Popover-8Klrh3Xb.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
