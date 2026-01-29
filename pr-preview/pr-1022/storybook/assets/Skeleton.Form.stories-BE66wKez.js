import{j as e,l}from"./iframe-BCXCe90E.js";import{S as t}from"./Skeleton-Dubve-5V.js";import{T as p}from"./TextField-C26hj39i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BgNXRJWI.js";import"./utils-B2hL7Xtf.js";import"./TextField-BGxkX_et.js";import"./FieldError-DNJHuSL6.js";import"./Text-CYwVMw3N.js";import"./useFocusRing-Co2TT7uq.js";import"./index-76xwZrhG.js";import"./index-B-ZR8m7d.js";import"./Text-fzRhbvnE.js";import"./RSPContexts-CVV_Wn8t.js";import"./Form-CtVU-881.js";import"./useFormValidation-CAH07Xla.js";import"./Group-B31_kW0Y.js";import"./Input-B0TT6aJr.js";import"./Hidden-D9V9PO0C.js";import"./Button-z4xgqBUc.js";import"./useLabels-DbiDlhVN.js";import"./useButton-B4EsMdme.js";import"./useTextField-BlPhWzmL.js";import"./useControlledState-BL0GCU23.js";import"./useField-CLuxjErM.js";import"./TextField.module-1fNSVGjT.js";import"./Label-PTgkZzgo.js";import"./Dialog-giQh8Zxm.js";import"./OverlayArrow-rvG0Eb8p.js";import"./useResizeObserver-iLvwzQL8.js";import"./Collection-CgSxkCek.js";import"./index-vy3r0aE-.js";import"./Separator-usxipfbJ.js";import"./SelectionManager-DoV6tR3f.js";import"./useEvent-CwYHdveY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BG6RjwoQ.js";import"./useDescription-B6k3_lVu.js";import"./ListKeyboardDelegate-EBsbCgeV.js";import"./PressResponder-B-h0FrIV.js";import"./useLocalizedStringFormatter-CfJXxR3z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DPmfOGYn.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DNi7GGMW.js";import"./Button-BS-I6Qwk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DS_myY-E.js";import"./createLucideIcon-D-C2mOoH.js";import"./x-7u9so2rQ.js";import"./Heading-DlCRUbGB.js";import"./info-YvDByK68.js";import"./Popover-0JZtF-Z2.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
