import{j as e,l}from"./iframe-CIM0DofB.js";import{S as t}from"./Skeleton-PRmpRiq9.js";import{T as p}from"./TextField-CNpLFUmi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DmY9tm5t.js";import"./utils-B9P7pKe_.js";import"./TextField-CT5wM59K.js";import"./FieldError-DwO_S0KA.js";import"./Text-Ct6VpsXr.js";import"./useFocusRing-CoxC0ffE.js";import"./index-z3A9RS1V.js";import"./index-Bmtd_4Bw.js";import"./Text-B9vOzllF.js";import"./RSPContexts-w2tebVZn.js";import"./Form-Bz9p_8XF.js";import"./useFormValidation-C4G2ZagI.js";import"./Group-DkkdFLip.js";import"./Input-DKeVoASX.js";import"./Hidden-C_nZwzti.js";import"./Button-ropdusrp.js";import"./useLabels-CBzADNBy.js";import"./useButton-C0Vwpaou.js";import"./useTextField-ChCqp-Fm.js";import"./useControlledState-BbgbYRMe.js";import"./useField-Dagtd4Zi.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DE2w-lGG.js";import"./Dialog-Cx-VRntz.js";import"./OverlayArrow-DwS08NJf.js";import"./useResizeObserver-BtiIzByl.js";import"./Collection-I3LsPIZG.js";import"./index-PNTU5C8X.js";import"./Separator-C1snTB51.js";import"./SelectionManager-C7niJKZ4.js";import"./useEvent-B-sCjbeA.js";import"./scrollIntoView-DzA6p2P1.js";import"./SelectionIndicator-NgqT78hr.js";import"./useDescription-DJZrXI9Y.js";import"./ListKeyboardDelegate-DgPC8zv-.js";import"./PressResponder-Csrl3Erf.js";import"./useLocalizedStringFormatter-Mrh-6xvo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BlYXZfSQ.js";import"./VisuallyHidden-CT-e_S4x.js";import"./useLocalizedStringFormatter-Cd3WX5f1.js";import"./Button-5M1jZ4FR.js";import"./Button.module-CtQ1deO8.js";import"./x-D17FT-An.js";import"./createLucideIcon-BthRmSsd.js";import"./Heading-DJQ2j_aH.js";import"./info-CViFlcu8.js";import"./Popover-zreMjoeW.js";import"./Input-Dp4cP0VW.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
