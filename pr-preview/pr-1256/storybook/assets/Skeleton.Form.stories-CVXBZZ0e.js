import{j as e,l}from"./iframe-B3gHnZ_4.js";import{S as t}from"./Skeleton-Bf7piMEI.js";import{T as p}from"./TextField-_OF3ZL2h.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0TTAt0p.js";import"./utils-CdET5WnV.js";import"./FieldError-pXnrGUBV.js";import"./Text-C8paMr1m.js";import"./useFocusRing-DIJ0sANO.js";import"./index-D2HHYUpr.js";import"./index-ClVbkfNF.js";import"./Text-DcZUZMzL.js";import"./RSPContexts-DQ5I8I6_.js";import"./Form-BZOB3ErZ.js";import"./Group-DDmPJ7wi.js";import"./Input-BzmTIW1x.js";import"./Hidden-dfLF-Ti8.js";import"./Button-tj4RHwPQ.js";import"./useLabel-Co4jWqc7.js";import"./useLabels-BzsFe6ap.js";import"./useButton-wyQ3LRsu.js";import"./useTextField-IvDQy2TR.js";import"./useControlledState-BvujKDrt.js";import"./useField-DuF-U182.js";import"./TextField.module-DdivwlC8.js";import"./Label-MtIz8ajw.js";import"./Dialog-AHNrxR7o.js";import"./OverlayArrow-BVSn0I_-.js";import"./useResizeObserver-0LoE_Fxu.js";import"./Collection-Bm1PjTGX.js";import"./index-BomGYp4m.js";import"./Separator-B5ZOHvGy.js";import"./SelectionManager-kVD2iHAs.js";import"./useEvent-BVTuF7AB.js";import"./scrollIntoView-BeJDYg3T.js";import"./SelectionIndicator-BG6APWev.js";import"./useDescription-C4OXEZSl.js";import"./ListKeyboardDelegate-BQ6Nv5pj.js";import"./PressResponder-DT1MZKJ6.js";import"./useLocalizedStringFormatter-DX3s4o0C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DvyKmtO9.js";import"./getScrollParent-DysXOOBH.js";import"./VisuallyHidden-D_rpyZ3J.js";import"./ModalOverlay-D2Wzdftf.js";import"./x-DCrvMdPs.js";import"./createLucideIcon-ClRsgvfJ.js";import"./useLocalizedStringFormatter-Cp3BGEKs.js";import"./Heading-gxWPWf0v.js";import"./Button-Cw4w6g1P.js";import"./Button.module-BB7N-cLd.js";import"./info-CCUswF-V.js";import"./Popover-D0wpsLPZ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
