import{j as e,l}from"./iframe-D-p6dryC.js";import{S as t}from"./Skeleton-wt05PYQr.js";import{T as p}from"./TextField-BEnNSz2n.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DMDH_Hc2.js";import"./utils-B-poXB9P.js";import"./FieldError-CmYJRG-e.js";import"./Text-D7fRftcI.js";import"./useFocusRing-1dArzfdN.js";import"./index-DIakIQqk.js";import"./index-DkL1JqyI.js";import"./Text-CMUqHi1g.js";import"./RSPContexts-i063sbcf.js";import"./Form-Hzjw-i4A.js";import"./useFormValidation-DdWh0zdu.js";import"./Group-CU1kTN18.js";import"./Input-BfexKsnu.js";import"./Hidden-BoY54D8z.js";import"./Button-BU7RNZRB.js";import"./useLabels-Djww4bwV.js";import"./useButton-BYxg0DiE.js";import"./useTextField-CJXVy5JL.js";import"./useControlledState-BBjtOFIE.js";import"./useField-CgSVtjeX.js";import"./TextField.module-DdivwlC8.js";import"./Label-CspfoamS.js";import"./Dialog-Chkq-rA4.js";import"./OverlayArrow-CBEPUFcA.js";import"./useResizeObserver-CmPeViZY.js";import"./Collection-BXpaJA4N.js";import"./index-BnT7g8Eo.js";import"./Separator-DkjgByAW.js";import"./SelectionManager-B2o_x42c.js";import"./useEvent-0pnQ-670.js";import"./scrollIntoView-CkrWhIra.js";import"./SelectionIndicator-wEHTqjRA.js";import"./useDescription-DAt4X-Ie.js";import"./ListKeyboardDelegate-CRMYwzxR.js";import"./PressResponder-Cy8aKvfU.js";import"./useLocalizedStringFormatter-qTNGciRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQUZ3feY.js";import"./getScrollParent-D3Nh5GEm.js";import"./VisuallyHidden-jfhHFvLB.js";import"./Button-W-Uz8qez.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DBvUnH6s.js";import"./createLucideIcon-DPKqS8th.js";import"./x-DTawh0wA.js";import"./Heading-DWeNJ0wl.js";import"./info-Ceoj3OW9.js";import"./Popover-2y-vFCFH.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
