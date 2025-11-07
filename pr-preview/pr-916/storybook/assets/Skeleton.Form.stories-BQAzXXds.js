import{j as e,l}from"./iframe-BjoitsA_.js";import{S as t}from"./Skeleton-uaiPZ96l.js";import{T as d}from"./TextField-jZWUruWD.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CbrgsJJq.js";import"./utils-CqffejwQ.js";import"./FieldError-CQa2IgQG.js";import"./Text-D2_Dqxb_.js";import"./useFocusRing-CcZ79Pjo.js";import"./index-DIj_Fm1N.js";import"./index-IOKqJsz7.js";import"./Text-C1C2cp8Y.js";import"./RSPContexts-BM0YpPTx.js";import"./Form-DhFbmwQ7.js";import"./useFormValidation-DO-tUN-i.js";import"./Group-EaFiZ30m.js";import"./Input-gWg9DEhm.js";import"./Hidden-Dlma28aT.js";import"./Button-dCjcK3xZ.js";import"./useLabels-BvRWHbBu.js";import"./useButton-BHN-E1Nk.js";import"./useTextField-BHHHEsl6.js";import"./useControlledState-mjBa_ctK.js";import"./useField-6Y1j__MT.js";import"./TextField.module-DGUQcbB9.js";import"./Label-D7FZdfTS.js";import"./Dialog-BD84FJkQ.js";import"./OverlayArrow-Cf8gP1Ii.js";import"./useResizeObserver-C8jp6HQ3.js";import"./Collection-MECz3tYb.js";import"./index-BRHjuUYx.js";import"./Separator-DFJi1lOr.js";import"./SelectionManager-BhFeTdO8.js";import"./useEvent-DyYZuFIh.js";import"./scrollIntoView-Bgf_9KZM.js";import"./SelectionIndicator-DocZ94Ga.js";import"./useDescription-CZo8T5nr.js";import"./ListKeyboardDelegate-DZdFiNXQ.js";import"./PressResponder-8O6ZKXkc.js";import"./useLocalizedStringFormatter-VaXQjYCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B0dWRzBe.js";import"./VisuallyHidden-NXDdaJHH.js";import"./useLocalizedStringFormatter-CADBOpY1.js";import"./Button-CcGX5Wmo.js";import"./Button.module-CtQ1deO8.js";import"./x-CMNarlDj.js";import"./createLucideIcon-CNrUrsyr.js";import"./Heading-Ch4W9UFX.js";import"./info-C54KhoV0.js";import"./Popover-DAOuvXb1.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
