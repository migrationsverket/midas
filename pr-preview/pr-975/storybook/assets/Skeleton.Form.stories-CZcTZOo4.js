import{j as e,l}from"./iframe--li1tHgy.js";import{S as t}from"./Skeleton-BSXaEgSK.js";import{T as p}from"./TextField-DnaLIOUn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CTOJnT9b.js";import"./utils-d7pE4sht.js";import"./TextField-JkJqNgrV.js";import"./FieldError-BS8UBwNs.js";import"./Text-C6CT3M7i.js";import"./useFocusRing-Baa8Ke6W.js";import"./index-BMTXQDlD.js";import"./index-na2T25w4.js";import"./Text-CGSXZbqm.js";import"./RSPContexts-BSBhoFuS.js";import"./Form-dkSnjkdr.js";import"./useFormValidation-Dg7o7GpV.js";import"./Group-DAMMqo6f.js";import"./Input-CJaeeYJX.js";import"./Hidden-DN3rilfW.js";import"./Button-DhqFImjK.js";import"./useLabels-CQth3QJU.js";import"./useButton-DI4U2DL6.js";import"./useTextField-DAEabwzg.js";import"./useControlledState-D6TeioUq.js";import"./useField-SbE2AaK3.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BDKq7zTU.js";import"./Dialog-F6BzOy3r.js";import"./OverlayArrow-DzvRH9ri.js";import"./useResizeObserver-BNYgqIcY.js";import"./Collection-Dukm3efG.js";import"./index-B0vlo7Qg.js";import"./Separator-6fUCvzl8.js";import"./SelectionManager-IXe-UntA.js";import"./useEvent-Cf26KrZD.js";import"./scrollIntoView-B8fKlZrL.js";import"./SelectionIndicator-Be0VyM_d.js";import"./useDescription-Dj35526z.js";import"./ListKeyboardDelegate-BcZ72jDP.js";import"./PressResponder-BhubM9J3.js";import"./useLocalizedStringFormatter-B9gNfdrG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DBJMcwbO.js";import"./VisuallyHidden-BrGVJhu4.js";import"./Button-nsixNk6A.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DjA8Yn1n.js";import"./createLucideIcon-DFHtXhgj.js";import"./x-CZtxyvPc.js";import"./Heading-B-DVUmM6.js";import"./info-k-ncB9uD.js";import"./Popover--kD49P2A.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
