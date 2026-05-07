import{j as e,l}from"./iframe-Bb_VlPo9.js";import{S as t}from"./Skeleton-DVkhdhua.js";import{T as p}from"./TextField-W5Ps_-2v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CUyeahUs.js";import"./utils-2r_62JIY.js";import"./FieldError-CbhfVIv0.js";import"./Text-D7Tr2OQH.js";import"./useFocusRing-DQRmwydT.js";import"./index-DAEy4VqV.js";import"./index-BxkaVGNc.js";import"./Text-DTJEuclf.js";import"./RSPContexts-DMtGcFC9.js";import"./Form-CPAndHnn.js";import"./Group-CHrDpi7F.js";import"./Input-C4khlQQT.js";import"./Hidden-Da5yr2Rv.js";import"./Button-DwR9JkjB.js";import"./useLabel-gulxf9DU.js";import"./useLabels-CsGVZDGi.js";import"./useButton-yJmLtQfA.js";import"./useTextField-BVFvsBTT.js";import"./useControlledState-CFQUuuzt.js";import"./useField-Be7ObOKH.js";import"./TextField.module-DdivwlC8.js";import"./Label-SXJq_j2f.js";import"./Dialog-BbFJ936K.js";import"./OverlayArrow-D4SjK86E.js";import"./useResizeObserver-CF_uyx7C.js";import"./Collection-BpAJZJBW.js";import"./index-Dfxk7_9d.js";import"./Separator-BHW9KYkP.js";import"./SelectionManager-DuW5VBfE.js";import"./useEvent-u95MDZQv.js";import"./scrollIntoView-BG7Sd968.js";import"./SelectionIndicator-DpvN-zjH.js";import"./useDescription-C9KC-F2o.js";import"./ListKeyboardDelegate-B5huwegM.js";import"./PressResponder-ByBWPOx9.js";import"./useLocalizedStringFormatter-BINmwfC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cmh4Rymz.js";import"./getScrollParent-BlCILjnb.js";import"./VisuallyHidden-7RIQbTv5.js";import"./ModalOverlay-B55a8-fo.js";import"./x-BdcCpJzo.js";import"./createLucideIcon-a3otmfa0.js";import"./useLocalizedStringFormatter-D3GzHYKP.js";import"./Heading-D41PspzV.js";import"./Button-BoP38GQz.js";import"./Button.module-BB7N-cLd.js";import"./info-2w65F5mm.js";import"./Popover-CUiN1Ojk.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
