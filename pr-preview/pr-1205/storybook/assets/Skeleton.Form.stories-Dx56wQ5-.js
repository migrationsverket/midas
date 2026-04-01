import{j as e,l}from"./iframe-BS-EqM9B.js";import{S as t}from"./Skeleton-CwQjlMUh.js";import{T as p}from"./TextField-kmpP-6zx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-L6kasApq.js";import"./utils-B0k4XHwf.js";import"./FieldError-1ihXnr04.js";import"./Text-WfzPelJM.js";import"./useFocusRing-f4Gv2bLP.js";import"./index-Ba_eFeFP.js";import"./index-CSZYNzON.js";import"./Text-BmYuY3ql.js";import"./RSPContexts-BvHJA1-S.js";import"./Form-WnuVLIo9.js";import"./Group-CYImqZ5q.js";import"./Input-DwF03e_4.js";import"./Hidden-pMKT4yIR.js";import"./Button-Fd5Hg-6t.js";import"./useLabel-CFg80amx.js";import"./useLabels-CtbB0U7H.js";import"./useButton-nlJA0m2t.js";import"./useTextField-CCWrd40f.js";import"./useControlledState-B-FXHrTP.js";import"./useField-BO5BP60C.js";import"./TextField.module-DdivwlC8.js";import"./Label-C83k-g09.js";import"./Dialog-DW6GCdEp.js";import"./OverlayArrow-CCo1EhSd.js";import"./useResizeObserver-B2GkBPld.js";import"./Collection-Nf-nh6oz.js";import"./index-CN4WIh12.js";import"./Separator-BpmOu2Qf.js";import"./SelectionManager-DZYsh4u5.js";import"./useEvent-CtMwRKAA.js";import"./scrollIntoView-BkCdOWuT.js";import"./SelectionIndicator-BQxGlwbv.js";import"./useDescription-zN_kGT0f.js";import"./ListKeyboardDelegate-DOTDPdTz.js";import"./PressResponder-DD8FzT3J.js";import"./useLocalizedStringFormatter-stCrBMQ7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzIvLcs4.js";import"./getScrollParent-C8WafxuX.js";import"./VisuallyHidden-BPzz7Fut.js";import"./x-9X9TwUAj.js";import"./createLucideIcon-tz6Ei2qt.js";import"./useLocalizedStringFormatter-NiRgEpkW.js";import"./Heading-qHMH1efK.js";import"./Button-C36Rbpm6.js";import"./Button.module-BB7N-cLd.js";import"./info-DmD7c02b.js";import"./Popover-DQic4AOZ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
