import{j as e,l}from"./iframe-Bn-EzP7D.js";import{S as t}from"./Skeleton-BWEyqNFE.js";import{T as p}from"./TextField-BQ7pyyb7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CO3J0WCG.js";import"./utils-CQaUuJEL.js";import"./FieldError-Bmf4SDk8.js";import"./Text-Bqg57V95.js";import"./useFocusRing-vAuqzLMr.js";import"./index-C-alUKfN.js";import"./index-B6pc0358.js";import"./Text-6vmkm8mz.js";import"./RSPContexts-_DVvg2ct.js";import"./Form-D8rPFjhB.js";import"./Group-DU8JgHqm.js";import"./Input-BYmxFTo0.js";import"./Hidden-CqBpBgFh.js";import"./Button-Cc7PB3J4.js";import"./useLabel-Bl9zNTe3.js";import"./useLabels-DUs2w_Mz.js";import"./useButton-9sNlXb4L.js";import"./useTextField-D7Fko5bx.js";import"./useControlledState-DvYkz0eX.js";import"./useField-Ccah-lq_.js";import"./TextField.module-DdivwlC8.js";import"./Label-OqiXjoc3.js";import"./Dialog-BVEQQY1_.js";import"./OverlayArrow-CfxIsBtK.js";import"./useResizeObserver-BNWu4Pn9.js";import"./Collection-DgfdmHhP.js";import"./index-DA8HmDwz.js";import"./Separator-BYWPKcv5.js";import"./SelectionManager-DBUORL24.js";import"./useEvent-BUUS48jd.js";import"./scrollIntoView-D5GyckjK.js";import"./SelectionIndicator-DAsR-d__.js";import"./useDescription-DriieE3T.js";import"./ListKeyboardDelegate-C0tygrq9.js";import"./PressResponder-DdnV4kKa.js";import"./useLocalizedStringFormatter-C_da5e_o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Z5vcQ66U.js";import"./getScrollParent-CgJ84-Vu.js";import"./VisuallyHidden-CKLV3oRP.js";import"./x-CdpnhCRh.js";import"./createLucideIcon-DeptTAqN.js";import"./useLocalizedStringFormatter-Cu0XKz1n.js";import"./Heading-BKnq4xgM.js";import"./Button-CQePxhIL.js";import"./Button.module-BB7N-cLd.js";import"./info-BLHteW7_.js";import"./Popover-Dh9q7XZa.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
