import{j as e,l}from"./iframe-CFJCKKvO.js";import{S as t}from"./Skeleton-Cl49e0Oe.js";import{T as p}from"./TextField-ByETe9vx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-RODKIzO5.js";import"./utils-GebBTRfX.js";import"./FieldError-Cwblg-Fg.js";import"./Text-3-m5yiWA.js";import"./useFocusRing-BNbcqK1m.js";import"./index-D3I_2kbv.js";import"./index-DmhLxtfg.js";import"./Text-Ch1K88hl.js";import"./RSPContexts-DYC9qzTU.js";import"./Form-CHs7kAFH.js";import"./Group-DVGOj2ri.js";import"./Input-DdhlBYGM.js";import"./Hidden-DcC3hzXb.js";import"./Button-BT7UBoWJ.js";import"./useLabel-Byk-C4h5.js";import"./useLabels-BTsH0KFj.js";import"./useButton-DAHkBXtl.js";import"./useTextField-BDbYubUt.js";import"./useControlledState-BfOHS3qu.js";import"./useField-BeHiy9Ck.js";import"./TextField.module-DdivwlC8.js";import"./Label-CDHIpKOH.js";import"./Dialog-Dsqn7n_R.js";import"./OverlayArrow-BqZFl2kw.js";import"./useResizeObserver-DYYCtKev.js";import"./Collection-yIcWgyNm.js";import"./index-CAr9uyju.js";import"./Separator-Qw6ftWGS.js";import"./SelectionManager-x1Quu5h-.js";import"./useEvent-voCcxRjk.js";import"./scrollIntoView-Co7GAAYl.js";import"./SelectionIndicator-DgmnjBYR.js";import"./useDescription-C4PJeRJw.js";import"./ListKeyboardDelegate-9mmgmB2G.js";import"./PressResponder-jZ1aCSmN.js";import"./useLocalizedStringFormatter-KBkMSAGg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CemwV6aI.js";import"./getScrollParent-B9G2XCiT.js";import"./VisuallyHidden-Y2lOv2IN.js";import"./x-C7yXQpYD.js";import"./createLucideIcon-DogT9pAN.js";import"./useLocalizedStringFormatter-BHn-ZNo3.js";import"./Heading-DqtgDd1x.js";import"./Button-xnJUq7xJ.js";import"./Button.module-BB7N-cLd.js";import"./info-CQDEOprS.js";import"./Popover-BCRLoLZr.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
