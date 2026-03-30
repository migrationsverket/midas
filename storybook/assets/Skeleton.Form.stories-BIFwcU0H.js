import{j as e,l}from"./iframe-2y2Syr64.js";import{S as t}from"./Skeleton-DCgFbAW1.js";import{T as p}from"./TextField-BticF7E6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B2rilkgG.js";import"./utils-QeTQioJq.js";import"./FieldError-C0y0OPWO.js";import"./Text-CjKUI5Vp.js";import"./useFocusRing-g5rhpMio.js";import"./index-CzLxwmqr.js";import"./index-DXQBrJfU.js";import"./Text-BstWv5qu.js";import"./RSPContexts-B0u5lwvT.js";import"./Form-BxZc3HF8.js";import"./Group-gZuaeyva.js";import"./Input-BRAc1KwA.js";import"./Hidden-B__XOjR0.js";import"./Button-9fFVOiJo.js";import"./useLabel-DEokNCv9.js";import"./useLabels-CDVQ8Dai.js";import"./useButton-BGrK01YR.js";import"./useTextField-CnQ0BvwO.js";import"./useControlledState-CNntbmuw.js";import"./useField-DPhi4f-8.js";import"./TextField.module-DdivwlC8.js";import"./Label-DHfEEJL8.js";import"./Dialog-BvJ8m6YM.js";import"./OverlayArrow-CUvmsQQP.js";import"./useResizeObserver-BDZH0uIC.js";import"./Collection-BqbqFyGC.js";import"./index-DGABZHHf.js";import"./Separator-D2nDJNFV.js";import"./SelectionManager-CxkhtBsq.js";import"./useEvent-BoNgmAiC.js";import"./scrollIntoView-lPomJvMQ.js";import"./SelectionIndicator-DICBnb9I.js";import"./useDescription-DxQUmr3s.js";import"./ListKeyboardDelegate-SQ3uUgz7.js";import"./PressResponder-gDAf_1sv.js";import"./useLocalizedStringFormatter-ChuRjCa_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ChgNtnmZ.js";import"./getScrollParent-DZSok8Rc.js";import"./VisuallyHidden-CwQymDfp.js";import"./x-CmHq6MLN.js";import"./createLucideIcon-CukoxtoU.js";import"./useLocalizedStringFormatter-C8Cfl7Hj.js";import"./Heading-CWLS9XtN.js";import"./Button-D69d27MT.js";import"./Button.module-BB7N-cLd.js";import"./info-Do6oJr7z.js";import"./Popover-BdZRKvJY.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
