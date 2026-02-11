import{j as e,l}from"./iframe-Drr84aUp.js";import{S as t}from"./Skeleton-BnUB11v4.js";import{T as p}from"./TextField-CNYVw11k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dqly3Fq6.js";import"./utils-Dj0d5knJ.js";import"./TextField-DlNpw0Vb.js";import"./FieldError-799sXCos.js";import"./Text-Dr4vVF01.js";import"./useFocusRing-DsIGSL5O.js";import"./index-BiBbK_-6.js";import"./index-DRbaHGaR.js";import"./Text-v7lTDwJ8.js";import"./RSPContexts-SjihynDA.js";import"./Form-BeBEjZhh.js";import"./useFormValidation-D143NhVz.js";import"./Group-BwyrbItK.js";import"./Input-BKlQYY1Y.js";import"./Hidden-BeHVocu4.js";import"./Button-CwulGWpP.js";import"./useLabels-CW04P3B1.js";import"./useButton-ByV_k0-w.js";import"./useTextField-CbABvNjY.js";import"./useControlledState-ORv1HaqW.js";import"./useField-DFKc8azI.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DSZEmFRx.js";import"./Dialog-D-wK_8vJ.js";import"./OverlayArrow-C_klXK3L.js";import"./useResizeObserver-Cl3y_7ec.js";import"./Collection-DkshQO2P.js";import"./index-Cgdv7bIq.js";import"./Separator-C4C5YkOi.js";import"./SelectionManager-DMZwZ-vi.js";import"./useEvent-DtfVww8C.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Daf2cBJU.js";import"./useDescription-DocMBm6g.js";import"./ListKeyboardDelegate-DiJbBaOx.js";import"./PressResponder-BSbggRNF.js";import"./useLocalizedStringFormatter-DKpj8BBI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-oaAe1ewT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BX3HTr1q.js";import"./Button-BXBCvuas.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DN0Qnrca.js";import"./createLucideIcon-BYlUtrd2.js";import"./x-BaHWGiCm.js";import"./Heading-DzifNSwV.js";import"./info-DhaZktHC.js";import"./Popover-DEn4VFUJ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
