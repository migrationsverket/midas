import{j as e,l}from"./iframe-foa1fz1L.js";import{S as t}from"./Skeleton-BVuNGkXG.js";import{T as p}from"./TextField-B1AChbLx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-E73xKaLR.js";import"./utils-Ev5LGgue.js";import"./TextField-BFl5xgNI.js";import"./FieldError-0xt68GMY.js";import"./Text-hfmE0wsb.js";import"./useFocusRing-Ablbfaap.js";import"./index-Cn_e8zWb.js";import"./index-BoAX5djW.js";import"./Text-3kKEReu_.js";import"./RSPContexts-CaEO68sI.js";import"./Form-DMmoH39G.js";import"./useFormValidation-kLEwtEdL.js";import"./Group-DwDpWPe2.js";import"./Input-DqpYCeXV.js";import"./Hidden-C56sCU1_.js";import"./Button-BDE-HjlG.js";import"./useLabels-DzekMX3n.js";import"./useButton-D8CDSc--.js";import"./useTextField-BM9G_UwF.js";import"./useControlledState-Dvg4iFOf.js";import"./useField-Cu3mWKaX.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-HixPqQGh.js";import"./Dialog-Dbqo1SrM.js";import"./OverlayArrow-DITbn3Cn.js";import"./useResizeObserver-B6drsLxS.js";import"./Collection-CT8zCrZF.js";import"./index-uIVRUAny.js";import"./Separator-A2egrTjB.js";import"./SelectionManager-CsvPKqJc.js";import"./useEvent-C-hGFFqh.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-G21kOOwW.js";import"./useDescription-DBUGuybl.js";import"./ListKeyboardDelegate-d_TXzJQo.js";import"./PressResponder-u0xaDbhn.js";import"./useLocalizedStringFormatter-BRt717ju.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmpI_0MT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Crc1dHu9.js";import"./Button-DRHKUhef.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CRm2vV7S.js";import"./createLucideIcon-DPqkobhw.js";import"./x-jUsDefJP.js";import"./Heading--H7fNfSD.js";import"./info-DqsSjAOi.js";import"./Popover-CsfdoZhw.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
