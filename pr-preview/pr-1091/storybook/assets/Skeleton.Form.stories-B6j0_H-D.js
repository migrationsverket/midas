import{j as e,l}from"./iframe-BiqtS-LP.js";import{S as t}from"./Skeleton-D4aqwczf.js";import{T as p}from"./TextField-Du0WSilB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dpvx5h7k.js";import"./utils-DDp3zx2O.js";import"./FieldError-1zu70EvV.js";import"./Text-D-mv30w6.js";import"./useFocusRing-BBdC9X4b.js";import"./index-DTfFxrYl.js";import"./index-Bz2sGi_M.js";import"./Text-BTm6pr0L.js";import"./RSPContexts-Dx5-en_D.js";import"./Form-C1Ck1pmt.js";import"./useFormValidation-CSIxhFru.js";import"./Group-BlYI5F3_.js";import"./Input-CQe3bYMk.js";import"./Hidden-DFfMyXk8.js";import"./Button-Dc8C55b6.js";import"./useLabels-CVc1Ewfj.js";import"./useButton-C1JXpszC.js";import"./useTextField-DP89mjaY.js";import"./useControlledState-D31sClCQ.js";import"./useField-CaYVL4H3.js";import"./TextField.module-DdivwlC8.js";import"./Label-DEFeb1qF.js";import"./Dialog-PAPpSH0H.js";import"./OverlayArrow-DQqBUqzJ.js";import"./useResizeObserver-T8diNOak.js";import"./Collection-BAHLD-pp.js";import"./index-CR_cbryd.js";import"./Separator-IZUjwWjm.js";import"./SelectionManager-CFase-FQ.js";import"./useEvent-BCPLxZ21.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfyBs16K.js";import"./useDescription-R9tt-U1b.js";import"./ListKeyboardDelegate-C4sdMyQn.js";import"./PressResponder-Cha579s1.js";import"./useLocalizedStringFormatter-BjTggtdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fsFtW3Vl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-50sq9ta1.js";import"./Button-HP_18L76.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C1qYlgbG.js";import"./createLucideIcon-DKP3y2-x.js";import"./x-tfBXJ63x.js";import"./Heading-DgfbP9Bo.js";import"./info-oQ50dyPH.js";import"./Popover-BHnQef2W.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
