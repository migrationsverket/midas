import{j as e,l}from"./iframe-C1OFF234.js";import{S as t}from"./Skeleton-CMP-CQYd.js";import{T as p}from"./TextField-uHs0OoC4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BDyxOo7T.js";import"./utils-x5dDW9rF.js";import"./TextField-DdS6IXPA.js";import"./FieldError-BmlSVkKV.js";import"./Text-BAGfifAI.js";import"./useFocusRing-JwpRizWK.js";import"./index-D4URSzcq.js";import"./index-eVP2pS4l.js";import"./Text-DdQgr9hb.js";import"./RSPContexts-BR-G7MnE.js";import"./Form-OhvG1ote.js";import"./useFormValidation-Cris4O5F.js";import"./Group-DcqgBxeV.js";import"./Input-B9G4907d.js";import"./Hidden-BozQ0zHL.js";import"./Button-tVK2UY63.js";import"./useLabels-Cjzy89EL.js";import"./useButton-Dq-U0g3P.js";import"./useTextField-BOpH5wSt.js";import"./useControlledState-D7t5NlDI.js";import"./useField-CsO-x6FD.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Df7JaHMf.js";import"./Dialog-cQm2u0OB.js";import"./OverlayArrow-BIetnyBd.js";import"./useResizeObserver-DlihvW6o.js";import"./Collection-BQBeQ6Sk.js";import"./index-BgTylcky.js";import"./Separator-BG4G-PvF.js";import"./SelectionManager-CHinLA4t.js";import"./useEvent-BTaNZmDL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BM7fVV0w.js";import"./useDescription-D1uoBPC6.js";import"./ListKeyboardDelegate-zd0Lvbor.js";import"./PressResponder-X6YXgKxN.js";import"./useLocalizedStringFormatter-Bzedv_wh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CMj5i9Rd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BoMhy8hX.js";import"./Button-DnTBefjE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVNI7-AU.js";import"./createLucideIcon-CLCZDCft.js";import"./x-BFahTfcI.js";import"./Heading-SD5cG3Zu.js";import"./info-BOm460zE.js";import"./Popover-DzFlYVs9.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
