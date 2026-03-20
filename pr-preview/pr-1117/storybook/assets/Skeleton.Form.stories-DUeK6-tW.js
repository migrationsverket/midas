import{j as e,l}from"./iframe-CNCfLPs3.js";import{S as t}from"./Skeleton-C0ihUbUs.js";import{T as d}from"./TextField-Cm0W_gs_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CblNqoCK.js";import"./utils-e7FQN5yO.js";import"./FieldError-R8U9vf-q.js";import"./Text-CBvTFJIS.js";import"./useFocusRing-CUoBtFMe.js";import"./index-BHVmJuNO.js";import"./index-CnTOG63q.js";import"./Text-o_j_xe-L.js";import"./RSPContexts-BnqYv-3I.js";import"./Form-9gVNWF04.js";import"./Group-C1_TooTY.js";import"./Input-DDbN1Lhg.js";import"./Hidden-CtoRdWlv.js";import"./Button-BEZ5_JXL.js";import"./useLabels-dz24dBNN.js";import"./useButton-Bz3E-ByR.js";import"./useTextField-B765ZhEH.js";import"./useControlledState-D13ccspj.js";import"./useField-Bqm8EBTl.js";import"./TextField.module-DdivwlC8.js";import"./Label-CLhgiEFO.js";import"./Dialog-rmPMKsmi.js";import"./OverlayArrow-LTIp443W.js";import"./useResizeObserver-Bfz1mY_Q.js";import"./Collection-D01OqlV7.js";import"./index-CLQacGmR.js";import"./Separator-BfaZOgvP.js";import"./SelectionManager-CaxbLyMN.js";import"./useEvent-DnGFAjoz.js";import"./scrollIntoView-Crvi9te9.js";import"./SelectionIndicator-DulXOkPK.js";import"./useDescription-C9T5AWLx.js";import"./ListKeyboardDelegate-grn2ESRe.js";import"./PressResponder-BMgq1URQ.js";import"./useLocalizedStringFormatter-CmzWN2-U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D_mcTSZM.js";import"./getScrollParent-F6A2WJl-.js";import"./VisuallyHidden-Cq4Z2n0K.js";import"./x-BvtqgiYK.js";import"./createLucideIcon-Fn0POOLU.js";import"./useLocalizedStringFormatter-BTk8Kzh-.js";import"./Heading-CKoKonSI.js";import"./Button-OnAqZWBY.js";import"./Button.module-BB7N-cLd.js";import"./info-BfJzzHpg.js";import"./Popover-XEz2q5Q3.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
