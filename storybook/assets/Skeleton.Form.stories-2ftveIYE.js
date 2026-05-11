import{j as e,l}from"./iframe-B8ApkfN9.js";import{S as t}from"./Skeleton-CBrjxcs7.js";import{T as p}from"./TextField-CncIrJaD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CurgIqFt.js";import"./utils-DY9Yxgt6.js";import"./FieldError-BN9b5ZCd.js";import"./Text-DCpVGc-0.js";import"./useFocusRing-t4lmh3Yy.js";import"./index-B1GJl5u8.js";import"./index-Dam3589Q.js";import"./Text-nPgffpxE.js";import"./RSPContexts-BYDi1jbG.js";import"./Form-a5ECdOXK.js";import"./Group-DkHP5DWm.js";import"./Input-BDo8jOp5.js";import"./Hidden-B3-5R_c4.js";import"./Button-D0ujuU3m.js";import"./useLabel-CJkRyn3E.js";import"./useLabels-C6kkXsgA.js";import"./useButton-CG0EpAju.js";import"./useTextField-BpOOctGj.js";import"./useControlledState-CcqX14cB.js";import"./useField-DT8Rrx5b.js";import"./TextField.module-DdivwlC8.js";import"./Label-cBYOjddP.js";import"./Dialog-woLwDaik.js";import"./OverlayArrow-Dwt4pJJc.js";import"./useResizeObserver-CXZyhZdq.js";import"./Collection-BfpbWxCO.js";import"./index-BS6AmCaV.js";import"./Separator-DL2qrsHD.js";import"./SelectionManager-2__bJrXK.js";import"./useEvent-INSFkTc2.js";import"./scrollIntoView-ChlyCIqm.js";import"./SelectionIndicator-DwXF7zi6.js";import"./useDescription-C1wJSBol.js";import"./ListKeyboardDelegate-CmLx6wrK.js";import"./PressResponder-DHCcw9VP.js";import"./useLocalizedStringFormatter-fZ8nAVLV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B3iQyTM3.js";import"./getScrollParent-BsnoEbY8.js";import"./VisuallyHidden-Cpti0KaM.js";import"./ModalOverlay-C7JZYREF.js";import"./x-DqxHC3Oe.js";import"./createLucideIcon-tZEetkZ6.js";import"./useLocalizedStringFormatter-5IW1LiLo.js";import"./Heading-dTcXRExX.js";import"./Button-DBfSMFHv.js";import"./Button.module-BB7N-cLd.js";import"./info-Da5c9fJe.js";import"./Popover-UNnNmDws.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
