import{j as e,l}from"./iframe-CHZFuQnS.js";import{S as t}from"./Skeleton-liySdhDr.js";import{T as d}from"./TextField-DctHU7nE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BlbG5hsb.js";import"./utils-BMim5o3v.js";import"./FieldError-B-mi-Hc9.js";import"./Text-Dd_mwADg.js";import"./useFocusRing-CavgNYvf.js";import"./index-w7Yupy6f.js";import"./index-CDEgt3K9.js";import"./Text-BMVuAeY2.js";import"./RSPContexts-FGdyfODE.js";import"./Form-BvdN8uKU.js";import"./useFormValidation-BX4gxdZw.js";import"./Group-kLGJRYnq.js";import"./Input-UEnnDf6M.js";import"./Hidden-cAwEj1a8.js";import"./Button-UHVq7cxV.js";import"./useLabels-BBjpyqdS.js";import"./useButton-BIaKLlnn.js";import"./useTextField-SKQiUmBv.js";import"./useControlledState-BUxHgcPu.js";import"./useField-D6WqRLMl.js";import"./TextField.module-DGUQcbB9.js";import"./Label--3F23kmu.js";import"./Dialog-B5gbDtYv.js";import"./OverlayArrow-CgOroshj.js";import"./useResizeObserver-DZ_wG9cu.js";import"./Collection-DTPuPpk_.js";import"./index-BB5Im9sI.js";import"./Separator-VLiv8MHU.js";import"./SelectionManager-BAMefgL1.js";import"./useEvent-dHHY_xOM.js";import"./scrollIntoView-DfjOOoWp.js";import"./SelectionIndicator-C9VCpTxV.js";import"./useDescription-Ciz68wQ_.js";import"./ListKeyboardDelegate-8dPyHFyK.js";import"./PressResponder--WgWPsMc.js";import"./useLocalizedStringFormatter-ByyIuzas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CIQKldLY.js";import"./VisuallyHidden-CfdiIqbk.js";import"./useLocalizedStringFormatter-J_3FYVXR.js";import"./Button-CKnin4O7.js";import"./Button.module-CtQ1deO8.js";import"./x-CLn_wROP.js";import"./createLucideIcon-EluUf1Sj.js";import"./Heading-CV0vaF0r.js";import"./info-DWTE3GrY.js";import"./Popover-BDGpN84n.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
