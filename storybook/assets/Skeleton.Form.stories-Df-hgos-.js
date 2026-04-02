import{j as e,l}from"./iframe-B1eD605p.js";import{S as t}from"./Skeleton-D8P2__ca.js";import{T as p}from"./TextField-D60_sY9j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DMVARTYO.js";import"./utils-BOUcnJoC.js";import"./FieldError-DNdCu579.js";import"./Text-DAxM1VuH.js";import"./useFocusRing-D_OiBDkF.js";import"./index-BWkRMe8I.js";import"./index-TufsVr0_.js";import"./Text-EI0dskfY.js";import"./RSPContexts-Dl1zhDr2.js";import"./Form-TOmJuLrj.js";import"./Group-DXiXxn5F.js";import"./Input-A65XN-IN.js";import"./Hidden-B3lfQGCO.js";import"./Button-DMefbg_Z.js";import"./useLabel-D7VH59ae.js";import"./useLabels-BD-zpGYP.js";import"./useButton-B9teiuVu.js";import"./useTextField-BN1OkKY_.js";import"./useControlledState-DOfAUcES.js";import"./useField-BEBUG3LI.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dq58_SpF.js";import"./Dialog-DADzVdZh.js";import"./OverlayArrow-DystT-Vw.js";import"./useResizeObserver-Bg1SUG1W.js";import"./Collection-7BpZitS7.js";import"./index-De98YIfI.js";import"./Separator-CXIhpFVt.js";import"./SelectionManager-jhWX0Faa.js";import"./useEvent-BJos8xnR.js";import"./scrollIntoView-DZVXXs-a.js";import"./SelectionIndicator-CvDD31Qf.js";import"./useDescription-Bqwk-ftC.js";import"./ListKeyboardDelegate-C--TIfdb.js";import"./PressResponder-C9jI_sp2.js";import"./useLocalizedStringFormatter-BVzW25Bt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IbfgZhv9.js";import"./getScrollParent-1L3daVvs.js";import"./VisuallyHidden-D_M3vS6z.js";import"./x-hYuZlWGy.js";import"./createLucideIcon-B1NmALCH.js";import"./useLocalizedStringFormatter-CLR4R1lI.js";import"./Heading-Du1XGRCs.js";import"./Button-vXlcn_Zz.js";import"./Button.module-BB7N-cLd.js";import"./info-9piMx6FC.js";import"./Popover-Bhia95Xi.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
