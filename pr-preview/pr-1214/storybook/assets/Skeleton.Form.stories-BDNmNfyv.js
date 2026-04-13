import{j as e,l}from"./iframe-DmNPUwJF.js";import{S as t}from"./Skeleton-5gE3c29m.js";import{T as p}from"./TextField-CocGmF1p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-oLC_QBAA.js";import"./utils-Dh-PwKV8.js";import"./FieldError-CRuVxlm4.js";import"./Text-D0ZjjTeW.js";import"./useFocusRing-BP4HKvPD.js";import"./index-D7iFWbiU.js";import"./index-zqi-VihA.js";import"./Text-C7BN_W1g.js";import"./RSPContexts-DpZBoqVv.js";import"./Form-C6AulDIl.js";import"./Group-Cd9zdqZ4.js";import"./Input-DQVad2MI.js";import"./Hidden-CmDSCNgN.js";import"./Button-CVX6slyJ.js";import"./useLabel-x3JXI5A6.js";import"./useLabels-Dtp6pYD3.js";import"./useButton-DpMfdXMB.js";import"./useTextField-D__rASGL.js";import"./useControlledState-DBKo4wr0.js";import"./useField-Bj4uuUS8.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dwa8vp6o.js";import"./Dialog-Cl53qzRs.js";import"./OverlayArrow-D4PZLp4t.js";import"./useResizeObserver-BkBzQYrs.js";import"./Collection-CQ-RI5xj.js";import"./index-BjdTUwSH.js";import"./Separator-DQYSsqP6.js";import"./SelectionManager-CUL9zi1X.js";import"./useEvent-CAbHszQ8.js";import"./scrollIntoView-BHhEhBj7.js";import"./SelectionIndicator-DM-PZYYV.js";import"./useDescription-DH7N6hrG.js";import"./ListKeyboardDelegate-Bq4OgiDK.js";import"./PressResponder-Hjmt3KvB.js";import"./useLocalizedStringFormatter-B5MBjwfs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFOS4iMe.js";import"./getScrollParent-B6jbGFnq.js";import"./VisuallyHidden-xsknM-vp.js";import"./Modal-DM1WDVor.js";import"./x-DBWgEmNi.js";import"./createLucideIcon-eE295ZHw.js";import"./useLocalizedStringFormatter-CqULl0lq.js";import"./Heading-zwFI5Ywr.js";import"./Button-CBE5oTrg.js";import"./Button.module-BB7N-cLd.js";import"./info-CQsN26A4.js";import"./Popover-BolwcFi6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
