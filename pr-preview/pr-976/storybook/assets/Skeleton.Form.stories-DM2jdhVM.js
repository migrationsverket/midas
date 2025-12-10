import{j as e,l}from"./iframe-9RZ8qS0V.js";import{S as t}from"./Skeleton-BKztjevr.js";import{T as p}from"./TextField-Bs5YZZFe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BjdHMPNn.js";import"./utils-BWR78VZD.js";import"./TextField-BI4Jf6k3.js";import"./FieldError-CUjdzv4o.js";import"./Text-DS83zdrx.js";import"./useFocusRing-C1UymAdv.js";import"./index-DYDrgj8o.js";import"./index-DXKOmJXy.js";import"./Text-C5_vA2qs.js";import"./RSPContexts-Ds-Tiy4a.js";import"./Form-DAZ2yY7t.js";import"./useFormValidation-C7T-NU-t.js";import"./Group-CaS4_1q8.js";import"./Input-I6I2zEOA.js";import"./Hidden-CoooHu5i.js";import"./Button-DwckI6V_.js";import"./useLabels-DYhyLCxD.js";import"./useButton-CvOgPonk.js";import"./useTextField-B0kS5J_e.js";import"./useControlledState-C698iD7f.js";import"./useField-zgF83q1i.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-xPQy87i_.js";import"./Dialog-D4lCEOCj.js";import"./OverlayArrow-Ni2lUNrt.js";import"./useResizeObserver-CXYUE0pF.js";import"./Collection-RNgU2tiR.js";import"./index-YMhcIuwd.js";import"./Separator-vziZxE4T.js";import"./SelectionManager-D7KLd8Lh.js";import"./useEvent-eIh3SUOB.js";import"./scrollIntoView-BjOYFxBk.js";import"./SelectionIndicator-BPzi2wSX.js";import"./useDescription-QGCzoEz7.js";import"./ListKeyboardDelegate-Ck1YB2jp.js";import"./PressResponder-CKCxq1I_.js";import"./useLocalizedStringFormatter-BH65DG8h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CTT2eo6L.js";import"./VisuallyHidden-r7QMy6xC.js";import"./Button-_QzePwKA.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-BtH6C6HU.js";import"./createLucideIcon-BEqaj3-I.js";import"./x-nNTDHS8H.js";import"./Heading-Wtvegeka.js";import"./info-BJeUukka.js";import"./Popover-CrcIFw5_.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
