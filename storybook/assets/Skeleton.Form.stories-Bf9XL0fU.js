import{j as e,l}from"./iframe-t17oHKP1.js";import{S as t}from"./Skeleton-DfWl96va.js";import{T as p}from"./TextField-Dfn_kc9C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bc4rbeQD.js";import"./utils-WfSaqPxO.js";import"./FieldError-CjrPC_pn.js";import"./Text-B1toI6NE.js";import"./useFocusRing-B8_h5nqb.js";import"./index-CGLwXwU8.js";import"./index-Vs6o5933.js";import"./Text-BBzd2BqN.js";import"./RSPContexts-1krLgbtl.js";import"./Form-DCT3rcma.js";import"./Group-XT1qdx_4.js";import"./Input-DvaOvy8x.js";import"./Hidden-XqahJ4vg.js";import"./Button-ofA_m75k.js";import"./useLabel-CVs4fZyR.js";import"./useLabels-Bv9txMFS.js";import"./useButton-CKC-NCyU.js";import"./useTextField-q8zM5BBj.js";import"./useControlledState-CSsGgKlE.js";import"./useField-BAqScliG.js";import"./TextField.module-DdivwlC8.js";import"./Label-BaMC1zUi.js";import"./Dialog-C_pUAPT4.js";import"./OverlayArrow-C8bch5Dq.js";import"./useResizeObserver-iavVuTSL.js";import"./Collection-C_sAio25.js";import"./index-Bk8TkxO4.js";import"./Separator-BTz2ELDx.js";import"./SelectionManager-B2XzSJwl.js";import"./useEvent-BXp6EVoR.js";import"./scrollIntoView-CjKzLxJO.js";import"./SelectionIndicator-C3QJbXC7.js";import"./useDescription-DyoYJd2V.js";import"./ListKeyboardDelegate-CMyLAMym.js";import"./PressResponder-Cn5hz31u.js";import"./useLocalizedStringFormatter-BD3aVe4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKBecmXF.js";import"./getScrollParent-KRPDa9Jf.js";import"./VisuallyHidden-CHb87xmq.js";import"./ModalOverlay-DiGcUtOF.js";import"./x-B3d1tz_Z.js";import"./createLucideIcon-Bh202RVf.js";import"./useLocalizedStringFormatter-B413oFZi.js";import"./Heading-CRmlVJHe.js";import"./Button-DBP_DFRF.js";import"./Button.module-BB7N-cLd.js";import"./info-Co7s_Gt2.js";import"./Popover-B5ZckgCp.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
