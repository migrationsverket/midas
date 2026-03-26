import{j as e,l}from"./iframe-Cod1JNFG.js";import{S as t}from"./Skeleton-Cvd5ypZD.js";import{T as p}from"./TextField-BUht74NH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DqHW3cpm.js";import"./utils-RnFRVAvs.js";import"./FieldError-y5my5p3j.js";import"./Text-Dho6KfK4.js";import"./useFocusRing-BTBrbXYF.js";import"./index-B6aKl88f.js";import"./index-CYSTLAu0.js";import"./Text-DYp5dFw4.js";import"./RSPContexts-CGf9i1Cx.js";import"./Form-BAeHCcmu.js";import"./Group-Dcit7Z04.js";import"./Input-CnpycvnH.js";import"./Hidden-DSAoUHUZ.js";import"./Button-DShIviGh.js";import"./useLabel-BYcG1Feb.js";import"./useLabels-Bj-Yy0gt.js";import"./useButton-CewAlskq.js";import"./useTextField-CG1kIc-t.js";import"./useControlledState-7bsBW9ME.js";import"./useField-CWDFgyK4.js";import"./TextField.module-DdivwlC8.js";import"./Label-BrnzOcVz.js";import"./Dialog-Nc4IiW3G.js";import"./OverlayArrow-bqNE3J8v.js";import"./useResizeObserver-DcWPmTVh.js";import"./Collection-BfmwTdnM.js";import"./index-RfRuf2QY.js";import"./Separator-BMWlUUWn.js";import"./SelectionManager-9t0DIfr5.js";import"./useEvent-BoihJK-v.js";import"./scrollIntoView-BPV88qUk.js";import"./SelectionIndicator-BUB2tGdl.js";import"./useDescription-BW-G7pZE.js";import"./ListKeyboardDelegate-QCwOMow_.js";import"./PressResponder-BBsSKN2P.js";import"./useLocalizedStringFormatter-BGVJ3s-K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Fwdv0CMl.js";import"./getScrollParent-4D2uxju0.js";import"./VisuallyHidden-B_oZwuHi.js";import"./x-A2fBJB1S.js";import"./createLucideIcon-iT6Y2Uaa.js";import"./useLocalizedStringFormatter-BASSYTlJ.js";import"./Heading-CGn3WAQ2.js";import"./Button-Bv7kxC8o.js";import"./Button.module-BB7N-cLd.js";import"./info-xUXU52lg.js";import"./Popover-CDeGAW_D.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
