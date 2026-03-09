import{j as e,l}from"./iframe-DF-gckEl.js";import{S as t}from"./Skeleton-Pwa6n4Qr.js";import{T as p}from"./TextField-DPHV5EU3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BSxJcAyo.js";import"./utils-xE_2EOTS.js";import"./FieldError-nZ-6NevE.js";import"./Text-CD93M0aA.js";import"./useFocusRing-DVmaifLp.js";import"./index-BB1CKHGL.js";import"./index-B-8oVGre.js";import"./Text-mrdWRvrC.js";import"./RSPContexts-CRcRJYcx.js";import"./Form-CzwbKObq.js";import"./useFormValidation-kF6lMwdG.js";import"./Group-4XOpvRPa.js";import"./Input-BeIwB7aK.js";import"./Hidden-CnADKIpW.js";import"./Button-DfFeWMER.js";import"./useLabels-DYYbGYck.js";import"./useButton-D5_aypw0.js";import"./useTextField-SU1WDSst.js";import"./useControlledState-BozieDQw.js";import"./useField-BJ4J1Su9.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cw7CnjjN.js";import"./Dialog-Dp3Ryqzc.js";import"./OverlayArrow-fvY2aP3t.js";import"./useResizeObserver-toiQEKaZ.js";import"./Collection-B0md0RaS.js";import"./index-CQSyT-Ss.js";import"./Separator-DT4h2oOV.js";import"./SelectionManager--p2EeLu6.js";import"./useEvent-BG4kCyp-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C2_foj_8.js";import"./useDescription-BrazaQD9.js";import"./ListKeyboardDelegate-CBJAAlnU.js";import"./PressResponder-BdVYCRiG.js";import"./useLocalizedStringFormatter-B49X21jk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-r1pRCCBf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-WVzpTwv1.js";import"./Button-xgruqnpI.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-CPX24HR9.js";import"./createLucideIcon-DlP1PWjK.js";import"./x-D5acHrs_.js";import"./Heading-CDJzqsYL.js";import"./info-CyicB_nd.js";import"./Popover-CJEHa82s.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
