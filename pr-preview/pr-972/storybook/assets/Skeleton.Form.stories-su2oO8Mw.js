import{j as e,l}from"./iframe-CcqIJJ9I.js";import{S as t}from"./Skeleton-Cl6-ttsr.js";import{T as p}from"./TextField-myy6f9GX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Yw24ZpoX.js";import"./utils-CY4Fu9XG.js";import"./TextField-C4RW6-Ph.js";import"./FieldError-DCWhyVe8.js";import"./Text-BeMrApc1.js";import"./useFocusRing-C6yLInR-.js";import"./index-BZYrye5E.js";import"./index-Dk_EVKVa.js";import"./Text-B2y69JCA.js";import"./RSPContexts-DAOG_PEF.js";import"./Form-vl_Yipqa.js";import"./useFormValidation-DfdnZYhb.js";import"./Group-C4Ty3NtD.js";import"./Input-jvNmZG-C.js";import"./Hidden-DoPVqW9a.js";import"./Button-g0SRrwOY.js";import"./useLabels-BilCN1NI.js";import"./useButton-DY6rqluc.js";import"./useTextField-CDwkbzfc.js";import"./useControlledState-DFeihBKm.js";import"./useField-Dtd65B1y.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Bn_G3knm.js";import"./Dialog-6IaWqWsz.js";import"./OverlayArrow-7jeERZda.js";import"./useResizeObserver-CInyPDqE.js";import"./Collection-DptOGsU8.js";import"./index-CdKsVf5O.js";import"./Separator-aU5CSZY5.js";import"./SelectionManager-CuK7wIFL.js";import"./useEvent-C1dfxzp6.js";import"./scrollIntoView-BY6i16iw.js";import"./SelectionIndicator-DxGLI-9G.js";import"./useDescription-Bm_U4g4C.js";import"./ListKeyboardDelegate-DUBgQ1Yz.js";import"./PressResponder-gIDAusRx.js";import"./useLocalizedStringFormatter-C2Q5ZqZK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B2_RuOXm.js";import"./VisuallyHidden-BbrVFRLR.js";import"./Button-Y2MdeHyb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dvdqua-f.js";import"./createLucideIcon-Ba6CVsaC.js";import"./x-CLF4Fkuz.js";import"./Heading-_hPmccnH.js";import"./info-wmRn54vg.js";import"./Popover-CTjC1vhw.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
