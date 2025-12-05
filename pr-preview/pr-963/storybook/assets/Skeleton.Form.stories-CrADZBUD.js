import{j as e,l}from"./iframe-CWzFX-Au.js";import{S as t}from"./Skeleton-6OtR3_cE.js";import{T as d}from"./TextField-mi09X2l-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BdKkA2wB.js";import"./utils-CvTFoCuM.js";import"./TextField-DSXfTfzM.js";import"./FieldError-rAccfbQj.js";import"./Text-BBMjHQRy.js";import"./useFocusRing-B_tX-SRB.js";import"./index-DEOOosMo.js";import"./index-5Kn37Y6O.js";import"./Text-DsDS5WxU.js";import"./RSPContexts-DMSmahKw.js";import"./Form-C1LxfMuX.js";import"./useFormValidation-BM2I-aVc.js";import"./Group-CDN2Q97V.js";import"./Input-CwHKsops.js";import"./Hidden-b8PZeIsK.js";import"./Button-CC-tYdMe.js";import"./useLabels-CVVzofvr.js";import"./useButton-CTuUMItv.js";import"./useTextField-DJIOkknr.js";import"./useControlledState-BEhUYREu.js";import"./useField-4qsl13Q_.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CfUkUpZO.js";import"./Dialog-WgxnKPM2.js";import"./OverlayArrow-Bt5FLXMI.js";import"./useResizeObserver-CZY4pUpz.js";import"./Collection-kFS0drfE.js";import"./index-BIoADiaP.js";import"./Separator-Bm3WL0HK.js";import"./SelectionManager-DFa-H-A1.js";import"./useEvent-BGsu8qaD.js";import"./scrollIntoView-CNn1G9wO.js";import"./SelectionIndicator-D3laF-E3.js";import"./useDescription-Cf-6dpdu.js";import"./ListKeyboardDelegate-C_wytSDM.js";import"./PressResponder-D7TiU_yi.js";import"./useLocalizedStringFormatter-mP_Yqfvz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-xmVexIhv.js";import"./VisuallyHidden-B6tTkxvS.js";import"./Button-CN-tdIf6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cs6gtZeE.js";import"./createLucideIcon-ChdQ3NNl.js";import"./x-DS21D3ie.js";import"./Heading-Bbsaqg7w.js";import"./info-EA_RDeAH.js";import"./Popover-DnUv7RvK.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
