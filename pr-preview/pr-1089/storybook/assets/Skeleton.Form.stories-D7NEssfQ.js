import{j as e,l}from"./iframe-DyBiNx2q.js";import{S as t}from"./Skeleton-DyLSc8ha.js";import{T as p}from"./TextField-BVzvHUeg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DsOFQwsS.js";import"./utils-B5dKaEwK.js";import"./FieldError-SXTa4faB.js";import"./Text-CvUxrlBC.js";import"./useFocusRing-wn7y19LG.js";import"./index-Buskhl-p.js";import"./index-4ysC-kQu.js";import"./Text-ByDcSGxm.js";import"./RSPContexts-D9jYRv23.js";import"./Form-CV4_UMc2.js";import"./useFormValidation-CBFd9wPD.js";import"./Group-Dyn1b4rR.js";import"./Input-Cap7sLnu.js";import"./Hidden-Cb-0RftD.js";import"./Button-BJJCCEqe.js";import"./useLabels-CLX48ijd.js";import"./useButton-CHwzBhtJ.js";import"./useTextField-Boay7tH5.js";import"./useControlledState-Q0-sVA1t.js";import"./useField-DmnvQ3tf.js";import"./TextField.module-DdivwlC8.js";import"./Label-BVpcOUgL.js";import"./Dialog-DeFpsIVJ.js";import"./OverlayArrow-BugJ5fhj.js";import"./useResizeObserver-DxlR8MyY.js";import"./Collection-WQ9upkmY.js";import"./index-DjNeHl00.js";import"./Separator-DZgmdvZl.js";import"./SelectionManager-wh13-yOm.js";import"./useEvent-BM6vajM-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEhCheiQ.js";import"./useDescription-BoU-4n_-.js";import"./ListKeyboardDelegate-UyVUUCf3.js";import"./PressResponder-CWPPNM0Z.js";import"./useLocalizedStringFormatter-CjE048XI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dh51ywHK.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-rSrQGzQd.js";import"./Button-DowFNeCQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-bUUJR2W9.js";import"./createLucideIcon-C_ZTugQV.js";import"./x-DRhGVBqX.js";import"./Heading-0MkOW6aC.js";import"./info-Cd4G9P1x.js";import"./Popover-B60IDK7w.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
