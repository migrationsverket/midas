import{j as e,l}from"./iframe-BpREUp_n.js";import{S as t}from"./Skeleton-DfLCipYR.js";import{T as p}from"./TextField-C8asGTSh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CN9XlfWt.js";import"./utils-5mnyh4pq.js";import"./FieldError-CiitnuL9.js";import"./Text-BIdbVrWu.js";import"./useFocusRing-Di2Wci7-.js";import"./index-CHND_S8B.js";import"./index-DHEjYkx-.js";import"./Text-C8nfs_6S.js";import"./RSPContexts-sGTMeP-x.js";import"./Form-B8iHgesv.js";import"./Group-CQ92ShbK.js";import"./Input-CZWY6zwc.js";import"./Hidden-C8ihGYRf.js";import"./Button-B1ymHcEs.js";import"./useLabel-Wrhj3pEV.js";import"./useLabels-Bs18rTxZ.js";import"./useButton-BeSKsTxR.js";import"./useTextField-DTJ3vR9b.js";import"./useControlledState-DKT2uJC_.js";import"./useField-CfVPzfjM.js";import"./TextField.module-DdivwlC8.js";import"./Label-C9keyOg9.js";import"./Dialog-C1JeGyFD.js";import"./OverlayArrow-CkQvxVKZ.js";import"./useResizeObserver-BFpnlExX.js";import"./Collection-BlAMVWTX.js";import"./index-CtCvV0Wr.js";import"./Separator-BMnvam5E.js";import"./SelectionManager-bqm_yQ00.js";import"./useEvent-CddQ6mLp.js";import"./scrollIntoView-BUWi5Scx.js";import"./SelectionIndicator-YXo9fFHY.js";import"./useDescription-CzljX0gb.js";import"./ListKeyboardDelegate-BeX9sJs6.js";import"./PressResponder-Cbo-8b87.js";import"./useLocalizedStringFormatter-DRmhaeY7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DxJps0mT.js";import"./getScrollParent-DtMjsZPo.js";import"./VisuallyHidden-BSeLhscq.js";import"./x-Dwm5AF8c.js";import"./createLucideIcon-Bp1NIHzV.js";import"./useLocalizedStringFormatter-BRvvA8cH.js";import"./Heading-D5qh5wa2.js";import"./Button-B5TSA_w8.js";import"./Button.module-BB7N-cLd.js";import"./info-BCDq_TZK.js";import"./Popover-6t0p2sMQ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
