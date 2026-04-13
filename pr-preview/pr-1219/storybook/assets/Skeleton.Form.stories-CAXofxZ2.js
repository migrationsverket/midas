import{j as e,l}from"./iframe-Db_qDyjb.js";import{S as t}from"./Skeleton-DMtA5YeK.js";import{T as p}from"./TextField-BqETpf1e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-YWU1ZoUN.js";import"./utils-B1ump1uN.js";import"./FieldError-3n-vV-Ng.js";import"./Text-DysxiSoS.js";import"./useFocusRing-CvFtjn9f.js";import"./index-BrCAN2R3.js";import"./index-rXvRCXG4.js";import"./Text-CV2l2NwE.js";import"./RSPContexts-vbQVcb1z.js";import"./Form-qvxF-3xc.js";import"./Group-Cr5jZpuK.js";import"./Input-BU2rvLfi.js";import"./Hidden-Ck1I1Pl6.js";import"./Button-DmcShG5W.js";import"./useLabel-79lcnvNd.js";import"./useLabels-DU_Qs8Z-.js";import"./useButton-DzefyB67.js";import"./useTextField-DZHRixjc.js";import"./useControlledState-CW90Ui0G.js";import"./useField-C9_g4vAO.js";import"./TextField.module-DdivwlC8.js";import"./Label-DllQlIxW.js";import"./Dialog-CVNNM22j.js";import"./OverlayArrow-1WvfEraS.js";import"./useResizeObserver-BaxQFQ-x.js";import"./Collection-DA76HGew.js";import"./index-3XjXCAx7.js";import"./Separator-CFJPzoDA.js";import"./SelectionManager-C3a8qmxp.js";import"./useEvent-BcyDDH_o.js";import"./scrollIntoView-mNDR3iIh.js";import"./SelectionIndicator-CJDW6T4U.js";import"./useDescription-mlqK3r8Y.js";import"./ListKeyboardDelegate-Cd5NcBIV.js";import"./PressResponder-yU7fGlZ2.js";import"./useLocalizedStringFormatter-DgJKEd-_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dmt42pOw.js";import"./getScrollParent-CSjng6XF.js";import"./VisuallyHidden-DI0T0a8c.js";import"./Modal-CKwhRkPQ.js";import"./x-DpepR7rv.js";import"./createLucideIcon-Dj8isrVr.js";import"./useLocalizedStringFormatter-TCo9J1WR.js";import"./Heading-BUWWv4-M.js";import"./Button-B6sBamwP.js";import"./Button.module-BB7N-cLd.js";import"./info-COhBrfFw.js";import"./Popover-BS8zgk24.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
