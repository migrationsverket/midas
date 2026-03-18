import{j as e,l}from"./iframe-BWIE8y1J.js";import{S as t}from"./Skeleton-gBXcDzIc.js";import{T as p}from"./TextField-BS6kSEes.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DuF8kQJ1.js";import"./utils-CFen-6Tt.js";import"./FieldError-DQP9cPYO.js";import"./Text-CGdD-JKO.js";import"./useFocusRing-CeRcfsBW.js";import"./index-BQbDDAyZ.js";import"./index-CBFugdgC.js";import"./Text-LCrvkG-q.js";import"./RSPContexts-D6p6nrlG.js";import"./Form-BR5_CXxH.js";import"./useFormValidation-DD0xfOTY.js";import"./Group-LsQGd-XX.js";import"./Input-peW8mEC8.js";import"./Hidden-CsKeLRVA.js";import"./Button-BmJwA7TX.js";import"./useLabels-CSgzIvv9.js";import"./useButton-lbVBAiGE.js";import"./useTextField-bUCF8UIG.js";import"./useControlledState-lz_f80Ux.js";import"./useField-ZPISWi-E.js";import"./TextField.module-DdivwlC8.js";import"./Label-CV_Da0Bi.js";import"./Dialog-3-ArKWex.js";import"./OverlayArrow-D-hM9AVS.js";import"./useResizeObserver-0lhP-fxz.js";import"./Collection-Bg_dNDsQ.js";import"./index-ChxbMPWK.js";import"./Separator-DmR7lQkw.js";import"./SelectionManager-DgudSWxj.js";import"./useEvent-0NTm2RcH.js";import"./scrollIntoView-CeNGtx-R.js";import"./SelectionIndicator-BO5Qnhtg.js";import"./useDescription-tI3vnHYy.js";import"./ListKeyboardDelegate-B7MchG2u.js";import"./PressResponder-Dq3FJWfS.js";import"./useLocalizedStringFormatter-BmqPCVAe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DdMi5Hdy.js";import"./getScrollParent-Djcm2OaX.js";import"./VisuallyHidden-nM3_t9w5.js";import"./x-DszmzPSL.js";import"./createLucideIcon-BmTkHA-q.js";import"./useLocalizedStringFormatter-Bj-PcblM.js";import"./Heading-Bvqm9Oaw.js";import"./Button-Bhvh_nWe.js";import"./Button.module-BB7N-cLd.js";import"./info-Bj9lPcsf.js";import"./Popover-Bqdnt-BT.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
