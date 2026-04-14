import{j as e,l}from"./iframe-4ooqBbUt.js";import{S as t}from"./Skeleton-BnJgafDF.js";import{T as p}from"./TextField-Dt0nc6Pf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ChegxsCS.js";import"./utils-DLRtaVYJ.js";import"./FieldError-B6PivCC-.js";import"./Text-DrGdlSGk.js";import"./useFocusRing-x4N4w9bu.js";import"./index-CUG0QuFy.js";import"./index-BsCB03x8.js";import"./Text-2ah8hSkI.js";import"./RSPContexts-CCn7iKWs.js";import"./Form-DCni8rj5.js";import"./Group-O807xunu.js";import"./Input-gOxsYyz5.js";import"./Hidden-JrM4togE.js";import"./Button-BBwvVA_R.js";import"./useLabel-pwrXaBmf.js";import"./useLabels-BKydU-se.js";import"./useButton-XyhjWgk6.js";import"./useTextField-BH84x6e2.js";import"./useControlledState-BAx2qeOY.js";import"./useField-CwAwdwy6.js";import"./TextField.module-DdivwlC8.js";import"./Label-DGcYYVGI.js";import"./Dialog-CawsXbRf.js";import"./OverlayArrow-DawdryBG.js";import"./useResizeObserver-tmlcPi4G.js";import"./Collection-Zn-QVJyy.js";import"./index-BUscyov3.js";import"./Separator-D9gAW340.js";import"./SelectionManager-NlDG7jzo.js";import"./useEvent-C_i09VmA.js";import"./scrollIntoView-BOZ86Y2T.js";import"./SelectionIndicator-BTjwT-gq.js";import"./useDescription-BHrIGgoU.js";import"./ListKeyboardDelegate-BBEpL094.js";import"./PressResponder-D9M776K-.js";import"./useLocalizedStringFormatter-CMLnWTsm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKaQoy88.js";import"./getScrollParent-CQlmigTk.js";import"./VisuallyHidden-D6FSL6iG.js";import"./Modal-C50kuIxP.js";import"./x-DhmDnCci.js";import"./createLucideIcon-BAeES33l.js";import"./useLocalizedStringFormatter-DmSeN8hT.js";import"./Heading-CDwsjuh5.js";import"./Button-BKg5QkG5.js";import"./Button.module-BB7N-cLd.js";import"./info-CWULpKck.js";import"./Popover-Cp_B30U_.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
