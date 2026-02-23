import{j as e,l}from"./iframe-C7mRVAw-.js";import{S as t}from"./Skeleton-BamZ9KNR.js";import{T as p}from"./TextField-xR2kM76p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-5UhkB3cv.js";import"./utils-BeEL8pJ2.js";import"./FieldError-BFaJaxlc.js";import"./Text-C-q-JnIT.js";import"./useFocusRing-B6vJKCx-.js";import"./index-C_BC5gdb.js";import"./index-BTnShkl9.js";import"./Text-SdK-7_Ed.js";import"./RSPContexts-3BOa1bAA.js";import"./Form-ke4oR6s4.js";import"./useFormValidation-CpzrLShJ.js";import"./Group-BuiHETwK.js";import"./Input-DQGZc2sT.js";import"./Hidden-DMuuZGaU.js";import"./Button-BOx_rjlH.js";import"./useLabels-Ds9YSjJx.js";import"./useButton-ZvjmP_g6.js";import"./useTextField-OlTkDIq1.js";import"./useControlledState-CdL3PN3V.js";import"./useField-C7j1aptb.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-DzN4dud1.js";import"./Dialog-BzorbjZ_.js";import"./OverlayArrow-D803GnqF.js";import"./useResizeObserver-C4OyXG_p.js";import"./Collection-CrM6FHNF.js";import"./index-BGdJvTOY.js";import"./Separator-CtIQYwU7.js";import"./SelectionManager-DdQv0Ybp.js";import"./useEvent-Cc0KmnDZ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfN4lR5W.js";import"./useDescription-DTA-9R__.js";import"./ListKeyboardDelegate-CjS7qxm_.js";import"./PressResponder-OH7UskiT.js";import"./useLocalizedStringFormatter-5uEV4cAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-fr_vkZ8o.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bi6dfUTC.js";import"./Button-CZ_HndjP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CWqMwdpP.js";import"./createLucideIcon-CxN-HpyC.js";import"./x-BrKWut6c.js";import"./Heading-0hTRdsf4.js";import"./info-DjJTGZkt.js";import"./Popover-DIhZ_Ej7.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
