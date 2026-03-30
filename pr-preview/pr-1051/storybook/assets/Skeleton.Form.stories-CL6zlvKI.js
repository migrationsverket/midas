import{j as e,l}from"./iframe-B8dODSM7.js";import{S as t}from"./Skeleton-C2_-U6mN.js";import{T as p}from"./TextField-dbG7W0Rn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DOG9Ic9i.js";import"./utils-DKhPm4Nt.js";import"./FieldError-Cs03i1ku.js";import"./Text-CIOHcKum.js";import"./useFocusRing-DKQkST-P.js";import"./index-pILuv3eo.js";import"./index-DvxVvxvs.js";import"./Text-DyDE_nMf.js";import"./RSPContexts-CqliKkX6.js";import"./Form-fEW4gPte.js";import"./Group-3gZKcWTc.js";import"./Input-BX1nKMCU.js";import"./Hidden-DILkQdFQ.js";import"./Button-CEvb2_wi.js";import"./useLabel-CeFvsTDB.js";import"./useLabels-Cr6sIa7x.js";import"./useButton-C2UEY7aL.js";import"./useTextField-BCIzyEOQ.js";import"./useControlledState-DhH3lMF6.js";import"./useField-BdHAuGxs.js";import"./TextField.module-DdivwlC8.js";import"./Label-CcSiKov5.js";import"./Dialog-B_IPHI25.js";import"./OverlayArrow-iZilqROL.js";import"./useResizeObserver-lFGlU8Zd.js";import"./Collection-DI0lZ1-t.js";import"./index-Fa2TZhX8.js";import"./Separator-DyZDnAPD.js";import"./SelectionManager-DJWKkXrJ.js";import"./useEvent-DkI1NEZn.js";import"./scrollIntoView-Dkn0W1jL.js";import"./SelectionIndicator-CEBIgYAc.js";import"./useDescription-BO0eKfud.js";import"./ListKeyboardDelegate-HodYo91a.js";import"./PressResponder-CrVRS0fT.js";import"./useLocalizedStringFormatter-ByMwlETP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ci6NBJrq.js";import"./getScrollParent-aaxOorIB.js";import"./VisuallyHidden-Csntf2Wj.js";import"./x-DX19Ur0q.js";import"./createLucideIcon-7ECh1RW_.js";import"./useLocalizedStringFormatter-BpbsYO7v.js";import"./Heading-CE4rG5va.js";import"./Button-BGOYT3gN.js";import"./Button.module-BB7N-cLd.js";import"./info-Ew5PV_dG.js";import"./Popover-Y7mRhi7q.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
