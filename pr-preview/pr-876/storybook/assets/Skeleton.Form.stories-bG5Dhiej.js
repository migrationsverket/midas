import{j as e,l}from"./iframe-DK3mrAyo.js";import{S as t}from"./Skeleton-DTXwgAcT.js";import{T as p}from"./TextField-C_yyewi_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bo3zGWVW.js";import"./utils-KWB3V7Ew.js";import"./FieldError-7i4Fax51.js";import"./Text-ChQBgCn7.js";import"./useFocusRing-GGCG3XqX.js";import"./index-BmaOBGQH.js";import"./index-Cy3OoqhK.js";import"./Text-BG4EGVIm.js";import"./RSPContexts-CbpbC2QZ.js";import"./Form-ZU5Jc3do.js";import"./Group-FnEYpQ-A.js";import"./Input-BNeMn4RE.js";import"./Hidden-B9O9f11_.js";import"./Button-Yd8CTw2L.js";import"./useLabel-CoP8Rogk.js";import"./useLabels-Cjb6VPbR.js";import"./useButton-Ee-WcKk0.js";import"./useTextField-CfphWo0U.js";import"./useControlledState-c72KLHwF.js";import"./useField-BURaNJxe.js";import"./TextField.module-DdivwlC8.js";import"./Label-D_tmWt9z.js";import"./Dialog-D9WESYo-.js";import"./OverlayArrow-rKrAE_rE.js";import"./useResizeObserver-NQKT9YoR.js";import"./Collection-DIXCXOkQ.js";import"./index-CepTmLHf.js";import"./Separator-BnWPNY9L.js";import"./SelectionManager-Dknd4-dt.js";import"./useEvent-q7OaXBNw.js";import"./scrollIntoView-DzztdlRp.js";import"./SelectionIndicator-tPL3-k8A.js";import"./useDescription-e3GpwAAN.js";import"./ListKeyboardDelegate-jeW_soEh.js";import"./PressResponder-8JpLfvHI.js";import"./useLocalizedStringFormatter-CXfqNWhw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DuQmEC3G.js";import"./getScrollParent-CsmfW8t8.js";import"./VisuallyHidden-CuCKnYKC.js";import"./ModalOverlay-CfdiJ_2P.js";import"./x-Cj5OGhdg.js";import"./createLucideIcon-ZHubZ-OE.js";import"./useLocalizedStringFormatter-DGfSF0iv.js";import"./Heading-D2LEgSAb.js";import"./Button-BKk1KYPK.js";import"./Button.module-BB7N-cLd.js";import"./info-KL40TE4F.js";import"./Popover-B-7tZGlC.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
