import{j as e,l}from"./iframe-DEp2oG17.js";import{S as t}from"./Skeleton-ByoKd9UR.js";import{T as p}from"./TextField-CgyFczHP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dq3fyDJY.js";import"./utils-BdDw9a3H.js";import"./FieldError-DN8iUwVl.js";import"./Text-CI29p5RE.js";import"./useFocusRing-Mb90B-sd.js";import"./index-DjxIfj_1.js";import"./index-bV2pO4CY.js";import"./Text-DdOwJXNS.js";import"./RSPContexts-BpY8Nizo.js";import"./Form-D1N3FAIh.js";import"./useFormValidation-DUv_C9aQ.js";import"./Group-Cq6v32M2.js";import"./Input-CLXw3U68.js";import"./Hidden-CABjF7lx.js";import"./Button-C_5E3NeR.js";import"./useLabels-Cyk4YZSQ.js";import"./useButton-tx-eN_jr.js";import"./useTextField-BidBy0BP.js";import"./useControlledState-B8G_0Le1.js";import"./useField-DUJQ4FTk.js";import"./TextField.module-Cm6797Xw.js";import"./Label-RLPspCnC.js";import"./Dialog-DRkN8dn6.js";import"./OverlayArrow-B0MMMRPL.js";import"./useResizeObserver--ydgpBRu.js";import"./Collection-DBUct1uX.js";import"./index-9hY5KZHS.js";import"./Separator-CYopJuEZ.js";import"./SelectionManager-D-dREuN-.js";import"./useEvent-CKG_1VwL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cn2yDPPG.js";import"./useDescription-8UxhvEwk.js";import"./ListKeyboardDelegate-Cyujz9V4.js";import"./PressResponder-Bzc01V_U.js";import"./useLocalizedStringFormatter-BceleSe3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQQrHCuS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CS5LSF1P.js";import"./Button-DbApqNlR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCi1uvX3.js";import"./createLucideIcon-CCWrt2pH.js";import"./x-BSkDXoR2.js";import"./Heading-DumaOAFC.js";import"./info-B2RUqdbH.js";import"./Popover-yb3Et5A6.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
