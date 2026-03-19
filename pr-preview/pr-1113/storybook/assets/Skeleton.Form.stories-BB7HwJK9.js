import{j as e,l}from"./iframe-DcNvp08h.js";import{S as t}from"./Skeleton-wquzISdJ.js";import{T as d}from"./TextField-DZLsdB3S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B876zd8i.js";import"./utils-BNNMLtuO.js";import"./FieldError-EMbUKL48.js";import"./Text-B8dGyjgo.js";import"./useFocusRing-BPRwT2-e.js";import"./index-DSSiHOxL.js";import"./index-CP11QsuO.js";import"./Text-BTXvFjJ1.js";import"./RSPContexts-DrpcDSg9.js";import"./Form-BUw62znU.js";import"./Group-D4pk5m5c.js";import"./Input-iqiC72_m.js";import"./Hidden-B1kRsClu.js";import"./Button-BXO-nfgy.js";import"./useLabels-C5gPRZ5z.js";import"./useButton-BpzNPdXU.js";import"./useTextField-_0CuLNYR.js";import"./useControlledState-v-JghTjQ.js";import"./useField-Cg2EtwLb.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bt_3yduz.js";import"./Dialog-gkqiQjyQ.js";import"./OverlayArrow-BQBIyzPG.js";import"./useResizeObserver-BZ80FUQk.js";import"./Collection-BkbIXtRB.js";import"./index-o14-3_5U.js";import"./Separator-DHhcHH-S.js";import"./SelectionManager-B_HjjirK.js";import"./useEvent-DdukWOBV.js";import"./scrollIntoView-BaDrcpSF.js";import"./SelectionIndicator-B51EA4Fv.js";import"./useDescription-CjIg25md.js";import"./ListKeyboardDelegate-BH2_PU2r.js";import"./PressResponder-D1QQQVMv.js";import"./useLocalizedStringFormatter-CfHv0oEA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CDBEinhV.js";import"./getScrollParent-qiJZOE97.js";import"./VisuallyHidden-BvqUxAVU.js";import"./x-DmMt4JWK.js";import"./createLucideIcon-CgIMhL8N.js";import"./useLocalizedStringFormatter-CwX-QJhh.js";import"./Heading-CbxVV3aG.js";import"./Button-Btc6I3Hp.js";import"./Button.module-BB7N-cLd.js";import"./info-BCdbkZey.js";import"./Popover-CyPWrpyb.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
