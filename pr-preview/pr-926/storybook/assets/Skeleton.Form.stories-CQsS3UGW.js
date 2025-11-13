import{j as e,l}from"./iframe-vV_WTh41.js";import{S as t}from"./Skeleton-BGrioPKG.js";import{T as d}from"./TextField-Ci5JwRQI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0sV8XBT.js";import"./utils-BLkbaUED.js";import"./FieldError-DIXFUeQf.js";import"./Text--4As8pE8.js";import"./useFocusRing-DjEgHD23.js";import"./index-8oChgm8L.js";import"./index-BBW3Edhr.js";import"./Text-D7liI3QI.js";import"./RSPContexts-CB14fttw.js";import"./Form-DCQxjdRW.js";import"./useFormValidation-CHHQL78Y.js";import"./Group-pr20Mrku.js";import"./Input-DqL9JisO.js";import"./Hidden-DmUWzxob.js";import"./Button-DugNrTqg.js";import"./useLabels-D-vRNZ7C.js";import"./useButton-Bka7B6pp.js";import"./useTextField-CRS8JKH_.js";import"./useControlledState-B5J2UdzZ.js";import"./useField-uOsQLLjz.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BtxHxPpZ.js";import"./Dialog-DPe9SdXM.js";import"./OverlayArrow-58gOGApE.js";import"./useResizeObserver-DOc--mls.js";import"./Collection-Dq1TtdbX.js";import"./index-Bn-gunHH.js";import"./Separator-XTL_OjvY.js";import"./SelectionManager-Da_V-eeI.js";import"./useEvent-CpdQryxH.js";import"./scrollIntoView-B9se38xm.js";import"./SelectionIndicator-C21LbbOd.js";import"./useDescription-oNLjY4JI.js";import"./ListKeyboardDelegate-C7UnVmm1.js";import"./PressResponder-Bc9aSX2M.js";import"./useLocalizedStringFormatter-gFqboiC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bhot0QPs.js";import"./VisuallyHidden-BwHE0vuQ.js";import"./useLocalizedStringFormatter-Ctl0pcaH.js";import"./Button-DZf68tgE.js";import"./Button.module-CtQ1deO8.js";import"./x-CP63wXgR.js";import"./createLucideIcon-Bw-FFKAv.js";import"./Heading-Bew9Ky8a.js";import"./info-Pmibodcs.js";import"./Popover-BXgKhdxJ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
