import{j as e,l}from"./iframe-DHyVQXUX.js";import{S as t}from"./Skeleton-BhJkhH2s.js";import{T as p}from"./TextField-CA1QBDts.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BAbRExkc.js";import"./utils-Cetumt8p.js";import"./TextField-dYBJIYjd.js";import"./FieldError-BMHmwlEE.js";import"./Text-D3UlMe3R.js";import"./useFocusRing-DM6_DbeH.js";import"./index-C151B4pU.js";import"./index-CIApz_MG.js";import"./Text-el-hmg7N.js";import"./RSPContexts-Ct6jR0wT.js";import"./Form-Bj4F62gY.js";import"./useFormValidation-b2TH__Nr.js";import"./Group-m2yA8VxS.js";import"./Input-qIMXf2yT.js";import"./Hidden-LyTL37of.js";import"./Button-CgYi1yiU.js";import"./useLabels-BHMJFSGA.js";import"./useButton-C_cAHMJL.js";import"./useTextField-D-TfK_PS.js";import"./useControlledState-bSLg3DhZ.js";import"./useField-BG9qxNLR.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CDOV53PU.js";import"./Dialog-Bj73mGMK.js";import"./OverlayArrow-DVM91nbg.js";import"./useResizeObserver-BxFscn4p.js";import"./Collection-C-Mg0IVa.js";import"./index-Bdep5s3H.js";import"./Separator-gOY-2Llc.js";import"./SelectionManager-p7Iup8Nr.js";import"./useEvent-BtAGcOSe.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-6-Ysu_gZ.js";import"./useDescription-066NI39g.js";import"./ListKeyboardDelegate-CwyTu4CZ.js";import"./PressResponder-POYlhjjq.js";import"./useLocalizedStringFormatter-BO0fwLCb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZ_Cpeqq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CrEjrJr0.js";import"./Button-BG_KuVY6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BXMcFhqN.js";import"./createLucideIcon-BDpeJ1vC.js";import"./x-CTsV6SQ1.js";import"./Heading-Bzpzqhe4.js";import"./info-D7N7TtAI.js";import"./Popover-B8entSBQ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
