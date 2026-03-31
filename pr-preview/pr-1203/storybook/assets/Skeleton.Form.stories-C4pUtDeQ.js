import{j as e,l}from"./iframe-BAIFV8Yb.js";import{S as t}from"./Skeleton-BLPRgla3.js";import{T as p}from"./TextField-DDmuIKWS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Da3biel8.js";import"./utils-C4qL7h-Q.js";import"./FieldError-Y1vkCgJL.js";import"./Text-CmPtR76W.js";import"./useFocusRing-btLeUPqX.js";import"./index-mpJUQRSx.js";import"./index-Baj0KArx.js";import"./Text-ygME-eTj.js";import"./RSPContexts-0G2A7Cpm.js";import"./Form-Ck4aH0QB.js";import"./Group-DjhcnqMw.js";import"./Input-BrLA4Eyl.js";import"./Hidden-I3OO9ryl.js";import"./Button-F9PaMeiW.js";import"./useLabel-BgyZguEJ.js";import"./useLabels-CWgWqrCK.js";import"./useButton-CcTZ9cV8.js";import"./useTextField-4k4bOKUa.js";import"./useControlledState-CleADvs5.js";import"./useField-BY0XbHIO.js";import"./TextField.module-DdivwlC8.js";import"./Label-BeEM7kKm.js";import"./Dialog-DcU8VZcA.js";import"./OverlayArrow-D1lOvgYd.js";import"./useResizeObserver-C8d4LO5z.js";import"./Collection-BD2NM9el.js";import"./index-BgNa46qe.js";import"./Separator-CDG0v0GQ.js";import"./SelectionManager-BLAgjyob.js";import"./useEvent-VqD0bu_T.js";import"./scrollIntoView-ChGKlCh8.js";import"./SelectionIndicator-D4XjwJOB.js";import"./useDescription-OhYwP_vB.js";import"./ListKeyboardDelegate-BGul-hJ7.js";import"./PressResponder-C-IVpSMt.js";import"./useLocalizedStringFormatter-B_HxKguN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COpf6ecM.js";import"./getScrollParent-Dq1fMLPX.js";import"./VisuallyHidden-FRjMpRtC.js";import"./x-BbXy3uH4.js";import"./createLucideIcon-CRLMORiX.js";import"./useLocalizedStringFormatter-geOfM1X1.js";import"./Heading-BKllsz58.js";import"./Button-CqpMDFXh.js";import"./Button.module-BB7N-cLd.js";import"./info-DojpgFR3.js";import"./Popover-cRiDaPUy.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
