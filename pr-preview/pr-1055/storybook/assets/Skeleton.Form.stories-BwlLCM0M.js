import{j as e,l}from"./iframe-kL-Bl9su.js";import{S as t}from"./Skeleton-zBJ68Jlk.js";import{T as p}from"./TextField-CRs2LOGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B6ST6E4I.js";import"./utils-DSQv1swn.js";import"./FieldError-CmUNHjx9.js";import"./Text-Csjavnr3.js";import"./useFocusRing-B8gpdiRk.js";import"./index-9Z-HIz-6.js";import"./index-Dc0KIhb6.js";import"./Text-Brx6h1NF.js";import"./RSPContexts-zPihLAoF.js";import"./Form-75sFirUb.js";import"./useFormValidation-BcwglGOS.js";import"./Group-BxXfwbL_.js";import"./Input-Cl7tvKed.js";import"./Hidden-fIPo0I_L.js";import"./Button-C3MzL_5z.js";import"./useLabels-CH1yRhK0.js";import"./useButton-PS6G0SsP.js";import"./useTextField-ChLbIJms.js";import"./useControlledState-CCkzC0Tp.js";import"./useField-sDMwGprV.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CYOh3wjp.js";import"./Dialog-4DXEqqMA.js";import"./OverlayArrow-C-_NKgJm.js";import"./useResizeObserver-JmlDC1iB.js";import"./Collection-V9ENYK9P.js";import"./index-C6yzV3k4.js";import"./Separator-CIUFat57.js";import"./SelectionManager-ALK4G4BP.js";import"./useEvent-BRxC_QDj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B4koSPdu.js";import"./useDescription-D6WKBftS.js";import"./ListKeyboardDelegate-C_l6nDbK.js";import"./PressResponder-CtQHFhUR.js";import"./useLocalizedStringFormatter-5N1OdqKK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3IxBebN.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ddmz6g6z.js";import"./Button-BrThkrNe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhEyUNPu.js";import"./createLucideIcon-DoVMa1bS.js";import"./x-NxB05lgA.js";import"./Heading-Cgt_XEMz.js";import"./info-Bp8dfPQ3.js";import"./Popover-CH8aGv-F.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
