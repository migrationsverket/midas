import{j as e,l}from"./iframe-BcVWnjiq.js";import{S as t}from"./Skeleton-BfFH_aP7.js";import{T as p}from"./TextField-CJdEGLlg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CuwdaifK.js";import"./utils-BHfrMThS.js";import"./FieldError-RgIIuEHk.js";import"./Text-Cf3_Dpr9.js";import"./useFocusRing-Cr43T2xz.js";import"./index-Bf6BaTQp.js";import"./index-lTGn0qSi.js";import"./Text-aEiNTvlh.js";import"./RSPContexts-DwUzfd_N.js";import"./Form-Bki39RKU.js";import"./Group-DnSo1KJl.js";import"./Input-DeQXhFoY.js";import"./Hidden-B1e2ot4t.js";import"./Button-X_O9ad-3.js";import"./useLabel-CdT-X_Un.js";import"./useLabels-H_5_YSkD.js";import"./useButton-CJEr5rsL.js";import"./useTextField-WgrE_jSW.js";import"./useControlledState-BeIEKiqF.js";import"./useField-Dhrmud0j.js";import"./TextField.module-DdivwlC8.js";import"./Label-fjbbzU9N.js";import"./Dialog-DhZAIFeO.js";import"./OverlayArrow-BhulQ_tx.js";import"./useResizeObserver-Ck_GSI3T.js";import"./Collection-BGh5CUSO.js";import"./index-DAeJWrLP.js";import"./Separator-DctYVSTw.js";import"./SelectionManager-y-xBPN-9.js";import"./useEvent-CtZW5Qvu.js";import"./scrollIntoView-CeKJisls.js";import"./SelectionIndicator-BxX3y6YC.js";import"./useDescription-cF75q-Hq.js";import"./ListKeyboardDelegate-C98MwhU0.js";import"./PressResponder-DN1lj42U.js";import"./useLocalizedStringFormatter-BzQp9VXy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYSUuiTn.js";import"./getScrollParent-dSYNY5k0.js";import"./VisuallyHidden-DQYzeIJf.js";import"./x-B_mInUxe.js";import"./createLucideIcon-DKRKL4qZ.js";import"./useLocalizedStringFormatter-BGPexIt5.js";import"./Heading-DzN1JGdH.js";import"./Button-aD9_wGcx.js";import"./Button.module-BB7N-cLd.js";import"./info-ELtIys0V.js";import"./Popover-Yn8LFCCD.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
