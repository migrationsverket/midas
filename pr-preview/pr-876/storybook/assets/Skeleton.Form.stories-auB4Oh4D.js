import{j as e,l}from"./iframe-CARYWlMr.js";import{S as t}from"./Skeleton-D_VW55P4.js";import{T as p}from"./TextField-DBBlkX8z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C8RelZc2.js";import"./utils-CpzDmsYi.js";import"./FieldError-D96zTf6J.js";import"./Text-CYKeiFr8.js";import"./useFocusRing-eR43gCGN.js";import"./index-D4HHjk07.js";import"./index-DCEAqPJW.js";import"./Text-C6YZuIwj.js";import"./RSPContexts-DmmT8ORw.js";import"./Form-MW-kx8SJ.js";import"./Group-D4_10SET.js";import"./Input-B_h6sSj8.js";import"./Hidden-eR-QFzh5.js";import"./Button-Czff7WUO.js";import"./useLabel-BqT-6tGp.js";import"./useLabels-D9vbRTn9.js";import"./useButton-pxShH704.js";import"./useTextField-c7e20TCM.js";import"./useControlledState-PiJ1bWKV.js";import"./useField-DA0e3gVp.js";import"./TextField.module-DdivwlC8.js";import"./Label-CVgymkT7.js";import"./Dialog-BYI3YHJ7.js";import"./OverlayArrow-BRXBK-bP.js";import"./useResizeObserver-pH4E-9SM.js";import"./Collection-B-bw2hee.js";import"./index-Bf80HzPL.js";import"./Separator-B0PDkthk.js";import"./SelectionManager-swas-xle.js";import"./useEvent-CdMdGV8r.js";import"./scrollIntoView-BlJ4PC4n.js";import"./SelectionIndicator-yiNruNt6.js";import"./useDescription-1em3p3rE.js";import"./ListKeyboardDelegate-BXuWIdHq.js";import"./PressResponder-B7_gKcmh.js";import"./useLocalizedStringFormatter-BapB3aBW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ca9PT5uM.js";import"./getScrollParent-B2bQFjre.js";import"./VisuallyHidden-BdHdXLzS.js";import"./ModalOverlay-Beb4gk3H.js";import"./x-D6m6mvyo.js";import"./createLucideIcon-DMrxxS3N.js";import"./useLocalizedStringFormatter-iKS83_lA.js";import"./Heading-CdaYlD6X.js";import"./Button-CJO8gD-9.js";import"./Button.module-BB7N-cLd.js";import"./info-BDdSR_3i.js";import"./Popover-CCRPuZRL.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
