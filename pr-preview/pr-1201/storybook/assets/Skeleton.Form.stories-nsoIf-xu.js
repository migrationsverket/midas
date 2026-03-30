import{j as e,l}from"./iframe-B_PHmpba.js";import{S as t}from"./Skeleton-3euFAFv8.js";import{T as p}from"./TextField-CVeyeN1q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BgKtJOqU.js";import"./utils-BLTu9tyH.js";import"./FieldError-BXXDRXhV.js";import"./Text-De6EL-yD.js";import"./useFocusRing-pLoaDniN.js";import"./index-BnBRJ5Vs.js";import"./index-CohS7fjA.js";import"./Text-CtWvGN0y.js";import"./RSPContexts-OmKNYCMF.js";import"./Form-BtnSLaxH.js";import"./Group-B0H15syH.js";import"./Input-VaZa8qjF.js";import"./Hidden-Dyk48KDQ.js";import"./Button-BH_CQ35-.js";import"./useLabel-um5sn7L2.js";import"./useLabels-CuRAxugE.js";import"./useButton-Bt5iDQO5.js";import"./useTextField-BXmjhA9K.js";import"./useControlledState-Dbw9fj5d.js";import"./useField-CIqjGijQ.js";import"./TextField.module-DdivwlC8.js";import"./Label-PU7v2H1Q.js";import"./Dialog-G_WAZi7N.js";import"./OverlayArrow-BjarYFOb.js";import"./useResizeObserver-DHAsNRYl.js";import"./Collection-BKVVAs3j.js";import"./index-DOWGX5s9.js";import"./Separator-CxT5zDCP.js";import"./SelectionManager-DS0VawDx.js";import"./useEvent-CJsDiKXk.js";import"./scrollIntoView-DSAWaCcr.js";import"./SelectionIndicator-B_mzrc3_.js";import"./useDescription-DqrvnjB2.js";import"./ListKeyboardDelegate-BPjl3m2i.js";import"./PressResponder-CZAv_m3s.js";import"./useLocalizedStringFormatter-BGDlAUue.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CfhZQOiv.js";import"./getScrollParent-CcwRz91U.js";import"./VisuallyHidden-_6q0RJ_b.js";import"./x-Cqzwa68L.js";import"./createLucideIcon-Dp1bKuvD.js";import"./useLocalizedStringFormatter-B5yN6xVU.js";import"./Heading-hcI3iOWv.js";import"./Button-Bu0PoYIz.js";import"./Button.module-BB7N-cLd.js";import"./info-C-N2GHIj.js";import"./Popover-UnA4gNpX.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
