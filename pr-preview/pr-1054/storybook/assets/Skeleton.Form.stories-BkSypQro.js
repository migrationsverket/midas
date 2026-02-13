import{j as e,l}from"./iframe-Bzo4kowl.js";import{S as t}from"./Skeleton-lg9N8YO2.js";import{T as p}from"./TextField-DGsWp_Qk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DKhNfPX4.js";import"./utils-DXTeB8HK.js";import"./FieldError-DfYo7bjn.js";import"./Text-CzwqkTgC.js";import"./useFocusRing-DHhWIO2N.js";import"./index-CNJaAGk8.js";import"./index-aL6k1mzJ.js";import"./Text-BflvD664.js";import"./RSPContexts-De0PVEjF.js";import"./Form-Dhxwb2cI.js";import"./useFormValidation-GncoW9Ln.js";import"./Group-BheKNAj3.js";import"./Input-DdUa_f3M.js";import"./Hidden-DHoilVKC.js";import"./Button-CgmEDWQ8.js";import"./useLabels-CEKsYTJS.js";import"./useButton-D9o58VID.js";import"./useTextField-BOBbLqdR.js";import"./useControlledState-CM5VfWQj.js";import"./useField-vapzvJ0z.js";import"./TextField.module-DpzeWGpt.js";import"./Label-D4R1Tf6Y.js";import"./Dialog-76BRLU4J.js";import"./OverlayArrow-Dwf-A1IE.js";import"./useResizeObserver-ydA1K4Mt.js";import"./Collection-BW8Nuq6f.js";import"./index-CKKtxtpf.js";import"./Separator-DUn9ZmpZ.js";import"./SelectionManager-ZdUPh4YZ.js";import"./useEvent-TwMUr4g1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-_R46UR9N.js";import"./useDescription-D0ROJkmX.js";import"./ListKeyboardDelegate-IoYbsUEH.js";import"./PressResponder-BbJVO5bi.js";import"./useLocalizedStringFormatter-D4nT0ah_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZs6uOnk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6Mvmfcl.js";import"./Button-ChuJZebW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CUD2yrtg.js";import"./createLucideIcon-DA2PtDq7.js";import"./x-cYo9yJLa.js";import"./Heading-fgEp0HME.js";import"./info-CHlqRvaT.js";import"./Popover-C7tQsdG4.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
