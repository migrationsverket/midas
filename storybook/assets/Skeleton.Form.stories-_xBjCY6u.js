import{j as e,l}from"./iframe-CWDqI9As.js";import{S as t}from"./Skeleton-DWKP0b77.js";import{T as p}from"./TextField-CAiBKyNn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-kWnqtP6B.js";import"./utils-dBjUBpAV.js";import"./FieldError-BFTOWK8w.js";import"./Text-CNhsvp3k.js";import"./useFocusRing-CGI_ER4d.js";import"./index-BPbsZXYC.js";import"./index-B9h6eKZl.js";import"./Text-Bg0gZzcQ.js";import"./RSPContexts-BANsKMWb.js";import"./Form-Bi-96Kx0.js";import"./Group-EJLZZM0Q.js";import"./Input-Cd4gARcs.js";import"./Hidden-Cgjt9oWa.js";import"./Button-ChgRUqyy.js";import"./useLabel-BVrFk9UL.js";import"./useLabels-BvpY06Hn.js";import"./useButton-C4i5Q2ts.js";import"./useTextField-BMHVb6gN.js";import"./useControlledState-7TZpR_sr.js";import"./useField-C8fPh8Wl.js";import"./TextField.module-DdivwlC8.js";import"./Label-BZyuXFgi.js";import"./Dialog-DG6MYKjB.js";import"./OverlayArrow-DsWYENJs.js";import"./useResizeObserver-U8EiD1vM.js";import"./Collection-BCFGKp7k.js";import"./index-CQlCIbRD.js";import"./Separator-SJgp7vcw.js";import"./SelectionManager-CRbMuRcS.js";import"./useEvent-Cr5dRUc0.js";import"./scrollIntoView-CWyOkl1L.js";import"./SelectionIndicator-SU9AKZhk.js";import"./useDescription-DPaZj1pb.js";import"./ListKeyboardDelegate-DfYbDCAE.js";import"./PressResponder-CcyPq1JI.js";import"./useLocalizedStringFormatter-BpizLsAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-By6ANJoT.js";import"./getScrollParent-_UwOfSKS.js";import"./VisuallyHidden-CSPSoyjM.js";import"./ModalOverlay-gRwerX64.js";import"./x-CzmzQROS.js";import"./createLucideIcon-CQ9K894w.js";import"./useLocalizedStringFormatter-CoCxcMtj.js";import"./Heading-mvOStMwp.js";import"./Button-CT52BdlE.js";import"./Button.module-BB7N-cLd.js";import"./info-twn1bu6v.js";import"./Popover-BFfrnmTU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
