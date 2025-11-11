import{j as e,l}from"./iframe-CyQuNDa_.js";import{S as t}from"./Skeleton-DspvUgHl.js";import{T as d}from"./TextField-C0E1x9rp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Xvq7gwbN.js";import"./utils-De8VIsoO.js";import"./FieldError-Dtv9Wp9N.js";import"./Text-Drr12cDy.js";import"./useFocusRing-93IF2U5F.js";import"./index-DRL4XcYu.js";import"./index-C8uVDAXw.js";import"./Text-CG8yCix2.js";import"./RSPContexts-BMz3QfBP.js";import"./Form-BY0WFOgB.js";import"./useFormValidation-OzFDShPm.js";import"./Group-BuFJvhOA.js";import"./Input-D1OHydYw.js";import"./Hidden-BoG65Xnl.js";import"./Button-D1KGFQek.js";import"./useLabels-BHGFLz3i.js";import"./useButton-Cx8w0lie.js";import"./useTextField-BD5dpSk2.js";import"./useControlledState-Ck_EK0EF.js";import"./useField-Cy6intjQ.js";import"./TextField.module-DGUQcbB9.js";import"./Label-e2CmuZvn.js";import"./Dialog-ByKazc15.js";import"./OverlayArrow-B4rTpM3Y.js";import"./useResizeObserver-CrGRu0_c.js";import"./Collection-D6SDSig5.js";import"./index-CqcnKqMu.js";import"./Separator-BkmBDJUy.js";import"./SelectionManager-QPOpbuGg.js";import"./useEvent-DNQdelf8.js";import"./scrollIntoView-Y5KcGlCw.js";import"./SelectionIndicator-CuFdSqsr.js";import"./useDescription-C-n2MYH0.js";import"./ListKeyboardDelegate-DMp9v8Xh.js";import"./PressResponder-bmuaUl5X.js";import"./useLocalizedStringFormatter-ZuVYcFkz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-K7GV_lSu.js";import"./VisuallyHidden-DDCx75rq.js";import"./useLocalizedStringFormatter-BNnUJ3nN.js";import"./Button-DJzGs5Og.js";import"./Button.module-CtQ1deO8.js";import"./x-CghFsWJf.js";import"./createLucideIcon-CHYxtA9m.js";import"./Heading-Cx9iBC6d.js";import"./info-Cx07oTWd.js";import"./Popover-Bf4f4NsA.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
