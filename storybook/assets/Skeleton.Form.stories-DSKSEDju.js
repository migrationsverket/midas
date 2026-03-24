import{j as e,l}from"./iframe-ClA4Jp0w.js";import{S as t}from"./Skeleton-QjmlW-d1.js";import{T as d}from"./TextField-CAtEMpqE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B28kGPbh.js";import"./utils-D0z16UKm.js";import"./FieldError-CCOnpqUO.js";import"./Text-BOHdvQkr.js";import"./useFocusRing-CH7YMdaA.js";import"./index-bNRMcRC-.js";import"./index-B9CA3Byf.js";import"./Text-BtZnFY82.js";import"./RSPContexts-iTkphylR.js";import"./Form-p39JobxH.js";import"./Group-DyokFXca.js";import"./Input-BxL51vTT.js";import"./Hidden-BjxHpkJU.js";import"./Button-lxcybUX-.js";import"./useLabels-l7dZfeia.js";import"./useButton-Dq5YitBv.js";import"./useTextField-yXbrOEp9.js";import"./useControlledState-BVmLEOQ4.js";import"./useField-AXva_Uzh.js";import"./TextField.module-DdivwlC8.js";import"./Label-DFO3sP3S.js";import"./Dialog-CWWwzV4t.js";import"./OverlayArrow-Dp2DeXjc.js";import"./useResizeObserver-B1FMgZAv.js";import"./Collection-zeuyxdbY.js";import"./index-BxB41E7R.js";import"./Separator-CRabFa1m.js";import"./SelectionManager-C8mEc_pZ.js";import"./useEvent-YydGr1-7.js";import"./scrollIntoView-pB7m18ZN.js";import"./SelectionIndicator-ODji40oL.js";import"./useDescription-iMciGuDR.js";import"./ListKeyboardDelegate-CmGxp_4O.js";import"./PressResponder-DTWDZ3RF.js";import"./useLocalizedStringFormatter-LKr8XwmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BJUvqJXO.js";import"./getScrollParent-DQC80py1.js";import"./VisuallyHidden-Dka0OyWW.js";import"./x-DBneEqd2.js";import"./createLucideIcon-nVFpiFPl.js";import"./useLocalizedStringFormatter-f9qOXevm.js";import"./Heading-BDTZomZp.js";import"./Button-D3i3Yqak.js";import"./Button.module-BB7N-cLd.js";import"./info-DJyukONb.js";import"./Popover-mTWFaAPG.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
