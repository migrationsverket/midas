import{j as e,l}from"./iframe-BQjBM75C.js";import{S as t}from"./Skeleton-BxbaA-N_.js";import{T as p}from"./TextField-BBE4KXnE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DXIeN7lI.js";import"./utils-BSV0ImVH.js";import"./FieldError-DR3ilOc-.js";import"./Text-ByOtvKGn.js";import"./useFocusRing-gicmbIfS.js";import"./index-DYrIRKkS.js";import"./index-Voaa81LI.js";import"./Text-CSQrQWbM.js";import"./RSPContexts-ifp6jpNf.js";import"./Form-BapHbVlL.js";import"./Group-DeIYa1Er.js";import"./Input-0cyk7DqD.js";import"./Hidden-DsiXMF_M.js";import"./Button-CleE5i4u.js";import"./useLabel--h21IWG8.js";import"./useLabels-CtGdXDZ4.js";import"./useButton-BZFew9pY.js";import"./useTextField-05yk7D0M.js";import"./useControlledState-C34v6o9-.js";import"./useField-zeoSjeSc.js";import"./TextField.module-DdivwlC8.js";import"./Label-Do0-Ja8U.js";import"./Dialog-Cj31FoZk.js";import"./OverlayArrow-BvuEBOoo.js";import"./useResizeObserver-DhalR_tD.js";import"./Collection-DoWsB1Mg.js";import"./index-SmeZxf3H.js";import"./Separator-DnuFABbd.js";import"./SelectionManager-vW658jsf.js";import"./useEvent-Bf_J53mB.js";import"./scrollIntoView-ClzIkG2v.js";import"./SelectionIndicator-CD-IXRpl.js";import"./useDescription-CBsnfRLo.js";import"./ListKeyboardDelegate-BK_gcn-A.js";import"./PressResponder-DqTIPCj6.js";import"./useLocalizedStringFormatter-1UgPp4Q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMKhccaE.js";import"./getScrollParent-DRx-xlpO.js";import"./VisuallyHidden-DUlqTjt1.js";import"./x-CzDTAgEv.js";import"./createLucideIcon-CfIBoofS.js";import"./useLocalizedStringFormatter-C1cV6AoF.js";import"./Heading-BE_ccCAS.js";import"./Button-BrUsIHUW.js";import"./Button.module-BB7N-cLd.js";import"./info-J7ERBaz8.js";import"./Popover-DB9yXvdF.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
