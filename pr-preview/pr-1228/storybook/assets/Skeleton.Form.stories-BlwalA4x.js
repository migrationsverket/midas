import{j as e,l}from"./iframe-D0FqK1lb.js";import{S as t}from"./Skeleton-DOj-gWsj.js";import{T as p}from"./TextField-ouQD8bQh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B14ZlvAr.js";import"./utils-BMbNOyUc.js";import"./FieldError-D9qv9kV0.js";import"./Text-Du7gyEcw.js";import"./useFocusRing-BD1a5Y2G.js";import"./index-5HzkHfPe.js";import"./index-SIDrXvAb.js";import"./Text-DNU35Fvp.js";import"./RSPContexts-0TxVVo6E.js";import"./Form-B4kYCfIB.js";import"./Group-C-ROvPDj.js";import"./Input-mDw74LWW.js";import"./Hidden-Dhm_4TsG.js";import"./Button-ASP2neQz.js";import"./useLabel-ky8NeYeA.js";import"./useLabels-Dak2com7.js";import"./useButton-pK_0UtxK.js";import"./useTextField-UlbAGD_U.js";import"./useControlledState-C8lWssw-.js";import"./useField-j5hIvejQ.js";import"./TextField.module-DdivwlC8.js";import"./Label-pa7GTQEx.js";import"./Dialog-DYtX3rt-.js";import"./OverlayArrow-BRAHmtAX.js";import"./useResizeObserver-oMKCGDU6.js";import"./Collection-BqqxDhK2.js";import"./index-DHQ1v_AI.js";import"./Separator-BJndn-Pq.js";import"./SelectionManager-CgUlY-2r.js";import"./useEvent-B8pAJ79A.js";import"./scrollIntoView-DLJFvk8W.js";import"./SelectionIndicator-Brnu1DGI.js";import"./useDescription-Df9gIiPP.js";import"./ListKeyboardDelegate-C1t568NK.js";import"./PressResponder-DGMJW-pM.js";import"./useLocalizedStringFormatter-BHS8kRNf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6V37QhV.js";import"./getScrollParent-CbuB2ebi.js";import"./VisuallyHidden-CFNdR6Qu.js";import"./ModalOverlay-BJoZltO4.js";import"./x-CjuTORk7.js";import"./createLucideIcon-B3FFrp2k.js";import"./useLocalizedStringFormatter-CgfN0QE1.js";import"./Heading-DpJ7i1P8.js";import"./Button-BmBlwCLs.js";import"./Button.module-BB7N-cLd.js";import"./info-DsHfgpgH.js";import"./Popover-CHjIIBtG.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
