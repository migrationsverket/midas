import{j as e,l}from"./iframe-BUyS91gW.js";import{S as t}from"./Skeleton-BQgxTRd_.js";import{T as p}from"./TextField-C3qe9L52.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bz71TA_Z.js";import"./utils-DtC5DJlv.js";import"./TextField-Bl349ZRR.js";import"./FieldError-CFfhbF8H.js";import"./Text-BPqpCryx.js";import"./useFocusRing-BaIAxEeU.js";import"./index-fSOK1slO.js";import"./index-BdrDW8xm.js";import"./Text-COkIx5pS.js";import"./RSPContexts--MjZDMmy.js";import"./Form-CRbbeAt1.js";import"./useFormValidation-C60WEHmq.js";import"./Group-Bz0QF0Oo.js";import"./Input-THlk9SG0.js";import"./Hidden-DgRACCJZ.js";import"./Button-BFrQimfv.js";import"./useLabels-Tbmfxorq.js";import"./useButton-CnjpyvMJ.js";import"./useTextField-BfyVSh_-.js";import"./useControlledState-pY5KefEA.js";import"./useField-DOrPhly4.js";import"./TextField.module-1fNSVGjT.js";import"./Label-C6A868Z3.js";import"./Dialog-Z0MjxCmS.js";import"./OverlayArrow-Y6hr8waV.js";import"./useResizeObserver-t9_jvW0e.js";import"./Collection-Dh_MMJJ4.js";import"./index-C4j6v36i.js";import"./Separator-Czy8J2sA.js";import"./SelectionManager-BcWkh7qF.js";import"./useEvent-Cv6pNzgP.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CxkyDs28.js";import"./useDescription-BGG01yMW.js";import"./ListKeyboardDelegate-CP2zV0zS.js";import"./PressResponder-CZlPqYD0.js";import"./useLocalizedStringFormatter-DVHPDbxU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COGeTY64.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DWShOfIn.js";import"./Button-Fgf1rOG6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-p_nb56wi.js";import"./createLucideIcon-B-WbV5NM.js";import"./x-DZYUY6bl.js";import"./Heading-BY0o0N8u.js";import"./info-DXkoRLXy.js";import"./Popover-0CHRPJuo.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
