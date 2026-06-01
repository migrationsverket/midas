import{j as e,l}from"./iframe-CwW8sN4S.js";import{S as t}from"./Skeleton-Bpp_3svG.js";import{T as p}from"./TextField-DOCPHsXD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-GW39TkAM.js";import"./utils-B_M889tP.js";import"./FieldError-BlJWYskW.js";import"./Text-BE9Sihnv.js";import"./useFocusRing-cgdKMhcs.js";import"./index-Bf5NZhsL.js";import"./index-BaeC46Uu.js";import"./Text-C5uja355.js";import"./RSPContexts-szw5AFHr.js";import"./Form-CUc0WOwk.js";import"./Group-YWsXtnDF.js";import"./Input-D9NlLKsA.js";import"./Hidden-CVoubVAI.js";import"./Button-C3AuE87p.js";import"./useLabel-DoKdb579.js";import"./useLabels-CwIlq1fJ.js";import"./useButton-CZZnZ_mn.js";import"./useTextField-Boz7dTUi.js";import"./useControlledState-CC34MHAe.js";import"./useField-C2elZhF8.js";import"./TextField.module-DdivwlC8.js";import"./Label-BtXdhNCg.js";import"./Dialog-taGEIRz0.js";import"./OverlayArrow-Dhpegq9P.js";import"./useResizeObserver-DIXIeOSr.js";import"./Collection-AVCAnE9e.js";import"./index-ZmllTkBI.js";import"./Separator-D1lrfBKJ.js";import"./SelectionManager-DjP27Hq6.js";import"./useEvent-CeuSem5l.js";import"./scrollIntoView-DJ_jtxbK.js";import"./SelectionIndicator-B23FeEQ3.js";import"./useDescription-UAInHKf4.js";import"./ListKeyboardDelegate-CQEvvxFH.js";import"./PressResponder-DDLeQnn7.js";import"./useLocalizedStringFormatter-DJpiZ4xv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsnOxs_W.js";import"./getScrollParent-DKE2Book.js";import"./VisuallyHidden-BudlR0yM.js";import"./ModalOverlay-K-4HGfJs.js";import"./x-DNLXf0Tv.js";import"./createLucideIcon-DzXM4i8f.js";import"./useLocalizedStringFormatter-eUY7Q8gu.js";import"./Heading-Bb8pQtsc.js";import"./Button-BNJwH1Cm.js";import"./Button.module-BB7N-cLd.js";import"./info-wfKsbo8I.js";import"./Popover-DbYbPZ55.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
