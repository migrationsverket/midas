import{j as e,l}from"./iframe-DsvQYhcC.js";import{S as t}from"./Skeleton-Dq4-hQRx.js";import{T as d}from"./TextField-CDRRIaj-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CSPInuEa.js";import"./utils-ywWYrjb7.js";import"./TextField-PtvZ0Oto.js";import"./FieldError-DLaiVMtb.js";import"./Text-CP8B1hu_.js";import"./useFocusRing-DKFJXZq3.js";import"./index-p-5mA69d.js";import"./index-lWE3LdPA.js";import"./Text-459A5tOX.js";import"./RSPContexts-WMzRS-8a.js";import"./Form-FKCC86QD.js";import"./useFormValidation-DyleTNHg.js";import"./Group-lclSn5Og.js";import"./Input-qd-_0MnC.js";import"./Hidden-B3O_gp6m.js";import"./Button-Btfg7XlR.js";import"./useLabels-DkA2Lq0I.js";import"./useButton-DqkMJO2v.js";import"./useTextField-CEZQKtc9.js";import"./useControlledState-Wd1IkDYb.js";import"./useField-DJ2N2jIH.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Ct3s0ZEV.js";import"./Dialog-CQOnSuHh.js";import"./OverlayArrow-p4IEUD2v.js";import"./useResizeObserver-C2khB6tD.js";import"./Collection-Dnsun6FV.js";import"./index-BMZui9EA.js";import"./Separator-Bn4Q9b9u.js";import"./SelectionManager-DuoCT_wL.js";import"./useEvent-J3uC9IEt.js";import"./scrollIntoView-Be8AA3u2.js";import"./SelectionIndicator-CaHad9jV.js";import"./useDescription-DjLBrBt_.js";import"./ListKeyboardDelegate-DY9Uc2al.js";import"./PressResponder-Co6fNP2S.js";import"./useLocalizedStringFormatter-CzBDZOTF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CxiqfrM9.js";import"./VisuallyHidden-DAnD-YJl.js";import"./useLocalizedStringFormatter-BeNGXtO2.js";import"./Button-DiEGm4BJ.js";import"./Button.module-CtQ1deO8.js";import"./x-HSDG5LTS.js";import"./createLucideIcon-BGno6_ea.js";import"./Heading-C59R7gqX.js";import"./info-CFCKcNDE.js";import"./Popover-DDYLGiE6.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
