import{j as e,l}from"./iframe-9chkR4gz.js";import{S as t}from"./Skeleton-acVn2pyo.js";import{T as p}from"./TextField-CEtJ0cFa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DIf-Q1_k.js";import"./utils-BlWKHGoz.js";import"./FieldError-vZw2hMgY.js";import"./Text-MA5MIJQJ.js";import"./useFocusRing-WYiiq_Gm.js";import"./index-CHvMuKX3.js";import"./index-N421M2ll.js";import"./Text-Dp0Bwi6j.js";import"./RSPContexts-CUGomGxG.js";import"./Form-Rrz88-kW.js";import"./Group-DQRpK11V.js";import"./Input-CBS4hqhQ.js";import"./Hidden-Bdzqqxyq.js";import"./Button-D4nJHmzm.js";import"./useLabel-CMZqh7QI.js";import"./useLabels-Caurk_qr.js";import"./useButton-Bq4HZXfA.js";import"./useTextField-CsFl93VO.js";import"./useControlledState-CLfBe7O7.js";import"./useField-Bqq6-wKZ.js";import"./TextField.module-DdivwlC8.js";import"./Label-BdnI61R5.js";import"./Dialog-DM0Vs9mu.js";import"./OverlayArrow-BMadfotl.js";import"./useResizeObserver-38oCr3mD.js";import"./Collection-BHv4QbOB.js";import"./index-Ca0qo15i.js";import"./Separator-BMNOTgxN.js";import"./SelectionManager-Ccl2m8NF.js";import"./useEvent-Cgh5SQda.js";import"./scrollIntoView-sky0cFHJ.js";import"./SelectionIndicator-B__YK30t.js";import"./useDescription-DPjbxax8.js";import"./ListKeyboardDelegate-D9iFGFSm.js";import"./PressResponder-D6Z4CGpH.js";import"./useLocalizedStringFormatter-D-8D6EPs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qvrRIcrq.js";import"./getScrollParent-BfXegyuf.js";import"./VisuallyHidden-V1FUVsZ9.js";import"./ModalOverlay-nlP5nyqA.js";import"./x-2BQcGtH9.js";import"./createLucideIcon-BKKhyqi3.js";import"./useLocalizedStringFormatter-BvTLyPxY.js";import"./Heading-yGrF_JVo.js";import"./Button-Ci--O4pG.js";import"./Button.module-BB7N-cLd.js";import"./info-ib1-63D-.js";import"./Popover-D3_cqCJc.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
