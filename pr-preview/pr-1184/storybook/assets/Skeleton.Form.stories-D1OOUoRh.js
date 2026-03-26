import{j as e,l}from"./iframe-2N4-NX-9.js";import{S as t}from"./Skeleton-DUuix9LL.js";import{T as p}from"./TextField-CKm7zxOB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BQBndOiG.js";import"./utils-BDyzcRVF.js";import"./FieldError-DbzXWBkQ.js";import"./Text-CG1bHrxb.js";import"./useFocusRing-CqNKm5um.js";import"./index-eEiNBmo6.js";import"./index-Boj7wyxf.js";import"./Text-C8oRKnIX.js";import"./RSPContexts-euEKx97A.js";import"./Form-CJZMhU9i.js";import"./Group-DSrCwX2F.js";import"./Input-jt-MUZjv.js";import"./Hidden-ByQp7cFw.js";import"./Button-BdOK34vS.js";import"./useLabel-Dt5gD5WC.js";import"./useLabels-BXMOGpY3.js";import"./useButton-DXuSSmPY.js";import"./useTextField-DHcMB_qS.js";import"./useControlledState-CJB9gvxC.js";import"./useField-BL1xHxSq.js";import"./TextField.module-DdivwlC8.js";import"./Label-DI_SKPKu.js";import"./Dialog-zxsFuGS2.js";import"./OverlayArrow-C8HxHgiy.js";import"./useResizeObserver-CUp6itZx.js";import"./Collection-jtJmnuzI.js";import"./index-C5BRSQvZ.js";import"./Separator-CrpuFQJS.js";import"./SelectionManager-n4T0I50n.js";import"./useEvent-Br-HnPPz.js";import"./scrollIntoView-7_tk7XK0.js";import"./SelectionIndicator-Cx6zjUGL.js";import"./useDescription-QUyLBt1z.js";import"./ListKeyboardDelegate-DzmftUWc.js";import"./PressResponder-B9LAUkeH.js";import"./useLocalizedStringFormatter-B22JGswt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Fa_xDcNS.js";import"./getScrollParent-zIWWR_Mu.js";import"./VisuallyHidden-BgOvzTZH.js";import"./x-Ceu0gGLD.js";import"./createLucideIcon-BP_ZdL8b.js";import"./useLocalizedStringFormatter-DUswzrwG.js";import"./Heading-faSUuyYq.js";import"./Button-BhHUqRPQ.js";import"./Button.module-BB7N-cLd.js";import"./info-Dtcd-21w.js";import"./Popover-DA1b5ic1.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
