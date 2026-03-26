import{j as e,l}from"./iframe-Cd0-ZcsP.js";import{S as t}from"./Skeleton-BJRRyjxJ.js";import{T as p}from"./TextField-Wqmp8VLl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BaPp8RsB.js";import"./utils-DhqpUTpA.js";import"./FieldError-1WFTuS_h.js";import"./Text-DyAmcS7z.js";import"./useFocusRing-Dfp5Gp4o.js";import"./index-XNSo-VEo.js";import"./index-BlnPzFGx.js";import"./Text-Cw2Ugvgy.js";import"./RSPContexts-Co104av2.js";import"./Form-CVMbYt33.js";import"./Group-L4zEm_4E.js";import"./Input-D97QSq7i.js";import"./Hidden-CPmKijlW.js";import"./Button-7ELWuSQK.js";import"./useLabel-CHdvqMmQ.js";import"./useLabels-CPU9M7Hc.js";import"./useButton-DbIDawdA.js";import"./useTextField-BwqM3_Fh.js";import"./useControlledState-d4JhcqA_.js";import"./useField-DAxwXtOh.js";import"./TextField.module-DdivwlC8.js";import"./Label-y34cB3S2.js";import"./Dialog-Dm_HNmSp.js";import"./OverlayArrow-DbA-HCij.js";import"./useResizeObserver-nwglBFgU.js";import"./Collection-5Ew_XIc7.js";import"./index-D_ztscsY.js";import"./Separator-DLASD0-O.js";import"./SelectionManager-B0xhOmDq.js";import"./useEvent-sNCkpNtj.js";import"./scrollIntoView-CK4U69Q7.js";import"./SelectionIndicator-CllVl-sk.js";import"./useDescription-D_MdrsUa.js";import"./ListKeyboardDelegate-D6mn5I9l.js";import"./PressResponder-wi7FpCNV.js";import"./useLocalizedStringFormatter-eRJpNzx7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CqfiVXdi.js";import"./getScrollParent-CsyNiD_a.js";import"./VisuallyHidden-DUU_0XCx.js";import"./x-DC2j07Yv.js";import"./createLucideIcon-BVwfSxcn.js";import"./useLocalizedStringFormatter-DOvNyG8w.js";import"./Heading-BHM2v0MZ.js";import"./Button-pofFgtnZ.js";import"./Button.module-BB7N-cLd.js";import"./info-CbLEtK7R.js";import"./Popover-LBwUyR0J.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
