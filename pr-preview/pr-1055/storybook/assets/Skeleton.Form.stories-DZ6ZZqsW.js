import{j as e,l}from"./iframe-BpM72smZ.js";import{S as t}from"./Skeleton-C1UqvzfI.js";import{T as p}from"./TextField-CJ6jPXta.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dlm8kDkB.js";import"./utils-CSddBXAp.js";import"./FieldError-B0e9S7Wf.js";import"./Text-DmFT7SRM.js";import"./useFocusRing-B6IWB5Bj.js";import"./index-B1wLjkVC.js";import"./index-D8NVrDNK.js";import"./Text-CSnhZWSM.js";import"./RSPContexts-D1rmZtkk.js";import"./Form-FPFt4zkx.js";import"./useFormValidation-CSg5xMEa.js";import"./Group-Bije_k8r.js";import"./Input-C1r-Whkg.js";import"./Hidden-CTCJ1xpV.js";import"./Button-7Fdf0MuP.js";import"./useLabels-Ea9VM8la.js";import"./useButton--NSdMDnV.js";import"./useTextField-D5BmevWh.js";import"./useControlledState-uArUOdKs.js";import"./useField-BGaaNjBC.js";import"./TextField.module-Cm6797Xw.js";import"./Label-DV9XF5g0.js";import"./Dialog-BSRGfE2e.js";import"./OverlayArrow-BJ5HPsXX.js";import"./useResizeObserver-2BdCSdQg.js";import"./Collection-ND38OKSz.js";import"./index-DKxQIn9a.js";import"./Separator-rmji4_VZ.js";import"./SelectionManager-BHK_Z65C.js";import"./useEvent-CMTJTOYm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DF3FxvI0.js";import"./useDescription-B07oMV39.js";import"./ListKeyboardDelegate-pLN-qXGz.js";import"./PressResponder-CZ5wDDKP.js";import"./useLocalizedStringFormatter-BjnJAUau.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkw_x4CV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DUZEOl0B.js";import"./Button-DN_yypM1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-tgvWDsgd.js";import"./createLucideIcon-CC1B6wl6.js";import"./x-Dk78go1P.js";import"./Heading-DVqoRldl.js";import"./info-BR8TOA7y.js";import"./Popover-DfM2ENbz.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
