import{j as e,l}from"./iframe-CxkETeDd.js";import{S as t}from"./Skeleton-Cq8MX4cr.js";import{T as p}from"./TextField-BkJqjcCS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C7VVQSoz.js";import"./utils-GlStkLEJ.js";import"./FieldError-BWtspna3.js";import"./Text-CjYtEiaz.js";import"./useFocusRing-Do0yfzWS.js";import"./index-BSb6ZrfR.js";import"./index-nMmCh7nR.js";import"./Text-BAZIzjwA.js";import"./RSPContexts-DsMbIQ4H.js";import"./Form-C5JH_F4V.js";import"./Group-B8gB1pu2.js";import"./Input-DoY7pUez.js";import"./Hidden-CKsesGiK.js";import"./Button-M5zQwREp.js";import"./useLabel-BO_xYu1i.js";import"./useLabels-DaC1eol5.js";import"./useButton-DENm16UC.js";import"./useTextField-DMiTRF45.js";import"./useControlledState-Cqnjl-Rp.js";import"./useField-DUhSjK8V.js";import"./TextField.module-DdivwlC8.js";import"./Label-wq5K9ATw.js";import"./Dialog-DaiQhdmy.js";import"./OverlayArrow-dQtvEMzB.js";import"./useResizeObserver-DtDfBWwS.js";import"./Collection-Be8p80xI.js";import"./index-D59Ky3Ki.js";import"./Separator-Dxk72rzT.js";import"./SelectionManager-CmFM2kJA.js";import"./useEvent-B-R-vhKv.js";import"./scrollIntoView-B-8yvJ9-.js";import"./SelectionIndicator-zJXJpAJt.js";import"./useDescription-UrQ-w2r3.js";import"./ListKeyboardDelegate-DML2M3Xa.js";import"./PressResponder-CiEUHGiY.js";import"./useLocalizedStringFormatter-C1sxkLmf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B3q1RVnp.js";import"./getScrollParent-DI7tR_KK.js";import"./VisuallyHidden-BFccnY_O.js";import"./x-B204znOg.js";import"./createLucideIcon-C0eB9KvK.js";import"./useLocalizedStringFormatter-53dmxcXe.js";import"./Heading-D2cu-wg0.js";import"./Button-CKmKD5ej.js";import"./Button.module-BB7N-cLd.js";import"./info-BfPR5OYS.js";import"./Popover-Bjkt0u-m.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
