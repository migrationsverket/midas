import{j as e,l}from"./iframe-DOHhMkQY.js";import{S as t}from"./Skeleton-Bm90DQKm.js";import{T as p}from"./TextField-BcxAqt1W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CBfSLyX5.js";import"./utils-NiE-K3B6.js";import"./FieldError-BflqQ1hj.js";import"./Text-DSHHPLHE.js";import"./useFocusRing-wtRS1Mc0.js";import"./index-BuovvTYt.js";import"./index-ZqaTbfD1.js";import"./Text-C8g4NeVM.js";import"./RSPContexts-Cdm3yX79.js";import"./Form-Dq5C2lBM.js";import"./Group-Dmwg-2rd.js";import"./Input-DO2yHUEo.js";import"./Hidden-CBYtsSM7.js";import"./Button-BgxX3mlh.js";import"./useLabel-B6n5QJis.js";import"./useLabels-CHqB-BNa.js";import"./useButton-CVPcloPU.js";import"./useTextField-CbXqGvkj.js";import"./useControlledState-DiXqzo5g.js";import"./useField-CDafB6bD.js";import"./TextField.module-DdivwlC8.js";import"./Label-Ig5xBitx.js";import"./Dialog-BhNv-yid.js";import"./OverlayArrow-D-YsTEho.js";import"./useResizeObserver-BPaPazro.js";import"./Collection-C3UaWGRU.js";import"./index-G_V6xOjf.js";import"./Separator-BsjHvh90.js";import"./SelectionManager-DQ5FBa1D.js";import"./useEvent-DtrFGaiZ.js";import"./scrollIntoView-DebGkkw1.js";import"./SelectionIndicator-DUS-gEyU.js";import"./useDescription-DUO7dbjU.js";import"./ListKeyboardDelegate-BwKlEZYr.js";import"./PressResponder-U4tHhDgS.js";import"./useLocalizedStringFormatter-DWccAkCt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DRyBXNLF.js";import"./getScrollParent-wRtd1GN9.js";import"./VisuallyHidden-DQY1cYBw.js";import"./ModalOverlay-o9SLMU5y.js";import"./x-CkxwwECO.js";import"./createLucideIcon-B4Q-AngK.js";import"./useLocalizedStringFormatter-CRECnAOE.js";import"./Heading-IvdKpjLL.js";import"./Button-oYxwaeFk.js";import"./Button.module-BB7N-cLd.js";import"./info-CZfIXx9S.js";import"./Popover-BS7pzUqq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
