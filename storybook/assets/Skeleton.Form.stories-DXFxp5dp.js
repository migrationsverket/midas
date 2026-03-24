import{j as e,l}from"./iframe-Cg9cst3Z.js";import{S as t}from"./Skeleton-rhT8Aieq.js";import{T as d}from"./TextField-jUbeOzxy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BDnOMrdf.js";import"./utils-D2II4bp7.js";import"./FieldError-VvIdynkJ.js";import"./Text-B_9OfGMe.js";import"./useFocusRing-tXHDCFm3.js";import"./index-BFb9kRGB.js";import"./index-DWerqO7l.js";import"./Text-Bie4Jf82.js";import"./RSPContexts-CP6-3Q2F.js";import"./Form-_xeBhpeE.js";import"./Group-BnEbGSsv.js";import"./Input-C5Lj_Wzf.js";import"./Hidden-BgIlWTMH.js";import"./Button-ou8EhBUQ.js";import"./useLabels-CiePX7Dn.js";import"./useButton-DC2n-s3O.js";import"./useTextField-DFzhgPSu.js";import"./useControlledState-L5_oq_SX.js";import"./useField-BKczmHIS.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cc07-XwP.js";import"./Dialog-qbthertG.js";import"./OverlayArrow-BJ-UO43V.js";import"./useResizeObserver-C3fGE7gx.js";import"./Collection-Ce5K4RD7.js";import"./index-Li7LmgrW.js";import"./Separator-De7LVMOu.js";import"./SelectionManager-CE7XN0iM.js";import"./useEvent-CEsrahCK.js";import"./scrollIntoView-DwU_eyNu.js";import"./SelectionIndicator-D78Fscba.js";import"./useDescription-BzGroFUq.js";import"./ListKeyboardDelegate-0O8vG3nd.js";import"./PressResponder-B7Fmu7KZ.js";import"./useLocalizedStringFormatter-D4h7c2FO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YicOoIp9.js";import"./getScrollParent-D0UAKGdc.js";import"./VisuallyHidden-CqMj_RBf.js";import"./x-BSr4SWE3.js";import"./createLucideIcon-DCEeRogg.js";import"./useLocalizedStringFormatter-CHcVYRW-.js";import"./Heading-Csha1cFf.js";import"./Button-rHVBUcPU.js";import"./Button.module-BB7N-cLd.js";import"./info-DPFQ6gO1.js";import"./Popover-DBhzyzXV.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
