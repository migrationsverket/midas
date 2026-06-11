import{j as e,l}from"./iframe-Di5CTR8T.js";import{S as t}from"./Skeleton-BvQdLGRN.js";import{T as p}from"./TextField-7p59NyWW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0t0SuUd.js";import"./utils-CtBItuGe.js";import"./FieldError-Bv2rXWOC.js";import"./Text-ZJfVqn-h.js";import"./useFocusRing-DrwftOie.js";import"./index-DitNwB70.js";import"./index-DBHfn5s_.js";import"./Text-n28vbpm4.js";import"./RSPContexts-DB30PmIp.js";import"./Form-q1oODmDm.js";import"./Group-D3mEeqQ-.js";import"./Input-CM0xH0-G.js";import"./Hidden-sHhuPHwe.js";import"./Button-2OtSDF-S.js";import"./useLabel-B2_1exfs.js";import"./useLabels-B1J-T3xq.js";import"./useButton-C1jCWvmO.js";import"./useTextField-Cw_gJkmM.js";import"./useControlledState-I_KBwW67.js";import"./useField-BrrjMWLY.js";import"./TextField.module-DdivwlC8.js";import"./Label-mKPoFVPk.js";import"./Dialog-BJdR-I1-.js";import"./OverlayArrow-BgFIeVyY.js";import"./useResizeObserver-C6VfgOTj.js";import"./Collection-Cd6bQLAa.js";import"./index-C8zKGD88.js";import"./Separator-BnzzmdtP.js";import"./SelectionManager-C1q1HFOS.js";import"./useEvent-Crt2nr6j.js";import"./scrollIntoView-NTyBe7BV.js";import"./SelectionIndicator-BD3Jo9O3.js";import"./useDescription-XOfwguuv.js";import"./ListKeyboardDelegate-B_UfOpVg.js";import"./PressResponder-DW7M4-_e.js";import"./useLocalizedStringFormatter-WF6y2aSl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1_x5jAl.js";import"./getScrollParent-2xlS7fKj.js";import"./VisuallyHidden-DD_4lyF0.js";import"./ModalOverlay-PDQHlzPO.js";import"./x-B82Stdu9.js";import"./createLucideIcon-BtcOznK7.js";import"./useLocalizedStringFormatter-CoQGZsFN.js";import"./Heading-BZrlUYHo.js";import"./Button-zPsJWo_p.js";import"./Button.module-BB7N-cLd.js";import"./info-DOmqevh8.js";import"./Popover-Hfz6gWUK.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
